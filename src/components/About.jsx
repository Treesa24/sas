import { Target, Eye, Users, ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            {/* Visual element representing corporate growth */}
            <div className="about-image">
               <div className="image-content">
                  <span className="years-exp">10+</span>
                  <span className="years-text">Years of Excellence</span>
               </div>
            </div>
            <div className="experience-badge">
              <Users size={24} className="text-primary" />
              <div>
                <p className="font-bold">Trusted by</p>
                <p className="text-sm">500+ Companies</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h2 className="section-title text-left">
              About Amjobz Corporate
            </h2>
            <div className="title-underline"></div>
            
            <p className="about-desc">
              At Amjobz Corporate, we specialize in helping businesses grow through innovative digital platforms and robust social media marketing strategies. We do not just build brands; we build lasting digital legacies.
            </p>
            
            <div className="mv-cards">
              
              <div className="mv-card">
                <div className="mv-icon"><Target size={28} /></div>
                <div>
                  <h3 className="mv-title">Our Mission</h3>
                  <p className="mv-desc">Helping businesses grow through cutting-edge digital platforms and data-driven social media marketing.</p>
                </div>
              </div>

              <div className="mv-card">
                <div className="mv-icon"><Eye size={28} /></div>
                <div>
                  <h3 className="mv-title">Our Vision</h3>
                  <p className="mv-desc">Creating global opportunities for companies and individuals by bridging the gap between talent and innovation.</p>
                </div>
              </div>

            </div>

            <a href="#services" className="btn btn-primary mt-6">
              Learn More <ChevronRight size={20} className="ml-2" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
