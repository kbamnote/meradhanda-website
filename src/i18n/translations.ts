// Central translation dictionary.
// Flat keys -> per-language values so every string keeps all its translations
// together. Add new strings here as more of the site is localized.
export type LangCode = 'en' | 'hi' | 'hinglish' | 'gu' | 'mr' | 'mwr';

export const LANGUAGES: { code: LangCode; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'hinglish', label: 'Hinglish', native: 'Hinglish' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'mwr', label: 'Marwadi', native: 'मारवाड़ी' },
];

export type Entry = Record<LangCode, string>;

export const dict: Record<string, Entry> = {
  // ---------------- Navigation ----------------
  'nav.features': { en: 'Features', hi: 'फ़ीचर्स', hinglish: 'Features', gu: 'ફીચર્સ', mr: 'वैशिष्ट्ये', mwr: 'फीचर्स' },
  'nav.solutions': { en: 'Solutions', hi: 'समाधान', hinglish: 'Solutions', gu: 'સોલ્યુશન્સ', mr: 'उपाय', mwr: 'समाधान' },
  'nav.pricing': { en: 'Pricing', hi: 'कीमत', hinglish: 'Pricing', gu: 'કિંમત', mr: 'किंमत', mwr: 'भाव' },
  'nav.faq': { en: 'FAQ', hi: 'सवाल-जवाब', hinglish: 'FAQ', gu: 'પ્રશ્નો', mr: 'प्रश्न', mwr: 'सवाल-जवाब' },
  'nav.login': { en: 'Login', hi: 'लॉगिन', hinglish: 'Login', gu: 'લૉગિન', mr: 'लॉगिन', mwr: 'लॉगिन' },
  'nav.cta': { en: 'Start for free', hi: 'मुफ़्त में शुरू करें', hinglish: 'Free mein shuru karein', gu: 'મફતમાં શરૂ કરો', mr: 'मोफत सुरू करा', mwr: 'मुफ़त में चालू करो' },
  'nav.promo': { en: 'Ready to scale your business?', hi: 'अपना बिज़नेस बढ़ाने के लिए तैयार हैं?', hinglish: 'Apna business badhane ke liye taiyaar hain?', gu: 'તમારો બિઝનેસ વધારવા તૈયાર છો?', mr: 'तुमचा व्यवसाय वाढवायला तयार आहात?', mwr: 'थारो धंधो बढ़ावण सारू तैयार हो?' },
  'nav.viewAll': { en: 'View All Modules', hi: 'सभी मॉड्यूल देखें', hinglish: 'Saare modules dekhein', gu: 'બધા મોડ્યુલ જુઓ', mr: 'सर्व मॉड्यूल पाहा', mwr: 'सगळा मॉड्यूल देखो' },
  'nav.language': { en: 'Language', hi: 'भाषा', hinglish: 'Language', gu: 'ભાષા', mr: 'भाषा', mwr: 'भाषा' },

  // ---------------- Hero ----------------
  'hero.headlinePre': { en: 'The', hi: 'दुकान से कंपनी बनाने का', hinglish: 'Dukan se company banane ka', gu: 'દુકાનમાંથી કંપની બનાવવાનું', mr: 'दुकानातून कंपनी बनवण्याचं', mwr: 'दुकान सूं कंपनी बणावण रो' },
  'hero.headlineAccent': { en: 'automation tool', hi: 'automation tool', hinglish: 'automation tool', gu: 'automation tool', mr: 'automation tool', mwr: 'automation tool' },
  'hero.headlinePost': { en: 'that grows your shop into a company', hi: '', hinglish: '', gu: '', mr: '', mwr: '' },
  'hero.body': {
    en: 'From leads to payment — manage customers, quotations, GST invoices and follow-ups, all in one place. Simple, fast, and in your own language.',
    hi: 'लीड से लेकर पेमेंट तक — कस्टमर, कोटेशन, GST इनवॉइस और फ़ॉलो-अप, सब कुछ एक ही जगह मैनेज करें। सरल, तेज़, और आपकी अपनी भाषा में।',
    hinglish: 'Leads se lekar payment tak — customers, quotations, GST invoice aur follow-ups, sab kuch manage karein. Simple, fast, aur aapki apni bhasha mein.',
    gu: 'લીડથી લઈને પેમેન્ટ સુધી — ગ્રાહકો, ક્વોટેશન, GST ઇન્વોઇસ અને ફોલો-અપ, બધું એક જ જગ્યાએ મેનેજ કરો. સરળ, ઝડપી, અને તમારી પોતાની ભાષામાં.',
    mr: 'लीडपासून पेमेंटपर्यंत — ग्राहक, कोटेशन, GST इनव्हॉइस आणि फॉलो-अप, सर्व काही एकाच ठिकाणी व्यवस्थापित करा. सोपे, जलद, आणि तुमच्या स्वतःच्या भाषेत.',
    mwr: 'लीड सूं लेय\'र पेमेंट तांई — ग्राहक, कोटेशन, GST बिल अर फॉलो-अप, सगळो एकीच जगां सम्भाळो. सरल, तेज, अर थारी आपरी भाषा में.',
  },
  'hero.cta1': { en: 'Start free trial', hi: 'फ़्री ट्रायल शुरू करें', hinglish: 'Free trial shuru karein', gu: 'ફ્રી ટ્રાયલ શરૂ કરો', mr: 'मोफत ट्रायल सुरू करा', mwr: 'फ्री ट्रायल चालू करो' },
  'hero.cta2': { en: 'Watch demo', hi: 'डेमो देखें', hinglish: 'Demo dekhein', gu: 'ડેમો જુઓ', mr: 'डेमो पाहा', mwr: 'डेमो देखो' },
  'hero.trust': { en: 'No credit card required · Setup in 2 minutes', hi: 'क्रेडिट कार्ड की ज़रूरत नहीं · 2 मिनट में सेटअप', hinglish: 'Credit card ki zaroorat nahi · 2 minute mein setup', gu: 'ક્રેડિટ કાર્ડની જરૂર નથી · 2 મિનિટમાં સેટઅપ', mr: 'क्रेडिट कार्डची गरज नाही · 2 मिनिटांत सेटअप', mwr: 'क्रेडिट कार्ड री जरूत कोनी · 2 मिनट में सेटअप' },
  'hero.statLeads': { en: "TODAY'S LEADS", hi: 'आज के लीड', hinglish: 'AAJ KE LEADS', gu: 'આજના લીડ', mr: 'आजचे लीड', mwr: 'आज रा लीड' },
  'hero.statDues': { en: 'PENDING DUES', hi: 'बकाया राशि', hinglish: 'PENDING DUES', gu: 'બાકી રકમ', mr: 'थकबाकी', mwr: 'बाकी रकम' },
  'hero.statOrders': { en: 'ORDERS', hi: 'ऑर्डर', hinglish: 'ORDERS', gu: 'ઓર્ડર', mr: 'ऑर्डर', mwr: 'ऑर्डर' },
  'hero.recentCustomers': { en: 'Recent Customers', hi: 'हाल के ग्राहक', hinglish: 'Recent Customers', gu: 'તાજેતરના ગ્રાહકો', mr: 'अलीकडील ग्राहक', mwr: 'हाल रा ग्राहक' },
  'hero.status': { en: 'Status', hi: 'स्थिति', hinglish: 'Status', gu: 'સ્થિતિ', mr: 'स्थिती', mwr: 'स्थिति' },
  'hero.statusNewLead': { en: 'New Lead', hi: 'नया लीड', hinglish: 'New Lead', gu: 'નવો લીડ', mr: 'नवीन लीड', mwr: 'नयो लीड' },
  'hero.statusPaymentDue': { en: 'Payment Due', hi: 'पेमेंट बाकी', hinglish: 'Payment Due', gu: 'પેમેન્ટ બાકી', mr: 'पेमेंट बाकी', mwr: 'पेमेंट बाकी' },
  'hero.statusClosed': { en: 'Closed', hi: 'पूरा हुआ', hinglish: 'Closed', gu: 'પૂર્ણ', mr: 'पूर्ण', mwr: 'पूरो' },

  // ---------------- Footer ----------------
  'footer.tagline': {
    en: 'The all-in-one business operations platform for modern teams.',
    hi: 'आधुनिक टीमों के लिए ऑल-इन-वन बिज़नेस ऑपरेशन्स प्लेटफ़ॉर्म।',
    hinglish: 'Modern teams ke liye all-in-one business operations platform.',
    gu: 'આધુનિક ટીમો માટે ઓલ-ઇન-વન બિઝનેસ ઓપરેશન્સ પ્લેટફોર્મ.',
    mr: 'आधुनिक टीमसाठी ऑल-इन-वन बिझनेस ऑपरेशन्स प्लॅटफॉर्म.',
    mwr: 'आधुनिक टीमां सारू ऑल-इन-वन बिजनेस ऑपरेशन्स प्लेटफॉर्म.',
  },
  'footer.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।', hinglish: 'All rights reserved.', gu: 'બધા હક અનામત.', mr: 'सर्व हक्क राखीव.', mwr: 'सगळा हक सुरक्षित.' },
  'footer.madeInIndia': { en: 'Made in India', hi: 'भारत में निर्मित', hinglish: 'Made in India', gu: 'ભારતમાં બનાવેલ', mr: 'भारतात बनवलेले', mwr: 'भारत में बणियो' },
  'footer.col.product': { en: 'Product', hi: 'प्रोडक्ट', hinglish: 'Product', gu: 'પ્રોડક્ટ', mr: 'प्रॉडक्ट', mwr: 'प्रोडक्ट' },
  'footer.col.company': { en: 'Company', hi: 'कंपनी', hinglish: 'Company', gu: 'કંપની', mr: 'कंपनी', mwr: 'कंपनी' },
  'footer.col.resources': { en: 'Resources', hi: 'संसाधन', hinglish: 'Resources', gu: 'સંસાધનો', mr: 'संसाधने', mwr: 'संसाधन' },
  'footer.col.legal': { en: 'Legal', hi: 'कानूनी', hinglish: 'Legal', gu: 'કાનૂની', mr: 'कायदेशीर', mwr: 'कानूनी' },
};
