import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Target,
  PhoneCall,
  Mail,
  Kanban,
  BarChart3,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': {
    en: 'Sales Acceleration',
    hi: 'सेल्स एक्सेलरेशन',
    hinglish: 'Sales Acceleration',
    gu: 'સેલ્સ એક્સિલરેશન',
    mr: 'सेल्स एक्सेलरेशन',
    mwr: 'सेल्स एक्सेलरेशन',
  },
  'hero.title.pre': {
    en: 'Turn Leads into ',
    hi: 'लीड्स को बदलें ',
    hinglish: 'Leads ko banao ',
    gu: 'લીડ્સને બદલો ',
    mr: 'लीड्सचे रूपांतर करा ',
    mwr: 'लीड्स नै बदलो ',
  },
  'hero.title.accent': {
    en: 'Relationships.',
    hi: 'रिश्तों में।',
    hinglish: 'Relationships.',
    gu: 'સંબંધોમાં.',
    mr: 'नातेसंबंधांत.',
    mwr: 'रिश्तां में।',
  },
  'hero.subtitle': {
    en: 'Stop losing deals in messy spreadsheets. Mera Dhanda CRM provides a crystal-clear view of your sales funnel, helping you close more deals with less effort.',
    hi: 'बिखरी हुई स्प्रेडशीट्स में डील्स खोना बंद करें। Mera Dhanda CRM आपके सेल्स फ़नल का बिल्कुल साफ़ नज़ारा देता है, ताकि आप कम मेहनत में ज़्यादा डील्स बंद कर सकें।',
    hinglish: 'Messy spreadsheets mein deals khona band karein. Mera Dhanda CRM aapke sales funnel ka crystal-clear view deta hai, jisse aap kam mehnat mein zyada deals close kar sakein.',
    gu: 'ગૂંચવાયેલી સ્પ્રેડશીટ્સમાં ડીલ્સ ગુમાવવાનું બંધ કરો. Mera Dhanda CRM તમારા સેલ્સ ફનલનો એકદમ સ્પષ્ટ વ્યૂ આપે છે, જેથી તમે ઓછી મહેનતે વધુ ડીલ્સ ક્લોઝ કરી શકો.',
    mr: 'अस्ताव्यस्त स्प्रेडशीट्समध्ये डील्स गमावणे थांबवा. Mera Dhanda CRM तुमच्या सेल्स फनेलचे अगदी स्पष्ट चित्र देते, ज्यामुळे तुम्ही कमी मेहनतीत अधिक डील्स क्लोज करू शकता.',
    mwr: 'गड़बड़ स्प्रेडशीट्स में डील्स गुमावणो बंद करो। Mera Dhanda CRM थारे सेल्स फनल रो एकदम साफ नजारो देवै, जिणसूं थे कम मेहनत में ज्यादा डील्स बंद कर सको।',
  },
  'hero.cta.primary': {
    en: 'Get Started Free',
    hi: 'मुफ़्त में शुरू करें',
    hinglish: 'Free mein shuru karein',
    gu: 'મફતમાં શરૂ કરો',
    mr: 'मोफत सुरू करा',
    mwr: 'फ्री में चालू करो',
  },
  'hero.cta.secondary': {
    en: 'Book a Demo',
    hi: 'डेमो बुक करें',
    hinglish: 'Demo book karein',
    gu: 'ડેમો બુક કરો',
    mr: 'डेमो बुक करा',
    mwr: 'डेमो बुक करो',
  },
  'kanban.title': {
    en: 'Active Deals',
    hi: 'एक्टिव डील्स',
    hinglish: 'Active Deals',
    gu: 'એક્ટિવ ડીલ્સ',
    mr: 'सक्रिय डील्स',
    mwr: 'एक्टिव डील्स',
  },
  'deal.1.title': {
    en: 'New Order - ImTech',
    hi: 'नया ऑर्डर - ImTech',
    hinglish: 'New Order - ImTech',
    gu: 'નવો ઓર્ડર - ImTech',
    mr: 'नवीन ऑर्डर - ImTech',
    mwr: 'नवो ऑर्डर - ImTech',
  },
  'deal.1.stage': {
    en: 'Negotiation',
    hi: 'बातचीत',
    hinglish: 'Negotiation',
    gu: 'નેગોશિએશન',
    mr: 'वाटाघाटी',
    mwr: 'बातचीत',
  },
  'deal.2.title': {
    en: 'Service AMC - Metro',
    hi: 'सर्विस AMC - Metro',
    hinglish: 'Service AMC - Metro',
    gu: 'સર્વિસ AMC - Metro',
    mr: 'सर्व्हिस AMC - Metro',
    mwr: 'सर्विस AMC - Metro',
  },
  'deal.2.stage': {
    en: 'Discovery',
    hi: 'डिस्कवरी',
    hinglish: 'Discovery',
    gu: 'ડિસ્કવરી',
    mr: 'डिस्कवरी',
    mwr: 'डिस्कवरी',
  },
  'features.heading': {
    en: 'A CRM that works for you',
    hi: 'एक CRM जो आपके लिए काम करे',
    hinglish: 'Ek CRM jo aapke liye kaam kare',
    gu: 'એક CRM જે તમારા માટે કામ કરે',
    mr: 'एक CRM जो तुमच्यासाठी काम करते',
    mwr: 'एक CRM जको थारे खातर काम करै',
  },
  'features.sub': {
    en: 'Designed to be simple enough for anyone to use, yet powerful enough to scale with your enterprise.',
    hi: 'इतना आसान कि कोई भी इस्तेमाल कर सके, फिर भी इतना दमदार कि आपके एंटरप्राइज़ के साथ बढ़ सके।',
    hinglish: 'Itna simple ki koi bhi use kar sake, phir bhi itna powerful ki aapke enterprise ke saath scale kare.',
    gu: 'એટલું સરળ કે કોઈ પણ વાપરી શકે, છતાં એટલું શક્તિશાળી કે તમારા એન્ટરપ્રાઇઝ સાથે સ્કેલ થાય.',
    mr: 'इतके सोपे की कोणीही वापरू शकेल, तरीही इतके शक्तिशाली की तुमच्या एंटरप्राइझसोबत स्केल होईल.',
    mwr: 'इतको सरल कै कोई बी काम में लै सकै, फेर बी इतको दमदार कै थारे एंटरप्राइज रे साथै बढ़ सकै।',
  },
  'feat.lead.title': {
    en: 'Lead Intelligence',
    hi: 'लीड इंटेलिजेंस',
    hinglish: 'Lead Intelligence',
    gu: 'લીડ ઇન્ટેલિજન્સ',
    mr: 'लीड इंटेलिजन्स',
    mwr: 'लीड इंटेलिजेंस',
  },
  'feat.lead.desc': {
    en: 'AI-driven scoring tells you which leads to call first, based on 50+ engagement signals.',
    hi: '50+ एंगेजमेंट सिग्नल्स के आधार पर AI-संचालित स्कोरिंग बताती है कि पहले किन लीड्स को कॉल करना है।',
    hinglish: 'AI-driven scoring batati hai ki pehle kaun si leads ko call karna hai, 50+ engagement signals ke basis par.',
    gu: '50+ એંગેજમેન્ટ સિગ્નલ્સના આધારે AI-આધારિત સ્કોરિંગ જણાવે છે કે પહેલા કઈ લીડ્સને કૉલ કરવી.',
    mr: '50+ एंगेजमेंट सिग्नल्सच्या आधारे AI-चालित स्कोअरिंग सांगते की आधी कोणत्या लीड्सना कॉल करायचे.',
    mwr: '50+ एंगेजमेंट सिग्नल्स रे आधार माथै AI-चालित स्कोरिंग बतावै कै पैली कुण-सी लीड्स नै कॉल करणी।',
  },
  'feat.pipeline.title': {
    en: 'Visual Pipeline',
    hi: 'विज़ुअल पाइपलाइन',
    hinglish: 'Visual Pipeline',
    gu: 'વિઝ્યુઅલ પાઇપલાઇન',
    mr: 'व्हिज्युअल पाइपलाइन',
    mwr: 'विजुअल पाइपलाइन',
  },
  'feat.pipeline.desc': {
    en: 'Drag-and-drop your way to success with customizable Kanban boards for every sales process.',
    hi: 'हर सेल्स प्रोसेस के लिए कस्टमाइज़ेबल Kanban बोर्ड्स के साथ ड्रैग-एंड-ड्रॉप से कामयाबी पाएं।',
    hinglish: 'Har sales process ke liye customizable Kanban boards ke saath drag-and-drop karke success paayein.',
    gu: 'દરેક સેલ્સ પ્રોસેસ માટે કસ્ટમાઇઝેબલ Kanban બોર્ડ્સ સાથે ડ્રેગ-એન્ડ-ડ્રોપ કરીને સફળતા મેળવો.',
    mr: 'प्रत्येक सेल्स प्रोसेससाठी कस्टमायझेबल Kanban बोर्ड्ससह ड्रॅग-अँड-ड्रॉप करून यश मिळवा.',
    mwr: 'हर सेल्स प्रोसेस खातर कस्टमाइजेबल Kanban बोर्ड्स रे साथै ड्रैग-एंड-ड्रॉप करर कामयाबी पावो।',
  },
  'feat.calling.title': {
    en: 'Cloud Calling',
    hi: 'क्लाउड कॉलिंग',
    hinglish: 'Cloud Calling',
    gu: 'ક્લાઉડ કૉલિંગ',
    mr: 'क्लाउड कॉलिंग',
    mwr: 'क्लाउड कॉलिंग',
  },
  'feat.calling.desc': {
    en: 'Call directly from the CRM. Automatically log every conversation, recording, and outcome.',
    hi: 'सीधे CRM से कॉल करें। हर बातचीत, रिकॉर्डिंग और नतीजा अपने-आप लॉग हो जाता है।',
    hinglish: 'Seedhe CRM se call karein. Har conversation, recording aur outcome automatically log ho jaata hai.',
    gu: 'સીધા CRM થી કૉલ કરો. દરેક વાતચીત, રેકોર્ડિંગ અને પરિણામ આપમેળે લોગ થાય છે.',
    mr: 'थेट CRM मधून कॉल करा. प्रत्येक संभाषण, रेकॉर्डिंग आणि निकाल आपोआप लॉग होतो.',
    mwr: 'सीधो CRM सूं कॉल करो। हर बातचीत, रिकॉर्डिंग अर नतीजो खुद-ब-खुद लॉग होय जावै।',
  },
  'feat.reminders.title': {
    en: 'Auto-Reminders',
    hi: 'ऑटो-रिमाइंडर',
    hinglish: 'Auto-Reminders',
    gu: 'ઓટો-રિમાઇન્ડર',
    mr: 'ऑटो-रिमाइंडर',
    mwr: 'ऑटो-रिमाइंडर',
  },
  'feat.reminders.desc': {
    en: 'Never let a lead go cold. Set automated WhatsApp and email follow-ups for every deal stage.',
    hi: 'किसी लीड को ठंडा न पड़ने दें। हर डील स्टेज के लिए ऑटोमेटेड WhatsApp और email फ़ॉलो-अप सेट करें।',
    hinglish: 'Kisi lead ko cold mat hone dein. Har deal stage ke liye automated WhatsApp aur email follow-ups set karein.',
    gu: 'કોઈ લીડને ઠંડી પડવા ન દો. દરેક ડીલ સ્ટેજ માટે ઓટોમેટેડ WhatsApp અને email ફોલો-અપ સેટ કરો.',
    mr: 'कोणतीही लीड थंड पडू देऊ नका. प्रत्येक डील स्टेजसाठी ऑटोमेटेड WhatsApp आणि email फॉलो-अप सेट करा.',
    mwr: 'कोई लीड नै ठंडी मत पड़ण द्यो। हर डील स्टेज खातर ऑटोमेटेड WhatsApp अर email फॉलो-अप सेट करो।',
  },
  'feat.email.title': {
    en: 'Email Sync',
    hi: 'ईमेल सिंक',
    hinglish: 'Email Sync',
    gu: 'ઈમેલ સિંક',
    mr: 'ईमेल सिंक',
    mwr: 'ईमेल सिंक',
  },
  'feat.email.desc': {
    en: 'Bi-directional sync with Gmail and Outlook. Track opens, clicks, and reply rates effortlessly.',
    hi: 'Gmail और Outlook के साथ दोतरफ़ा सिंक। ओपन, क्लिक और रिप्लाई रेट को आसानी से ट्रैक करें।',
    hinglish: 'Gmail aur Outlook ke saath bi-directional sync. Opens, clicks aur reply rates ko aasaani se track karein.',
    gu: 'Gmail અને Outlook સાથે દ્વિ-માર્ગી સિંક. ઓપન, ક્લિક અને રિપ્લાય રેટ સરળતાથી ટ્રેક કરો.',
    mr: 'Gmail आणि Outlook सोबत द्वि-मार्गी सिंक. ओपन, क्लिक आणि रिप्लाय रेट सहज ट्रॅक करा.',
    mwr: 'Gmail अर Outlook रे साथै दोतरफा सिंक। ओपन, क्लिक अर रिप्लाई रेट नै सहज ट्रैक करो।',
  },
  'feat.team.title': {
    en: 'Team Collaboration',
    hi: 'टीम कोलैबोरेशन',
    hinglish: 'Team Collaboration',
    gu: 'ટીમ કોલાબોરેશન',
    mr: 'टीम कोलॅबोरेशन',
    mwr: 'टीम कोलैबोरेशन',
  },
  'feat.team.desc': {
    en: 'Share notes, tag teammates, and assign tasks directly on lead profiles for better alignment.',
    hi: 'बेहतर तालमेल के लिए नोट्स शेयर करें, टीममेट्स को टैग करें और लीड प्रोफ़ाइल पर सीधे टास्क असाइन करें।',
    hinglish: 'Behtar alignment ke liye notes share karein, teammates ko tag karein aur lead profiles par seedhe tasks assign karein.',
    gu: 'સારા સંકલન માટે નોટ્સ શેર કરો, ટીમમેટ્સને ટેગ કરો અને લીડ પ્રોફાઇલ પર સીધા ટાસ્ક અસાઇન કરો.',
    mr: 'चांगल्या समन्वयासाठी नोट्स शेअर करा, टीममेट्सना टॅग करा आणि लीड प्रोफाइलवर थेट टास्क असाइन करा.',
    mwr: 'बढ़िया तालमेल खातर नोट्स शेयर करो, टीममेट्स नै टैग करो अर लीड प्रोफाइल माथै सीधो टास्क असाइन करो।',
  },
  'feat.forecast.title': {
    en: 'Revenue Forecast',
    hi: 'रेवेन्यू फ़ोरकास्ट',
    hinglish: 'Revenue Forecast',
    gu: 'રેવન્યૂ ફોરકાસ્ટ',
    mr: 'रेव्हेन्यू फोरकास्ट',
    mwr: 'रेवेन्यू फोरकास्ट',
  },
  'feat.forecast.desc': {
    en: 'Get accurate sales predictions. Know exactly how much revenue is coming in next month.',
    hi: 'सटीक सेल्स भविष्यवाणी पाएं। ठीक-ठीक जानें कि अगले महीने कितना रेवेन्यू आने वाला है।',
    hinglish: 'Accurate sales predictions paayein. Theek-theek jaanein ki agle mahine kitna revenue aane wala hai.',
    gu: 'સચોટ સેલ્સ આગાહી મેળવો. બરાબર જાણો કે આવતા મહિને કેટલું રેવન્યૂ આવવાનું છે.',
    mr: 'अचूक सेल्स अंदाज मिळवा. पुढच्या महिन्यात नेमके किती रेव्हेन्यू येणार आहे ते जाणून घ्या.',
    mwr: 'सटीक सेल्स भविष्यवाणी पावो। ठीक-ठीक जाणो कै अगलै महीनै कितरो रेवेन्यू आवण वालो है।',
  },
  'feat.security.title': {
    en: 'Data Security',
    hi: 'डेटा सिक्योरिटी',
    hinglish: 'Data Security',
    gu: 'ડેટા સિક્યોરિટી',
    mr: 'डेटा सिक्युरिटी',
    mwr: 'डेटा सिक्योरिटी',
  },
  'feat.security.desc': {
    en: 'Enterprise-grade encryption ensures your customer data and sales strategies stay private.',
    hi: 'एंटरप्राइज़-ग्रेड एन्क्रिप्शन सुनिश्चित करता है कि आपका कस्टमर डेटा और सेल्स रणनीतियाँ निजी रहें।',
    hinglish: 'Enterprise-grade encryption ensure karta hai ki aapka customer data aur sales strategies private rahein.',
    gu: 'એન્ટરપ્રાઇઝ-ગ્રેડ એન્ક્રિપ્શન ખાતરી કરે છે કે તમારો કસ્ટમર ડેટા અને સેલ્સ સ્ટ્રેટેજી પ્રાઇવેટ રહે.',
    mr: 'एंटरप्राइझ-ग्रेड एन्क्रिप्शन खात्री करते की तुमचा कस्टमर डेटा आणि सेल्स रणनीती खाजगी राहतात.',
    mwr: 'एंटरप्राइज-ग्रेड एन्क्रिप्शन पक्को करै कै थारो कस्टमर डेटा अर सेल्स रणनीति प्राइवेट रैवै।',
  },
  'funnel.heading.pre': {
    en: 'Master the entire ',
    hi: 'पूरे ',
    hinglish: 'Poore ',
    gu: 'સંપૂર્ણ ',
    mr: 'संपूर्ण ',
    mwr: 'पूरा ',
  },
  'funnel.heading.accent': {
    en: 'Sales Lifecycle.',
    hi: 'सेल्स लाइफ़साइकिल में महारत पाएं।',
    hinglish: 'Sales Lifecycle ko master karein.',
    gu: 'સેલ્સ લાઇફસાઇકલમાં નિપુણ બનો.',
    mr: 'सेल्स लाइफसायकलवर प्रभुत्व मिळवा.',
    mwr: 'सेल्स लाइफसाइकल में महारत पावो।',
  },
  'stage.capture.step': {
    en: 'Lead Capture',
    hi: 'लीड कैप्चर',
    hinglish: 'Lead Capture',
    gu: 'લીડ કૅપ્ચર',
    mr: 'लीड कॅप्चर',
    mwr: 'लीड कैप्चर',
  },
  'stage.capture.desc': {
    en: 'Instantly capture leads from your website, WhatsApp, and social media ads.',
    hi: 'अपनी वेबसाइट, WhatsApp और सोशल मीडिया विज्ञापनों से तुरंत लीड्स कैप्चर करें।',
    hinglish: 'Apni website, WhatsApp aur social media ads se turant leads capture karein.',
    gu: 'તમારી વેબસાઇટ, WhatsApp અને સોશિયલ મીડિયા જાહેરાતોમાંથી તરત જ લીડ્સ કૅપ્ચર કરો.',
    mr: 'तुमच्या वेबसाइट, WhatsApp आणि सोशल मीडिया जाहिरातींमधून त्वरित लीड्स कॅप्चर करा.',
    mwr: 'थारी वेबसाइट, WhatsApp अर सोशल मीडिया विज्ञापना सूं तुरंत लीड्स कैप्चर करो।',
  },
  'stage.qualify.step': {
    en: 'Qualification',
    hi: 'क्वालिफ़िकेशन',
    hinglish: 'Qualification',
    gu: 'ક્વોલિફિકેશન',
    mr: 'क्वालिफिकेशन',
    mwr: 'क्वालिफिकेशन',
  },
  'stage.qualify.desc': {
    en: 'Use custom fields and AI scoring to identify high-intent prospects immediately.',
    hi: 'हाई-इंटेंट प्रॉस्पेक्ट्स को तुरंत पहचानने के लिए कस्टम फ़ील्ड्स और AI स्कोरिंग का इस्तेमाल करें।',
    hinglish: 'High-intent prospects ko turant pehchaanne ke liye custom fields aur AI scoring use karein.',
    gu: 'હાઈ-ઇન્ટેન્ટ પ્રોસ્પેક્ટ્સને તરત ઓળખવા માટે કસ્ટમ ફીલ્ડ્સ અને AI સ્કોરિંગનો ઉપયોગ કરો.',
    mr: 'हाय-इंटेंट प्रॉस्पेक्ट्स त्वरित ओळखण्यासाठी कस्टम फील्ड्स आणि AI स्कोअरिंग वापरा.',
    mwr: 'हाई-इंटेंट प्रॉस्पेक्ट्स नै तुरंत पिछाणण खातर कस्टम फील्ड्स अर AI स्कोरिंग काम में ल्यो।',
  },
  'stage.nurture.step': {
    en: 'Nurturing',
    hi: 'नर्चरिंग',
    hinglish: 'Nurturing',
    gu: 'નર્ચરિંગ',
    mr: 'नर्चरिंग',
    mwr: 'नर्चरिंग',
  },
  'stage.nurture.desc': {
    en: 'Automate follow-up sequences to keep your brand top-of-mind without manual effort.',
    hi: 'बिना मैनुअल मेहनत के अपने ब्रांड को याद में बनाए रखने के लिए फ़ॉलो-अप सीक्वेंस ऑटोमेट करें।',
    hinglish: 'Bina manual mehnat ke apne brand ko top-of-mind rakhne ke liye follow-up sequences automate karein.',
    gu: 'મેન્યુઅલ મહેનત વગર તમારી બ્રાન્ડને ટોપ-ઓફ-માઇન્ડ રાખવા માટે ફોલો-અપ સિક્વન્સ ઓટોમેટ કરો.',
    mr: 'मॅन्युअल मेहनतीशिवाय तुमचा ब्रँड लोकांच्या लक्षात ठेवण्यासाठी फॉलो-अप सिक्वेन्स ऑटोमेट करा.',
    mwr: 'बिना मैनुअल मेहनत रे थारे ब्रांड नै याद में राखण खातर फॉलो-अप सीक्वेंस ऑटोमेट करो।',
  },
  'stage.close.step': {
    en: 'Closing',
    hi: 'क्लोज़िंग',
    hinglish: 'Closing',
    gu: 'ક્લોઝિંગ',
    mr: 'क्लोजिंग',
    mwr: 'क्लोजिंग',
  },
  'stage.close.desc': {
    en: 'Generate GST-ready quotes and proforma invoices directly from the deal view.',
    hi: 'डील व्यू से सीधे GST-रेडी कोटेशन और प्रोफ़ॉर्मा इनवॉइस जेनरेट करें।',
    hinglish: 'Deal view se seedhe GST-ready quotes aur proforma invoices generate karein.',
    gu: 'ડીલ વ્યૂમાંથી સીધા GST-રેડી ક્વોટ્સ અને પ્રોફોર્મા ઇન્વોઇસ જનરેટ કરો.',
    mr: 'डील व्ह्यूमधून थेट GST-रेडी कोट्स आणि प्रोफॉर्मा इन्व्हॉइस जनरेट करा.',
    mwr: 'डील व्यू सूं सीधो GST-रेडी कोटेशन अर प्रोफॉर्मा इनवॉइस जेनरेट करो।',
  },
  'stage.retain.step': {
    en: 'Retention',
    hi: 'रिटेंशन',
    hinglish: 'Retention',
    gu: 'રિટેન્શન',
    mr: 'रिटेन्शन',
    mwr: 'रिटेंशन',
  },
  'stage.retain.desc': {
    en: 'Turn customers into advocates with automated check-ins and loyalty triggers.',
    hi: 'ऑटोमेटेड चेक-इन और लॉयल्टी ट्रिगर्स से ग्राहकों को अपना प्रचारक बनाएं।',
    hinglish: 'Automated check-ins aur loyalty triggers se customers ko advocates banayein.',
    gu: 'ઓટોમેટેડ ચેક-ઇન અને લોયલ્ટી ટ્રિગર્સ વડે ગ્રાહકોને એડવોકેટ્સ બનાવો.',
    mr: 'ऑटोमेटेड चेक-इन आणि लॉयल्टी ट्रिगर्सने ग्राहकांना ब्रँडचे समर्थक बनवा.',
    mwr: 'ऑटोमेटेड चेक-इन अर लॉयल्टी ट्रिगर्स सूं ग्राहकां नै आपणो प्रचारक बणावो।',
  },
  'analytics.label': {
    en: 'Analytics',
    hi: 'एनालिटिक्स',
    hinglish: 'Analytics',
    gu: 'એનાલિટિક્સ',
    mr: 'अॅनालिटिक्स',
    mwr: 'एनालिटिक्स',
  },
  'analytics.title': {
    en: 'Sales Conversion',
    hi: 'सेल्स कन्वर्ज़न',
    hinglish: 'Sales Conversion',
    gu: 'સેલ્સ કન્વર્ઝન',
    mr: 'सेल्स कन्व्हर्जन',
    mwr: 'सेल्स कन्वर्जन',
  },
  'stat.newleads.label': {
    en: 'New Leads',
    hi: 'नई लीड्स',
    hinglish: 'New Leads',
    gu: 'નવી લીડ્સ',
    mr: 'नवीन लीड्स',
    mwr: 'नवी लीड्स',
  },
  'stat.qualified.label': {
    en: 'Qualified',
    hi: 'क्वालिफ़ाइड',
    hinglish: 'Qualified',
    gu: 'ક્વોલિફાઇડ',
    mr: 'क्वालिफाइड',
    mwr: 'क्वालिफाइड',
  },
  'stat.proposals.label': {
    en: 'Proposals',
    hi: 'प्रपोज़ल्स',
    hinglish: 'Proposals',
    gu: 'પ્રપોઝલ્સ',
    mr: 'प्रपोजल्स',
    mwr: 'प्रपोजल्स',
  },
  'stat.won.label': {
    en: 'Won',
    hi: 'जीते',
    hinglish: 'Won',
    gu: 'જીત્યા',
    mr: 'जिंकले',
    mwr: 'जीत्या',
  },
  'metric.cycle.label': {
    en: 'Avg. Deal Cycle',
    hi: 'औसत डील साइकिल',
    hinglish: 'Avg. Deal Cycle',
    gu: 'સરેરાશ ડીલ સાઇકલ',
    mr: 'सरासरी डील सायकल',
    mwr: 'औसत डील साइकिल',
  },
  'metric.cycle.value': {
    en: '14 Days',
    hi: '14 दिन',
    hinglish: '14 Din',
    gu: '14 દિવસ',
    mr: '14 दिवस',
    mwr: '14 दिन',
  },
  'metric.winrate.label': {
    en: 'Win Rate',
    hi: 'विन रेट',
    hinglish: 'Win Rate',
    gu: 'વિન રેટ',
    mr: 'विन रेट',
    mwr: 'विन रेट',
  },
  'cta.heading': {
    en: 'Ready to grow your revenue?',
    hi: 'अपना रेवेन्यू बढ़ाने के लिए तैयार हैं?',
    hinglish: 'Apna revenue badhane ke liye taiyaar hain?',
    gu: 'તમારું રેવન્યૂ વધારવા માટે તૈયાર છો?',
    mr: 'तुमचा रेव्हेन्यू वाढवायला तयार आहात?',
    mwr: 'आपणो रेवेन्यू बढ़ावण खातर त्यार हो?',
  },
  'cta.sub': {
    en: 'Join the high-performing sales teams who use Mera Dhanda to close more deals every single day.',
    hi: 'उन हाई-परफ़ॉर्मिंग सेल्स टीमों से जुड़ें जो हर रोज़ ज़्यादा डील्स बंद करने के लिए Mera Dhanda का इस्तेमाल करती हैं।',
    hinglish: 'Un high-performing sales teams ke saath judein jo har roz zyada deals close karne ke liye Mera Dhanda use karti hain.',
    gu: 'એ હાઈ-પર્ફોર્મિંગ સેલ્સ ટીમો સાથે જોડાઓ જે દરરોજ વધુ ડીલ્સ ક્લોઝ કરવા Mera Dhanda વાપરે છે.',
    mr: 'त्या हाय-परफॉर्मिंग सेल्स टीम्ससोबत सामील व्हा ज्या दररोज अधिक डील्स क्लोज करण्यासाठी Mera Dhanda वापरतात.',
    mwr: 'उण हाई-परफॉर्मिंग सेल्स टीमां रे साथै जुड़ो जको हर रोज ज्यादा डील्स बंद करण खातर Mera Dhanda काम में लेवै।',
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
    en: 'Watch a Demo',
    hi: 'डेमो देखें',
    hinglish: 'Demo dekhein',
    gu: 'ડેમો જુઓ',
    mr: 'डेमो पाहा',
    mwr: 'डेमो देखो',
  },
};

export default function LeadsCRM() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-themeGreen-50/50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-600 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                {t('hero.badge')}
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                {t('hero.title.pre')}<span className="text-themeGreen-600">{t('hero.title.accent')}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-themeGreen-600 text-white rounded-xl font-bold shadow-lg shadow-themeGreen-200 hover:bg-themeGreen-700 transition-all flex items-center gap-2 group">
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
              <div className="absolute -inset-4 bg-themeGreen-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-gray-100">
                <img
                  src="/images/leads_crm_preview_1778579439651.png"
                  alt="CRM Dashboard"
                  className="rounded-2xl"
                />

                {/* Interactive Kanban Mockup */}
                <div className="absolute top-1/2 -right-12 translate-y-[-50%] w-64 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 hidden xl:block">
                   <p className="text-sm font-bold mb-4 flex items-center gap-2">
                      <Kanban size={16} className="text-themeGreen-600" />
                      {t('kanban.title')}
                   </p>
                   <div className="space-y-3">
                      {[
                        { titleKey: "deal.1.title", value: "₹2,45,000", stageKey: "deal.1.stage" },
                        { titleKey: "deal.2.title", value: "₹48,000", stageKey: "deal.2.stage" }
                      ].map((deal, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                           <p className="text-xs font-bold text-gray-900">{t(deal.titleKey)}</p>
                           <div className="flex justify-between items-center mt-2">
                              <span className="text-[10px] text-themeGreen-600 font-bold px-2 py-0.5 bg-themeGreen-50 rounded-full">{t(deal.stageKey)}</span>
                              <span className="text-xs font-black text-gray-900">{deal.value}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">{t('features.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('features.sub')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                titleKey: "feat.lead.title",
                descKey: "feat.lead.desc",
                color: "text-themeGreen-600 bg-themeGreen-50"
              },
              {
                icon: Kanban,
                titleKey: "feat.pipeline.title",
                descKey: "feat.pipeline.desc",
                color: "text-purple-600 bg-purple-50"
              },
              {
                icon: PhoneCall,
                titleKey: "feat.calling.title",
                descKey: "feat.calling.desc",
                color: "text-teal-600 bg-teal-50"
              },
              {
                icon: Clock,
                titleKey: "feat.reminders.title",
                descKey: "feat.reminders.desc",
                color: "text-orange-600 bg-orange-50"
              },
              {
                icon: Mail,
                titleKey: "feat.email.title",
                descKey: "feat.email.desc",
                color: "text-indigo-600 bg-indigo-50"
              },
              {
                icon: Users,
                titleKey: "feat.team.title",
                descKey: "feat.team.desc",
                color: "text-pink-600 bg-pink-50"
              },
              {
                icon: BarChart3,
                titleKey: "feat.forecast.title",
                descKey: "feat.forecast.desc",
                color: "text-cyan-600 bg-cyan-50"
              },
              {
                icon: ShieldCheck,
                titleKey: "feat.security.title",
                descKey: "feat.security.desc",
                color: "text-teal-600 bg-teal-50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
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

      {/* Content Expansion: The Funnel */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8">{t('funnel.heading.pre')}<span className="text-blue-400 italic">{t('funnel.heading.accent')}</span></h2>

              <div className="space-y-6">
                 {[
                   { stepKey: "stage.capture.step", descKey: "stage.capture.desc" },
                   { stepKey: "stage.qualify.step", descKey: "stage.qualify.desc" },
                   { stepKey: "stage.nurture.step", descKey: "stage.nurture.desc" },
                   { stepKey: "stage.close.step", descKey: "stage.close.desc" },
                   { stepKey: "stage.retain.step", descKey: "stage.retain.desc" }
                 ].map((stage, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                         <div className="w-8 h-8 rounded-full bg-themeGreen-600 flex items-center justify-center text-sm font-bold border-4 border-gray-900 relative z-10">
                            {i + 1}
                         </div>
                         {i < 4 && <div className="w-0.5 h-full bg-gray-800 -mt-1 group-hover:bg-themeGreen-600 transition-colors" />}
                      </div>
                      <div className="pb-8">
                         <h4 className="text-xl font-bold text-white mb-2">{t(stage.stepKey)}</h4>
                         <p className="text-gray-400 leading-relaxed">{t(stage.descKey)}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-themeGreen-600/20 blur-[120px] rounded-full" />
               <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-12">
                     <div>
                        <p className="text-blue-400 text-xs font-black uppercase tracking-widest">{t('analytics.label')}</p>
                        <h3 className="text-2xl font-bold">{t('analytics.title')}</h3>
                     </div>
                     <BarChart3 className="text-blue-400" size={32} />
                  </div>

                  <div className="space-y-8">
                     {[
                       { labelKey: "stat.newleads.label", count: "1,240", percent: 100, color: "bg-themeGreen-600" },
                       { labelKey: "stat.qualified.label", count: "840", percent: 68, color: "bg-themeGreen-500" },
                       { labelKey: "stat.proposals.label", count: "420", percent: 34, color: "bg-blue-400" },
                       { labelKey: "stat.won.label", count: "185", percent: 15, color: "bg-teal-500" }
                     ].map((stat, i) => (
                       <div key={i}>
                          <div className="flex justify-between text-sm mb-2">
                             <span className="font-bold">{t(stat.labelKey)}</span>
                             <span className="text-gray-400">{stat.count}</span>
                          </div>
                          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                             <motion.div
                               initial={{ width: 0 }}
                               whileInView={{ width: `${stat.percent}%` }}
                               transition={{ duration: 1, delay: i * 0.1 }}
                               className={`h-full ${stat.color} rounded-full`}
                             />
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-gray-400 text-xs uppercase mb-1">{t('metric.cycle.label')}</p>
                        <p className="text-2xl font-bold">{t('metric.cycle.value')}</p>
                     </div>
                     <div>
                        <p className="text-gray-400 text-xs uppercase mb-1">{t('metric.winrate.label')}</p>
                        <p className="text-2xl font-bold text-teal-400">24.2%</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">{t('cta.heading')}</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">{t('cta.sub')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-themeGreen-600 text-white rounded-2xl font-black text-lg hover:bg-themeGreen-700 transition-all shadow-xl shadow-themeGreen-200">
              {t('cta.primary')}
            </button>
            <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-gray-800 transition-all">
              {t('cta.secondary')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
