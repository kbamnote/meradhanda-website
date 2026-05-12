import { motion, type Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Wallet, 
  Calculator, 
  FileText, 
  Landmark,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  RefreshCw
} from 'lucide-react';

export default function Accounting() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-emerald-50/30 to-white">
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
                className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                Financial Intelligence
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                Accounting that <span className="text-emerald-600 italic">Balances Itself.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Mera Dhanda removes the complexity from business finance. Automated ledgers, bank reconciliation, and CA-ready reports—all updated in real-time as you do business.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center gap-2 group">
                  Open Your Ledger
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Book Free Audit
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/advanced_accounting_preview_1778579455482.png" 
                  alt="Accounting Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Profit/Loss Snapshot UI */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block w-64"
                >
                   <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Monthly Profit</p>
                      <TrendingUp className="text-emerald-500" size={16} />
                   </div>
                   <p className="text-3xl font-black text-gray-900">₹4,82,450</p>
                   <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold mt-2">
                      <ArrowUpRight size={14} />
                      <span>12.5% vs last month</span>
                   </div>
                   <div className="mt-4 pt-4 border-t border-gray-50 grid grid-cols-2 gap-4">
                      <div>
                         <p className="text-[10px] text-gray-400 uppercase">Income</p>
                         <p className="text-xs font-bold">₹12.4L</p>
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-400 uppercase">Expense</p>
                         <p className="text-xs font-bold">₹7.6L</p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Modules */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">Your entire finance department, digitized.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Scale your business with the confidence that your numbers are always accurate and compliant.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Landmark,
                title: "Bank Auto-Sync",
                desc: "Securely link your bank accounts. Transactions are automatically categorized and matched with invoices.",
                color: "text-blue-600 bg-blue-50"
              },
              {
                icon: Calculator,
                title: "Tally/CA Export",
                desc: "One-click export for all your data. Your CA gets everything they need in their preferred format.",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: FileText,
                title: "Statutory Reports",
                desc: "Instant Balance Sheets, Profit & Loss Statements, and Cash Flow reports. Audit-ready, always.",
                color: "text-green-600 bg-green-50"
              },
              {
                icon: RefreshCw,
                title: "Ledger Automation",
                desc: "Double-entry bookkeeping happens behind the scenes as you generate bills or record purchases.",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: ShieldCheck,
                title: "Expense Control",
                desc: "Track every petty cash expense. Set budget limits for departments and get over-spending alerts.",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: PieChart,
                title: "Tax Planning AI",
                desc: "Our AI analyzes your numbers to suggest legal tax-saving opportunities throughout the year.",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: Zap,
                title: "Multi-Entity Support",
                desc: "Manage multiple business units or branches with consolidated financial reporting.",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: Wallet,
                title: "Payment Collection",
                desc: "Automatically track receivables. Send automated payment reminders via WhatsApp and Email.",
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

      {/* Financial Health Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Total visibility into your <span className="text-emerald-400 italic">Financial Health.</span></h2>
                 
                 <div className="space-y-12">
                    {[
                      { step: "Transaction Entry", desc: "bills, purchases, and expenses are recorded instantly at the source." },
                      { step: "Automatic Categorization", desc: "Our engine maps every entry to the correct ledger and tax head automatically." },
                      { step: "Real-time Reconciliation", desc: "Bank balances and internal ledgers are matched to ensure zero discrepancies." },
                      { step: "Strategic Insights", desc: "Get deep-dives into your burn rate, runway, and department-wise profitability." }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-8 relative group">
                         <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-black transition-all">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-px h-16 bg-white/10 mt-4 group-hover:bg-emerald-500/30 transition-colors" />}
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
                 <div className="absolute inset-0 bg-emerald-500/10 blur-[150px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 lg:p-14">
                    <div className="flex items-center justify-between mb-12">
                       <h3 className="text-2xl font-bold">P&L Preview</h3>
                       <TrendingUp className="text-emerald-500" />
                    </div>
                    
                    <div className="space-y-8">
                       {[
                         { label: "Net Revenue", val: "₹1,24,00,000", p: 100, c: "bg-emerald-500" },
                         { label: "Direct Costs", val: "₹42,00,000", p: 34, c: "bg-red-400" },
                         { label: "Operating Exp.", val: "₹28,00,000", p: 22, c: "bg-orange-400" },
                         { label: "Net Profit", val: "₹54,00,000", p: 44, c: "bg-blue-500" }
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
                    
                    <button className="mt-12 w-full py-4 bg-emerald-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all">
                       Download Audit Report
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">Numbers you can trust.</h2>
           <p className="text-xl text-gray-600 mb-12">Take the first step towards perfect financial management. Switch to Mera Dhanda Accounting today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
                 Start Free Trial
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 Request a Demo
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
