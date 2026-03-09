import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h3 className="footer-logo">
              Amjobz <span>Corporate</span>
            </h3>
            <p className="footer-desc">
              Empowering Businesses Through Digital Promotion and Global Opportunities. We help businesses scale and reach new heights.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Business Promotion</a></li>
              <li><a href="#services">Company Listing</a></li>
              <li><a href="#services">Social Media Marketing</a></li>
              <li><a href="#services">Digital Advertising</a></li>
              <li><a href="#services">Business Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>3E, Vattoly Tower, SRM Road, Near North Railway Station, Ernakulam, Kerala 682018</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>0484 406 3055</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@amjobzcorporate.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Amjobz Corporate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
