import { useEffect } from 'react';
import { useParams } from 'react-router';
import { motion, type Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Truck, 
  Building2, 
  Factory, 
  Settings2,
  UtensilsCrossed,
  Hotel,
  Stethoscope,
  GraduationCap,
  Printer,
  Car,
  HeartPulse,
  Zap,
  Target,
  ShieldCheck
} from 'lucide-react';

const solutionData: Record<string, any> = {
  'distribution': {
    title: 'Distribution',
    desc: 'Streamline your supply chain with advanced order management, secondary sales tracking, and automated stock replenishment.',
    image: '/images/distribution_solution_preview_1778580917960.png',
    benefits: ["Route Optimization", "Live Stock Tracking", "Dealer Management", "Bulk Invoicing", "Credit Limit Controls", "Return Tracking"],
    icon: Truck
  },
  'wholesale': {
    title: 'Wholesale',
    desc: 'Manage high-volume transactions and complex inventory across multiple godowns with ease and precision.',
    image: '/images/wholesale_solution_preview_1778580934657.png',
    benefits: ["Batch-wise Tracking", "Godown Management", "Bulk Pricing Rules", "Outstanding Tracking", "Tax Compliance", "Purchase Planning"],
    icon: Building2
  },
  'manufacturing': {
    title: 'Manufacturing',
    desc: 'Optimize your production floor with detailed BOM, job-card tracking, and material requirement planning (MRP).',
    image: '/images/manufacturing_solution_preview_1778580949463.png',
    benefits: ["Bill of Materials", "WIP Tracking", "Wastage Analysis", "Resource Planning", "Quality Control", "Production Reports"],
    icon: Factory
  },
  'service-based': {
    title: 'Service-Based',
    desc: 'Manage your professional services with smart scheduling, task management, and automated subscription billing.',
    image: '/images/service_based_solution_preview_1778580967577.png',
    benefits: ["Task Management", "Client Portals", "AMC Billing", "Expense Tracking", "Project Reporting", "Digital Contracts"],
    icon: Settings2
  },
  'restaurants': {
    title: 'Restaurants',
    desc: 'Delight your guests with faster KOT, table management, and seamless online order integrations.',
    image: '/images/restaurants_solution_preview_1778580982552.png',
    benefits: ["KOT Printing", "Table Booking", "Recipe Management", "Swiggy/Zomato Sync", "Waitstaff App", "Inventory Control"],
    icon: UtensilsCrossed
  },
  'hotels': {
    title: 'Hotels',
    desc: 'Elevate guest experiences with integrated PMS, room service management, and automated check-in/out.',
    image: '/images/hotels_solution_preview_1778581001009.png',
    benefits: ["Room Management", "Guest History", "Billing & Folios", "Housekeeping App", "Inventory Sync", "Dynamic Pricing"],
    icon: Hotel
  },
  'pharmacies': {
    title: 'Pharmacies',
    desc: 'Ensure safety and compliance with drug-specific inventory, expiry alerts, and integrated prescription billing.',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefits: ["Expiry Tracking", "Schedule H Alerts", "Generic Name Search", "Doctor Management", "Digital Prescription", "Stock Audit"],
    icon: Stethoscope
  },
  'real-estate': {
    title: 'Real Estate',
    desc: 'Manage property listings, leads, and payment schedules with a powerful CRM built for real estate professionals.',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefits: ["Unit Management", "Lead Pipeline", "Payment Plans", "Document Management", "Site Visit Tracking", "Booking Reports"],
    icon: Building2
  },
  'coaching': {
    title: 'Coaching Classes',
    desc: 'Digitize your institute with student management, fee tracking, and automated attendance notifications.',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefits: ["Student Profiles", "Fee Management", "Batch Scheduling", "Exam Results", "Parent App", "Enquiry Tracking"],
    icon: GraduationCap
  },
  'printing': {
    title: 'Printing Services',
    desc: 'Track custom orders, manage paper stock, and optimize job scheduling for your printing business.',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefits: ["Custom Job Cards", "Paper Stock Tracking", "Ink Usage Analysis", "Delivery Tracking", "Designer Dashboard", "Bulk Pricing"],
    icon: Printer
  },
  'hospitals': {
    title: 'Hospitals & Clinics',
    desc: 'Focus on patient care with integrated OPD/IPD management, billing, and electronic health records.',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefits: ["Patient Records", "OPD Billing", "Laboratory Integration", "Doctor Schedules", "Pharmacy Sync", "Insurance Claims"],
    icon: HeartPulse
  },
  'automobiles': {
    title: 'Automobile Dealers',
    desc: 'Accelerate your dealership with vehicle inventory, service booking, and automated spare parts management.',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefits: ["Chassis Tracking", "Service Reminders", "Spare Parts Inventory", "Insurance Tracking", "Test Drive Logs", "Finance Support"],
    icon: Car
  }
};

import DemoForm from '../../components/DemoForm';
import InteractiveCards from '../../components/InteractiveCards';

export default function SolutionDetail() {
  const { type } = useParams();

  const data = type ? solutionData[type] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) return <div className="pt-32 text-center font-black text-2xl">Solution not found.</div>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const Icon = data.icon;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.span 
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-sm shadow-blue-500/5"
              >
                {data.title} Industry Specialist
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 tracking-tighter"
              >
                Dominating the <br/>
                <span className="text-blue-600 italic">{data.title} Market.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl"
              >
                {data.desc} Built by experts, for experts.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-3 group">
                  Book {data.title} Demo
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-6 bg-blue-600/5 rounded-[3rem] blur-3xl" />
              <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden group">
                <img 
                  src={data.image}
                  alt={`${data.title} Solutions`}
                  className="rounded-[2rem] w-full transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Industry Badge */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/50 flex items-center justify-center text-blue-600">
                   {Icon && <Icon size={32} />}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-6">Built for your <span className="text-blue-400 italic">Success.</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Proprietary features designed to eliminate friction in {data.title} operations.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.benefits.map((text: string, i: number) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                  <Star className="fill-current" size={24} />
                </div>
                <h4 className="text-2xl font-black">{text}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">Automated logic and reporting tailored specifically for {data.title} workflows.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">Core Capabilities.</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Discover the high-performance tools that make {data.title} management seamless with Mera Dhanda.</p>
          </motion.div>

          <InteractiveCards 
            items={[
              {
                title: 'Real-time Intelligence',
                frontDesc: 'Track every transaction and stock movement as it happens.',
                backDesc: 'Our edge-computing technology ensures your data is always up-to-date across all devices and locations, with zero latency.',
                icon: Zap,
                color: '#2563EB'
              },
              {
                title: 'Market Dominance',
                frontDesc: 'Reduce operational costs by 40% with intelligent automation.',
                backDesc: `Automate tax filings, bulk invoicing, and replenishment logic specifically for the ${data.title} sector.`,
                icon: Target,
                color: '#7C3AED'
              },
              {
                title: 'Bank-Grade Security',
                frontDesc: 'Enterprise-level encryption for every business record.',
                backDesc: 'Your business data is protected by AES-256 encryption and backed up across three geographic regions automatically.',
                icon: ShieldCheck,
                color: '#16A34A'
              }
            ]}
          />
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-xs font-black uppercase tracking-[2px] text-blue-600 mb-4 block">The Methodology</span>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">How we scale <br/> <span className="text-blue-600 italic">Your {data.title} Empire.</span></h2>
          </motion.div>

          <div className="relative">
             {/* Desktop Path Animation */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden lg:block">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-blue-600"
                />
             </div>

             <div className="grid lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "01", label: "Audit", desc: "We analyze your current bottlenecks and data leaks." },
                  { step: "02", label: "Sync", desc: "One-click migration of your existing data to Mera Dhanda." },
                  { step: "03", label: "Deploy", desc: "Automate your specific workflows and staff roles." },
                  { step: "04", label: "Scale", desc: "Real-time insights drive your daily growth decisions." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center text-2xl font-black text-gray-900 shadow-xl group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-500 mb-8">
                       {item.step}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-3">{item.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="pb-32 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <div className="relative rounded-[3rem] p-1 shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-600">
              <div className="bg-white rounded-[2.9rem] p-8 lg:p-12">
                 <DemoForm />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
