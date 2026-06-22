import { motion, type Variants } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'chip.newLeads': { en: 'New Leads', hi: 'नए लीड्स', hinglish: 'Naye Leads', gu: 'નવા લીડ્સ', mr: 'नवीन लीड्स', mwr: 'नवा लीड्स' },
  'chip.winRate': { en: 'Win Rate', hi: 'जीत दर', hinglish: 'Win Rate', gu: 'વિન રેટ', mr: 'विजय दर', mwr: 'जीत दर' },
  'chip.converted': { en: 'Converted', hi: 'कन्वर्ट हुए', hinglish: 'Converted', gu: 'કન્વર્ટ થયા', mr: 'कन्व्हर्ट झाले', mwr: 'कन्वर्ट हुया' },
  'badge': { en: 'Revenue Engine', hi: 'रेवेन्यू इंजन', hinglish: 'Revenue Engine', gu: 'રેવન્યૂ એન્જિન', mr: 'रेव्हेन्यू इंजिन', mwr: 'रेवेन्यू इंजन' },
  'heading.pre': { en: 'Turn conversations into', hi: 'बातचीत को बदलें', hinglish: 'Baat-cheet ko badlo', gu: 'વાતચીતને બદલો', mr: 'संभाषणांचे रूपांतर करा', mwr: 'बातचीत नै बदलो' },
  'heading.accent': { en: 'conversions.', hi: 'कन्वर्ज़न में।', hinglish: 'conversions mein.', gu: 'કન્વર્ઝનમાં.', mr: 'कन्व्हर्जनमध्ये.', mwr: 'कन्वर्जन में।' },
  'desc': { en: 'Track leads, follow-ups, and deals in one unified pipeline. Automate reminders, assign owners, and never let a hot lead go cold.', hi: 'लीड्स, फ़ॉलो-अप और डील्स को एक ही पाइपलाइन में ट्रैक करें। रिमाइंडर ऑटोमेट करें, ओनर असाइन करें, और किसी हॉट लीड को ठंडा न पड़ने दें।', hinglish: 'Leads, follow-ups aur deals ek hi pipeline mein track karo. Reminders automate karo, owners assign karo, aur kisi hot lead ko thanda mat padne do.', gu: 'લીડ્સ, ફોલો-અપ અને ડીલ્સ એક જ પાઇપલાઇનમાં ટ્રૅક કરો. રિમાઇન્ડર ઑટોમેટ કરો, ઓનર અસાઇન કરો, અને કોઈ હોટ લીડને ઠંડી ન પડવા દો.', mr: 'लीड्स, फॉलो-अप आणि डील्स एकाच पाइपलाइनमध्ये ट्रॅक करा. रिमाइंडर ऑटोमेट करा, ओनर नियुक्त करा, आणि कोणतीही हॉट लीड थंड पडू देऊ नका.', mwr: 'लीड्स, फॉलो-अप अर डील्स नै एकीच पाइपलाइन में ट्रैक करो. रिमाइंडर ऑटोमेट करो, ओनर असाइन करो, अर कोई हॉट लीड नै ठंडी मत पडण दो.' },
  'feat.scoring': { en: 'Smart lead scoring & prioritization', hi: 'स्मार्ट लीड स्कोरिंग और प्राथमिकता', hinglish: 'Smart lead scoring aur prioritization', gu: 'સ્માર્ટ લીડ સ્કોરિંગ અને પ્રાથમિકતા', mr: 'स्मार्ट लीड स्कोरिंग आणि प्राधान्यक्रम', mwr: 'स्मार्ट लीड स्कोरिंग अर प्राथमिकता' },
  'feat.followups': { en: 'Automated WhatsApp & Email follow-ups', hi: 'ऑटोमेटेड WhatsApp और Email फ़ॉलो-अप', hinglish: 'Automated WhatsApp aur Email follow-ups', gu: 'ઑટોમેટેડ WhatsApp અને Email ફોલો-અપ', mr: 'ऑटोमेटेड WhatsApp आणि Email फॉलो-अप', mwr: 'ऑटोमेटेड WhatsApp अर Email फॉलो-अप' },
  'feat.kanban': { en: 'Interactive Kanban deal pipeline', hi: 'इंटरैक्टिव कानबन डील पाइपलाइन', hinglish: 'Interactive Kanban deal pipeline', gu: 'ઇન્ટરેક્ટિવ કાનબાન ડીલ પાઇપલાઇન', mr: 'इंटरॅक्टिव्ह कानबान डील पाइपलाइन', mwr: 'इंटरैक्टिव कानबन डील पाइपलाइन' },
  'feat.analytics': { en: 'Real-time sales performance analytics', hi: 'रियल-टाइम सेल्स परफ़ॉर्मेंस एनालिटिक्स', hinglish: 'Real-time sales performance analytics', gu: 'રિયલ-ટાઇમ સેલ્સ પરફોર્મન્સ એનાલિટિક્સ', mr: 'रिअल-टाइम सेल्स परफॉर्मन्स अॅनालिटिक्स', mwr: 'रियल-टाइम सेल्स परफॉर्मेंस एनालिटिक्स' },
  'cta': { en: 'Explore Sales Module', hi: 'सेल्स मॉड्यूल देखें', hinglish: 'Sales Module dekho', gu: 'સેલ્સ મોડ્યૂલ જુઓ', mr: 'सेल्स मॉड्यूल पाहा', mwr: 'सेल्स मॉड्यूल देखो' },
};

export default function SalesSection() {
  const t = useT(STRINGS);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full py-24 bg-[#FBF6F1] overflow-hidden">
      {/* Dynamic Connector Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
         <motion.path
           initial={{ pathLength: 0 }}
           whileInView={{ pathLength: 1 }}
           transition={{ duration: 2, ease: "easeInOut" }}
           viewport={{ once: true }}
           d="M 52vw 35vh Q 58vw 42vh 54vw 50vh"
           fill="none"
           stroke="#C05621"
           strokeWidth="2"
           strokeDasharray="8 4"
         />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Media Card */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-themeGreen-600/5 rounded-[2rem] blur-2xl group-hover:bg-themeGreen-600/10 transition-colors" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-2xl shadow-themeGreen-900/5">
              <img
                src="/images/sales-ui.jpg"
                alt="Sales CRM Interface"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Metric Chips */}
              <div className="absolute top-6 left-6 right-6 flex gap-3 flex-wrap">
                {[
                  { labelKey: 'chip.newLeads', value: '125', icon: Users, color: 'text-themeGreen-600' },
                  { labelKey: 'chip.winRate', value: '34%', icon: Target, color: 'text-purple-600' },
                  { labelKey: 'chip.converted', value: '42', icon: TrendingUp, color: 'text-teal-600' },
                ].map((chip, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-white/50 flex items-center gap-3"
                  >
                    <div className={`${chip.color} bg-current/10 p-1.5 rounded-lg`}>
                      <chip.icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{t(chip.labelKey)}</p>
                      <p className={`text-sm font-black ${chip.color}`}>{chip.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Activity Pulse Overlay */}
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 right-6 bg-teal-500 w-3 h-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              />
            </div>
          </motion.div>

          {/* Right Text Content */}
          <div className="lg:pl-10">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 {t('badge')}
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 {t('heading.pre')} <br/>
                 <span className="text-themeGreen-600 italic">{t('heading.accent')}</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 {t('desc')}
               </p>
               
               <div className="space-y-6 mb-12">
                  {[
                    'feat.scoring',
                    'feat.followups',
                    'feat.kanban',
                    'feat.analytics'
                  ].map((featureKey, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-6 h-6 rounded-full bg-themeGreen-50 flex items-center justify-center flex-shrink-0">
                          <Zap size={14} className="text-themeGreen-600" />
                       </div>
                       <span className="font-bold text-gray-700">{t(featureKey)}</span>
                    </div>
                  ))}
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="group inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
               >
                 {t('cta')}
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
