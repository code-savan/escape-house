
import React from 'react';
import { Shield, Sparkles, User, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-spa-cream">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-spa-accent text-sm uppercase tracking-[0.3em] mb-4 block">Our Story</span>
            <h1 className="font-serif text-5xl md:text-6xl text-spa-stone mb-8 leading-tight">
              A Sanctuary <br />Designed for Calm
            </h1>
            <p className="text-stone-600 leading-relaxed text-xl font-light mb-8">
              Escape House Spa was created as a private retreat in the heart of Maitama. Our mission is simple: provide a refined environment where relaxation feels effortless and time slows down.
            </p>
            <p className="text-stone-500 leading-relaxed font-light">
              We combine skilled therapists, premium products, and a serene setting to deliver an experience that restores both body and mind. Every guest who enters our doors leaves with a renewed sense of balance.
            </p>
          </div>
          <div className="relative">
            <img src="https://lh3.googleusercontent.com/p/AF1QipNXPpbE6Ww5aZ79nYVVCvP1Xaz9LcxqtICTyVxF=w203-h270-k-no" alt="Spa Detail" className="w-full h-auto rounded-sm shadow-xl" />
            <div className="absolute -bottom-8 -right-8 bg-white p-10 border border-stone-100 hidden md:block">
              <p className="font-serif text-2xl text-spa-stone">Abuja's Finest</p>
              <p className="text-xs uppercase tracking-widest text-spa-accent mt-2">Maitama 904101</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-spa-stone mb-10">Wellness Is Not a Luxury. <br />It Is a Standard.</h2>
          <p className="text-stone-600 leading-relaxed text-lg font-light mb-12">
            We believe self care should fit your schedule. That is why we remain open 24 hours daily. Whether you visit during the day or after midnight, you receive the same exceptional attention and restorative care.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-spa-stone mb-4"><Shield size={32} strokeWidth={1} /></div>
              <span className="text-[10px] uppercase tracking-widest font-bold">Privacy</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-spa-stone mb-4"><Sparkles size={32} strokeWidth={1} /></div>
              <span className="text-[10px] uppercase tracking-widest font-bold">Quality</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-spa-stone mb-4"><User size={32} strokeWidth={1} /></div>
              <span className="text-[10px] uppercase tracking-widest font-bold">Professional</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-spa-stone mb-4"><CheckCircle size={32} strokeWidth={1} /></div>
              <span className="text-[10px] uppercase tracking-widest font-bold">Purity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 px-4 bg-spa-stone text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep9jj9pXOasvssf5-5x2Y5i4pRetExTxcGNV6JHpsk3CKaXM51uKEX4nJJcdltd9vAuXjxuu2IKED10WgyKN1NpJS_m_ayrpoZpMCD5-B2hAo3q8PXbhqFGZTdUcOvNR8DGiR1HvCHzrwI=s812-k-no" className="w-full h-auto rounded-sm" alt="Quality commitment" />
             <div>
                <h2 className="font-serif text-4xl mb-12">Our Commitment</h2>
                <div className="space-y-8">
                  {[
                    { label: "Professionalism", text: "Certified therapists who understand the anatomy of relaxation." },
                    { label: "Cleanliness", text: "Medical-grade hygiene protocols in all our treatment rooms." },
                    { label: "Privacy", text: "Discreet entrances and sound-insulated private suites." },
                    { label: "Consistent Quality", text: "The same world-class experience at 2 PM or 2 AM." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full border border-spa-accent flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[10px]">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-spa-gold font-medium uppercase tracking-widest text-sm mb-2">{item.label}</h4>
                        <p className="text-stone-400 font-light text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
