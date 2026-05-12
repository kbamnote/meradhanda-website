import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Cpu, 
  MessageSquare,
  BarChart3,
  Lightbulb,
  Zap,
  Mic,
  ShieldCheck,
  Search,
  Users,
  Bell
} from 'lucide-react';

export default function AIAssistant() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-100/40 to-violet-100/40 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 border border-pink-100 rounded-full text-pink-600 text-xs font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles size={14} className="animate-pulse" />
                Intelligent Business Companion
              </motion.div>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight"
              >
                The Analyst that <span className="text-pink-600 italic">Never Sleeps.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
              >
                Mera Dhanda AI Assistant transforms complex business data into clear, actionable insights. Ask questions, automate tasks, and predict trends in plain English.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all flex items-center gap-3 group">
                  Experience AI Assistant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                   <Mic size={18} />
                   Voice Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-10 bg-pink-600/5 rounded-full blur-[80px]" />
              
              {/* Chat Interface Mockup */}
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                <div className="bg-gray-900 p-6 text-white flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
                         <Brain size={24} />
                      </div>
                      <div>
                         <p className="font-bold">Mera Dhanda AI</p>
                         <p className="text-[10px] text-pink-400 font-bold uppercase tracking-widest">Always Active</p>
                      </div>
                   </div>
                   <Zap size={20} className="text-pink-600" />
                </div>
                
                <div className="p-8 space-y-6">
                   <div className="flex justify-end">
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none max-w-[80%]">
                         <p className="text-sm text-gray-800">"Which products are at risk of going out of stock next week?"</p>
                      </div>
                   </div>
                   
                   <div className="flex justify-start">
                      <div className="bg-pink-50 p-5 rounded-2xl rounded-tl-none max-w-[90%] border border-pink-100">
                         <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={14} className="text-pink-600" />
                            <p className="text-xs font-bold text-pink-600 uppercase">Analysis Complete</p>
                         </div>
                         <p className="text-sm text-gray-800 mb-4">Based on current sales velocity, 3 items need reordering immediately:</p>
                         <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs p-2 bg-white rounded-lg">
                               <span className="font-medium">Organic Coffee Beans</span>
                               <span className="text-red-500 font-bold">2 days left</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-2 bg-white rounded-lg">
                               <span className="font-medium">Paper Cups (500ml)</span>
                               <span className="text-orange-500 font-bold">5 days left</span>
                            </div>
                         </div>
                         <button className="mt-4 w-full py-2 bg-pink-600 text-white rounded-lg text-xs font-bold">Create Purchase Orders</button>
                      </div>
                   </div>
                </div>
                
                <div className="p-4 border-t border-gray-50 flex gap-2">
                   <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-400 flex items-center gap-2">
                      <Search size={16} />
                      Ask anything about your business...
                   </div>
                   <div className="w-11 h-11 bg-pink-600 rounded-xl flex items-center justify-center text-white">
                      <ArrowRight size={20} />
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">More than just a chatbot</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our AI is deeply integrated into your workflows, learning and improving every single day.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Predictive Forecasting",
                desc: "Predict sales peaks and troughs with 92% accuracy. Prepare your inventory and staff before the rush hits.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                desc: "Automatically draft emails, generate reports, and create job cards based on customer requests or inventory alerts.",
                color: "bg-yellow-50 text-yellow-600"
              },
              {
                icon: Lightbulb,
                title: "Strategic Suggestions",
                desc: "Get daily 'What-If' scenarios and growth experiments suggested based on your specific business performance.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Search,
                title: "Conversational BI",
                desc: "No more complex SQL or Excel. Just ask: 'Compare our margin this quarter vs last quarter' and see the chart instantly.",
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                icon: ShieldCheck,
                title: "Fraud Detection",
                desc: "Our AI identifies unusual patterns in billing or inventory, alerting you to potential shrinkage or errors in real-time.",
                color: "bg-red-50 text-red-600"
              },
              {
                icon: Users,
                title: "Staff Performance AI",
                desc: "Automatically identify top performers and provide personalized training suggestions for team members who need it.",
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-[#FAFAFA] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-pink-100 transition-all group"
              >
                <div className={`w-16 h-16 rounded-[1.5rem] ${item.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon && (typeof item.icon === 'function' || typeof item.icon === 'object') ? (
                    <item.icon size={32} />
                  ) : (
                    <div className="w-8 h-8 bg-current opacity-20 rounded-full" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice & Chat Section */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-pink-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">Talk to your <br/> <span className="text-pink-500 italic">Business.</span></h2>
                 
                 <div className="space-y-12">
                    {[
                      { icon: MessageSquare, title: "Natural Language Queries", desc: "No need to learn complex software. Just type 'Show me sales from Mumbai this week' and get instant results." },
                      { icon: Mic, title: "Voice Command Integration", desc: "Keep your hands free on the floor. Use voice commands to update stock or check job card statuses." },
                      { icon: Bell, title: "Proactive AI Insights", desc: "Mera Dhanda doesn't just wait for you. It alerts you to risks and opportunities before they happen." }
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-black transition-all shrink-0">
                            <feature.icon size={28} />
                         </div>
                         <div>
                            <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 {/* Visual Representation of Voice Waves */}
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 lg:p-16 text-center">
                    <div className="flex justify-center gap-2 mb-12 h-20 items-center">
                       {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
                          <motion.div 
                            key={i}
                            animate={{ height: [`${h*100}%`, `${h*40}%`, `${h*100}%`] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                            className="w-3 bg-pink-500 rounded-full"
                          />
                       ))}
                    </div>
                    <p className="text-xl font-bold mb-4">"Hey Mera Dhanda, what is my projected revenue for next month?"</p>
                    <div className="mt-8 pt-8 border-t border-white/10">
                       <div className="bg-pink-500/20 border border-pink-500/30 p-6 rounded-2xl inline-block">
                          <p className="text-pink-400 font-bold text-sm">Based on current growth and seasonal trends, your projected revenue is ₹42.4L (up 15% YoY).</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-12">Built with <span className="text-pink-500 underline underline-offset-8">privacy-first</span> AI.</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
               <div>
                  <p className="text-4xl font-black text-pink-500 mb-2">100%</p>
                  <p className="text-lg font-bold text-gray-300 uppercase tracking-widest">Private Data</p>
                  <p className="text-sm text-gray-500 mt-4">Your business data is never used to train global models. It stays entirely within your workspace.</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-pink-500 mb-2">SOC2</p>
                  <p className="text-lg font-bold text-gray-300 uppercase tracking-widest">Compliance</p>
                  <p className="text-sm text-gray-500 mt-4">Built on enterprise-grade infrastructure with rigorous security audits and encryption at rest.</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-pink-500 mb-2">24/7</p>
                  <p className="text-lg font-bold text-gray-300 uppercase tracking-widest">Availability</p>
                  <p className="text-sm text-gray-500 mt-4">Zero downtime infrastructure ensures your assistant is ready whenever you make a decision.</p>
               </div>
            </div>
            
            <button className="mt-20 px-12 py-5 bg-white text-gray-900 rounded-2xl font-black text-xl hover:bg-pink-500 hover:text-white transition-all shadow-2xl">
               Get Your AI Assistant Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
