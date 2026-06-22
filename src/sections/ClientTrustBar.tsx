import AutoCarousel from '../components/AutoCarousel';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'trustbar.eyebrow': {
    en: 'Trusted by industries across India',
    hi: 'पूरे भारत के उद्योगों का भरोसा',
    hinglish: 'Poore India ki industries ka bharosa',
    gu: 'સમગ્ર ભારતના ઉદ્યોગોનો વિશ્વાસ',
    mr: 'संपूर्ण भारतातील उद्योगांचा विश्वास',
    mwr: 'सारे भारत रा उद्योगां रो भरोसो',
  },
  'industry.printing': {
    en: 'Printing',
    hi: 'प्रिंटिंग',
    hinglish: 'Printing',
    gu: 'પ્રિન્ટિંગ',
    mr: 'प्रिंटिंग',
    mwr: 'प्रिंटिंग',
  },
  'industry.manufacturing': {
    en: 'Manufacturing',
    hi: 'मैन्युफैक्चरिंग',
    hinglish: 'Manufacturing',
    gu: 'મેન્યુફેક્ચરિંગ',
    mr: 'मॅन्युफॅक्चरिंग',
    mwr: 'मैन्युफैक्चरिंग',
  },
  'industry.distribution': {
    en: 'Distribution',
    hi: 'डिस्ट्रीब्यूशन',
    hinglish: 'Distribution',
    gu: 'ડિસ્ટ્રિબ્યુશન',
    mr: 'डिस्ट्रिब्युशन',
    mwr: 'डिस्ट्रीब्यूशन',
  },
  'industry.service': {
    en: 'Service',
    hi: 'सर्विस',
    hinglish: 'Service',
    gu: 'સર્વિસ',
    mr: 'सर्विस',
    mwr: 'सर्विस',
  },
  'industry.automobile': {
    en: 'Automobile',
    hi: 'ऑटोमोबाइल',
    hinglish: 'Automobile',
    gu: 'ઓટોમોબાઇલ',
    mr: 'ऑटोमोबाईल',
    mwr: 'ऑटोमोबाइल',
  },
  'industry.pharmacy': {
    en: 'Pharmacy',
    hi: 'फार्मेसी',
    hinglish: 'Pharmacy',
    gu: 'ફાર્મસી',
    mr: 'फार्मसी',
    mwr: 'फार्मेसी',
  },
  'industry.coaching': {
    en: 'Coaching',
    hi: 'कोचिंग',
    hinglish: 'Coaching',
    gu: 'કોચિંગ',
    mr: 'कोचिंग',
    mwr: 'कोचिंग',
  },
};

const partners = [
  { name: 'Global Prints', industryKey: 'industry.printing' },
  { name: 'Metro Textiles', industryKey: 'industry.manufacturing' },
  { name: 'Fresh Foods', industryKey: 'industry.distribution' },
  { name: 'Tech Solutions', industryKey: 'industry.distribution' },
  { name: 'Smart Services', industryKey: 'industry.service' },
  { name: 'Elite Motors', industryKey: 'industry.automobile' },
  { name: 'Health First', industryKey: 'industry.pharmacy' },
  { name: 'Bright Education', industryKey: 'industry.coaching' },
];

export default function ClientTrustBar() {
  const t = useT(STRINGS);
  return (
    <section className="w-full bg-white py-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-2">{t('trustbar.eyebrow')}</p>
      </div>

      <AutoCarousel
        speed={25}
        gap={60}
        items={partners.map((partner, i) => (
          <div key={i} className="flex flex-col items-center group cursor-default">
            <span className="text-xl lg:text-2xl font-black text-gray-300 group-hover:text-themeGreen-600 transition-colors duration-300">
              {partner.name}
            </span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              {t(partner.industryKey)}
            </span>
          </div>
        ))}
      />
    </section>
  );
}
