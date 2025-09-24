<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Configuration - Replace with your actual Google Apps Script Web App URL
$GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    $required_fields = ['name', 'email', 'company', 'projectType', 'message'];
    $missing_fields = [];
    
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            $missing_fields[] = $field;
        }
    }
    
    if (!empty($missing_fields)) {
        http_response_code(400);
        echo json_encode([
            'success' => false, 
            'message' => 'Missing required fields: ' . implode(', ', $missing_fields)
        ]);
        exit();
    }
    
    // Validate email format
    if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            'success' => false, 
            'message' => 'Invalid email format'
        ]);
        exit();
    }
    
    // Sanitize input data
    $form_data = [
        'name' => htmlspecialchars(trim($input['name'])),
        'email' => htmlspecialchars(trim($input['email'])),
        'company' => htmlspecialchars(trim($input['company'])),
        'phone' => htmlspecialchars(trim($input['phone'] ?? '')),
        'projectType' => htmlspecialchars(trim($input['projectType'])),
        'budget' => htmlspecialchars(trim($input['budget'] ?? '')),
        'timeline' => htmlspecialchars(trim($input['timeline'] ?? '')),
        'message' => htmlspecialchars(trim($input['message'])),
        'timestamp' => date('Y-m-d H:i:s'),
        'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'
    ];
    
    // Prepare data for Google Sheets
    $post_data = http_build_query($form_data);
    
    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $GOOGLE_SCRIPT_URL);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_USERAGENT, 'MDAZ Solution Contact Form');
    
    // Execute request
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_error = curl_error($ch);
    curl_close($ch);
    
    // Check for cURL errors
    if ($curl_error) {
        error_log("cURL Error: " . $curl_error);
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Failed to submit form. Please try again later.'
        ]);
        exit();
    }
    
    // Check HTTP response code
    if ($http_code !== 200) {
        error_log("Google Sheets API Error: HTTP " . $http_code . " - " . $response);
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Failed to submit form. Please try again later.'
        ]);
        exit();
    }
    
    // Log successful submission
    error_log("Form submitted successfully for: " . $form_data['email']);
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
        'data' => [
            'name' => $form_data['name'],
            'email' => $form_data['email'],
            'company' => $form_data['company'],
            'projectType' => $form_data['projectType']
        ]
    ]);
    
} catch (Exception $e) {
    error_log("Form submission error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'An unexpected error occurred. Please try again later.'
    ]);
}
?>