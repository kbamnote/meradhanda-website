import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Users, Heart, ClipboardCheck, Sparkles } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'img.alt': {
    en: 'Team collaborating',
    hi: 'टीम मिलकर काम करती हुई',
    hinglish: 'Team milkar kaam karti hui',
    gu: 'ટીમ સાથે મળીને કામ કરતી',
    mr: 'संघ एकत्र काम करताना',
    mwr: 'टीम मिलकर काम करती होई',
  },
  'stat.workforce.label': {
    en: 'Active Workforce',
    hi: 'सक्रिय कर्मचारी',
    hinglish: 'Active Workforce',
    gu: 'સક્રિય કર્મચારીઓ',
    mr: 'सक्रिय कर्मचारी',
    mwr: 'चालू कर्मचारी',
  },
  'stat.workforce.value': {
    en: '48 Members',
    hi: '48 सदस्य',
    hinglish: '48 Members',
    gu: '48 સભ્યો',
    mr: '48 सदस्य',
    mwr: '48 सदस्य',
  },
  'stat.satisfaction': {
    en: '98% Satisfaction',
    hi: '98% संतुष्टि',
    hinglish: '98% Satisfaction',
    gu: '98% સંતોષ',
    mr: '98% समाधान',
    mwr: '98% संतुष्टि',
  },
  'badge': {
    en: 'Human Capital',
    hi: 'ह्यूमन कैपिटल',
    hinglish: 'Human Capital',
    gu: 'હ્યુમન કેપિટલ',
    mr: 'ह्युमन कॅपिटल',
    mwr: 'ह्यूमन कैपिटल',
  },
  'heading.pre': {
    en: 'Take care of the ',
    hi: 'पूरी टीम का ',
    hinglish: 'Poori ',
    gu: 'આખી ',
    mr: 'संपूर्ण ',
    mwr: 'पूरी ',
  },
  'heading.accent': {
    en: 'entire team.',
    hi: 'ख्याल रखें।',
    hinglish: 'team ka khayal rakhein.',
    gu: 'ટીમની સંભાળ રાખો.',
    mr: 'टीमची काळजी घ्या.',
    mwr: 'टीम रो ख्याल राखो.',
  },
  'subtitle': {
    en: 'Attendance, leaves, and payroll—automated and accurate. Compliance-ready reports, without the manual spreadsheet marathon.',
    hi: 'अटेंडेंस, छुट्टियाँ और पेरोल—ऑटोमेटेड और सटीक। मैन्युअल स्प्रेडशीट की झंझट के बिना, कंप्लायंस-रेडी रिपोर्ट्स।',
    hinglish: 'Attendance, leaves aur payroll—automated aur accurate. Manual spreadsheet ke jhanjhat ke bina, compliance-ready reports.',
    gu: 'એટેન્ડન્સ, રજાઓ અને પેરોલ—ઓટોમેટેડ અને સચોટ. મેન્યુઅલ સ્પ્રેડશીટની ઝંઝટ વગર, કમ્પ્લાયન્સ-રેડી રિપોર્ટ્સ.',
    mr: 'हजेरी, सुट्ट्या आणि पेरोल—ऑटोमेटेड आणि अचूक. मॅन्युअल स्प्रेडशीटच्या त्रासाशिवाय, कम्प्लायन्स-रेडी रिपोर्ट्स.',
    mwr: 'अटेंडेंस, छुट्टी अर पेरोल—ऑटोमेटेड अर सही. मैन्युअल स्प्रेडशीट री झंझट बिना, कंप्लायंस-रेडी रिपोर्ट्स.',
  },
  'feat.payroll.title': {
    en: 'Automated Payroll',
    hi: 'ऑटोमेटेड पेरोल',
    hinglish: 'Automated Payroll',
    gu: 'ઓટોમેટેડ પેરોલ',
    mr: 'ऑटोमेटेड पेरोल',
    mwr: 'ऑटोमेटेड पेरोल',
  },
  'feat.payroll.desc': {
    en: 'One-click salary disbursement with tax compliance.',
    hi: 'टैक्स कंप्लायंस के साथ एक क्लिक में सैलरी का भुगतान।',
    hinglish: 'Tax compliance ke saath ek-click salary disbursement.',
    gu: 'ટેક્સ કમ્પ્લાયન્સ સાથે એક-ક્લિક સેલરી ચુકવણી.',
    mr: 'टॅक्स कम्प्लायन्ससह एका क्लिकवर पगार वितरण.',
    mwr: 'टैक्स कंप्लायंस रे साथै एक क्लिक मं सैलरी रो भुगतान.',
  },
  'feat.attendance.title': {
    en: 'Smart Attendance',
    hi: 'स्मार्ट अटेंडेंस',
    hinglish: 'Smart Attendance',
    gu: 'સ્માર્ટ એટેન્ડન્સ',
    mr: 'स्मार्ट हजेरी',
    mwr: 'स्मार्ट अटेंडेंस',
  },
  'feat.attendance.desc': {
    en: 'Geofenced and facial recognition attendance.',
    hi: 'जियोफेंस्ड और फेशियल रिकग्निशन अटेंडेंस।',
    hinglish: 'Geofenced aur facial recognition attendance.',
    gu: 'જિયોફેન્સ્ડ અને ફેશિયલ રેકગ્નિશન એટેન્ડન્સ.',
    mr: 'जिओफेन्स्ड आणि फेशियल रेकग्निशन हजेरी.',
    mwr: 'जियोफेंस्ड अर फेशियल रिकग्निशन अटेंडेंस.',
  },
  'cta': {
    en: 'Explore People Module',
    hi: 'पीपल मॉड्यूल देखें',
    hinglish: 'People Module explore karein',
    gu: 'પીપલ મોડ્યુલ જુઓ',
    mr: 'पीपल मॉड्यूल पाहा',
    mwr: 'पीपल मॉड्यूल देखो',
  },
};

const FEATURES = [
  { icon: Sparkles, titleKey: 'feat.payroll.title', descKey: 'feat.payroll.desc' },
  { icon: ClipboardCheck, titleKey: 'feat.attendance.title', descKey: 'feat.attendance.desc' },
];

export default function PeopleSection() {
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
      {/* Decorative Connector */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
         <motion.path
           initial={{ pathLength: 0 }}
           whileInView={{ pathLength: 1 }}
           transition={{ duration: 2, ease: "easeInOut" }}
           viewport={{ once: true }}
           d="M 48vw 75vh Q 52vw 68vh 56vw 62vh"
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
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-2xl">
              <img
                src="/images/team-photo.jpg"
                alt={t('img.alt')}
                className="w-full h-[50vh] lg:h-[62vh] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* HR Stats Overlay */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl border border-white/50 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-themeGreen-600 text-white flex items-center justify-center shadow-lg shadow-themeGreen-600/20">
                   <Users size={32} />
                </div>
                <div>
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none mb-2 text-left">{t('stat.workforce.label')}</p>
                   <p className="text-3xl font-black text-gray-900 leading-none">{t('stat.workforce.value')}</p>
                </div>
              </motion.div>

              {/* Happiness Indicator */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/50 flex items-center gap-2 shadow-xl"
              >
                 <Heart size={16} className="text-red-500 fill-red-500" />
                 <span className="text-xs font-black text-gray-900 uppercase tracking-wider">{t('stat.satisfaction')}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <div className="lg:pl-10">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 {t('badge')}
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 {t('heading.pre')}<br/>
                 <span className="text-themeGreen-600 italic">{t('heading.accent')}</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 {t('subtitle')}
               </p>
               
               <div className="space-y-8 mb-12">
                  {FEATURES.map((feat, i) => (
                    <div key={i} className="flex gap-5 group">
                       <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-themeGreen-600 group-hover:bg-themeGreen-600 group-hover:text-white transition-all">
                          <feat.icon size={24} />
                       </div>
                       <div>
                          <h4 className="text-lg font-black text-gray-900 mb-1">{t(feat.titleKey)}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{t(feat.descKey)}</p>
                       </div>
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
