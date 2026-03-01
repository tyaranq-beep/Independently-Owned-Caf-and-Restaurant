'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0D0C0B]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-widest text-[#EAE6DF]">
          KOTONOHA
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#news" className="font-sans font-medium text-sm tracking-widest text-[#EAE6DF]/80 hover:text-[#A68A64] transition-colors">
            お知らせ
          </a>
          <a href="#status" className="font-sans font-medium text-sm tracking-widest text-[#EAE6DF]/80 hover:text-[#A68A64] transition-colors">
            営業状況
          </a>
          <a href="#menu" className="font-sans font-medium text-sm tracking-widest text-[#EAE6DF]/80 hover:text-[#A68A64] transition-colors">
            メニュー
          </a>
          <a href="#story" className="font-sans font-medium text-sm tracking-widest text-[#EAE6DF]/80 hover:text-[#A68A64] transition-colors">
            わたしたちの想い
          </a>
          <a href="#access" className="font-sans font-medium text-sm tracking-widest text-[#EAE6DF]/80 hover:text-[#A68A64] transition-colors">
            店舗情報
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#EAE6DF]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#0D0C0B]/95 backdrop-blur-lg py-8 px-6 flex flex-col gap-6 border-t border-white/10 md:hidden"
        >
          <a href="#news" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-lg tracking-widest text-[#EAE6DF] hover:text-[#A68A64] transition-colors border-b border-white/10 pb-4">
            お知らせ
          </a>
          <a href="#status" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-lg tracking-widest text-[#EAE6DF] hover:text-[#A68A64] transition-colors border-b border-white/10 pb-4">
            営業状況
          </a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-lg tracking-widest text-[#EAE6DF] hover:text-[#A68A64] transition-colors border-b border-white/10 pb-4">
            メニュー
          </a>
          <a href="#story" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-lg tracking-widest text-[#EAE6DF] hover:text-[#A68A64] transition-colors border-b border-white/10 pb-4">
            わたしたちの想い
          </a>
          <a href="#access" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-lg tracking-widest text-[#EAE6DF] hover:text-[#A68A64] transition-colors">
            店舗情報
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
