import { motion } from 'framer-motion';
import { ArrowRight, Factory, Timer, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProductionSection() {
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
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Text content */}
          <div className="lg:pr-10 order-2 lg:order-1">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 Operational Excellence
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 See the floor. <br/>
                 <span className="text-orange-600 italic">Spot the bottleneck.</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 Plan jobs, track progress, and catch delays before they become fire drills. Everyone knows exactly what to work on next.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  {[
                    { icon: Factory, title: "Floor Control", desc: "Real-time machine & station monitoring." },
                    { icon: Timer, title: "WIP Tracking", desc: "Know where every job is, instantly." },
                    { icon: ShieldCheck, title: "QA Checkpoints", desc: "Integrated quality control at every step." },
                    { icon: AlertCircle, title: "Delay Alerts", desc: "Predictive warnings for schedule slips." }
                  ].map((feat, i) => (
                    <div key={i} className="group cursor-default">
                       <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                          <feat.icon size={20} />
                       </div>
                       <h4 className="text-lg font-black text-gray-900 mb-1">{feat.title}</h4>
                       <p className="text-sm text-gray-500">{feat.desc}</p>
                    </div>
                  ))}
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="group inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
               >
                 Production Roadmap
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>

          {/* Right Media Card (The Visualizer) */}
          <motion.div 
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 bg-orange-600/5 rounded-[2rem] blur-2xl pointer-events-none" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-gray-50 p-4 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 p-6">
                 {/* Production Steps Visualizer */}
                 <div className="space-y-4">
                    {[
                      { step: "Raw Material", status: "Completed", time: "08:00 AM", color: "bg-green-500" },
                      { step: "Cutting & Shaping", status: "In Progress", time: "10:30 AM", color: "bg-blue-500", active: true },
                      { step: "Assembly Line", status: "Pending", time: "02:00 PM", color: "bg-gray-200" },
                      { step: "Quality Audit", status: "Pending", time: "04:30 PM", color: "bg-gray-200" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className={`p-4 rounded-xl border flex items-center justify-between ${
                          item.active ? 'border-orange-200 bg-orange-50 shadow-lg shadow-orange-500/5' : 'border-gray-50'
                        }`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`w-2 h-2 rounded-full ${item.color} ${item.active ? 'animate-pulse' : ''}`} />
                            <div>
                               <p className="text-sm font-black text-gray-900">{item.step}</p>
                               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.status}</p>
                            </div>
                         </div>
                         <span className="text-xs font-bold text-gray-400">{item.time}</span>
                      </motion.div>
                    ))}
                 </div>

                 {/* Efficiency Gauge Mock */}
                 <div className="mt-8 pt-8 border-t border-gray-50">
                    <div className="flex justify-between items-end mb-4">
                       <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Floor Efficiency</p>
                          <p className="text-2xl font-black text-gray-900">92.4%</p>
                       </div>
                       <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
                          <TrendingUp size={14} /> +2.1%
                       </div>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "92.4%" }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                         className="h-full bg-orange-500 rounded-full"
                       />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
