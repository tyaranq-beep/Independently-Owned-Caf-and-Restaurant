'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function InfoSection() {
  return (
    <section id="status" className="w-full bg-[#0D0C0B] py-24 px-6 md:px-12 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-[#A68A64]">
              <Clock size={20} />
              <h2 className="font-serif text-lg tracking-widest uppercase">Today&apos;s Status</h2>
            </div>
            
            <div className="border-l border-[#A68A64]/30 pl-6 py-2">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl md:text-4xl font-serif text-[#EAE6DF]">OPEN</span>
                <span className="text-[#EAE6DF]/60 text-lg tracking-wider">10:00 - 19:00</span>
              </div>
              <p className="text-[#EAE6DF]/50 text-sm tracking-wide leading-relaxed mt-4 mb-8">
                本日は通常通り営業しております。
                <br />
                ラストオーダー 18:30
              </p>

              <div className="flex flex-col gap-3 text-sm tracking-widest text-[#EAE6DF]/70">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">MON</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">TUE</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[#A68A64]">
                  <span className="w-16">WED</span>
                  <span>CLOSED</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">THU</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">FRI</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">SAT</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">SUN</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-[#A68A64]/80 text-xs">
                  <span className="w-16">HOLIDAY</span>
                  <span>09:00 - 20:00 (Special Hours)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-[#A68A64]">
              <MapPin size={20} />
              <h2 className="font-serif text-lg tracking-widest uppercase">Access</h2>
            </div>
            
            <div className="border-l border-[#A68A64]/30 pl-6 py-2 flex flex-col gap-8">
              <p className="text-[#EAE6DF]/80 text-base leading-relaxed tracking-wide">
                〒150-0000<br />
                東京都渋谷区珈琲町 1-2-3<br />
                Kotonoha Building 1F
              </p>
              
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#EAE6DF] text-[#0D0C0B] px-8 py-4 rounded-full font-medium tracking-wider hover:bg-[#A68A64] hover:text-white transition-all duration-300 w-fit"
              >
                <Navigation size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                <span>Google Mapsで経路案内</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
