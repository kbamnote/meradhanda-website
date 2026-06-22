import { motion, type Variants } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calculator,
  History,
  Printer,
  Mail,
  Smartphone,
  CreditCard,
  Percent
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': {
    en: 'Government Compliant',
    hi: 'सरकारी नियमों के अनुरूप',
    hinglish: 'Government Compliant',
    gu: 'સરકારી નિયમોને અનુરૂપ',
    mr: 'सरकारी नियमांनुसार',
    mwr: 'सरकारी नियमां रे मुजब',
  },
  'hero.title.pre': {
    en: 'Billing at the Speed of ',
    hi: 'बिलिंग, रोशनी की ',
    hinglish: 'Billing ab ',
    gu: 'બિલિંગ, પ્રકાશની ',
    mr: 'बिलिंग, प्रकाशाच्या ',
    mwr: 'बिलिंग, रोशनी री ',
  },
  'hero.title.accent': {
    en: 'Light.',
    hi: 'रफ़्तार से।',
    hinglish: 'Light ki speed pe.',
    gu: 'ઝડપે.',
    mr: 'वेगाने.',
    mwr: 'रफ्तार सूं.',
  },
  'hero.subtitle': {
    en: 'Generate GST-compliant invoices in under 10 seconds. Automated tax slabs, HSN lookup, and instant WhatsApp sharing—all in one place.',
    hi: '10 सेकंड से कम में GST-कंप्लायंट इनवॉइस बनाएं। ऑटोमैटिक टैक्स स्लैब, HSN लुकअप और तुरंत WhatsApp शेयरिंग—सब एक ही जगह।',
    hinglish: '10 second se kam mein GST-compliant invoice banao. Automatic tax slabs, HSN lookup, aur instant WhatsApp sharing—sab ek hi jagah.',
    gu: '10 સેકન્ડથી ઓછા સમયમાં GST-compliant ઇન્વોઇસ બનાવો. ઓટોમેટિક ટેક્સ સ્લેબ, HSN લુકઅપ અને તરત WhatsApp શેરિંગ—બધું એક જ જગ્યાએ.',
    mr: '10 सेकंदांपेक्षा कमी वेळात GST-compliant इनव्हॉइस तयार करा. ऑटोमॅटिक टॅक्स स्लॅब, HSN लुकअप आणि झटपट WhatsApp शेअरिंग—सर्व एकाच ठिकाणी.',
    mwr: '10 सेकंड सूं कम मांय GST-compliant invoice बणावो. ऑटोमैटिक टैक्स स्लैब, HSN लुकअप अर तुरंत WhatsApp शेयरिंग—सगळो एकई ठौड़।',
  },
  'hero.cta.primary': {
    en: 'Start Billing Now',
    hi: 'अभी बिलिंग शुरू करें',
    hinglish: 'Abhi billing shuru karein',
    gu: 'હમણાં બિલિંગ શરૂ કરો',
    mr: 'आत्ताच बिलिंग सुरू करा',
    mwr: 'अबार बिलिंग चालू करो',
  },
  'hero.cta.secondary': {
    en: 'See Sample Invoice',
    hi: 'सैंपल इनवॉइस देखें',
    hinglish: 'Sample invoice dekhein',
    gu: 'સેમ્પલ ઇન્વોઇસ જુઓ',
    mr: 'नमुना इनव्हॉइस पहा',
    mwr: 'सैंपल invoice देखो',
  },
  'hero.badge.verified': {
    en: 'GST Verified',
    hi: 'GST वेरिफाइड',
    hinglish: 'GST Verified',
    gu: 'GST વેરિફાઇડ',
    mr: 'GST व्हेरिफाइड',
    mwr: 'GST वेरिफाइड',
  },
  'hero.badge.invoiceNo': {
    en: 'Invoice #12402',
    hi: 'इनवॉइस #12402',
    hinglish: 'Invoice #12402',
    gu: 'ઇન્વોઇસ #12402',
    mr: 'इनव्हॉइस #12402',
    mwr: 'Invoice #12402',
  },
  'features.heading': {
    en: 'No more manual tax calculations.',
    hi: 'अब मैनुअल टैक्स कैलकुलेशन की ज़रूरत नहीं।',
    hinglish: 'Ab manual tax calculation ki zaroorat nahi.',
    gu: 'હવે મેન્યુઅલ ટેક્સ ગણતરીની જરૂર નથી.',
    mr: 'आता मॅन्युअल टॅक्स गणनेची गरज नाही.',
    mwr: 'अब मैनुअल टैक्स केलकुलेशन री जरूरत कोनी।',
  },
  'features.subheading': {
    en: "We've built everything to ensure your business stays compliant while you focus on sales.",
    hi: 'हमने सब कुछ ऐसे बनाया है कि आपका बिज़नेस कंप्लायंट रहे और आप सेल्स पर ध्यान दें।',
    hinglish: 'Humne sab kuch aise banaya hai ki aapka business compliant rahe aur aap sales pe focus karein.',
    gu: 'અમે બધું એવું બનાવ્યું છે કે તમારો બિઝનેસ compliant રહે અને તમે sales પર ધ્યાન આપો.',
    mr: 'आम्ही सर्व काही असे बनवले आहे की तुमचा बिझनेस compliant राहील आणि तुम्ही sales वर लक्ष देऊ शकाल.',
    mwr: 'म्हे सगळो इयां बणायो है के थारो बिजनेस compliant रैवे अर थे sales पे ध्यान दो।',
  },
  'feat.autotax.title': {
    en: 'Auto-Tax Slab',
    hi: 'ऑटो-टैक्स स्लैब',
    hinglish: 'Auto-Tax Slab',
    gu: 'ઓટો-ટેક્સ સ્લેબ',
    mr: 'ऑटो-टॅक्स स्लॅब',
    mwr: 'ऑटो-टैक्स स्लैब',
  },
  'feat.autotax.desc': {
    en: 'GST, CGST, SGST, and IGST are calculated automatically based on customer location and product HSN.',
    hi: 'कस्टमर लोकेशन और प्रोडक्ट HSN के आधार पर GST, CGST, SGST और IGST अपने आप कैलकुलेट होते हैं।',
    hinglish: 'Customer location aur product HSN ke hisaab se GST, CGST, SGST aur IGST apne aap calculate hote hain.',
    gu: 'કસ્ટમર લોકેશન અને પ્રોડક્ટ HSN ના આધારે GST, CGST, SGST અને IGST આપમેળે ગણાય છે.',
    mr: 'कस्टमर लोकेशन आणि प्रॉडक्ट HSN नुसार GST, CGST, SGST आणि IGST आपोआप मोजले जातात.',
    mwr: 'कस्टमर लोकेशन अर प्रोडक्ट HSN रे हिसाब सूं GST, CGST, SGST अर IGST खुदबखुद केलकुलेट हुवे है।',
  },
  'feat.templates.title': {
    en: 'Custom Templates',
    hi: 'कस्टम टेम्पलेट्स',
    hinglish: 'Custom Templates',
    gu: 'કસ્ટમ ટેમ્પલેટ્સ',
    mr: 'कस्टम टेम्पलेट्स',
    mwr: 'कस्टम टेम्पलेट्स',
  },
  'feat.templates.desc': {
    en: 'Choose from 10+ professional invoice themes. Add your logo, brand colors, and digital signature.',
    hi: '10+ प्रोफेशनल इनवॉइस थीम में से चुनें। अपना लोगो, ब्रांड कलर और डिजिटल सिग्नेचर जोड़ें।',
    hinglish: '10+ professional invoice themes mein se choose karein. Apna logo, brand colors aur digital signature add karein.',
    gu: '10+ પ્રોફેશનલ ઇન્વોઇસ થીમમાંથી પસંદ કરો. તમારો logo, brand colors અને digital signature ઉમેરો.',
    mr: '10+ प्रोफेशनल इनव्हॉइस थीममधून निवडा. तुमचा logo, brand colors आणि digital signature जोडा.',
    mwr: '10+ प्रोफेशनल invoice थीम मांय सूं चुणो। थारो logo, brand colors अर digital signature जोड़ो।',
  },
  'feat.share.title': {
    en: 'Multi-Channel Share',
    hi: 'मल्टी-चैनल शेयर',
    hinglish: 'Multi-Channel Share',
    gu: 'મલ્ટિ-ચેનલ શેર',
    mr: 'मल्टी-चॅनल शेअर',
    mwr: 'मल्टी-चैनल शेयर',
  },
  'feat.share.desc': {
    en: 'Send invoices instantly via WhatsApp, Email, or SMS directly from the billing screen.',
    hi: 'बिलिंग स्क्रीन से सीधे WhatsApp, Email या SMS पर तुरंत इनवॉइस भेजें।',
    hinglish: 'Billing screen se seedha WhatsApp, Email ya SMS pe turant invoice bhejein.',
    gu: 'બિલિંગ સ્ક્રીનથી સીધા WhatsApp, Email કે SMS પર તરત ઇન્વોઇસ મોકલો.',
    mr: 'बिलिंग स्क्रीनवरून थेट WhatsApp, Email किंवा SMS वर झटपट इनव्हॉइस पाठवा.',
    mwr: 'बिलिंग स्क्रीन सूं सीधो WhatsApp, Email या SMS पे तुरंत invoice भेजो।',
  },
  'feat.quotation.title': {
    en: 'Quotation to Invoice',
    hi: 'कोटेशन से इनवॉइस',
    hinglish: 'Quotation se Invoice',
    gu: 'કોટેશનથી ઇન્વોઇસ',
    mr: 'कोटेशन ते इनव्हॉइस',
    mwr: 'कोटेशन सूं invoice',
  },
  'feat.quotation.desc': {
    en: 'Convert estimates and quotations into GST invoices with a single click. No data re-entry.',
    hi: 'एक क्लिक में एस्टीमेट और कोटेशन को GST इनवॉइस में बदलें। डेटा दोबारा डालने की ज़रूरत नहीं।',
    hinglish: 'Ek click mein estimate aur quotation ko GST invoice mein convert karein. Data dobara daalne ki zaroorat nahi.',
    gu: 'એક ક્લિકમાં estimate અને quotation ને GST ઇન્વોઇસમાં બદલો. ડેટા ફરી દાખલ કરવાની જરૂર નથી.',
    mr: 'एका क्लिकमध्ये estimate आणि quotation GST इनव्हॉइसमध्ये बदला. डेटा पुन्हा भरण्याची गरज नाही.',
    mwr: 'एक क्लिक मांय estimate अर quotation ने GST invoice मांय बदळो। डेटा फेरूं डालण री जरूरत कोनी।',
  },
  'feat.payment.title': {
    en: 'Payment Links',
    hi: 'पेमेंट लिंक',
    hinglish: 'Payment Links',
    gu: 'પેમેન્ટ લિંક',
    mr: 'पेमेंट लिंक',
    mwr: 'पेमेंट लिंक',
  },
  'feat.payment.desc': {
    en: 'Include UPI QR codes or payment gateway links directly on the invoice for faster collections.',
    hi: 'तेज़ कलेक्शन के लिए इनवॉइस पर सीधे UPI QR कोड या पेमेंट गेटवे लिंक जोड़ें।',
    hinglish: 'Fast collection ke liye invoice pe seedha UPI QR code ya payment gateway link add karein.',
    gu: 'ઝડપી કલેક્શન માટે ઇન્વોઇસ પર સીધા UPI QR કોડ કે payment gateway link ઉમેરો.',
    mr: 'जलद कलेक्शनसाठी इनव्हॉइसवर थेट UPI QR कोड किंवा payment gateway link जोडा.',
    mwr: 'जल्दी कलेक्शन सारू invoice पे सीधो UPI QR कोड या payment gateway link जोड़ो।',
  },
  'feat.mobile.title': {
    en: 'Mobile Billing',
    hi: 'मोबाइल बिलिंग',
    hinglish: 'Mobile Billing',
    gu: 'મોબાઇલ બિલિંગ',
    mr: 'मोबाइल बिलिंग',
    mwr: 'मोबाइल बिलिंग',
  },
  'feat.mobile.desc': {
    en: 'Create invoices on the go with our fully responsive mobile interface. Perfect for field sales.',
    hi: 'हमारे पूरी तरह रिस्पॉन्सिव मोबाइल इंटरफेस से चलते-फिरते इनवॉइस बनाएं। फील्ड सेल्स के लिए बेस्ट।',
    hinglish: 'Hamare fully responsive mobile interface se chalte-firte invoice banao. Field sales ke liye perfect.',
    gu: 'અમારા સંપૂર્ણ responsive મોબાઇલ ઇન્ટરફેસથી ગમે ત્યાં ઇન્વોઇસ બનાવો. ફીલ્ડ સેલ્સ માટે પરફેક્ટ.',
    mr: 'आमच्या पूर्णपणे responsive मोबाइल इंटरफेसने कुठेही इनव्हॉइस तयार करा. फील्ड सेल्ससाठी परफेक्ट.',
    mwr: 'म्हारे पूरो responsive मोबाइल इंटरफेस सूं चालतां-फिरतां invoice बणावो। फील्ड सेल्स सारू बढ़िया।',
  },
  'feat.discount.title': {
    en: 'Discount Management',
    hi: 'डिस्काउंट मैनेजमेंट',
    hinglish: 'Discount Management',
    gu: 'ડિસ્કાઉન્ટ મેનેજમેન્ટ',
    mr: 'डिस्काउंट मॅनेजमेंट',
    mwr: 'डिस्काउंट मैनेजमेंट',
  },
  'feat.discount.desc': {
    en: 'Apply item-wise or bill-wise discounts. Manage promotional schemes and loyalty redemptions.',
    hi: 'आइटम-वाइज या बिल-वाइज डिस्काउंट लगाएं। प्रमोशनल स्कीम और लॉयल्टी रिडेम्पशन मैनेज करें।',
    hinglish: 'Item-wise ya bill-wise discount lagao. Promotional schemes aur loyalty redemptions manage karein.',
    gu: 'આઇટમ-વાઇઝ કે બિલ-વાઇઝ ડિસ્કાઉન્ટ લાગુ કરો. પ્રમોશનલ સ્કીમ અને loyalty redemption મેનેજ કરો.',
    mr: 'आयटम-वाइज किंवा बिल-वाइज डिस्काउंट लावा. प्रमोशनल स्कीम आणि loyalty redemption मॅनेज करा.',
    mwr: 'आइटम-वाइज या बिल-वाइज डिस्काउंट लगावो। प्रमोशनल स्कीम अर loyalty redemption मैनेज करो।',
  },
  'feat.error.title': {
    en: 'Error Correction',
    hi: 'एरर करेक्शन',
    hinglish: 'Error Correction',
    gu: 'એરર કરેક્શન',
    mr: 'एरर करेक्शन',
    mwr: 'एरर करेक्शन',
  },
  'feat.error.desc': {
    en: 'Built-in validation checks prevent common GST errors before the invoice is finalized.',
    hi: 'बिल्ट-इन वैलिडेशन चेक इनवॉइस फाइनल होने से पहले आम GST एरर रोक देते हैं।',
    hinglish: 'Built-in validation checks invoice finalize hone se pehle common GST errors rok dete hain.',
    gu: 'બિલ્ટ-ઇન વેલિડેશન ચેક ઇન્વોઇસ ફાઇનલ થાય તે પહેલાં સામાન્ય GST errors અટકાવે છે.',
    mr: 'बिल्ट-इन व्हॅलिडेशन चेक इनव्हॉइस फायनल होण्यापूर्वी सामान्य GST errors रोखतात.',
    mwr: 'बिल्ट-इन वैलिडेशन चेक invoice फाइनल हुवण सूं पैली आम GST errors रोक देवे है।',
  },
  'flow.heading.pre': {
    en: 'Billing flow that ',
    hi: 'बिलिंग फ्लो जो ',
    hinglish: 'Billing flow jo ',
    gu: 'બિલિંગ ફ્લો જે ',
    mr: 'बिलिंग फ्लो जो ',
    mwr: 'बिलिंग फ्लो जको ',
  },
  'flow.heading.accent': {
    en: 'Feels Like Magic.',
    hi: 'जादू जैसा लगे।',
    hinglish: 'Magic jaisa lagta hai.',
    gu: 'જાદુ જેવો લાગે.',
    mr: 'जादूसारखा वाटतो.',
    mwr: 'जादू जिसो लागे.',
  },
  'flow.step1.title': {
    en: 'Search & Select',
    hi: 'सर्च और सिलेक्ट',
    hinglish: 'Search & Select',
    gu: 'સર્ચ અને સિલેક્ટ',
    mr: 'सर्च आणि सिलेक्ट',
    mwr: 'सर्च अर सिलेक्ट',
  },
  'flow.step1.desc': {
    en: 'Start typing a product or customer name. Our ultra-fast search finds them in milliseconds.',
    hi: 'प्रोडक्ट या कस्टमर का नाम टाइप करना शुरू करें। हमारा अल्ट्रा-फास्ट सर्च उन्हें मिलीसेकंड में ढूंढ लेता है।',
    hinglish: 'Product ya customer ka naam type karna shuru karein. Hamara ultra-fast search unhe milliseconds mein dhoondh leta hai.',
    gu: 'પ્રોડક્ટ કે કસ્ટમરનું નામ ટાઇપ કરવાનું શરૂ કરો. અમારું ultra-fast search તેમને મિલિસેકન્ડમાં શોધી લે છે.',
    mr: 'प्रॉडक्ट किंवा कस्टमरचे नाव टाइप करायला सुरुवात करा. आमचे ultra-fast search त्यांना मिलिसेकंदात शोधते.',
    mwr: 'प्रोडक्ट या कस्टमर रो नाम टाइप करणो चालू करो। म्हारो ultra-fast search उणाने मिलीसेकंड मांय ढूंढ ले है।',
  },
  'flow.step2.title': {
    en: 'Tax Validation',
    hi: 'टैक्स वैलिडेशन',
    hinglish: 'Tax Validation',
    gu: 'ટેક્સ વેલિડેશન',
    mr: 'टॅक्स व्हॅलिडेशन',
    mwr: 'टैक्स वैलिडेशन',
  },
  'flow.step2.desc': {
    en: 'Mera Dhanda automatically applies the correct GST slab and HSN code for each item.',
    hi: 'Mera Dhanda हर आइटम के लिए सही GST स्लैब और HSN कोड अपने आप लगा देता है।',
    hinglish: 'Mera Dhanda har item ke liye sahi GST slab aur HSN code apne aap laga deta hai.',
    gu: 'Mera Dhanda દરેક item માટે યોગ્ય GST slab અને HSN code આપમેળે લાગુ કરે છે.',
    mr: 'Mera Dhanda प्रत्येक item साठी योग्य GST slab आणि HSN code आपोआप लावतो.',
    mwr: 'Mera Dhanda हर item सारू सही GST slab अर HSN code खुदबखुद लगा देवे है।',
  },
  'flow.step3.title': {
    en: 'Review & Save',
    hi: 'रिव्यू और सेव',
    hinglish: 'Review & Save',
    gu: 'રિવ્યૂ અને સેવ',
    mr: 'रिव्ह्यू आणि सेव्ह',
    mwr: 'रिव्यू अर सेव',
  },
  'flow.step3.desc': {
    en: 'Get a live preview of the invoice. Apply discounts or adjust quantities instantly.',
    hi: 'इनवॉइस का लाइव प्रीव्यू पाएं। तुरंत डिस्काउंट लगाएं या क्वांटिटी एडजस्ट करें।',
    hinglish: 'Invoice ka live preview pao. Turant discount lagao ya quantity adjust karein.',
    gu: 'ઇન્વોઇસનું live preview મેળવો. તરત discount લાગુ કરો કે quantity એડજસ્ટ કરો.',
    mr: 'इनव्हॉइसचे live preview मिळवा. झटपट discount लावा किंवा quantity अॅडजस्ट करा.',
    mwr: 'invoice रो live preview पावो। तुरंत discount लगावो या quantity एडजस्ट करो।',
  },
  'flow.step4.title': {
    en: 'Dispatch & Paid',
    hi: 'डिस्पैच और पेड',
    hinglish: 'Dispatch & Paid',
    gu: 'ડિસ્પેચ અને પેઇડ',
    mr: 'डिस्पॅच आणि पेड',
    mwr: 'डिस्पैच अर पेड',
  },
  'flow.step4.desc': {
    en: 'Share the digital copy and mark the payment status. Inventory is deducted automatically.',
    hi: 'डिजिटल कॉपी शेयर करें और पेमेंट स्टेटस मार्क करें। इन्वेंट्री अपने आप घट जाती है।',
    hinglish: 'Digital copy share karein aur payment status mark karein. Inventory apne aap deduct ho jaati hai.',
    gu: 'ડિજિટલ કોપી શેર કરો અને payment status માર્ક કરો. Inventory આપમેળે ઘટી જાય છે.',
    mr: 'डिजिटल कॉपी शेअर करा आणि payment status मार्क करा. Inventory आपोआप कमी होते.',
    mwr: 'डिजिटल कॉपी शेयर करो अर payment status मार्क करो। Inventory खुदबखुद घट जावे है।',
  },
  'invoice.title': {
    en: 'Tax Invoice',
    hi: 'टैक्स इनवॉइस',
    hinglish: 'Tax Invoice',
    gu: 'ટેક્સ ઇન્વોઇસ',
    mr: 'टॅक्स इनव्हॉइस',
    mwr: 'टैक्स invoice',
  },
  'invoice.itemDesc': {
    en: 'ITEM DESCRIPTION',
    hi: 'आइटम विवरण',
    hinglish: 'ITEM DESCRIPTION',
    gu: 'આઇટમ વિગત',
    mr: 'आयटम तपशील',
    mwr: 'आइटम विवरण',
  },
  'invoice.amount': {
    en: 'AMOUNT',
    hi: 'राशि',
    hinglish: 'AMOUNT',
    gu: 'રકમ',
    mr: 'रक्कम',
    mwr: 'रकम',
  },
  'invoice.itemAlpha': {
    en: 'Product Alpha (Qty: 2)',
    hi: 'प्रोडक्ट Alpha (मात्रा: 2)',
    hinglish: 'Product Alpha (Qty: 2)',
    gu: 'પ્રોડક્ટ Alpha (જથ્થો: 2)',
    mr: 'प्रॉडक्ट Alpha (नग: 2)',
    mwr: 'प्रोडक्ट Alpha (नग: 2)',
  },
  'invoice.itemBeta': {
    en: 'Product Beta (Qty: 1)',
    hi: 'प्रोडक्ट Beta (मात्रा: 1)',
    hinglish: 'Product Beta (Qty: 1)',
    gu: 'પ્રોડક્ટ Beta (જથ્થો: 1)',
    mr: 'प्रॉडक्ट Beta (नग: 1)',
    mwr: 'प्रोडक्ट Beta (नग: 1)',
  },
  'invoice.subtotal': {
    en: 'Subtotal',
    hi: 'सबटोटल',
    hinglish: 'Subtotal',
    gu: 'સબટોટલ',
    mr: 'सबटोटल',
    mwr: 'सबटोटल',
  },
  'invoice.gst': {
    en: 'GST (18%)',
    hi: 'GST (18%)',
    hinglish: 'GST (18%)',
    gu: 'GST (18%)',
    mr: 'GST (18%)',
    mwr: 'GST (18%)',
  },
  'invoice.total': {
    en: 'Total',
    hi: 'कुल',
    hinglish: 'Total',
    gu: 'કુલ',
    mr: 'एकूण',
    mwr: 'कुल',
  },
  'invoice.shareWhatsApp': {
    en: 'Share on WhatsApp',
    hi: 'WhatsApp पर शेयर करें',
    hinglish: 'WhatsApp pe Share karein',
    gu: 'WhatsApp પર શેર કરો',
    mr: 'WhatsApp वर शेअर करा',
    mwr: 'WhatsApp पे शेयर करो',
  },
  'invoice.print': {
    en: 'Print',
    hi: 'प्रिंट',
    hinglish: 'Print',
    gu: 'પ્રિન્ટ',
    mr: 'प्रिंट',
    mwr: 'प्रिंट',
  },
  'cta.heading': {
    en: 'Ready to simplify your taxes?',
    hi: 'अपने टैक्स आसान बनाने के लिए तैयार हैं?',
    hinglish: 'Apne taxes simple banane ke liye taiyaar hain?',
    gu: 'તમારા ટેક્સ સરળ બનાવવા તૈયાર છો?',
    mr: 'तुमचे टॅक्स सोपे करायला तयार आहात?',
    mwr: 'थारा टैक्स सरल बणावण सारू त्यार हो?',
  },
  'cta.subheading': {
    en: 'Join 5,000+ business owners who trust Mera Dhanda for their daily billing and GST compliance.',
    hi: '5,000+ बिज़नेस ओनर्स से जुड़ें जो अपनी रोज़ की बिलिंग और GST कंप्लायंस के लिए Mera Dhanda पर भरोसा करते हैं।',
    hinglish: '5,000+ business owners ke saath judein jo apni daily billing aur GST compliance ke liye Mera Dhanda pe bharosa karte hain.',
    gu: '5,000+ બિઝનેસ ઓનર્સ સાથે જોડાઓ જે પોતાની રોજની billing અને GST compliance માટે Mera Dhanda પર ભરોસો કરે છે.',
    mr: '5,000+ बिझनेस ओनर्ससोबत सामील व्हा जे त्यांच्या रोजच्या billing आणि GST compliance साठी Mera Dhanda वर विश्वास ठेवतात.',
    mwr: '5,000+ बिजनेस ओनर्स रे साथै जुड़ो जका आपरी रोज री billing अर GST compliance सारू Mera Dhanda पे भरोसो करे है।',
  },
  'cta.primary': {
    en: 'Get Started Free',
    hi: 'फ्री में शुरू करें',
    hinglish: 'Free mein Shuru karein',
    gu: 'ફ્રીમાં શરૂ કરો',
    mr: 'मोफत सुरू करा',
    mwr: 'फ्री मांय चालू करो',
  },
  'cta.secondary': {
    en: 'Talk to Compliance Expert',
    hi: 'कंप्लायंस एक्सपर्ट से बात करें',
    hinglish: 'Compliance Expert se baat karein',
    gu: 'કમ્પ્લાયન્સ એક્સપર્ટ સાથે વાત કરો',
    mr: 'कम्प्लायन्स एक्सपर्टशी बोला',
    mwr: 'कंप्लायंस एक्सपर्ट सूं बात करो',
  },
};

export default function GSTBilling() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                {t('hero.badge')}
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                {t('hero.title.pre')}<span className="text-indigo-600 italic">{t('hero.title.accent')}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2 group">
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
              <div className="absolute -inset-4 bg-indigo-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/gst_billing_preview_1778577648999.png" 
                  alt="Billing Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Floating Invoice Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 hidden md:block"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                         <CheckCircle2 size={20} />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-gray-400 uppercase">{t('hero.badge.verified')}</p>
                         <p className="text-sm font-black text-gray-900">{t('hero.badge.invoiceNo')}</p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">{t('features.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('features.subheading')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Calculator,
                titleKey: "feat.autotax.title",
                descKey: "feat.autotax.desc",
                color: "text-themeGreen-600 bg-themeGreen-50"
              },
              {
                icon: Printer,
                titleKey: "feat.templates.title",
                descKey: "feat.templates.desc",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: Mail,
                titleKey: "feat.share.title",
                descKey: "feat.share.desc",
                color: "text-teal-600 bg-teal-50"
              },
              {
                icon: History,
                titleKey: "feat.quotation.title",
                descKey: "feat.quotation.desc",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: CreditCard,
                titleKey: "feat.payment.title",
                descKey: "feat.payment.desc",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: Smartphone,
                titleKey: "feat.mobile.title",
                descKey: "feat.mobile.desc",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: Percent,
                titleKey: "feat.discount.title",
                descKey: "feat.discount.desc",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: ShieldCheck,
                titleKey: "feat.error.title",
                descKey: "feat.error.desc",
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

      {/* Interactive Billing Flow */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">{t('flow.heading.pre')}<span className="text-indigo-400 italic">{t('flow.heading.accent')}</span></h2>

                 <div className="space-y-8">
                    {[
                      { stepKey: "flow.step1.title", descKey: "flow.step1.desc" },
                      { stepKey: "flow.step2.title", descKey: "flow.step2.desc" },
                      { stepKey: "flow.step3.title", descKey: "flow.step3.desc" },
                      { stepKey: "flow.step4.title", descKey: "flow.step4.desc" }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold border-4 border-gray-900 relative z-10 group-hover:scale-110 transition-transform">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-0.5 h-full bg-gray-800 -mt-1 group-hover:bg-indigo-600 transition-colors" />}
                         </div>
                         <div className="pb-4">
                            <h4 className="text-xl font-bold text-white mb-2">{t(phase.stepKey)}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">{t(phase.descKey)}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-indigo-600/10 blur-[150px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10">
                    <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
                       <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-4">
                          <div>
                             <h4 className="font-black text-xl">{t('invoice.title')}</h4>
                             <p className="text-xs text-gray-400">#INV-2024-001</p>
                          </div>
                          <div className="w-10 h-10 bg-indigo-600 rounded-lg" />
                       </div>
                       
                       <div className="space-y-4 mb-8">
                          <div className="flex justify-between text-xs font-bold text-gray-400">
                             <span>{t('invoice.itemDesc')}</span>
                             <span>{t('invoice.amount')}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                             <span>{t('invoice.itemAlpha')}</span>
                             <span className="font-bold">₹12,400.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                             <span>{t('invoice.itemBeta')}</span>
                             <span className="font-bold">₹4,200.00</span>
                          </div>
                       </div>
                       
                       <div className="space-y-2 border-t border-gray-100 pt-4">
                          <div className="flex justify-between text-sm">
                             <span className="text-gray-400">{t('invoice.subtotal')}</span>
                             <span>₹16,600.00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                             <span className="text-gray-400">{t('invoice.gst')}</span>
                             <span className="text-indigo-600">+₹2,988.00</span>
                          </div>
                          <div className="flex justify-between text-lg font-black border-t border-gray-100 pt-2 mt-2">
                             <span>{t('invoice.total')}</span>
                             <span>₹19,588.00</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="mt-8 flex gap-3">
                       <button className="flex-1 py-3 bg-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest">{t('invoice.shareWhatsApp')}</button>
                       <button className="px-6 py-3 bg-white/10 rounded-xl text-xs font-black uppercase tracking-widest">{t('invoice.print')}</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">{t('cta.heading')}</h2>
           <p className="text-xl text-gray-600 mb-12">{t('cta.subheading')}</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
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
