'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import InstagramFeed from './InstagramFeed';

export default function StorySection() {
  return (
    <section id="story" className="w-full bg-[#0D0C0B] py-32 px-6 md:px-12 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Robust Grid Layout instead of error-prone overlapping */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[70vh] aspect-[4/3] lg:aspect-auto w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop"
              alt="Bright cafe latte art"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
          </motion.div>

          {/* Text Card - Removed negative margins and absolute positioning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 w-full bg-[#0D0C0B]/90 lg:bg-[#0D0C0B]/60 lg:backdrop-blur-xl p-8 lg:p-12 border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#EAE6DF] leading-tight tracking-wide">
              一杯の珈琲に、<br />
              すべての想いを込めて。
            </h2>

            <div className="w-12 h-[1px] bg-[#A68A64]" />

            <div className="flex flex-col gap-6 text-[#EAE6DF]/70 font-light leading-loose tracking-wide text-base md:text-lg">
              <p>
                「Kotonoha」という名前には、言葉（言の葉）を交わし、心が通い合う場所にしたいという願いが込められています。
              </p>
              <p>
                私たちが提供するのは、単なる一杯のコーヒーではありません。厳選された豆の個性を最大限に引き出す焙煎、そして一杯ずつ丁寧にドリップする時間。そのすべてが、お客様の日常に小さな余白を生み出すためのプロセスです。
              </p>
              <p>
                忙しい日々の合間に、ふと立ち寄りたくなる。そんな、あなたにとっての「第二の居場所」になれれば幸いです。
              </p>
            </div>

            <div className="mt-8">
              <p className="font-serif text-[#A68A64] tracking-widest text-sm uppercase">Owner / Roaster</p>
              <p className="text-[#EAE6DF] text-xl mt-2 font-serif tracking-widest">Taro Yamada</p>
            </div>
          </motion.div>

        </div>

        <InstagramFeed />

      </div>
    </section>
  );
}
