# Email Service Integration Guide

## Quick Setup Options for Contact Form

Your contact form is ready and fully functional except for the actual email sending. Here are three easy options:

---

## Option 1: EmailJS (Recommended - Easiest) ⭐

**Pros:** No backend needed, free tier available, 5 minutes setup
**Cons:** Emails go through third-party service

### Setup Steps:

1. **Install EmailJS:**
```bash
pnpm add @emailjs/browser
```

2. **Create Free Account:**
- Go to https://www.emailjs.com/
- Sign up for free account
- Get your Service ID, Template ID, and Public Key

3. **Update ContactForm.tsx:**

```typescript
// Add import at top of file
import emailjs from '@emailjs/browser';

// Replace the onSubmit function:
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // Get from EmailJS dashboard
      'YOUR_TEMPLATE_ID',     // Get from EmailJS dashboard
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company,
        service: data.service,
        message: data.message,
        reply_to: data.email,
      },
      'YOUR_PUBLIC_KEY'       // Get from EmailJS dashboard
    );
    
    setSubmitStatus('success');
    reset();
    setTimeout(() => setSubmitStatus('idle'), 5000);
  } catch (error) {
    console.error('Email send error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

4. **EmailJS Template Example:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interested: {{service}}

Message:
{{message}}
```

**Free Tier:** 200 emails/month

---

## Option 2: Vercel Serverless Function (Best for Production)

**Pros:** Full control, secure, no third-party
**Cons:** Requires backend code

### Setup Steps:

1. **Create API Route:**

Create file: `api/contact.ts`

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, service, message } = req.body;

    const msg = {
      to: 'hello@amajungle.com',
      from: 'noreply@amajungle.com', // Must be verified in SendGrid
      replyTo: email,
      subject: `New Contact Form: ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Service: ${service}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

2. **Install SendGrid:**
```bash
pnpm add @sendgrid/mail
pnpm add -D @vercel/node
```

3. **Update ContactForm.tsx:**

```typescript
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Failed to send');

    setSubmitStatus('success');
    reset();
    setTimeout(() => setSubmitStatus('idle'), 5000);
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

4. **Add Environment Variable in Vercel:**
- Go to your Vercel project settings
- Add `SENDGRID_API_KEY` with your SendGrid API key

**Cost:** SendGrid free tier: 100 emails/day

---

## Option 3: Resend (Modern Alternative)

**Pros:** Modern, easy API, good free tier
**Cons:** Newer service

### Setup:

1. **Install Resend:**
```bash
pnpm add resend
```

2. **Create API Route:** `api/contact.ts`

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, service, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Amajungle Contact <onboarding@resend.dev>',
      to: ['hello@amajungle.com'],
      replyTo: email,
      subject: `New Contact Form: ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

3. **Update ContactForm.tsx** (same as Option 2)

**Free Tier:** 100 emails/day, 3,000 emails/month

---

## Comparison

| Feature | EmailJS | Vercel + SendGrid | Vercel + Resend |
|---------|---------|-------------------|-----------------|
| Setup Time | 5 min | 20 min | 20 min |
| Backend Needed | No | Yes | Yes |
| Free Tier | 200/month | 100/day | 100/day |
| Best For | Quick launch | Production | Modern stack |
| Email Customization | Medium | High | High |
| Security | Good | Excellent | Excellent |

---

## Recommendation

**For Quick Launch (Today):** Use EmailJS
**For Production (This Week):** Use Vercel + SendGrid or Resend

---

## Testing Checklist

After implementing email service:

- [ ] Test successful submission
- [ ] Test validation errors
- [ ] Test email received at hello@amajungle.com
- [ ] Test reply-to address works
- [ ] Test mobile form submission
- [ ] Test error handling (disconnect internet)
- [ ] Test spam prevention (add rate limiting)

---

## Rate Limiting (Recommended)

Add to prevent spam:

```typescript
// Simple client-side rate limiting
const [lastSubmit, setLastSubmit] = useState<number>(0);

const onSubmit = async (data: ContactFormData) => {
  const now = Date.now();
  if (now - lastSubmit < 60000) { // 1 minute cooldown
    setSubmitStatus('error');
    return;
  }
  
  setLastSubmit(now);
  // ... rest of submission logic
};
```

---

## Support

If you need help choosing or implementing any option, check:
- EmailJS: https://www.emailjs.com/docs/
- SendGrid: https://docs.sendgrid.com/
- Resend: https://resend.com/docs/
- Vercel Functions: https://vercel.com/docs/functions/
