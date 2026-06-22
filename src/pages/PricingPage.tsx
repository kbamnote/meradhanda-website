import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import { motion } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'badge': {
    en: 'Transparent Plans',
    hi: 'पारदर्शी प्लान',
    hinglish: 'Transparent plans',
    gu: 'પારદર્શક પ્લાન',
    mr: 'पारदर्शक प्लॅन',
    mwr: 'साफ-सुथरा प्लान',
  },
  'heading.pre': {
    en: 'Flexible plans for ',
    hi: 'हर बिज़नेस स्केल के लिए ',
    hinglish: 'Har business scale ke liye ',
    gu: 'દરેક બિઝનેસ સ્કેલ માટે ',
    mr: 'प्रत्येक व्यवसायाच्या स्तरासाठी ',
    mwr: 'हर बिजनेस साइज खातर ',
  },
  'heading.accent': {
    en: 'every business scale.',
    hi: 'फ्लेक्सिबल प्लान।',
    hinglish: 'flexible plans.',
    gu: 'ફ્લેક્સિબલ પ્લાન.',
    mr: 'लवचिक प्लॅन.',
    mwr: 'फ्लेक्सिबल प्लान।',
  },
  'subtitle': {
    en: 'Choose the package that fits your current needs. Upgrade anytime as your operations expand and your team grows.',
    hi: 'अपनी मौजूदा ज़रूरतों के हिसाब से पैकेज चुनें। जैसे-जैसे आपका काम बढ़े और टीम बड़ी हो, कभी भी अपग्रेड करें।',
    hinglish: 'Apni abhi ki zaroorat ke hisaab se package chuno. Jaise-jaise aapka kaam badhe aur team badi ho, kabhi bhi upgrade karo.',
    gu: 'તમારી હાલની જરૂરિયાત મુજબ પેકેજ પસંદ કરો. જેમ તમારું કામ વધે અને ટીમ મોટી થાય તેમ ગમે ત્યારે અપગ્રેડ કરો.',
    mr: 'तुमच्या सध्याच्या गरजेनुसार पॅकेज निवडा. जसजसे तुमचे काम वाढेल आणि टीम मोठी होईल तसे कधीही अपग्रेड करा.',
    mwr: 'थारी अबार री जरूरत मुजब पैकेज चुणो। जियां-जियां थारो काम बधे अर टीम बडी होवे, कदी भी अपग्रेड करो।',
  },
};

export default function PricingPage() {
  const t = useT(STRINGS);
  return (
    <div className="pt-16">
      <section className="bg-[#FBF6F1] py-20 border-b border-gray-100">
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

      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
