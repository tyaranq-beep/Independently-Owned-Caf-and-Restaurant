'use client';

import { motion } from 'motion/react';
import { Newspaper, ChevronRight, Info } from 'lucide-react';

const newsData = [
    {
        date: "2024.05.20",
        category: "NEW MENU",
        title: "【完熟メロンと自家製カスタードの贅沢パフェ】提供開始のおしらせ",
        link: "#news"
    },
    {
        date: "2024.05.15",
        category: "INFO",
        title: "来月の営業日と貸切イベントに伴う営業時間変更について",
        link: "#news"
    },
    {
        date: "2024.05.01",
        category: "BLOG",
        title: "今月のシングルオリジン：エチオピア・イルガチェフェの焙煎記録",
        link: "#news"
    }
];

export default function NewsSection() {
    return (
        <section id="news" className="w-full bg-[#0D0C0B] pt-24 pb-12 px-6 md:px-12 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col mb-12"
                >
                    <div className="flex items-center gap-3 text-[#A68A64] mb-4">
                        <Newspaper size={20} />
                        <h2 className="font-sans font-medium text-lg tracking-widest uppercase text-[#EAE6DF]">お知らせ</h2>
                    </div>

                    {/* Notion Demo Info Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#A68A64]/10 border border-[#A68A64]/30 px-3 py-1.5 rounded text-xs text-[#A68A64] w-fit font-sans tracking-wide">
                        <Info size={14} />
                        本番環境では、スマホの「Notionアプリ」から自動で同期・更新されるように構築します。
                    </div>
                </motion.div>

                {/* News List */}
                <div className="flex flex-col border-t border-white/10">
                    {newsData.map((news, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <a
                                href={news.link}
                                className="group flex flex-col md:flex-row md:items-center p-6 border-b border-white/10 hover:bg-white/5 transition-colors relative"
                            >
                                <div className="flex items-center gap-4 mb-3 md:mb-0 md:w-48 shrink-0 pb-1 md:pb-0 font-sans">
                                    <span className="text-[#EAE6DF]/60 text-sm tracking-wider">{news.date}</span>
                                    <span className="text-[10px] tracking-widest px-3 py-1 rounded bg-white/10 text-[#EAE6DF]/80 group-hover:bg-[#A68A64] group-hover:text-white transition-colors">{news.category}</span>
                                </div>

                                <h3 className="font-sans text-[#EAE6DF]/90 text-sm md:text-base md:flex-1 line-clamp-2 md:line-clamp-1 group-hover:text-[#A68A64] transition-colors tracking-wide leading-relaxed pr-8">
                                    {news.title}
                                </h3>

                                <ChevronRight size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#A68A64] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Read More Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 flex justify-end"
                >
                    <a href="#news" className="font-sans text-sm text-[#EAE6DF]/60 tracking-widest hover:text-[#A68A64] transition-colors border-b border-transparent hover:border-[#A68A64] pb-1">
                        VIEW ALL
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
