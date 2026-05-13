import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="pt-16">
      <section className="bg-[#F6F5F0] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
              Transparent Plans
            </span>
            <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Flexible plans for <br/>
              <span className="text-blue-600 italic">every business scale.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Choose the package that fits your current needs. Upgrade anytime as your operations expand and your team grows.
            </p>
          </motion.div>
        </div>
      </section>

      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
