import { motion } from 'framer-motion';
import AutoCarousel from '../components/AutoCarousel';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'badge': {
    en: 'Ecosystem',
    hi: 'इकोसिस्टम',
    hinglish: 'Ecosystem',
    gu: 'ઇકોસિસ્ટમ',
    mr: 'इकोसिस्टम',
    mwr: 'इकोसिस्टम',
  },
  'heading.pre': {
    en: 'Connects with the tools',
    hi: 'उन टूल्स से जुड़ता है',
    hinglish: 'Un tools se connect hota hai',
    gu: 'એ ટૂલ્સ સાથે જોડાય છે',
    mr: 'त्या टूल्सशी जोडतो',
    mwr: 'उण टूल्स सूं जुड़े',
  },
  'heading.accent': {
    en: 'you already use.',
    hi: 'जो आप पहले से इस्तेमाल करते हैं।',
    hinglish: 'jo aap pehle se use karte ho.',
    gu: 'જે તમે પહેલેથી વાપરો છો.',
    mr: 'जे तुम्ही आधीच वापरता.',
    mwr: 'जको थे पैलां सूं काम में लो।',
  },
  'subtitle': {
    en: 'Keep your existing accounting, payments, and communication stack. Mera Dhanda fits right in.',
    hi: 'अपना मौजूदा accounting, payments और communication stack बनाए रखें। Mera Dhanda इसमें बिल्कुल फिट हो जाता है।',
    hinglish: 'Apna existing accounting, payments aur communication stack waisa hi rakho. Mera Dhanda usme bilkul fit ho jata hai.',
    gu: 'તમારું હાલનું accounting, payments અને communication stack જાળવી રાખો. Mera Dhanda તેમાં બરાબર ફિટ થઈ જાય છે.',
    mr: 'तुमचा सध्याचा accounting, payments आणि communication stack तसाच ठेवा. Mera Dhanda त्यात अगदी फिट बसतो.',
    mwr: 'थारो हाल को accounting, payments अर communication stack वीं ज राखो. Mera Dhanda वीं में बिल्कुल फिट होय जावे।',
  },
};

const integrations = [
  { name: 'WhatsApp Business', color: '#25D366' },
  { name: 'Tally', color: '#E0763C' },
  { name: 'Razorpay', color: '#528FF0' },
  { name: 'Google Workspace', color: '#EA4335' },
  { name: 'Zoho', color: '#E42527' },
  { name: 'Paytm', color: '#00BAF2' },
  { name: 'HDFC SmartHub', color: '#004C8F' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Shiprocket', color: '#7441B8' },
  { name: 'Delhivery', color: '#E74C3C' },
  { name: 'India Post', color: '#C41E3A' },
  { name: 'GSTN Portal', color: '#0F766E' },
];

export default function Integrations() {
  const t = useT(STRINGS);
  return (
    <section className="w-full bg-[#FBF6F1] py-24 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-themeGreen-500/[0.02] rounded-l-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#C05621] mb-4 block">{t('badge')}</span>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-[#2B1B12] mb-6">
            {t('heading.pre')} <br/>
            <span className="text-themeGreen-600 italic">{t('heading.accent')}</span>
          </h2>
          <p className="text-xl text-[#7A6453] max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Integration AutoCarousel */}
        <AutoCarousel 
          speed={35}
          gap={24}
          items={integrations.map((integration, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                y: -5, 
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-8 py-5 cursor-pointer transition-all duration-300"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: integration.color }}
              />
              <span className="text-lg font-bold text-[#2B1B12]">
                {integration.name}
              </span>
            </motion.div>
          ))}
        />
        
        {/* Second row in opposite direction */}
        <AutoCarousel 
          speed={45}
          gap={24}
          direction="right"
          className="mt-6"
          items={[...integrations].reverse().map((integration, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                y: -5, 
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-8 py-5 cursor-pointer transition-all duration-300"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: integration.color }}
              />
              <span className="text-lg font-bold text-[#2B1B12]">
                {integration.name}
              </span>
            </motion.div>
          ))}
        />
      </div>
    </section>
  );
}
