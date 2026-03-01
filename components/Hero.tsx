'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between py-12">
      {/* Background Image with slow zoom animation */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2500&auto=format&fit=crop"
          alt="Freshly poured coffee"
          fill
          priority
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark gradient overlay for text readability and mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C0B]/60 via-[#0D0C0B]/40 to-[#0D0C0B]/90" />
      </motion.div>

      {/* Spacer to push content to middle safely */}
      <div className="flex-1"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[#A68A64] tracking-[0.3em] text-sm md:text-base mb-6"
        >
          自家焙煎珈琲 カフェ・コトノハ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.3] md:leading-[1.2] text-[#EAE6DF] font-light tracking-tight"
        >
          最高の一杯と、
          <br className="md:hidden" />
          静かな時間を。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-base md:text-lg text-[#EAE6DF]/70 font-light tracking-wide max-w-lg"
        >
          日常の喧騒から離れ、淹れたての珈琲の香りに包まれる。
          <br className="hidden md:block" />
          あなただけの特別な居場所がここにあります。
        </motion.p>
      </div>

      {/* Spacer to push indicator to bottom without absolute overlap */}
      <div className="flex-1 flex flex-col justify-end items-center relative z-10 pt-12">
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-[#EAE6DF]/50 font-sans">スクロール</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#A68A64] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
