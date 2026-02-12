
import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const ServiceSection: React.FC<{ title: string; services: string[] }> = ({ title, services }) => (
  <div className="mb-24">
    <h3 className="font-serif text-3xl text-spa-stone mb-12 text-center md:text-left border-b border-stone-200 pb-4">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
      {services.map((service, idx) => (
        <div key={idx} className="flex justify-between items-start group">
          <div className="max-w-md">
            <h4 className="font-serif text-xl text-spa-stone mb-2 group-hover:text-spa-accent transition-colors">{service}</h4>
            <p className="text-stone-500 font-light text-sm">
              Our signature approach to {service.toLowerCase()} ensures maximum relaxation and therapeutic benefit.
            </p>
          </div>
          <Link to="/book" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-spa-stone mt-1 hover:opacity-60 transition-opacity">
            <Plus size={14} />
            Book
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="pt-0 bg-white">
      {/* Hero with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipO7qC-1KDumWXl43_bfzB42FA0uMrIGhsAayD67=s773-k-no" 
            alt="Escape House Spa Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-spa-gold text-sm uppercase tracking-[0.3em] mb-4 block">Menu of Treatments</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Our Services</h1>
          <p className="text-stone-200 leading-relaxed text-xl font-light">
            Each treatment is designed to help you relax, recover, and recharge in a refined environment.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ServiceSection 
            title="Massages" 
            services={["Swedish Massage", "Deep Tissue Massage", "Hot Stone Massage", "Aromatherapy Massage"]} 
          />
          <ServiceSection 
            title="Body Treatments" 
            services={["Body Scrub", "Body Polish", "Full Body Detox", "Hydrating Wrap"]} 
          />
          <ServiceSection 
            title="Facial Treatments" 
            services={["Hydrating Facial", "Anti Aging Facial", "Deep Cleansing Facial", "Oxygen Radiance"]} 
          />

          {/* Bottom CTA */}
          <div className="mt-24 bg-spa-stone p-16 rounded-sm text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl mb-8">Ready to Experience Total Relaxation?</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/book" className="bg-white text-spa-stone px-10 py-4 tracking-widest uppercase text-sm font-medium hover:bg-stone-200 transition-all">
                  Book Appointment
                </Link>
                <a href="tel:08099224450" className="border border-white/50 text-white px-10 py-4 tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-spa-stone transition-all">
                  Call 08099224450
                </a>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1200/400?random=20')] bg-cover bg-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
