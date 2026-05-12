import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Target, 
  PhoneCall, 
  Mail,
  Kanban,
  BarChart3,
  Calendar,
  MessageSquare,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function LeadsCRM() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                Sales Acceleration
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                Turn Leads into <span className="text-blue-600">Relationships.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Stop losing deals in messy spreadsheets. Mera Dhanda CRM provides a crystal-clear view of your sales funnel, helping you close more deals with less effort.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2 group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Book a Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/leads_crm_preview_1778579439651.png" 
                  alt="CRM Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Interactive Kanban Mockup */}
                <div className="absolute top-1/2 -right-12 translate-y-[-50%] w-64 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 hidden xl:block">
                   <p className="text-sm font-bold mb-4 flex items-center gap-2">
                      <Kanban size={16} className="text-blue-600" />
                      Active Deals
                   </p>
                   <div className="space-y-3">
                      {[
                        { title: "New Order - ImTech", value: "₹2,45,000", stage: "Negotiation" },
                        { title: "Service AMC - Metro", value: "₹48,000", stage: "Discovery" }
                      ].map((deal, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                           <p className="text-xs font-bold text-gray-900">{deal.title}</p>
                           <div className="flex justify-between items-center mt-2">
                              <span className="text-[10px] text-blue-600 font-bold px-2 py-0.5 bg-blue-50 rounded-full">{deal.stage}</span>
                              <span className="text-xs font-black text-gray-900">{deal.value}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">A CRM that works for you</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Designed to be simple enough for anyone to use, yet powerful enough to scale with your enterprise.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Lead Intelligence",
                desc: "AI-driven scoring tells you which leads to call first, based on 50+ engagement signals.",
                color: "text-blue-600 bg-blue-50"
              },
              {
                icon: Kanban,
                title: "Visual Pipeline",
                desc: "Drag-and-drop your way to success with customizable Kanban boards for every sales process.",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: PhoneCall,
                title: "Cloud Calling",
                desc: "Call directly from the CRM. Automatically log every conversation, recording, and outcome.",
                color: "text-green-600 bg-green-50"
              },
              {
                icon: Clock,
                title: "Auto-Reminders",
                desc: "Never let a lead go cold. Set automated WhatsApp and email follow-ups for every deal stage.",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: Mail,
                title: "Email Sync",
                desc: "Bi-directional sync with Gmail and Outlook. Track opens, clicks, and reply rates effortlessly.",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Share notes, tag teammates, and assign tasks directly on lead profiles for better alignment.",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: BarChart3,
                title: "Revenue Forecast",
                desc: "Get accurate sales predictions. Know exactly how much revenue is coming in next month.",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: ShieldCheck,
                title: "Data Security",
                desc: "Enterprise-grade encryption ensures your customer data and sales strategies stay private.",
                color: "text-emerald-600 bg-emerald-50"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
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

      {/* Content Expansion: The Funnel */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8">Master the entire <span className="text-blue-400 italic">Sales Lifecycle.</span></h2>
              
              <div className="space-y-6">
                 {[
                   { step: "Lead Capture", desc: "Instantly capture leads from your website, WhatsApp, and social media ads." },
                   { step: "Qualification", desc: "Use custom fields and AI scoring to identify high-intent prospects immediately." },
                   { step: "Nurturing", desc: "Automate follow-up sequences to keep your brand top-of-mind without manual effort." },
                   { step: "Closing", desc: "Generate GST-ready quotes and proforma invoices directly from the deal view." },
                   { step: "Retention", desc: "Turn customers into advocates with automated check-ins and loyalty triggers." }
                 ].map((stage, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                         <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold border-4 border-gray-900 relative z-10">
                            {i + 1}
                         </div>
                         {i < 4 && <div className="w-0.5 h-full bg-gray-800 -mt-1 group-hover:bg-blue-600 transition-colors" />}
                      </div>
                      <div className="pb-8">
                         <h4 className="text-xl font-bold text-white mb-2">{stage.step}</h4>
                         <p className="text-gray-400 leading-relaxed">{stage.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />
               <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-12">
                     <div>
                        <p className="text-blue-400 text-xs font-black uppercase tracking-widest">Analytics</p>
                        <h3 className="text-2xl font-bold">Sales Conversion</h3>
                     </div>
                     <BarChart3 className="text-blue-400" size={32} />
                  </div>
                  
                  <div className="space-y-8">
                     {[
                       { label: "New Leads", count: "1,240", percent: 100, color: "bg-blue-600" },
                       { label: "Qualified", count: "840", percent: 68, color: "bg-blue-500" },
                       { label: "Proposals", count: "420", percent: 34, color: "bg-blue-400" },
                       { label: "Won", count: "185", percent: 15, color: "bg-green-500" }
                     ].map((stat, i) => (
                       <div key={i}>
                          <div className="flex justify-between text-sm mb-2">
                             <span className="font-bold">{stat.label}</span>
                             <span className="text-gray-400">{stat.count}</span>
                          </div>
                          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${stat.percent}%` }}
                               transition={{ duration: 1, delay: i * 0.1 }}
                               className={`h-full ${stat.color} rounded-full`}
                             />
                          </div>
                       </div>
                     ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-gray-400 text-xs uppercase mb-1">Avg. Deal Cycle</p>
                        <p className="text-2xl font-bold">14 Days</p>
                     </div>
                     <div>
                        <p className="text-gray-400 text-xs uppercase mb-1">Win Rate</p>
                        <p className="text-2xl font-bold text-green-400">24.2%</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">Ready to grow your revenue?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Join the high-performing sales teams who use Mera Dhanda to close more deals every single day.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              Start Free Trial
            </button>
            <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-gray-800 transition-all">
              Watch a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
