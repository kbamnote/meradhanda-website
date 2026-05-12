import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#111827] py-32 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-[1.1]">
            Ready to bring your entire <br/> 
            <span className="text-blue-500 italic">business together?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Start free. Add your team. See the difference in a week. <br/>
            Join 5,000+ businesses growing with Mera Dhanda.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-blue-600 text-white text-lg font-black rounded-2xl hover:bg-blue-700 transition-colors shadow-2xl shadow-blue-600/20"
            >
              Start Free Trial
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent text-white text-lg font-black rounded-2xl border-2 border-white/10 transition-all"
            >
              Talk to Sales
            </motion.button>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-gray-500"
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
