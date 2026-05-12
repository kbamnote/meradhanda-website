import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react';

export default function SalesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full py-24 bg-[#F6F5F0] overflow-hidden">
      {/* Dynamic Connector Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
         <motion.path
           initial={{ pathLength: 0 }}
           whileInView={{ pathLength: 1 }}
           transition={{ duration: 2, ease: "easeInOut" }}
           viewport={{ once: true }}
           d="M 52vw 35vh Q 58vw 42vh 54vw 50vh"
           fill="none"
           stroke="#2563EB"
           strokeWidth="2"
           strokeDasharray="8 4"
         />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Media Card */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] blur-2xl group-hover:bg-blue-600/10 transition-colors" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-2xl shadow-blue-900/5">
              <img
                src="/images/sales-ui.jpg"
                alt="Sales CRM Interface"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Metric Chips */}
              <div className="absolute top-6 left-6 right-6 flex gap-3 flex-wrap">
                {[
                  { label: 'New Leads', value: '125', icon: Users, color: 'text-blue-600' },
                  { label: 'Win Rate', value: '34%', icon: Target, color: 'text-purple-600' },
                  { label: 'Converted', value: '42', icon: TrendingUp, color: 'text-green-600' },
                ].map((chip, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-white/50 flex items-center gap-3"
                  >
                    <div className={`${chip.color} bg-current/10 p-1.5 rounded-lg`}>
                      <chip.icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{chip.label}</p>
                      <p className={`text-sm font-black ${chip.color}`}>{chip.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Activity Pulse Overlay */}
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 right-6 bg-green-500 w-3 h-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              />
            </div>
          </motion.div>

          {/* Right Text Content */}
          <div className="lg:pl-10">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 Revenue Engine
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 Turn conversations into <br/>
                 <span className="text-blue-600 italic">conversions.</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 Track leads, follow-ups, and deals in one unified pipeline. Automate reminders, assign owners, and never let a hot lead go cold.
               </p>
               
               <div className="space-y-6 mb-12">
                  {[
                    "Smart lead scoring & prioritization",
                    "Automated WhatsApp & Email follow-ups",
                    "Interactive Kanban deal pipeline",
                    "Real-time sales performance analytics"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Zap size={14} className="text-blue-600" />
                       </div>
                       <span className="font-bold text-gray-700">{feature}</span>
                    </div>
                  ))}
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="group inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
               >
                 Explore Sales Module
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
