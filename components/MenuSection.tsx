'use client';

import { motion } from 'motion/react';
import { Coffee, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const menuData = [
  {
    category: "こだわりのハンドドリップ",
    items: [
      { name: "コトノハブレンド", price: "¥650", desc: "バランスの取れた中深煎り。ナッツのようなコク深く香ばしい味わい。", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop" },
      { name: "エチオピア（浅煎り）", price: "¥750", desc: "華やかなベリー系の酸味と、紅茶のような軽やかで透き通る甘み。", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" },
      { name: "コロンビア（深煎り）", price: "¥700", desc: "しっかりとした深いコクと、ダークチョコレートのようなビターな余韻。", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    category: "エスプレッソ＆ラテ",
    items: [
      { name: "カフェラテ", price: "¥650", desc: "濃厚な特製エスプレッソと、きめ細かいスチームミルクが生み出す芸術的な一杯。", image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800&auto=format&fit=crop" },
      { name: "自家製キャラメルマキアート", price: "¥700", desc: "丁寧に焦がしたほろ苦い手作りキャラメルソースとバニラの甘み。", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop" },
      { name: "宇治抹茶ラテ", price: "¥700", desc: "京都産の厳選された高級宇治抹茶を使用。お茶の香りとミルクのコクが絶妙です。", image: "/images/matcha_latte.png" },
    ]
  },
  {
    category: "自家製スイーツ",
    items: [
      { name: "クラシック・カスタードプリン", price: "¥550", desc: "卵の風味豊かな昔ながらの「固めプリン」。たっぷりのほろ苦カラメルソースで。", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop" },
      { name: "季節のフルーツタルト", price: "¥650", desc: "市場で仕入れた旬の新鮮なフルーツを贅沢に盛り付けた、サクサクの自家製タルト。", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop" },
      { name: "アフォガート", price: "¥700", desc: "冷たくてなめらかなバニラアイスクリームに、抽出したての熱いエスプレッソをかけて。", image: "/images/affogato.png" },
    ]
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="w-full bg-[#0D0C0B] py-32 relative z-10 border-t border-white/5 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto pl-6 md:pl-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 text-[#A68A64] mb-4">
            <Coffee size={24} />
            <h2 className="font-serif text-xl tracking-widest uppercase">Our Menu</h2>
          </div>
          <p className="text-[#EAE6DF]/60 text-sm tracking-widest leading-relaxed">最高の一杯を引き立てる、こだわりのメニュー。<br />横にスワイプしてご覧ください。</p>
        </motion.div>

        <div className="flex flex-col gap-20">
          {menuData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between pr-6 md:pr-12 mb-8 border-b border-white/10 pb-4">
                <h3 className="font-sans font-medium text-xl md:text-2xl text-[#EAE6DF] tracking-wider">
                  {section.category}
                </h3>
                <ChevronRight className="text-[#A68A64] opacity-50 md:hidden" size={20} />
              </div>

              {/* Swipeable Container */}
              <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pr-6 md:pr-12 pb-8 pt-2">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex-none w-[280px] md:w-[320px] snap-center group">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5 shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h4 className="text-[#EAE6DF] font-sans font-medium tracking-wide text-lg">{item.name}</h4>
                      <span className="text-[#A68A64] font-serif tracking-wider whitespace-nowrap pt-1">{item.price}</span>
                    </div>
                    <p className="text-[#EAE6DF]/60 text-sm font-light tracking-wide leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global styles for hiding scrollbar specifically in this component */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
