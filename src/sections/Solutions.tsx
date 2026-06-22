import { motion, type Variants } from 'framer-motion';
import {
  Truck,
  Factory,
  Settings2,
  UtensilsCrossed,
  Hotel,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';
import FlipCard from '../components/FlipCard';
import AutoCarousel from '../components/AutoCarousel';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'eyebrow': {
    en: 'Industry Solutions',
    hi: 'इंडस्ट्री सॉल्यूशंस',
    hinglish: 'Industry Solutions',
    gu: 'ઇન્ડસ્ટ્રી સોલ્યુશન્સ',
    mr: 'इंडस्ट्री सोल्यूशन्स',
    mwr: 'इंडस्ट्री सॉल्यूशंस',
  },
  'heading.pre': {
    en: 'Built for the way ',
    hi: 'आप जैसे काम करते हैं ',
    hinglish: 'Aap jaise kaam karte ho ',
    gu: 'તમે જે રીતે કામ કરો છો ',
    mr: 'तुम्ही जसं काम करता ',
    mwr: 'थे जिस तरां काम करो ',
  },
  'heading.accent': {
    en: 'you work.',
    hi: 'उसी के लिए बना।',
    hinglish: 'usi ke liye bana.',
    gu: 'એના માટે જ બનાવ્યું.',
    mr: 'त्यासाठीच बनवलं.',
    mwr: 'उणी खातर ई बण्यो।',
  },
  'subtitle': {
    en: "Mera Dhanda isn't a generic software. We've built industry-specific modules that address the unique challenges of your business sector.",
    hi: 'Mera Dhanda कोई आम सॉफ्टवेयर नहीं है। हमने इंडस्ट्री-स्पेसिफिक मॉड्यूल बनाए हैं जो आपके बिज़नेस सेक्टर की खास चुनौतियों को हल करते हैं।',
    hinglish: 'Mera Dhanda koi generic software nahi hai. Humne industry-specific modules banaye hain jo aapke business sector ki unique challenges ko solve karte hain.',
    gu: 'Mera Dhanda કોઈ સામાન્ય સોફ્ટવેર નથી. અમે ઇન્ડસ્ટ્રી-સ્પેસિફિક મોડ્યુલ બનાવ્યા છે જે તમારા બિઝનેસ સેક્ટરના ખાસ પડકારોને હલ કરે છે.',
    mr: 'Mera Dhanda हे काही जनरल सॉफ्टवेअर नाही. आम्ही इंडस्ट्री-स्पेसिफिक मॉड्यूल बनवले आहेत जे तुमच्या बिझनेस सेक्टरच्या खास आव्हानांना सोडवतात.',
    mwr: 'Mera Dhanda कोई आम सॉफ्टवेयर कोनी है। म्हे इंडस्ट्री-स्पेसिफिक मॉड्यूल बणाया है जका थारा बिज़नेस सेक्टर री खास दिक्कतां नै हल करै।',
  },
  'viewAll': {
    en: 'View All Sectors',
    hi: 'सभी सेक्टर देखें',
    hinglish: 'Saare sectors dekhein',
    gu: 'બધા સેક્ટર જુઓ',
    mr: 'सर्व सेक्टर पहा',
    mwr: 'सगळा सेक्टर देखो',
  },
  'carousel.label': {
    en: 'Sector-specific excellence',
    hi: 'सेक्टर-स्पेसिफिक एक्सीलेंस',
    hinglish: 'Sector-specific excellence',
    gu: 'સેક્ટર-સ્પેસિફિક એક્સેલન્સ',
    mr: 'सेक्टर-स्पेसिफिक एक्सलन्स',
    mwr: 'सेक्टर-स्पेसिफिक एक्सीलेंस',
  },
  // Sectors
  'sector.manufacturing.title': {
    en: 'Manufacturing',
    hi: 'मैन्युफैक्चरिंग',
    hinglish: 'Manufacturing',
    gu: 'મેન્યુફેક્ચરિંગ',
    mr: 'मॅन्युफॅक्चरिंग',
    mwr: 'मैन्युफैक्चरिंग',
  },
  'sector.manufacturing.desc': {
    en: 'BOM and production tracking.',
    hi: 'BOM और प्रोडक्शन ट्रैकिंग।',
    hinglish: 'BOM aur production tracking.',
    gu: 'BOM અને પ્રોડક્શન ટ્રેકિંગ.',
    mr: 'BOM आणि प्रोडक्शन ट्रॅकिंग.',
    mwr: 'BOM अर प्रोडक्शन ट्रैकिंग।',
  },
  'sector.manufacturing.details': {
    en: 'Monitor work-in-progress, quality checks, and raw material wastage.',
    hi: 'वर्क-इन-प्रोग्रेस, क्वालिटी चेक और कच्चे माल की बर्बादी पर नज़र रखें।',
    hinglish: 'Work-in-progress, quality checks aur raw material wastage par nazar rakhein.',
    gu: 'વર્ક-ઇન-પ્રોગ્રેસ, ક્વોલિટી ચેક અને કાચા માલના બગાડ પર નજર રાખો.',
    mr: 'वर्क-इन-प्रोग्रेस, क्वालिटी चेक आणि कच्च्या मालाची नासाडी यांवर लक्ष ठेवा.',
    mwr: 'वर्क-इन-प्रोग्रेस, क्वालिटी चेक अर कच्चा माल री बरबादी पर नजर राखो।',
  },
  'sector.restaurants.title': {
    en: 'Restaurants',
    hi: 'रेस्टोरेंट',
    hinglish: 'Restaurants',
    gu: 'રેસ્ટોરન્ટ',
    mr: 'रेस्टॉरंट',
    mwr: 'रेस्टोरेंट',
  },
  'sector.restaurants.desc': {
    en: 'KOT and table management.',
    hi: 'KOT और टेबल मैनेजमेंट।',
    hinglish: 'KOT aur table management.',
    gu: 'KOT અને ટેબલ મેનેજમેન્ટ.',
    mr: 'KOT आणि टेबल मॅनेजमेंट.',
    mwr: 'KOT अर टेबल मैनेजमेंट।',
  },
  'sector.restaurants.details': {
    en: 'Seamlessly integrate with food aggregators and manage daily kitchen stock.',
    hi: 'फूड एग्रीगेटर्स के साथ आसानी से इंटीग्रेट करें और रोज़ का किचन स्टॉक मैनेज करें।',
    hinglish: 'Food aggregators ke saath aasaani se integrate karein aur daily kitchen stock manage karein.',
    gu: 'ફૂડ એગ્રીગેટર્સ સાથે સરળતાથી ઇન્ટિગ્રેટ કરો અને રોજનો કિચન સ્ટોક મેનેજ કરો.',
    mr: 'फूड अ‍ॅग्रीगेटर्ससोबत सहज इंटिग्रेट करा आणि रोजचा किचन स्टॉक मॅनेज करा.',
    mwr: 'फूड एग्रीगेटर्स साथै आसानी सूं इंटीग्रेट करो अर रोज रो किचन स्टॉक मैनेज करो।',
  },
  'sector.distribution.title': {
    en: 'Distribution',
    hi: 'डिस्ट्रिब्यूशन',
    hinglish: 'Distribution',
    gu: 'ડિસ્ટ્રિબ્યુશન',
    mr: 'डिस्ट्रिब्युशन',
    mwr: 'डिस्ट्रिब्यूशन',
  },
  'sector.distribution.desc': {
    en: 'Secondary sales and route tracking.',
    hi: 'सेकंडरी सेल्स और रूट ट्रैकिंग।',
    hinglish: 'Secondary sales aur route tracking.',
    gu: 'સેકન્ડરી સેલ્સ અને રૂટ ટ્રેકિંગ.',
    mr: 'सेकंडरी सेल्स आणि रूट ट्रॅकिंग.',
    mwr: 'सेकंडरी सेल्स अर रूट ट्रैकिंग।',
  },
  'sector.distribution.details': {
    en: 'Empower your sales force with live stock updates and order collection.',
    hi: 'अपनी सेल्स टीम को लाइव स्टॉक अपडेट और ऑर्डर कलेक्शन के साथ मज़बूत बनाएं।',
    hinglish: 'Apni sales team ko live stock updates aur order collection ke saath powerful banayein.',
    gu: 'તમારી સેલ્સ ટીમને લાઇવ સ્ટોક અપડેટ અને ઓર્ડર કલેક્શન સાથે સશક્ત બનાવો.',
    mr: 'तुमच्या सेल्स टीमला लाइव्ह स्टॉक अपडेट आणि ऑर्डर कलेक्शनसह सक्षम करा.',
    mwr: 'थारी सेल्स टीम नै लाइव स्टॉक अपडेट अर ऑर्डर कलेक्शन साथै मजबूत बणावो।',
  },
  'sector.hotels.title': {
    en: 'Hotels',
    hi: 'होटल',
    hinglish: 'Hotels',
    gu: 'હોટેલ',
    mr: 'हॉटेल',
    mwr: 'होटल',
  },
  'sector.hotels.desc': {
    en: 'PMS and guest management.',
    hi: 'PMS और गेस्ट मैनेजमेंट।',
    hinglish: 'PMS aur guest management.',
    gu: 'PMS અને ગેસ્ટ મેનેજમેન્ટ.',
    mr: 'PMS आणि गेस्ट मॅनेजमेंट.',
    mwr: 'PMS अर गेस्ट मैनेजमेंट।',
  },
  'sector.hotels.details': {
    en: 'Track room occupancy, automated billing, and housekeeping schedules.',
    hi: 'रूम ऑक्यूपेंसी, ऑटोमेटेड बिलिंग और हाउसकीपिंग शेड्यूल ट्रैक करें।',
    hinglish: 'Room occupancy, automated billing aur housekeeping schedules track karein.',
    gu: 'રૂમ ઓક્યુપન્સી, ઓટોમેટેડ બિલિંગ અને હાઉસકીપિંગ શેડ્યૂલ ટ્રેક કરો.',
    mr: 'रूम ऑक्युपन्सी, ऑटोमेटेड बिलिंग आणि हाउसकीपिंग शेड्यूल ट्रॅक करा.',
    mwr: 'रूम ऑक्यूपेंसी, ऑटोमेटेड बिलिंग अर हाउसकीपिंग शेड्यूल ट्रैक करो।',
  },
  'sector.services.title': {
    en: 'Services',
    hi: 'सर्विसेज़',
    hinglish: 'Services',
    gu: 'સર્વિસિસ',
    mr: 'सर्व्हिसेस',
    mwr: 'सर्विसेज़',
  },
  'sector.services.desc': {
    en: 'AMC and project tracking.',
    hi: 'AMC और प्रोजेक्ट ट्रैकिंग।',
    hinglish: 'AMC aur project tracking.',
    gu: 'AMC અને પ્રોજેક્ટ ટ્રેકિંગ.',
    mr: 'AMC आणि प्रोजेक्ट ट्रॅकिंग.',
    mwr: 'AMC अर प्रोजेक्ट ट्रैकिंग।',
  },
  'sector.services.details': {
    en: 'Manage professional services, service contracts, and team productivity.',
    hi: 'प्रोफेशनल सर्विसेज़, सर्विस कॉन्ट्रैक्ट और टीम प्रोडक्टिविटी मैनेज करें।',
    hinglish: 'Professional services, service contracts aur team productivity manage karein.',
    gu: 'પ્રોફેશનલ સર્વિસિસ, સર્વિસ કોન્ટ્રાક્ટ અને ટીમ પ્રોડક્ટિવિટી મેનેજ કરો.',
    mr: 'प्रोफेशनल सर्व्हिसेस, सर्व्हिस कॉन्ट्रॅक्ट आणि टीम प्रोडक्टिव्हिटी मॅनेज करा.',
    mwr: 'प्रोफेशनल सर्विसेज़, सर्विस कॉन्ट्रैक्ट अर टीम प्रोडक्टिविटी मैनेज करो।',
  },
  // Card back template "{title} Features" and "Explore {title} Solution" -> use per-sector
  'card.featuresSuffix': {
    en: 'Features',
    hi: 'फ़ीचर्स',
    hinglish: 'Features',
    gu: 'ફીચર્સ',
    mr: 'वैशिष्ट्ये',
    mwr: 'फीचर्स',
  },
  'card.explorePrefix': {
    en: 'Explore',
    hi: 'एक्सप्लोर करें',
    hinglish: 'Explore karein',
    gu: 'એક્સપ્લોર કરો',
    mr: 'एक्सप्लोर करा',
    mwr: 'एक्सप्लोर करो',
  },
  'card.exploreSuffix': {
    en: 'Solution',
    hi: 'सॉल्यूशन',
    hinglish: 'Solution',
    gu: 'સોલ્યુશન',
    mr: 'सोल्यूशन',
    mwr: 'सॉल्यूशन',
  },
  // Carousel items
  'carousel.pharma': {
    en: 'Pharma: Expiry tracking with H1 alerts',
    hi: 'फार्मा: H1 अलर्ट के साथ एक्सपायरी ट्रैकिंग',
    hinglish: 'Pharma: H1 alerts ke saath expiry tracking',
    gu: 'ફાર્મા: H1 એલર્ટ સાથે એક્સપાયરી ટ્રેકિંગ',
    mr: 'फार्मा: H1 अलर्टसह एक्सपायरी ट्रॅकिंग',
    mwr: 'फार्मा: H1 अलर्ट साथै एक्सपायरी ट्रैकिंग',
  },
  'carousel.textiles': {
    en: 'Textiles: Multi-warehouse fabric management',
    hi: 'टेक्सटाइल: मल्टी-वेयरहाउस फैब्रिक मैनेजमेंट',
    hinglish: 'Textiles: Multi-warehouse fabric management',
    gu: 'ટેક્સટાઇલ: મલ્ટિ-વેરહાઉસ ફેબ્રિક મેનેજમેન્ટ',
    mr: 'टेक्स्टाइल: मल्टी-वेअरहाउस फॅब्रिक मॅनेजमेंट',
    mwr: 'टेक्सटाइल: मल्टी-वेयरहाउस फैब्रिक मैनेजमेंट',
  },
  'carousel.fmcg': {
    en: 'FMCG: Route optimization for distributors',
    hi: 'FMCG: डिस्ट्रिब्यूटर्स के लिए रूट ऑप्टिमाइज़ेशन',
    hinglish: 'FMCG: Distributors ke liye route optimization',
    gu: 'FMCG: ડિસ્ટ્રિબ્યુટર્સ માટે રૂટ ઓપ્ટિમાઇઝેશન',
    mr: 'FMCG: डिस्ट्रिब्युटर्ससाठी रूट ऑप्टिमायझेशन',
    mwr: 'FMCG: डिस्ट्रिब्यूटर्स खातर रूट ऑप्टिमाइज़ेशन',
  },
  'carousel.education': {
    en: 'Education: Student fee cycle automation',
    hi: 'एजुकेशन: स्टूडेंट फीस साइकिल ऑटोमेशन',
    hinglish: 'Education: Student fee cycle automation',
    gu: 'એજ્યુકેશન: સ્ટુડન્ટ ફી સાયકલ ઓટોમેશન',
    mr: 'एज्युकेशन: स्टुडंट फी सायकल ऑटोमेशन',
    mwr: 'एजुकेशन: स्टूडेंट फीस साइकिल ऑटोमेशन',
  },
  'carousel.hospitals': {
    en: 'Hospitals: OPD & IPD management system',
    hi: 'हॉस्पिटल: OPD और IPD मैनेजमेंट सिस्टम',
    hinglish: 'Hospitals: OPD & IPD management system',
    gu: 'હોસ્પિટલ: OPD અને IPD મેનેજમેન્ટ સિસ્ટમ',
    mr: 'हॉस्पिटल: OPD आणि IPD मॅनेजमेंट सिस्टम',
    mwr: 'हॉस्पिटल: OPD अर IPD मैनेजमेंट सिस्टम',
  },
  'carousel.automobiles': {
    en: 'Automobiles: Chassis & Spare parts tracking',
    hi: 'ऑटोमोबाइल: चेसिस और स्पेयर पार्ट्स ट्रैकिंग',
    hinglish: 'Automobiles: Chassis & spare parts tracking',
    gu: 'ઓટોમોબાઇલ: ચેસિસ અને સ્પેર પાર્ટ્સ ટ્રેકિંગ',
    mr: 'ऑटोमोबाइल: चेसिस आणि स्पेअर पार्ट्स ट्रॅकिंग',
    mwr: 'ऑटोमोबाइल: चेसिस अर स्पेयर पार्ट्स ट्रैकिंग',
  },
  'carousel.printing': {
    en: 'Printing: Custom job cards & paper stock',
    hi: 'प्रिंटिंग: कस्टम जॉब कार्ड और पेपर स्टॉक',
    hinglish: 'Printing: Custom job cards & paper stock',
    gu: 'પ્રિન્ટિંગ: કસ્ટમ જોબ કાર્ડ અને પેપર સ્ટોક',
    mr: 'प्रिंटिंग: कस्टम जॉब कार्ड आणि पेपर स्टॉक',
    mwr: 'प्रिंटिंग: कस्टम जॉब कार्ड अर पेपर स्टॉक',
  },
};

const sectors = [
  {
    id: 'manufacturing',
    titleKey: 'sector.manufacturing.title',
    icon: Factory,
    color: '#EA580C',
    descKey: 'sector.manufacturing.desc',
    detailsKey: 'sector.manufacturing.details',
  },
  {
    id: 'restaurants',
    titleKey: 'sector.restaurants.title',
    icon: UtensilsCrossed,
    color: '#DC2626',
    descKey: 'sector.restaurants.desc',
    detailsKey: 'sector.restaurants.details',
  },
  {
    id: 'distribution',
    titleKey: 'sector.distribution.title',
    icon: Truck,
    color: '#0F766E',
    descKey: 'sector.distribution.desc',
    detailsKey: 'sector.distribution.details',
  },
  {
    id: 'hotels',
    titleKey: 'sector.hotels.title',
    icon: Hotel,
    color: '#7C3AED',
    descKey: 'sector.hotels.desc',
    detailsKey: 'sector.hotels.details',
  },
  {
    id: 'service-based',
    titleKey: 'sector.services.title',
    icon: Settings2,
    color: '#0D9488',
    descKey: 'sector.services.desc',
    detailsKey: 'sector.services.details',
  },
];

export default function Solutions() {
  const t = useT(STRINGS);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const carouselItems = [
    'carousel.pharma',
    'carousel.textiles',
    'carousel.fmcg',
    'carousel.education',
    'carousel.hospitals',
    'carousel.automobiles',
    'carousel.printing',
  ];

  return (
    <section id="solutions" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#C05621]">
              {t('eyebrow')}
            </span>
            <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#2B1B12] mt-3">
              {t('heading.pre')}<span className="text-[#C05621]">{t('heading.accent')}</span>
            </h2>
            <p className="text-[17px] text-[#7A6453] mt-4 leading-[1.7]">
              {t('subtitle')}
            </p>
          </div>
          <Link to="/solutions/distribution" className="inline-flex items-center gap-2 text-[#C05621] font-bold hover:underline">
            {t('viewAll')}
            <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              className="h-[240px]"
            >
              <FlipCard
                className="h-full"
                front={
                  <div className="h-full bg-[#FAFAF8] rounded-2xl border border-[rgba(43,27,18,0.06)] p-8 flex flex-col items-center justify-center text-center group">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${sector.color}15`, color: sector.color }}
                    >
                      <sector.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#2B1B12]">{t(sector.titleKey)}</h3>
                    <p className="text-sm text-[#7A6453] mt-2">{t(sector.descKey)}</p>
                  </div>
                }
                back={
                  <div
                    className="h-full rounded-2xl p-8 flex flex-col justify-between text-white"
                    style={{ backgroundColor: sector.color }}
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-3">{t(sector.titleKey)} {t('card.featuresSuffix')}</h3>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {t(sector.detailsKey)}
                      </p>
                    </div>
                    <Link
                      to={`/solutions/${sector.id}`}
                      className="w-full py-2.5 bg-white text-[#2B1B12] rounded-lg text-center text-xs font-bold hover:bg-opacity-90 transition-all"
                    >
                      {t('card.explorePrefix')} {t(sector.titleKey)} {t('card.exploreSuffix')}
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Industry Carousel */}
        <div className="mt-24 pt-12 border-t border-gray-100">
           <p className="text-center text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-10">{t('carousel.label')}</p>
           <AutoCarousel
              speed={30}
              gap={40}
              items={carouselItems.map((key, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-[#FAFAF8] border border-gray-100 rounded-full">
                  <div className="w-2 h-2 bg-themeGreen-600 rounded-full" />
                  <span className="text-sm font-bold text-gray-700">{t(key)}</span>
                </div>
              ))}
           />
        </div>
      </div>
    </section>
  );
}
