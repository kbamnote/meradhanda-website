import Hero from '../sections/Hero';
import StatsBar from '../sections/StatsBar';
import BusinessSolution from '../sections/BusinessSolution';
import ProductionSection from '../sections/ProductionSection';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <BusinessSolution />
      <ProductionSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
