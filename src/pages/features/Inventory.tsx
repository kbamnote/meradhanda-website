import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Tags,
  RefreshCw,
  Bell,
  Warehouse,
  QrCode,
  Truck,
  ArrowDownToLine,
  ShieldCheck,
  History
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': {
    en: 'Precision Inventory Control',
    hi: 'सटीक इन्वेंटरी कंट्रोल',
    hinglish: 'Precision Inventory Control',
    gu: 'ચોક્કસ ઇન્વેન્ટરી કંટ્રોલ',
    mr: 'अचूक इन्व्हेंटरी कंट्रोल',
    mwr: 'सटीक इन्वेंटरी कंट्रोल',
  },
  'hero.title.pre': {
    en: 'Smart Stock, ',
    hi: 'स्मार्ट स्टॉक, ',
    hinglish: 'Smart Stock, ',
    gu: 'સ્માર્ટ સ્ટોક, ',
    mr: 'स्मार्ट स्टॉक, ',
    mwr: 'स्मार्ट स्टॉक, ',
  },
  'hero.title.accent': {
    en: 'Zero Waste.',
    hi: 'शून्य बर्बादी।',
    hinglish: 'Zero Waste.',
    gu: 'શૂન્ય બગાડ.',
    mr: 'शून्य अपव्यय.',
    mwr: 'जीरो बर्बादी।',
  },
  'hero.desc': {
    en: 'Never lose track of a single SKU. From multi-warehouse transfers to automated low-stock alerts, Mera Dhanda gives you total visibility over your physical assets.',
    hi: 'एक भी SKU का ट्रैक कभी न खोएं। मल्टी-वेयरहाउस ट्रांसफर से लेकर ऑटोमेटेड लो-स्टॉक अलर्ट तक, Mera Dhanda आपको अपनी फिजिकल एसेट्स पर पूरी विजिबिलिटी देता है।',
    hinglish: 'Ek bhi SKU ka track kabhi mat khona. Multi-warehouse transfers se le kar automated low-stock alerts tak, Mera Dhanda aapko apne physical assets par poori visibility deta hai.',
    gu: 'એક પણ SKU નો ટ્રેક ક્યારેય ન ગુમાવો. મલ્ટિ-વેરહાઉસ ટ્રાન્સફરથી લઈને ઓટોમેટેડ લો-સ્ટોક એલર્ટ સુધી, Mera Dhanda તમને તમારી ફિઝિકલ એસેટ્સ પર સંપૂર્ણ વિઝિબિલિટી આપે છે.',
    mr: 'एकही SKU चा माग कधीही हरवू नका. मल्टी-वेअरहाउस ट्रान्सफरपासून ते ऑटोमेटेड लो-स्टॉक अलर्टपर्यंत, Mera Dhanda तुम्हाला तुमच्या फिजिकल अॅसेट्सवर संपूर्ण व्हिजिबिलिटी देते.',
    mwr: 'एक भी SKU रो ट्रैक कदी मत खोवो। मल्टी-वेयरहाउस ट्रांसफर सूं ले'+'र ऑटोमेटेड लो-स्टॉक अलर्ट तांई, Mera Dhanda थांनै थारी फिजिकल एसेट्स पर पूरी विजिबिलिटी देवै।',
  },
  'hero.cta.manage': {
    en: 'Manage Your Stock',
    hi: 'अपना स्टॉक मैनेज करें',
    hinglish: 'Apna stock manage karein',
    gu: 'તમારો સ્ટોક મેનેજ કરો',
    mr: 'तुमचा स्टॉक मॅनेज करा',
    mwr: 'थारो स्टॉक मैनेज करो',
  },
  'hero.cta.walkthrough': {
    en: 'Watch Walkthrough',
    hi: 'वॉकथ्रू देखें',
    hinglish: 'Walkthrough dekhein',
    gu: 'વોકથ્રૂ જુઓ',
    mr: 'वॉकथ्रू पाहा',
    mwr: 'वॉकथ्रू देखो',
  },
  'hero.img.alt': {
    en: 'Inventory Dashboard',
    hi: 'इन्वेंटरी डैशबोर्ड',
    hinglish: 'Inventory Dashboard',
    gu: 'ઇન્વેન્ટરી ડેશબોર્ડ',
    mr: 'इन्व्हेंटरी डॅशबोर्ड',
    mwr: 'इन्वेंटरी डैशबोर्ड',
  },
  'hero.alert.label': {
    en: 'Low Stock Alert',
    hi: 'लो स्टॉक अलर्ट',
    hinglish: 'Low Stock Alert',
    gu: 'લો સ્ટોક એલર્ટ',
    mr: 'लो स्टॉक अलर्ट',
    mwr: 'लो स्टॉक अलर्ट',
  },
  'hero.alert.product': {
    en: 'Premium Cotton Fabric',
    hi: 'प्रीमियम कॉटन फैब्रिक',
    hinglish: 'Premium Cotton Fabric',
    gu: 'પ્રીમિયમ કોટન ફેબ્રિક',
    mr: 'प्रीमियम कॉटन फॅब्रिक',
    mwr: 'प्रीमियम कॉटन फैब्रिक',
  },
  'hero.alert.stock': {
    en: 'Stock: 12 meters (Min: 50m)',
    hi: 'स्टॉक: 12 मीटर (मिन: 50m)',
    hinglish: 'Stock: 12 meters (Min: 50m)',
    gu: 'સ્ટોક: 12 મીટર (Min: 50m)',
    mr: 'स्टॉक: 12 मीटर (Min: 50m)',
    mwr: 'स्टॉक: 12 मीटर (Min: 50m)',
  },
  'hero.alert.reorder': {
    en: 'Auto-Reorder',
    hi: 'ऑटो-रीऑर्डर',
    hinglish: 'Auto-Reorder',
    gu: 'ઓટો-રીઓર્ડર',
    mr: 'ऑटो-रीऑर्डर',
    mwr: 'ऑटो-रीऑर्डर',
  },
  'grid.heading': {
    en: 'Master your materials.',
    hi: 'अपने मटेरियल पर महारत पाएं।',
    hinglish: 'Apne materials par master bano.',
    gu: 'તમારા મટિરિયલ પર પ્રભુત્વ મેળવો.',
    mr: 'तुमच्या मटेरियलवर प्रभुत्व मिळवा.',
    mwr: 'थारा मटेरियल पर महारत पावो।',
  },
  'grid.sub': {
    en: 'A feature-rich suite designed to handle the complexity of modern business supply chains.',
    hi: 'एक फीचर-रिच सूट जो आधुनिक बिज़नेस सप्लाई चेन की जटिलता को संभालने के लिए डिज़ाइन किया गया है।',
    hinglish: 'Ek feature-rich suite jo modern business supply chains ki complexity handle karne ke liye design kiya gaya hai.',
    gu: 'આધુનિક બિઝનેસ સપ્લાય ચેઇનની જટિલતા સંભાળવા માટે ડિઝાઇન કરેલ ફીચર-રિચ સ્યૂટ.',
    mr: 'आधुनिक बिझनेस सप्लाय चेनची गुंतागुंत हाताळण्यासाठी डिझाइन केलेला फीचर-रिच सूट.',
    mwr: 'एक फीचर-रिच सूट जको आधुनिक बिज़नेस सप्लाई चेन री जटिलता नै संभालण खातर बणायो गयो है।',
  },
  'feat.warehouse.title': {
    en: 'Multi-Warehouse',
    hi: 'मल्टी-वेयरहाउस',
    hinglish: 'Multi-Warehouse',
    gu: 'મલ્ટિ-વેરહાઉસ',
    mr: 'मल्टी-वेअरहाउस',
    mwr: 'मल्टी-वेयरहाउस',
  },
  'feat.warehouse.desc': {
    en: 'Track inventory across multiple locations. Move stock between branches with ease.',
    hi: 'कई लोकेशन पर इन्वेंटरी ट्रैक करें। ब्रांच के बीच आसानी से स्टॉक मूव करें।',
    hinglish: 'Multiple locations par inventory track karein. Branches ke beech aasaani se stock move karein.',
    gu: 'અનેક લોકેશન પર ઇન્વેન્ટરી ટ્રેક કરો. બ્રાન્ચ વચ્ચે સરળતાથી સ્ટોક ખસેડો.',
    mr: 'अनेक लोकेशनवर इन्व्हेंटरी ट्रॅक करा. ब्रँचमध्ये सहज स्टॉक हलवा.',
    mwr: 'घणी लोकेशन पर इन्वेंटरी ट्रैक करो। ब्रांच रै बिचाळै आसानी सूं स्टॉक मूव करो।',
  },
  'feat.batch.title': {
    en: 'Batch & Expiry',
    hi: 'बैच और एक्सपायरी',
    hinglish: 'Batch & Expiry',
    gu: 'બેચ અને એક્સપાયરી',
    mr: 'बॅच आणि एक्सपायरी',
    mwr: 'बैच अर एक्सपायरी',
  },
  'feat.batch.desc': {
    en: 'Manage perishables or sensitive materials with batch-level tracking and expiry alerts.',
    hi: 'बैच-लेवल ट्रैकिंग और एक्सपायरी अलर्ट के साथ खराब होने वाले या संवेदनशील मटेरियल को मैनेज करें।',
    hinglish: 'Batch-level tracking aur expiry alerts ke saath perishable ya sensitive materials manage karein.',
    gu: 'બેચ-લેવલ ટ્રેકિંગ અને એક્સપાયરી એલર્ટ સાથે નાશવંત કે સંવેદનશીલ મટિરિયલ મેનેજ કરો.',
    mr: 'बॅच-लेव्हल ट्रॅकिंग आणि एक्सपायरी अलर्टसह नाशवंत किंवा संवेदनशील मटेरियल मॅनेज करा.',
    mwr: 'बैच-लेवल ट्रैकिंग अर एक्सपायरी अलर्ट रै साथै खराब होवण आळा या संवेदनशील मटेरियल नै मैनेज करो।',
  },
  'feat.barcode.title': {
    en: 'Barcode Support',
    hi: 'बारकोड सपोर्ट',
    hinglish: 'Barcode Support',
    gu: 'બારકોડ સપોર્ટ',
    mr: 'बारकोड सपोर्ट',
    mwr: 'बारकोड सपोर्ट',
  },
  'feat.barcode.desc': {
    en: 'Speed up inwarding and billing with full barcode/QR code scanner integration.',
    hi: 'पूरे बारकोड/QR कोड स्कैनर इंटीग्रेशन के साथ इनवर्डिंग और बिलिंग को तेज़ करें।',
    hinglish: 'Poore barcode/QR code scanner integration ke saath inwarding aur billing fast karein.',
    gu: 'સંપૂર્ણ બારકોડ/QR કોડ સ્કેનર ઇન્ટિગ્રેશન સાથે ઇનવર્ડિંગ અને બિલિંગ ઝડપી કરો.',
    mr: 'पूर्ण बारकोड/QR कोड स्कॅनर इंटिग्रेशनसह इनवर्डिंग आणि बिलिंग वेगवान करा.',
    mwr: 'पूरा बारकोड/QR कोड स्कैनर इंटीग्रेशन रै साथै इनवर्डिंग अर बिलिंग नै तेज करो।',
  },
  'feat.autodeduct.title': {
    en: 'Auto-Deduction',
    hi: 'ऑटो-डिडक्शन',
    hinglish: 'Auto-Deduction',
    gu: 'ઓટો-ડિડક્શન',
    mr: 'ऑटो-डिडक्शन',
    mwr: 'ऑटो-डिडक्शन',
  },
  'feat.autodeduct.desc': {
    en: 'Stock levels update instantly as invoices are generated or raw materials used in production.',
    hi: 'जैसे ही इनवॉइस बनते हैं या प्रोडक्शन में रॉ मटेरियल इस्तेमाल होता है, स्टॉक लेवल तुरंत अपडेट हो जाते हैं।',
    hinglish: 'Jaise hi invoices generate hote hain ya production mein raw materials use hote hain, stock levels turant update ho jaate hain.',
    gu: 'જેવા ઇન્વોઇસ બને કે પ્રોડક્શનમાં રો મટિરિયલ વપરાય, સ્ટોક લેવલ તરત અપડેટ થાય છે.',
    mr: 'इन्व्हॉइस तयार होताच किंवा प्रोडक्शनमध्ये रॉ मटेरियल वापरताच स्टॉक लेव्हल लगेच अपडेट होते.',
    mwr: 'जैड़ै ही इनवॉइस बणै या प्रोडक्शन में रॉ मटेरियल काम आवै, स्टॉक लेवल तुरंत अपडेट हो जावै।',
  },
  'feat.supplier.title': {
    en: 'Supplier Portal',
    hi: 'सप्लायर पोर्टल',
    hinglish: 'Supplier Portal',
    gu: 'સપ્લાયર પોર્ટલ',
    mr: 'सप्लायर पोर्टल',
    mwr: 'सप्लायर पोर्टल',
  },
  'feat.supplier.desc': {
    en: 'Manage all your suppliers in one place. Send POs and track lead times automatically.',
    hi: 'अपने सभी सप्लायर्स को एक ही जगह मैनेज करें। PO भेजें और लीड टाइम अपने आप ट्रैक करें।',
    hinglish: 'Apne saare suppliers ko ek jagah manage karein. POs bhejein aur lead times automatically track karein.',
    gu: 'તમારા બધા સપ્લાયર એક જગ્યાએ મેનેજ કરો. PO મોકલો અને લીડ ટાઇમ આપમેળે ટ્રેક કરો.',
    mr: 'तुमचे सर्व सप्लायर एकाच ठिकाणी मॅनेज करा. PO पाठवा आणि लीड टाइम आपोआप ट्रॅक करा.',
    mwr: 'थारा सगळा सप्लायर्स नै एक ई जागां मैनेज करो। PO भेजो अर लीड टाइम अपणै आप ट्रैक करो।',
  },
  'feat.inward.title': {
    en: 'Stock inwarding',
    hi: 'स्टॉक इनवर्डिंग',
    hinglish: 'Stock inwarding',
    gu: 'સ્ટોક ઇનવર્ડિંગ',
    mr: 'स्टॉक इनवर्डिंग',
    mwr: 'स्टॉक इनवर्डिंग',
  },
  'feat.inward.desc': {
    en: 'Easily log new purchases and bulk-import inventory from Excel sheets.',
    hi: 'नई परचेज़ आसानी से लॉग करें और Excel शीट से इन्वेंटरी बल्क-इम्पोर्ट करें।',
    hinglish: 'Nayi purchases aasaani se log karein aur Excel sheets se inventory bulk-import karein.',
    gu: 'નવી ખરીદી સરળતાથી લોગ કરો અને Excel શીટમાંથી ઇન્વેન્ટરી બલ્ક-ઇમ્પોર્ટ કરો.',
    mr: 'नवीन खरेदी सहज लॉग करा आणि Excel शीटमधून इन्व्हेंटरी बल्क-इम्पोर्ट करा.',
    mwr: 'नई परचेज़ आसानी सूं लॉग करो अर Excel शीट सूं इन्वेंटरी बल्क-इम्पोर्ट करो।',
  },
  'feat.ledger.title': {
    en: 'Stock Ledger',
    hi: 'स्टॉक लेजर',
    hinglish: 'Stock Ledger',
    gu: 'સ્ટોક લેજર',
    mr: 'स्टॉक लेजर',
    mwr: 'स्टॉक लेजर',
  },
  'feat.ledger.desc': {
    en: 'A complete historical log of every single movement for every item. Total accountability.',
    hi: 'हर आइटम की हर एक मूवमेंट का पूरा हिस्टोरिकल लॉग। पूरी जवाबदेही।',
    hinglish: 'Har item ki har movement ka poora historical log. Total accountability.',
    gu: 'દરેક આઇટમની દરેક મૂવમેન્ટનો સંપૂર્ણ ઐતિહાસિક લોગ. સંપૂર્ણ જવાબદારી.',
    mr: 'प्रत्येक आयटमच्या प्रत्येक हालचालीचा संपूर्ण ऐतिहासिक लॉग. संपूर्ण जबाबदारी.',
    mwr: 'हरेक आइटम री हरेक मूवमेंट रो पूरो हिस्टोरिकल लॉग। पूरी जवाबदेही।',
  },
  'feat.audit.title': {
    en: 'Audit Controls',
    hi: 'ऑडिट कंट्रोल',
    hinglish: 'Audit Controls',
    gu: 'ઓડિટ કંટ્રોલ',
    mr: 'ऑडिट कंट्रोल',
    mwr: 'ऑडिट कंट्रोल',
  },
  'feat.audit.desc': {
    en: 'Perform partial or full audits to reconcile physical stock with digital records.',
    hi: 'फिजिकल स्टॉक को डिजिटल रिकॉर्ड से मिलाने के लिए आंशिक या पूर्ण ऑडिट करें।',
    hinglish: 'Physical stock ko digital records ke saath reconcile karne ke liye partial ya full audits karein.',
    gu: 'ફિઝિકલ સ્ટોકને ડિજિટલ રેકોર્ડ સાથે મેળવવા આંશિક કે સંપૂર્ણ ઓડિટ કરો.',
    mr: 'फिजिकल स्टॉक डिजिटल रेकॉर्डशी जुळवण्यासाठी आंशिक किंवा पूर्ण ऑडिट करा.',
    mwr: 'फिजिकल स्टॉक नै डिजिटल रिकॉर्ड सूं मिलावण खातर आंशिक या पूरो ऑडिट करो।',
  },
  'cycle.heading.pre': {
    en: 'Effortless stock ',
    hi: 'आसान स्टॉक ',
    hinglish: 'Aasaan stock ',
    gu: 'સરળ સ્ટોક ',
    mr: 'सहज स्टॉक ',
    mwr: 'सोरो स्टॉक ',
  },
  'cycle.heading.accent': {
    en: 'Lifecycle.',
    hi: 'लाइफसाइकल।',
    hinglish: 'Lifecycle.',
    gu: 'લાઇફસાઇકલ.',
    mr: 'लाइफसायकल.',
    mwr: 'लाइफसाइकल।',
  },
  'cycle.inward.step': {
    en: 'Stock Inwarding',
    hi: 'स्टॉक इनवर्डिंग',
    hinglish: 'Stock Inwarding',
    gu: 'સ્ટોક ઇનવર્ડિંગ',
    mr: 'स्टॉक इनवर्डिंग',
    mwr: 'स्टॉक इनवर्डिंग',
  },
  'cycle.inward.desc': {
    en: 'Scan items as they arrive. Verify against POs and update warehouse quantities instantly.',
    hi: 'आइटम आते ही उन्हें स्कैन करें। PO के साथ वेरिफाई करें और वेयरहाउस क्वांटिटी तुरंत अपडेट करें।',
    hinglish: 'Items aate hi unhe scan karein. POs ke saath verify karein aur warehouse quantities turant update karein.',
    gu: 'આઇટમ આવે કે તરત સ્કેન કરો. PO સામે વેરિફાય કરો અને વેરહાઉસ ક્વોન્ટિટી તરત અપડેટ કરો.',
    mr: 'आयटम येताच ते स्कॅन करा. PO शी पडताळणी करा आणि वेअरहाउस क्वांटिटी लगेच अपडेट करा.',
    mwr: 'आइटम आवतां ही उणनै स्कैन करो। PO रै साथै वेरिफाई करो अर वेयरहाउस क्वांटिटी तुरंत अपडेट करो।',
  },
  'cycle.cat.step': {
    en: 'Categorization',
    hi: 'कैटेगराइज़ेशन',
    hinglish: 'Categorization',
    gu: 'કેટેગરાઇઝેશન',
    mr: 'कॅटेगरायझेशन',
    mwr: 'कैटेगराइज़ेशन',
  },
  'cycle.cat.desc': {
    en: 'Organize by variants (color, size) or batches. Assign shelf locations for faster picking.',
    hi: 'वेरिएंट (कलर, साइज़) या बैच के हिसाब से ऑर्गनाइज़ करें। तेज़ पिकिंग के लिए शेल्फ लोकेशन असाइन करें।',
    hinglish: 'Variants (color, size) ya batches ke hisaab se organize karein. Faster picking ke liye shelf locations assign karein.',
    gu: 'વેરિઅન્ટ (કલર, સાઇઝ) કે બેચ પ્રમાણે ગોઠવો. ઝડપી પિકિંગ માટે શેલ્ફ લોકેશન અસાઇન કરો.',
    mr: 'व्हेरिअंट (कलर, साइज) किंवा बॅचनुसार आयोजित करा. वेगवान पिकिंगसाठी शेल्फ लोकेशन असाइन करा.',
    mwr: 'वेरिएंट (कलर, साइज़) या बैच रै हिसाब सूं ऑर्गनाइज़ करो। तेज पिकिंग खातर शेल्फ लोकेशन असाइन करो।',
  },
  'cycle.move.step': {
    en: 'Stock Movement',
    hi: 'स्टॉक मूवमेंट',
    hinglish: 'Stock Movement',
    gu: 'સ્ટોક મૂવમેન્ટ',
    mr: 'स्टॉक मूव्हमेंट',
    mwr: 'स्टॉक मूवमेंट',
  },
  'cycle.move.desc': {
    en: 'Track internal transfers or consumption in production modules without paper logs.',
    hi: 'पेपर लॉग के बिना प्रोडक्शन मॉड्यूल में इंटरनल ट्रांसफर या कंजम्पशन ट्रैक करें।',
    hinglish: 'Paper logs ke bina production modules mein internal transfers ya consumption track karein.',
    gu: 'પેપર લોગ વગર પ્રોડક્શન મોડ્યૂલમાં ઇન્ટરનલ ટ્રાન્સફર કે કન્ઝમ્પશન ટ્રેક કરો.',
    mr: 'पेपर लॉगशिवाय प्रोडक्शन मॉड्यूलमध्ये इंटरनल ट्रान्सफर किंवा वापर ट्रॅक करा.',
    mwr: 'पेपर लॉग रै बिना प्रोडक्शन मॉड्यूल में इंटरनल ट्रांसफर या खपत ट्रैक करो।',
  },
  'cycle.alerts.step': {
    en: 'Automated Alerts',
    hi: 'ऑटोमेटेड अलर्ट',
    hinglish: 'Automated Alerts',
    gu: 'ઓટોમેટેડ એલર્ટ',
    mr: 'ऑटोमेटेड अलर्ट',
    mwr: 'ऑटोमेटेड अलर्ट',
  },
  'cycle.alerts.desc': {
    en: 'Mera Dhanda notifies you before you run out, suggesting re-order quantities based on sales.',
    hi: 'स्टॉक खत्म होने से पहले Mera Dhanda आपको नोटिफाई करता है और सेल्स के आधार पर री-ऑर्डर क्वांटिटी सुझाता है।',
    hinglish: 'Stock khatam hone se pehle Mera Dhanda aapko notify karta hai aur sales ke basis par re-order quantities suggest karta hai.',
    gu: 'સ્ટોક ખૂટે તે પહેલાં Mera Dhanda તમને નોટિફાય કરે છે અને સેલ્સના આધારે રી-ઓર્ડર ક્વોન્ટિટી સૂચવે છે.',
    mr: 'स्टॉक संपण्याआधी Mera Dhanda तुम्हाला सूचित करते आणि सेल्सच्या आधारे री-ऑर्डर क्वांटिटी सुचवते.',
    mwr: 'स्टॉक खतम होवण सूं पैलां Mera Dhanda थांनै नोटिफाई करै अर सेल्स रै आधार पर री-ऑर्डर क्वांटिटी सुझावै।',
  },
  'cycle.sales.step': {
    en: 'Sales Deduction',
    hi: 'सेल्स डिडक्शन',
    hinglish: 'Sales Deduction',
    gu: 'સેલ્સ ડિડક્શન',
    mr: 'सेल्स डिडक्शन',
    mwr: 'सेल्स डिडक्शन',
  },
  'cycle.sales.desc': {
    en: 'Every invoice sold automatically decrements the exact stock level, including kit items.',
    hi: 'हर बिकी इनवॉइस अपने आप सटीक स्टॉक लेवल घटा देती है, किट आइटम सहित।',
    hinglish: 'Har bechi gayi invoice automatically exact stock level kam kar deti hai, kit items sahit.',
    gu: 'દરેક વેચાયેલ ઇન્વોઇસ આપમેળે ચોક્કસ સ્ટોક લેવલ ઘટાડે છે, કિટ આઇટમ સહિત.',
    mr: 'विकलेले प्रत्येक इन्व्हॉइस आपोआप अचूक स्टॉक लेव्हल कमी करते, किट आयटमसह.',
    mwr: 'बिकी हरेक इनवॉइस अपणै आप सटीक स्टॉक लेवल घटा देवै, किट आइटम सहित।',
  },
  'wh.a.name': {
    en: 'Warehouse A',
    hi: 'वेयरहाउस A',
    hinglish: 'Warehouse A',
    gu: 'વેરહાઉસ A',
    mr: 'वेअरहाउस A',
    mwr: 'वेयरहाउस A',
  },
  'wh.a.stock': {
    en: 'High',
    hi: 'हाई',
    hinglish: 'High',
    gu: 'હાઈ',
    mr: 'हाय',
    mwr: 'हाई',
  },
  'wh.b.name': {
    en: 'Warehouse B',
    hi: 'वेयरहाउस B',
    hinglish: 'Warehouse B',
    gu: 'વેરહાઉસ B',
    mr: 'वेअरहाउस B',
    mwr: 'वेयरहाउस B',
  },
  'wh.b.stock': {
    en: 'Med',
    hi: 'मीडियम',
    hinglish: 'Med',
    gu: 'મીડિયમ',
    mr: 'मीडियम',
    mwr: 'मीडियम',
  },
  'wh.outlet.name': {
    en: 'Main Outlet',
    hi: 'मेन आउटलेट',
    hinglish: 'Main Outlet',
    gu: 'મેઇન આઉટલેટ',
    mr: 'मेन आउटलेट',
    mwr: 'मेन आउटलेट',
  },
  'wh.outlet.stock': {
    en: 'Low',
    hi: 'लो',
    hinglish: 'Low',
    gu: 'લો',
    mr: 'लो',
    mwr: 'लो',
  },
  'wh.qc.name': {
    en: 'QC Floor',
    hi: 'QC फ्लोर',
    hinglish: 'QC Floor',
    gu: 'QC ફ્લોર',
    mr: 'QC फ्लोर',
    mwr: 'QC फ्लोर',
  },
  'wh.qc.stock': {
    en: 'In-Review',
    hi: 'इन-रिव्यू',
    hinglish: 'In-Review',
    gu: 'ઇન-રિવ્યૂ',
    mr: 'इन-रिव्ह्यू',
    mwr: 'इन-रिव्यू',
  },
  'cta.heading': {
    en: 'Stop guessing. Start knowing.',
    hi: 'अंदाज़ा लगाना बंद करें। जानना शुरू करें।',
    hinglish: 'Andaaza lagaana band karein. Jaanna shuru karein.',
    gu: 'અટકળ બંધ કરો. જાણવાનું શરૂ કરો.',
    mr: 'अंदाज लावणे थांबवा. जाणून घेणे सुरू करा.',
    mwr: 'अंदाजो लगावणो बंद करो। जाणणो चालू करो।',
  },
  'cta.desc': {
    en: 'Take the first step towards a perfectly optimized inventory. Start your free trial today.',
    hi: 'परफेक्टली ऑप्टिमाइज़्ड इन्वेंटरी की ओर पहला कदम उठाएं। आज ही अपना फ्री ट्रायल शुरू करें।',
    hinglish: 'Perfectly optimized inventory ki taraf pehla kadam uthaayein. Aaj hi apna free trial shuru karein.',
    gu: 'સંપૂર્ણ ઓપ્ટિમાઇઝ્ડ ઇન્વેન્ટરી તરફ પહેલું પગલું ભરો. આજે જ તમારી ફ્રી ટ્રાયલ શરૂ કરો.',
    mr: 'परफेक्टली ऑप्टिमाइझ्ड इन्व्हेंटरीकडे पहिले पाऊल टाका. आजच तुमची फ्री ट्रायल सुरू करा.',
    mwr: 'परफेक्ट ऑप्टिमाइज़्ड इन्वेंटरी कांनी पैलो कदम उठावो। आज ई थारो फ्री ट्रायल चालू करो।',
  },
  'cta.trial': {
    en: 'Start Free Trial',
    hi: 'फ्री ट्रायल शुरू करें',
    hinglish: 'Free trial shuru karein',
    gu: 'ફ્રી ટ્રાયલ શરૂ કરો',
    mr: 'फ्री ट्रायल सुरू करा',
    mwr: 'फ्री ट्रायल चालू करो',
  },
  'cta.demo': {
    en: 'Request a Demo',
    hi: 'डेमो रिक्वेस्ट करें',
    hinglish: 'Demo request karein',
    gu: 'ડેમો રિક્વેસ્ટ કરો',
    mr: 'डेमो रिक्वेस्ट करा',
    mwr: 'डेमो रिक्वेस्ट करो',
  },
};

export default function Inventory() {
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

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-teal-50/50 to-white">
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
                {t('hero.desc')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold shadow-lg hover:bg-teal-700 transition-all flex items-center gap-2 group">
                  {t('hero.cta.manage')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  {t('hero.cta.walkthrough')}
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
                  src="/images/inventory_management_preview_1778577667574.png" 
                  alt={t('hero.img.alt')}
                  className="rounded-2xl"
                />
                
                {/* Real-time Inventory Alert UI */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl border border-red-50 hidden md:block w-56"
                >
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                         <Bell size={18} className="animate-bounce" />
                      </div>
                      <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{t('hero.alert.label')}</p>
                   </div>
                   <p className="text-sm font-black text-gray-900">{t('hero.alert.product')}</p>
                   <p className="text-xs text-gray-500 mt-1">{t('hero.alert.stock')}</p>
                   <button className="mt-3 w-full py-2 bg-gray-900 text-white rounded-lg text-[10px] font-bold">{t('hero.alert.reorder')}</button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Inventory Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">{t('grid.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('grid.sub')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Warehouse,
                titleKey: "feat.warehouse.title",
                descKey: "feat.warehouse.desc",
                color: "text-themeGreen-600 bg-themeGreen-50"
              },
              {
                icon: Tags,
                titleKey: "feat.batch.title",
                descKey: "feat.batch.desc",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: QrCode,
                titleKey: "feat.barcode.title",
                descKey: "feat.barcode.desc",
                color: "text-teal-600 bg-teal-50"
              },
              {
                icon: RefreshCw,
                titleKey: "feat.autodeduct.title",
                descKey: "feat.autodeduct.desc",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: Truck,
                titleKey: "feat.supplier.title",
                descKey: "feat.supplier.desc",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: ArrowDownToLine,
                titleKey: "feat.inward.title",
                descKey: "feat.inward.desc",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: History,
                titleKey: "feat.ledger.title",
                descKey: "feat.ledger.desc",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: ShieldCheck,
                titleKey: "feat.audit.title",
                descKey: "feat.audit.desc",
                color: "text-teal-600 bg-teal-50"
              }
            ].map((item, i) => (
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

      {/* Content Expansion: The Inventory Cycle */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">{t('cycle.heading.pre')}<span className="text-teal-400 italic">{t('cycle.heading.accent')}</span></h2>

                 <div className="space-y-8">
                    {[
                      { stepKey: "cycle.inward.step", descKey: "cycle.inward.desc" },
                      { stepKey: "cycle.cat.step", descKey: "cycle.cat.desc" },
                      { stepKey: "cycle.move.step", descKey: "cycle.move.desc" },
                      { stepKey: "cycle.alerts.step", descKey: "cycle.alerts.desc" },
                      { stepKey: "cycle.sales.step", descKey: "cycle.sales.desc" }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-sm font-bold border-4 border-gray-900 relative z-10 group-hover:scale-110 transition-transform">
                               {i + 1}
                            </div>
                            {i < 4 && <div className="w-0.5 h-full bg-gray-800 -mt-1 group-hover:bg-teal-600 transition-colors" />}
                         </div>
                         <div className="pb-4">
                            <h4 className="text-xl font-bold text-white mb-2">{t(phase.stepKey)}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">{t(phase.descKey)}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative lg:h-[600px] flex items-center justify-center">
                 <div className="absolute inset-0 bg-teal-600/10 blur-[150px] rounded-full animate-pulse" />
                 
                 {/* Visual Representation of Multi-Warehouse */}
                 <div className="relative grid grid-cols-2 gap-6 w-full max-w-md">
                    {[
                       { nameKey: "wh.a.name", stockKey: "wh.a.stock", color: "text-teal-400" },
                       { nameKey: "wh.b.name", stockKey: "wh.b.stock", color: "text-yellow-400" },
                       { nameKey: "wh.outlet.name", stockKey: "wh.outlet.stock", color: "text-red-400" },
                       { nameKey: "wh.qc.name", stockKey: "wh.qc.stock", color: "text-blue-400" }
                    ].map((wh, i) => (
                       <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center"
                       >
                          <Warehouse className="mx-auto mb-4 text-teal-500" size={32} />
                          <p className="text-sm font-bold mb-1">{t(wh.nameKey)}</p>
                          <p className={`text-[10px] font-black uppercase ${wh.color}`}>{t(wh.stockKey)}</p>
                       </motion.div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                       {/* Decorative connecting lines would go here */}
                       <div className="w-full h-px bg-white/5 absolute top-1/2 rotate-45" />
                       <div className="w-full h-px bg-white/5 absolute top-1/2 -rotate-45" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">{t('cta.heading')}</h2>
           <p className="text-xl text-gray-600 mb-12">{t('cta.desc')}</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-teal-600 text-white rounded-2xl font-black text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-100">
                 {t('cta.trial')}
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 {t('cta.demo')}
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
