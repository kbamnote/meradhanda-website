import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    price: '₹2,999',
    period: '/month',
    description: 'For small teams getting started with basic modules.',
    features: [
      'Up to 10 team members',
      'Core HR & Attendance',
      'Basic Accounting',
      'Task Management',
      'Email Support',
      '5 GB Storage',
    ],
    featured: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'GROWTH',
    price: '₹7,999',
    period: '/month',
    description: 'For growing businesses that need automation and full suite access.',
    features: [
      'Up to 50 team members',
      'All HR, Payroll & Leave',
      'Sales CRM & Lead Tracking',
      'Production Management',
      'Advanced Accounting & GST',
      'Priority Support',
      '50 GB Storage',
      'API Access',
    ],
    featured: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    period: '',
    description: 'For teams that need advanced controls, white-label, and dedicated support.',
    features: [
      'Unlimited team members',
      'All modules + Custom fields',
      'White-label option',
      'Dedicated Account Manager',
      'Custom Integrations',
      'SSO & Advanced Security',
      'Unlimited Storage',
      'SLA Guarantee',
    ],
    featured: false,
    cta: 'Talk to Sales',
  },
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="pricing" className="w-full bg-white py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#111827] mb-6">
            Simple pricing. <span className="text-blue-600 italic">No surprises.</span>
          </h2>
          <p className="text-lg text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Start free, upgrade when you are ready. No hidden fees, no long-term contracts.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className={`relative rounded-[2.5rem] p-10 border transition-all duration-300 flex flex-col ${
                plan.featured
                  ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-600/30 ring-4 ring-blue-600/10'
                  : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-xl'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                  <Sparkles size={14} /> Most Popular
                </div>
              )}

              {/* Plan name */}
              <span className={`text-xs font-black tracking-[0.2em] uppercase mb-6 block ${
                plan.featured ? 'text-white/60' : 'text-blue-600'
              }`}>
                {plan.name}
              </span>

              {/* Price */}
              <div className="flex items-end gap-1 mb-4">
                <span className="text-5xl font-black tracking-tighter">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm font-bold mb-1.5 ${
                    plan.featured ? 'text-white/60' : 'text-gray-400'
                  }`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm mb-8 leading-relaxed font-medium ${
                plan.featured ? 'text-white/80' : 'text-gray-500'
              }`}>
                {plan.description}
              </p>

              <div className={`w-full h-px mb-8 ${
                plan.featured ? 'bg-white/10' : 'bg-gray-100'
              }`} />

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      plan.featured ? 'bg-white/10' : 'bg-green-50'
                    }`}>
                      <Check className={`w-4 h-4 ${
                        plan.featured ? 'text-white' : 'text-green-600'
                      }`} />
                    </div>
                    <span className={`text-sm font-semibold ${
                      plan.featured ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`w-full py-5 rounded-2xl text-base font-black transition-all ${
                  plan.featured
                    ? 'bg-white text-blue-600 hover:bg-gray-50'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Compare link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button className="text-sm font-black text-blue-600 hover:underline uppercase tracking-widest flex items-center gap-2 mx-auto">
            Compare all features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
