import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import AutoCarousel from '../components/AutoCarousel';

const testimonials = [
  {
    quote: 'We finally stopped jumping between spreadsheets. Mera Dhanda brought everything into one place and our team actually enjoys using it.',
    name: 'Ankit Sharma',
    role: 'Operations Director',
    company: 'Metro Manufacturing',
    avatar: { bg: '#2563EB', init: 'AS' },
  },
  {
    quote: 'Payroll used to take two days. Now it is a few clicks. The automation is incredible and our employees love the self-service portal.',
    name: 'Priya Nair',
    role: 'HR Manager',
    company: 'TechStart India',
    avatar: { bg: '#16A34A', init: 'PN' },
  },
  {
    quote: 'Our production team actually updates their status now. The job cards and floor view made everything transparent and accountable.',
    name: 'Rahul Verma',
    role: 'Plant Manager',
    company: 'Precision Tools Co.',
    avatar: { bg: '#D97706', init: 'RV' },
  },
  {
    quote: 'The GST billing is lightning fast. We have reduced our billing time by 70% and eliminated human errors completely.',
    name: 'Vikram Mehta',
    role: 'CEO',
    company: 'VM Retail Group',
    avatar: { bg: '#DC2626', init: 'VM' },
  },
  {
    quote: 'The AI assistant feels like a senior analyst sitting next to me. It identifies stock issues before they even happen.',
    name: 'Sneha Gupta',
    role: 'Founder',
    company: 'Organic Roots',
    avatar: { bg: '#7C3AED', init: 'SG' },
  },
];

export default function Testimonials() {

  return (
    <section className="w-full bg-[#E9E8E3] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#2563EB]">
              Success Stories
            </span>
            <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#111827] mt-3">
              Trusted by <span className="text-[#2563EB]">visionary founders</span> across India.
            </h2>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]"
          >
            Read case studies
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Auto Carousel */}
      <AutoCarousel 
        speed={30}
        items={testimonials.map((t, i) => (
          <div
            key={i}
            className="w-[380px] bg-white rounded-3xl border border-[rgba(17,24,39,0.06)] p-8 relative group cursor-default"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-blue-500/10">
              <Quote size={48} />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[16px] text-[#4B5563] leading-[1.7] mb-8 min-h-[100px]">
              “{t.quote}”
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-[rgba(17,24,39,0.06)]">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                style={{ backgroundColor: t.avatar.bg }}
              >
                {t.avatar.init}
              </div>
              <div>
                <p className="text-sm font-bold text-[#111827]">{t.name}</p>
                <p className="text-xs text-[#888880] font-medium">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      />
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
