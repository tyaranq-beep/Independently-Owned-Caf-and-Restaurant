import type { Metadata } from 'next';
import { Noto_Serif_JP, M_PLUS_Rounded_1c } from 'next/font/google';
import './globals.css';
import StickyBookingBar from '@/components/StickyBookingBar';
import DemoBanner from '@/components/DemoBanner';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '〇〇カフェ | 地元で愛される手作りランチと自家焙煎珈琲',
  description: '地元の新鮮な野菜を使った日替わりランチと、店内で丁寧に焙煎したコーヒー。木の温もりあふれる店内で、心ほぐれるひとときをお過ごしください。',
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${mPlusRounded.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-[#0D0C0B] text-[#EAE6DF] antialiased selection:bg-[#A68A64] selection:text-[#0D0C0B]">
        <DemoBanner />
        {children}
        <StickyBookingBar />
      </body>
    </html>
  );
}
