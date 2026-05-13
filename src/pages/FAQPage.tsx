import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import { motion } from 'framer-motion';

export default function FAQPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
              Help Center
            </span>
            <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Knowledge Base & <br/>
              <span className="text-blue-600 italic">Frequently Asked Questions.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our platform, security, billing, and integrations. Our support team is always here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </div>
  );
}
