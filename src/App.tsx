import Header from './components/Header';
import Hero from './components/Hero';
import DesireSection from './components/DesireSection';
import MainOffer from './components/MainOffer';
import WhyOrder from './components/WhyOrder';
import HoursAndAreas from './components/HoursAndAreas';
import SocialProof from './components/SocialProof';
import Payment from './components/Payment';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-cream text-brand-green">
      <Header />
      <Hero />
      <DesireSection />
      <MainOffer />
      <WhyOrder />
      <HoursAndAreas />
      <SocialProof />
      <Payment />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingButton />
    </div>
  );
}
