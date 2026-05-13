import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 15, suffix: '+', label: 'Modules & Features' },
  { value: 200, suffix: '+', label: 'Businesses Onboarded' },
  { value: 35, from: 80, suffix: '%', label: 'Reduced Operational Costs' },
  { value: 15, from: 60, suffix: ' Min', label: 'Avg. Support Response' },
];

function Counter({ value, from = 0, decimals = 0 }: { value: number, from?: number, decimals?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration: 2.5, 
        ease: "easeOut",
        delay: 0.2 
      });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsBar() {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative group">
              <div className="text-4xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-2">
                <Counter 
                  value={stat.value} 
                  from={stat.from}
                  decimals={stat.value % 1 !== 0 ? 1 : 0} 
                />
                <span className="text-blue-600">{stat.suffix}</span>
              </div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
              
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
