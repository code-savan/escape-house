
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, MapPin, UserCheck, ShieldCheck, Heart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-spa-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipO7qC-1KDumWXl43_bfzB42FA0uMrIGhsAayD67=s773-k-no" 
            alt="Escape House Spa Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fadeIn">
          <div className="mb-6 flex flex-col items-center gap-2">
            <span className="px-4 py-1.5 border border-white/30 text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm bg-white/10 rounded-full">
              Maitama • Abuja
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            Escape the Noise. <br />Enter Pure Calm.
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-stone-200 tracking-wide max-w-2xl mx-auto">
            A 24 hour luxury spa sanctuary in the heart of Maitama, Abuja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/book" className="bg-white text-spa-stone px-10 py-4 tracking-widest uppercase text-sm font-medium hover:bg-stone-100 transition-all w-full sm:w-auto">
              Book Your Experience
            </Link>
            <Link to="/services" className="border border-white/50 text-white px-10 py-4 tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-spa-stone transition-all w-full sm:w-auto">
              View Services
            </Link>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4 opacity-80 text-sm font-light">
             <div className="flex items-center gap-2">
               <MapPin size={16} />
               <span>34 Usuma St, Maitama, Abuja 904101</span>
             </div>
             <div className="flex items-center gap-2 text-spa-gold font-medium tracking-widest uppercase text-xs">
               <Clock size={16} />
               <span>Open 24 Hours Daily</span>
             </div>
          </div>
        </div>
      </section>

      {/* Luxury Value Proposition */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-spa-accent text-sm uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl text-spa-stone mb-8 leading-snug">
                Where Stillness Meets <br />Sophistication
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg font-light mb-8">
                At Escape House Spa, every detail is designed to slow your world down. From therapeutic massages to rejuvenating body treatments, you step into an environment built for deep relaxation and refined comfort.
              </p>
              <p className="text-stone-600 leading-relaxed text-lg font-light mb-10">
                We operate 24 hours a day so your schedule never limits your peace. Experience luxury on your own terms.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Clock size={20} />, label: "24/7 Availability" },
                  { icon: <Heart size={20} />, label: "Private Treatment Rooms" },
                  { icon: <UserCheck size={20} />, label: "Certified Therapists" },
                  { icon: <ShieldCheck size={20} />, label: "Premium Products" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-spa-cream flex items-center justify-center text-spa-stone group-hover:bg-spa-stone group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-medium tracking-wide text-sm text-spa-stone uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipODZ8NOyptRbUzpo7O7mn5KMk39jcVnP0OAYluF=s1016-k-no" 
                alt="Luxury Spa Interior" 
                className="w-full h-auto rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-spa-stone text-white p-12 hidden md:block rounded-sm">
                 <p className="font-serif text-3xl mb-2">Discreet</p>
                 <p className="uppercase tracking-[0.2em] text-[10px] opacity-70">Serene Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services Preview */}
      <section className="py-24 px-4 bg-spa-cream">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-spa-accent text-sm uppercase tracking-[0.3em] mb-4 block">Curated Treatments</span>
          <h2 className="font-serif text-4xl md:text-5xl text-spa-stone mb-6">Signature Experiences</h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto">
            Designed to restore balance and elevate your wellbeing through expert touch and premium botanicals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Swedish Massage", desc: "A calming full body massage that relieves tension and improves circulation.", price: "From ₦25,000" },
            { title: "Deep Tissue Massage", desc: "Focused therapy for chronic muscle tension and stress relief.", price: "From ₦30,000" },
            { title: "Aromatherapy Massage", desc: "A sensory experience combining essential oils and expert touch.", price: "From ₦28,000" },
            { title: "Body Scrub & Polish", desc: "Exfoliate, renew, and reveal radiant skin with natural ingredients.", price: "From ₦35,000" },
            { title: "Bespoke Facials", desc: "Targeted skin treatments tailored specifically to your unique skin type.", price: "From ₦40,000" },
            { title: "Hot Stone Therapy", desc: "Deeply warming treatment using heated river stones to melt away stress.", price: "From ₦32,000" },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-10 border border-stone-200 group hover:border-spa-stone transition-all duration-500">
              <h3 className="font-serif text-2xl mb-4 text-spa-stone group-hover:translate-x-1 transition-transform">{service.title}</h3>
              <p className="text-stone-500 font-light text-sm mb-8 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-stone-100">
                <span className="text-xs uppercase tracking-widest text-spa-accent font-medium">View Details</span>
                <Link to="/book" className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center group-hover:bg-spa-stone group-hover:text-white transition-all">
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-block border-b-2 border-spa-stone pb-2 text-spa-stone uppercase tracking-widest text-sm font-medium hover:opacity-70 transition-opacity">
            View Full Service Menu
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-spa-stone text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-12">Luxury Without Compromise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Always Open", desc: "Available 24 hours daily for your ultimate convenience." },
                { title: "Prime Location", desc: "Heart of Abuja’s most prestigious district in Maitama." },
                { title: "Personalized", desc: "Every session is tailored to your specific physical needs." },
                { title: "Pro Standards", desc: "Hygiene, discretion, and excellence guide everything we do." }
              ].map((point, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-12 h-1px bg-spa-accent"></div>
                  <h4 className="text-lg uppercase tracking-widest font-medium text-spa-gold">{point.title}</h4>
                  <p className="text-stone-400 font-light text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="https://picsum.photos/400/800?random=5" className="w-full h-full object-cover grayscale" alt="texture" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-spa-stone">What Our Guests Say</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { text: "“An exceptional experience. The ambience is calming from the moment you walk in. Truly a 5-star standard.”", author: "Sarah O." },
            { text: "“Best spa in Maitama. Professional and worth every minute. The 24-hour service is a lifesaver for my busy schedule.”", author: "Ahmed K." },
            { text: "“Finally a spa that understands luxury and privacy. The therapists are highly skilled and attentive.”", author: "Zainab M." }
          ].map((t, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex gap-1 text-spa-stone mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-stone-600 font-light italic text-lg leading-relaxed mb-8">
                {t.text}
              </p>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-spa-stone">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-spa-cream text-center border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl text-spa-stone mb-6">Your Escape Starts Here</h2>
          <p className="text-stone-500 font-light text-xl mb-12">
            Step away from the pressure. Step into calm.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a href="tel:08099224450" className="bg-spa-stone text-white px-12 py-5 tracking-[0.2em] uppercase text-sm font-medium hover:bg-stone-800 transition-all">
              Call Now to Book: 08099224450
            </a>
            <p className="text-xs uppercase tracking-widest text-spa-accent font-medium">Open 24 Hours • 7 Days a Week</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
