import Hero from '../sections/Hero';
import ClientTrustBar from '../sections/ClientTrustBar';
import StatsBar from '../sections/StatsBar';
import SalesSection from '../sections/SalesSection';
import ProductionSection from '../sections/ProductionSection';
import PeopleSection from '../sections/PeopleSection';
import Features from '../sections/Features';
import Solutions from '../sections/Solutions';
import Services from '../sections/Services';
import Integrations from '../sections/Integrations';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientTrustBar />
      <StatsBar />
      <SalesSection />
      <ProductionSection />
      <PeopleSection />
      <Features />
      <Solutions />
      <Services />
      <Integrations />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
