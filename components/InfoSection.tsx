'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function InfoSection() {
  return (
    <section id="status" className="w-full bg-[#0D0C0B] py-32 px-6 md:px-12 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-start lg:items-center relative gap-16 md:gap-0 lg:h-[600px]">

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:w-1/2 w-full lg:absolute lg:left-0 lg:top-0 lg:z-10 bg-[#0D0C0B] lg:p-12 border-l border-[#A68A64]/30"
          >
            <div className="flex items-center gap-3 text-[#A68A64]">
              <Clock size={20} />
              <h2 className="font-sans font-medium text-lg tracking-widest uppercase">本日のご案内</h2>
            </div>


            <div className="pl-6 py-2">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl md:text-4xl font-serif text-[#EAE6DF]">営業中</span>
                <span className="text-[#EAE6DF]/60 text-lg tracking-wider">10:00 - 19:00</span>
              </div>
              <p className="text-[#EAE6DF]/50 text-sm tracking-wide leading-relaxed mt-4 mb-8">
                本日は通常通り営業しております。
                <br />
                ラストオーダー 18:30
              </p>

              <div className="flex flex-col gap-3 text-sm tracking-widest text-[#EAE6DF]/70 font-sans">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">月曜日</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">火曜日</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[#A68A64] font-medium">
                  <span className="w-16">水曜日</span>
                  <span>定休日</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">木曜日</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">金曜日</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">土曜日</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="w-16">日曜日</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-[#A68A64]/80 text-xs">
                  <span className="w-16 flex-none">祝日</span>
                  <span>09:00 - 20:00 (特別営業)</span>
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
            className="flex flex-col gap-6 md:w-[55%] w-full lg:absolute lg:right-0 lg:bottom-0 bg-[#0D0C0B]/90 lg:backdrop-blur-md lg:p-10 border border-white/10 rounded-2xl shadow-2xl relative z-20"
          >
            <div className="flex items-center gap-3 text-[#A68A64]">
              <MapPin size={20} />
              <h2 className="font-sans font-medium text-lg tracking-widest">店舗情報</h2>
            </div>

            <div className="pl-2 sm:pl-6 py-2 flex flex-col gap-8">
              <dl className="flex flex-col gap-4 text-sm font-sans tracking-wide">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-white/5 pb-3">
                  <dt className="text-[#A68A64] w-24 shrink-0 font-medium pt-1 sm:pt-0">住所</dt>
                  <dd className="text-[#EAE6DF]/80 leading-relaxed">〒150-0000<br />東京都渋谷区珈琲町 1-2-3<br />Kotonoha Building 1F</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-white/5 pb-3">
                  <dt className="text-[#A68A64] w-24 shrink-0 font-medium">電話番号</dt>
                  <dd className="text-[#EAE6DF]/80">03-0000-0000</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-white/5 pb-3">
                  <dt className="text-[#A68A64] w-24 shrink-0 font-medium">座席数</dt>
                  <dd className="text-[#EAE6DF]/80">24席（カウンター6席、テーブル18席）</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-white/5 pb-3">
                  <dt className="text-[#A68A64] w-24 shrink-0 font-medium">駐車場</dt>
                  <dd className="text-[#EAE6DF]/80">専用駐車場3台<br className="sm:hidden" /><span className="text-[#EAE6DF]/50 text-xs sm:text-sm sm:ml-2">※近隣にコインパーキングあり</span></dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-white/5 pb-3">
                  <dt className="text-[#A68A64] w-24 shrink-0 font-medium">決済方法</dt>
                  <dd className="text-[#EAE6DF]/80">現金 / クレジットカード / PayPay / 交通系IC</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 pb-1">
                  <dt className="text-[#A68A64] w-24 shrink-0 font-medium">設備</dt>
                  <dd className="text-[#EAE6DF]/80">無料Wi-Fi・全席電源完備・完全禁煙</dd>
                </div>
              </dl>

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
