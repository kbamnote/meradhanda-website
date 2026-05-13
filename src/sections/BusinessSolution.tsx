import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function BusinessSolution() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 Digital Transformation
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 Convert your business to <br/>
                 <span className="text-blue-600">company in 10 minutes.</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 Experience the fastest way to incorporate. We've automated the complex legal paperwork so you can transition from a small business to a corporate powerhouse instantly.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { text: "Fastest Processing", icon: Clock },
                    { text: "Legally Compliant", icon: ShieldCheck },
                    { text: "Corporate Ready", icon: Building2 },
                    { text: "Verified Experts", icon: CheckCircle2 }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <feature.icon size={20} className="text-blue-600" />
                       </div>
                       <span className="font-bold text-gray-700">{feature.text}</span>
                    </div>
                  ))}
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="group inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
               >
                 Start Conversion Now
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>

          {/* Right Media Card */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 relative group"
          >
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] blur-2xl group-hover:bg-blue-600/10 transition-colors" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-2xl shadow-blue-900/10">
              <img
                src="/images/business_solution.png"
                alt="Business Solution Interface"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Status Overlay */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50 flex items-center gap-4"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
                  <p className="text-sm font-black text-gray-900">Company Registered</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
