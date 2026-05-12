import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Every plan starts with a 14-day free trial. No credit card required. You get full access to all features during the trial period, and our team will help you get set up.',
  },
  {
    question: 'Can I import data from my existing tools?',
    answer: 'Absolutely. Mera Dhanda supports bulk CSV import for employees, products, customers, and transactions. We also offer direct integrations with Tally, Excel, and popular CRMs. Our migration team can assist with complex data transfers.',
  },
  {
    question: 'Does Mera Dhanda work for manufacturing businesses?',
    answer: 'Mera Dhanda was built with manufacturing in mind. Our Production module includes job cards, quality checks, machine maintenance, bulk order tracking, and floor management — everything you need to run your plant efficiently.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use bank-grade AES-256 encryption, regular automated backups, and comply with ISO 27001 standards. Our servers are hosted on AWS with 99.9% uptime SLA. Two-factor authentication and IP whitelisting are available on all plans.',
  },
  {
    question: 'Can I add custom modules or fields?',
    answer: 'Yes. Enterprise customers can create custom fields, forms, and workflows. Our flexible data model lets you tailor Mera Dhanda to your specific business processes without writing any code.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email support on Starter, priority chat and email on Growth, and a dedicated account manager with phone support on Enterprise. All customers get access to our comprehensive knowledge base and video tutorials.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="faq" className="w-full bg-[#F6F5F0] py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#111827] mb-6">
            Questions? <span className="text-blue-600 italic">Answers.</span>
          </h2>
          <p className="text-lg text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Mera Dhanda. Cannot find what you are looking for? Reach out to our team.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === i 
                ? 'border-blue-200 shadow-xl shadow-blue-500/5' 
                : 'border-gray-100 hover:border-blue-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === i ? 'text-blue-600' : 'text-[#111827]'
                }`}>
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-blue-600 text-white rotate-180'
                      : 'bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-6">
                      <div className="w-full h-px bg-gray-50 mb-6" />
                      <p className="text-[#4B5563] leading-relaxed text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
