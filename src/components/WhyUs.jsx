import { CheckCircle2 } from 'lucide-react';
import './WhyUs.css';

const reasons = [
  {
    title: 'Global Business Promotion',
    desc: 'Expand your reach beyond local markets and connect with an international audience.'
  },
  {
    title: 'Strong Digital Marketing Strategies',
    desc: 'Data-backed, innovative marketing campaigns that deliver measurable results.'
  },
  {
    title: 'Professional Consulting',
    desc: 'Access to industry experts who provide tailored guidance for your specific challenges.'
  },
  {
    title: 'Easy Company Listing Platform',
    desc: 'A streamlined process to get your business listed and verified quickly.'
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="why-us-grid">
          
          <div className="why-content">
            <h2 className="section-title text-left text-white">Why Choose Us</h2>
            <div className="title-underline-light"></div>
            
            <p className="why-desc text-white-muted">
              We stand out by combining industry expertise with cutting-edge digital solutions. Our commitment is to ensure your business achieves sustained growth and global recognition.
            </p>
            
            <div className="reasons-list">
              {reasons.map((reason, index) => (
                <div key={index} className="reason-item">
                  <CheckCircle2 size={24} className="reason-icon text-primary-light" />
                  <div>
                    <h4 className="reason-title text-white">{reason.title}</h4>
                    <p className="reason-desc text-white-muted">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-image-container">
               <div className="why-stats">
                  <div className="stat-box">
                     <span className="stat-number">99%</span>
                     <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat-box mt-4 ml-8">
                     <span className="stat-number">24/7</span>
                     <span className="stat-label">Expert Support</span>
                  </div>
               </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
