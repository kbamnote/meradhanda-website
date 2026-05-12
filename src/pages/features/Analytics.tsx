import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Zap,
  Activity,
  Target,
  Users,
  Box,
  ArrowUpRight,
  Filter
} from 'lucide-react';

export default function Analytics() {
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                Intelligence Engine
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                Decision Making, <span className="text-purple-600 italic">Simplified.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Transform raw data into actionable insights. Mera Dhanda's analytics engine processes thousands of transactions to give you a clear roadmap for growth.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2 group">
                  View Demo Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Request Custom Report
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/real_time_analytics_preview_1778579404688.png" 
                  alt="Analytics Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Floating KPI Cards */}
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block w-56"
                >
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Orders</p>
                   </div>
                   <p className="text-2xl font-black text-gray-900">1,240</p>
                   <div className="mt-4 pt-4 border-t border-gray-50">
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] text-gray-400">Target</p>
                            <p className="text-xs font-bold">1,500</p>
                         </div>
                         <div className="text-[10px] text-purple-600 font-bold">82%</div>
                      </div>
                      <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                         <div className="w-[82%] h-full bg-purple-500 rounded-full" />
                      </div>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Modules Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">Every metric that matters.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From high-level revenue charts to granular employee productivity, we track it all so you don't have to.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Sales Funnel",
                desc: "Track leads to conversion. Identify exactly where you are losing potential customers.",
                color: "text-blue-600 bg-blue-50"
              },
              {
                icon: TrendingUp,
                title: "Revenue Forecast",
                desc: "AI-powered predictions based on historical data and seasonal trends.",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: Users,
                title: "Team Productivity",
                desc: "Monitor staff output, target achievements, and individual efficiency scores.",
                color: "text-green-600 bg-green-50"
              },
              {
                icon: Box,
                title: "Inventory Turn",
                desc: "Identify slow-moving stock and high-demand items to optimize procurement.",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: Activity,
                title: "Real-time Feed",
                desc: "A live scroll of every significant event happening across your business units.",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: Target,
                title: "Goal Tracking",
                desc: "Set monthly or quarterly targets for departments and track progress in real-time.",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: Filter,
                title: "Deep Segmentation",
                desc: "Filter your data by location, product category, date range, or customer type.",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: Zap,
                title: "Custom Dashboards",
                desc: "Build your own views with the metrics that matter most to your specific role.",
                color: "text-emerald-600 bg-emerald-50"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Data Deep-Dive */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Visualize your <span className="text-purple-400 italic">Success.</span></h2>
                 
                 <div className="space-y-12">
                    {[
                      { step: "Data Aggregation", desc: "We pull data from sales, inventory, and production into one unified lake." },
                      { step: "Pattern Recognition", desc: "Our engine identifies correlations between variables you might have missed." },
                      { step: "Automated Reporting", desc: "Get daily, weekly, or monthly summaries delivered to your inbox or WhatsApp." },
                      { step: "Strategic Alerts", desc: "Instant notifications when a KPI drops below your defined threshold." }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-8 relative group">
                         <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold group-hover:bg-purple-500 group-hover:text-black transition-all">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-px h-16 bg-white/10 mt-4 group-hover:bg-purple-500/30 transition-colors" />}
                         </div>
                         <div>
                            <h4 className="text-2xl font-bold mb-2 uppercase tracking-wide">{phase.step}</h4>
                            <p className="text-gray-400 leading-relaxed">{phase.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-purple-500/10 blur-[150px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 lg:p-14">
                    <div className="flex items-center justify-between mb-12">
                       <h3 className="text-2xl font-bold">Growth Velocity</h3>
                       <Activity className="text-purple-500" />
                    </div>
                    
                    <div className="space-y-10">
                       {[
                         { label: "New Leads", val: "420", p: 75, c: "bg-purple-500" },
                         { label: "Conversion Rate", val: "12.4%", p: 45, c: "bg-blue-400" },
                         { label: "Retention", val: "94.2%", p: 94, c: "bg-green-400" },
                         { label: "CAC (avg)", val: "₹142", p: 25, c: "bg-red-400" }
                       ].map((stat, i) => (
                         <div key={i}>
                            <div className="flex justify-between text-sm font-bold mb-3">
                               <span className="text-gray-400 uppercase tracking-widest text-[10px]">{stat.label}</span>
                               <span>{stat.val}</span>
                            </div>
                            <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${stat.p}%` }}
                                 transition={{ duration: 1.2, delay: i * 0.1 }}
                                 className={`h-full ${stat.c} rounded-full`}
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="mt-12 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center gap-4">
                       <TrendingUp className="text-purple-500" size={32} />
                       <div>
                          <p className="text-sm font-bold">Smart Insight</p>
                          <p className="text-xs text-gray-400 mt-1">Saturday afternoons show a 40% higher lead volume. Consider increasing support staff then.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">Stop flying blind.</h2>
           <p className="text-xl text-gray-600 mb-12">Empower your business with the data it needs to dominate the market. Start your analytics journey today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-purple-600 text-white rounded-2xl font-black text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-100">
                 Get Started Free
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 Speak with Data Scientist
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
