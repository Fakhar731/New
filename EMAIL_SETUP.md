# Email Notification Setup Guide

## Overview
This e-commerce application now includes Shopify-like email notifications that send order details to your admin email when a checkout is completed.

## Features
- ✅ Beautiful HTML email templates
- ✅ Complete order details including customer info, items, and totals
- ✅ Professional styling with responsive design
- ✅ Both HTML and text versions
- ✅ Automatic sending on order completion

## Setup Instructions

### 1. Create Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# Email Configuration for Order Notifications
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourstore.com

# NextAuth Configuration (if using authentication)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 2. Gmail Setup (Recommended)

#### Option A: App Password (Recommended)
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → App passwords
   - Select "Mail" and your device
   - Copy the generated password
4. Use your Gmail address as `EMAIL_USER`
5. Use the app password as `EMAIL_PASS`

#### Option B: Less Secure Apps (Not Recommended)
1. Enable "Less secure app access" in your Google Account
2. Use your regular Gmail password as `EMAIL_PASS`

### 3. Other Email Providers
You can modify the email service in `lib/emailService.ts` to use other providers:

```typescript
// For Outlook/Hotmail
this.transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// For custom SMTP
this.transporter = nodemailer.createTransport({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

## Email Template Features

### HTML Email Includes:
- 🎨 Professional gradient header
- 📋 Complete order details
- 👤 Customer information
- 🛍️ Order items with images
- 💰 Price breakdown
- 🔗 Direct link to admin panel

### Text Email Includes:
- 📝 Plain text version for email clients that don't support HTML
- 📊 All order information in readable format

## Testing

### 1. Test Email Configuration
You can test the email setup by placing a test order through your checkout form.

### 2. Check Email Delivery
- Check your admin email inbox
- Look for emails with subject: "🛒 New Order Received - [ORDER_NUMBER]"
- Verify all order details are included

### 3. Troubleshooting
If emails are not being sent:

1. **Check Environment Variables**
   ```bash
   # Verify your .env.local file exists and has correct values
   cat .env.local
   ```

2. **Check Console Logs**
   - Look for email-related errors in your server console
   - Check for "Order notification email sent successfully" messages

3. **Common Issues**
   - Gmail app password not generated correctly
   - 2FA not enabled for Gmail
   - Firewall blocking SMTP connections
   - Incorrect email credentials

## Customization

### Modify Email Template
Edit `lib/emailService.ts` to customize:
- Email styling and colors
- Information displayed
- Email subject line
- Admin email address

### Add Customer Email
To also send confirmation emails to customers, add a new method:

```typescript
async sendCustomerConfirmation(orderData: OrderEmailData) {
  // Similar to sendOrderNotification but sent to customer.email
}
```

## Security Notes

1. **Never commit `.env.local` to version control**
2. **Use app passwords instead of regular passwords**
3. **Keep your email credentials secure**
4. **Consider using environment-specific email addresses**

## Production Deployment

For production deployment:

1. **Use a dedicated email service** (SendGrid, Mailgun, etc.)
2. **Set up proper DNS records** for email deliverability
3. **Monitor email delivery rates**
4. **Implement email queuing** for high-volume stores

## Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify your email credentials
3. Test with a simple email client first
4. Consider using a dedicated email service for production 