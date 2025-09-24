# Google Sheets Form Submission Setup Guide

This guide will help you set up the PHP script to submit contact form data to Google Sheets.

## Prerequisites

- A Google account
- Web hosting with PHP support
- Basic understanding of Google Apps Script

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "MDAZ Solution - Contact Form Submissions"
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

## Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `api/google-apps-script.js`
4. Replace `YOUR_SHEET_ID` with your actual Sheet ID from Step 1
5. Replace `hello@mdazsolution.com` with your notification email
6. Save the project (Ctrl+S or Cmd+S)

## Step 3: Deploy the Script

1. Click "Deploy" → "New deployment"
2. Click the gear icon next to "Type" and select "Web app"
3. Set the following:
   - **Description**: "MDAZ Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/SCRIPT_ID/exec`)

## Step 4: Configure PHP Script

1. Open `api/submit-form.php`
2. Replace `YOUR_SCRIPT_ID` in the `$GOOGLE_SCRIPT_URL` variable with your actual script URL from Step 3
3. Upload the PHP file to your web server in the `/api/` directory

## Step 5: Test the Setup

1. Go to your contact page
2. Fill out and submit the form
3. Check your Google Sheet - you should see a new row with the form data
4. Check your email for the notification

## Troubleshooting

### Common Issues:

1. **"Script function not found"**
   - Make sure you've saved the Google Apps Script
   - Ensure the function name is `doPost`

2. **"Permission denied"**
   - Check that the script is deployed with "Anyone" access
   - Verify the Sheet ID is correct

3. **"Form not submitting"**
   - Check browser console for JavaScript errors
   - Verify the PHP script URL is correct
   - Ensure your server supports PHP and cURL

4. **"No email notifications"**
   - Check spam folder
   - Verify the notification email address is correct
   - Gmail may require additional permissions for sending emails

### Testing the Google Apps Script:

1. In the Apps Script editor, select the `testFormSubmission` function
2. Click "Run" to test
3. Check the execution log for any errors

## Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **Input Validation**: The script includes basic validation, but you may want to add more
3. **CAPTCHA**: Consider adding reCAPTCHA for additional spam protection
4. **HTTPS**: Ensure your website uses HTTPS for secure form submission

## Customization

### Adding New Form Fields:

1. Update the form in `src/pages/Contact.tsx`
2. Add the new field to the `formData` state
3. Update the PHP script to handle the new field
4. Update the Google Apps Script to include the new field in the sheet
5. Add the new column header to the sheet setup

### Changing Email Template:

Edit the `sendEmailNotification` function in the Google Apps Script to customize the email format.

### Adding Auto-Responses:

You can modify the Google Apps Script to send automatic thank-you emails to form submitters using their provided email address.

## Support

If you encounter issues:

1. Check the browser console for JavaScript errors
2. Check your web server's PHP error logs
3. Check the Google Apps Script execution log
4. Verify all URLs and IDs are correct

For additional help, consult the Google Apps Script documentation or contact your web developer.