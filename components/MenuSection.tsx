'use client';

import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';

const menuData = [
  {
    category: "Hand Drip Coffee",
    items: [
      { name: "Kotonoha Blend / コトノハブレンド", price: "¥650", desc: "バランスの取れた中深煎り。ナッツのような香ばしさ。" },
      { name: "Single Origin (Ethiopia) / エチオピア", price: "¥750", desc: "華やかなベリー系の酸味と甘み。浅煎り。" },
      { name: "Single Origin (Colombia) / コロンビア", price: "¥700", desc: "しっかりとしたコクとダークチョコレートのような苦味。" },
    ]
  },
  {
    category: "Espresso & Others",
    items: [
      { name: "Cafe Latte / カフェラテ", price: "¥650", desc: "エスプレッソとミルクの甘みが調和した一杯。" },
      { name: "Cappuccino / カプチーノ", price: "¥650", desc: "きめ細かいフォームミルクをたっぷりと。" },
      { name: "Matcha Latte / 抹茶ラテ", price: "¥700", desc: "京都産宇治抹茶を使用した濃厚なラテ。" },
    ]
  },
  {
    category: "Sweets",
    items: [
      { name: "Classic Pudding / クラシックプリン", price: "¥550", desc: "昔ながらの固めプリン。ほろ苦いカラメルソース。" },
      { name: "Seasonal Tart / 季節のタルト", price: "¥650", desc: "旬のフルーツを贅沢に使用した自家製タルト。" },
      { name: "Affogato / アフォガート", price: "¥700", desc: "冷たいバニラアイスに熱いエスプレッソをかけて。" },
    ]
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="w-full bg-[#0D0C0B] py-32 px-6 md:px-12 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-20"
        >
          <div className="flex items-center gap-3 text-[#A68A64] mb-4">
            <Coffee size={24} />
            <h2 className="font-serif text-xl tracking-widest uppercase">Menu</h2>
          </div>
          <p className="text-[#EAE6DF]/60 text-sm tracking-widest">こだわりの一杯と、自家製スイーツ</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-20">
          {menuData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={idx === 2 ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : ""}
            >
              <h3 className="font-serif text-2xl text-[#EAE6DF] mb-8 pb-4 border-b border-white/10 tracking-wider">
                {section.category}
              </h3>
              <div className="flex flex-col gap-8">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col gap-2">
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="text-[#EAE6DF] font-medium tracking-wide">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-white/20 relative -top-1"></div>
                      <span className="text-[#A68A64] font-serif tracking-wider">{item.price}</span>
                    </div>
                    <p className="text-[#EAE6DF]/50 text-sm font-light tracking-wide">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
