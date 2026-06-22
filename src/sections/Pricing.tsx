import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router';
import { Check, Sparkles } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'heading.pre': { en: 'Simple pricing.', hi: 'आसान कीमत।', hinglish: 'Simple pricing.', gu: 'સરળ કિંમત.', mr: 'सोपी किंमत.', mwr: 'सरल भाव।' },
  'heading.accent': { en: 'No surprises.', hi: 'कोई हैरानी नहीं।', hinglish: 'Koi surprise nahi.', gu: 'કોઈ આશ્ચર્ય નહીં.', mr: 'कोणतेही आश्चर्य नाही.', mwr: 'कोई चौंकाणो कोनी।' },
  'subtitle': { en: 'Start free, upgrade when you are ready. No hidden fees, no long-term contracts.', hi: 'फ़्री शुरू करें, तैयार होने पर अपग्रेड करें। कोई छिपी फ़ीस नहीं, कोई लंबा कॉन्ट्रैक्ट नहीं।', hinglish: 'Free shuru karein, ready ho to upgrade karein. Koi hidden fees nahi, koi long-term contract nahi.', gu: 'ફ્રી શરૂ કરો, તૈયાર હો ત્યારે અપગ્રેડ કરો. કોઈ છુપી ફી નહીં, કોઈ લાંબા કરાર નહીં.', mr: 'मोफत सुरू करा, तयार झाल्यावर अपग्रेड करा. कोणतीही छुपी फी नाही, कोणताही दीर्घकालीन करार नाही.', mwr: 'फ्री चालू करो, त्यार हुवो तो अपग्रेड करो। कोई छिपी फीस कोनी, कोई लाम्बो कॉन्ट्रैक्ट कोनी।' },
  'badge.popular': { en: 'Most Popular', hi: 'सबसे लोकप्रिय', hinglish: 'Sabse popular', gu: 'સૌથી લોકપ્રિય', mr: 'सर्वात लोकप्रिय', mwr: 'सबसूं लोकप्रिय' },
  'cta.demo': { en: 'Book Free Demo', hi: 'फ़्री डेमो बुक करें', hinglish: 'Free demo book karein', gu: 'ફ્રી ડેમો બુક કરો', mr: 'मोफत डेमो बुक करा', mwr: 'फ्री डेमो बुक करो' },
  'compare': { en: 'Compare all features', hi: 'सभी फ़ीचर्स की तुलना करें', hinglish: 'Saare features compare karein', gu: 'બધા ફીચર્સ સરખાવો', mr: 'सर्व वैशिष्ट्ये तुलना करा', mwr: 'सगळा फीचर्स री तुलना करो' },

  'plan.monthly.name': { en: 'MONTHLY', hi: 'मासिक', hinglish: 'MONTHLY', gu: 'માસિક', mr: 'मासिक', mwr: 'महीनेवार' },
  'plan.monthly.period': { en: '/month', hi: '/माह', hinglish: '/month', gu: '/મહિને', mr: '/महिना', mwr: '/महीनो' },
  'plan.monthly.desc': { en: 'Ideal for small businesses just starting their digital journey.', hi: 'अपनी डिजिटल जर्नी शुरू कर रहे छोटे बिज़नेस के लिए बढ़िया।', hinglish: 'Apni digital journey shuru kar rahe chote business ke liye best.', gu: 'પોતાની ડિજિટલ સફર શરૂ કરી રહેલા નાના બિઝનેસ માટે આદર્શ.', mr: 'आपला डिजिटल प्रवास नुकताच सुरू करणाऱ्या छोट्या व्यवसायांसाठी आदर्श.', mwr: 'आपणी डिजिटल यात्रा चालू कर रया छोटा बिज़नेस सारू बढ़िया।' },
  'plan.half.name': { en: 'HALF YEARLY', hi: 'अर्धवार्षिक', hinglish: 'HALF YEARLY', gu: 'અર્ધવાર્ષિક', mr: 'सहामाही', mwr: 'छमाही' },
  'plan.half.period': { en: '/6 months', hi: '/6 माह', hinglish: '/6 months', gu: '/6 મહિના', mr: '/6 महिने', mwr: '/6 महीना' },
  'plan.half.desc': { en: 'Perfect for small to medium businesses planning their growth phases.', hi: 'अपने ग्रोथ फेज़ की प्लानिंग कर रहे छोटे से मध्यम बिज़नेस के लिए परफेक्ट।', hinglish: 'Apne growth phase plan kar rahe chote se medium business ke liye perfect.', gu: 'પોતાના વિકાસના તબક્કાનું આયોજન કરી રહેલા નાનાથી મધ્યમ બિઝનેસ માટે પરફેક્ટ.', mr: 'आपल्या वाढीच्या टप्प्यांचे नियोजन करणाऱ्या लहान ते मध्यम व्यवसायांसाठी परफेक्ट.', mwr: 'आपणी ग्रोथ री प्लानिंग कर रया छोटा सूं मध्यम बिज़नेस सारू परफेक्ट।' },
  'plan.yearly.name': { en: 'YEARLY', hi: 'वार्षिक', hinglish: 'YEARLY', gu: 'વાર્ષિક', mr: 'वार्षिक', mwr: 'सालाना' },
  'plan.yearly.period': { en: '/year', hi: '/वर्ष', hinglish: '/year', gu: '/વર્ષ', mr: '/वर्ष', mwr: '/साल' },
  'plan.yearly.desc': { en: 'Maximum value for established enterprises aiming for long-term excellence.', hi: 'लंबे समय की उत्कृष्टता चाहने वाले स्थापित एंटरप्राइज़ के लिए ज़्यादा वैल्यू।', hinglish: 'Long-term excellence chahne wale established enterprises ke liye maximum value.', gu: 'લાંબા ગાળાની શ્રેષ્ઠતા ઇચ્છતા સ્થાપિત એન્ટરપ્રાઇઝ માટે મહત્તમ વેલ્યુ.', mr: 'दीर्घकालीन उत्कृष्टतेचे ध्येय असलेल्या प्रस्थापित एंटरप्राइझसाठी कमाल मूल्य.', mwr: 'लाम्बे टेम री उत्कृष्टता चावण आला जमे-जमाया एंटरप्राइज़ सारू सबसूं ज्यादा वैल्यू।' },

  'feat.hr': { en: 'Core HR & Attendance', hi: 'कोर HR और अटेंडेंस', hinglish: 'Core HR & Attendance', gu: 'કોર HR અને એટેન્ડન્સ', mr: 'कोर HR आणि उपस्थिती', mwr: 'कोर HR अर अटेंडेंस' },
  'feat.inv.basic': { en: 'Basic Inventory Management', hi: 'बेसिक इन्वेंटरी मैनेजमेंट', hinglish: 'Basic Inventory Management', gu: 'બેઝિક ઇન્વેન્ટરી મેનેજમેન્ટ', mr: 'बेसिक इन्व्हेंटरी व्यवस्थापन', mwr: 'बेसिक इन्वेंटरी मैनेजमेंट' },
  'feat.gst': { en: 'GST Billing & Invoicing', hi: 'GST बिलिंग और इनवॉइसिंग', hinglish: 'GST Billing & Invoicing', gu: 'GST બિલિંગ અને ઇન્વોઇસિંગ', mr: 'GST बिलिंग आणि इन्व्हॉइसिंग', mwr: 'GST बिलिंग अर इनवॉइसिंग' },
  'feat.task': { en: 'Task Management', hi: 'टास्क मैनेजमेंट', hinglish: 'Task Management', gu: 'ટાસ્ક મેનેજમેન્ટ', mr: 'टास्क व्यवस्थापन', mwr: 'टास्क मैनेजमेंट' },
  'feat.email': { en: 'Email Support', hi: 'ईमेल सपोर्ट', hinglish: 'Email Support', gu: 'ઇમેઇલ સપોર્ટ', mr: 'ईमेल सपोर्ट', mwr: 'ईमेल सपोर्ट' },
  'feat.storage5': { en: '5 GB Secure Storage', hi: '5 GB सुरक्षित स्टोरेज', hinglish: '5 GB Secure Storage', gu: '5 GB સુરક્ષિત સ્ટોરેજ', mr: '5 GB सुरक्षित स्टोरेज', mwr: '5 GB सेफ स्टोरेज' },
  'feat.everything.monthly': { en: 'Everything in Monthly', hi: 'मासिक प्लान का सब कुछ', hinglish: 'Monthly plan ka sab kuch', gu: 'માસિક પ્લાનનું બધું', mr: 'मासिक प्लानमधील सर्व काही', mwr: 'महीनेवार प्लान रो सगळो कुछ' },
  'feat.hr.full': { en: 'Full HR & Payroll Suite', hi: 'पूरा HR और पेरोल सूट', hinglish: 'Full HR & Payroll Suite', gu: 'સંપૂર્ણ HR અને પેરોલ સ્યૂટ', mr: 'संपूर्ण HR आणि पेरोल सूट', mwr: 'पूरो HR अर पेरोल सूट' },
  'feat.inv.adv': { en: 'Advanced Inventory Tracking', hi: 'एडवांस्ड इन्वेंटरी ट्रैकिंग', hinglish: 'Advanced Inventory Tracking', gu: 'એડવાન્સ્ડ ઇન્વેન્ટરી ટ્રેકિંગ', mr: 'अ‍ॅडव्हान्स्ड इन्व्हेंटरी ट्रॅकिंग', mwr: 'एडवांस्ड इन्वेंटरी ट्रैकिंग' },
  'feat.crm': { en: 'Sales CRM & Pipelines', hi: 'सेल्स CRM और पाइपलाइन', hinglish: 'Sales CRM & Pipelines', gu: 'સેલ્સ CRM અને પાઇપલાઇન', mr: 'सेल्स CRM आणि पाइपलाइन', mwr: 'सेल्स CRM अर पाइपलाइन' },
  'feat.production': { en: 'Production Floor Control', hi: 'प्रोडक्शन फ्लोर कंट्रोल', hinglish: 'Production Floor Control', gu: 'પ્રોડક્શન ફ્લોર કંટ્રોલ', mr: 'प्रोडक्शन फ्लोर कंट्रोल', mwr: 'प्रोडक्शन फ्लोर कंट्रोल' },
  'feat.analytics': { en: 'Real-time Business Analytics', hi: 'रियल-टाइम बिज़नेस एनालिटिक्स', hinglish: 'Real-time Business Analytics', gu: 'રિયલ-ટાઇમ બિઝનેસ એનાલિટિક્સ', mr: 'रिअल-टाइम बिझनेस अ‍ॅनालिटिक्स', mwr: 'रियल-टाइम बिज़नेस एनालिटिक्स' },
  'feat.storage50': { en: '50 GB Secure Storage', hi: '50 GB सुरक्षित स्टोरेज', hinglish: '50 GB Secure Storage', gu: '50 GB સુરક્ષિત સ્ટોરેજ', mr: '50 GB सुरक्षित स्टोरेज', mwr: '50 GB सेफ स्टोरेज' },
  'feat.everything.half': { en: 'Everything in Half-Yearly', hi: 'अर्धवार्षिक प्लान का सब कुछ', hinglish: 'Half-Yearly plan ka sab kuch', gu: 'અર્ધવાર્ષિક પ્લાનનું બધું', mr: 'सहामाही प्लानमधील सर्व काही', mwr: 'छमाही प्लान रो सगळो कुछ' },
  'feat.account.mgr': { en: 'Dedicated Account Manager', hi: 'समर्पित अकाउंट मैनेजर', hinglish: 'Dedicated Account Manager', gu: 'સમર્પિત એકાઉન્ટ મેનેજર', mr: 'समर्पित अकाउंट मॅनेजर', mwr: 'खास अकाउंट मैनेजर' },
  'feat.erp': { en: 'Custom ERP Workflows', hi: 'कस्टम ERP वर्कफ्लो', hinglish: 'Custom ERP Workflows', gu: 'કસ્ટમ ERP વર્કફ્લો', mr: 'कस्टम ERP वर्कफ्लो', mwr: 'कस्टम ERP वर्कफ्लो' },
  'feat.warehouse': { en: 'Multi-Warehouse Support', hi: 'मल्टी-वेयरहाउस सपोर्ट', hinglish: 'Multi-Warehouse Support', gu: 'મલ્ટિ-વેરહાઉસ સપોર્ટ', mr: 'मल्टी-वेअरहाउस सपोर्ट', mwr: 'मल्टी-वेयरहाउस सपोर्ट' },
  'feat.whitelabel': { en: 'White-label Reports', hi: 'व्हाइट-लेबल रिपोर्ट', hinglish: 'White-label Reports', gu: 'વ્હાઇટ-લેબલ રિપોર્ટ', mr: 'व्हाइट-लेबल रिपोर्ट', mwr: 'व्हाइट-लेबल रिपोर्ट' },
  'feat.api': { en: 'Advanced API Access', hi: 'एडवांस्ड API एक्सेस', hinglish: 'Advanced API Access', gu: 'એડવાન્સ્ડ API એક્સેસ', mr: 'अ‍ॅडव्हान्स्ड API अ‍ॅक्सेस', mwr: 'एडवांस्ड API एक्सेस' },
  'feat.phone': { en: '24/7 Priority Phone Support', hi: '24/7 प्राथमिकता फ़ोन सपोर्ट', hinglish: '24/7 Priority Phone Support', gu: '24/7 પ્રાયોરિટી ફોન સપોર્ટ', mr: '24/7 प्रायोरिटी फोन सपोर्ट', mwr: '24/7 प्रायोरिटी फोन सपोर्ट' },
  'feat.storage.unlimited': { en: 'Unlimited Secure Storage', hi: 'अनलिमिटेड सुरक्षित स्टोरेज', hinglish: 'Unlimited Secure Storage', gu: 'અનલિમિટેડ સુરક્ષિત સ્ટોરેજ', mr: 'अमर्यादित सुरक्षित स्टोरेज', mwr: 'अनलिमिटेड सेफ स्टोरेज' },
};

const plans = [
  {
    nameKey: 'plan.monthly.name',
    price: '₹2,999',
    periodKey: 'plan.monthly.period',
    descKey: 'plan.monthly.desc',
    featureKeys: [
      'feat.hr',
      'feat.inv.basic',
      'feat.gst',
      'feat.task',
      'feat.email',
      'feat.storage5',
    ],
    featured: false,
  },
  {
    nameKey: 'plan.half.name',
    price: '₹14,999',
    periodKey: 'plan.half.period',
    descKey: 'plan.half.desc',
    featureKeys: [
      'feat.everything.monthly',
      'feat.hr.full',
      'feat.inv.adv',
      'feat.crm',
      'feat.production',
      'feat.analytics',
      'feat.storage50',
    ],
    featured: true,
  },
  {
    nameKey: 'plan.yearly.name',
    price: '₹23,999',
    periodKey: 'plan.yearly.period',
    descKey: 'plan.yearly.desc',
    featureKeys: [
      'feat.everything.half',
      'feat.account.mgr',
      'feat.erp',
      'feat.warehouse',
      'feat.whitelabel',
      'feat.api',
      'feat.phone',
      'feat.storage.unlimited',
    ],
    featured: false,
  },
];

export default function Pricing() {
  const t = useT(STRINGS);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="pricing" className="w-full bg-white py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#2B1B12] mb-6">
            {t('heading.pre')} <span className="text-themeGreen-600 italic">{t('heading.accent')}</span>
          </h2>
          <p className="text-lg text-[#7A6453] max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className={`relative rounded-[2.5rem] p-10 border transition-all duration-300 flex flex-col ${
                plan.featured
                  ? 'bg-themeGreen-600 border-themeGreen-500 text-white shadow-2xl shadow-themeGreen-600/30 ring-4 ring-themeGreen-600/10'
                  : 'bg-white border-gray-100 hover:border-themeGreen-200 hover:shadow-xl'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-themeGreen-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                  <Sparkles size={14} /> {t('badge.popular')}
                </div>
              )}

              {/* Plan name */}
              <span className={`text-xs font-black tracking-[0.2em] uppercase mb-6 block ${
                plan.featured ? 'text-white/60' : 'text-themeGreen-600'
              }`}>
                {t(plan.nameKey)}
              </span>

              {/* Price */}
              <div className="flex items-end gap-1 mb-4">
                <span className="text-5xl font-black tracking-tighter">
                  {plan.price}
                </span>
                {plan.periodKey && (
                  <span className={`text-sm font-bold mb-1.5 ${
                    plan.featured ? 'text-white/60' : 'text-gray-400'
                  }`}>
                    {t(plan.periodKey)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm mb-8 leading-relaxed font-medium ${
                plan.featured ? 'text-white/80' : 'text-gray-500'
              }`}>
                {t(plan.descKey)}
              </p>

              <div className={`w-full h-px mb-8 ${
                plan.featured ? 'bg-white/10' : 'bg-gray-100'
              }`} />

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.featureKeys.map((featureKey, j) => (
                  <li key={j} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      plan.featured ? 'bg-white/10' : 'bg-teal-50'
                    }`}>
                      <Check className={`w-4 h-4 ${
                        plan.featured ? 'text-white' : 'text-teal-600'
                      }`} />
                    </div>
                    <span className={`text-sm font-semibold ${
                      plan.featured ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {t(featureKey)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/book-trial"
                className={`w-full py-5 rounded-2xl text-base font-black transition-all text-center ${
                  plan.featured
                    ? 'bg-white text-themeGreen-600 hover:bg-gray-50'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
              >
                {t('cta.demo')}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Compare link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button className="text-sm font-black text-themeGreen-600 hover:underline uppercase tracking-widest flex items-center gap-2 mx-auto">
            {t('compare')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
