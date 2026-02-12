
import React, { useState } from 'react';
import { Calendar, Clock, Phone, CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 px-4 flex flex-col items-center justify-center text-center bg-spa-cream min-h-screen">
        <div className="w-20 h-20 bg-spa-stone text-white rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle size={40} />
        </div>
        <h1 className="font-serif text-4xl text-spa-stone mb-4">Request Received</h1>
        <p className="text-stone-600 font-light text-lg max-w-md mx-auto mb-10">
          Our team is reviewing your preferred appointment time. We will call you shortly at the number provided to confirm your booking.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-spa-stone text-white px-10 py-4 tracking-widest uppercase text-sm font-medium"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-spa-cream min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="lg:sticky lg:top-32">
            <span className="text-spa-accent text-sm uppercase tracking-[0.3em] mb-4 block">Reservation</span>
            <h1 className="font-serif text-5xl md:text-6xl text-spa-stone mb-8 leading-tight">
              Book Your <br />Escape
            </h1>
            <p className="text-stone-600 leading-relaxed text-xl font-light mb-12">
              Reserve your session in minutes. Experience Abuja's premier 24-hour luxury sanctuary.
            </p>
            
            <div className="space-y-8 bg-white p-10 shadow-sm border border-stone-100">
               <h3 className="font-serif text-2xl text-spa-stone border-b border-stone-50 pb-4">Direct Booking</h3>
               <div className="flex items-center gap-4 text-spa-stone group cursor-pointer">
                 <div className="w-12 h-12 bg-spa-cream rounded-full flex items-center justify-center group-hover:bg-spa-stone group-hover:text-white transition-colors">
                   <Phone size={20} />
                 </div>
                 <div>
                   <p className="text-[10px] uppercase tracking-widest text-spa-accent mb-1 font-bold">Call Now</p>
                   <p className="text-xl font-serif">08099224450</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 text-spa-stone">
                 <div className="w-12 h-12 bg-spa-cream rounded-full flex items-center justify-center">
                   <Clock size={20} />
                 </div>
                 <div>
                   <p className="text-[10px] uppercase tracking-widest text-spa-accent mb-1 font-bold">Availability</p>
                   <p className="text-xl font-serif">Open 24 Hours</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3 text-spa-stone">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-stone-50 border border-stone-200 px-4 py-4 focus:outline-none focus:border-spa-stone transition-colors font-light text-sm" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3 text-spa-stone">Phone Number</label>
                  <input required type="tel" placeholder="080XXXXXXXX" className="w-full bg-stone-50 border border-stone-200 px-4 py-4 focus:outline-none focus:border-spa-stone transition-colors font-light text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-3 text-spa-stone">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full bg-stone-50 border border-stone-200 px-4 py-4 focus:outline-none focus:border-spa-stone transition-colors font-light text-sm" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-3 text-spa-stone">Preferred Service</label>
                <select className="w-full bg-stone-50 border border-stone-200 px-4 py-4 focus:outline-none focus:border-spa-stone transition-colors font-light text-sm appearance-none">
                  <option>Swedish Massage</option>
                  <option>Deep Tissue Massage</option>
                  <option>Hot Stone Massage</option>
                  <option>Aromatherapy Massage</option>
                  <option>Body Treatment</option>
                  <option>Facial Treatment</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3 text-spa-stone">Preferred Date</label>
                  <div className="relative">
                    <input required type="date" className="w-full bg-stone-50 border border-stone-200 px-4 py-4 focus:outline-none focus:border-spa-stone transition-colors font-light text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-3 text-spa-stone">Preferred Time</label>
                  <input required type="time" className="w-full bg-stone-50 border border-stone-200 px-4 py-4 focus:outline-none focus:border-spa-stone transition-colors font-light text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-3 text-spa-stone">Special Requests</label>
                <textarea rows={4} placeholder="Anything we should know? (e.g. allergies, specific areas of focus)" className="w-full bg-stone-50 border border-stone-200 px-4 py-4 focus:outline-none focus:border-spa-stone transition-colors font-light text-sm resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-spa-stone text-white py-5 tracking-[0.3em] uppercase text-sm font-bold hover:bg-stone-800 transition-all shadow-lg">
                Confirm Appointment
              </button>
              
              <p className="text-center text-stone-400 text-[10px] uppercase tracking-widest pt-4">
                By booking, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
