import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Brain,
  MessageSquare,
  BarChart3,
  Lightbulb,
  Zap,
  Mic,
  ShieldCheck,
  Search,
  Users,
  Bell
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': {
    en: 'Intelligent Business Companion',
    hi: 'समझदार बिज़नेस साथी',
    hinglish: 'Intelligent business companion',
    gu: 'સ્માર્ટ બિઝનેસ સાથી',
    mr: 'हुशार बिझनेस साथी',
    mwr: 'समझदार बिज़नेस साथी',
  },
  'hero.title.pre': {
    en: 'The Analyst that ',
    hi: 'वो एनालिस्ट जो ',
    hinglish: 'Wo analyst jo ',
    gu: 'એ એનાલિસ્ટ જે ',
    mr: 'तो एनालिस्ट जो ',
    mwr: 'वो एनालिस्ट जको ',
  },
  'hero.title.accent': {
    en: 'Never Sleeps.',
    hi: 'कभी नहीं सोता।',
    hinglish: 'Kabhi nahi sota.',
    gu: 'ક્યારેય ઊંઘતો નથી.',
    mr: 'कधीच झोपत नाही.',
    mwr: 'कदेई कोनी सोवै।',
  },
  'hero.desc': {
    en: 'Mera Dhanda AI Assistant transforms complex business data into clear, actionable insights. Ask questions, automate tasks, and predict trends in plain English.',
    hi: 'Mera Dhanda AI Assistant आपके जटिल बिज़नेस डेटा को साफ़ और काम आने वाली जानकारी में बदल देता है। सवाल पूछें, काम ऑटोमेट करें और आसान भाषा में ट्रेंड्स का अनुमान लगाएं।',
    hinglish: 'Mera Dhanda AI Assistant aapke complex business data ko clear aur actionable insights mein badal deta hai. Sawaal poochho, tasks automate karo aur simple bhasha mein trends predict karo.',
    gu: 'Mera Dhanda AI Assistant તમારા જટિલ બિઝનેસ ડેટાને સ્પષ્ટ અને કામ આવે તેવી માહિતીમાં ફેરવે છે. પ્રશ્નો પૂછો, ટાસ્ક ઓટોમેટ કરો અને સરળ ભાષામાં ટ્રેન્ડ્સનો અંદાજ લગાવો.',
    mr: 'Mera Dhanda AI Assistant तुमचा गुंतागुंतीचा बिझनेस डेटा स्पष्ट आणि उपयोगी insights मध्ये बदलतो. प्रश्न विचारा, कामे automate करा आणि सोप्या भाषेत trends चा अंदाज लावा.',
    mwr: 'Mera Dhanda AI Assistant थारे जटिल बिज़नेस डेटा नै साफ अर काम आवण वाळी जाणकारी में बदळ देवै। सवाल पूछो, काम ऑटोमेट करो अर सरल भाषा में ट्रेंड्स को अंदाज लगाओ।',
  },
  'hero.cta.experience': {
    en: 'Experience AI Assistant',
    hi: 'AI Assistant अनुभव करें',
    hinglish: 'AI Assistant experience karein',
    gu: 'AI Assistant અનુભવો',
    mr: 'AI Assistant अनुभवा',
    mwr: 'AI Assistant अनुभव करो',
  },
  'hero.cta.voiceDemo': {
    en: 'Voice Demo',
    hi: 'वॉइस डेमो',
    hinglish: 'Voice demo',
    gu: 'વોઇસ ડેમો',
    mr: 'व्हॉइस डेमो',
    mwr: 'वॉइस डेमो',
  },
  'mockup.aiName': {
    en: 'Mera Dhanda AI',
    hi: 'Mera Dhanda AI',
    hinglish: 'Mera Dhanda AI',
    gu: 'Mera Dhanda AI',
    mr: 'Mera Dhanda AI',
    mwr: 'Mera Dhanda AI',
  },
  'mockup.status': {
    en: 'Always Active',
    hi: 'हमेशा एक्टिव',
    hinglish: 'Hamesha active',
    gu: 'હંમેશા એક્ટિવ',
    mr: 'नेहमी सक्रिय',
    mwr: 'हमेसा एक्टिव',
  },
  'mockup.userQuery': {
    en: '"Which products are at risk of going out of stock next week?"',
    hi: '"अगले हफ़्ते कौन से प्रोडक्ट स्टॉक खत्म होने के खतरे में हैं?"',
    hinglish: '"Agle hafte kaunse products stock out hone ke risk mein hain?"',
    gu: '"આવતા અઠવાડિયે કયા પ્રોડક્ટ સ્ટોક ખતમ થવાના જોખમમાં છે?"',
    mr: '"पुढच्या आठवड्यात कोणते products stock संपण्याच्या धोक्यात आहेत?"',
    mwr: '"अगले हफ्ते कुण से प्रोडक्ट स्टॉक खतम होवण रे खतरे में है?"',
  },
  'mockup.analysisLabel': {
    en: 'Analysis Complete',
    hi: 'एनालिसिस पूरा',
    hinglish: 'Analysis complete',
    gu: 'એનાલિસિસ પૂર્ણ',
    mr: 'विश्लेषण पूर्ण',
    mwr: 'एनालिसिस पूरो',
  },
  'mockup.analysisText': {
    en: 'Based on current sales velocity, 3 items need reordering immediately:',
    hi: 'मौजूदा बिक्री रफ़्तार के हिसाब से, 3 आइटम तुरंत दोबारा ऑर्डर करने की ज़रूरत है:',
    hinglish: 'Current sales velocity ke hisaab se, 3 items turant reorder karne ki zaroorat hai:',
    gu: 'હાલની વેચાણ ગતિ પ્રમાણે, 3 આઇટમ તરત જ ફરી ઓર્ડર કરવાની જરૂર છે:',
    mr: 'सध्याच्या sales velocity नुसार, 3 items लगेच पुन्हा ऑर्डर करण्याची गरज आहे:',
    mwr: 'अबार री बिक्री रफ्तार रे हिसाब सूं, 3 आइटम तुरंत फेरूं ऑर्डर करण री जरूरत है:',
  },
  'mockup.item1.name': {
    en: 'Organic Coffee Beans',
    hi: 'Organic Coffee Beans',
    hinglish: 'Organic Coffee Beans',
    gu: 'Organic Coffee Beans',
    mr: 'Organic Coffee Beans',
    mwr: 'Organic Coffee Beans',
  },
  'mockup.item1.left': {
    en: '2 days left',
    hi: '2 दिन बचे',
    hinglish: '2 din bache',
    gu: '2 દિવસ બાકી',
    mr: '2 दिवस उरले',
    mwr: '2 दिन बच्या',
  },
  'mockup.item2.name': {
    en: 'Paper Cups (500ml)',
    hi: 'Paper Cups (500ml)',
    hinglish: 'Paper Cups (500ml)',
    gu: 'Paper Cups (500ml)',
    mr: 'Paper Cups (500ml)',
    mwr: 'Paper Cups (500ml)',
  },
  'mockup.item2.left': {
    en: '5 days left',
    hi: '5 दिन बचे',
    hinglish: '5 din bache',
    gu: '5 દિવસ બાકી',
    mr: '5 दिवस उरले',
    mwr: '5 दिन बच्या',
  },
  'mockup.createPO': {
    en: 'Create Purchase Orders',
    hi: 'परचेज़ ऑर्डर बनाएं',
    hinglish: 'Purchase orders banayein',
    gu: 'પરચેઝ ઓર્ડર બનાવો',
    mr: 'Purchase orders तयार करा',
    mwr: 'परचेज़ ऑर्डर बणाओ',
  },
  'mockup.inputPlaceholder': {
    en: 'Ask anything about your business...',
    hi: 'अपने बिज़नेस के बारे में कुछ भी पूछें...',
    hinglish: 'Apne business ke baare mein kuch bhi poochho...',
    gu: 'તમારા બિઝનેસ વિશે કંઈ પણ પૂછો...',
    mr: 'तुमच्या बिझनेसबद्दल काहीही विचारा...',
    mwr: 'थारे बिज़नेस रे बारे में कांई बी पूछो...',
  },
  'cap.heading': {
    en: 'More than just a chatbot',
    hi: 'सिर्फ़ एक चैटबॉट से कहीं ज़्यादा',
    hinglish: 'Sirf ek chatbot se kahin zyada',
    gu: 'માત્ર એક ચેટબોટ કરતાં ઘણું વધારે',
    mr: 'केवळ एका chatbot पेक्षा खूप जास्त',
    mwr: 'खाली एक चैटबॉट सूं घणो ज्यादा',
  },
  'cap.subheading': {
    en: 'Our AI is deeply integrated into your workflows, learning and improving every single day.',
    hi: 'हमारा AI आपके वर्कफ़्लो में गहराई से जुड़ा है, हर दिन सीखता और बेहतर होता जाता है।',
    hinglish: 'Hamara AI aapke workflows mein deeply integrated hai, har din seekhta aur improve hota hai.',
    gu: 'અમારું AI તમારા વર્કફ્લોમાં ઊંડાણથી જોડાયેલું છે, દરરોજ શીખે છે અને સુધરે છે.',
    mr: 'आमचे AI तुमच्या workflows मध्ये खोलवर जोडलेले आहे, दररोज शिकते आणि सुधारते.',
    mwr: 'म्हारो AI थारे वर्कफ्लो में गहराई सूं जुड्यो है, हर दिन सीखै अर बेहतर होवै।',
  },
  'cap.forecast.title': {
    en: 'Predictive Forecasting',
    hi: 'भविष्यवाणी आधारित फ़ोरकास्टिंग',
    hinglish: 'Predictive forecasting',
    gu: 'પ્રિડિક્ટિવ ફોરકાસ્ટિંગ',
    mr: 'भाकीत करणारे forecasting',
    mwr: 'भविष्य बताण वाळी फोरकास्टिंग',
  },
  'cap.forecast.desc': {
    en: 'Predict sales peaks and troughs with 92% accuracy. Prepare your inventory and staff before the rush hits.',
    hi: '92% सटीकता के साथ बिक्री के उतार-चढ़ाव का अनुमान लगाएं। भीड़ आने से पहले अपना स्टॉक और स्टाफ़ तैयार रखें।',
    hinglish: '92% accuracy ke saath sales ke peaks aur troughs predict karo. Rush aane se pehle apna inventory aur staff ready rakho.',
    gu: '92% ચોકસાઈ સાથે વેચાણના ઉતાર-ચઢાવનો અંદાજ લગાવો. ભીડ આવે તે પહેલાં તમારું ઇન્વેન્ટરી અને સ્ટાફ તૈયાર રાખો.',
    mr: '92% अचूकतेने sales चे चढ-उतार ओळखा. गर्दी येण्याआधी तुमचे inventory आणि staff तयार ठेवा.',
    mwr: '92% सटीकता सूं बिक्री रे उतार-चढ़ाव को अंदाज लगाओ। भीड़ आवण सूं पैलां थारो स्टॉक अर स्टाफ तैयार राखो।',
  },
  'cap.automation.title': {
    en: 'Workflow Automation',
    hi: 'वर्कफ़्लो ऑटोमेशन',
    hinglish: 'Workflow automation',
    gu: 'વર્કફ્લો ઓટોમેશન',
    mr: 'Workflow automation',
    mwr: 'वर्कफ्लो ऑटोमेशन',
  },
  'cap.automation.desc': {
    en: 'Automatically draft emails, generate reports, and create job cards based on customer requests or inventory alerts.',
    hi: 'ग्राहक की रिक्वेस्ट या इन्वेंटरी अलर्ट के आधार पर अपने आप ईमेल ड्राफ़्ट करें, रिपोर्ट बनाएं और जॉब कार्ड तैयार करें।',
    hinglish: 'Customer requests ya inventory alerts ke hisaab se automatically emails draft karo, reports banao aur job cards create karo.',
    gu: 'ગ્રાહકની વિનંતી અથવા ઇન્વેન્ટરી અલર્ટના આધારે આપમેળે ઈમેલ ડ્રાફ્ટ કરો, રિપોર્ટ બનાવો અને જોબ કાર્ડ બનાવો.',
    mr: 'ग्राहकाच्या विनंत्या किंवा inventory alerts नुसार आपोआप emails draft करा, reports तयार करा आणि job cards बनवा.',
    mwr: 'ग्राहक री रिक्वेस्ट या इन्वेंटरी अलर्ट रे हिसाब सूं खुद-ब-खुद ईमेल ड्राफ्ट करो, रिपोर्ट बणाओ अर जॉब कार्ड बणाओ।',
  },
  'cap.strategic.title': {
    en: 'Strategic Suggestions',
    hi: 'रणनीतिक सुझाव',
    hinglish: 'Strategic suggestions',
    gu: 'વ્યૂહાત્મક સૂચનો',
    mr: 'धोरणात्मक सूचना',
    mwr: 'रणनीति रा सुझाव',
  },
  'cap.strategic.desc': {
    en: "Get daily 'What-If' scenarios and growth experiments suggested based on your specific business performance.",
    hi: "अपने बिज़नेस की परफ़ॉर्मेंस के आधार पर रोज़ाना 'क्या-अगर' सिनेरियो और ग्रोथ एक्सपेरिमेंट के सुझाव पाएं।",
    hinglish: "Apne business ki performance ke hisaab se daily 'What-If' scenarios aur growth experiments ke suggestions paao.",
    gu: "તમારા બિઝનેસની કામગીરી પ્રમાણે દરરોજ 'જો-તો' સિનારિયો અને ગ્રોથ એક્સપેરિમેન્ટના સૂચનો મેળવો.",
    mr: "तुमच्या बिझनेसच्या कामगिरीनुसार दररोज 'What-If' scenarios आणि growth experiments च्या सूचना मिळवा.",
    mwr: "थारे बिज़नेस री परफॉर्मेंस रे हिसाब सूं रोजाना 'क्या-अगर' सिनेरियो अर ग्रोथ एक्सपेरिमेंट रा सुझाव पाओ।",
  },
  'cap.bi.title': {
    en: 'Conversational BI',
    hi: 'बातचीत वाला BI',
    hinglish: 'Conversational BI',
    gu: 'કન્વર્સેશનલ BI',
    mr: 'Conversational BI',
    mwr: 'बातचीत वाळो BI',
  },
  'cap.bi.desc': {
    en: "No more complex SQL or Excel. Just ask: 'Compare our margin this quarter vs last quarter' and see the chart instantly.",
    hi: "अब जटिल SQL या Excel की ज़रूरत नहीं। बस पूछें: 'इस क्वार्टर बनाम पिछले क्वार्टर का मार्जिन कंपेयर करें' और तुरंत चार्ट देखें।",
    hinglish: "Ab complex SQL ya Excel ki zaroorat nahi. Bas poochho: 'Iss quarter vs last quarter ka margin compare karo' aur turant chart dekho.",
    gu: "હવે જટિલ SQL કે Excel ની જરૂર નથી. ફક્ત પૂછો: 'આ ક્વાર્ટર vs ગયા ક્વાર્ટરનું માર્જિન સરખાવો' અને તરત જ ચાર્ટ જુઓ.",
    mr: "आता गुंतागुंतीचे SQL किंवा Excel ची गरज नाही. फक्त विचारा: 'या quarter vs मागील quarter चे margin compare करा' आणि लगेच chart बघा.",
    mwr: "अब जटिल SQL या Excel री जरूरत कोनी। बस पूछो: 'इण क्वार्टर बनाम पाछले क्वार्टर को मार्जिन कंपेयर करो' अर तुरंत चार्ट देखो।",
  },
  'cap.fraud.title': {
    en: 'Fraud Detection',
    hi: 'धोखाधड़ी की पहचान',
    hinglish: 'Fraud detection',
    gu: 'ફ્રોડ ડિટેક્શન',
    mr: 'फसवणूक ओळख',
    mwr: 'धोखाधड़ी री पहचान',
  },
  'cap.fraud.desc': {
    en: 'Our AI identifies unusual patterns in billing or inventory, alerting you to potential shrinkage or errors in real-time.',
    hi: 'हमारा AI बिलिंग या इन्वेंटरी में असामान्य पैटर्न पहचान लेता है और संभावित नुकसान या गलतियों के बारे में रियल-टाइम में अलर्ट देता है।',
    hinglish: 'Hamara AI billing ya inventory mein unusual patterns pakad leta hai aur possible shrinkage ya errors ke baare mein real-time alert deta hai.',
    gu: 'અમારું AI બિલિંગ કે ઇન્વેન્ટરીમાં અસામાન્ય પેટર્ન ઓળખે છે અને સંભવિત નુકસાન કે ભૂલો વિશે રિયલ-ટાઇમમાં અલર્ટ આપે છે.',
    mr: 'आमचे AI billing किंवा inventory मधील असामान्य patterns ओळखते आणि संभाव्य नुकसान किंवा चुकांबद्दल real-time alert देते.',
    mwr: 'म्हारो AI बिलिंग या इन्वेंटरी में अलग पैटर्न पहचान लेवै अर संभावित नुकसान या गलती रे बारे में रियल-टाइम में अलर्ट देवै।',
  },
  'cap.staff.title': {
    en: 'Staff Performance AI',
    hi: 'स्टाफ़ परफ़ॉर्मेंस AI',
    hinglish: 'Staff performance AI',
    gu: 'સ્ટાફ પરફોર્મન્સ AI',
    mr: 'Staff performance AI',
    mwr: 'स्टाफ परफॉर्मेंस AI',
  },
  'cap.staff.desc': {
    en: 'Automatically identify top performers and provide personalized training suggestions for team members who need it.',
    hi: 'अपने आप टॉप परफ़ॉर्मर्स को पहचानें और जिन टीम मेंबर्स को ज़रूरत है उनके लिए पर्सनलाइज़्ड ट्रेनिंग सुझाव दें।',
    hinglish: 'Automatically top performers ko identify karo aur jin team members ko zaroorat hai unke liye personalized training suggestions do.',
    gu: 'આપમેળે ટોપ પરફોર્મર્સ ઓળખો અને જે ટીમ સભ્યોને જરૂર છે તેમના માટે પર્સનલાઇઝ્ડ ટ્રેનિંગ સૂચનો આપો.',
    mr: 'आपोआप top performers ओळखा आणि ज्या team members ना गरज आहे त्यांच्यासाठी personalized training सूचना द्या.',
    mwr: 'खुद-ब-खुद टॉप परफॉर्मर्स नै पहचानो अर जिण टीम मेंबर्स नै जरूरत है उणारे खातर पर्सनलाइज्ड ट्रेनिंग सुझाव देवो।',
  },
  'voice.heading.pre': {
    en: 'Talk to your ',
    hi: 'अपने ',
    hinglish: 'Apne ',
    gu: 'તમારા ',
    mr: 'तुमच्या ',
    mwr: 'थारे ',
  },
  'voice.heading.accent': {
    en: 'Business.',
    hi: 'बिज़नेस से बात करें।',
    hinglish: 'Business se baat karo.',
    gu: 'બિઝનેસ સાથે વાત કરો.',
    mr: 'बिझनेसशी बोला.',
    mwr: 'बिज़नेस सूं बात करो।',
  },
  'voice.nl.title': {
    en: 'Natural Language Queries',
    hi: 'सामान्य भाषा में सवाल',
    hinglish: 'Natural language queries',
    gu: 'કુદરતી ભાષામાં પ્રશ્નો',
    mr: 'नैसर्गिक भाषेतील queries',
    mwr: 'सादी भाषा में सवाल',
  },
  'voice.nl.desc': {
    en: "No need to learn complex software. Just type 'Show me sales from Mumbai this week' and get instant results.",
    hi: "जटिल सॉफ़्टवेयर सीखने की ज़रूरत नहीं। बस टाइप करें 'इस हफ़्ते मुंबई की बिक्री दिखाओ' और तुरंत नतीजे पाएं।",
    hinglish: "Complex software seekhne ki zaroorat nahi. Bas type karo 'Iss hafte Mumbai ki sales dikhao' aur instant results pao.",
    gu: "જટિલ સોફ્ટવેર શીખવાની જરૂર નથી. ફક્ત ટાઇપ કરો 'આ અઠવાડિયે મુંબઈનું વેચાણ બતાવો' અને તરત પરિણામ મેળવો.",
    mr: "गुंतागुंतीचे software शिकण्याची गरज नाही. फक्त टाइप करा 'या आठवड्यातील Mumbai चे sales दाखवा' आणि लगेच निकाल मिळवा.",
    mwr: "जटिल सॉफ्टवेयर सीखण री जरूरत कोनी। बस टाइप करो 'इण हफ्ते मुंबई री बिक्री दिखाओ' अर तुरंत नतीजा पाओ।",
  },
  'voice.vc.title': {
    en: 'Voice Command Integration',
    hi: 'वॉइस कमांड इंटीग्रेशन',
    hinglish: 'Voice command integration',
    gu: 'વોઇસ કમાન્ડ ઇન્ટિગ્રેશન',
    mr: 'Voice command integration',
    mwr: 'वॉइस कमांड इंटीग्रेशन',
  },
  'voice.vc.desc': {
    en: 'Keep your hands free on the floor. Use voice commands to update stock or check job card statuses.',
    hi: 'काम करते वक्त अपने हाथ खाली रखें। स्टॉक अपडेट करने या जॉब कार्ड की स्थिति देखने के लिए वॉइस कमांड इस्तेमाल करें।',
    hinglish: 'Floor par hands free raho. Stock update karne ya job card status check karne ke liye voice commands use karo.',
    gu: 'ફ્લોર પર તમારા હાથ ફ્રી રાખો. સ્ટોક અપડેટ કરવા કે જોબ કાર્ડ સ્ટેટસ ચેક કરવા વોઇસ કમાન્ડ વાપરો.',
    mr: 'Floor वर हात मोकळे ठेवा. Stock update करण्यासाठी किंवा job card status तपासण्यासाठी voice commands वापरा.',
    mwr: 'काम करता टैम हाथ खाली राखो। स्टॉक अपडेट करण या जॉब कार्ड री स्थिति देखण खातर वॉइस कमांड काम में लो।',
  },
  'voice.proactive.title': {
    en: 'Proactive AI Insights',
    hi: 'सक्रिय AI इनसाइट्स',
    hinglish: 'Proactive AI insights',
    gu: 'સક્રિય AI ઇનસાઇટ્સ',
    mr: 'सक्रिय AI insights',
    mwr: 'पैलां सूं सावचेत AI इनसाइट्स',
  },
  'voice.proactive.desc': {
    en: "Mera Dhanda doesn't just wait for you. It alerts you to risks and opportunities before they happen.",
    hi: 'Mera Dhanda सिर्फ़ आपका इंतज़ार नहीं करता। ये जोखिम और मौकों के बारे में होने से पहले ही आपको अलर्ट कर देता है।',
    hinglish: 'Mera Dhanda sirf aapka wait nahi karta. Ye risks aur opportunities ke baare mein hone se pehle hi alert kar deta hai.',
    gu: 'Mera Dhanda ફક્ત તમારી રાહ નથી જોતું. તે જોખમો અને તકો વિશે થાય તે પહેલાં જ અલર્ટ આપે છે.',
    mr: 'Mera Dhanda फक्त तुमची वाट बघत नाही. ते धोके आणि संधींबद्दल घडण्याआधीच alert देते.',
    mwr: 'Mera Dhanda खाली थारी राह कोनी देखै। ओ जोखम अर मौका रे बारे में होवण सूं पैलां ही अलर्ट कर देवै।',
  },
  'voice.example.query': {
    en: '"Hey Mera Dhanda, what is my projected revenue for next month?"',
    hi: '"हे Mera Dhanda, अगले महीने मेरा अनुमानित रेवेन्यू कितना है?"',
    hinglish: '"Hey Mera Dhanda, agle mahine mera projected revenue kitna hai?"',
    gu: '"હે Mera Dhanda, આવતા મહિને મારું અંદાજિત રેવન્યુ કેટલું છે?"',
    mr: '"हे Mera Dhanda, पुढच्या महिन्यात माझे अंदाजित revenue किती आहे?"',
    mwr: '"हे Mera Dhanda, अगले मीने म्हारो अंदाजित रेवेन्यू कितरो है?"',
  },
  'voice.example.answer': {
    en: 'Based on current growth and seasonal trends, your projected revenue is ₹42.4L (up 15% YoY).',
    hi: 'मौजूदा ग्रोथ और सीज़नल ट्रेंड्स के हिसाब से, आपका अनुमानित रेवेन्यू ₹42.4L है (15% YoY बढ़त)।',
    hinglish: 'Current growth aur seasonal trends ke hisaab se, aapka projected revenue ₹42.4L hai (15% YoY up).',
    gu: 'હાલની ગ્રોથ અને સીઝનલ ટ્રેન્ડ્સ પ્રમાણે, તમારું અંદાજિત રેવન્યુ ₹42.4L છે (15% YoY વધારો).',
    mr: 'सध्याची growth आणि seasonal trends नुसार, तुमचे अंदाजित revenue ₹42.4L आहे (15% YoY वाढ).',
    mwr: 'अबार री ग्रोथ अर सीज़नल ट्रेंड्स रे हिसाब सूं, थारो अंदाजित रेवेन्यू ₹42.4L है (15% YoY बढ़त)।',
  },
  'trust.heading.pre': {
    en: 'Built with ',
    hi: 'बनाया गया ',
    hinglish: 'Banaya gaya ',
    gu: 'બનાવેલું ',
    mr: 'बनवलेले ',
    mwr: 'बणायो ',
  },
  'trust.heading.accent': {
    en: 'privacy-first',
    hi: 'प्राइवेसी-फ़र्स्ट',
    hinglish: 'privacy-first',
    gu: 'પ્રાઇવસી-ફર્સ્ટ',
    mr: 'privacy-first',
    mwr: 'प्राइवेसी-फर्स्ट',
  },
  'trust.heading.post': {
    en: ' AI.',
    hi: ' AI के साथ।',
    hinglish: ' AI ke saath.',
    gu: ' AI સાથે.',
    mr: ' AI सह.',
    mwr: ' AI रे साथै।',
  },
  'trust.privateData.label': {
    en: 'Private Data',
    hi: 'प्राइवेट डेटा',
    hinglish: 'Private data',
    gu: 'પ્રાઇવેટ ડેટા',
    mr: 'खाजगी डेटा',
    mwr: 'प्राइवेट डेटा',
  },
  'trust.privateData.desc': {
    en: 'Your business data is never used to train global models. It stays entirely within your workspace.',
    hi: 'आपका बिज़नेस डेटा कभी भी ग्लोबल मॉडल ट्रेन करने के लिए इस्तेमाल नहीं होता। ये पूरी तरह आपके वर्कस्पेस में ही रहता है।',
    hinglish: 'Aapka business data kabhi global models train karne ke liye use nahi hota. Ye poori tarah aapke workspace mein hi rehta hai.',
    gu: 'તમારો બિઝનેસ ડેટા ક્યારેય ગ્લોબલ મોડેલ ટ્રેન કરવા વપરાતો નથી. તે સંપૂર્ણપણે તમારા વર્કસ્પેસમાં જ રહે છે.',
    mr: 'तुमचा business data कधीही global models train करण्यासाठी वापरला जात नाही. तो पूर्णपणे तुमच्या workspace मध्येच राहतो.',
    mwr: 'थारो बिज़नेस डेटा कदेई ग्लोबल मॉडल ट्रेन करण खातर काम में कोनी आवै। ओ पूरी तरै थारे वर्कस्पेस में ही रैवै।',
  },
  'trust.compliance.label': {
    en: 'Compliance',
    hi: 'कंप्लायंस',
    hinglish: 'Compliance',
    gu: 'કમ્પ્લાયન્સ',
    mr: 'Compliance',
    mwr: 'कंप्लायंस',
  },
  'trust.compliance.desc': {
    en: 'Built on enterprise-grade infrastructure with rigorous security audits and encryption at rest.',
    hi: 'सख्त सिक्योरिटी ऑडिट और एन्क्रिप्शन के साथ एंटरप्राइज़-ग्रेड इंफ्रास्ट्रक्चर पर बनाया गया।',
    hinglish: 'Rigorous security audits aur encryption at rest ke saath enterprise-grade infrastructure par bana hai.',
    gu: 'કડક સિક્યોરિટી ઓડિટ અને એન્ક્રિપ્શન સાથે એન્ટરપ્રાઇઝ-ગ્રેડ ઇન્ફ્રાસ્ટ્રક્ચર પર બનેલું.',
    mr: 'कठोर security audits आणि encryption सह enterprise-grade infrastructure वर बनवलेले.',
    mwr: 'सख्त सिक्योरिटी ऑडिट अर एन्क्रिप्शन रे साथै एंटरप्राइज़-ग्रेड इंफ्रास्ट्रक्चर पर बणायो।',
  },
  'trust.availability.label': {
    en: 'Availability',
    hi: 'उपलब्धता',
    hinglish: 'Availability',
    gu: 'ઉપલબ્ધતા',
    mr: 'उपलब्धता',
    mwr: 'उपलब्धता',
  },
  'trust.availability.desc': {
    en: 'Zero downtime infrastructure ensures your assistant is ready whenever you make a decision.',
    hi: 'ज़ीरो डाउनटाइम इंफ्रास्ट्रक्चर यह पक्का करता है कि जब भी आप कोई फ़ैसला लें, आपका असिस्टेंट तैयार रहे।',
    hinglish: 'Zero downtime infrastructure ye ensure karta hai ki jab bhi aap decision lo, aapka assistant ready ho.',
    gu: 'ઝીરો ડાઉનટાઇમ ઇન્ફ્રાસ્ટ્રક્ચર ખાતરી કરે છે કે જ્યારે પણ તમે નિર્ણય લો ત્યારે તમારો આસિસ્ટન્ટ તૈયાર હોય.',
    mr: 'Zero downtime infrastructure खात्री करते की तुम्ही जेव्हाही निर्णय घ्याल तेव्हा तुमचा assistant तयार असेल.',
    mwr: 'ज़ीरो डाउनटाइम इंफ्रास्ट्रक्चर पक्को करै के जद बी थे कोई फैसलो लो, थारो असिस्टेंट तैयार रैवै।',
  },
  'trust.cta': {
    en: 'Get Your AI Assistant Today',
    hi: 'आज ही अपना AI Assistant पाएं',
    hinglish: 'Aaj hi apna AI Assistant pao',
    gu: 'આજે જ તમારું AI Assistant મેળવો',
    mr: 'आजच तुमचा AI Assistant मिळवा',
    mwr: 'आज ही थारो AI Assistant पाओ',
  },
};

export default function AIAssistant() {
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
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-100/40 to-violet-100/40 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 border border-pink-100 rounded-full text-pink-600 text-xs font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles size={14} className="animate-pulse" />
                {t('hero.badge')}
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight"
              >
                {t('hero.title.pre')}<span className="text-pink-600 italic">{t('hero.title.accent')}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
              >
                {t('hero.desc')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all flex items-center gap-3 group">
                  {t('hero.cta.experience')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                   <Mic size={18} />
                   {t('hero.cta.voiceDemo')}
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-10 bg-pink-600/5 rounded-full blur-[80px]" />
              
              {/* Chat Interface Mockup */}
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                <div className="bg-gray-900 p-6 text-white flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
                         <Brain size={24} />
                      </div>
                      <div>
                         <p className="font-bold">{t('mockup.aiName')}</p>
                         <p className="text-[10px] text-pink-400 font-bold uppercase tracking-widest">{t('mockup.status')}</p>
                      </div>
                   </div>
                   <Zap size={20} className="text-pink-600" />
                </div>
                
                <div className="p-8 space-y-6">
                   <div className="flex justify-end">
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none max-w-[80%]">
                         <p className="text-sm text-gray-800">{t('mockup.userQuery')}</p>
                      </div>
                   </div>
                   
                   <div className="flex justify-start">
                      <div className="bg-pink-50 p-5 rounded-2xl rounded-tl-none max-w-[90%] border border-pink-100">
                         <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={14} className="text-pink-600" />
                            <p className="text-xs font-bold text-pink-600 uppercase">{t('mockup.analysisLabel')}</p>
                         </div>
                         <p className="text-sm text-gray-800 mb-4">{t('mockup.analysisText')}</p>
                         <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs p-2 bg-white rounded-lg">
                               <span className="font-medium">{t('mockup.item1.name')}</span>
                               <span className="text-red-500 font-bold">{t('mockup.item1.left')}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-2 bg-white rounded-lg">
                               <span className="font-medium">{t('mockup.item2.name')}</span>
                               <span className="text-orange-500 font-bold">{t('mockup.item2.left')}</span>
                            </div>
                         </div>
                         <button className="mt-4 w-full py-2 bg-pink-600 text-white rounded-lg text-xs font-bold">{t('mockup.createPO')}</button>
                      </div>
                   </div>
                </div>
                
                <div className="p-4 border-t border-gray-50 flex gap-2">
                   <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-400 flex items-center gap-2">
                      <Search size={16} />
                      {t('mockup.inputPlaceholder')}
                   </div>
                   <div className="w-11 h-11 bg-pink-600 rounded-xl flex items-center justify-center text-white">
                      <ArrowRight size={20} />
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">{t('cap.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('cap.subheading')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                titleKey: "cap.forecast.title",
                descKey: "cap.forecast.desc",
                color: "bg-themeGreen-50 text-themeGreen-600"
              },
              {
                icon: Zap,
                titleKey: "cap.automation.title",
                descKey: "cap.automation.desc",
                color: "bg-yellow-50 text-yellow-600"
              },
              {
                icon: Lightbulb,
                titleKey: "cap.strategic.title",
                descKey: "cap.strategic.desc",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Search,
                titleKey: "cap.bi.title",
                descKey: "cap.bi.desc",
                color: "bg-teal-50 text-teal-600"
              },
              {
                icon: ShieldCheck,
                titleKey: "cap.fraud.title",
                descKey: "cap.fraud.desc",
                color: "bg-red-50 text-red-600"
              },
              {
                icon: Users,
                titleKey: "cap.staff.title",
                descKey: "cap.staff.desc",
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-[#FAFAFA] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-pink-100 transition-all group"
              >
                <div className={`w-16 h-16 rounded-[1.5rem] ${item.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon && (typeof item.icon === 'function' || typeof item.icon === 'object') ? (
                    <item.icon size={32} />
                  ) : (
                    <div className="w-8 h-8 bg-current opacity-20 rounded-full" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(item.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice & Chat Section */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-pink-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">{t('voice.heading.pre')}<br/> <span className="text-pink-500 italic">{t('voice.heading.accent')}</span></h2>

                 <div className="space-y-12">
                    {[
                      { icon: MessageSquare, titleKey: "voice.nl.title", descKey: "voice.nl.desc" },
                      { icon: Mic, titleKey: "voice.vc.title", descKey: "voice.vc.desc" },
                      { icon: Bell, titleKey: "voice.proactive.title", descKey: "voice.proactive.desc" }
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-black transition-all shrink-0">
                            <feature.icon size={28} />
                         </div>
                         <div>
                            <h4 className="text-2xl font-bold mb-3">{t(feature.titleKey)}</h4>
                            <p className="text-gray-400 leading-relaxed">{t(feature.descKey)}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 {/* Visual Representation of Voice Waves */}
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 lg:p-16 text-center">
                    <div className="flex justify-center gap-2 mb-12 h-20 items-center">
                       {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
                          <motion.div 
                            key={i}
                            animate={{ height: [`${h*100}%`, `${h*40}%`, `${h*100}%`] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                            className="w-3 bg-pink-500 rounded-full"
                          />
                       ))}
                    </div>
                    <p className="text-xl font-bold mb-4">{t('voice.example.query')}</p>
                    <div className="mt-8 pt-8 border-t border-white/10">
                       <div className="bg-pink-500/20 border border-pink-500/30 p-6 rounded-2xl inline-block">
                          <p className="text-pink-400 font-bold text-sm">{t('voice.example.answer')}</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-12">{t('trust.heading.pre')}<span className="text-pink-500 underline underline-offset-8">{t('trust.heading.accent')}</span>{t('trust.heading.post')}</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
               <div>
                  <p className="text-4xl font-black text-pink-500 mb-2">100%</p>
                  <p className="text-lg font-bold text-gray-300 uppercase tracking-widest">{t('trust.privateData.label')}</p>
                  <p className="text-sm text-gray-500 mt-4">{t('trust.privateData.desc')}</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-pink-500 mb-2">SOC2</p>
                  <p className="text-lg font-bold text-gray-300 uppercase tracking-widest">{t('trust.compliance.label')}</p>
                  <p className="text-sm text-gray-500 mt-4">{t('trust.compliance.desc')}</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-pink-500 mb-2">24/7</p>
                  <p className="text-lg font-bold text-gray-300 uppercase tracking-widest">{t('trust.availability.label')}</p>
                  <p className="text-sm text-gray-500 mt-4">{t('trust.availability.desc')}</p>
               </div>
            </div>
            
            <button className="mt-20 px-12 py-5 bg-white text-gray-900 rounded-2xl font-black text-xl hover:bg-pink-500 hover:text-white transition-all shadow-2xl">
               {t('trust.cta')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
