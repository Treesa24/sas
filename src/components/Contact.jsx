import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to take your business to the next level? Contact us today to discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-info-container">
            <div className="contact-card">
              <h3 className="contact-card-title text-white">Contact Information</h3>
              <p className="contact-card-desc text-white-muted">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon"><Phone size={20} /></div>
                  <div>
                    <h4 className="method-title text-white">Phone</h4>
                    <p className="method-detail text-white-muted">0484 406 3055</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon"><Mail size={20} /></div>
                  <div>
                    <h4 className="method-title text-white">Email</h4>
                    <p className="method-detail text-white-muted">info@amjobzcorporate.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon"><MapPin size={20} /></div>
                  <div>
                    <h4 className="method-title text-white">Location</h4>
                    <p className="method-detail text-white-muted">3E, Vattoly Tower, SRM Road,<br/>Near North Railway Station,<br/>Ernakulam, Kerala 682018</p>
                  </div>
                </div>
              </div>
            </div>
            
             <div className="map-container overflow-hidden rounded-xl shadow-md border border-gray-700 mt-6 h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1710000000000!6m8!1m7!1scEkUhX7EX7txYzbNLhP34A!2m2!1d9.9983324!2d76.2851135!3f48.55296!4f0!5f0.7820865974627469" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amjobz Corporate Location"
                  className="rounded-xl"
                ></iframe>
             </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-title">Send us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" className="form-input" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="5" className="form-input form-textarea" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-submit w-full">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
