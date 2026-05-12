import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Modules & Features' },
  { value: 2400, suffix: '+', label: 'Businesses Onboarded' },
  { value: 18, suffix: 'Cr+', label: 'Payroll Processed Monthly' },
  { value: 99.9, suffix: '%', label: 'Uptime Guaranteed' },
];

function Counter({ value, decimals = 0 }: { value: number, decimals?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  
  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function StatsBar() {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative group">
              <div className="text-4xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-2">
                <Counter value={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                <span className="text-blue-600">{stat.suffix}</span>
              </div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              
              {/* Subtle divider for desktop */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-12 bg-gray-100 -translate-y-1/2" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
