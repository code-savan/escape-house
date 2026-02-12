
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spa-stone text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & Address */}
        <div>
          <h3 className="font-serif text-2xl tracking-widest mb-6">ESCAPE HOUSE SPA</h3>
          <div className="space-y-4 opacity-80">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p>34 Usuma St, Maitama, Abuja 904101</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0" />
              <p>08099224450</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="flex-shrink-0" />
              <p>Open 24 Hours</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-stone-400">Quick Links</h4>
          <ul className="space-y-4 font-light opacity-80">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Brand Vision */}
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-stone-400">Our Vision</h4>
          <p className="font-light opacity-80 leading-relaxed mb-6">
            To provide a refined environment where relaxation feels effortless and time slows down. Maitama's premier 24-hour sanctuary.
          </p>
          <div className="flex space-x-4">
            {/* Social placeholder space */}
            <div className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors cursor-pointer">
              <span className="text-[10px]">IG</span>
            </div>
            <div className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors cursor-pointer">
              <span className="text-[10px]">FB</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-xs opacity-50 tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Escape House Spa. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
