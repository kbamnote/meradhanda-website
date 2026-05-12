import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Share2, 
  MessageSquare,
  BarChart3,
  Users,
  Zap,
  Globe,
  Bell
} from 'lucide-react';
import InteractiveCards from '../../components/InteractiveCards';

export default function Marketing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-orange-50 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span 
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                Grow Your Brand
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                Business <span className="text-orange-600 italic">Marketing</span> Simplified.
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Reach more customers and drive repeat sales with our built-in marketing suite. Launch WhatsApp campaigns, manage social interactions, and analyze behavior from one hub.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all flex items-center gap-2 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  Watch Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-orange-600/5 rounded-[2rem] blur-2xl" />
              <img 
                src="/images/business_marketing_preview_1778577683568.png" 
                alt="Marketing Dashboard"
                className="relative rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">CTR Increase</p>
                    <p className="text-2xl font-black text-gray-900">+42.8%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Powerful tools for growth</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to find, engage, and retain customers in the digital age.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "WhatsApp Marketing",
                desc: "Send bulk updates, festive greetings, and personalized offers directly to customers. 98% open rates guaranteed.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: Target,
                title: "Precision Targeting",
                desc: "Segment your audience based on purchase history, location, and behavior for laser-focused campaigns.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Zap,
                title: "Automated Triggers",
                desc: "Set and forget campaigns for birthdays, anniversaries, and abandoned carts. Engage customers while you sleep.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: Users,
                title: "Loyalty Programs",
                desc: "Build your own points system and digital membership cards to keep customers coming back.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Globe,
                title: "Omnichannel Reach",
                desc: "Manage SMS, Email, and Social Media campaigns from a single, unified communication hub.",
                color: "bg-indigo-100 text-indigo-600"
              },
              {
                icon: BarChart3,
                title: "Deep Analytics",
                desc: "Track every click and conversion. Understand your ROI with beautiful, easy-to-read marketing reports.",
                color: "bg-red-100 text-red-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Marketing Strategies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Strategies that <span className="text-orange-600 italic">Convert.</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Flip the cards to see how Mera Dhanda helps you dominate your local market.</p>
          </div>

          <InteractiveCards 
            items={[
              {
                title: 'Festive Automation',
                frontDesc: 'Never miss a greeting. Automate festive wishes with personalized offers.',
                backDesc: 'Set up recurring campaigns for Diwali, Eid, Christmas, and more. Our AI selects the best products to showcase based on seasonal demand.',
                icon: Zap,
                color: '#EA580C'
              },
              {
                title: 'Hyper-Local SEO',
                frontDesc: 'Get found by customers in your immediate vicinity.',
                backDesc: 'Integrate with Google Business Profile to sync reviews and updates instantly. Our platform suggests keywords that local customers are searching for.',
                icon: Globe,
                color: '#2563EB'
              },
              {
                title: 'Retention Engine',
                frontDesc: 'Turn one-time buyers into lifelong advocates.',
                backDesc: 'Identify customers who haven\'t visited in 30 days and send them a "We Miss You" coupon automatically. Boost retention by up to 60%.',
                icon: Users,
                color: '#7C3AED'
              }
            ]}
          />
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-600/5 rounded-[3rem] -rotate-3" />
                <div className="relative bg-white p-4 rounded-[3rem] border border-gray-100 shadow-2xl">
                   <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white">
                      <div className="flex items-center gap-3 mb-8">
                         <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                            <Bell size={20} />
                         </div>
                         <p className="font-bold">Campaign Preview</p>
                      </div>
                      <div className="space-y-4">
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-orange-400 text-xs font-bold mb-1 uppercase">Step 1: Choose Audience</p>
                            <p className="text-sm">Target: "High Value End Customers"</p>
                         </div>
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-orange-400 text-xs font-bold mb-1 uppercase">Step 2: Set Template</p>
                            <p className="text-sm">
                              {"Hi {{name}}, enjoy 20% off on your next visit! Use code: DHANDA20"}
                            </p>
                         </div>
                         <div className="p-4 bg-orange-600 rounded-2xl shadow-lg shadow-orange-600/20">
                            <p className="text-white text-xs font-bold mb-1 uppercase text-center">Step 3: Launch</p>
                            <p className="text-sm text-center font-bold italic">Sending to 1,240 customers...</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Efficiency</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-8">Go from concept to launch in <span className="text-orange-600 underline">minutes.</span></h2>
              
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "Sync Your Contacts",
                    desc: "Automatically import customers from your sales and billing modules. No manual data entry."
                  },
                  {
                    num: "02",
                    title: "Create With AI",
                    desc: "Use our AI assistant to write high-converting copy and design eye-catching visuals in seconds."
                  },
                  {
                    num: "03",
                    title: "Automate The Flow",
                    desc: "Set up drip campaigns that trigger based on customer actions. Perfect timing, every time."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-gray-100 group-hover:text-orange-100 transition-colors">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111827] rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-full h-full bg-orange-600/5 blur-[120px]" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">Ready to supercharge your growth?</h2>
              <p className="text-xl text-gray-400 mb-12">Join 2,400+ businesses who are scaling their reach with Mera Dhanda Marketing.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all">
                  Start Marketing Now
                </button>
                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                  Contact Specialist
                </button>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
