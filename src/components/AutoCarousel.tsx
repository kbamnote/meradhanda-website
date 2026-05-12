import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface AutoCarouselProps {
  items: React.ReactNode[];
  speed?: number; // Duration for one full cycle
  direction?: 'left' | 'right';
  className?: string;
  gap?: number;
}

export default function AutoCarousel({ 
  items, 
  speed = 40, 
  direction = 'left',
  className = "",
  gap = 32
}: AutoCarouselProps) {
  const controls = useAnimationControls();
  
  // Duplicate items for infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    controls.start({
      x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      }
    });
  }, [controls, speed, direction]);

  return (
    <div 
      className={`overflow-hidden whitespace-nowrap relative ${className}`}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({
        x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }
      })}
    >
      <motion.div
        className="inline-flex items-center py-4"
        style={{ gap: `${gap}px` }}
        animate={controls}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
