import { Megaphone, Building2, Share2, MonitorPlay, ShoppingBag, Lightbulb } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Business Promotion',
    description: 'Comprehensive strategies to elevate your brand presence and reach new target audiences globally.',
    icon: <Megaphone size={32} />,
  },
  {
    id: 2,
    title: 'Company Listing',
    description: 'Get your business listed on top platforms to increase visibility, credibility, and customer trust.',
    icon: <Building2 size={32} />,
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description: 'Engaging content and targeted campaigns to build a loyal community around your brand.',
    icon: <Share2 size={32} />,
  },
  {
    id: 4,
    title: 'Digital Advertising',
    description: 'Data-driven ad campaigns focused on maximizing ROI and driving high-quality leads.',
    icon: <MonitorPlay size={32} />,
  },
  {
    id: 5,
    title: 'E-commerce Support',
    description: 'End-to-end solutions to launch, manage, and scale your online store successfully.',
    icon: <ShoppingBag size={32} />,
  },
  {
    id: 6,
    title: 'Business Growth Consulting',
    description: 'Expert advice and actionable insights to navigate market challenges and accelerate growth.',
    icon: <Lightbulb size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide a comprehensive suite of digital solutions designed to propel your business forward in the modern digital landscape.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
