import { Link } from 'react-router';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Check, MoreHorizontal } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const stats = [
  { labelKey: 'hero.statLeads', value: '12', tone: 'rust' as const },
  { labelKey: 'hero.statDues', value: '₹84,500', tone: 'teal' as const },
  { labelKey: 'hero.statOrders', value: '7', tone: 'rust' as const },
];

const customers = [
  {
    init: 'RS',
    name: 'Rahul Signage',
    detail: 'Acrylic board · ₹18,000',
    statusKey: 'hero.statusNewLead',
    statusTone: 'teal' as const,
  },
  {
    init: 'AP',
    name: 'Apex Packaging',
    detail: 'Invoice #1042 · ₹32,500',
    statusKey: 'hero.statusPaymentDue',
    statusTone: 'rust' as const,
  },
  {
    init: 'MT',
    name: 'Mehta Traders',
    detail: 'Order delivered',
    statusKey: 'hero.statusClosed',
    statusTone: 'muted' as const,
  },
];

const statusStyles: Record<string, string> = {
  teal: 'bg-[#D7EEEA] text-[#0B575D]',
  rust: 'bg-[#FBE7DA] text-[#A8471A]',
  muted: 'bg-[#F4E4DF] text-[#7A6453]',
};

export default function Hero() {
  const { t } = useTranslation();
  const headlinePost = t('hero.headlinePost');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.96, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full overflow-hidden bg-[#FBF6F1] z-10 pt-28 pb-20 lg:pt-32 lg:pb-28"
    >
      {/* Soft warm gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-[#FBE7DA]/60 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#D7EEEA]/50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left — copy */}
          <div>
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-[40px] sm:text-[52px] lg:text-[58px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#2B1B12] mb-5"
            >
              {t('hero.headlinePre')}{' '}
              <span className="inline-block bg-gradient-to-r from-[#C05621] via-[#CE6730] to-[#0F766E] bg-clip-text text-transparent">
                {t('hero.headlineAccent')}
              </span>
              {headlinePost ? ` ${headlinePost}` : ''}
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#7A6453] max-w-[540px] leading-[1.7] mb-8"
            >
              {t('hero.body')}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-6">
              <Link
                to="/register"
                className="px-6 py-3.5 bg-[#C05621] text-white text-sm font-semibold rounded-xl btn-primary flex items-center gap-2 group shadow-lg shadow-[#C05621]/20"
              >
                {t('hero.cta1')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/book-trial"
                className="px-6 py-3.5 bg-white text-[#2B1B12] text-sm font-semibold rounded-xl border border-[#ECDFD1] hover:bg-[#F4E4DF]/60 transition-colors"
              >
                {t('hero.cta2')}
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-sm text-[#7A6453]"
            >
              <Check className="w-4 h-4 text-[#0F766E] flex-shrink-0" strokeWidth={3} />
              <span>{t('hero.trust')}</span>
            </motion.div>
          </div>

          {/* Right — dashboard mockup */}
          <motion.div
            variants={cardVariants}
            className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="relative bg-white rounded-3xl shadow-[0_24px_60px_rgba(43,27,18,0.12)] border border-[#ECDFD1] p-5 sm:p-6">
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <img
                  src="/images/Meradhanda%20Logo%203.png"
                  alt="Mera Dhanda"
                  className="h-9 w-auto"
                />
                <MoreHorizontal className="w-5 h-5 text-[#9A8472]" />
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {stats.map((s) => (
                  <div
                    key={s.labelKey}
                    className={`rounded-2xl p-3.5 ${
                      s.tone === 'teal' ? 'bg-[#D7EEEA]' : 'bg-[#FBE7DA]'
                    }`}
                  >
                    <p className="text-[10px] font-bold tracking-wide text-[#7A6453] mb-1.5">
                      {t(s.labelKey)}
                    </p>
                    <p
                      className={`font-heading font-extrabold leading-none ${
                        s.value.length > 4 ? 'text-[18px]' : 'text-[24px]'
                      } ${s.tone === 'teal' ? 'text-[#0B575D]' : 'text-[#A8471A]'}`}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent customers */}
              <div className="rounded-2xl border border-[#ECDFD1] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#ECDFD1] bg-[#FBF6F1]">
                  <span className="text-[13px] font-bold text-[#2B1B12]">
                    {t('hero.recentCustomers')}
                  </span>
                  <span className="text-[12px] font-semibold text-[#9A8472]">
                    {t('hero.status')}
                  </span>
                </div>

                <div className="divide-y divide-[#ECDFD1]">
                  {customers.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center gap-3 px-4 py-3"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#F4E4DF] flex items-center justify-center text-[11px] font-bold text-[#A8471A] flex-shrink-0">
                        {c.init}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-bold text-[#2B1B12] truncate">
                          {c.name}
                        </p>
                        <p className="text-[12px] text-[#7A6453] truncate">
                          {c.detail}
                        </p>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyles[c.statusTone]}`}
                      >
                        {t(c.statusKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
