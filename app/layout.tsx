import type {Metadata} from 'next';
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google';
import './globals.css'; // Global styles

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cafe Kotonoha | カフェ・コトノハ',
  description: '最高の一杯と居心地の良い空間を提供する、デジタル上の「完璧なエントランス」。',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-[#0D0C0B] text-[#EAE6DF] antialiased selection:bg-[#A68A64] selection:text-[#0D0C0B]">
        {children}
      </body>
    </html>
  );
}
