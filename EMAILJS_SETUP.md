# EmailJS Setup Guide for Amajungle Contact Form

## 🚀 Quick Setup (5 minutes)

Your contact form is now integrated with EmailJS! Follow these steps to make it live:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended for testing)
4. Follow the connection steps
5. **Copy your Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template

1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Service Interested: {{service}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Copy your Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `abc123XYZ`)
3. Copy it

### Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abc123XYZ
```

### Step 6: Test Locally

```bash
# Restart dev server to load new env variables
pnpm dev
```

Visit `http://localhost:5173/contact` and submit a test form!

### Step 7: Deploy to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

## 📧 Email Template Variables

Your form sends these variables to EmailJS:

| Variable | Description | Example |
|----------|-------------|---------|
| `from_name` | Sender's name | John Doe |
| `from_email` | Sender's email | john@example.com |
| `phone` | Phone number (optional) | +1 234 567 8900 |
| `company` | Company name (optional) | Acme Corp |
| `service` | Selected service | PPC Campaign Management |
| `message` | User's message | I need help with... |
| `reply_to` | Reply-to email | john@example.com |

## 🎨 Customize Email Template (Optional)

You can customize the email template in EmailJS dashboard:

**Professional Template Example:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2d6a4f;">New Lead from Amajungle Website</h2>
  
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{from_name}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{from_email}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{phone}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{company}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{service}}</td>
    </tr>
  </table>
  
  <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px;">
    <strong>Message:</strong>
    <p>{{message}}</p>
  </div>
  
  <p style="margin-top: 20px; color: #666; font-size: 12px;">
    Sent from Amajungle contact form
  </p>
</div>
```

## 📊 EmailJS Free Tier Limits

- **200 emails per month** (Free)
- Upgrade to paid plan for more:
  - Personal: $7/month (1,000 emails)
  - Professional: $14/month (5,000 emails)

## 🔒 Security Notes

1. ✅ `.env` file is already in `.gitignore` (your keys are safe)
2. ✅ EmailJS public keys are safe to use client-side
3. ✅ Set up domain whitelist in EmailJS for production (optional but recommended)

### Domain Whitelist (Recommended)

In EmailJS dashboard:
1. Go to **Email Services** → Your Service
2. Add allowed domains:
   - `localhost:5173` (for local dev)
   - `amajungle.vercel.app` (for production)
   - Your custom domain (if any)

## 🐛 Troubleshooting

### Form not sending emails?

1. **Check browser console** for errors
2. **Verify env variables** are loaded:
   ```javascript
   console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
   ```
3. **Check EmailJS dashboard** for delivery status
4. **Check spam folder** in receiving email
5. **Restart dev server** after changing `.env`

### Common Errors

**Error: "Service ID is invalid"**
- Check if Service ID matches EmailJS dashboard
- Verify env variable is loaded

**Error: "Template ID is invalid"**
- Ensure template exists and is active in EmailJS
- Check spelling of template ID

**Error: "Public key is invalid"**
- Get latest public key from Account settings
- Remove any extra spaces from .env file

## 🎯 Next Steps

After EmailJS is working:

1. **Test thoroughly** on multiple devices
2. **Set up autoresponder** (optional) in EmailJS
3. **Monitor submissions** in EmailJS dashboard
4. **Consider upgrading** if you exceed 200 emails/month
5. **Add Google Analytics** to track form submissions

## 🔗 Useful Links

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)

## 💡 Alternative Solutions

If you outgrow EmailJS or need more control:

1. **SendGrid** - Robust email API (100 emails/day free)
2. **Vercel Serverless Functions** - Custom backend logic
3. **Resend** - Modern email API (100 emails/day free)
4. **AWS SES** - Enterprise-grade (62,000 emails/month free)

---

**Questions?** Check the [troubleshooting section](#-troubleshooting) or EmailJS support.
