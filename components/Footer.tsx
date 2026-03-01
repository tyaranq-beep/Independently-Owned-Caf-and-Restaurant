'use client';

import { Instagram, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0C0B] py-16 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-serif text-2xl tracking-widest text-[#EAE6DF]">KOTONOHA</h3>
          <p className="text-[#EAE6DF]/50 text-sm tracking-widest font-sans">自家焙煎珈琲と季節の焼き菓子</p>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-[#EAE6DF]/60 hover:text-[#A68A64] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[#EAE6DF]/60 hover:text-[#A68A64] transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-[#EAE6DF]/60 hover:text-[#A68A64] transition-colors">
            <MapPin size={20} />
          </a>
        </div>

        <div className="text-[#EAE6DF]/40 text-xs tracking-widest">
          &copy; {new Date().getFullYear()} CAFE KOTONOHA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
