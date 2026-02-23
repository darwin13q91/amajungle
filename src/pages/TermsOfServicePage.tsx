import SectionWrapper from '../components/SectionWrapper'
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => (
  <>
    <SectionWrapper id="terms-of-service">
      <div className="legal-page-container">
        <div className="legal-page-content">
          <h1>Terms of Service</h1>
          <p className="legal-last-updated">Last Updated: January 10, 2026</p>

          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              Welcome to Amajungle. By accessing our website at www.amajungle.com or using our services, you agree 
              to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree 
              with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Business Information</h2>
            <p>
              <strong>Business Name:</strong> Amajungle<br />
              <strong>Business Type:</strong> Online Amazon Consulting Services<br />
              <strong>Location:</strong> Dalaguete, Cebu, Philippines<br />
              <strong>Contact:</strong> hello@amajungle.com | +63 0995 450 5206
            </p>
            <p>
              <em>DTI/SEC Registration: [To be added upon registration]</em>
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Services Description</h2>
            <p>Amajungle provides online consulting and management services for Amazon sellers, including but not limited to:</p>
            <ul>
              <li>Amazon listing optimization</li>
              <li>PPC (Pay-Per-Click) campaign management</li>
              <li>Amazon Brand Registry assistance</li>
              <li>Account setup and management</li>
              <li>Advertising strategy and analytics</li>
              <li>Amazon consulting and advisory services</li>
            </ul>
            <p>
              All services are provided remotely through digital communication channels. We do not have a physical office 
              and operate as a fully online service provider.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Service Agreement and Payment</h2>
            <h3>4.1 Service Engagement</h3>
            <p>
              Services begin upon mutual agreement and receipt of payment or execution of a service contract. Specific 
              terms, deliverables, timelines, and pricing will be outlined in individual service agreements or proposals.
            </p>

            <h3>4.2 Payment Terms</h3>
            <ul>
              <li>Payment must be made according to the agreed schedule (upfront, milestone-based, or monthly retainer)</li>
              <li>Accepted payment methods will be communicated during engagement</li>
              <li>Late payments may result in service suspension</li>
              <li>All prices are in Philippine Peso (PHP) or US Dollar (USD) as agreed</li>
            </ul>

            <h3>4.3 Satisfaction Guarantee & Refund Policy</h3>
            <p>
              We offer a 30-day satisfaction guarantee on all services. If you are unsatisfied with the 
              quality of our work, we will either redo the work at no additional cost or refund your fee 
              for any undelivered services. The following terms apply:
            </p>
            <ul>
              <li>Work already completed and delivered (listing changes, account modifications, campaign setup, etc.) is non-refundable as it provides immediate tangible value</li>
              <li>Setup fees and initial consultation fees are non-refundable</li>
              <li>Monthly retainers may be refunded on a pro-rata basis for the unused portion if services are cancelled mid-month</li>
              <li>Project-based work is refundable only for deliverables that have not yet been provided</li>
              <li>Refund requests must be submitted in writing to hello@amajungle.com within 30 days of service delivery</li>
              <li>We do not guarantee specific business results, sales increases, or Amazon ranking improvements — our guarantee covers the quality and delivery of our work</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information about your Amazon business</li>
              <li>Grant necessary access to your Amazon Seller Central account (where applicable)</li>
              <li>Respond to communications in a timely manner</li>
              <li>Comply with Amazon's Terms of Service and policies</li>
              <li>Make timely payments according to agreed terms</li>
              <li>Provide feedback and review deliverables within agreed timelines</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Account Access and Security</h2>
            <p>
              When you grant us access to your Amazon Seller Central account or other platforms:
            </p>
            <ul>
              <li>You remain responsible for all activities under your account</li>
              <li>We will not share your credentials with third parties</li>
              <li>We recommend using limited user permissions where possible</li>
              <li>You can revoke access at any time</li>
              <li>We are not liable for actions taken by Amazon on your account</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Intellectual Property</h2>
            <h3>7.1 Our Property</h3>
            <p>
              All content on our website, including text, graphics, logos, and software, is the property of Amajungle 
              and protected by Philippine and international copyright laws.
            </p>

            <h3>7.2 Work Product</h3>
            <ul>
              <li>Product listings, images, and copy created for your account belong to you</li>
              <li>Strategies, methodologies, and templates remain our intellectual property</li>
              <li>We may showcase our work (without confidential information) as portfolio pieces</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Confidentiality</h2>
            <p>
              We treat all client information as confidential and will not disclose it to third parties except:
            </p>
            <ul>
              <li>When required by law</li>
              <li>With your explicit consent</li>
              <li>To service providers bound by confidentiality agreements</li>
              <li>In anonymized form for case studies or marketing (with your permission)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Philippine law:
            </p>
            <ul>
              <li>We provide services on an "as is" basis without warranties</li>
              <li>We do not guarantee specific results or Amazon ranking improvements</li>
              <li>We are not liable for Amazon policy changes, account suspensions, or business losses</li>
              <li>Our total liability is limited to the amount paid for services in the past 3 months</li>
              <li>We are not responsible for third-party services (Amazon, payment processors, etc.)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Amazon Policy Compliance</h2>
            <p>
              We strive to ensure all strategies and recommendations comply with Amazon's Terms of Service. However:
            </p>
            <ul>
              <li>Amazon policies change frequently and without notice</li>
              <li>You are ultimately responsible for your Amazon account compliance</li>
              <li>We recommend reviewing all deliverables before implementation</li>
              <li>We do not engage in black-hat or prohibited tactics</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Service Modification and Termination</h2>
            <h3>11.1 By Amajungle</h3>
            <p>We reserve the right to:</p>
            <ul>
              <li>Modify or discontinue services with reasonable notice</li>
              <li>Refuse service to anyone for any reason</li>
              <li>Terminate services for non-payment or breach of terms</li>
            </ul>

            <h3>11.2 By Client</h3>
            <p>You may terminate services by:</p>
            <ul>
              <li>Providing written notice as specified in your service agreement</li>
              <li>Completing payment for services rendered up to termination date</li>
              <li>Understanding that certain fees may be non-refundable</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Disclaimer of Warranties</h2>
            <p>
              While we use our best efforts to provide quality services:
            </p>
            <ul>
              <li>We make no guarantees about sales increases or specific outcomes</li>
              <li>Amazon marketplace conditions are beyond our control</li>
              <li>Results depend on many factors including product quality, pricing, and competition</li>
              <li>Past performance is not indicative of future results</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. Indemnification</h2>
            <p>
              You agree to indemnify and hold Amajungle harmless from any claims, damages, or expenses arising from:
            </p>
            <ul>
              <li>Your violation of Amazon's Terms of Service</li>
              <li>Your products or business practices</li>
              <li>Intellectual property infringement by your products</li>
              <li>Your breach of these Terms of Service</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>14. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by the laws of the Republic of the Philippines. Any disputes arising from 
              these Terms or our services shall be resolved through:
            </p>
            <ol>
              <li><strong>Good Faith Negotiation:</strong> Initial attempt to resolve disputes amicably</li>
              <li><strong>Mediation:</strong> If negotiation fails, mediation in Cebu City, Philippines</li>
              <li><strong>Arbitration/Litigation:</strong> As a last resort, in the appropriate courts of Cebu, Philippines</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>15. Data Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy, which complies with the Data Privacy 
              Act of 2012 (Republic Act No. 10173). Please review our <Link to="/privacy">Privacy Policy</Link> for 
              information on how we collect, use, and protect your personal data.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
              posting to our website. Your continued use of our services after changes constitutes acceptance of 
              the new Terms. We will notify clients of material changes via email when possible.
            </p>
          </section>

          <section className="legal-section">
            <h2>17. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
              or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force.
            </p>
          </section>

          <section className="legal-section">
            <h2>18. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any signed service agreements, constitute the entire 
              agreement between you and Amajungle regarding our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>19. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <div className="contact-details">
              <p><strong>Amajungle</strong></p>
              <p>Dalaguete, Cebu, Philippines</p>
              <p>Email: <a href="mailto:hello@amajungle.com">hello@amajungle.com</a></p>
              <p>Phone: +63 0995 450 5206</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>20. Acceptance of Terms</h2>
            <p>
              By using our services or website, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default TermsOfServicePage;
