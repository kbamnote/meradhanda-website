import { motion } from 'framer-motion';
import { ArrowRight, Users, Heart, ClipboardCheck, Sparkles } from 'lucide-react';

export default function PeopleSection() {
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
      {/* Decorative Connector */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
         <motion.path
           initial={{ pathLength: 0 }}
           whileInView={{ pathLength: 1 }}
           transition={{ duration: 2, ease: "easeInOut" }}
           viewport={{ once: true }}
           d="M 48vw 75vh Q 52vw 68vh 56vw 62vh"
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
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-2xl">
              <img
                src="/images/team-photo.jpg"
                alt="Team collaborating"
                className="w-full h-[50vh] lg:h-[62vh] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* HR Stats Overlay */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl border border-white/50 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                   <Users size={32} />
                </div>
                <div>
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none mb-2 text-left">Active Workforce</p>
                   <p className="text-3xl font-black text-gray-900 leading-none">48 Members</p>
                </div>
              </motion.div>

              {/* Happiness Indicator */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/50 flex items-center gap-2 shadow-xl"
              >
                 <Heart size={16} className="text-red-500 fill-red-500" />
                 <span className="text-xs font-black text-gray-900 uppercase tracking-wider">98% Satisfaction</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <div className="lg:pl-10">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 Human Capital
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 Take care of the <br/>
                 <span className="text-blue-600 italic">entire team.</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 Attendance, leaves, and payroll—automated and accurate. Compliance-ready reports, without the manual spreadsheet marathon.
               </p>
               
               <div className="space-y-8 mb-12">
                  {[
                    { icon: Sparkles, title: "Automated Payroll", desc: "One-click salary disbursement with tax compliance." },
                    { icon: ClipboardCheck, title: "Smart Attendance", desc: "Geofenced and facial recognition attendance." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-5 group">
                       <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <feat.icon size={24} />
                       </div>
                       <div>
                          <h4 className="text-lg font-black text-gray-900 mb-1">{feat.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="group inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
               >
                 Explore People Module
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
