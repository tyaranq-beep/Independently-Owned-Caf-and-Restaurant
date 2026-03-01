'use client';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Phone, CalendarHeart, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function StickyBookingBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    // Hide the bar if actively scrolling down, show if scrolling up or at the top
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.div
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-50 pointer-events-auto"
        >
            <div className="bg-[#0D0C0B]/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full p-2 flex items-center justify-between gap-1">

                {/* Call */}
                <a
                    href="tel:000-000-0000"
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-[#EAE6DF] hover:text-[#A68A64] transition-colors rounded-full"
                >
                    <Phone size={20} />
                    <span className="text-[10px] tracking-widest font-sans font-medium">電話</span>
                </a>

                {/* Divider */}
                <div className="w-[1px] h-8 bg-white/10" />

                {/* Line Reservation (Primary Action) */}
                <a
                    href="https://line.me/R/ti/p/@your_line_id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[1.5] flex items-center justify-center gap-2 py-3 bg-[#A68A64] text-white rounded-full shadow-[0_8px_20px_-4px_rgba(166,138,100,0.4)] border border-[#A68A64]/30 hover:bg-[#8f7551] transition-transform active:scale-95 mx-1"
                >
                    <CalendarHeart size={20} />
                    <span className="text-xs tracking-widest font-sans font-bold">LINE予約</span>
                </a>

                {/* Divider */}
                <div className="w-[1px] h-8 bg-white/10" />

                {/* Map */}
                <a
                    href="#access"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('status')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-[#EAE6DF] hover:text-[#A68A64] transition-colors rounded-full"
                >
                    <MapPin size={20} />
                    <span className="text-[10px] tracking-widest font-sans font-medium">アクセス</span>
                </a>

            </div>
        </motion.div>
    );
}
