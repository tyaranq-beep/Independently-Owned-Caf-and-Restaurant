'use client';

import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DemoBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check session storage to see if the user already closed the banner
        const isClosed = sessionStorage.getItem('demoBannerClosed');
        if (!isClosed) {
            // Delaying slightly so it gracefully drops in after page load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('demoBannerClosed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed top-0 left-0 right-0 z-[60] py-3 px-6 bg-[#A68A64] text-white flex items-center justify-center shadow-lg"
                >
                    <div className="flex items-center gap-3 w-full max-w-7xl mx-auto relative justify-center">
                        <p className="text-sm md:text-base font-medium font-sans tracking-wide text-center">
                            デモサイトについて：このサイトはデモ用のサンプルです。デザイン・イメージカラーはお客様のブランドに合わせてカスタマイズします。 掲載中の画像はすべてイメージ素材であり、実際のサービスではお客様ご提供の写真に差し替えます。
                        </p>
                        <button
                            onClick={handleClose}
                            className="absolute right-0 p-1 hover:bg-white/20 rounded-full transition-colors"
                            aria-label="Close banner"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
