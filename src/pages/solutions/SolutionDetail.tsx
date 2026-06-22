import { useEffect } from 'react';
import { useParams } from 'react-router';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Truck,
  Building2,
  Factory,
  Settings2,
  UtensilsCrossed,
  Hotel,
  Stethoscope,
  GraduationCap,
  Printer,
  Car,
  HeartPulse,
  Zap,
  Target,
  ShieldCheck
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'notFound': {
    en: 'Solution not found.',
    hi: 'समाधान नहीं मिला।',
    hinglish: 'Solution nahi mila.',
    gu: 'સોલ્યુશન મળ્યું નથી.',
    mr: 'सोल्युशन सापडले नाही.',
    mwr: 'समाधान कोनी मिल्यो।'
  },
  'badge.suffix': {
    en: 'Industry Specialist',
    hi: 'इंडस्ट्री स्पेशलिस्ट',
    hinglish: 'Industry Specialist',
    gu: 'ઇન્ડસ્ટ્રી સ્પેશિયાલિસ્ટ',
    mr: 'इंडस्ट्री स्पेशलिस्ट',
    mwr: 'इंडस्ट्री स्पेशलिस्ट'
  },
  'hero.h1.pre': {
    en: 'Dominating the',
    hi: 'दबदबा बनाएं',
    hinglish: 'Dominate karo',
    gu: 'દબદબો જમાવો',
    mr: 'वर्चस्व मिळवा',
    mwr: 'दबदबो बणावो'
  },
  'hero.h1.market': {
    en: 'Market.',
    hi: 'मार्केट में।',
    hinglish: 'Market mein.',
    gu: 'માર્કેટમાં.',
    mr: 'मार्केटमध्ये.',
    mwr: 'मार्केट में।'
  },
  'hero.desc.suffix': {
    en: 'Built by experts, for experts.',
    hi: 'विशेषज्ञों द्वारा, विशेषज्ञों के लिए बनाया गया।',
    hinglish: 'Experts ne banaya, experts ke liye.',
    gu: 'નિષ્ણાતો દ્વારા, નિષ્ણાતો માટે બનાવેલ.',
    mr: 'तज्ज्ञांनी, तज्ज्ञांसाठी बनवले.',
    mwr: 'जाणकारां ने, जाणकारां वास्ते बणायो।'
  },
  'hero.bookDemo.pre': {
    en: 'Book',
    hi: 'बुक करें',
    hinglish: 'Book karein',
    gu: 'બુક કરો',
    mr: 'बुक करा',
    mwr: 'बुक करो'
  },
  'hero.bookDemo.post': {
    en: 'Demo',
    hi: 'डेमो',
    hinglish: 'Demo',
    gu: 'ડેમો',
    mr: 'डेमो',
    mwr: 'डेमो'
  },
  'benefits.h2.pre': {
    en: 'Built for your',
    hi: 'आपकी सफलता के लिए',
    hinglish: 'Aapki success ke liye',
    gu: 'તમારી સફળતા માટે',
    mr: 'तुमच्या यशासाठी',
    mwr: 'थारी कामयाबी वास्ते'
  },
  'benefits.h2.accent': {
    en: 'Success.',
    hi: 'बनाया गया।',
    hinglish: 'banaya gaya.',
    gu: 'બનાવેલ.',
    mr: 'बनवले.',
    mwr: 'बणायो।'
  },
  'benefits.subPre': {
    en: 'Proprietary features designed to eliminate friction in',
    hi: 'खास फ़ीचर्स जो इसमें रुकावटें खत्म करने के लिए डिज़ाइन किए गए हैं',
    hinglish: 'Khaas features jo friction khatam karne ke liye design kiye gaye hain',
    gu: 'ખાસ ફીચર્સ જે ઘર્ષણ દૂર કરવા માટે ડિઝાઇન કરેલ છે',
    mr: 'खास फीचर्स जे अडथळे दूर करण्यासाठी डिझाइन केले आहेत',
    mwr: 'खास फीचर्स जो रुकावटां मिटावण वास्ते बणाया गया'
  },
  'benefits.subPost': {
    en: 'operations.',
    hi: 'के कामकाज में।',
    hinglish: 'operations mein.',
    gu: 'ઓપરેશન્સમાં.',
    mr: 'ऑपरेशन्समध्ये.',
    mwr: 'रा कामकाज में।'
  },
  'benefits.cardDescPre': {
    en: 'Automated logic and reporting tailored specifically for',
    hi: 'ऑटोमेटेड लॉजिक और रिपोर्टिंग, खास तौर पर इसके लिए तैयार',
    hinglish: 'Automated logic aur reporting, khaas taur par iske liye banaya',
    gu: 'ઓટોમેટેડ લોજિક અને રિપોર્ટિંગ, ખાસ આના માટે તૈયાર',
    mr: 'ऑटोमेटेड लॉजिक आणि रिपोर्टिंग, खास यासाठी तयार',
    mwr: 'ऑटोमेटेड लॉजिक अर रिपोर्टिंग, खास आ वास्ते बणायो'
  },
  'benefits.cardDescPost': {
    en: 'workflows.',
    hi: 'वर्कफ़्लो के लिए।',
    hinglish: 'workflows ke liye.',
    gu: 'વર્કફ્લો માટે.',
    mr: 'वर्कफ्लोसाठी.',
    mwr: 'वर्कफ्लो वास्ते।'
  },
  'core.h2': {
    en: 'Core Capabilities.',
    hi: 'मुख्य क्षमताएं।',
    hinglish: 'Core Capabilities.',
    gu: 'મુખ્ય ક્ષમતાઓ.',
    mr: 'मुख्य क्षमता.',
    mwr: 'मुख्य काबिलियत।'
  },
  'core.subPre': {
    en: 'Discover the high-performance tools that make',
    hi: 'उन हाई-परफ़ॉर्मेंस टूल्स को जानें जो',
    hinglish: 'Un high-performance tools ko jaanein jo',
    gu: 'એ હાઈ-પરફોર્મન્સ ટૂલ્સ જાણો જે',
    mr: 'त्या हाय-परफॉर्मन्स टूल्सना जाणून घ्या जे',
    mwr: 'उण हाई-परफॉर्मेंस टूल्स ने जाणो जो'
  },
  'core.subPost': {
    en: 'management seamless with Mera Dhanda.',
    hi: 'मैनेजमेंट को Mera Dhanda के साथ आसान बनाते हैं।',
    hinglish: 'management ko Mera Dhanda ke saath aasaan banate hain.',
    gu: 'મેનેજમેન્ટને Mera Dhanda સાથે સરળ બનાવે છે.',
    mr: 'मॅनेजमेंट Mera Dhanda सोबत सोपे बनवतात.',
    mwr: 'मैनेजमेंट ने Mera Dhanda रे साथै सोरो बणावै।'
  },
  'cap.realtime.title': {
    en: 'Real-time Intelligence',
    hi: 'रियल-टाइम इंटेलिजेंस',
    hinglish: 'Real-time Intelligence',
    gu: 'રિયલ-ટાઈમ ઇન્ટેલિજન્સ',
    mr: 'रिअल-टाइम इंटेलिजन्स',
    mwr: 'रियल-टाइम इंटेलिजेंस'
  },
  'cap.realtime.front': {
    en: 'Track every transaction and stock movement as it happens.',
    hi: 'हर ट्रांज़ैक्शन और स्टॉक मूवमेंट को होते ही ट्रैक करें।',
    hinglish: 'Har transaction aur stock movement ko hote hi track karo.',
    gu: 'દરેક ટ્રાન્ઝેક્શન અને સ્ટોક મૂવમેન્ટને થાય તે જ સમયે ટ્રૅક કરો.',
    mr: 'प्रत्येक ट्रान्झॅक्शन आणि स्टॉक मूव्हमेंट होताच ट्रॅक करा.',
    mwr: 'हर ट्रांज़ैक्शन अर स्टॉक मूवमेंट ने होवतां ही ट्रैक करो।'
  },
  'cap.realtime.back': {
    en: 'Our edge-computing technology ensures your data is always up-to-date across all devices and locations, with zero latency.',
    hi: 'हमारी edge-computing टेक्नोलॉजी यह पक्का करती है कि आपका डेटा सभी डिवाइस और लोकेशन पर हमेशा अप-टू-डेट रहे, ज़ीरो लेटेंसी के साथ।',
    hinglish: 'Hamari edge-computing technology ensure karti hai ki aapka data sabhi devices aur locations par hamesha up-to-date rahe, zero latency ke saath.',
    gu: 'અમારી edge-computing ટેક્નોલોજી ખાતરી કરે છે કે તમારો ડેટા બધા ડિવાઇસ અને લોકેશન પર હંમેશા અપ-ટુ-ડેટ રહે, ઝીરો લેટન્સી સાથે.',
    mr: 'आमची edge-computing टेक्नॉलॉजी खात्री देते की तुमचा डेटा सर्व डिव्हाइस आणि लोकेशनवर नेहमी अप-टू-डेट राहील, झिरो लेटन्सीसह.',
    mwr: 'म्हारी edge-computing टेक्नोलॉजी पक्को करै के थारो डेटा सगळा डिवाइस अर लोकेशन पर हमेसां अप-टू-डेट रैवै, ज़ीरो लेटेंसी रे साथै।'
  },
  'cap.market.title': {
    en: 'Market Dominance',
    hi: 'मार्केट में दबदबा',
    hinglish: 'Market Dominance',
    gu: 'માર્કેટ ડોમિનન્સ',
    mr: 'मार्केट डॉमिनन्स',
    mwr: 'मार्केट में दबदबो'
  },
  'cap.market.front': {
    en: 'Reduce operational costs by 40% with intelligent automation.',
    hi: 'इंटेलिजेंट ऑटोमेशन से ऑपरेशनल खर्च 40% तक कम करें।',
    hinglish: 'Intelligent automation se operational costs 40% tak kam karo.',
    gu: 'ઇન્ટેલિજન્ટ ઓટોમેશનથી ઓપરેશનલ ખર્ચ 40% સુધી ઘટાડો.',
    mr: 'इंटेलिजंट ऑटोमेशनने ऑपरेशनल खर्च 40% पर्यंत कमी करा.',
    mwr: 'इंटेलिजेंट ऑटोमेशन सूं ऑपरेशनल खर्चो 40% तांई घटावो।'
  },
  'cap.market.backPre': {
    en: 'Automate tax filings, bulk invoicing, and replenishment logic specifically for the',
    hi: 'टैक्स फाइलिंग, बल्क इनवॉइसिंग और रिप्लेनिशमेंट लॉजिक को खास तौर पर इसके लिए ऑटोमेट करें',
    hinglish: 'Tax filings, bulk invoicing aur replenishment logic ko khaas taur par iske liye automate karo',
    gu: 'ટેક્સ ફાઇલિંગ, બલ્ક ઇન્વોઇસિંગ અને રિપ્લેનિશમેન્ટ લોજિક ખાસ આના માટે ઓટોમેટ કરો',
    mr: 'टॅक्स फायलिंग, बल्क इनव्हॉइसिंग आणि रिप्लेनिशमेंट लॉजिक खास यासाठी ऑटोमेट करा',
    mwr: 'टैक्स फाइलिंग, बल्क इनवॉइसिंग अर रिप्लेनिशमेंट लॉजिक ने खास आ वास्ते ऑटोमेट करो'
  },
  'cap.market.backPost': {
    en: 'sector.',
    hi: 'सेक्टर के लिए।',
    hinglish: 'sector ke liye.',
    gu: 'સેક્ટર માટે.',
    mr: 'सेक्टरसाठी.',
    mwr: 'सेक्टर वास्ते।'
  },
  'cap.security.title': {
    en: 'Bank-Grade Security',
    hi: 'बैंक-ग्रेड सिक्योरिटी',
    hinglish: 'Bank-Grade Security',
    gu: 'બેંક-ગ્રેડ સિક્યોરિટી',
    mr: 'बँक-ग्रेड सिक्युरिटी',
    mwr: 'बैंक-ग्रेड सिक्योरिटी'
  },
  'cap.security.front': {
    en: 'Enterprise-level encryption for every business record.',
    hi: 'हर बिज़नेस रिकॉर्ड के लिए एंटरप्राइज़-लेवल एन्क्रिप्शन।',
    hinglish: 'Har business record ke liye enterprise-level encryption.',
    gu: 'દરેક બિઝનેસ રેકોર્ડ માટે એન્ટરપ્રાઇઝ-લેવલ એન્ક્રિપ્શન.',
    mr: 'प्रत्येक बिझनेस रेकॉर्डसाठी एंटरप्राइझ-लेव्हल एन्क्रिप्शन.',
    mwr: 'हर बिज़नेस रिकॉर्ड वास्ते एंटरप्राइज़-लेवल एन्क्रिप्शन।'
  },
  'cap.security.back': {
    en: 'Your business data is protected by AES-256 encryption and backed up across three geographic regions automatically.',
    hi: 'आपका बिज़नेस डेटा AES-256 एन्क्रिप्शन से सुरक्षित है और अपने आप तीन भौगोलिक क्षेत्रों में बैकअप होता है।',
    hinglish: 'Aapka business data AES-256 encryption se protected hai aur automatically teen geographic regions mein backup hota hai.',
    gu: 'તમારો બિઝનેસ ડેટા AES-256 એન્ક્રિપ્શનથી સુરક્ષિત છે અને આપમેળે ત્રણ ભૌગોલિક પ્રદેશોમાં બેકઅપ થાય છે.',
    mr: 'तुमचा बिझनेस डेटा AES-256 एन्क्रिप्शनने सुरक्षित आहे आणि आपोआप तीन भौगोलिक प्रदेशांमध्ये बॅकअप होतो.',
    mwr: 'थारो बिज़नेस डेटा AES-256 एन्क्रिप्शन सूं सुरक्षित है अर खुद ब खुद तीन भौगोलिक इलाकां में बैकअप होवै।'
  },
  'process.tag': {
    en: 'The Methodology',
    hi: 'हमारा तरीका',
    hinglish: 'Hamara Methodology',
    gu: 'અમારી પદ્ધતિ',
    mr: 'आमची पद्धत',
    mwr: 'म्हारो तरीको'
  },
  'process.h2.pre': {
    en: 'How we scale',
    hi: 'हम कैसे बढ़ाते हैं',
    hinglish: 'Hum kaise scale karte hain',
    gu: 'અમે કેવી રીતે વધારીએ છીએ',
    mr: 'आम्ही कसे वाढवतो',
    mwr: 'हम किस तरै बढावां'
  },
  'process.h2.empire': {
    en: 'Empire.',
    hi: 'साम्राज्य।',
    hinglish: 'Empire.',
    gu: 'સામ્રાજ્ય.',
    mr: 'साम्राज्य.',
    mwr: 'साम्राज्य।'
  },
  'process.h2.your': {
    en: 'Your',
    hi: 'आपका',
    hinglish: 'Aapka',
    gu: 'તમારું',
    mr: 'तुमचे',
    mwr: 'थारो'
  },
  'step.audit.label': {
    en: 'Audit',
    hi: 'ऑडिट',
    hinglish: 'Audit',
    gu: 'ઓડિટ',
    mr: 'ऑडिट',
    mwr: 'ऑडिट'
  },
  'step.audit.desc': {
    en: 'We analyze your current bottlenecks and data leaks.',
    hi: 'हम आपकी मौजूदा रुकावटों और डेटा लीक का विश्लेषण करते हैं।',
    hinglish: 'Hum aapke current bottlenecks aur data leaks ko analyze karte hain.',
    gu: 'અમે તમારા હાલના અવરોધો અને ડેટા લીકનું વિશ્લેષણ કરીએ છીએ.',
    mr: 'आम्ही तुमचे सध्याचे अडथळे आणि डेटा लीक यांचे विश्लेषण करतो.',
    mwr: 'हम थारी अबारी रुकावटां अर डेटा लीक नो विश्लेषण करां।'
  },
  'step.sync.label': {
    en: 'Sync',
    hi: 'सिंक',
    hinglish: 'Sync',
    gu: 'સિંક',
    mr: 'सिंक',
    mwr: 'सिंक'
  },
  'step.sync.desc': {
    en: 'One-click migration of your existing data to Mera Dhanda.',
    hi: 'आपके मौजूदा डेटा का वन-क्लिक माइग्रेशन Mera Dhanda पर।',
    hinglish: 'Aapke existing data ka one-click migration Mera Dhanda par.',
    gu: 'તમારા હાલના ડેટાનું વન-ક્લિક માઇગ્રેશન Mera Dhanda પર.',
    mr: 'तुमच्या विद्यमान डेटाचे वन-क्लिक माइग्रेशन Mera Dhanda वर.',
    mwr: 'थारे अबारी डेटा रो वन-क्लिक माइग्रेशन Mera Dhanda पर।'
  },
  'step.deploy.label': {
    en: 'Deploy',
    hi: 'डिप्लॉय',
    hinglish: 'Deploy',
    gu: 'ડિપ્લોય',
    mr: 'डिप्लॉय',
    mwr: 'डिप्लॉय'
  },
  'step.deploy.desc': {
    en: 'Automate your specific workflows and staff roles.',
    hi: 'अपने खास वर्कफ़्लो और स्टाफ रोल्स को ऑटोमेट करें।',
    hinglish: 'Apne specific workflows aur staff roles ko automate karo.',
    gu: 'તમારા ખાસ વર્કફ્લો અને સ્ટાફ રોલ્સ ઓટોમેટ કરો.',
    mr: 'तुमचे विशिष्ट वर्कफ्लो आणि स्टाफ रोल्स ऑटोमेट करा.',
    mwr: 'थारा खास वर्कफ्लो अर स्टाफ रोल्स ने ऑटोमेट करो।'
  },
  'step.scale.label': {
    en: 'Scale',
    hi: 'स्केल',
    hinglish: 'Scale',
    gu: 'સ્કેલ',
    mr: 'स्केल',
    mwr: 'स्केल'
  },
  'step.scale.desc': {
    en: 'Real-time insights drive your daily growth decisions.',
    hi: 'रियल-टाइम इनसाइट्स आपके रोज़ के ग्रोथ फ़ैसलों को आगे बढ़ाते हैं।',
    hinglish: 'Real-time insights aapke daily growth decisions ko aage badhate hain.',
    gu: 'રિયલ-ટાઈમ ઇનસાઇટ્સ તમારા રોજિંદા ગ્રોથ નિર્ણયોને આગળ વધારે છે.',
    mr: 'रिअल-टाइम इनसाइट्स तुमचे रोजचे ग्रोथ निर्णय पुढे नेतात.',
    mwr: 'रियल-टाइम इनसाइट्स थारा रोजीना ग्रोथ फैसलां ने आगै बढावै।'
  },
  // Industry titles
  'sol.distribution.title': {
    en: 'Distribution',
    hi: 'डिस्ट्रिब्यूशन',
    hinglish: 'Distribution',
    gu: 'ડિસ્ટ્રિબ્યુશન',
    mr: 'डिस्ट्रिब्यूशन',
    mwr: 'डिस्ट्रिब्यूशन'
  },
  'sol.wholesale.title': {
    en: 'Wholesale',
    hi: 'होलसेल',
    hinglish: 'Wholesale',
    gu: 'હોલસેલ',
    mr: 'होलसेल',
    mwr: 'होलसेल'
  },
  'sol.manufacturing.title': {
    en: 'Manufacturing',
    hi: 'मैन्युफैक्चरिंग',
    hinglish: 'Manufacturing',
    gu: 'મેન્યુફેક્ચરિંગ',
    mr: 'मॅन्युफॅक्चरिंग',
    mwr: 'मैन्युफैक्चरिंग'
  },
  'sol.service-based.title': {
    en: 'Service-Based',
    hi: 'सर्विस-बेस्ड',
    hinglish: 'Service-Based',
    gu: 'સર્વિસ-બેઝ્ડ',
    mr: 'सर्व्हिस-बेस्ड',
    mwr: 'सर्विस-बेस्ड'
  },
  'sol.restaurants.title': {
    en: 'Restaurants',
    hi: 'रेस्टोरेंट',
    hinglish: 'Restaurants',
    gu: 'રેસ્ટોરન્ટ',
    mr: 'रेस्टॉरंट',
    mwr: 'रेस्टोरेंट'
  },
  'sol.hotels.title': {
    en: 'Hotels',
    hi: 'होटल',
    hinglish: 'Hotels',
    gu: 'હોટેલ',
    mr: 'हॉटेल',
    mwr: 'होटल'
  },
  'sol.pharmacies.title': {
    en: 'Pharmacies',
    hi: 'फार्मेसी',
    hinglish: 'Pharmacies',
    gu: 'ફાર્મસી',
    mr: 'फार्मसी',
    mwr: 'फार्मेसी'
  },
  'sol.real-estate.title': {
    en: 'Real Estate',
    hi: 'रियल एस्टेट',
    hinglish: 'Real Estate',
    gu: 'રિયલ એસ્ટેટ',
    mr: 'रिअल इस्टेट',
    mwr: 'रियल एस्टेट'
  },
  'sol.coaching.title': {
    en: 'Coaching Classes',
    hi: 'कोचिंग क्लासेस',
    hinglish: 'Coaching Classes',
    gu: 'કોચિંગ ક્લાસિસ',
    mr: 'कोचिंग क्लासेस',
    mwr: 'कोचिंग क्लासेस'
  },
  'sol.printing.title': {
    en: 'Printing Services',
    hi: 'प्रिंटिंग सर्विसेज़',
    hinglish: 'Printing Services',
    gu: 'પ્રિન્ટિંગ સર્વિસિસ',
    mr: 'प्रिंटिंग सर्व्हिसेस',
    mwr: 'प्रिंटिंग सर्विसेज़'
  },
  'sol.hospitals.title': {
    en: 'Hospitals & Clinics',
    hi: 'हॉस्पिटल और क्लीनिक',
    hinglish: 'Hospitals & Clinics',
    gu: 'હોસ્પિટલ અને ક્લિનિક',
    mr: 'हॉस्पिटल आणि क्लिनिक',
    mwr: 'हॉस्पिटल अर क्लीनिक'
  },
  'sol.automobiles.title': {
    en: 'Automobile Dealers',
    hi: 'ऑटोमोबाइल डीलर',
    hinglish: 'Automobile Dealers',
    gu: 'ઓટોમોબાઇલ ડીલર્સ',
    mr: 'ऑटोमोबाइल डीलर्स',
    mwr: 'ऑटोमोबाइल डीलर'
  },
  // Industry descriptions
  'sol.distribution.desc': {
    en: 'Streamline your supply chain with advanced order management, secondary sales tracking, and automated stock replenishment.',
    hi: 'एडवांस्ड ऑर्डर मैनेजमेंट, सेकंडरी सेल्स ट्रैकिंग और ऑटोमेटेड स्टॉक रिप्लेनिशमेंट के साथ अपनी सप्लाई चेन को आसान बनाएं।',
    hinglish: 'Advanced order management, secondary sales tracking aur automated stock replenishment ke saath apni supply chain ko streamline karo.',
    gu: 'એડવાન્સ્ડ ઓર્ડર મેનેજમેન્ટ, સેકન્ડરી સેલ્સ ટ્રૅકિંગ અને ઓટોમેટેડ સ્ટોક રિપ્લેનિશમેન્ટ સાથે તમારી સપ્લાય ચેઇન સરળ બનાવો.',
    mr: 'अॅडव्हान्स्ड ऑर्डर मॅनेजमेंट, सेकंडरी सेल्स ट्रॅकिंग आणि ऑटोमेटेड स्टॉक रिप्लेनिशमेंटसह तुमची सप्लाय चेन सुलभ करा.',
    mwr: 'एडवांस्ड ऑर्डर मैनेजमेंट, सेकंडरी सेल्स ट्रैकिंग अर ऑटोमेटेड स्टॉक रिप्लेनिशमेंट रे साथै थारी सप्लाई चेन ने सोरी बणावो।'
  },
  'sol.wholesale.desc': {
    en: 'Manage high-volume transactions and complex inventory across multiple godowns with ease and precision.',
    hi: 'कई गोदामों में हाई-वॉल्यूम ट्रांज़ैक्शन और जटिल इन्वेंटरी को आसानी और सटीकता से मैनेज करें।',
    hinglish: 'Kai godowns mein high-volume transactions aur complex inventory ko aasaani aur precision se manage karo.',
    gu: 'અનેક ગોડાઉનમાં હાઈ-વોલ્યુમ ટ્રાન્ઝેક્શન અને જટિલ ઇન્વેન્ટરી સરળતા અને ચોકસાઈથી મેનેજ કરો.',
    mr: 'अनेक गोदामांमध्ये हाय-व्हॉल्यूम ट्रान्झॅक्शन आणि जटिल इन्व्हेंटरी सहजपणे आणि अचूकतेने मॅनेज करा.',
    mwr: 'घणा गोदामां में हाई-वॉल्यूम ट्रांज़ैक्शन अर पेचीदा इन्वेंटरी ने सोरई अर सटीकता सूं मैनेज करो।'
  },
  'sol.manufacturing.desc': {
    en: 'Optimize your production floor with detailed BOM, job-card tracking, and material requirement planning (MRP).',
    hi: 'डिटेल्ड BOM, जॉब-कार्ड ट्रैकिंग और मटेरियल रिक्वायरमेंट प्लानिंग (MRP) के साथ अपने प्रोडक्शन फ्लोर को ऑप्टिमाइज़ करें।',
    hinglish: 'Detailed BOM, job-card tracking aur material requirement planning (MRP) ke saath apne production floor ko optimize karo.',
    gu: 'વિગતવાર BOM, જોબ-કાર્ડ ટ્રૅકિંગ અને મટિરિયલ રિક્વાયરમેન્ટ પ્લાનિંગ (MRP) સાથે તમારો પ્રોડક્શન ફ્લોર ઓપ્ટિમાઇઝ કરો.',
    mr: 'तपशीलवार BOM, जॉब-कार्ड ट्रॅकिंग आणि मटेरियल रिक्वायरमेंट प्लॅनिंग (MRP) सह तुमचा प्रोडक्शन फ्लोर ऑप्टिमाइझ करा.',
    mwr: 'विगतवार BOM, जॉब-कार्ड ट्रैकिंग अर मटेरियल रिक्वायरमेंट प्लानिंग (MRP) रे साथै थारो प्रोडक्शन फ्लोर ऑप्टिमाइज़ करो।'
  },
  'sol.service-based.desc': {
    en: 'Manage your professional services with smart scheduling, task management, and automated subscription billing.',
    hi: 'स्मार्ट शेड्यूलिंग, टास्क मैनेजमेंट और ऑटोमेटेड सब्सक्रिप्शन बिलिंग के साथ अपनी प्रोफेशनल सर्विसेज़ को मैनेज करें।',
    hinglish: 'Smart scheduling, task management aur automated subscription billing ke saath apni professional services ko manage karo.',
    gu: 'સ્માર્ટ શેડ્યૂલિંગ, ટાસ્ક મેનેજમેન્ટ અને ઓટોમેટેડ સબ્સ્ક્રિપ્શન બિલિંગ સાથે તમારી પ્રોફેશનલ સર્વિસિસ મેનેજ કરો.',
    mr: 'स्मार्ट शेड्युलिंग, टास्क मॅनेजमेंट आणि ऑटोमेटेड सबस्क्रिप्शन बिलिंगसह तुमच्या प्रोफेशनल सर्व्हिसेस मॅनेज करा.',
    mwr: 'स्मार्ट शेड्यूलिंग, टास्क मैनेजमेंट अर ऑटोमेटेड सब्सक्रिप्शन बिलिंग रे साथै थारी प्रोफेशनल सर्विसेज़ ने मैनेज करो।'
  },
  'sol.restaurants.desc': {
    en: 'Delight your guests with faster KOT, table management, and seamless online order integrations.',
    hi: 'तेज़ KOT, टेबल मैनेजमेंट और सहज ऑनलाइन ऑर्डर इंटीग्रेशन के साथ अपने मेहमानों को खुश करें।',
    hinglish: 'Fast KOT, table management aur seamless online order integrations ke saath apne guests ko khush karo.',
    gu: 'ઝડપી KOT, ટેબલ મેનેજમેન્ટ અને સીમલેસ ઓનલાઇન ઓર્ડર ઇન્ટિગ્રેશન સાથે તમારા મહેમાનોને ખુશ કરો.',
    mr: 'जलद KOT, टेबल मॅनेजमेंट आणि सीमलेस ऑनलाइन ऑर्डर इंटिग्रेशनसह तुमच्या पाहुण्यांना आनंदित करा.',
    mwr: 'तेज़ KOT, टेबल मैनेजमेंट अर सोरा ऑनलाइन ऑर्डर इंटीग्रेशन रे साथै थारा मेहमानां ने खुस करो।'
  },
  'sol.hotels.desc': {
    en: 'Elevate guest experiences with integrated PMS, room service management, and automated check-in/out.',
    hi: 'इंटीग्रेटेड PMS, रूम सर्विस मैनेजमेंट और ऑटोमेटेड चेक-इन/आउट के साथ गेस्ट एक्सपीरियंस को बेहतर बनाएं।',
    hinglish: 'Integrated PMS, room service management aur automated check-in/out ke saath guest experience ko behtar banao.',
    gu: 'ઇન્ટિગ્રેટેડ PMS, રૂમ સર્વિસ મેનેજમેન્ટ અને ઓટોમેટેડ ચેક-ઇન/આઉટ સાથે ગેસ્ટ અનુભવ બહેતર બનાવો.',
    mr: 'इंटिग्रेटेड PMS, रूम सर्व्हिस मॅनेजमेंट आणि ऑटोमेटेड चेक-इन/आउटसह गेस्ट अनुभव उंचावा.',
    mwr: 'इंटीग्रेटेड PMS, रूम सर्विस मैनेजमेंट अर ऑटोमेटेड चेक-इन/आउट रे साथै गेस्ट एक्सपीरियंस ने ओर बढिया बणावो।'
  },
  'sol.pharmacies.desc': {
    en: 'Ensure safety and compliance with drug-specific inventory, expiry alerts, and integrated prescription billing.',
    hi: 'ड्रग-स्पेसिफिक इन्वेंटरी, एक्सपायरी अलर्ट और इंटीग्रेटेड प्रिस्क्रिप्शन बिलिंग के साथ सुरक्षा और कंप्लायंस पक्का करें।',
    hinglish: 'Drug-specific inventory, expiry alerts aur integrated prescription billing ke saath safety aur compliance ensure karo.',
    gu: 'ડ્રગ-સ્પેસિફિક ઇન્વેન્ટરી, એક્સપાયરી એલર્ટ અને ઇન્ટિગ્રેટેડ પ્રિસ્ક્રિપ્શન બિલિંગ સાથે સલામતી અને કમ્પ્લાયન્સ સુનિશ્ચિત કરો.',
    mr: 'ड्रग-स्पेसिफिक इन्व्हेंटरी, एक्सपायरी अलर्ट आणि इंटिग्रेटेड प्रिस्क्रिप्शन बिलिंगसह सुरक्षा आणि कम्प्लायन्स सुनिश्चित करा.',
    mwr: 'ड्रग-स्पेसिफिक इन्वेंटरी, एक्सपायरी अलर्ट अर इंटीग्रेटेड प्रिस्क्रिप्शन बिलिंग रे साथै सुरक्षा अर कंप्लायंस पक्को करो।'
  },
  'sol.real-estate.desc': {
    en: 'Manage property listings, leads, and payment schedules with a powerful CRM built for real estate professionals.',
    hi: 'रियल एस्टेट प्रोफेशनल्स के लिए बने एक पावरफुल CRM के साथ प्रॉपर्टी लिस्टिंग, लीड्स और पेमेंट शेड्यूल मैनेज करें।',
    hinglish: 'Real estate professionals ke liye bane powerful CRM ke saath property listings, leads aur payment schedules manage karo.',
    gu: 'રિયલ એસ્ટેટ પ્રોફેશનલ્સ માટે બનેલા પાવરફુલ CRM સાથે પ્રોપર્ટી લિસ્ટિંગ, લીડ્સ અને પેમેન્ટ શેડ્યૂલ મેનેજ કરો.',
    mr: 'रिअल इस्टेट प्रोफेशनल्ससाठी बनवलेल्या पॉवरफुल CRM सह प्रॉपर्टी लिस्टिंग, लीड्स आणि पेमेंट शेड्यूल मॅनेज करा.',
    mwr: 'रियल एस्टेट प्रोफेशनल्स वास्ते बणायोड़ो पावरफुल CRM रे साथै प्रॉपर्टी लिस्टिंग, लीड्स अर पेमेंट शेड्यूल मैनेज करो।'
  },
  'sol.coaching.desc': {
    en: 'Digitize your institute with student management, fee tracking, and automated attendance notifications.',
    hi: 'स्टूडेंट मैनेजमेंट, फीस ट्रैकिंग और ऑटोमेटेड अटेंडेंस नोटिफिकेशन के साथ अपने इंस्टीट्यूट को डिजिटल बनाएं।',
    hinglish: 'Student management, fee tracking aur automated attendance notifications ke saath apne institute ko digitize karo.',
    gu: 'સ્ટુડન્ટ મેનેજમેન્ટ, ફી ટ્રૅકિંગ અને ઓટોમેટેડ એટેન્ડન્સ નોટિફિકેશન સાથે તમારી ઇન્સ્ટિટ્યૂટ ડિજિટલ બનાવો.',
    mr: 'स्टुडंट मॅनेजमेंट, फी ट्रॅकिंग आणि ऑटोमेटेड अटेंडन्स नोटिफिकेशनसह तुमची संस्था डिजिटल करा.',
    mwr: 'स्टूडेंट मैनेजमेंट, फीस ट्रैकिंग अर ऑटोमेटेड अटेंडेंस नोटिफिकेशन रे साथै थारो इंस्टीट्यूट ने डिजिटल बणावो।'
  },
  'sol.printing.desc': {
    en: 'Track custom orders, manage paper stock, and optimize job scheduling for your printing business.',
    hi: 'अपने प्रिंटिंग बिज़नेस के लिए कस्टम ऑर्डर ट्रैक करें, पेपर स्टॉक मैनेज करें और जॉब शेड्यूलिंग ऑप्टिमाइज़ करें।',
    hinglish: 'Apne printing business ke liye custom orders track karo, paper stock manage karo aur job scheduling optimize karo.',
    gu: 'તમારા પ્રિન્ટિંગ બિઝનેસ માટે કસ્ટમ ઓર્ડર ટ્રૅક કરો, પેપર સ્ટોક મેનેજ કરો અને જોબ શેડ્યૂલિંગ ઓપ્ટિમાઇઝ કરો.',
    mr: 'तुमच्या प्रिंटिंग बिझनेससाठी कस्टम ऑर्डर ट्रॅक करा, पेपर स्टॉक मॅनेज करा आणि जॉब शेड्युलिंग ऑप्टिमाइझ करा.',
    mwr: 'थारे प्रिंटिंग बिज़नेस वास्ते कस्टम ऑर्डर ट्रैक करो, पेपर स्टॉक मैनेज करो अर जॉब शेड्यूलिंग ऑप्टिमाइज़ करो।'
  },
  'sol.hospitals.desc': {
    en: 'Focus on patient care with integrated OPD/IPD management, billing, and electronic health records.',
    hi: 'इंटीग्रेटेड OPD/IPD मैनेजमेंट, बिलिंग और इलेक्ट्रॉनिक हेल्थ रिकॉर्ड के साथ मरीज़ों की देखभाल पर ध्यान दें।',
    hinglish: 'Integrated OPD/IPD management, billing aur electronic health records ke saath patient care par focus karo.',
    gu: 'ઇન્ટિગ્રેટેડ OPD/IPD મેનેજમેન્ટ, બિલિંગ અને ઇલેક્ટ્રોનિક હેલ્થ રેકોર્ડ સાથે દર્દીની સંભાળ પર ધ્યાન આપો.',
    mr: 'इंटिग्रेटेड OPD/IPD मॅनेजमेंट, बिलिंग आणि इलेक्ट्रॉनिक हेल्थ रेकॉर्डसह रुग्णसेवेवर लक्ष केंद्रित करा.',
    mwr: 'इंटीग्रेटेड OPD/IPD मैनेजमेंट, बिलिंग अर इलेक्ट्रॉनिक हेल्थ रिकॉर्ड रे साथै मरीजां री देखभाळ पर ध्यान दो।'
  },
  'sol.automobiles.desc': {
    en: 'Accelerate your dealership with vehicle inventory, service booking, and automated spare parts management.',
    hi: 'व्हीकल इन्वेंटरी, सर्विस बुकिंग और ऑटोमेटेड स्पेयर पार्ट्स मैनेजमेंट के साथ अपनी डीलरशिप को तेज़ी से बढ़ाएं।',
    hinglish: 'Vehicle inventory, service booking aur automated spare parts management ke saath apni dealership ko accelerate karo.',
    gu: 'વ્હીકલ ઇન્વેન્ટરી, સર્વિસ બુકિંગ અને ઓટોમેટેડ સ્પેર પાર્ટ્સ મેનેજમેન્ટ સાથે તમારી ડીલરશિપ ઝડપી બનાવો.',
    mr: 'व्हेईकल इन्व्हेंटरी, सर्व्हिस बुकिंग आणि ऑटोमेटेड स्पेअर पार्ट्स मॅनेजमेंटसह तुमची डीलरशिप वेगवान करा.',
    mwr: 'व्हीकल इन्वेंटरी, सर्विस बुकिंग अर ऑटोमेटेड स्पेयर पार्ट्स मैनेजमेंट रे साथै थारी डीलरशिप ने तेज़ी सूं बढावो।'
  },
  // Benefits
  'b.routeOpt': { en: 'Route Optimization', hi: 'रूट ऑप्टिमाइज़ेशन', hinglish: 'Route Optimization', gu: 'રૂટ ઓપ્ટિમાઇઝેશન', mr: 'रूट ऑप्टिमायझेशन', mwr: 'रूट ऑप्टिमाइज़ेशन' },
  'b.liveStock': { en: 'Live Stock Tracking', hi: 'लाइव स्टॉक ट्रैकिंग', hinglish: 'Live Stock Tracking', gu: 'લાઈવ સ્ટોક ટ્રૅકિંગ', mr: 'लाइव्ह स्टॉक ट्रॅकिंग', mwr: 'लाइव स्टॉक ट्रैकिंग' },
  'b.dealerMgmt': { en: 'Dealer Management', hi: 'डीलर मैनेजमेंट', hinglish: 'Dealer Management', gu: 'ડીલર મેનેજમેન્ટ', mr: 'डीलर मॅनेजमेंट', mwr: 'डीलर मैनेजमेंट' },
  'b.bulkInvoicing': { en: 'Bulk Invoicing', hi: 'बल्क इनवॉइसिंग', hinglish: 'Bulk Invoicing', gu: 'બલ્ક ઇન્વોઇસિંગ', mr: 'बल्क इनव्हॉइसिंग', mwr: 'बल्क इनवॉइसिंग' },
  'b.creditLimit': { en: 'Credit Limit Controls', hi: 'क्रेडिट लिमिट कंट्रोल', hinglish: 'Credit Limit Controls', gu: 'ક્રેડિટ લિમિટ કંટ્રોલ', mr: 'क्रेडिट लिमिट कंट्रोल', mwr: 'क्रेडिट लिमिट कंट्रोल' },
  'b.returnTracking': { en: 'Return Tracking', hi: 'रिटर्न ट्रैकिंग', hinglish: 'Return Tracking', gu: 'રિટર્ન ટ્રૅકિંગ', mr: 'रिटर्न ट्रॅकिंग', mwr: 'रिटर्न ट्रैकिंग' },
  'b.batchwise': { en: 'Batch-wise Tracking', hi: 'बैच-वाइज़ ट्रैकिंग', hinglish: 'Batch-wise Tracking', gu: 'બેચ-વાઇઝ ટ્રૅકિંગ', mr: 'बॅच-वाइज ट्रॅकिंग', mwr: 'बैच-वाइज़ ट्रैकिंग' },
  'b.godownMgmt': { en: 'Godown Management', hi: 'गोदाम मैनेजमेंट', hinglish: 'Godown Management', gu: 'ગોડાઉન મેનેજમેન્ટ', mr: 'गोदाम मॅनेजमेंट', mwr: 'गोदाम मैनेजमेंट' },
  'b.bulkPricing': { en: 'Bulk Pricing Rules', hi: 'बल्क प्राइसिंग रूल्स', hinglish: 'Bulk Pricing Rules', gu: 'બલ્ક પ્રાઇસિંગ રૂલ્સ', mr: 'बल्क प्राइसिंग रूल्स', mwr: 'बल्क प्राइसिंग रूल्स' },
  'b.outstanding': { en: 'Outstanding Tracking', hi: 'आउटस्टैंडिंग ट्रैकिंग', hinglish: 'Outstanding Tracking', gu: 'આઉટસ્ટેન્ડિંગ ટ્રૅકિંગ', mr: 'आउटस्टँडिंग ट्रॅकिंग', mwr: 'आउटस्टैंडिंग ट्रैकिंग' },
  'b.taxCompliance': { en: 'Tax Compliance', hi: 'टैक्स कंप्लायंस', hinglish: 'Tax Compliance', gu: 'ટેક્સ કમ્પ્લાયન્સ', mr: 'टॅक्स कम्प्लायन्स', mwr: 'टैक्स कंप्लायंस' },
  'b.purchasePlan': { en: 'Purchase Planning', hi: 'परचेज़ प्लानिंग', hinglish: 'Purchase Planning', gu: 'પરચેઝ પ્લાનિંગ', mr: 'परचेस प्लॅनिंग', mwr: 'परचेज़ प्लानिंग' },
  'b.bom': { en: 'Bill of Materials', hi: 'बिल ऑफ़ मटेरियल्स', hinglish: 'Bill of Materials', gu: 'બિલ ઓફ મટિરિયલ્સ', mr: 'बिल ऑफ मटेरियल्स', mwr: 'बिल ऑफ़ मटेरियल्स' },
  'b.wip': { en: 'WIP Tracking', hi: 'WIP ट्रैकिंग', hinglish: 'WIP Tracking', gu: 'WIP ટ્રૅકિંગ', mr: 'WIP ट्रॅकिंग', mwr: 'WIP ट्रैकिंग' },
  'b.wastage': { en: 'Wastage Analysis', hi: 'वेस्टेज एनालिसिस', hinglish: 'Wastage Analysis', gu: 'વેસ્ટેજ એનાલિસિસ', mr: 'वेस्टेज विश्लेषण', mwr: 'वेस्टेज एनालिसिस' },
  'b.resourcePlan': { en: 'Resource Planning', hi: 'रिसोर्स प्लानिंग', hinglish: 'Resource Planning', gu: 'રિસોર્સ પ્લાનિંગ', mr: 'रिसोर्स प्लॅनिंग', mwr: 'रिसोर्स प्लानिंग' },
  'b.qualityControl': { en: 'Quality Control', hi: 'क्वालिटी कंट्रोल', hinglish: 'Quality Control', gu: 'ક્વોલિટી કંટ્રોલ', mr: 'क्वालिटी कंट्रोल', mwr: 'क्वालिटी कंट्रोल' },
  'b.prodReports': { en: 'Production Reports', hi: 'प्रोडक्शन रिपोर्ट्स', hinglish: 'Production Reports', gu: 'પ્રોડક્શન રિપોર્ટ્સ', mr: 'प्रोडक्शन रिपोर्ट्स', mwr: 'प्रोडक्शन रिपोर्ट्स' },
  'b.taskMgmt': { en: 'Task Management', hi: 'टास्क मैनेजमेंट', hinglish: 'Task Management', gu: 'ટાસ્ક મેનેજમેન્ટ', mr: 'टास्क मॅनेजमेंट', mwr: 'टास्क मैनेजमेंट' },
  'b.clientPortals': { en: 'Client Portals', hi: 'क्लाइंट पोर्टल्स', hinglish: 'Client Portals', gu: 'ક્લાયન્ટ પોર્ટલ્સ', mr: 'क्लायंट पोर्टल्स', mwr: 'क्लाइंट पोर्टल्स' },
  'b.amcBilling': { en: 'AMC Billing', hi: 'AMC बिलिंग', hinglish: 'AMC Billing', gu: 'AMC બિલિંગ', mr: 'AMC बिलिंग', mwr: 'AMC बिलिंग' },
  'b.expenseTracking': { en: 'Expense Tracking', hi: 'एक्सपेंस ट्रैकिंग', hinglish: 'Expense Tracking', gu: 'એક્સપેન્સ ટ્રૅકિંગ', mr: 'एक्सपेन्स ट्रॅकिंग', mwr: 'एक्सपेंस ट्रैकिंग' },
  'b.projectReporting': { en: 'Project Reporting', hi: 'प्रोजेक्ट रिपोर्टिंग', hinglish: 'Project Reporting', gu: 'પ્રોજેક્ટ રિપોર્ટિંગ', mr: 'प्रोजेक्ट रिपोर्टिंग', mwr: 'प्रोजेक्ट रिपोर्टिंग' },
  'b.digitalContracts': { en: 'Digital Contracts', hi: 'डिजिटल कॉन्ट्रैक्ट्स', hinglish: 'Digital Contracts', gu: 'ડિજિટલ કોન્ટ્રાક્ટ્સ', mr: 'डिजिटल कॉन्ट्रॅक्ट्स', mwr: 'डिजिटल कॉन्ट्रैक्ट्स' },
  'b.kotPrinting': { en: 'KOT Printing', hi: 'KOT प्रिंटिंग', hinglish: 'KOT Printing', gu: 'KOT પ્રિન્ટિંગ', mr: 'KOT प्रिंटिंग', mwr: 'KOT प्रिंटिंग' },
  'b.tableBooking': { en: 'Table Booking', hi: 'टेबल बुकिंग', hinglish: 'Table Booking', gu: 'ટેબલ બુકિંગ', mr: 'टेबल बुकिंग', mwr: 'टेबल बुकिंग' },
  'b.recipeMgmt': { en: 'Recipe Management', hi: 'रेसिपी मैनेजमेंट', hinglish: 'Recipe Management', gu: 'રેસિપી મેનેજમેન્ટ', mr: 'रेसिपी मॅनेजमेंट', mwr: 'रेसिपी मैनेजमेंट' },
  'b.swiggyZomato': { en: 'Swiggy/Zomato Sync', hi: 'Swiggy/Zomato सिंक', hinglish: 'Swiggy/Zomato Sync', gu: 'Swiggy/Zomato સિંક', mr: 'Swiggy/Zomato सिंक', mwr: 'Swiggy/Zomato सिंक' },
  'b.waitstaffApp': { en: 'Waitstaff App', hi: 'वेटस्टाफ ऐप', hinglish: 'Waitstaff App', gu: 'વેઇટસ્ટાફ એપ', mr: 'वेटस्टाफ अॅप', mwr: 'वेटस्टाफ ऐप' },
  'b.inventoryControl': { en: 'Inventory Control', hi: 'इन्वेंटरी कंट्रोल', hinglish: 'Inventory Control', gu: 'ઇન્વેન્ટરી કંટ્રોલ', mr: 'इन्व्हेंटरी कंट्रोल', mwr: 'इन्वेंटरी कंट्रोल' },
  'b.roomMgmt': { en: 'Room Management', hi: 'रूम मैनेजमेंट', hinglish: 'Room Management', gu: 'રૂમ મેનેજમેન્ટ', mr: 'रूम मॅनेजमेंट', mwr: 'रूम मैनेजमेंट' },
  'b.guestHistory': { en: 'Guest History', hi: 'गेस्ट हिस्ट्री', hinglish: 'Guest History', gu: 'ગેસ્ટ હિસ્ટ્રી', mr: 'गेस्ट हिस्ट्री', mwr: 'गेस्ट हिस्ट्री' },
  'b.billingFolios': { en: 'Billing & Folios', hi: 'बिलिंग और फोलियो', hinglish: 'Billing & Folios', gu: 'બિલિંગ અને ફોલિયો', mr: 'बिलिंग आणि फोलिओ', mwr: 'बिलिंग अर फोलियो' },
  'b.housekeepingApp': { en: 'Housekeeping App', hi: 'हाउसकीपिंग ऐप', hinglish: 'Housekeeping App', gu: 'હાઉસકીપિંગ એપ', mr: 'हाउसकीपिंग अॅप', mwr: 'हाउसकीपिंग ऐप' },
  'b.inventorySync': { en: 'Inventory Sync', hi: 'इन्वेंटरी सिंक', hinglish: 'Inventory Sync', gu: 'ઇન્વેન્ટરી સિંક', mr: 'इन्व्हेंटरी सिंक', mwr: 'इन्वेंटरी सिंक' },
  'b.dynamicPricing': { en: 'Dynamic Pricing', hi: 'डायनामिक प्राइसिंग', hinglish: 'Dynamic Pricing', gu: 'ડાયનેમિક પ્રાઇસિંગ', mr: 'डायनॅमिक प्राइसिंग', mwr: 'डायनामिक प्राइसिंग' },
  'b.expiryTracking': { en: 'Expiry Tracking', hi: 'एक्सपायरी ट्रैकिंग', hinglish: 'Expiry Tracking', gu: 'એક્સપાયરી ટ્રૅકિંગ', mr: 'एक्सपायरी ट्रॅकिंग', mwr: 'एक्सपायरी ट्रैकिंग' },
  'b.scheduleH': { en: 'Schedule H Alerts', hi: 'शेड्यूल H अलर्ट', hinglish: 'Schedule H Alerts', gu: 'શેડ્યૂલ H એલર્ટ', mr: 'शेड्यूल H अलर्ट', mwr: 'शेड्यूल H अलर्ट' },
  'b.genericSearch': { en: 'Generic Name Search', hi: 'जेनेरिक नेम सर्च', hinglish: 'Generic Name Search', gu: 'જેનરિક નેમ સર્ચ', mr: 'जेनेरिक नेम सर्च', mwr: 'जेनेरिक नेम सर्च' },
  'b.doctorMgmt': { en: 'Doctor Management', hi: 'डॉक्टर मैनेजमेंट', hinglish: 'Doctor Management', gu: 'ડોક્ટર મેનેજમેન્ટ', mr: 'डॉक्टर मॅनेजमेंट', mwr: 'डॉक्टर मैनेजमेंट' },
  'b.digitalRx': { en: 'Digital Prescription', hi: 'डिजिटल प्रिस्क्रिप्शन', hinglish: 'Digital Prescription', gu: 'ડિજિટલ પ્રિસ્ક્રિપ્શન', mr: 'डिजिटल प्रिस्क्रिप्शन', mwr: 'डिजिटल प्रिस्क्रिप्शन' },
  'b.stockAudit': { en: 'Stock Audit', hi: 'स्टॉक ऑडिट', hinglish: 'Stock Audit', gu: 'સ્ટોક ઓડિટ', mr: 'स्टॉक ऑडिट', mwr: 'स्टॉक ऑडिट' },
  'b.unitMgmt': { en: 'Unit Management', hi: 'यूनिट मैनेजमेंट', hinglish: 'Unit Management', gu: 'યુનિટ મેનેજમેન્ટ', mr: 'युनिट मॅनेजमेंट', mwr: 'यूनिट मैनेजमेंट' },
  'b.leadPipeline': { en: 'Lead Pipeline', hi: 'लीड पाइपलाइन', hinglish: 'Lead Pipeline', gu: 'લીડ પાઇપલાઇન', mr: 'लीड पाइपलाइन', mwr: 'लीड पाइपलाइन' },
  'b.paymentPlans': { en: 'Payment Plans', hi: 'पेमेंट प्लान्स', hinglish: 'Payment Plans', gu: 'પેમેન્ટ પ્લાન્સ', mr: 'पेमेंट प्लॅन्स', mwr: 'पेमेंट प्लान्स' },
  'b.docMgmt': { en: 'Document Management', hi: 'डॉक्यूमेंट मैनेजमेंट', hinglish: 'Document Management', gu: 'ડોક્યુમેન્ટ મેનેજમેન્ટ', mr: 'डॉक्युमेंट मॅनेजमेंट', mwr: 'डॉक्यूमेंट मैनेजमेंट' },
  'b.siteVisit': { en: 'Site Visit Tracking', hi: 'साइट विज़िट ट्रैकिंग', hinglish: 'Site Visit Tracking', gu: 'સાઇટ વિઝિટ ટ્રૅકિંગ', mr: 'साइट व्हिजिट ट्रॅकिंग', mwr: 'साइट विज़िट ट्रैकिंग' },
  'b.bookingReports': { en: 'Booking Reports', hi: 'बुकिंग रिपोर्ट्स', hinglish: 'Booking Reports', gu: 'બુકિંગ રિપોર્ટ્સ', mr: 'बुकिंग रिपोर्ट्स', mwr: 'बुकिंग रिपोर्ट्स' },
  'b.studentProfiles': { en: 'Student Profiles', hi: 'स्टूडेंट प्रोफाइल्स', hinglish: 'Student Profiles', gu: 'સ્ટુડન્ટ પ્રોફાઇલ્સ', mr: 'स्टुडंट प्रोफाइल्स', mwr: 'स्टूडेंट प्रोफाइल्स' },
  'b.feeMgmt': { en: 'Fee Management', hi: 'फीस मैनेजमेंट', hinglish: 'Fee Management', gu: 'ફી મેનેજમેન્ટ', mr: 'फी मॅनेजमेंट', mwr: 'फीस मैनेजमेंट' },
  'b.batchScheduling': { en: 'Batch Scheduling', hi: 'बैच शेड्यूलिंग', hinglish: 'Batch Scheduling', gu: 'બેચ શેડ્યૂલિંગ', mr: 'बॅच शेड्युलिंग', mwr: 'बैच शेड्यूलिंग' },
  'b.examResults': { en: 'Exam Results', hi: 'एग्ज़ाम रिज़ल्ट्स', hinglish: 'Exam Results', gu: 'એક્ઝામ રિઝલ્ટ્સ', mr: 'एक्झाम रिझल्ट्स', mwr: 'एग्ज़ाम रिज़ल्ट्स' },
  'b.parentApp': { en: 'Parent App', hi: 'पैरेंट ऐप', hinglish: 'Parent App', gu: 'પેરન્ટ એપ', mr: 'पॅरेंट अॅप', mwr: 'पैरेंट ऐप' },
  'b.enquiryTracking': { en: 'Enquiry Tracking', hi: 'इंक्वायरी ट्रैकिंग', hinglish: 'Enquiry Tracking', gu: 'ઇન્ક્વાયરી ટ્રૅકિંગ', mr: 'इन्क्वायरी ट्रॅकिंग', mwr: 'इंक्वायरी ट्रैकिंग' },
  'b.customJobCards': { en: 'Custom Job Cards', hi: 'कस्टम जॉब कार्ड्स', hinglish: 'Custom Job Cards', gu: 'કસ્ટમ જોબ કાર્ડ્સ', mr: 'कस्टम जॉब कार्ड्स', mwr: 'कस्टम जॉब कार्ड्स' },
  'b.paperStock': { en: 'Paper Stock Tracking', hi: 'पेपर स्टॉक ट्रैकिंग', hinglish: 'Paper Stock Tracking', gu: 'પેપર સ્ટોક ટ્રૅકિંગ', mr: 'पेपर स्टॉक ट्रॅकिंग', mwr: 'पेपर स्टॉक ट्रैकिंग' },
  'b.inkUsage': { en: 'Ink Usage Analysis', hi: 'इंक यूसेज एनालिसिस', hinglish: 'Ink Usage Analysis', gu: 'ઇન્ક યુસેજ એનાલિસિસ', mr: 'इंक युसेज विश्लेषण', mwr: 'इंक यूसेज एनालिसिस' },
  'b.deliveryTracking': { en: 'Delivery Tracking', hi: 'डिलीवरी ट्रैकिंग', hinglish: 'Delivery Tracking', gu: 'ડિલિવરી ટ્રૅકિંગ', mr: 'डिलिव्हरी ट्रॅकिंग', mwr: 'डिलीवरी ट्रैकिंग' },
  'b.designerDash': { en: 'Designer Dashboard', hi: 'डिज़ाइनर डैशबोर्ड', hinglish: 'Designer Dashboard', gu: 'ડિઝાઇનર ડેશબોર્ડ', mr: 'डिझायनर डॅशबोर्ड', mwr: 'डिज़ाइनर डैशबोर्ड' },
  'b.bulkPricingSimple': { en: 'Bulk Pricing', hi: 'बल्क प्राइसिंग', hinglish: 'Bulk Pricing', gu: 'બલ્ક પ્રાઇસિંગ', mr: 'बल्क प्राइसिंग', mwr: 'बल्क प्राइसिंग' },
  'b.patientRecords': { en: 'Patient Records', hi: 'पेशेंट रिकॉर्ड्स', hinglish: 'Patient Records', gu: 'પેશન્ટ રેકોર્ડ્સ', mr: 'पेशंट रेकॉर्ड्स', mwr: 'पेशेंट रिकॉर्ड्स' },
  'b.opdBilling': { en: 'OPD Billing', hi: 'OPD बिलिंग', hinglish: 'OPD Billing', gu: 'OPD બિલિંગ', mr: 'OPD बिलिंग', mwr: 'OPD बिलिंग' },
  'b.labIntegration': { en: 'Laboratory Integration', hi: 'लेबोरेटरी इंटीग्रेशन', hinglish: 'Laboratory Integration', gu: 'લેબોરેટરી ઇન્ટિગ્રેશન', mr: 'लॅबोरेटरी इंटिग्रेशन', mwr: 'लेबोरेटरी इंटीग्रेशन' },
  'b.doctorSchedules': { en: 'Doctor Schedules', hi: 'डॉक्टर शेड्यूल', hinglish: 'Doctor Schedules', gu: 'ડોક્ટર શેડ્યૂલ', mr: 'डॉक्टर शेड्यूल', mwr: 'डॉक्टर शेड्यूल' },
  'b.pharmacySync': { en: 'Pharmacy Sync', hi: 'फार्मेसी सिंक', hinglish: 'Pharmacy Sync', gu: 'ફાર્મસી સિંક', mr: 'फार्मसी सिंक', mwr: 'फार्मेसी सिंक' },
  'b.insuranceClaims': { en: 'Insurance Claims', hi: 'इंश्योरेंस क्लेम्स', hinglish: 'Insurance Claims', gu: 'ઇન્શ્યોરન્સ ક્લેમ્સ', mr: 'इन्शुरन्स क्लेम्स', mwr: 'इंश्योरेंस क्लेम्स' },
  'b.chassisTracking': { en: 'Chassis Tracking', hi: 'चेसिस ट्रैकिंग', hinglish: 'Chassis Tracking', gu: 'ચેસિસ ટ્રૅકિંગ', mr: 'चॅसिस ट्रॅकिंग', mwr: 'चेसिस ट्रैकिंग' },
  'b.serviceReminders': { en: 'Service Reminders', hi: 'सर्विस रिमाइंडर्स', hinglish: 'Service Reminders', gu: 'સર્વિસ રિમાઇન્ડર્સ', mr: 'सर्व्हिस रिमाइंडर्स', mwr: 'सर्विस रिमाइंडर्स' },
  'b.sparePartsInv': { en: 'Spare Parts Inventory', hi: 'स्पेयर पार्ट्स इन्वेंटरी', hinglish: 'Spare Parts Inventory', gu: 'સ્પેર પાર્ટ્સ ઇન્વેન્ટરી', mr: 'स्पेअर पार्ट्स इन्व्हेंटरी', mwr: 'स्पेयर पार्ट्स इन्वेंटरी' },
  'b.insuranceTracking': { en: 'Insurance Tracking', hi: 'इंश्योरेंस ट्रैकिंग', hinglish: 'Insurance Tracking', gu: 'ઇન્શ્યોરન્સ ટ્રૅકિંગ', mr: 'इन्शुरन्स ट्रॅकिंग', mwr: 'इंश्योरेंस ट्रैकिंग' },
  'b.testDriveLogs': { en: 'Test Drive Logs', hi: 'टेस्ट ड्राइव लॉग्स', hinglish: 'Test Drive Logs', gu: 'ટેસ્ટ ડ્રાઇવ લોગ્સ', mr: 'टेस्ट ड्राइव्ह लॉग्स', mwr: 'टेस्ट ड्राइव लॉग्स' },
  'b.financeSupport': { en: 'Finance Support', hi: 'फाइनेंस सपोर्ट', hinglish: 'Finance Support', gu: 'ફાઇનાન્સ સપોર્ટ', mr: 'फायनान्स सपोर्ट', mwr: 'फाइनेंस सपोर्ट' }
};

const solutionData: Record<string, any> = {
  'distribution': {
    titleKey: 'sol.distribution.title',
    descKey: 'sol.distribution.desc',
    image: '/images/distribution_solution_preview_1778580917960.png',
    benefitKeys: ['b.routeOpt', 'b.liveStock', 'b.dealerMgmt', 'b.bulkInvoicing', 'b.creditLimit', 'b.returnTracking'],
    icon: Truck
  },
  'wholesale': {
    titleKey: 'sol.wholesale.title',
    descKey: 'sol.wholesale.desc',
    image: '/images/wholesale_solution_preview_1778580934657.png',
    benefitKeys: ['b.batchwise', 'b.godownMgmt', 'b.bulkPricing', 'b.outstanding', 'b.taxCompliance', 'b.purchasePlan'],
    icon: Building2
  },
  'manufacturing': {
    titleKey: 'sol.manufacturing.title',
    descKey: 'sol.manufacturing.desc',
    image: '/images/manufacturing_solution_preview_1778580949463.png',
    benefitKeys: ['b.bom', 'b.wip', 'b.wastage', 'b.resourcePlan', 'b.qualityControl', 'b.prodReports'],
    icon: Factory
  },
  'service-based': {
    titleKey: 'sol.service-based.title',
    descKey: 'sol.service-based.desc',
    image: '/images/service_based_solution_preview_1778580967577.png',
    benefitKeys: ['b.taskMgmt', 'b.clientPortals', 'b.amcBilling', 'b.expenseTracking', 'b.projectReporting', 'b.digitalContracts'],
    icon: Settings2
  },
  'restaurants': {
    titleKey: 'sol.restaurants.title',
    descKey: 'sol.restaurants.desc',
    image: '/images/restaurants_solution_preview_1778580982552.png',
    benefitKeys: ['b.kotPrinting', 'b.tableBooking', 'b.recipeMgmt', 'b.swiggyZomato', 'b.waitstaffApp', 'b.inventoryControl'],
    icon: UtensilsCrossed
  },
  'hotels': {
    titleKey: 'sol.hotels.title',
    descKey: 'sol.hotels.desc',
    image: '/images/hotels_solution_preview_1778581001009.png',
    benefitKeys: ['b.roomMgmt', 'b.guestHistory', 'b.billingFolios', 'b.housekeepingApp', 'b.inventorySync', 'b.dynamicPricing'],
    icon: Hotel
  },
  'pharmacies': {
    titleKey: 'sol.pharmacies.title',
    descKey: 'sol.pharmacies.desc',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefitKeys: ['b.expiryTracking', 'b.scheduleH', 'b.genericSearch', 'b.doctorMgmt', 'b.digitalRx', 'b.stockAudit'],
    icon: Stethoscope
  },
  'real-estate': {
    titleKey: 'sol.real-estate.title',
    descKey: 'sol.real-estate.desc',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefitKeys: ['b.unitMgmt', 'b.leadPipeline', 'b.paymentPlans', 'b.docMgmt', 'b.siteVisit', 'b.bookingReports'],
    icon: Building2
  },
  'coaching': {
    titleKey: 'sol.coaching.title',
    descKey: 'sol.coaching.desc',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefitKeys: ['b.studentProfiles', 'b.feeMgmt', 'b.batchScheduling', 'b.examResults', 'b.parentApp', 'b.enquiryTracking'],
    icon: GraduationCap
  },
  'printing': {
    titleKey: 'sol.printing.title',
    descKey: 'sol.printing.desc',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefitKeys: ['b.customJobCards', 'b.paperStock', 'b.inkUsage', 'b.deliveryTracking', 'b.designerDash', 'b.bulkPricingSimple'],
    icon: Printer
  },
  'hospitals': {
    titleKey: 'sol.hospitals.title',
    descKey: 'sol.hospitals.desc',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefitKeys: ['b.patientRecords', 'b.opdBilling', 'b.labIntegration', 'b.doctorSchedules', 'b.pharmacySync', 'b.insuranceClaims'],
    icon: HeartPulse
  },
  'automobiles': {
    titleKey: 'sol.automobiles.title',
    descKey: 'sol.automobiles.desc',
    image: '/images/sector_solutions_preview_1778580418649.png',
    benefitKeys: ['b.chassisTracking', 'b.serviceReminders', 'b.sparePartsInv', 'b.insuranceTracking', 'b.testDriveLogs', 'b.financeSupport'],
    icon: Car
  }
};

import DemoForm from '../../components/DemoForm';
import InteractiveCards from '../../components/InteractiveCards';

export default function SolutionDetail() {
  const { type } = useParams();
  const t = useT(STRINGS);

  const data = type ? solutionData[type] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) return <div className="pt-32 text-center font-black text-2xl">{t('notFound')}</div>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const Icon = data.icon;
  const title = t(data.titleKey);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-gradient-to-br from-themeGreen-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.span
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-700 text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-sm shadow-themeGreen-500/5"
              >
                {title} {t('badge.suffix')}
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 tracking-tighter"
              >
                {t('hero.h1.pre')} <br/>
                <span className="text-themeGreen-600 italic">{title} {t('hero.h1.market')}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl"
              >
                {t(data.descKey)} {t('hero.desc.suffix')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-themeGreen-600 text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-themeGreen-600/20 hover:bg-themeGreen-700 transition-all flex items-center gap-3 group">
                  {t('hero.bookDemo.pre')} {title} {t('hero.bookDemo.post')}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-6 bg-themeGreen-600/5 rounded-[3rem] blur-3xl" />
              <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden group">
                <img
                  src={data.image}
                  alt={`${title} Solutions`}
                  className="rounded-[2rem] w-full transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Industry Badge */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/50 flex items-center justify-center text-themeGreen-600">
                   {Icon && <Icon size={32} />}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-themeGreen-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-6">{t('benefits.h2.pre')} <span className="text-blue-400 italic">{t('benefits.h2.accent')}</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t('benefits.subPre')} {title} {t('benefits.subPost')}</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.benefitKeys.map((key: string, i: number) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-themeGreen-500/10 text-blue-400 flex items-center justify-center group-hover:bg-themeGreen-500 group-hover:text-black transition-all">
                  <Star className="fill-current" size={24} />
                </div>
                <h4 className="text-2xl font-black">{t(key)}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{t('benefits.cardDescPre')} {title} {t('benefits.cardDescPost')}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">{t('core.h2')}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t('core.subPre')} {title} {t('core.subPost')}</p>
          </motion.div>

          <InteractiveCards
            items={[
              {
                title: t('cap.realtime.title'),
                frontDesc: t('cap.realtime.front'),
                backDesc: t('cap.realtime.back'),
                icon: Zap,
                color: '#C05621'
              },
              {
                title: t('cap.market.title'),
                frontDesc: t('cap.market.front'),
                backDesc: `${t('cap.market.backPre')} ${title} ${t('cap.market.backPost')}`,
                icon: Target,
                color: '#7C3AED'
              },
              {
                title: t('cap.security.title'),
                frontDesc: t('cap.security.front'),
                backDesc: t('cap.security.back'),
                icon: ShieldCheck,
                color: '#0F766E'
              }
            ]}
          />
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-xs font-black uppercase tracking-[2px] text-themeGreen-600 mb-4 block">{t('process.tag')}</span>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">{t('process.h2.pre')} <br/> <span className="text-themeGreen-600 italic">{t('process.h2.your')} {title} {t('process.h2.empire')}</span></h2>
          </motion.div>

          <div className="relative">
             {/* Desktop Path Animation */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden lg:block">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-themeGreen-600"
                />
             </div>

             <div className="grid lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "01", label: t('step.audit.label'), desc: t('step.audit.desc') },
                  { step: "02", label: t('step.sync.label'), desc: t('step.sync.desc') },
                  { step: "03", label: t('step.deploy.label'), desc: t('step.deploy.desc') },
                  { step: "04", label: t('step.scale.label'), desc: t('step.scale.desc') }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center text-2xl font-black text-gray-900 shadow-xl group-hover:border-themeGreen-600 group-hover:text-themeGreen-600 transition-all duration-500 mb-8">
                       {item.step}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-3">{item.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="pb-32 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <div className="relative rounded-[3rem] p-1 shadow-2xl bg-gradient-to-br from-themeGreen-500 to-indigo-600">
              <div className="bg-white rounded-[2.9rem] p-8 lg:p-12">
                 <DemoForm />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
