import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Set up your workspace in minutes',
    description: 'Add your company, teams, and preferences. Import your existing data with our guided setup wizard.',
  },
  {
    number: '2',
    title: 'Invite your team and assign roles',
    description: 'Send invites, define permissions, and get everyone onboard with role-based access control.',
  },
  {
    number: '3',
    title: 'Start managing — everything in one place',
    description: 'Run HR, sales, production, and accounting from a single dashboard. Watch productivity soar.',
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-white py-32 relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
         <div className="absolute top-10 left-10 w-4 h-4 bg-blue-600 rounded-full" />
         <div className="absolute bottom-20 right-20 w-8 h-8 bg-blue-600 rounded-full" />
         <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-600 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#111827] mb-6">
            Get started in <span className="text-blue-600 italic">three simple steps.</span>
          </h2>
          <p className="text-lg text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            From signup to full operations in under an hour. No complex IT integration required.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12 relative"
        >
          {/* Progress Line (Animated on Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gray-100 overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: "0%" }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
               className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600"
             />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={stepVariants}
              className="text-center relative group"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-[2rem] bg-white border-2 border-gray-100 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:border-blue-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
                <span className="text-4xl font-black text-blue-600">
                  {step.number}
                </span>
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-blue-500/5 animate-ping opacity-0 group-hover:opacity-100" />
              </div>
              
              <h3 className="text-xl font-bold text-[#111827] mb-4">
                {step.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
