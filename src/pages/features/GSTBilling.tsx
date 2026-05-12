import { motion, type Variants } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calculator,
  History,
  Printer,
  Mail,
  Smartphone,
  CreditCard,
  Percent
} from 'lucide-react';

export default function GSTBilling() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                Government Compliant
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                Billing at the Speed of <span className="text-indigo-600 italic">Light.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Generate GST-compliant invoices in under 10 seconds. Automated tax slabs, HSN lookup, and instant WhatsApp sharing—all in one place.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2 group">
                  Start Billing Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  See Sample Invoice
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-indigo-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/gst_billing_preview_1778577648999.png" 
                  alt="Billing Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Floating Invoice Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 hidden md:block"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                         <CheckCircle2 size={20} />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-gray-400 uppercase">GST Verified</p>
                         <p className="text-sm font-black text-gray-900">Invoice #12402</p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">No more manual tax calculations.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We've built everything to ensure your business stays compliant while you focus on sales.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Calculator,
                title: "Auto-Tax Slab",
                desc: "GST, CGST, SGST, and IGST are calculated automatically based on customer location and product HSN.",
                color: "text-blue-600 bg-blue-50"
              },
              {
                icon: Printer,
                title: "Custom Templates",
                desc: "Choose from 10+ professional invoice themes. Add your logo, brand colors, and digital signature.",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: Mail,
                title: "Multi-Channel Share",
                desc: "Send invoices instantly via WhatsApp, Email, or SMS directly from the billing screen.",
                color: "text-green-600 bg-green-50"
              },
              {
                icon: History,
                title: "Quotation to Invoice",
                desc: "Convert estimates and quotations into GST invoices with a single click. No data re-entry.",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: CreditCard,
                title: "Payment Links",
                desc: "Include UPI QR codes or payment gateway links directly on the invoice for faster collections.",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: Smartphone,
                title: "Mobile Billing",
                desc: "Create invoices on the go with our fully responsive mobile interface. Perfect for field sales.",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: Percent,
                title: "Discount Management",
                desc: "Apply item-wise or bill-wise discounts. Manage promotional schemes and loyalty redemptions.",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: ShieldCheck,
                title: "Error Correction",
                desc: "Built-in validation checks prevent common GST errors before the invoice is finalized.",
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

      {/* Interactive Billing Flow */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Billing flow that <span className="text-indigo-400 italic">Feels Like Magic.</span></h2>
                 
                 <div className="space-y-8">
                    {[
                      { step: "Search & Select", desc: "Start typing a product or customer name. Our ultra-fast search finds them in milliseconds." },
                      { step: "Tax Validation", desc: "Mera Dhanda automatically applies the correct GST slab and HSN code for each item." },
                      { step: "Review & Save", desc: "Get a live preview of the invoice. Apply discounts or adjust quantities instantly." },
                      { step: "Dispatch & Paid", desc: "Share the digital copy and mark the payment status. Inventory is deducted automatically." }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold border-4 border-gray-900 relative z-10 group-hover:scale-110 transition-transform">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-0.5 h-full bg-gray-800 -mt-1 group-hover:bg-indigo-600 transition-colors" />}
                         </div>
                         <div className="pb-4">
                            <h4 className="text-xl font-bold text-white mb-2">{phase.step}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">{phase.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-indigo-600/10 blur-[150px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10">
                    <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
                       <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-4">
                          <div>
                             <h4 className="font-black text-xl">Tax Invoice</h4>
                             <p className="text-xs text-gray-400">#INV-2024-001</p>
                          </div>
                          <div className="w-10 h-10 bg-indigo-600 rounded-lg" />
                       </div>
                       
                       <div className="space-y-4 mb-8">
                          <div className="flex justify-between text-xs font-bold text-gray-400">
                             <span>ITEM DESCRIPTION</span>
                             <span>AMOUNT</span>
                          </div>
                          <div className="flex justify-between text-sm">
                             <span>Product Alpha (Qty: 2)</span>
                             <span className="font-bold">₹12,400.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                             <span>Product Beta (Qty: 1)</span>
                             <span className="font-bold">₹4,200.00</span>
                          </div>
                       </div>
                       
                       <div className="space-y-2 border-t border-gray-100 pt-4">
                          <div className="flex justify-between text-sm">
                             <span className="text-gray-400">Subtotal</span>
                             <span>₹16,600.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                             <span className="text-gray-400">GST (18%)</span>
                             <span className="text-indigo-600">+₹2,988.00</span>
                          </div>
                          <div className="flex justify-between text-lg font-black border-t border-gray-100 pt-2 mt-2">
                             <span>Total</span>
                             <span>₹19,588.00</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="mt-8 flex gap-3">
                       <button className="flex-1 py-3 bg-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest">Share on WhatsApp</button>
                       <button className="px-6 py-3 bg-white/10 rounded-xl text-xs font-black uppercase tracking-widest">Print</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">Ready to simplify your taxes?</h2>
           <p className="text-xl text-gray-600 mb-12">Join 5,000+ business owners who trust Mera Dhanda for their daily billing and GST compliance.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                 Get Started Free
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 Talk to Compliance Expert
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
