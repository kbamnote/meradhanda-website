import { motion, type Variants } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Globe,
  Bell,
  MessageSquare,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';
import InteractiveCards from '../../components/InteractiveCards';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': {
    en: 'Grow Your Brand',
    hi: 'अपना ब्रांड बढ़ाएं',
    hinglish: 'Apna brand badhao',
    gu: 'તમારી બ્રાન્ડ વધારો',
    mr: 'तुमचा ब्रँड वाढवा',
    mwr: 'आपणो ब्रांड बढाओ',
  },
  'hero.title.pre': {
    en: 'Business ',
    hi: 'बिज़नेस ',
    hinglish: 'Business ',
    gu: 'બિઝનેસ ',
    mr: 'बिझनेस ',
    mwr: 'बिज़नेस ',
  },
  'hero.title.accent': {
    en: 'Marketing',
    hi: 'मार्केटिंग',
    hinglish: 'Marketing',
    gu: 'માર્કેટિંગ',
    mr: 'मार्केटिंग',
    mwr: 'मार्केटिंग',
  },
  'hero.title.post': {
    en: ' Simplified.',
    hi: ' आसान बनाया।',
    hinglish: ' aasaan banaya.',
    gu: ' સરળ બનાવ્યું.',
    mr: ' सोपे केले.',
    mwr: ' सरल कर दियो.',
  },
  'hero.desc': {
    en: 'Reach more customers and drive repeat sales with our built-in marketing suite. Launch WhatsApp campaigns, manage social interactions, and analyze behavior from one hub.',
    hi: 'हमारे बिल्ट-इन मार्केटिंग सुइट से ज़्यादा ग्राहकों तक पहुंचें और बार-बार बिक्री बढ़ाएं। एक ही हब से WhatsApp कैम्पेन शुरू करें, सोशल इंटरैक्शन मैनेज करें और ग्राहकों के व्यवहार का विश्लेषण करें।',
    hinglish: 'Hamare built-in marketing suite se zyada customers tak pahuncho aur repeat sales badhao. Ek hi hub se WhatsApp campaigns launch karo, social interactions manage karo aur behavior analyze karo.',
    gu: 'અમારા બિલ્ટ-ઇન માર્કેટિંગ સ્યૂટથી વધુ ગ્રાહકો સુધી પહોંચો અને વારંવાર વેચાણ વધારો. એક જ હબથી WhatsApp કેમ્પેન શરૂ કરો, સોશિયલ ઇન્ટરેક્શન મેનેજ કરો અને બિહેવિયર એનાલાઇઝ કરો.',
    mr: 'आमच्या बिल्ट-इन मार्केटिंग सूटने अधिक ग्राहकांपर्यंत पोहोचा आणि पुन्हा पुन्हा विक्री वाढवा. एकाच हबमधून WhatsApp कॅम्पेन सुरू करा, सोशल इंटरॅक्शन व्यवस्थापित करा आणि वर्तन विश्लेषण करा.',
    mwr: 'म्हारा बिल्ट-इन मार्केटिंग सूट सूं ज्यादा ग्राहकां तांई पूगो अर बार-बार बिक्री बढाओ. एक ई हब सूं WhatsApp कैम्पेन चालू करो, सोशल इंटरैक्शन मैनेज करो अर बिहेवियर एनालाइज करो.',
  },
  'hero.cta.trial': {
    en: 'Start Free Trial',
    hi: 'फ़्री ट्रायल शुरू करें',
    hinglish: 'Free trial shuru karein',
    gu: 'ફ્રી ટ્રાયલ શરૂ કરો',
    mr: 'मोफत ट्रायल सुरू करा',
    mwr: 'फ्री ट्रायल चालू करो',
  },
  'hero.cta.demo': {
    en: 'Watch Demo',
    hi: 'डेमो देखें',
    hinglish: 'Demo dekho',
    gu: 'ડેમો જુઓ',
    mr: 'डेमो पहा',
    mwr: 'डेमो देखो',
  },
  'hero.alt': {
    en: 'Marketing Dashboard',
    hi: 'Marketing Dashboard',
    hinglish: 'Marketing Dashboard',
    gu: 'Marketing Dashboard',
    mr: 'Marketing Dashboard',
    mwr: 'Marketing Dashboard',
  },
  'hero.stat.label': {
    en: 'CTR Increase',
    hi: 'CTR बढ़ोतरी',
    hinglish: 'CTR Increase',
    gu: 'CTR વધારો',
    mr: 'CTR वाढ',
    mwr: 'CTR बढोतरी',
  },
  'features.heading': {
    en: 'Powerful tools for growth',
    hi: 'ग्रोथ के लिए दमदार टूल्स',
    hinglish: 'Growth ke liye powerful tools',
    gu: 'ગ્રોથ માટે પાવરફુલ ટૂલ્સ',
    mr: 'वाढीसाठी पॉवरफुल साधने',
    mwr: 'ग्रोथ खातर दमदार टूल्स',
  },
  'features.sub': {
    en: 'Everything you need to find, engage, and retain customers in the digital age.',
    hi: 'डिजिटल युग में ग्राहकों को खोजने, जोड़ने और बनाए रखने के लिए जो कुछ भी चाहिए, सब कुछ।',
    hinglish: 'Digital age mein customers ko dhoondhne, engage karne aur retain karne ke liye sab kuch.',
    gu: 'ડિજિટલ યુગમાં ગ્રાહકોને શોધવા, જોડવા અને જાળવી રાખવા માટે જરૂરી બધું જ.',
    mr: 'डिजिटल युगात ग्राहकांना शोधण्यासाठी, जोडण्यासाठी आणि टिकवण्यासाठी आवश्यक असलेले सर्व काही.',
    mwr: 'डिजिटल जुग में ग्राहकां नै ढूंढण, जोड़ण अर बणाए राखण खातर जरूरी सगळो कीं.',
  },
  'feat.whatsapp.title': {
    en: 'WhatsApp Marketing',
    hi: 'WhatsApp मार्केटिंग',
    hinglish: 'WhatsApp Marketing',
    gu: 'WhatsApp માર્કેટિંગ',
    mr: 'WhatsApp मार्केटिंग',
    mwr: 'WhatsApp मार्केटिंग',
  },
  'feat.whatsapp.desc': {
    en: 'Send bulk updates, festive greetings, and personalized offers directly to customers. 98% open rates guaranteed.',
    hi: 'ग्राहकों को सीधे बल्क अपडेट, त्योहारी शुभकामनाएं और पर्सनलाइज़्ड ऑफ़र भेजें। 98% ओपन रेट गारंटीड।',
    hinglish: 'Customers ko seedhe bulk updates, festive wishes aur personalized offers bhejo. 98% open rate guaranteed.',
    gu: 'ગ્રાહકોને સીધા બલ્ક અપડેટ્સ, તહેવારની શુભેચ્છાઓ અને પર્સનલાઇઝ્ડ ઓફર મોકલો. 98% ઓપન રેટ ગેરંટીડ.',
    mr: 'ग्राहकांना थेट बल्क अपडेट्स, सणाच्या शुभेच्छा आणि पर्सनलाइझ्ड ऑफर पाठवा. 98% ओपन रेट गॅरंटीड.',
    mwr: 'ग्राहकां नै सीधा बल्क अपडेट, त्योहारी शुभकामना अर पर्सनलाइज्ड ऑफर भेजो. 98% ओपन रेट गारंटीड.',
  },
  'feat.target.title': {
    en: 'Precision Targeting',
    hi: 'सटीक टारगेटिंग',
    hinglish: 'Precision Targeting',
    gu: 'ચોકસાઈભર્યું ટાર્ગેટિંગ',
    mr: 'अचूक टार्गेटिंग',
    mwr: 'सटीक टारगेटिंग',
  },
  'feat.target.desc': {
    en: 'Segment your audience based on purchase history, location, and behavior for laser-focused campaigns.',
    hi: 'खरीद इतिहास, लोकेशन और व्यवहार के आधार पर अपने ऑडियंस को सेगमेंट करें और एकदम सटीक कैम्पेन चलाएं।',
    hinglish: 'Purchase history, location aur behavior ke hisaab se apne audience ko segment karo aur laser-focused campaigns chalao.',
    gu: 'ખરીદી ઇતિહાસ, લોકેશન અને બિહેવિયરના આધારે તમારા ઓડિયન્સને સેગમેન્ટ કરો અને એકદમ ચોકસાઈભર્યા કેમ્પેન ચલાવો.',
    mr: 'खरेदी इतिहास, लोकेशन आणि वर्तनावर आधारित तुमच्या ऑडियन्सला सेगमेंट करा आणि अचूक कॅम्पेन चालवा.',
    mwr: 'खरीद इतिहास, लोकेशन अर बिहेवियर रै आधार पर आपणी ऑडियंस नै सेगमेंट करो अर एकदम सटीक कैम्पेन चलाओ.',
  },
  'feat.triggers.title': {
    en: 'Automated Triggers',
    hi: 'ऑटोमेटेड ट्रिगर',
    hinglish: 'Automated Triggers',
    gu: 'ઓટોમેટેડ ટ્રિગર',
    mr: 'ऑटोमेटेड ट्रिगर',
    mwr: 'ऑटोमेटेड ट्रिगर',
  },
  'feat.triggers.desc': {
    en: 'Set and forget campaigns for birthdays, anniversaries, and abandoned carts. Engage customers while you sleep.',
    hi: 'जन्मदिन, सालगिरह और छोड़े गए कार्ट के लिए कैम्पेन एक बार सेट करें और भूल जाएं। सोते समय भी ग्राहकों से जुड़े रहें।',
    hinglish: 'Birthdays, anniversaries aur abandoned carts ke liye campaigns set karo aur bhool jao. Sote waqt bhi customers se jude raho.',
    gu: 'જન્મદિવસ, એનિવર્સરી અને છોડેલા કાર્ટ માટે કેમ્પેન એકવાર સેટ કરો અને ભૂલી જાઓ. ઊંઘતા સમયે પણ ગ્રાહકો સાથે જોડાયેલા રહો.',
    mr: 'वाढदिवस, वर्धापनदिन आणि सोडलेल्या कार्टसाठी कॅम्पेन एकदा सेट करा आणि विसरा. झोपेतही ग्राहकांशी जोडलेले राहा.',
    mwr: 'जलमदिन, सालगिरह अर छोड्योड़ा कार्ट खातर कैम्पेन एक बार सेट करो अर भूल जाओ. सोवतां बखत ई ग्राहकां सूं जुड्योड़ा रैवो.',
  },
  'feat.loyalty.title': {
    en: 'Loyalty Programs',
    hi: 'लॉयल्टी प्रोग्राम',
    hinglish: 'Loyalty Programs',
    gu: 'લોયલ્ટી પ્રોગ્રામ',
    mr: 'लॉयल्टी प्रोग्राम',
    mwr: 'लॉयल्टी प्रोग्राम',
  },
  'feat.loyalty.desc': {
    en: 'Build your own points system and digital membership cards to keep customers coming back.',
    hi: 'अपना खुद का पॉइंट्स सिस्टम और डिजिटल मेम्बरशिप कार्ड बनाएं ताकि ग्राहक बार-बार लौटकर आएं।',
    hinglish: 'Apna khud ka points system aur digital membership cards banao taaki customers baar-baar wapas aayein.',
    gu: 'ગ્રાહકો વારંવાર પાછા આવે તે માટે તમારી પોતાની પોઇન્ટ્સ સિસ્ટમ અને ડિજિટલ મેમ્બરશિપ કાર્ડ બનાવો.',
    mr: 'ग्राहक पुन्हा पुन्हा परत यावेत म्हणून तुमची स्वतःची पॉइंट्स सिस्टीम आणि डिजिटल मेंबरशिप कार्ड तयार करा.',
    mwr: 'ग्राहक बार-बार पाछा आवै इण खातर आपणो खुद को पॉइंट्स सिस्टम अर डिजिटल मेम्बरशिप कार्ड बणाओ.',
  },
  'feat.omni.title': {
    en: 'Omnichannel Reach',
    hi: 'ऑम्निचैनल रीच',
    hinglish: 'Omnichannel Reach',
    gu: 'ઓમ્નિચેનલ રીચ',
    mr: 'ऑम्निचॅनल रीच',
    mwr: 'ऑम्निचैनल रीच',
  },
  'feat.omni.desc': {
    en: 'Manage SMS, Email, and Social Media campaigns from a single, unified communication hub.',
    hi: 'SMS, Email और सोशल मीडिया कैम्पेन एक ही यूनिफाइड कम्युनिकेशन हब से मैनेज करें।',
    hinglish: 'SMS, Email aur Social Media campaigns ek hi unified communication hub se manage karo.',
    gu: 'SMS, Email અને સોશિયલ મીડિયા કેમ્પેન એક જ યુનિફાઇડ કમ્યુનિકેશન હબથી મેનેજ કરો.',
    mr: 'SMS, Email आणि सोशल मीडिया कॅम्पेन एकाच युनिफाइड कम्युनिकेशन हबमधून व्यवस्थापित करा.',
    mwr: 'SMS, Email अर सोशल मीडिया कैम्पेन एक ई यूनिफाइड कम्युनिकेशन हब सूं मैनेज करो.',
  },
  'feat.analytics.title': {
    en: 'Deep Analytics',
    hi: 'डीप एनालिटिक्स',
    hinglish: 'Deep Analytics',
    gu: 'ડીપ એનાલિટિક્સ',
    mr: 'डीप अॅनालिटिक्स',
    mwr: 'डीप एनालिटिक्स',
  },
  'feat.analytics.desc': {
    en: 'Track every click and conversion. Understand your ROI with beautiful, easy-to-read marketing reports.',
    hi: 'हर क्लिक और कन्वर्ज़न को ट्रैक करें। सुंदर और आसानी से पढ़ने वाली मार्केटिंग रिपोर्ट से अपना ROI समझें।',
    hinglish: 'Har click aur conversion track karo. Sundar aur easy-to-read marketing reports se apna ROI samjho.',
    gu: 'દરેક ક્લિક અને કન્વર્ઝન ટ્રૅક કરો. સુંદર અને સરળતાથી વાંચી શકાય તેવા માર્કેટિંગ રિપોર્ટ્સથી તમારો ROI સમજો.',
    mr: 'प्रत्येक क्लिक आणि कन्व्हर्जन ट्रॅक करा. सुंदर आणि सहज वाचता येणाऱ्या मार्केटिंग रिपोर्ट्सने तुमचा ROI समजून घ्या.',
    mwr: 'हर क्लिक अर कन्वर्जन नै ट्रैक करो. सुंदर अर सहेज पढण आळी मार्केटिंग रिपोर्ट सूं आपणो ROI समझो.',
  },
  'strat.heading.pre': {
    en: 'Strategies that ',
    hi: 'ऐसी रणनीतियां जो ',
    hinglish: 'Aisi strategies jo ',
    gu: 'એવી સ્ટ્રેટેજી જે ',
    mr: 'अशा स्ट्रॅटेजी ज्या ',
    mwr: 'ऐड़ी रणनीति जो ',
  },
  'strat.heading.accent': {
    en: 'Convert.',
    hi: 'कन्वर्ट करें।',
    hinglish: 'Convert karein.',
    gu: 'કન્વર્ટ કરે.',
    mr: 'कन्व्हर्ट करतात.',
    mwr: 'कन्वर्ट करै.',
  },
  'strat.sub': {
    en: 'Flip the cards to see how Mera Dhanda helps you dominate your local market.',
    hi: 'कार्ड पलटें और देखें कि Mera Dhanda आपको अपने लोकल मार्केट में आगे रहने में कैसे मदद करता है।',
    hinglish: 'Cards flip karo aur dekho ki Mera Dhanda aapko apne local market mein aage rehne mein kaise help karta hai.',
    gu: 'કાર્ડ ફ્લિપ કરો અને જુઓ કે Mera Dhanda તમને તમારા લોકલ માર્કેટમાં આગળ રહેવામાં કેવી રીતે મદદ કરે છે.',
    mr: 'कार्ड फ्लिप करा आणि पहा की Mera Dhanda तुम्हाला तुमच्या लोकल मार्केटमध्ये पुढे राहण्यासाठी कशी मदत करते.',
    mwr: 'कार्ड पलटो अर देखो कै Mera Dhanda आपनै आपणा लोकल मार्केट में आगै रैवण में किण भांत मदद करै.',
  },
  'card.festive.title': {
    en: 'Festive Automation',
    hi: 'त्योहारी ऑटोमेशन',
    hinglish: 'Festive Automation',
    gu: 'તહેવાર ઓટોમેશન',
    mr: 'सणासुदीचे ऑटोमेशन',
    mwr: 'त्योहारी ऑटोमेशन',
  },
  'card.festive.front': {
    en: 'Never miss a greeting. Automate festive wishes with personalized offers.',
    hi: 'कभी कोई शुभकामना न चूकें। पर्सनलाइज़्ड ऑफ़र के साथ त्योहारी शुभकामनाएं ऑटोमेट करें।',
    hinglish: 'Koi greeting kabhi miss mat karo. Personalized offers ke saath festive wishes automate karo.',
    gu: 'કોઈ શુભેચ્છા ક્યારેય ચૂકશો નહીં. પર્સનલાઇઝ્ડ ઓફર સાથે તહેવારની શુભેચ્છાઓ ઓટોમેટ કરો.',
    mr: 'कोणतीही शुभेच्छा कधीही चुकवू नका. पर्सनलाइझ्ड ऑफरसह सणाच्या शुभेच्छा ऑटोमेट करा.',
    mwr: 'कोई शुभकामना कदै मत चूको. पर्सनलाइज्ड ऑफर रै साथै त्योहारी शुभकामना ऑटोमेट करो.',
  },
  'card.festive.back': {
    en: 'Set up recurring campaigns for Diwali, Eid, Christmas, and more. Our AI selects the best products to showcase based on seasonal demand.',
    hi: 'दिवाली, ईद, क्रिसमस और कई त्योहारों के लिए रिकरिंग कैम्पेन सेट करें। हमारा AI सीज़नल डिमांड के आधार पर दिखाने के लिए सबसे अच्छे प्रोडक्ट चुनता है।',
    hinglish: 'Diwali, Eid, Christmas aur aur bhi tyohaaron ke liye recurring campaigns set karo. Hamara AI seasonal demand ke hisaab se best products select karta hai.',
    gu: 'દિવાળી, ઈદ, ક્રિસમસ અને બીજા તહેવારો માટે રિકરિંગ કેમ્પેન સેટ કરો. અમારું AI સીઝનલ ડિમાન્ડના આધારે બતાવવા માટે શ્રેષ્ઠ પ્રોડક્ટ પસંદ કરે છે.',
    mr: 'दिवाळी, ईद, ख्रिसमस आणि इतर सणांसाठी रिकरिंग कॅम्पेन सेट करा. आमचे AI सीझनल मागणीनुसार दाखवण्यासाठी सर्वोत्तम प्रॉडक्ट निवडते.',
    mwr: 'दिवाली, ईद, क्रिसमस अर ओर त्योहारां खातर रिकरिंग कैम्पेन सेट करो. म्हारो AI सीज़नल डिमांड रै आधार पर दिखावण खातर सबसूं बढिया प्रोडक्ट चुणै.',
  },
  'card.seo.title': {
    en: 'Hyper-Local SEO',
    hi: 'हाइपर-लोकल SEO',
    hinglish: 'Hyper-Local SEO',
    gu: 'હાઇપર-લોકલ SEO',
    mr: 'हायपर-लोकल SEO',
    mwr: 'हाइपर-लोकल SEO',
  },
  'card.seo.front': {
    en: 'Get found by customers in your immediate vicinity.',
    hi: 'अपने आस-पास के ग्राहकों तक आसानी से पहुंचें।',
    hinglish: 'Apne aas-paas ke customers tak aasaani se pahuncho.',
    gu: 'તમારી આસપાસના ગ્રાહકો સુધી સરળતાથી પહોંચો.',
    mr: 'तुमच्या जवळपासच्या ग्राहकांपर्यंत सहज पोहोचा.',
    mwr: 'आपणा आस-पास रा ग्राहकां तांई सहेज पूगो.',
  },
  'card.seo.back': {
    en: 'Integrate with Google Business Profile to sync reviews and updates instantly. Our platform suggests keywords that local customers are searching for.',
    hi: 'रिव्यू और अपडेट तुरंत सिंक करने के लिए Google Business Profile से इंटीग्रेट करें। हमारा प्लेटफ़ॉर्म ऐसे कीवर्ड सुझाता है जो लोकल ग्राहक सर्च कर रहे हैं।',
    hinglish: 'Reviews aur updates turant sync karne ke liye Google Business Profile se integrate karo. Hamara platform aise keywords suggest karta hai jo local customers search kar rahe hain.',
    gu: 'રિવ્યૂ અને અપડેટ તરત સિંક કરવા માટે Google Business Profile સાથે ઇન્ટિગ્રેટ કરો. અમારું પ્લેટફોર્મ એવા કીવર્ડ સૂચવે છે જે લોકલ ગ્રાહકો સર્ચ કરી રહ્યા છે.',
    mr: 'रिव्ह्यू आणि अपडेट लगेच सिंक करण्यासाठी Google Business Profile सोबत इंटिग्रेट करा. आमचे प्लॅटफॉर्म लोकल ग्राहक शोधत असलेले कीवर्ड सुचवते.',
    mwr: 'रिव्यू अर अपडेट तुरंत सिंक करण खातर Google Business Profile सूं इंटीग्रेट करो. म्हारो प्लेटफॉर्म ऐड़ा कीवर्ड सुझावै जो लोकल ग्राहक सर्च कर रिया है.',
  },
  'card.retention.title': {
    en: 'Retention Engine',
    hi: 'रिटेंशन इंजन',
    hinglish: 'Retention Engine',
    gu: 'રિટેન્શન એન્જિન',
    mr: 'रिटेंशन इंजिन',
    mwr: 'रिटेंशन इंजन',
  },
  'card.retention.front': {
    en: 'Turn one-time buyers into lifelong advocates.',
    hi: 'एक बार खरीदने वालों को जीवन भर के वफ़ादार ग्राहक बनाएं।',
    hinglish: 'Ek baar khareedne walon ko lifelong loyal customers banao.',
    gu: 'એક વાર ખરીદનારાઓને જીવનભરના વફાદાર ગ્રાહકોમાં ફેરવો.',
    mr: 'एकदा खरेदी करणाऱ्यांना आयुष्यभराचे निष्ठावान ग्राहक बनवा.',
    mwr: 'एक बार खरीदण आळां नै जीवन भर रा वफादार ग्राहक बणाओ.',
  },
  'card.retention.back': {
    en: 'Identify customers who haven\'t visited in 30 days and send them a "We Miss You" coupon automatically. Boost retention by up to 60%.',
    hi: 'ऐसे ग्राहक पहचानें जो 30 दिनों से नहीं आए और उन्हें अपने आप एक "We Miss You" कूपन भेजें। रिटेंशन को 60% तक बढ़ाएं।',
    hinglish: 'Aise customers identify karo jo 30 din se nahi aaye aur unhe automatically ek "We Miss You" coupon bhejo. Retention 60% tak badhao.',
    gu: 'એવા ગ્રાહકો ઓળખો જે 30 દિવસથી આવ્યા નથી અને તેમને આપમેળે "We Miss You" કૂપન મોકલો. રિટેન્શન 60% સુધી વધારો.',
    mr: '30 दिवसांपासून न आलेले ग्राहक ओळखा आणि त्यांना आपोआप "We Miss You" कूपन पाठवा. रिटेंशन 60% पर्यंत वाढवा.',
    mwr: 'ऐड़ा ग्राहक पिछाणो जो 30 दिन सूं कोनी आया अर उणनै अपणे आप एक "We Miss You" कूपन भेजो. रिटेंशन 60% तांई बढाओ.',
  },
  'launch.eyebrow': {
    en: 'Efficiency',
    hi: 'दक्षता',
    hinglish: 'Efficiency',
    gu: 'કાર્યક્ષમતા',
    mr: 'कार्यक्षमता',
    mwr: 'दक्षता',
  },
  'launch.heading.pre': {
    en: 'Go from concept to launch in ',
    hi: 'कॉन्सेप्ट से लॉन्च तक पहुंचें सिर्फ़ ',
    hinglish: 'Concept se launch tak pahuncho sirf ',
    gu: 'કોન્સેપ્ટથી લોન્ચ સુધી પહોંચો માત્ર ',
    mr: 'कन्सेप्टपासून लॉन्चपर्यंत पोहोचा फक्त ',
    mwr: 'कॉन्सेप्ट सूं लॉन्च तांई पूगो सिरफ ',
  },
  'launch.heading.accent': {
    en: 'minutes.',
    hi: 'मिनटों में।',
    hinglish: 'minutes mein.',
    gu: 'મિનિટોમાં.',
    mr: 'मिनिटांत.',
    mwr: 'मिनटां में.',
  },
  'launch.preview.title': {
    en: 'Campaign Preview',
    hi: 'कैम्पेन प्रीव्यू',
    hinglish: 'Campaign Preview',
    gu: 'કેમ્પેન પ્રીવ્યૂ',
    mr: 'कॅम्पेन प्रीव्ह्यू',
    mwr: 'कैम्पेन प्रीव्यू',
  },
  'launch.step1.label': {
    en: 'Step 1: Choose Audience',
    hi: 'स्टेप 1: ऑडियंस चुनें',
    hinglish: 'Step 1: Audience choose karo',
    gu: 'સ્ટેપ 1: ઓડિયન્સ પસંદ કરો',
    mr: 'स्टेप 1: ऑडियन्स निवडा',
    mwr: 'स्टेप 1: ऑडियंस चुणो',
  },
  'launch.step1.value': {
    en: 'Target: "High Value End Customers"',
    hi: 'टारगेट: "हाई वैल्यू एंड कस्टमर्स"',
    hinglish: 'Target: "High Value End Customers"',
    gu: 'ટાર્ગેટ: "High Value End Customers"',
    mr: 'टार्गेट: "High Value End Customers"',
    mwr: 'टारगेट: "High Value End Customers"',
  },
  'launch.step2.label': {
    en: 'Step 2: Set Template',
    hi: 'स्टेप 2: टेम्पलेट सेट करें',
    hinglish: 'Step 2: Template set karo',
    gu: 'સ્ટેપ 2: ટેમ્પલેટ સેટ કરો',
    mr: 'स्टेप 2: टेम्पलेट सेट करा',
    mwr: 'स्टेप 2: टेम्पलेट सेट करो',
  },
  'launch.step2.value': {
    en: 'Hi {{name}}, enjoy 20% off on your next visit! Use code: DHANDA20',
    hi: 'Hi {{name}}, अपनी अगली विज़िट पर 20% छूट का मज़ा लें! कोड इस्तेमाल करें: DHANDA20',
    hinglish: 'Hi {{name}}, apni next visit par 20% off ka maza lo! Code use karo: DHANDA20',
    gu: 'Hi {{name}}, તમારી આગલી મુલાકાત પર 20% છૂટનો આનંદ માણો! કોડ વાપરો: DHANDA20',
    mr: 'Hi {{name}}, तुमच्या पुढच्या भेटीवर 20% सूट मिळवा! कोड वापरा: DHANDA20',
    mwr: 'Hi {{name}}, आपणी अगली विज़िट पर 20% छूट को मजो लो! कोड काम में लो: DHANDA20',
  },
  'launch.step3.label': {
    en: 'Step 3: Launch',
    hi: 'स्टेप 3: लॉन्च',
    hinglish: 'Step 3: Launch',
    gu: 'સ્ટેપ 3: લોન્ચ',
    mr: 'स्टेप 3: लॉन्च',
    mwr: 'स्टेप 3: लॉन्च',
  },
  'launch.step3.value': {
    en: 'Sending to 1,240 customers...',
    hi: '1,240 ग्राहकों को भेजा जा रहा है...',
    hinglish: '1,240 customers ko bheja ja raha hai...',
    gu: '1,240 ગ્રાહકોને મોકલાઈ રહ્યું છે...',
    mr: '1,240 ग्राहकांना पाठवले जात आहे...',
    mwr: '1,240 ग्राहकां नै भेज्यो जा रियो है...',
  },
  'launch.s1.title': {
    en: 'Sync Your Contacts',
    hi: 'अपने कॉन्टैक्ट सिंक करें',
    hinglish: 'Apne contacts sync karo',
    gu: 'તમારા કોન્ટેક્ટ સિંક કરો',
    mr: 'तुमचे कॉन्टॅक्ट सिंक करा',
    mwr: 'आपणा कॉन्टैक्ट सिंक करो',
  },
  'launch.s1.desc': {
    en: 'Automatically import customers from your sales and billing modules. No manual data entry.',
    hi: 'अपने सेल्स और बिलिंग मॉड्यूल से ग्राहकों को अपने आप इम्पोर्ट करें। कोई मैनुअल डेटा एंट्री नहीं।',
    hinglish: 'Apne sales aur billing modules se customers ko automatically import karo. Koi manual data entry nahi.',
    gu: 'તમારા સેલ્સ અને બિલિંગ મોડ્યૂલમાંથી ગ્રાહકોને આપમેળે ઇમ્પોર્ટ કરો. કોઈ મેન્યુઅલ ડેટા એન્ટ્રી નહીં.',
    mr: 'तुमच्या सेल्स आणि बिलिंग मॉड्यूलमधून ग्राहक आपोआप इम्पोर्ट करा. मॅन्युअल डेटा एंट्री नाही.',
    mwr: 'आपणा सेल्स अर बिलिंग मॉड्यूल सूं ग्राहकां नै अपणे आप इम्पोर्ट करो. कोई मैनुअल डेटा एंट्री कोनी.',
  },
  'launch.s2.title': {
    en: 'Create With AI',
    hi: 'AI से बनाएं',
    hinglish: 'AI se banao',
    gu: 'AI સાથે બનાવો',
    mr: 'AI ने तयार करा',
    mwr: 'AI सूं बणाओ',
  },
  'launch.s2.desc': {
    en: 'Use our AI assistant to write high-converting copy and design eye-catching visuals in seconds.',
    hi: 'हमारे AI असिस्टेंट से सेकंडों में हाई-कन्वर्टिंग कॉपी लिखें और आकर्षक विज़ुअल डिज़ाइन करें।',
    hinglish: 'Hamare AI assistant se seconds mein high-converting copy likho aur eye-catching visuals design karo.',
    gu: 'અમારા AI આસિસ્ટન્ટથી સેકન્ડોમાં હાઇ-કન્વર્ટિંગ કોપી લખો અને આકર્ષક વિઝ્યુઅલ ડિઝાઇન કરો.',
    mr: 'आमच्या AI असिस्टंटने सेकंदांत हाय-कन्व्हर्टिंग कॉपी लिहा आणि आकर्षक व्हिज्युअल डिझाइन करा.',
    mwr: 'म्हारा AI असिस्टेंट सूं सेकंडां में हाई-कन्वर्टिंग कॉपी लिखो अर आकर्षक विज़ुअल डिज़ाइन करो.',
  },
  'launch.s3.title': {
    en: 'Automate The Flow',
    hi: 'फ़्लो ऑटोमेट करें',
    hinglish: 'Flow automate karo',
    gu: 'ફ્લો ઓટોમેટ કરો',
    mr: 'फ्लो ऑटोमेट करा',
    mwr: 'फ्लो ऑटोमेट करो',
  },
  'launch.s3.desc': {
    en: 'Set up drip campaigns that trigger based on customer actions. Perfect timing, every time.',
    hi: 'ऐसे ड्रिप कैम्पेन सेट करें जो ग्राहकों के एक्शन के आधार पर ट्रिगर हों। हर बार परफ़ेक्ट टाइमिंग।',
    hinglish: 'Aise drip campaigns set karo jo customer actions ke basis par trigger hon. Har baar perfect timing.',
    gu: 'એવા ડ્રિપ કેમ્પેન સેટ કરો જે ગ્રાહકોના એક્શન પર ટ્રિગર થાય. દર વખતે પરફેક્ટ ટાઇમિંગ.',
    mr: 'ग्राहकांच्या कृतीवर आधारित ट्रिगर होणारे ड्रिप कॅम्पेन सेट करा. प्रत्येक वेळी परफेक्ट टायमिंग.',
    mwr: 'ऐड़ा ड्रिप कैम्पेन सेट करो जो ग्राहकां रै एक्शन रै आधार पर ट्रिगर होवै. हर बार परफेक्ट टाइमिंग.',
  },
  'cta.heading': {
    en: 'Ready to supercharge your growth?',
    hi: 'अपनी ग्रोथ को सुपरचार्ज करने के लिए तैयार हैं?',
    hinglish: 'Apni growth supercharge karne ke liye ready ho?',
    gu: 'તમારી ગ્રોથ સુપરચાર્જ કરવા તૈયાર છો?',
    mr: 'तुमची वाढ सुपरचार्ज करायला तयार आहात?',
    mwr: 'आपणी ग्रोथ नै सुपरचार्ज करण खातर त्यार हो?',
  },
  'cta.sub': {
    en: 'Join 2,400+ businesses who are scaling their reach with Mera Dhanda Marketing.',
    hi: '2,400+ बिज़नेस के साथ जुड़ें जो Mera Dhanda Marketing से अपनी पहुंच बढ़ा रहे हैं।',
    hinglish: '2,400+ businesses ke saath judo jo Mera Dhanda Marketing se apni reach badha rahe hain.',
    gu: '2,400+ બિઝનેસ સાથે જોડાઓ જે Mera Dhanda Marketing થી તેમની પહોંચ વધારી રહ્યા છે.',
    mr: '2,400+ व्यवसायांसोबत सामील व्हा जे Mera Dhanda Marketing ने त्यांची पोहोच वाढवत आहेत.',
    mwr: '2,400+ बिज़नेस रै साथै जुड़ो जो Mera Dhanda Marketing सूं आपणी पूग बढा रिया है.',
  },
  'cta.btn.start': {
    en: 'Start Marketing Now',
    hi: 'अभी मार्केटिंग शुरू करें',
    hinglish: 'Abhi marketing shuru karein',
    gu: 'હમણાં માર્કેટિંગ શરૂ કરો',
    mr: 'आत्ताच मार्केटिंग सुरू करा',
    mwr: 'अबार ई मार्केटिंग चालू करो',
  },
  'cta.btn.specialist': {
    en: 'Contact Specialist',
    hi: 'स्पेशलिस्ट से संपर्क करें',
    hinglish: 'Specialist se contact karo',
    gu: 'સ્પેશિયાલિસ્ટનો સંપર્ક કરો',
    mr: 'स्पेशालिस्टशी संपर्क करा',
    mwr: 'स्पेशलिस्ट सूं संपर्क करो',
  },
  'cta.feat.nocard': {
    en: 'No credit card required',
    hi: 'क्रेडिट कार्ड की ज़रूरत नहीं',
    hinglish: 'Credit card ki zaroorat nahi',
    gu: 'ક્રેડિટ કાર્ડની જરૂર નથી',
    mr: 'क्रेडिट कार्डची गरज नाही',
    mwr: 'क्रेडिट कार्ड री जरूरत कोनी',
  },
  'cta.feat.trial': {
    en: '14-day free trial',
    hi: '14-दिन का फ़्री ट्रायल',
    hinglish: '14-din ka free trial',
    gu: '14-દિવસનો ફ્રી ટ્રાયલ',
    mr: '14-दिवसांचा मोफत ट्रायल',
    mwr: '14-दिन को फ्री ट्रायल',
  },
  'cta.feat.cancel': {
    en: 'Cancel anytime',
    hi: 'कभी भी कैंसिल करें',
    hinglish: 'Kabhi bhi cancel karo',
    gu: 'ગમે ત્યારે રદ કરો',
    mr: 'कधीही रद्द करा',
    mwr: 'कदै ई कैंसिल करो',
  },
};

export default function Marketing() {
  const t = useT(STRINGS);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-orange-50 rounded-full blur-3xl opacity-50" />
        
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
                className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                {t('hero.badge')}
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                {t('hero.title.pre')}<span className="text-orange-600 italic">{t('hero.title.accent')}</span>{t('hero.title.post')}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                {t('hero.desc')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all flex items-center gap-2 group">
                  {t('hero.cta.trial')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  {t('hero.cta.demo')}
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-orange-600/5 rounded-[2rem] blur-2xl" />
              <img 
                src="/images/business_marketing_preview_1778577683568.png" 
                alt={t('hero.alt')}
                className="relative rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{t('hero.stat.label')}</p>
                    <p className="text-2xl font-black text-gray-900">+42.8%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">{t('features.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('features.sub')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                titleKey: "feat.whatsapp.title",
                descKey: "feat.whatsapp.desc",
                color: "bg-teal-100 text-teal-600"
              },
              {
                icon: Target,
                titleKey: "feat.target.title",
                descKey: "feat.target.desc",
                color: "bg-themeGreen-100 text-themeGreen-600"
              },
              {
                icon: Zap,
                titleKey: "feat.triggers.title",
                descKey: "feat.triggers.desc",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: Users,
                titleKey: "feat.loyalty.title",
                descKey: "feat.loyalty.desc",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Globe,
                titleKey: "feat.omni.title",
                descKey: "feat.omni.desc",
                color: "bg-indigo-100 text-indigo-600"
              },
              {
                icon: BarChart3,
                titleKey: "feat.analytics.title",
                descKey: "feat.analytics.desc",
                color: "bg-red-100 text-red-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Marketing Strategies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">{t('strat.heading.pre')}<span className="text-orange-600 italic">{t('strat.heading.accent')}</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t('strat.sub')}</p>
          </div>

          <InteractiveCards 
            items={[
              {
                title: t('card.festive.title'),
                frontDesc: t('card.festive.front'),
                backDesc: t('card.festive.back'),
                icon: Zap,
                color: '#EA580C'
              },
              {
                title: t('card.seo.title'),
                frontDesc: t('card.seo.front'),
                backDesc: t('card.seo.back'),
                icon: Globe,
                color: '#C05621'
              },
              {
                title: t('card.retention.title'),
                frontDesc: t('card.retention.front'),
                backDesc: t('card.retention.back'),
                icon: Users,
                color: '#7C3AED'
              }
            ]}
          />
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-600/5 rounded-[3rem] -rotate-3" />
                <div className="relative bg-white p-4 rounded-[3rem] border border-gray-100 shadow-2xl">
                   <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white">
                      <div className="flex items-center gap-3 mb-8">
                         <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                            <Bell size={20} />
                         </div>
                         <p className="font-bold">{t('launch.preview.title')}</p>
                      </div>
                      <div className="space-y-4">
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-orange-400 text-xs font-bold mb-1 uppercase">{t('launch.step1.label')}</p>
                            <p className="text-sm">{t('launch.step1.value')}</p>
                         </div>
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-orange-400 text-xs font-bold mb-1 uppercase">{t('launch.step2.label')}</p>
                            <p className="text-sm">
                              {t('launch.step2.value')}
                            </p>
                         </div>
                         <div className="p-4 bg-orange-600 rounded-2xl shadow-lg shadow-orange-600/20">
                            <p className="text-white text-xs font-bold mb-1 uppercase text-center">{t('launch.step3.label')}</p>
                            <p className="text-sm text-center font-bold italic">{t('launch.step3.value')}</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">{t('launch.eyebrow')}</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-8">{t('launch.heading.pre')}<span className="text-orange-600 underline">{t('launch.heading.accent')}</span></h2>
              
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    titleKey: "launch.s1.title",
                    descKey: "launch.s1.desc"
                  },
                  {
                    num: "02",
                    titleKey: "launch.s2.title",
                    descKey: "launch.s2.desc"
                  },
                  {
                    num: "03",
                    titleKey: "launch.s3.title",
                    descKey: "launch.s3.desc"
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-gray-100 group-hover:text-orange-100 transition-colors">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{t(step.titleKey)}</h4>
                      <p className="text-gray-600 leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#2B1B12] rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-full h-full bg-orange-600/5 blur-[120px]" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">{t('cta.heading')}</h2>
              <p className="text-xl text-gray-400 mb-12">{t('cta.sub')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all">
                  {t('cta.btn.start')}
                </button>
                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                  {t('cta.btn.specialist')}
                </button>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>{t('cta.feat.nocard')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>{t('cta.feat.trial')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>{t('cta.feat.cancel')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
