import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const dashboardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-[90vh] py-20 lg:py-32 bg-[#F6F5F0] z-10 overflow-hidden"
    >
      {/* Decorative Floating Elements */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-10 text-blue-500/20 hidden lg:block"
      >
        <Sparkles size={80} />
      </motion.div>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-10 text-[#2563EB]/10 hidden lg:block"
      >
        <Zap size={120} />
      </motion.div>
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-2/3 left-1/4 text-green-500/10 hidden lg:block"
      >
        <Shield size={60} />
      </motion.div>

      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
            className="absolute rounded-full bg-[#2563EB]"
            style={{
              width: 4 + Math.random() * 8,
              height: 4 + Math.random() * 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div className="pt-16 lg:pt-0">
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span className="text-[13px] font-semibold text-[#2563EB]">
                Now with AI Assistant — ask anything about your business
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-[44px] sm:text-[56px] lg:text-[70px] font-extrabold leading-[1.08] tracking-[-2.5px] text-[#111827] mb-6"
            >
              Run your entire
              <br />
              business from{' '}
              <span className="text-[#2563EB]">one place.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#4B5563] max-w-[560px] leading-[1.7] mb-8"
            >
              Mera Dhanda brings HR, payroll, production, sales, and accounting
              into one calm, connected workspace. Designed for growth, built for simplicity.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3.5 bg-[#2563EB] text-white text-sm font-semibold rounded-xl btn-primary flex items-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-6 py-3.5 bg-white text-[#111827] text-sm font-semibold rounded-xl border border-[rgba(17,24,39,0.12)] hover:bg-[rgba(233,228,218,0.35)] transition-colors">
                Explore Features
              </button>
            </motion.div>

            {/* Trust Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap">
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {[
                  { bg: '#2563EB', init: 'AK' },
                  { bg: '#16A34A', init: 'SR' },
                  { bg: '#D97706', init: 'MP' },
                  { bg: '#DC2626', init: 'RJ' },
                  { bg: '#7C3AED', init: 'NV' },
                ].map((avatar, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white border-2 border-[#F6F5F0] cursor-pointer"
                    style={{ backgroundColor: avatar.bg }}
                  >
                    {avatar.init}
                  </motion.div>
                ))}
              </div>

              <div className="h-6 w-px bg-[rgba(17,24,39,0.12)]" />

              <div className="flex items-center gap-4 text-sm text-[#4B5563]">
                <span className="font-semibold text-[#111827]">2,400+</span>
                <span>businesses</span>
              </div>

              <div className="h-6 w-px bg-[rgba(17,24,39,0.12)]" />

              <div className="flex items-center gap-1.5">
                <span className="text-amber-500">★★★★★</span>
                <span className="text-sm font-semibold text-[#111827]">
                  4.9/5
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Dashboard Preview */}
          <motion.div
            variants={dashboardVariants}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-[600px] group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Browser mockup */}
              <div className="relative bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.10)] border border-[rgba(17,24,39,0.06)] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                {/* Browser top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(17,24,39,0.06)] bg-[#FAFAF8]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[#F0EEE8] rounded-lg px-3 py-1.5 text-xs text-[#888880] text-center">
                      meradhanda.in — Dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5">
                  {/* KPI Row */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {[
                      {
                        label: "Today's Revenue",
                        value: '₹1.2L',
                        change: '+12%',
                        color: '#16A34A',
                      },
                      {
                        label: 'Active Staff',
                        value: '48',
                        change: '+2',
                        color: '#2563EB',
                      },
                      {
                        label: 'Open Tasks',
                        value: '23',
                        change: '-5',
                        color: '#D97706',
                      },
                      {
                        label: 'Pending Leaves',
                        value: '7',
                        change: '3 new',
                        color: '#DC2626',
                      },
                    ].map((kpi, i) => (
                      <div
                        key={i}
                        className="bg-[#FAFAF8] rounded-xl p-3 border border-[rgba(17,24,39,0.06)]"
                      >
                        <p className="text-[11px] text-[#888880] mb-1">
                          {kpi.label}
                        </p>
                        <p className="text-xl font-extrabold text-[#111827]">
                          {kpi.value}
                        </p>
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: kpi.color }}
                        >
                          {kpi.change}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Bar Chart */}
                    <div className="bg-[#FAFAF8] rounded-xl p-4 border border-[rgba(17,24,39,0.06)]">
                      <p className="text-xs font-semibold text-[#4B5563] mb-3">
                        Weekly Revenue
                      </p>
                      <div className="flex items-end justify-between gap-1.5 h-24">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-[#2563EB] rounded-t"
                            style={{
                              height: `${h}%`,
                              opacity: 0.5 + i * 0.07,
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-[#888880] flex-1 text-center"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="bg-[#FAFAF8] rounded-xl p-4 border border-[rgba(17,24,39,0.06)]">
                      <p className="text-xs font-semibold text-[#4B5563] mb-3">
                        Attendance Today
                      </p>
                      <div className="flex items-center gap-4">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-20 h-20 -rotate-90"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="12"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="#2563EB"
                            strokeWidth="12"
                            strokeDasharray={`${0.72 * 239} ${239}`}
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="#D97706"
                            strokeWidth="12"
                            strokeDasharray={`${0.18 * 239} ${239}`}
                            strokeDashoffset={-0.72 * 239}
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="#DC2626"
                            strokeWidth="12"
                            strokeDasharray={`${0.10 * 239} ${239}`}
                            strokeDashoffset={-(0.72 + 0.18) * 239}
                          />
                        </svg>
                        <div className="space-y-1.5">
                          {[
                            { label: 'Present', color: '#2563EB', pct: '72%' },
                            { label: 'WFH', color: '#D97706', pct: '18%' },
                            { label: 'Absent', color: '#DC2626', pct: '10%' },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs"
                            >
                              <div
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-[#4B5563]">
                                {item.label}
                              </span>
                              <span className="font-semibold text-[#111827]">
                                {item.pct}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
