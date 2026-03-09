import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Rajeev V',
    role: 'Client',
    content: 'It is an awesome global e-platform for companies as well as individuals to achieve success in the modern world. Amjobz Global helps promote businesses using the power of social media and provides worldwide opportunities.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Rajeev+V&background=1E40AF&color=fff'
  },
  {
    id: 2,
    name: 'Jose Kallarakkal',
    role: 'Client',
    content: 'Amjobz Global is a great e-commerce venture that helps companies enhance their business by listing their details like logo, profile, products, address, website, and contact information.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Jose+Kallarakkal&background=2563EB&color=fff'
  },
  {
    id: 3,
    name: 'Peter Damogbe',
    role: 'Client',
    content: 'Amjobz Global is a fast-growing e-commerce company in UAE and India. Businesses can promote products, advertise services, and expand their reach through this platform.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Peter+Damogbe&background=60A5FA&color=fff'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-bold text-lg">⭐ 5.0 Rating</span>
            <span className="text-muted">(35 Reviews)</span>
          </div>
          <p className="section-subtitle">
            Do not just take our word for it. Here is what business leaders have to say about their experience working with Amjobz Corporate.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "star-filled" : "star-empty"} 
                  />
                ))}
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
