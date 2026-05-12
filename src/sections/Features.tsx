import { motion, type Variants } from 'framer-motion';
import FlipCard from '../components/FlipCard';
import { Link } from 'react-router';

const features = [
  {
    icon: '📊',
    iconBg: 'rgba(37,99,235,0.1)',
    title: 'Real-Time Analytics',
    description: 'Get instant insights into every aspect of your business with live dashboards and customizable reports.',
    backDescription: 'Deep-dive into sales trends, product performance, and team productivity. Our AI suggests optimizations based on historical data to maximize your ROI.',
    path: '/features/analytics',
    wide: false,
  },
  {
    icon: '🤖',
    iconBg: 'rgba(124,58,237,0.1)',
    title: 'Built-in AI Assistant',
    description: 'Ask questions, get insights, and automate workflows with our intelligent AI companion.',
    backDescription: 'Powered by advanced LLMs, your assistant can predict inventory shortages, draft customer emails, and explain complex financial reports in simple terms.',
    path: '/features/ai-assistant',
    wide: false,
  },
  {
    icon: '🔐',
    iconBg: 'rgba(22,163,74,0.1)',
    title: 'Role-Based Access',
    description: 'Granular permissions ensure team members see only what they need, keeping data secure.',
    backDescription: 'Define custom roles for managers, accountants, and staff. Track every action with a detailed audit log to ensure total transparency and security.',
    path: '/features/crm',
    wide: false,
  },
  {
    icon: '🏭',
    iconBg: 'rgba(217,119,6,0.1)',
    title: 'Production Tracking',
    description: 'Track every stage of production with job cards, quality checks, and dispatch management.',
    backDescription: 'Monitor floor efficiency in real-time. Identify bottlenecks before they delay shipments. Includes automated wastage analysis and machine maintenance logs.',
    path: '/features/production',
    wide: true,
    mockJobs: [
      { name: 'Widget Assembly A', progress: 75, status: 'In Production', statusColor: '#2563EB' },
      { name: 'Component Batch B', progress: 40, status: 'QC Pending', statusColor: '#D97706' },
      { name: 'Final Pack C', progress: 100, status: 'Dispatched', statusColor: '#16A34A' },
    ],
  },
  {
    icon: '💳',
    iconBg: 'rgba(220,38,38,0.1)',
    title: 'Membership & Loyalty',
    description: 'Design, issue, and track digital membership cards with QR codes and tier-based rewards.',
    backDescription: 'Boost customer retention with personalized reward programs. Track lifetime value (LTV) and automate birthday/anniversary marketing campaigns via WhatsApp.',
    path: '/features/marketing',
    wide: false,
  },
  {
    icon: '📞',
    iconBg: 'rgba(37,99,235,0.1)',
    title: 'Leads & CRM',
    description: 'Manage your entire sales pipeline from first contact to closed deal with powerful CRM tools.',
    backDescription: 'Visualize your funnel with Kanban boards. Never miss a follow-up with automated reminders. Integrate with WhatsApp for seamless communication.',
    path: '/features/crm',
    wide: false,
  },
  {
    icon: '💰',
    iconBg: 'rgba(22,163,74,0.1)',
    title: 'Advanced Accounting',
    description: 'Double-entry bookkeeping, GST compliance, automated reconciliation, and financial reporting.',
    backDescription: 'Generate P&L statements, Balance Sheets, and GST-ready invoices in seconds. Seamlessly syncs with inventory and sales for 100% accuracy.',
    path: '/features/accounting',
    wide: false,
  },
];

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="features"
      className="w-full bg-[#F6F5F0] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="features-header text-center mb-14"
        >
          <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#2563EB]">
            Why Mera Dhanda?
          </span>
          <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#111827] mt-3 mb-4">
            Everything you need to run smarter.
          </h2>
          <p className="text-[17px] text-[#4B5563] max-w-xl mx-auto leading-[1.7]">
            Powerful features designed for modern businesses. Built to scale, engineered for precision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`${feature.wide ? 'md:col-span-2' : ''} h-[280px]`}
            >
              <FlipCard
                className="h-full"
                front={
                  <div className="h-full bg-white rounded-2xl border border-[rgba(17,24,39,0.08)] p-7 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="flex gap-5 h-full">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: feature.iconBg }}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-base font-bold text-[#111827] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-[13px] text-[#4B5563] leading-[1.6]">
                          {feature.description}
                        </p>
                        
                        {feature.wide && feature.mockJobs && (
                          <div className="mt-auto space-y-2">
                            {feature.mockJobs.map((job, j) => (
                              <div key={j} className="bg-[#FAFAF8] rounded-lg p-2 border border-[rgba(17,24,39,0.04)]">
                                <div className="flex items-center justify-between text-[10px] mb-1">
                                  <span className="font-semibold text-[#111827]">{job.name}</span>
                                  <span style={{ color: job.statusColor }}>{job.status}</span>
                                </div>
                                <div className="w-full h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
                                  <div className="h-full" style={{ width: `${job.progress}%`, backgroundColor: job.statusColor }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-auto pt-4 text-xs font-bold text-[#2563EB] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Hover to flip
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="h-full bg-[#111827] rounded-2xl p-7 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="text-xl">{feature.icon}</span>
                        {feature.title} Insight
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.backDescription}
                      </p>
                    </div>
                    <Link 
                      to={feature.path}
                      className="mt-4 w-full py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-lg text-center text-xs font-bold transition-colors"
                    >
                      Learn More about {feature.title}
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
