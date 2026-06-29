import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import StatsBar from '@/components/stats-bar';
import TrendingSection from '@/components/trending-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <TrendingSection />
      <Footer />
    </main>
  );
}
