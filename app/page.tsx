import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import MenuSection from '@/components/MenuSection';
import StorySection from '@/components/StorySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0C0B] text-[#EAE6DF] overflow-x-hidden">
      <Header />
      <Hero />
      <InfoSection />
      <MenuSection />
      <StorySection />
      <Footer />
    </main>
  );
}
