import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import { motion } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'badge': {
    en: 'Help Center',
    hi: 'हेल्प सेंटर',
    hinglish: 'Help Center',
    gu: 'હેલ્પ સેન્ટર',
    mr: 'मदत केंद्र',
    mwr: 'हेल्प सेंटर',
  },
  'heading.pre': {
    en: 'Knowledge Base & ',
    hi: 'नॉलेज बेस और ',
    hinglish: 'Knowledge Base aur ',
    gu: 'નોલેજ બેઝ અને ',
    mr: 'नॉलेज बेस आणि ',
    mwr: 'नॉलेज बेस अर ',
  },
  'heading.accent': {
    en: 'Frequently Asked Questions.',
    hi: 'अक्सर पूछे जाने वाले सवाल।',
    hinglish: 'Frequently Asked Questions.',
    gu: 'વારંવાર પૂછાતા પ્રશ્નો.',
    mr: 'वारंवार विचारले जाणारे प्रश्न.',
    mwr: 'बार-बार पूछीजण आळा सवाल।',
  },
  'subtitle': {
    en: 'Find answers to common questions about our platform, security, billing, and integrations. Our support team is always here to help you succeed.',
    hi: 'हमारे प्लेटफ़ॉर्म, सिक्योरिटी, बिलिंग और इंटीग्रेशन से जुड़े आम सवालों के जवाब पाएं। हमारी सपोर्ट टीम आपकी कामयाबी के लिए हमेशा यहाँ मौजूद है।',
    hinglish: 'Hamare platform, security, billing aur integrations se jude common sawaalon ke jawaab paayein. Hamari support team aapki success ke liye hamesha yahaan hai.',
    gu: 'અમારા પ્લેટફોર્મ, સિક્યોરિટી, બિલિંગ અને ઇન્ટિગ્રેશન વિશેના સામાન્ય પ્રશ્નોના જવાબ મેળવો. અમારી સપોર્ટ ટીમ તમારી સફળતા માટે હંમેશા અહીં છે.',
    mr: 'आमच्या प्लॅटफॉर्म, सिक्युरिटी, बिलिंग आणि इंटिग्रेशनबद्दलच्या सामान्य प्रश्नांची उत्तरे मिळवा. आमची सपोर्ट टीम तुमच्या यशासाठी नेहमी इथे आहे.',
    mwr: 'म्हारे प्लेटफॉर्म, सिक्योरिटी, बिलिंग अर इंटीग्रेशन रे आम सवालां रा जवाब पावो। म्हारी सपोर्ट टीम थांरी कामयाबी सारू हमेशा अठै है।',
  },
};

export default function FAQPage() {
  const t = useT(STRINGS);
  return (
    <div className="pt-16">
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
              {t('badge')}
            </span>
            <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
              {t('heading.pre')} <br/>
              <span className="text-themeGreen-600 italic">{t('heading.accent')}</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </div>
  );
}
