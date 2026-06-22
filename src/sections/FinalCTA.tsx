import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'heading.pre': {
    en: 'Ready to bring your entire',
    hi: 'क्या आप अपना पूरा',
    hinglish: 'Apna pura',
    gu: 'તમારા આખા',
    mr: 'तुमचा संपूर्ण',
    mwr: 'थारो पूरो',
  },
  'heading.accent': {
    en: 'business together?',
    hi: 'बिज़नेस एक साथ लाने के लिए तैयार हैं?',
    hinglish: 'business ek saath laane ke liye taiyaar ho?',
    gu: 'બિઝનેસને એકસાથે લાવવા તૈયાર છો?',
    mr: 'व्यवसाय एकत्र आणण्यासाठी तयार आहात?',
    mwr: 'बिज़नेस एक ठौड़ ल्यावण खातर त्यार हो?',
  },
  'subtitle.line1': {
    en: 'Start free. Add your team. See the difference in a week.',
    hi: 'फ़्री में शुरू करें। अपनी टीम जोड़ें। एक हफ़्ते में फ़र्क देखें।',
    hinglish: 'Free mein shuru karein. Apni team add karein. Ek hafte mein farak dekhein.',
    gu: 'ફ્રીમાં શરૂ કરો. તમારી ટીમ ઉમેરો. એક અઠવાડિયામાં ફરક જુઓ.',
    mr: 'मोफत सुरू करा. तुमची टीम जोडा. एका आठवड्यात फरक पहा.',
    mwr: 'फ्री में चालू करो. थारी टीम जोड़ो. एक हफ्ता में फरक देखो.',
  },
  'subtitle.line2': {
    en: 'Join 5,000+ businesses growing with Mera Dhanda.',
    hi: 'Mera Dhanda के साथ बढ़ रहे 5,000+ बिज़नेस से जुड़ें।',
    hinglish: 'Mera Dhanda ke saath badh rahe 5,000+ businesses se judein.',
    gu: 'Mera Dhanda સાથે વધી રહેલા 5,000+ બિઝનેસ સાથે જોડાઓ.',
    mr: 'Mera Dhanda सोबत वाढणाऱ्या 5,000+ व्यवसायांमध्ये सामील व्हा.',
    mwr: 'Mera Dhanda साथै बढ़ रिया 5,000+ बिज़नेस सूं जुड़ो.',
  },
  'cta.demo': {
    en: 'Book Free Demo',
    hi: 'फ़्री डेमो बुक करें',
    hinglish: 'Free demo book karein',
    gu: 'ફ્રી ડેમો બુક કરો',
    mr: 'मोफत डेमो बुक करा',
    mwr: 'फ्री डेमो बुक करो',
  },
  'cta.sales': {
    en: 'Talk to Sales',
    hi: 'सेल्स से बात करें',
    hinglish: 'Sales se baat karein',
    gu: 'સેલ્સ સાથે વાત કરો',
    mr: 'सेल्सशी बोला',
    mwr: 'सेल्स सूं बात करो',
  },
  'footnote': {
    en: 'No credit card required • 14-day free trial • Cancel anytime',
    hi: 'कोई क्रेडिट कार्ड ज़रूरी नहीं • 14-दिन फ़्री ट्रायल • कभी भी कैंसल करें',
    hinglish: 'Koi credit card zaroori nahi • 14-day free trial • Kabhi bhi cancel karein',
    gu: 'કોઈ ક્રેડિટ કાર્ડ જરૂરી નથી • 14-દિવસ ફ્રી ટ્રાયલ • ગમે ત્યારે કેન્સલ કરો',
    mr: 'क्रेडिट कार्डची गरज नाही • 14-दिवस मोफत ट्रायल • कधीही रद्द करा',
    mwr: 'कोई क्रेडिट कार्ड री जरूरत कोनी • 14-दिन फ्री ट्रायल • कदैई भी कैंसल करो',
  },
};

export default function FinalCTA() {
  const t = useT(STRINGS);
  return (
    <section className="w-full bg-[#2B1B12] py-32 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-themeGreen-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-[1.1]">
            {t('heading.pre')} <br/>
            <span className="text-themeGreen-500 italic">{t('heading.accent')}</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle.line1')} <br/>
            {t('subtitle.line2')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/book-trial"
              className="px-12 py-5 bg-themeGreen-600 text-white text-lg font-black rounded-2xl hover:bg-themeGreen-700 transition-colors shadow-2xl shadow-themeGreen-600/20 inline-block text-center"
            >
              {t('cta.demo')}
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent text-white text-lg font-black rounded-2xl border-2 border-white/10 transition-all"
            >
              {t('cta.sales')}
            </motion.button>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-gray-500"
          >
            {t('footnote')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
