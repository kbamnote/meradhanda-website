import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'badge': {
    en: 'Digital Transformation',
    hi: 'डिजिटल ट्रांसफॉर्मेशन',
    hinglish: 'Digital Transformation',
    gu: 'ડિજિટલ ટ્રાન્સફોર્મેશન',
    mr: 'डिजिटल ट्रान्सफॉर्मेशन',
    mwr: 'डिजिटल ट्रांसफॉर्मेशन',
  },
  'heading.pre': {
    en: 'Convert your business to',
    hi: 'अपने बिज़नेस को बदलें',
    hinglish: 'Apne business ko banao',
    gu: 'તમારા બિઝનેસને બદલો',
    mr: 'तुमचा बिझनेस बदला',
    mwr: 'थारे बिज़नेस ने बदलो',
  },
  'heading.accent': {
    en: 'company in 10 minutes.',
    hi: '10 मिनट में कंपनी।',
    hinglish: '10 minute mein company.',
    gu: '10 મિનિટમાં કંપની.',
    mr: '10 मिनिटांत कंपनी.',
    mwr: '10 मिनट में कंपनी।',
  },
  'description': {
    en: "Experience the fastest way to incorporate. We've automated the complex legal paperwork so you can transition from a small business to a corporate powerhouse instantly.",
    hi: 'कंपनी बनाने का सबसे तेज़ तरीका अनुभव करें। हमने जटिल कानूनी कागज़ी कार्यवाही को ऑटोमेट कर दिया है, ताकि आप एक छोटे बिज़नेस से तुरंत एक कॉर्पोरेट पावरहाउस बन सकें।',
    hinglish: 'Company banane ka sabse fast tareeka experience karein. Humne complex legal paperwork ko automate kar diya hai, taaki aap chhote business se turant ek corporate powerhouse ban sakein.',
    gu: 'કંપની બનાવવાની સૌથી ઝડપી રીત અનુભવો. અમે જટિલ કાનૂની કાગળકામને ઓટોમેટ કરી દીધું છે, જેથી તમે નાના બિઝનેસથી તરત જ કોર્પોરેટ પાવરહાઉસ બની શકો.',
    mr: 'कंपनी बनवण्याचा सर्वात वेगवान मार्ग अनुभवा. आम्ही किचकट कायदेशीर कागदपत्रे ऑटोमेट केली आहेत, जेणेकरून तुम्ही लहान बिझनेसमधून लगेच कॉर्पोरेट पॉवरहाउस बनू शकता.',
    mwr: 'कंपनी बणावण रो सबसूं तेज़ तरीको देखो। म्हे जटिल कानूनी कागज़ात ने ऑटोमेट कर दियो है, ताकि थे छोटे बिज़नेस सूं तुरंत कॉर्पोरेट पावरहाउस बण सको।',
  },
  'feature.fastest': {
    en: 'Fastest Processing',
    hi: 'सबसे तेज़ प्रोसेसिंग',
    hinglish: 'Sabse fast processing',
    gu: 'સૌથી ઝડપી પ્રોસેસિંગ',
    mr: 'सर्वात वेगवान प्रोसेसिंग',
    mwr: 'सबसूं तेज़ प्रोसेसिंग',
  },
  'feature.compliant': {
    en: 'Legally Compliant',
    hi: 'कानूनी रूप से अनुपालित',
    hinglish: 'Legally compliant',
    gu: 'કાનૂની રીતે અનુપાલિત',
    mr: 'कायदेशीररित्या अनुरूप',
    mwr: 'कानूनी रूप सूं सही',
  },
  'feature.corporate': {
    en: 'Corporate Ready',
    hi: 'कॉर्पोरेट के लिए तैयार',
    hinglish: 'Corporate ready',
    gu: 'કોર્પોરેટ માટે તૈયાર',
    mr: 'कॉर्पोरेटसाठी तयार',
    mwr: 'कॉर्पोरेट खातर तैयार',
  },
  'feature.experts': {
    en: 'Verified Experts',
    hi: 'सत्यापित विशेषज्ञ',
    hinglish: 'Verified experts',
    gu: 'ચકાસાયેલ નિષ્ણાતો',
    mr: 'सत्यापित तज्ञ',
    mwr: 'पुख्ता विशेषज्ञ',
  },
  'cta': {
    en: 'Start Conversion Now',
    hi: 'अभी कन्वर्ज़न शुरू करें',
    hinglish: 'Abhi conversion shuru karein',
    gu: 'હમણાં કન્વર્ઝન શરૂ કરો',
    mr: 'आत्ताच कन्व्हर्जन सुरू करा',
    mwr: 'अभी कन्वर्ज़न चालू करो',
  },
  'status.label': {
    en: 'Status',
    hi: 'स्टेटस',
    hinglish: 'Status',
    gu: 'સ્ટેટસ',
    mr: 'स्टेटस',
    mwr: 'स्टेटस',
  },
  'status.value': {
    en: 'Company Registered',
    hi: 'कंपनी रजिस्टर हो गई',
    hinglish: 'Company register ho gayi',
    gu: 'કંપની રજિસ્ટર થઈ',
    mr: 'कंपनी रजिस्टर झाली',
    mwr: 'कंपनी रजिस्टर हो गी',
  },
  'img.alt': {
    en: 'Business Solution Interface',
    hi: 'बिज़नेस सॉल्यूशन इंटरफ़ेस',
    hinglish: 'Business Solution Interface',
    gu: 'બિઝનેસ સોલ્યુશન ઇન્ટરફેસ',
    mr: 'बिझनेस सोल्यूशन इंटरफेस',
    mwr: 'बिज़नेस सॉल्यूशन इंटरफेस',
  },
};

export default function BusinessSolution() {
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
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-themeGreen-50/50 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 {t('badge')}
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 {t('heading.pre')} <br/>
                 <span className="text-themeGreen-600">{t('heading.accent')}</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 {t('description')}
               </p>

               <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { textKey: "feature.fastest", icon: Clock },
                    { textKey: "feature.compliant", icon: ShieldCheck },
                    { textKey: "feature.corporate", icon: Building2 },
                    { textKey: "feature.experts", icon: CheckCircle2 }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-themeGreen-50 flex items-center justify-center flex-shrink-0">
                          <feature.icon size={20} className="text-themeGreen-600" />
                       </div>
                       <span className="font-bold text-gray-700">{t(feature.textKey)}</span>
                    </div>
                  ))}
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="group inline-flex items-center gap-4 bg-themeGreen-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-themeGreen-700 transition-all shadow-xl shadow-themeGreen-600/20"
               >
                 {t('cta')}
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>

          {/* Right Media Card */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 relative group"
          >
            <div className="absolute -inset-4 bg-themeGreen-600/5 rounded-[2rem] blur-2xl group-hover:bg-themeGreen-600/10 transition-colors" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-2xl shadow-themeGreen-900/10">
              <img
                src="/images/business_solution.png"
                alt={t('img.alt')}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Status Overlay */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50 flex items-center gap-4"
              >
                <div className="bg-teal-100 p-2 rounded-full">
                  <CheckCircle2 size={24} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{t('status.label')}</p>
                  <p className="text-sm font-black text-gray-900">{t('status.value')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
