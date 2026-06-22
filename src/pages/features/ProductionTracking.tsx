import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  ClipboardList,
  Clock,
  ShieldCheck,
  Layers,
  Settings,
  AlertTriangle,
  BarChart3,
  HardHat
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': {
    en: 'Smart Manufacturing',
    hi: 'स्मार्ट मैन्युफैक्चरिंग',
    hinglish: 'Smart Manufacturing',
    gu: 'સ્માર્ટ મેન્યુફેક્ચરિંગ',
    mr: 'स्मार्ट मॅन्युफॅक्चरिंग',
    mwr: 'स्मार्ट मैन्युफैक्चरिंग',
  },
  'hero.title.pre': {
    en: 'Production ',
    hi: 'प्रोडक्शन ',
    hinglish: 'Production ',
    gu: 'પ્રોડક્શન ',
    mr: 'प्रोडक्शन ',
    mwr: 'प्रोडक्शन ',
  },
  'hero.title.accent': {
    en: 'Redefined.',
    hi: 'फिर से परिभाषित।',
    hinglish: 'Redefined.',
    gu: 'નવેસરથી.',
    mr: 'पुन्हा परिभाषित.',
    mwr: 'फेरूं परिभाषित.',
  },
  'hero.desc': {
    en: 'Monitor your floor in real-time. From Bill of Materials (BOM) to final dispatch, track every job card and eliminate bottlenecks with surgical precision.',
    hi: 'अपने फ्लोर को रियल-टाइम में मॉनिटर करें। Bill of Materials (BOM) से लेकर फाइनल डिस्पैच तक, हर job card को ट्रैक करें और बॉटलनेक्स को सटीकता से खत्म करें।',
    hinglish: 'Apne floor ko real-time mein monitor karo. Bill of Materials (BOM) se lekar final dispatch tak, har job card ko track karo aur bottlenecks ko poori precision se khatam karo.',
    gu: 'તમારા ફ્લોરને રિયલ-ટાઇમમાં મોનિટર કરો. Bill of Materials (BOM) થી લઈને ફાઇનલ ડિસ્પેચ સુધી, દરેક job card ને ટ્રૅક કરો અને bottlenecks ને ચોકસાઈથી દૂર કરો.',
    mr: 'तुमचा फ्लोर रिअल-टाइममध्ये मॉनिटर करा. Bill of Materials (BOM) पासून फायनल डिस्पॅचपर्यंत, प्रत्येक job card ट्रॅक करा आणि bottlenecks अचूकपणे दूर करा.',
    mwr: 'थारे फ्लोर ने रियल-टाइम में मॉनिटर करो. Bill of Materials (BOM) सूं फाइनल डिस्पैच तांई, हर job card ने ट्रैक करो अर bottlenecks ने सटीकता सूं खतम करो.',
  },
  'hero.cta.start': {
    en: 'Start Tracking',
    hi: 'ट्रैकिंग शुरू करें',
    hinglish: 'Tracking shuru karein',
    gu: 'ટ્રૅકિંગ શરૂ કરો',
    mr: 'ट्रॅकिंग सुरू करा',
    mwr: 'ट्रैकिंग चालू करो',
  },
  'hero.cta.tour': {
    en: 'Request Factory Tour',
    hi: 'फैक्ट्री टूर का अनुरोध करें',
    hinglish: 'Factory tour request karein',
    gu: 'ફેક્ટરી ટૂર માટે વિનંતી કરો',
    mr: 'फॅक्टरी टूरची विनंती करा',
    mwr: 'फैक्ट्री टूर री विनती करो',
  },
  'hero.float.status': {
    en: 'Line 01 Status',
    hi: 'Line 01 स्टेटस',
    hinglish: 'Line 01 Status',
    gu: 'Line 01 સ્ટેટસ',
    mr: 'Line 01 स्टेटस',
    mwr: 'Line 01 स्टेटस',
  },
  'hero.float.stage': {
    en: 'Printing Stage',
    hi: 'प्रिंटिंग स्टेज',
    hinglish: 'Printing Stage',
    gu: 'પ્રિન્ટિંગ સ્ટેજ',
    mr: 'प्रिंटिंग स्टेज',
    mwr: 'प्रिंटिंग स्टेज',
  },
  'hero.float.complete': {
    en: '75% Complete',
    hi: '75% पूरा',
    hinglish: '75% Complete',
    gu: '75% પૂર્ણ',
    mr: '75% पूर्ण',
    mwr: '75% पूरो',
  },
  'modules.heading': {
    en: 'The Digital Backbone of your Factory',
    hi: 'आपकी फैक्ट्री की डिजिटल रीढ़',
    hinglish: 'Aapki factory ka digital backbone',
    gu: 'તમારી ફેક્ટરીની ડિજિટલ કરોડરજ્જુ',
    mr: 'तुमच्या फॅक्टरीचा डिजिटल कणा',
    mwr: 'थारी फैक्ट्री री डिजिटल रीढ़',
  },
  'modules.sub': {
    en: 'Eliminate manual logs and paper job cards. Digitizing your floor has never been this intuitive.',
    hi: 'मैन्युअल लॉग और पेपर job cards को खत्म करें। अपने फ्लोर को डिजिटल बनाना इतना आसान कभी नहीं था।',
    hinglish: 'Manual logs aur paper job cards ko khatam karo. Apne floor ko digital banana itna easy kabhi nahi tha.',
    gu: 'મેન્યુઅલ લોગ અને પેપર job cards દૂર કરો. તમારા ફ્લોરને ડિજિટલ બનાવવું આટલું સહેલું ક્યારેય નહોતું.',
    mr: 'मॅन्युअल लॉग आणि पेपर job cards काढून टाका. तुमचा फ्लोर डिजिटल करणे इतके सोपे कधीच नव्हते.',
    mwr: 'मैन्युअल लॉग अर पेपर job cards ने खतम करो. थारे फ्लोर ने डिजिटल बणावणो इत्तो सोरो कदेई कोनी हो.',
  },
  'mod.jobcards.title': {
    en: 'Digital Job Cards',
    hi: 'डिजिटल Job Cards',
    hinglish: 'Digital Job Cards',
    gu: 'ડિજિટલ Job Cards',
    mr: 'डिजिटल Job Cards',
    mwr: 'डिजिटल Job Cards',
  },
  'mod.jobcards.desc': {
    en: 'Assign tasks to operators digitally. Track start times, end times, and reasons for downtime instantly.',
    hi: 'ऑपरेटरों को टास्क डिजिटल तरीके से असाइन करें। शुरू होने का समय, खत्म होने का समय और downtime के कारण तुरंत ट्रैक करें।',
    hinglish: 'Operators ko tasks digitally assign karo. Start time, end time aur downtime ke reasons turant track karo.',
    gu: 'ઓપરેટરોને ટાસ્ક ડિજિટલ રીતે સોંપો. શરૂ થવાનો સમય, પૂરો થવાનો સમય અને downtime ના કારણો તરત ટ્રૅક કરો.',
    mr: 'ऑपरेटरना टास्क डिजिटल पद्धतीने नेमून द्या. सुरू होण्याची वेळ, संपण्याची वेळ आणि downtime ची कारणे लगेच ट्रॅक करा.',
    mwr: 'ऑपरेटरां ने टास्क डिजिटल तरीके सूं असाइन करो. चालू होवण रो टाइम, खतम होवण रो टाइम अर downtime रा कारण तुरंत ट्रैक करो.',
  },
  'mod.bom.title': {
    en: 'BOM Management',
    hi: 'BOM मैनेजमेंट',
    hinglish: 'BOM Management',
    gu: 'BOM મેનેજમેન્ટ',
    mr: 'BOM मॅनेजमेंट',
    mwr: 'BOM मैनेजमेंट',
  },
  'mod.bom.desc': {
    en: 'Multi-level Bill of Materials with automated cost calculation and real-time inventory deduction.',
    hi: 'ऑटोमेटेड कॉस्ट कैलकुलेशन और रियल-टाइम inventory कटौती के साथ मल्टी-लेवल Bill of Materials।',
    hinglish: 'Multi-level Bill of Materials, automated cost calculation aur real-time inventory deduction ke saath.',
    gu: 'ઓટોમેટેડ કોસ્ટ ગણતરી અને રિયલ-ટાઇમ inventory કપાત સાથે મલ્ટિ-લેવલ Bill of Materials.',
    mr: 'ऑटोमेटेड कॉस्ट कॅल्क्युलेशन आणि रिअल-टाइम inventory वजावटीसह मल्टी-लेव्हल Bill of Materials.',
    mwr: 'ऑटोमेटेड कॉस्ट कैलकुलेशन अर रियल-टाइम inventory कटौती रे साथै मल्टी-लेवल Bill of Materials.',
  },
  'mod.monitor.title': {
    en: 'Real-time Monitoring',
    hi: 'रियल-टाइम मॉनिटरिंग',
    hinglish: 'Real-time Monitoring',
    gu: 'રિયલ-ટાઇમ મોનિટરિંગ',
    mr: 'रिअल-टाइम मॉनिटरिंग',
    mwr: 'रियल-टाइम मॉनिटरिंग',
  },
  'mod.monitor.desc': {
    en: 'Live visibility into every production stage. Know exactly which order is delayed and why.',
    hi: 'हर प्रोडक्शन स्टेज की लाइव विज़िबिलिटी। ठीक-ठीक जानें कि कौन सा ऑर्डर लेट है और क्यों।',
    hinglish: 'Har production stage ki live visibility. Exactly jaano ki kaun sa order late hai aur kyun.',
    gu: 'દરેક પ્રોડક્શન સ્ટેજની લાઇવ વિઝિબિલિટી. ચોક્કસ જાણો કે કયો ઓર્ડર મોડો છે અને કેમ.',
    mr: 'प्रत्येक प्रोडक्शन स्टेजची लाइव्ह व्हिजिबिलिटी. नेमका कोणता ऑर्डर उशिरा आहे आणि का ते जाणून घ्या.',
    mwr: 'हर प्रोडक्शन स्टेज री लाइव विज़िबिलिटी. ठीक-ठीक जाणो कै कुणसो ऑर्डर लेट है अर कीं.',
  },
  'mod.qc.title': {
    en: 'Quality Checkpoints',
    hi: 'क्वालिटी चेकपॉइंट्स',
    hinglish: 'Quality Checkpoints',
    gu: 'ક્વોલિટી ચેકપોઇન્ટ્સ',
    mr: 'क्वालिटी चेकपॉइंट्स',
    mwr: 'क्वालिटी चेकपॉइंट्स',
  },
  'mod.qc.desc': {
    en: 'Mandatory QC stages with photo proofing and digital sign-offs to ensure zero defects.',
    hi: 'ज़ीरो डिफेक्ट सुनिश्चित करने के लिए फोटो प्रूफिंग और डिजिटल sign-off वाले अनिवार्य QC स्टेज।',
    hinglish: 'Zero defects pakka karne ke liye photo proofing aur digital sign-offs ke saath mandatory QC stages.',
    gu: 'ઝીરો ડિફેક્ટ સુનિશ્ચિત કરવા ફોટો પ્રૂફિંગ અને ડિજિટલ sign-off સાથે ફરજિયાત QC સ્ટેજ.',
    mr: 'झिरो डिफेक्ट सुनिश्चित करण्यासाठी फोटो प्रूफिंग आणि डिजिटल sign-off सह अनिवार्य QC स्टेज.',
    mwr: 'ज़ीरो डिफेक्ट पक्को करण खातर फोटो प्रूफिंग अर डिजिटल sign-off वाळा जरूरी QC स्टेज.',
  },
  'mod.maint.title': {
    en: 'Machine Maintenance',
    hi: 'मशीन मेंटेनेंस',
    hinglish: 'Machine Maintenance',
    gu: 'મશીન મેન્ટેનન્સ',
    mr: 'मशीन मेंटेनन्स',
    mwr: 'मशीन मेंटेनेंस',
  },
  'mod.maint.desc': {
    en: 'Predictive maintenance alerts based on run-hours to prevent unexpected floor shutdowns.',
    hi: 'अचानक फ्लोर शटडाउन रोकने के लिए run-hours पर आधारित प्रेडिक्टिव मेंटेनेंस अलर्ट।',
    hinglish: 'Achanak floor shutdown rokne ke liye run-hours par based predictive maintenance alerts.',
    gu: 'અચાનક ફ્લોર શટડાઉન અટકાવવા run-hours આધારિત પ્રિડિક્ટિવ મેન્ટેનન્સ એલર્ટ.',
    mr: 'अचानक फ्लोर शटडाउन टाळण्यासाठी run-hours वर आधारित प्रेडिक्टिव्ह मेंटेनन्स अलर्ट.',
    mwr: 'अचाणक फ्लोर शटडाउन रोकण खातर run-hours पर आधारित प्रेडिक्टिव मेंटेनेंस अलर्ट.',
  },
  'mod.waste.title': {
    en: 'Wastage Analytics',
    hi: 'वेस्टेज एनालिटिक्स',
    hinglish: 'Wastage Analytics',
    gu: 'વેસ્ટેજ એનાલિટિક્સ',
    mr: 'वेस्टेज अॅनालिटिक्स',
    mwr: 'वेस्टेज एनालिटिक्स',
  },
  'mod.waste.desc': {
    en: 'Track scrap and rework at each stage. Identify cost-saving opportunities through data.',
    hi: 'हर स्टेज पर scrap और rework ट्रैक करें। डेटा के ज़रिए लागत बचाने के मौके पहचानें।',
    hinglish: 'Har stage par scrap aur rework track karo. Data se cost-saving ke opportunities pehchaano.',
    gu: 'દરેક સ્ટેજ પર scrap અને rework ટ્રૅક કરો. ડેટા દ્વારા ખર્ચ બચાવવાની તકો ઓળખો.',
    mr: 'प्रत्येक स्टेजवर scrap आणि rework ट्रॅक करा. डेटाद्वारे खर्च वाचवण्याच्या संधी ओळखा.',
    mwr: 'हर स्टेज पर scrap अर rework ट्रैक करो. डेटा रे जरिये खरचो बचावण रा मौका पिछाणो.',
  },
  'life.heading.pre': {
    en: 'Zero blind spots on the ',
    hi: 'फैक्ट्री फ्लोर पर ',
    hinglish: 'Factory floor par ',
    gu: 'ફેક્ટરી ફ્લોર પર ',
    mr: 'फॅक्टरी फ्लोरवर ',
    mwr: 'फैक्ट्री फ्लोर पर ',
  },
  'life.heading.accent': {
    en: 'factory floor.',
    hi: 'कोई blind spot नहीं।',
    hinglish: 'zero blind spots.',
    gu: 'એકપણ blind spot નહીં.',
    mr: 'एकही blind spot नाही.',
    mwr: 'कोई blind spot कोनी.',
  },
  'life.s1.step': {
    en: 'Planning & BOM',
    hi: 'प्लानिंग और BOM',
    hinglish: 'Planning & BOM',
    gu: 'પ્લાનિંગ અને BOM',
    mr: 'प्लॅनिंग आणि BOM',
    mwr: 'प्लानिंग अर BOM',
  },
  'life.s1.desc': {
    en: 'Define raw materials, sub-assemblies, and labor requirements for each product.',
    hi: 'हर प्रोडक्ट के लिए raw materials, sub-assemblies और लेबर की ज़रूरतें तय करें।',
    hinglish: 'Har product ke liye raw materials, sub-assemblies aur labor requirements define karo.',
    gu: 'દરેક પ્રોડક્ટ માટે raw materials, sub-assemblies અને લેબર જરૂરિયાતો નક્કી કરો.',
    mr: 'प्रत्येक प्रोडक्टसाठी raw materials, sub-assemblies आणि लेबर गरजा निश्चित करा.',
    mwr: 'हर प्रोडक्ट खातर raw materials, sub-assemblies अर लेबर री जरूरतां तय करो.',
  },
  'life.s2.step': {
    en: 'Work Order Creation',
    hi: 'वर्क ऑर्डर क्रिएशन',
    hinglish: 'Work Order Creation',
    gu: 'વર્ક ઓર્ડર ક્રિએશન',
    mr: 'वर्क ऑर्डर क्रिएशन',
    mwr: 'वर्क ऑर्डर क्रिएशन',
  },
  'life.s2.desc': {
    en: 'Generate digital job cards and distribute them to relevant machine operators.',
    hi: 'डिजिटल job cards बनाएं और उन्हें संबंधित मशीन ऑपरेटरों को बांटें।',
    hinglish: 'Digital job cards banao aur unhe relevant machine operators ko distribute karo.',
    gu: 'ડિજિટલ job cards બનાવો અને તેને સંબંધિત મશીન ઓપરેટરોને વહેંચો.',
    mr: 'डिजिटल job cards तयार करा आणि ती संबंधित मशीन ऑपरेटरना वाटा.',
    mwr: 'डिजिटल job cards बणावो अर उणां ने सम्बंधित मशीन ऑपरेटरां ने बांटो.',
  },
  'life.s3.step': {
    en: 'Stage Tracking',
    hi: 'स्टेज ट्रैकिंग',
    hinglish: 'Stage Tracking',
    gu: 'સ્ટેજ ટ્રૅકિંગ',
    mr: 'स्टेज ट्रॅकिंग',
    mwr: 'स्टेज ट्रैकिंग',
  },
  'life.s3.desc': {
    en: 'Operators update progress in real-time via simple mobile or tablet interfaces.',
    hi: 'ऑपरेटर सिंपल मोबाइल या टैबलेट इंटरफेस से रियल-टाइम में प्रोग्रेस अपडेट करते हैं।',
    hinglish: 'Operators simple mobile ya tablet interface se real-time mein progress update karte hain.',
    gu: 'ઓપરેટરો સરળ મોબાઇલ કે ટેબ્લેટ ઇન્ટરફેસથી રિયલ-ટાઇમમાં પ્રોગ્રેસ અપડેટ કરે છે.',
    mr: 'ऑपरेटर सोप्या मोबाइल किंवा टॅब्लेट इंटरफेसद्वारे रिअल-टाइममध्ये प्रगती अपडेट करतात.',
    mwr: 'ऑपरेटर सोरा मोबाइल या टैबलेट इंटरफेस सूं रियल-टाइम में प्रोग्रेस अपडेट करै.',
  },
  'life.s4.step': {
    en: 'Quality Control',
    hi: 'क्वालिटी कंट्रोल',
    hinglish: 'Quality Control',
    gu: 'ક્વોલિટી કંટ્રોલ',
    mr: 'क्वालिटी कंट्रोल',
    mwr: 'क्वालिटी कंट्रोल',
  },
  'life.s4.desc': {
    en: 'QC team validates output against specs before the order moves to packing.',
    hi: 'ऑर्डर पैकिंग में जाने से पहले QC टीम output को specs के मुताबिक वैलिडेट करती है।',
    hinglish: 'Order packing mein jaane se pehle QC team output ko specs ke against validate karti hai.',
    gu: 'ઓર્ડર પેકિંગમાં જાય તે પહેલાં QC ટીમ output ને specs સામે વેલિડેટ કરે છે.',
    mr: 'ऑर्डर पॅकिंगला जाण्यापूर्वी QC टीम output ला specs नुसार व्हॅलिडेट करते.',
    mwr: 'ऑर्डर पैकिंग में जावण सूं पैली QC टीम output ने specs रे मुताबिक वैलिडेट करै.',
  },
  'eff.heading': {
    en: 'Floor Efficiency',
    hi: 'फ्लोर एफिशिएंसी',
    hinglish: 'Floor Efficiency',
    gu: 'ફ્લોર એફિશિયન્સી',
    mr: 'फ्लोर एफिशियन्सी',
    mwr: 'फ्लोर एफिशिएंसी',
  },
  'eff.oee': {
    en: 'OEE (Overall Equipment Effectiveness)',
    hi: 'OEE (Overall Equipment Effectiveness)',
    hinglish: 'OEE (Overall Equipment Effectiveness)',
    gu: 'OEE (Overall Equipment Effectiveness)',
    mr: 'OEE (Overall Equipment Effectiveness)',
    mwr: 'OEE (Overall Equipment Effectiveness)',
  },
  'eff.availability': {
    en: 'Availability',
    hi: 'उपलब्धता',
    hinglish: 'Availability',
    gu: 'ઉપલબ્ધતા',
    mr: 'उपलब्धता',
    mwr: 'उपलब्धता',
  },
  'eff.performance': {
    en: 'Performance',
    hi: 'परफॉर्मेंस',
    hinglish: 'Performance',
    gu: 'પરફોર્મન્સ',
    mr: 'परफॉर्मन्स',
    mwr: 'परफॉर्मेंस',
  },
  'eff.quality': {
    en: 'Quality Rate',
    hi: 'क्वालिटी रेट',
    hinglish: 'Quality Rate',
    gu: 'ક્વોલિટી રેટ',
    mr: 'क्वालिटी रेट',
    mwr: 'क्वालिटी रेट',
  },
  'eff.suggest.title': {
    en: 'Smart Suggestion',
    hi: 'स्मार्ट सुझाव',
    hinglish: 'Smart Suggestion',
    gu: 'સ્માર્ટ સૂચન',
    mr: 'स्मार्ट सूचना',
    mwr: 'स्मार्ट सुझाव',
  },
  'eff.suggest.desc': {
    en: 'Line 03 idle time is 15% higher than average. Consider re-evaluating operator shifts.',
    hi: 'Line 03 का idle time औसत से 15% ज़्यादा है। ऑपरेटर शिफ्ट्स को दोबारा देखने पर विचार करें।',
    hinglish: 'Line 03 ka idle time average se 15% zyada hai. Operator shifts ko dobara evaluate karne ke baare mein socho.',
    gu: 'Line 03 નો idle time સરેરાશ કરતાં 15% વધારે છે. ઓપરેટર શિફ્ટ ફરી તપાસવાનું વિચારો.',
    mr: 'Line 03 चा idle time सरासरीपेक्षा 15% जास्त आहे. ऑपरेटर शिफ्ट पुन्हा तपासण्याचा विचार करा.',
    mwr: 'Line 03 रो idle time औसत सूं 15% बेसी है. ऑपरेटर शिफ्टां ने फेरूं देखण रो बिचार करो.',
  },
  'cta.heading': {
    en: 'Ready to modernize your production?',
    hi: 'अपने प्रोडक्शन को मॉडर्न बनाने के लिए तैयार हैं?',
    hinglish: 'Apne production ko modernize karne ke liye taiyaar ho?',
    gu: 'તમારા પ્રોડક્શનને આધુનિક બનાવવા તૈયાર છો?',
    mr: 'तुमचे प्रोडक्शन आधुनिक करायला तयार आहात?',
    mwr: 'थारे प्रोडक्शन ने मॉडर्न बणावण खातर त्यार हो?',
  },
  'cta.sub': {
    en: 'Stop relying on guesswork. Get the real-time data you need to scale your manufacturing output.',
    hi: 'अंदाज़े पर भरोसा करना बंद करें। अपना मैन्युफैक्चरिंग आउटपुट बढ़ाने के लिए ज़रूरी रियल-टाइम डेटा पाएं।',
    hinglish: 'Andaaze par bharosa karna band karo. Apna manufacturing output scale karne ke liye zaroori real-time data paao.',
    gu: 'અંદાજ પર આધાર રાખવાનું બંધ કરો. તમારું મેન્યુફેક્ચરિંગ આઉટપુટ વધારવા જરૂરી રિયલ-ટાઇમ ડેટા મેળવો.',
    mr: 'अंदाजावर अवलंबून राहणे थांबवा. तुमचे मॅन्युफॅक्चरिंग आउटपुट वाढवण्यासाठी आवश्यक रिअल-टाइम डेटा मिळवा.',
    mwr: 'अंदाजां पर भरोसो करणो बंद करो. थारो मैन्युफैक्चरिंग आउटपुट बधावण खातर जरूरी रियल-टाइम डेटा पावो.',
  },
  'cta.start': {
    en: 'Get Started Free',
    hi: 'फ्री में शुरू करें',
    hinglish: 'Free mein shuru karein',
    gu: 'મફતમાં શરૂ કરો',
    mr: 'मोफत सुरू करा',
    mwr: 'फ्री में चालू करो',
  },
  'cta.expert': {
    en: 'Speak with Expert',
    hi: 'एक्सपर्ट से बात करें',
    hinglish: 'Expert se baat karein',
    gu: 'એક્સપર્ટ સાથે વાત કરો',
    mr: 'एक्सपर्टशी बोला',
    mwr: 'एक्सपर्ट सूं बात करो',
  },
};

export default function ProductionTracking() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                {t('hero.badge')}
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                {t('hero.title.pre')}<span className="text-amber-600 italic">{t('hero.title.accent')}</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                {t('hero.desc')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-all flex items-center gap-2 group">
                  {t('hero.cta.start')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  {t('hero.cta.tour')}
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-amber-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/production_tracking_preview_1778579471889.png" 
                  alt="Production Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Real-time Status Floating UI */}
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 hidden md:block w-48"
                >
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('hero.float.status')}</p>
                   </div>
                   <p className="text-sm font-black text-gray-900">{t('hero.float.stage')}</p>
                   <div className="mt-3 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-amber-500 rounded-full" />
                   </div>
                   <p className="text-[10px] text-gray-500 mt-2">{t('hero.float.complete')}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">{t('modules.heading')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('modules.sub')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardList,
                titleKey: "mod.jobcards.title",
                descKey: "mod.jobcards.desc",
                color: "bg-themeGreen-50 text-themeGreen-600"
              },
              {
                icon: Layers,
                titleKey: "mod.bom.title",
                descKey: "mod.bom.desc",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Clock,
                titleKey: "mod.monitor.title",
                descKey: "mod.monitor.desc",
                color: "bg-teal-50 text-teal-600"
              },
              {
                icon: ShieldCheck,
                titleKey: "mod.qc.title",
                descKey: "mod.qc.desc",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Settings,
                titleKey: "mod.maint.title",
                descKey: "mod.maint.desc",
                color: "bg-indigo-50 text-indigo-600"
              },
              {
                icon: AlertTriangle,
                titleKey: "mod.waste.title",
                descKey: "mod.waste.desc",
                color: "bg-red-50 text-red-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Lifecycle Visualizer */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">{t('life.heading.pre')}<span className="text-amber-500">{t('life.heading.accent')}</span></h2>
                 
                 <div className="space-y-12">
                    {[
                      { stepKey: "life.s1.step", descKey: "life.s1.desc" },
                      { stepKey: "life.s2.step", descKey: "life.s2.desc" },
                      { stepKey: "life.s3.step", descKey: "life.s3.desc" },
                      { stepKey: "life.s4.step", descKey: "life.s4.desc" }
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-8 relative group">
                         <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold group-hover:bg-amber-500 group-hover:text-black transition-all">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-px h-16 bg-white/10 mt-4 group-hover:bg-amber-500/30 transition-colors" />}
                         </div>
                         <div>
                            <h4 className="text-2xl font-bold mb-2">{t(phase.stepKey)}</h4>
                            <p className="text-gray-400 leading-relaxed">{t(phase.descKey)}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 relative">
                 <div className="absolute inset-0 bg-amber-500/20 blur-[120px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10">
                    <div className="flex items-center justify-between mb-10">
                       <h3 className="text-2xl font-bold">{t('eff.heading')}</h3>
                       <BarChart3 className="text-amber-500" />
                    </div>
                    
                    <div className="space-y-10">
                       {[
                         { labelKey: "eff.oee", value: "84.2%", progress: 84 },
                         { labelKey: "eff.availability", value: "91.0%", progress: 91 },
                         { labelKey: "eff.performance", value: "88.5%", progress: 88 },
                         { labelKey: "eff.quality", value: "99.1%", progress: 99 }
                       ].map((stat, i) => (
                         <div key={i}>
                            <div className="flex justify-between mb-3 text-sm font-bold">
                               <span className="text-gray-400 uppercase tracking-widest text-[10px]">{t(stat.labelKey)}</span>
                               <span>{stat.value}</span>
                            </div>
                            <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${stat.progress}%` }}
                                 transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                                 className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                       <HardHat className="text-amber-500" size={32} />
                       <div>
                          <p className="text-sm font-bold">{t('eff.suggest.title')}</p>
                          <p className="text-xs text-gray-400 mt-1">{t('eff.suggest.desc')}</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">{t('cta.heading')}</h2>
           <p className="text-xl text-gray-600 mb-12">{t('cta.sub')}</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-amber-600 text-white rounded-2xl font-black text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-100">
                 {t('cta.start')}
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 {t('cta.expert')}
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
