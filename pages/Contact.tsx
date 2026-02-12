
import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="pt-0 bg-white">
      {/* Hero with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipO7qC-1KDumWXl43_bfzB42FA0uMrIGhsAayD67=s773-k-no" 
            alt="Contact Escape House Spa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-spa-gold text-sm uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Visit or Contact Us</h1>
          <p className="text-stone-200 leading-relaxed text-xl font-light">
            We are available 24 hours a day to assist with your inquiries and reservations.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-spa-cream rounded-full flex items-center justify-center mx-auto text-spa-stone">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif text-2xl">Location</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              34 Usuma St, Maitama, Abuja 904101<br />Federal Capital Territory, Nigeria
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-spa-cream rounded-full flex items-center justify-center mx-auto text-spa-stone">
              <Phone size={24} />
            </div>
            <h3 className="font-serif text-2xl">Phone</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              Call or WhatsApp: 08099224450<br />24-Hour Reception Line
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-spa-cream rounded-full flex items-center justify-center mx-auto text-spa-stone">
              <Clock size={24} />
            </div>
            <h3 className="font-serif text-2xl">Hours</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              Open 24 Hours Daily<br />Including Holidays
            </p>
          </div>
        </div>

        {/* Map Embedding */}
        <div className="max-w-7xl mx-auto mb-24 bg-stone-100 h-[500px] w-full relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.739486377319!2d7.488399575881457!3d9.087455488424075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4f56860001%3A0xe5a3375865f8f87e!2s34%20Usuma%20St%2C%20Maitama%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1715423854122!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="font-serif text-4xl md:text-5xl text-spa-stone mb-10">Experience Luxury. <br />Experience Escape House Spa.</h2>
           <Link to="/book" className="inline-block bg-spa-stone text-white px-12 py-5 tracking-[0.2em] uppercase text-sm font-medium hover:bg-stone-800 transition-all">
              Book Now
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
