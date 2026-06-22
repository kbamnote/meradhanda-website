import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Wallet,
  Calculator,
  FileText,
  Landmark,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  RefreshCw
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': {
    en: 'Financial Intelligence',
    hi: 'फाइनेंशियल इंटेलिजेंस',
    hinglish: 'Financial Intelligence',
    gu: 'ફાઇનાન્શિયલ ઇન્ટેલિજન્સ',
    mr: 'फायनान्शियल इंटेलिजन्स',
    mwr: 'फाइनेंशियल इंटेलिजेंस',
  },
  'hero.title.pre': {
    en: 'Accounting that ',
    hi: 'अकाउंटिंग जो ',
    hinglish: 'Accounting jo ',
    gu: 'એકાઉન્ટિંગ જે ',
    mr: 'अकाउंटिंग जे ',
    mwr: 'अकाउंटिंग जको ',
  },
  'hero.title.accent': {
    en: 'Balances Itself.',
    hi: 'खुद को बैलेंस करे।',
    hinglish: 'khud Balance kare.',
    gu: 'પોતે જ બેલેન્સ થાય.',
    mr: 'स्वतःच बॅलन्स करते.',
    mwr: 'खुद ने बैलेंस करै।',
  },
  'hero.subtitle': {
    en: 'Mera Dhanda removes the complexity from business finance. Automated ledgers, bank reconciliation, and CA-ready reports—all updated in real-time as you do business.',
    hi: 'Mera Dhanda बिज़नेस फाइनेंस की जटिलता को हटा देता है। ऑटोमेटेड लेजर, बैंक रिकंसिलिएशन और CA-रेडी रिपोर्ट—सब कुछ रियल-टाइम में अपडेट होता है जैसे-जैसे आप बिज़नेस करते हैं।',
    hinglish: 'Mera Dhanda business finance ki complexity hata deta hai. Automated ledgers, bank reconciliation, aur CA-ready reports—sab real-time mein update hote hain jaise aap business karte ho.',
    gu: 'Mera Dhanda બિઝનેસ ફાઇનાન્સની જટિલતા દૂર કરે છે. ઓટોમેટેડ લેજર, બેંક રિકન્સિલિએશન અને CA-રેડી રિપોર્ટ—તમે બિઝનેસ કરો તેમ બધું રિયલ-ટાઇમમાં અપડેટ થાય છે.',
    mr: 'Mera Dhanda बिझनेस फायनान्समधील क्लिष्टता काढून टाकते. ऑटोमेटेड लेजर, बँक रिकन्सिलिएशन आणि CA-रेडी रिपोर्ट—तुम्ही व्यवसाय करताच सर्व काही रिअल-टाइममध्ये अपडेट होते.',
    mwr: 'Mera Dhanda बिज़नेस फाइनेंस री पेचीदगी हटा देवै। ऑटोमेटेड लेजर, बैंक रिकंसिलिएशन अर CA-रेडी रिपोर्ट—जको आप बिज़नेस करो जको सगळो रियल-टाइम में अपडेट होवै।',
  },
  'hero.cta.primary': {
    en: 'Open Your Ledger',
    hi: 'अपना लेजर खोलें',
    hinglish: 'Apna ledger kholo',
    gu: 'તમારું લેજર ખોલો',
    mr: 'तुमचे लेजर उघडा',
    mwr: 'आपणो लेजर खोलो',
  },
  'hero.cta.secondary': {
    en: 'Book Free Audit',
    hi: 'फ़्री ऑडिट बुक करें',
    hinglish: 'Free audit book karein',
    gu: 'ફ્રી ઓડિટ બુક કરો',
    mr: 'मोफत ऑडिट बुक करा',
    mwr: 'फ्री ऑडिट बुक करो',
  },
  'hero.img.alt': {
    en: 'Accounting Dashboard',
    hi: 'अकाउंटिंग डैशबोर्ड',
    hinglish: 'Accounting Dashboard',
    gu: 'એકાઉન્ટિંગ ડેશબોર્ડ',
    mr: 'अकाउंटिंग डॅशबोर्ड',
    mwr: 'अकाउंटिंग डैशबोर्ड',
  },
  'hero.card.monthlyProfit': {
    en: 'Monthly Profit',
    hi: 'मासिक मुनाफ़ा',
    hinglish: 'Monthly Profit',
    gu: 'માસિક નફો',
    mr: 'मासिक नफा',
    mwr: 'महिनै रो मुनाफो',
  },
  'hero.card.vsLastMonth': {
    en: '12.5% vs last month',
    hi: '12.5% पिछले महीने की तुलना में',
    hinglish: '12.5% last month se',
    gu: '12.5% ગયા મહિના કરતાં',
    mr: '12.5% मागील महिन्याच्या तुलनेत',
    mwr: '12.5% पाछलै महिनै सूं',
  },
  'hero.card.income': {
    en: 'Income',
    hi: 'आय',
    hinglish: 'Income',
    gu: 'આવક',
    mr: 'उत्पन्न',
    mwr: 'आवक',
  },
  'hero.card.expense': {
    en: 'Expense',
    hi: 'खर्च',
    hinglish: 'Expense',
    gu: 'ખર્ચ',
    mr: 'खर्च',
    mwr: 'खरचो',
  },
  'features.heading': {
    en: 'Your entire finance department, digitized.',
    hi: 'आपका पूरा फाइनेंस डिपार्टमेंट, डिजिटाइज़्ड।',
    hinglish: 'Aapka pura finance department, digitized.',
    gu: 'તમારો આખો ફાઇનાન્સ વિભાગ, ડિજિટાઇઝ્ડ.',
    mr: 'तुमचा संपूर्ण फायनान्स विभाग, डिजिटाइझ्ड.',
    mwr: 'आपणो पूरो फाइनेंस डिपार्टमेंट, डिजिटाइज़्ड।',
  },
  'features.subheading': {
    en: 'Scale your business with the confidence that your numbers are always accurate and compliant.',
    hi: 'अपने बिज़नेस को इस भरोसे के साथ बढ़ाएं कि आपके नंबर हमेशा सटीक और कंप्लायंट हैं।',
    hinglish: 'Apne business ko is bharose ke saath badhao ki aapke numbers hamesha accurate aur compliant hain.',
    gu: 'તમારા નંબર હંમેશા સચોટ અને કમ્પ્લાયન્ટ છે એ વિશ્વાસ સાથે તમારો બિઝનેસ વધારો.',
    mr: 'तुमचे आकडे नेहमी अचूक आणि कम्प्लायंट आहेत या विश्वासाने तुमचा व्यवसाय वाढवा.',
    mwr: 'आपणो बिज़नेस इण भरोसै सूं बढाओ कै आपरा नंबर हमेसा सही अर कंप्लायंट हुवै।',
  },
  'feat.bank.title': {
    en: 'Bank Auto-Sync',
    hi: 'बैंक ऑटो-सिंक',
    hinglish: 'Bank Auto-Sync',
    gu: 'બેંક ઓટો-સિંક',
    mr: 'बँक ऑटो-सिंक',
    mwr: 'बैंक ऑटो-सिंक',
  },
  'feat.bank.desc': {
    en: 'Securely link your bank accounts. Transactions are automatically categorized and matched with invoices.',
    hi: 'अपने बैंक अकाउंट सुरक्षित रूप से लिंक करें। ट्रांज़ैक्शन अपने आप कैटेगराइज़ होते हैं और इनवॉइस से मैच होते हैं।',
    hinglish: 'Apne bank accounts securely link karo. Transactions automatically categorize hote hain aur invoices se match hote hain.',
    gu: 'તમારા બેંક એકાઉન્ટ સુરક્ષિત રીતે લિંક કરો. ટ્રાન્ઝેક્શન આપોઆપ કેટેગરાઇઝ થાય છે અને ઇન્વોઇસ સાથે મેચ થાય છે.',
    mr: 'तुमची बँक खाती सुरक्षितपणे लिंक करा. व्यवहार आपोआप वर्गीकृत होतात आणि इन्व्हॉइससोबत जुळवले जातात.',
    mwr: 'आपरा बैंक अकाउंट सुरक्षित ढंग सूं लिंक करो। ट्रांज़ैक्शन खुद-ब-खुद कैटेगराइज़ हुवै अर इनवॉइस सूं मैच हुवै।',
  },
  'feat.tally.title': {
    en: 'Tally/CA Export',
    hi: 'Tally/CA एक्सपोर्ट',
    hinglish: 'Tally/CA Export',
    gu: 'Tally/CA એક્સપોર્ટ',
    mr: 'Tally/CA एक्सपोर्ट',
    mwr: 'Tally/CA एक्सपोर्ट',
  },
  'feat.tally.desc': {
    en: 'One-click export for all your data. Your CA gets everything they need in their preferred format.',
    hi: 'आपके सारे डेटा का वन-क्लिक एक्सपोर्ट। आपके CA को उनकी पसंदीदा फॉर्मेट में सब कुछ मिल जाता है।',
    hinglish: 'Aapke saare data ka one-click export. Aapke CA ko unki preferred format mein sab kuch mil jaata hai.',
    gu: 'તમારા બધા ડેટાનું વન-ક્લિક એક્સપોર્ટ. તમારા CA ને તેમની પસંદગીના ફોર્મેટમાં બધું મળે છે.',
    mr: 'तुमच्या सर्व डेटाचे वन-क्लिक एक्सपोर्ट. तुमच्या CA ला त्यांच्या पसंतीच्या फॉरमॅटमध्ये सर्व काही मिळते.',
    mwr: 'आपरै सगळै डेटा रो वन-क्लिक एक्सपोर्ट। आपरै CA नै उणारी मनपसंद फॉर्मेट में सगळो मिल जावै।',
  },
  'feat.reports.title': {
    en: 'Statutory Reports',
    hi: 'सांविधिक रिपोर्ट्स',
    hinglish: 'Statutory Reports',
    gu: 'સ્ટેચ્યુટરી રિપોર્ટ્સ',
    mr: 'वैधानिक अहवाल',
    mwr: 'सांविधिक रिपोर्ट्स',
  },
  'feat.reports.desc': {
    en: 'Instant Balance Sheets, Profit & Loss Statements, and Cash Flow reports. Audit-ready, always.',
    hi: 'इंस्टेंट बैलेंस शीट, प्रॉफिट एंड लॉस स्टेटमेंट और कैश फ्लो रिपोर्ट। हमेशा ऑडिट-रेडी।',
    hinglish: 'Instant Balance Sheets, Profit & Loss Statements, aur Cash Flow reports. Hamesha audit-ready.',
    gu: 'ઇન્સ્ટન્ટ બેલેન્સ શીટ, પ્રોફિટ એન્ડ લોસ સ્ટેટમેન્ટ અને કેશ ફ્લો રિપોર્ટ. હંમેશા ઓડિટ-રેડી.',
    mr: 'झटपट बॅलन्स शीट, प्रॉफिट अँड लॉस स्टेटमेंट आणि कॅश फ्लो अहवाल. नेहमी ऑडिट-रेडी.',
    mwr: 'इंस्टेंट बैलेंस शीट, प्रॉफिट एंड लॉस स्टेटमेंट अर कैश फ्लो रिपोर्ट। हमेसा ऑडिट-रेडी।',
  },
  'feat.ledger.title': {
    en: 'Ledger Automation',
    hi: 'लेजर ऑटोमेशन',
    hinglish: 'Ledger Automation',
    gu: 'લેજર ઓટોમેશન',
    mr: 'लेजर ऑटोमेशन',
    mwr: 'लेजर ऑटोमेशन',
  },
  'feat.ledger.desc': {
    en: 'Double-entry bookkeeping happens behind the scenes as you generate bills or record purchases.',
    hi: 'जैसे ही आप बिल बनाते हैं या खरीदारी रिकॉर्ड करते हैं, डबल-एंट्री बुककीपिंग पर्दे के पीछे हो जाती है।',
    hinglish: 'Jaise hi aap bills banate ho ya purchases record karte ho, double-entry bookkeeping background mein ho jaati hai.',
    gu: 'તમે બિલ બનાવો કે ખરીદી નોંધો ત્યારે ડબલ-એન્ટ્રી બુકકીપિંગ પડદા પાછળ થઈ જાય છે.',
    mr: 'तुम्ही बिल तयार करता किंवा खरेदी नोंदवता तेव्हा डबल-एंट्री बुककीपिंग पडद्यामागे होते.',
    mwr: 'जको आप बिल बणावो या खरीदी रिकॉर्ड करो, डबल-एंट्री बुककीपिंग परदै रै पाछै हुय जावै।',
  },
  'feat.expense.title': {
    en: 'Expense Control',
    hi: 'खर्च कंट्रोल',
    hinglish: 'Expense Control',
    gu: 'ખર્ચ કંટ્રોલ',
    mr: 'खर्च नियंत्रण',
    mwr: 'खरचै रो कंट्रोल',
  },
  'feat.expense.desc': {
    en: 'Track every petty cash expense. Set budget limits for departments and get over-spending alerts.',
    hi: 'हर पेटी कैश खर्च को ट्रैक करें। डिपार्टमेंट के लिए बजट लिमिट सेट करें और ओवर-स्पेंडिंग अलर्ट पाएं।',
    hinglish: 'Har petty cash expense track karo. Departments ke liye budget limits set karo aur over-spending alerts pao.',
    gu: 'દરેક પેટી કેશ ખર્ચ ટ્રેક કરો. વિભાગો માટે બજેટ લિમિટ સેટ કરો અને ઓવર-સ્પેન્ડિંગ એલર્ટ મેળવો.',
    mr: 'प्रत्येक पेटी कॅश खर्च ट्रॅक करा. विभागांसाठी बजेट मर्यादा सेट करा आणि ओव्हर-स्पेंडिंग अलर्ट मिळवा.',
    mwr: 'हर पेटी कैश खरचो ट्रैक करो। डिपार्टमेंट सारू बजट लिमिट सेट करो अर ओवर-स्पेंडिंग अलर्ट पाओ।',
  },
  'feat.tax.title': {
    en: 'Tax Planning AI',
    hi: 'टैक्स प्लानिंग AI',
    hinglish: 'Tax Planning AI',
    gu: 'ટેક્સ પ્લાનિંગ AI',
    mr: 'टॅक्स प्लॅनिंग AI',
    mwr: 'टैक्स प्लानिंग AI',
  },
  'feat.tax.desc': {
    en: 'Our AI analyzes your numbers to suggest legal tax-saving opportunities throughout the year.',
    hi: 'हमारा AI आपके नंबरों का विश्लेषण करके पूरे साल कानूनी टैक्स-बचत के अवसर सुझाता है।',
    hinglish: 'Hamara AI aapke numbers analyze karke pure saal legal tax-saving opportunities suggest karta hai.',
    gu: 'અમારું AI તમારા નંબરનું વિશ્લેષણ કરીને આખા વર્ષ દરમિયાન કાયદેસર ટેક્સ-બચતની તકો સૂચવે છે.',
    mr: 'आमचे AI तुमच्या आकड्यांचे विश्लेषण करून वर्षभर कायदेशीर टॅक्स-बचतीच्या संधी सुचवते.',
    mwr: 'म्हारो AI आपरै नंबर रो विश्लेषण करनै पूरै बरस कानूनी टैक्स-बचत रा मौका सुझावै।',
  },
  'feat.multi.title': {
    en: 'Multi-Entity Support',
    hi: 'मल्टी-एंटिटी सपोर्ट',
    hinglish: 'Multi-Entity Support',
    gu: 'મલ્ટિ-એન્ટિટી સપોર્ટ',
    mr: 'मल्टी-एंटिटी सपोर्ट',
    mwr: 'मल्टी-एंटिटी सपोर्ट',
  },
  'feat.multi.desc': {
    en: 'Manage multiple business units or branches with consolidated financial reporting.',
    hi: 'कंसोलिडेटेड फाइनेंशियल रिपोर्टिंग के साथ कई बिज़नेस यूनिट या ब्रांच मैनेज करें।',
    hinglish: 'Consolidated financial reporting ke saath multiple business units ya branches manage karo.',
    gu: 'કોન્સોલિડેટેડ ફાઇનાન્શિયલ રિપોર્ટિંગ સાથે અનેક બિઝનેસ યુનિટ કે શાખાઓ મેનેજ કરો.',
    mr: 'कन्सॉलिडेटेड फायनान्शियल रिपोर्टिंगसह अनेक बिझनेस युनिट किंवा शाखा व्यवस्थापित करा.',
    mwr: 'कंसोलिडेटेड फाइनेंशियल रिपोर्टिंग रै साथै घणा बिज़नेस यूनिट या ब्रांच मैनेज करो।',
  },
  'feat.payment.title': {
    en: 'Payment Collection',
    hi: 'पेमेंट कलेक्शन',
    hinglish: 'Payment Collection',
    gu: 'પેમેન્ટ કલેક્શન',
    mr: 'पेमेंट कलेक्शन',
    mwr: 'पेमेंट कलेक्शन',
  },
  'feat.payment.desc': {
    en: 'Automatically track receivables. Send automated payment reminders via WhatsApp and Email.',
    hi: 'रिसीवेबल्स को अपने आप ट्रैक करें। WhatsApp और Email के ज़रिए ऑटोमेटेड पेमेंट रिमाइंडर भेजें।',
    hinglish: 'Receivables automatically track karo. WhatsApp aur Email se automated payment reminders bhejo.',
    gu: 'રિસીવેબલ્સ આપોઆપ ટ્રેક કરો. WhatsApp અને Email દ્વારા ઓટોમેટેડ પેમેન્ટ રિમાઇન્ડર મોકલો.',
    mr: 'येणी आपोआप ट्रॅक करा. WhatsApp आणि Email द्वारे ऑटोमेटेड पेमेंट रिमाइंडर पाठवा.',
    mwr: 'रिसीवेबल्स खुद-ब-खुद ट्रैक करो। WhatsApp अर Email रै जरियै ऑटोमेटेड पेमेंट रिमाइंडर भेजो।',
  },
  'health.heading.pre': {
    en: 'Total visibility into your ',
    hi: 'आपकी ',
    hinglish: 'Aapki ',
    gu: 'તમારા ',
    mr: 'तुमच्या ',
    mwr: 'आपरी ',
  },
  'health.heading.accent': {
    en: 'Financial Health.',
    hi: 'फाइनेंशियल हेल्थ में पूरी विज़िबिलिटी।',
    hinglish: 'Financial Health mein puri visibility.',
    gu: 'ફાઇનાન્શિયલ હેલ્થમાં સંપૂર્ણ વિઝિબિલિટી.',
    mr: 'फायनान्शियल हेल्थमध्ये संपूर्ण व्हिजिबिलिटी.',
    mwr: 'फाइनेंशियल हेल्थ में पूरी विज़िबिलिटी।',
  },
  'phase.entry.step': {
    en: 'Transaction Entry',
    hi: 'ट्रांज़ैक्शन एंट्री',
    hinglish: 'Transaction Entry',
    gu: 'ટ્રાન્ઝેક્શન એન્ટ્રી',
    mr: 'ट्रान्झॅक्शन एंट्री',
    mwr: 'ट्रांज़ैक्शन एंट्री',
  },
  'phase.entry.desc': {
    en: 'bills, purchases, and expenses are recorded instantly at the source.',
    hi: 'बिल, खरीदारी और खर्च सोर्स पर तुरंत रिकॉर्ड हो जाते हैं।',
    hinglish: 'Bills, purchases, aur expenses source par turant record ho jaate hain.',
    gu: 'બિલ, ખરીદી અને ખર્ચ સોર્સ પર તરત જ નોંધાય છે.',
    mr: 'बिल, खरेदी आणि खर्च स्रोतावर त्वरित नोंदवले जातात.',
    mwr: 'बिल, खरीदी अर खरचो सोर्स पर फटाफट रिकॉर्ड हुय जावै।',
  },
  'phase.cat.step': {
    en: 'Automatic Categorization',
    hi: 'ऑटोमैटिक कैटेगराइज़ेशन',
    hinglish: 'Automatic Categorization',
    gu: 'ઓટોમેટિક કેટેગરાઇઝેશન',
    mr: 'ऑटोमॅटिक वर्गीकरण',
    mwr: 'ऑटोमैटिक कैटेगराइज़ेशन',
  },
  'phase.cat.desc': {
    en: 'Our engine maps every entry to the correct ledger and tax head automatically.',
    hi: 'हमारा इंजन हर एंट्री को अपने आप सही लेजर और टैक्स हेड से मैप करता है।',
    hinglish: 'Hamara engine har entry ko automatically sahi ledger aur tax head se map karta hai.',
    gu: 'અમારું એન્જિન દરેક એન્ટ્રીને આપોઆપ સાચા લેજર અને ટેક્સ હેડ સાથે મેપ કરે છે.',
    mr: 'आमचे इंजिन प्रत्येक एंट्री आपोआप योग्य लेजर आणि टॅक्स हेडशी मॅप करते.',
    mwr: 'म्हारो इंजन हर एंट्री नै खुद-ब-खुद सही लेजर अर टैक्स हेड सूं मैप करै।',
  },
  'phase.recon.step': {
    en: 'Real-time Reconciliation',
    hi: 'रियल-टाइम रिकंसिलिएशन',
    hinglish: 'Real-time Reconciliation',
    gu: 'રિયલ-ટાઇમ રિકન્સિલિએશન',
    mr: 'रिअल-टाइम रिकन्सिलिएशन',
    mwr: 'रियल-टाइम रिकंसिलिएशन',
  },
  'phase.recon.desc': {
    en: 'Bank balances and internal ledgers are matched to ensure zero discrepancies.',
    hi: 'बैंक बैलेंस और इंटरनल लेजर को मैच किया जाता है ताकि कोई अंतर न रहे।',
    hinglish: 'Bank balances aur internal ledgers ko match kiya jaata hai taaki zero discrepancies rahe.',
    gu: 'બેંક બેલેન્સ અને આંતરિક લેજર મેચ કરવામાં આવે છે જેથી કોઈ તફાવત ન રહે.',
    mr: 'बँक बॅलन्स आणि अंतर्गत लेजर जुळवले जातात जेणेकरून शून्य तफावत राहील.',
    mwr: 'बैंक बैलेंस अर इंटरनल लेजर नै मैच करीजै जको कोई फरक नी रहै।',
  },
  'phase.insights.step': {
    en: 'Strategic Insights',
    hi: 'स्ट्रैटेजिक इनसाइट्स',
    hinglish: 'Strategic Insights',
    gu: 'સ્ટ્રેટેજિક ઇનસાઇટ્સ',
    mr: 'स्ट्रॅटेजिक इनसाइट्स',
    mwr: 'स्ट्रैटेजिक इनसाइट्स',
  },
  'phase.insights.desc': {
    en: 'Get deep-dives into your burn rate, runway, and department-wise profitability.',
    hi: 'अपने बर्न रेट, रनवे और डिपार्टमेंट-वाइज़ प्रॉफिटेबिलिटी में गहरी जानकारी पाएं।',
    hinglish: 'Apne burn rate, runway, aur department-wise profitability mein deep-dive pao.',
    gu: 'તમારા બર્ન રેટ, રનવે અને વિભાગ મુજબની નફાકારકતામાં ઊંડાણપૂર્વકની માહિતી મેળવો.',
    mr: 'तुमचा बर्न रेट, रनवे आणि विभागनिहाय नफाक्षमतेबद्दल सखोल माहिती मिळवा.',
    mwr: 'आपरै बर्न रेट, रनवे अर डिपार्टमेंट-वाइज़ प्रॉफिटेबिलिटी री गैरी जाणकारी पाओ।',
  },
  'pl.title': {
    en: 'P&L Preview',
    hi: 'P&L प्रिव्यू',
    hinglish: 'P&L Preview',
    gu: 'P&L પ્રિવ્યૂ',
    mr: 'P&L प्रिव्ह्यू',
    mwr: 'P&L प्रिव्यू',
  },
  'pl.netRevenue': {
    en: 'Net Revenue',
    hi: 'नेट रेवेन्यू',
    hinglish: 'Net Revenue',
    gu: 'નેટ રેવન્યૂ',
    mr: 'नेट रेव्हेन्यू',
    mwr: 'नेट रेवेन्यू',
  },
  'pl.directCosts': {
    en: 'Direct Costs',
    hi: 'डायरेक्ट कॉस्ट',
    hinglish: 'Direct Costs',
    gu: 'ડાયરેક્ટ કોસ્ટ',
    mr: 'डायरेक्ट कॉस्ट',
    mwr: 'डायरेक्ट कॉस्ट',
  },
  'pl.operatingExp': {
    en: 'Operating Exp.',
    hi: 'ऑपरेटिंग एक्स.',
    hinglish: 'Operating Exp.',
    gu: 'ઓપરેટિંગ એક્સ.',
    mr: 'ऑपरेटिंग एक्स.',
    mwr: 'ऑपरेटिंग एक्स.',
  },
  'pl.netProfit': {
    en: 'Net Profit',
    hi: 'नेट प्रॉफिट',
    hinglish: 'Net Profit',
    gu: 'નેટ પ્રોફિટ',
    mr: 'नेट प्रॉफिट',
    mwr: 'नेट प्रॉफिट',
  },
  'pl.download': {
    en: 'Download Audit Report',
    hi: 'ऑडिट रिपोर्ट डाउनलोड करें',
    hinglish: 'Audit Report download karein',
    gu: 'ઓડિટ રિપોર્ટ ડાઉનલોડ કરો',
    mr: 'ऑडिट रिपोर्ट डाउनलोड करा',
    mwr: 'ऑडिट रिपोर्ट डाउनलोड करो',
  },
  'cta.heading': {
    en: 'Numbers you can trust.',
    hi: 'ऐसे नंबर जिन पर आप भरोसा कर सकें।',
    hinglish: 'Aise numbers jin par aap bharosa kar sako.',
    gu: 'એવા નંબર જેના પર તમે ભરોસો કરી શકો.',
    mr: 'असे आकडे ज्यांवर तुम्ही विश्वास ठेवू शकता.',
    mwr: 'इसा नंबर जिण पर आप भरोसो कर सको।',
  },
  'cta.subtitle': {
    en: 'Take the first step towards perfect financial management. Switch to Mera Dhanda Accounting today.',
    hi: 'परफेक्ट फाइनेंशियल मैनेजमेंट की ओर पहला कदम उठाएं। आज ही Mera Dhanda Accounting पर स्विच करें।',
    hinglish: 'Perfect financial management ki taraf pehla kadam uthao. Aaj hi Mera Dhanda Accounting par switch karo.',
    gu: 'પરફેક્ટ ફાઇનાન્શિયલ મેનેજમેન્ટ તરફ પહેલું પગલું ભરો. આજે જ Mera Dhanda Accounting પર સ્વિચ કરો.',
    mr: 'परफेक्ट फायनान्शियल मॅनेजमेंटच्या दिशेने पहिले पाऊल टाका. आजच Mera Dhanda Accounting वर स्विच करा.',
    mwr: 'परफेक्ट फाइनेंशियल मैनेजमेंट कानी पैलो कदम उठाओ। आज ई Mera Dhanda Accounting पर स्विच करो।',
  },
  'cta.primary': {
    en: 'Start Free Trial',
    hi: 'फ़्री ट्रायल शुरू करें',
    hinglish: 'Free Trial shuru karein',
    gu: 'ફ્રી ટ્રાયલ શરૂ કરો',
    mr: 'मोफत ट्रायल सुरू करा',
    mwr: 'फ्री ट्रायल चालू करो',
  },
  'cta.secondary': {
    en: 'Request a Demo',
    hi: 'डेमो रिक्वेस्ट करें',
    hinglish: 'Demo request karein',
    gu: 'ડેમો રિક્વેસ્ટ કરો',
    mr: 'डेमोची विनंती करा',
    mwr: 'डेमो रिक्वेस्ट करो',
  },
};

export default function Accounting() {
  const t = useT(STRINGS);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: Landmark,
      titleKey: 'feat.bank.title',
      descKey: 'feat.bank.desc',
      color: "text-themeGreen-600 bg-themeGreen-50"
    },
    {
      icon: Calculator,
      titleKey: 'feat.tally.title',
      descKey: 'feat.tally.desc',
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: FileText,
      titleKey: 'feat.reports.title',
      descKey: 'feat.reports.desc',
      color: "text-teal-600 bg-teal-50"
    },
    {
      icon: RefreshCw,
      titleKey: 'feat.ledger.title',
      descKey: 'feat.ledger.desc',
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: ShieldCheck,
      titleKey: 'feat.expense.title',
      descKey: 'feat.expense.desc',
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      icon: PieChart,
      titleKey: 'feat.tax.title',
      descKey: 'feat.tax.desc',
      color: "text-pink-600 bg-pink-50"
    },
    {
      icon: Zap,
      titleKey: 'feat.multi.title',
      descKey: 'feat.multi.desc',
      color: "text-cyan-600 bg-cyan-50"
    },
    {
      icon: Wallet,
      titleKey: 'feat.payment.title',
      descKey: 'feat.payment.desc',
      color: "text-teal-600 bg-teal-50"
    }
  ];

  const phases = [
    { stepKey: 'phase.entry.step', descKey: 'phase.entry.desc' },
    { stepKey: 'phase.cat.step', descKey: 'phase.cat.desc' },
    { stepKey: 'phase.recon.step', descKey: 'phase.recon.desc' },
    { stepKey: 'phase.insights.step', descKey: 'phase.insights.desc' }
  ];

  const plStats = [
    { labelKey: 'pl.netRevenue', val: "₹1,24,00,000", p: 100, c: "bg-teal-500" },
    { labelKey: 'pl.directCosts', val: "₹42,00,000", p: 34, c: "bg-red-400" },
    { labelKey: 'pl.operatingExp', val: "₹28,00,000", p: 22, c: "bg-orange-400" },
    { labelKey: 'pl.netProfit', val: "₹54,00,000", p: 44, c: "bg-themeGreen-500" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-teal-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                {t('hero.badge')}
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                {t('hero.title.pre')}<span className="text-teal-600 italic">{t('hero.title.accent')}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold shadow-lg shadow-teal-200 hover:bg-teal-700 transition-all flex items-center gap-2 group">
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  {t('hero.cta.secondary')}
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-teal-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img
                  src="/images/advanced_accounting_preview_1778579455482.png"
                  alt={t('hero.img.alt')}
                  className="rounded-2xl"
                />

                {/* Profit/Loss Snapshot UI */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block w-64"
                >
                   <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('hero.card.monthlyProfit')}</p>
                      <TrendingUp className="text-teal-500" size={16} />
                   </div>
                   <p className="text-3xl font-black text-gray-900">₹4,82,450</p>
                   <div className="flex items-center gap-1 text-teal-600 text-xs font-bold mt-2">
                      <ArrowUpRight size={14} />
                      <span>{t('hero.card.vsLastMonth')}</span>
                   </div>
                   <div className="mt-4 pt-4 border-t border-gray-50 grid grid-cols-2 gap-4">
                      <div>
                         <p className="text-[10px] text-gray-400 uppercase">{t('hero.card.income')}</p>
                         <p className="text-xs font-bold">₹12.4L</p>
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-400 uppercase">{t('hero.card.expense')}</p>
                         <p className="text-xs font-bold">₹7.6L</p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Modules */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">{t('features.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('features.subheading')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Health Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">{t('health.heading.pre')}<span className="text-teal-400 italic">{t('health.heading.accent')}</span></h2>

                 <div className="space-y-12">
                    {phases.map((phase, i) => (
                      <div key={i} className="flex gap-8 relative group">
                         <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold group-hover:bg-teal-500 group-hover:text-black transition-all">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-px h-16 bg-white/10 mt-4 group-hover:bg-teal-500/30 transition-colors" />}
                         </div>
                         <div>
                            <h4 className="text-2xl font-bold mb-2 uppercase tracking-wide">{t(phase.stepKey)}</h4>
                            <p className="text-gray-400 leading-relaxed">{t(phase.descKey)}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-teal-500/10 blur-[150px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 lg:p-14">
                    <div className="flex items-center justify-between mb-12">
                       <h3 className="text-2xl font-bold">{t('pl.title')}</h3>
                       <TrendingUp className="text-teal-500" />
                    </div>

                    <div className="space-y-8">
                       {plStats.map((stat, i) => (
                         <div key={i}>
                            <div className="flex justify-between text-sm font-bold mb-3">
                               <span className="text-gray-400 uppercase tracking-widest text-[10px]">{t(stat.labelKey)}</span>
                               <span>{stat.val}</span>
                            </div>
                            <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                               <motion.div
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${stat.p}%` }}
                                 transition={{ duration: 1.2, delay: i * 0.1 }}
                                 className={`h-full ${stat.c} rounded-full`}
                               />
                            </div>
                         </div>
                       ))}
                    </div>

                    <button className="mt-12 w-full py-4 bg-teal-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-700 transition-all">
                       {t('pl.download')}
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">{t('cta.heading')}</h2>
           <p className="text-xl text-gray-600 mb-12">{t('cta.subtitle')}</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-teal-600 text-white rounded-2xl font-black text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-100">
                 {t('cta.primary')}
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 {t('cta.secondary')}
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
