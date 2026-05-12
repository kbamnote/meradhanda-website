import { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  frontDesc: string;
  backDesc: string;
  icon: any; // Using any to avoid LucideIcon type import issues in some environments
  color: string;
}

export function FlipCardItem({ title, frontDesc, backDesc, icon: Icon, color }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[320px] perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div 
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center justify-center">
          <motion.div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${color}15`, color: color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {Icon && (typeof Icon === 'function' || typeof Icon === 'object') ? (
              <Icon className="w-8 h-8" />
            ) : (
              <div className="w-8 h-8 bg-current opacity-20 rounded-full" />
            )}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{frontDesc}</p>
          <motion.div 
            className="mt-6 text-xs font-bold text-blue-600 flex items-center gap-1"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Hover to learn more
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-[#111827] rounded-3xl p-8 text-white flex flex-col items-center text-center justify-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl font-bold mb-4">Deep Insight</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {backDesc}
          </p>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-xs font-bold transition-colors">
            Learn Strategy
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function InteractiveCards({ items }: { items: CardProps[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <FlipCardItem {...item} />
        </motion.div>
      ))}
    </div>
  );
}
