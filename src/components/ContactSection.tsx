import SectionWrapper from "./SectionWrapper";
import ContactForm from "./ContactForm";

const ContactSection = () => (
  <SectionWrapper id="contact" className="contact">
    <h2>Ready to Grow Your Amazon Business?</h2>
    <p className="section-description">
      Fill out the form below and we'll get back to you within 24 hours to discuss your Amazon goals.
    </p>
    
    <ContactForm />
    
    <div className="contact-alternative">
      <p>Prefer to reach out directly?</p>
      <div className="contact-cta-group">
        <a href="mailto:hello@amajungle.com" className="cta-btn secondary">
          📧 Email Us
        </a>
        <a href="tel:+6309954505206" className="cta-btn secondary">
          📞 Call Us
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default ContactSection;