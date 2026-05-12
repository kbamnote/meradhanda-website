import { motion } from 'framer-motion';
import { 
  Box, 
  CheckCircle2, 
  ArrowRight, 
  Package, 
  BarChart, 
  ClipboardList,
  Tags,
  RefreshCw,
  Bell,
  Warehouse,
  QrCode,
  Truck,
  ArrowDownToLine,
  ShieldCheck,
  History
} from 'lucide-react';

export default function Inventory() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-green-50/50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                Precision Inventory Control
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                Smart Stock, <span className="text-green-600 italic">Zero Waste.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Never lose track of a single SKU. From multi-warehouse transfers to automated low-stock alerts, Mera Dhanda gives you total visibility over your physical assets.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all flex items-center gap-2 group">
                  Manage Your Stock
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Watch Walkthrough
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-green-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/inventory_management_preview_1778577667574.png" 
                  alt="Inventory Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Real-time Inventory Alert UI */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl border border-red-50 hidden md:block w-56"
                >
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                         <Bell size={18} className="animate-bounce" />
                      </div>
                      <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Low Stock Alert</p>
                   </div>
                   <p className="text-sm font-black text-gray-900">Premium Cotton Fabric</p>
                   <p className="text-xs text-gray-500 mt-1">Stock: 12 meters (Min: 50m)</p>
                   <button className="mt-3 w-full py-2 bg-gray-900 text-white rounded-lg text-[10px] font-bold">Auto-Reorder</button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Inventory Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">Master your materials.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A feature-rich suite designed to handle the complexity of modern business supply chains.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Warehouse,
                title: "Multi-Warehouse",
                desc: "Track inventory across multiple locations. Move stock between branches with ease.",
                color: "text-blue-600 bg-blue-50"
              },
              {
                icon: Tags,
                title: "Batch & Expiry",
                desc: "Manage perishables or sensitive materials with batch-level tracking and expiry alerts.",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: QrCode,
                title: "Barcode Support",
                desc: "Speed up inwarding and billing with full barcode/QR code scanner integration.",
                color: "text-green-600 bg-green-50"
              },
              {
                icon: RefreshCw,
                title: "Auto-Deduction",
                desc: "Stock levels update instantly as invoices are generated or raw materials used in production.",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: Truck,
                title: "Supplier Portal",
                desc: "Manage all your suppliers in one place. Send POs and track lead times automatically.",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: ArrowDownToLine,
                title: "Stock inwarding",
                desc: "Easily log new purchases and bulk-import inventory from Excel sheets.",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: History,
                title: "Stock Ledger",
                desc: "A complete historical log of every single movement for every item. Total accountability.",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: ShieldCheck,
                title: "Audit Controls",
                desc: "Perform partial or full audits to reconcile physical stock with digital records.",
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

      {/* Content Expansion: The Inventory Cycle */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Effortless stock <span className="text-green-400 italic">Lifecycle.</span></h2>
                 
                 <div className="space-y-8">
                    {[
                      { step: "Stock Inwarding", desc: "Scan items as they arrive. Verify against POs and update warehouse quantities instantly." },
                      { step: "Categorization", desc: "Organize by variants (color, size) or batches. Assign shelf locations for faster picking." },
                      { step: "Stock Movement", desc: "Track internal transfers or consumption in production modules without paper logs." },
                      { step: "Automated Alerts", desc: "Mera Dhanda notifies you before you run out, suggesting re-order quantities based on sales." },
                      { step: "Sales Deduction", desc: "Every invoice sold automatically decrements the exact stock level, including kit items." }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold border-4 border-gray-900 relative z-10 group-hover:scale-110 transition-transform">
                               {i + 1}
                            </div>
                            {i < 4 && <div className="w-0.5 h-full bg-gray-800 -mt-1 group-hover:bg-green-600 transition-colors" />}
                         </div>
                         <div className="pb-4">
                            <h4 className="text-xl font-bold text-white mb-2">{phase.step}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">{phase.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative lg:h-[600px] flex items-center justify-center">
                 <div className="absolute inset-0 bg-green-600/10 blur-[150px] rounded-full animate-pulse" />
                 
                 {/* Visual Representation of Multi-Warehouse */}
                 <div className="relative grid grid-cols-2 gap-6 w-full max-w-md">
                    {[
                       { name: "Warehouse A", stock: "High", color: "text-green-400" },
                       { name: "Warehouse B", stock: "Med", color: "text-yellow-400" },
                       { name: "Main Outlet", stock: "Low", color: "text-red-400" },
                       { name: "QC Floor", stock: "In-Review", color: "text-blue-400" }
                    ].map((wh, i) => (
                       <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center"
                       >
                          <Warehouse className="mx-auto mb-4 text-green-500" size={32} />
                          <p className="text-sm font-bold mb-1">{wh.name}</p>
                          <p className={`text-[10px] font-black uppercase ${wh.color}`}>{wh.stock}</p>
                       </motion.div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                       {/* Decorative connecting lines would go here */}
                       <div className="w-full h-px bg-white/5 absolute top-1/2 rotate-45" />
                       <div className="w-full h-px bg-white/5 absolute top-1/2 -rotate-45" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">Stop guessing. Start knowing.</h2>
           <p className="text-xl text-gray-600 mb-12">Take the first step towards a perfectly optimized inventory. Start your free trial today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-green-600 text-white rounded-2xl font-black text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-100">
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
