import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS Integration
      // Get your credentials from: https://www.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          company: data.company || 'Not provided',
          service: data.service,
          message: data.message,
          reply_to: data.email,
        },
        publicKey
      );
      
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <div className="input-with-icon">
              <span className="input-icon">👤</span>
              <input
                id="name"
                type="text"
                {...register('name')}
                placeholder="John Doe"
                className={errors.name ? 'error' : ''}
              />
            </div>
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <div className="input-with-icon">
              <span className="input-icon">📧</span>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder="john@example.com"
                className={errors.email ? 'error' : ''}
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-with-icon">
              <span className="input-icon">📱</span>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <div className="input-with-icon">
              <span className="input-icon">🏢</span>
              <input
                id="company"
                type="text"
                {...register('company')}
                placeholder="Your Company"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service">
            Service Interested In <span className="required">*</span>
          </label>
          <select
            id="service"
            {...register('service')}
            className={errors.service ? 'error' : ''}
          >
            <option value="">Select a service...</option>
            <option value="fba-setup">FBA Account Setup & Optimization</option>
            <option value="ppc-management">Amazon PPC Campaign Management</option>
            <option value="account-health">Amazon Account Health Management</option>
            <option value="listing-optimization">Product Listing Optimization</option>
            <option value="brand-protection">Brand Protection & Registry</option>
            <option value="inventory-management">Inventory & Supply Chain Management</option>
            <option value="account-reinstatement">Account Reinstatement</option>
            <option value="consultation">General Consultation</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <span className="error-message">{errors.service.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            {...register('message')}
            placeholder="Tell us about your Amazon business and how we can help..."
            rows={6}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && (
            <span className="error-message">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className={`cta-btn main submit-btn ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="form-status success">
            <span className="status-icon">✓</span>
            Thank you! We'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-status error">
            <span className="status-icon">✗</span>
            Something went wrong. Please try again or email us directly.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
