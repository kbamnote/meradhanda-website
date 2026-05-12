import { motion, type Variants } from 'framer-motion';
import { 
  ArrowRight, 
  ClipboardList, 
  Clock, 
  ShieldCheck,
  Layers,
  Settings,
  AlertTriangle,
  BarChart3,
  HardHat
} from 'lucide-react';

export default function ProductionTracking() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span 
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                Smart Manufacturing
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                Production <span className="text-amber-600 italic">Redefined.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Monitor your floor in real-time. From Bill of Materials (BOM) to final dispatch, track every job card and eliminate bottlenecks with surgical precision.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-all flex items-center gap-2 group">
                  Start Tracking
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Request Factory Tour
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-amber-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/production_tracking_preview_1778579471889.png" 
                  alt="Production Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Real-time Status Floating UI */}
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 hidden md:block w-48"
                >
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Line 01 Status</p>
                   </div>
                   <p className="text-sm font-black text-gray-900">Printing Stage</p>
                   <div className="mt-3 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-amber-500 rounded-full" />
                   </div>
                   <p className="text-[10px] text-gray-500 mt-2">75% Complete</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">The Digital Backbone of your Factory</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Eliminate manual logs and paper job cards. Digitizing your floor has never been this intuitive.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardList,
                title: "Digital Job Cards",
                desc: "Assign tasks to operators digitally. Track start times, end times, and reasons for downtime instantly.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Layers,
                title: "BOM Management",
                desc: "Multi-level Bill of Materials with automated cost calculation and real-time inventory deduction.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Clock,
                title: "Real-time Monitoring",
                desc: "Live visibility into every production stage. Know exactly which order is delayed and why.",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: ShieldCheck,
                title: "Quality Checkpoints",
                desc: "Mandatory QC stages with photo proofing and digital sign-offs to ensure zero defects.",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Settings,
                title: "Machine Maintenance",
                desc: "Predictive maintenance alerts based on run-hours to prevent unexpected floor shutdowns.",
                color: "bg-indigo-50 text-indigo-600"
              },
              {
                icon: AlertTriangle,
                title: "Wastage Analytics",
                desc: "Track scrap and rework at each stage. Identify cost-saving opportunities through data.",
                color: "bg-red-50 text-red-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Lifecycle Visualizer */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">Zero blind spots on the <span className="text-amber-500">factory floor.</span></h2>
                 
                 <div className="space-y-12">
                    {[
                      { step: "Planning & BOM", desc: "Define raw materials, sub-assemblies, and labor requirements for each product." },
                      { step: "Work Order Creation", desc: "Generate digital job cards and distribute them to relevant machine operators." },
                      { step: "Stage Tracking", desc: "Operators update progress in real-time via simple mobile or tablet interfaces." },
                      { step: "Quality Control", desc: "QC team validates output against specs before the order moves to packing." }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-8 relative group">
                         <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold group-hover:bg-amber-500 group-hover:text-black transition-all">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-px h-16 bg-white/10 mt-4 group-hover:bg-amber-500/30 transition-colors" />}
                         </div>
                         <div>
                            <h4 className="text-2xl font-bold mb-2">{phase.step}</h4>
                            <p className="text-gray-400 leading-relaxed">{phase.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 relative">
                 <div className="absolute inset-0 bg-amber-500/20 blur-[120px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10">
                    <div className="flex items-center justify-between mb-10">
                       <h3 className="text-2xl font-bold">Floor Efficiency</h3>
                       <BarChart3 className="text-amber-500" />
                    </div>
                    
                    <div className="space-y-10">
                       {[
                         { label: "OEE (Overall Equipment Effectiveness)", value: "84.2%", progress: 84 },
                         { label: "Availability", value: "91.0%", progress: 91 },
                         { label: "Performance", value: "88.5%", progress: 88 },
                         { label: "Quality Rate", value: "99.1%", progress: 99 }
                       ].map((stat, i) => (
                         <div key={i}>
                            <div className="flex justify-between mb-3 text-sm font-bold">
                               <span className="text-gray-400 uppercase tracking-widest text-[10px]">{stat.label}</span>
                               <span>{stat.value}</span>
                            </div>
                            <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${stat.progress}%` }}
                                 transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                                 className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                       <HardHat className="text-amber-500" size={32} />
                       <div>
                          <p className="text-sm font-bold">Smart Suggestion</p>
                          <p className="text-xs text-gray-400 mt-1">Line 03 idle time is 15% higher than average. Consider re-evaluating operator shifts.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">Ready to modernize your production?</h2>
           <p className="text-xl text-gray-600 mb-12">Stop relying on guesswork. Get the real-time data you need to scale your manufacturing output.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-amber-600 text-white rounded-2xl font-black text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-100">
                 Get Started Free
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 Speak with Expert
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
