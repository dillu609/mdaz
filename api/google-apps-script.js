/**
 * Google Apps Script for handling form submissions to Google Sheets
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a Google Sheet and note the Sheet ID from the URL
 * 5. Replace 'YOUR_SHEET_ID' with your actual Sheet ID
 * 6. Deploy as a web app with execute permissions for "Anyone"
 * 7. Copy the web app URL and use it in your PHP script
 */

// Replace with your Google Sheet ID
const SHEET_ID = 'YOUR_SHEET_ID';
const SHEET_NAME = 'Contact Form Submissions';

function doPost(e) {
  try {
    // Get the spreadsheet
    const sheet = getOrCreateSheet();
    
    // Parse form data
    const formData = e.parameter;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.projectType || !formData.message) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Missing required fields'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Prepare row data
    const rowData = [
      new Date(), // Timestamp
      formData.name || '',
      formData.email || '',
      formData.company || '',
      formData.phone || '',
      formData.projectType || '',
      formData.budget || '',
      formData.timeline || '',
      formData.message || '',
      formData.ip_address || '',
      formData.user_agent || '',
      'New' // Status
    ];
    
    // Add data to sheet
    sheet.appendRow(rowData);
    
    // Send email notification (optional)
    sendEmailNotification(formData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Internal server error'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Company',
        'Phone',
        'Project Type',
        'Budget',
        'Timeline',
        'Message',
        'IP Address',
        'User Agent',
        'Status'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Timestamp
      sheet.setColumnWidth(2, 120); // Name
      sheet.setColumnWidth(3, 200); // Email
      sheet.setColumnWidth(4, 150); // Company
      sheet.setColumnWidth(5, 120); // Phone
      sheet.setColumnWidth(6, 150); // Project Type
      sheet.setColumnWidth(7, 100); // Budget
      sheet.setColumnWidth(8, 100); // Timeline
      sheet.setColumnWidth(9, 300); // Message
      sheet.setColumnWidth(10, 120); // IP Address
      sheet.setColumnWidth(11, 200); // User Agent
      sheet.setColumnWidth(12, 80);  // Status
    }
    
    return sheet;
    
  } catch (error) {
    console.error('Error accessing sheet:', error);
    throw new Error('Failed to access Google Sheet');
  }
}

function sendEmailNotification(formData) {
  try {
    // Replace with your notification email
    const notificationEmail = 'hello@mdazsolution.com';
    
    const subject = `New Contact Form Submission from ${formData.name}`;
    
    const body = `
New contact form submission received:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Project Type: ${formData.projectType}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}

Submitted at: ${new Date().toLocaleString()}
IP Address: ${formData.ip_address}

Please respond to this inquiry within 24 hours.
    `;
    
    MailApp.sendEmail({
      to: notificationEmail,
      subject: subject,
      body: body
    });
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw error here as form submission should still succeed
  }
}

// Test function for debugging
function testFormSubmission() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      phone: '555-123-4567',
      projectType: 'website',
      budget: '5k-15k',
      timeline: '1-month',
      message: 'This is a test submission',
      ip_address: '127.0.0.1',
      user_agent: 'Test Agent'
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
}