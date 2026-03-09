import { ArrowRight, Globe, TrendingUp, BarChart3 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container relative z-10">
        <div className="hero-content">
          <h1 className="hero-title animate-slide-up">
            Empowering Businesses Through 
            <span className="text-primary-light"> Digital Promotion </span> 
            and Global Opportunities
          </h1>
          <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Amjobz Corporate is your trusted partner for business management, digital promotion, and creating global pathways for success.
          </p>
          <div className="hero-actions animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#services" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#about" className="btn btn-outline btn-lg hero-outline">
              Our Services
            </a>
            <a href="#contact" className="btn btn-outline btn-lg hero-outline bg-white-overlay">
              Contact Us
            </a>
          </div>
          
          <div className="hero-features animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="hero-feature">
              <div className="feature-icon"><TrendingUp size={24} /></div>
              <span>Business Growth</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon"><Globe size={24} /></div>
              <span>Global Reach</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon"><BarChart3 size={24} /></div>
              <span>Digital Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
