
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Book Appointment', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic for navbar appearance: 
  // - On non-home pages: always white bg, dark text.
  // - On home page: transparent bg/white text until scroll, then white bg/dark text.
  const isDarkNav = !isHomePage || scrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkNav ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={`font-serif text-2xl tracking-widest transition-colors duration-300 ${isDarkNav ? 'text-spa-stone' : 'text-white'}`}>ESCAPE HOUSE</span>
            <span className={`text-[10px] tracking-[0.3em] font-light -mt-1 transition-colors duration-300 ${isDarkNav ? 'text-spa-accent' : 'text-stone-300'}`}>SPA • MAITAMA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? (isDarkNav ? 'text-spa-stone font-semibold' : 'text-white font-semibold') 
                    : (isDarkNav ? 'text-spa-accent hover:text-spa-stone' : 'text-stone-300 hover:text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:08099224450" className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-all duration-300 ${isDarkNav ? 'border-spa-stone text-spa-stone hover:bg-spa-stone hover:text-white' : 'border-white text-white hover:bg-white hover:text-spa-stone'}`}>
              <Phone size={14} />
              <span className="text-sm font-medium">08099224450</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isDarkNav ? 'text-spa-stone' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b border-stone-100 shadow-xl' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-serif text-spa-stone border-b border-stone-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:08099224450" className="flex items-center justify-center gap-3 w-full bg-spa-stone text-white py-4 tracking-widest uppercase text-sm mt-6">
            <Phone size={18} />
            Call to Book
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
