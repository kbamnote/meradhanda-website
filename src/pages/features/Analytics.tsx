import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Zap,
  Activity,
  Target,
  Users,
  Box,
  Filter
} from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import type { Entry } from '../../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'hero.badge': { en: 'Intelligence Engine', hi: 'इंटेलिजेंस इंजन', hinglish: 'Intelligence Engine', gu: 'ઇન્ટેલિજન્સ એન્જિન', mr: 'इंटेलिजन्स इंजिन', mwr: 'इंटेलिजेंस इंजन' },
  'hero.title.pre': { en: 'Decision Making, ', hi: 'फ़ैसले लेना, ', hinglish: 'Decision Making, ', gu: 'નિર્ણય લેવાનું, ', mr: 'निर्णय घेणे, ', mwr: 'फैसला करणो, ' },
  'hero.title.accent': { en: 'Simplified.', hi: 'आसान।', hinglish: 'Aasaan.', gu: 'સરળ.', mr: 'सोपे.', mwr: 'आसान।' },
  'hero.desc': { en: "Transform raw data into actionable insights. Mera Dhanda's analytics engine processes thousands of transactions to give you a clear roadmap for growth.", hi: 'कच्चे डेटा को काम के इनसाइट्स में बदलें। Mera Dhanda का analytics engine हज़ारों transactions को process करके आपको ग्रोथ का साफ़ रोडमैप देता है।', hinglish: 'Raw data ko actionable insights mein badlo. Mera Dhanda ka analytics engine hazaaron transactions process karke aapko growth ka clear roadmap deta hai.', gu: 'કાચા ડેટાને ઉપયોગી insights માં ફેરવો. Mera Dhanda નું analytics engine હજારો transactions process કરીને તમને growth નો સ્પષ્ટ roadmap આપે છે.', mr: 'कच्च्या डेटाला उपयुक्त insights मध्ये बदला. Mera Dhanda चे analytics engine हजारो transactions process करून तुम्हाला growth चा स्पष्ट roadmap देते.', mwr: 'कच्चे डेटा नै काम रा insights मं बदलो. Mera Dhanda रो analytics engine हजारां transactions प्रोसेस करनै थानै ग्रोथ रो साफ रोडमैप देवै।' },
  'hero.btn.demo': { en: 'View Demo Dashboard', hi: 'डेमो डैशबोर्ड देखें', hinglish: 'Demo dashboard dekho', gu: 'ડેમો ડેશબોર્ડ જુઓ', mr: 'डेमो डॅशबोर्ड पहा', mwr: 'डेमो डैशबोर्ड देखो' },
  'hero.btn.report': { en: 'Request Custom Report', hi: 'कस्टम रिपोर्ट का अनुरोध करें', hinglish: 'Custom report request karein', gu: 'કસ્ટમ રિપોર્ટ માટે વિનંતી કરો', mr: 'कस्टम रिपोर्टसाठी विनंती करा', mwr: 'कस्टम रिपोर्ट री विनती करो' },
  'kpi.activeOrders': { en: 'Active Orders', hi: 'एक्टिव ऑर्डर', hinglish: 'Active Orders', gu: 'સક્રિય ઓર્ડર', mr: 'सक्रिय ऑर्डर', mwr: 'चालू ऑर्डर' },
  'kpi.target': { en: 'Target', hi: 'टारगेट', hinglish: 'Target', gu: 'ટાર્ગેટ', mr: 'टार्गेट', mwr: 'टारगेट' },
  'modules.title': { en: 'Every metric that matters.', hi: 'हर ज़रूरी मेट्रिक।', hinglish: 'Har zaroori metric.', gu: 'દરેક મહત્વનું metric.', mr: 'प्रत्येक महत्त्वाचे metric.', mwr: 'हर जरूरी मेट्रिक।' },
  'modules.subtitle': { en: "From high-level revenue charts to granular employee productivity, we track it all so you don't have to.", hi: 'हाई-लेवल रेवेन्यू चार्ट से लेकर बारीक एम्प्लॉई प्रोडक्टिविटी तक, हम सब कुछ ट्रैक करते हैं ताकि आपको न करना पड़े।', hinglish: 'High-level revenue charts se lekar detailed employee productivity tak, hum sab track karte hain taaki aapko na karna pade.', gu: 'હાઈ-લેવલ revenue charts થી લઈને બારીક employee productivity સુધી, અમે બધું track કરીએ છીએ જેથી તમારે ન કરવું પડે.', mr: 'हाय-लेव्हल revenue charts पासून बारीक employee productivity पर्यंत, आम्ही सर्व काही track करतो जेणेकरून तुम्हाला करावे लागणार नाही.', mwr: 'हाई-लेवल रेवेन्यू चार्ट सूं लेय बारीक एम्प्लॉई प्रोडक्टिविटी तांई, हाम सगळो ट्रैक करां ताकि थानै नीं करणो पड़ै।' },
  'mod.salesFunnel.title': { en: 'Sales Funnel', hi: 'सेल्स फ़नल', hinglish: 'Sales Funnel', gu: 'સેલ્સ ફનલ', mr: 'सेल्स फनेल', mwr: 'सेल्स फनल' },
  'mod.salesFunnel.desc': { en: 'Track leads to conversion. Identify exactly where you are losing potential customers.', hi: 'लीड से कन्वर्ज़न तक ट्रैक करें। ठीक से पहचानें कि आप कहाँ संभावित ग्राहक खो रहे हैं।', hinglish: 'Leads se conversion tak track karo. Pata lagao ki aap kahaan potential customers kho rahe ho.', gu: 'leads થી conversion સુધી track કરો. ચોક્કસ ઓળખો કે તમે ક્યાં સંભવિત ગ્રાહકો ગુમાવો છો.', mr: 'leads पासून conversion पर्यंत track करा. तुम्ही नेमके कुठे संभाव्य ग्राहक गमावत आहात ते ओळखा.', mwr: 'लीड सूं कन्वर्जन तांई ट्रैक करो. पक्की तरै पछाणो कै थे कठै संभावित ग्राहक खो रिया हो।' },
  'mod.revForecast.title': { en: 'Revenue Forecast', hi: 'रेवेन्यू फ़ोरकास्ट', hinglish: 'Revenue Forecast', gu: 'રેવન્યુ ફોરકાસ્ટ', mr: 'रेव्हेन्यू फोरकास्ट', mwr: 'रेवेन्यू फोरकास्ट' },
  'mod.revForecast.desc': { en: 'AI-powered predictions based on historical data and seasonal trends.', hi: 'ऐतिहासिक डेटा और सीज़नल ट्रेंड्स पर आधारित AI-पावर्ड भविष्यवाणियाँ।', hinglish: 'Historical data aur seasonal trends par based AI-powered predictions.', gu: 'ઐતિહાસિક ડેટા અને seasonal trends પર આધારિત AI-powered આગાહીઓ.', mr: 'ऐतिहासिक डेटा आणि seasonal trends वर आधारित AI-powered अंदाज.', mwr: 'इतिहास रा डेटा अर सीजनल ट्रेंड पर आधारित AI-पावर्ड भविष्यवाणी।' },
  'mod.teamProd.title': { en: 'Team Productivity', hi: 'टीम प्रोडक्टिविटी', hinglish: 'Team Productivity', gu: 'ટીમ પ્રોડક્ટિવિટી', mr: 'टीम प्रॉडक्टिव्हिटी', mwr: 'टीम प्रोडक्टिविटी' },
  'mod.teamProd.desc': { en: 'Monitor staff output, target achievements, and individual efficiency scores.', hi: 'स्टाफ़ आउटपुट, टारगेट उपलब्धियाँ और हर व्यक्ति के एफ़िशिएंसी स्कोर पर नज़र रखें।', hinglish: 'Staff output, target achievements, aur individual efficiency scores monitor karo.', gu: 'staff output, target સિદ્ધિઓ અને વ્યક્તિગત efficiency scores પર નજર રાખો.', mr: 'staff output, target साध्य आणि वैयक्तिक efficiency scores वर लक्ष ठेवा.', mwr: 'स्टाफ आउटपुट, टारगेट उपलब्धि अर हर माणस रा एफिशिएंसी स्कोर पर नजर राखो।' },
  'mod.invTurn.title': { en: 'Inventory Turn', hi: 'इन्वेंटरी टर्न', hinglish: 'Inventory Turn', gu: 'ઇન્વેન્ટરી ટર્ન', mr: 'इन्व्हेंटरी टर्न', mwr: 'इन्वेंटरी टर्न' },
  'mod.invTurn.desc': { en: 'Identify slow-moving stock and high-demand items to optimize procurement.', hi: 'खरीद को बेहतर बनाने के लिए धीमे बिकने वाले स्टॉक और ज़्यादा माँग वाले आइटम पहचानें।', hinglish: 'Slow-moving stock aur high-demand items pehchaano taaki procurement better ho.', gu: 'procurement optimize કરવા માટે ધીમે વેચાતો stock અને વધુ માગવાળી items ઓળખો.', mr: 'procurement optimize करण्यासाठी हळू विकला जाणारा stock आणि जास्त मागणीच्या items ओळखा.', mwr: 'खरीद नै बेहतर करण खातर धीमे बिकण आळो स्टॉक अर ज्यादा मांग आळा आइटम पछाणो।' },
  'mod.realtime.title': { en: 'Real-time Feed', hi: 'रियल-टाइम फ़ीड', hinglish: 'Real-time Feed', gu: 'રિયલ-ટાઇમ ફીડ', mr: 'रिअल-टाइम फीड', mwr: 'रियल-टाइम फीड' },
  'mod.realtime.desc': { en: 'A live scroll of every significant event happening across your business units.', hi: 'आपकी बिज़नेस यूनिट्स में होने वाली हर ज़रूरी घटना का लाइव फ़ीड।', hinglish: 'Aapke business units mein hone wali har important event ka live scroll.', gu: 'તમારા business units માં બનતી દરેક મહત્વની ઘટનાનો live scroll.', mr: 'तुमच्या business units मध्ये घडणाऱ्या प्रत्येक महत्त्वाच्या घटनेचा live scroll.', mwr: 'थारी बिजनेस यूनिट मं होवण आळी हर जरूरी घटना रो लाइव फीड।' },
  'mod.goalTrack.title': { en: 'Goal Tracking', hi: 'गोल ट्रैकिंग', hinglish: 'Goal Tracking', gu: 'ગોલ ટ્રેકિંગ', mr: 'गोल ट्रॅकिंग', mwr: 'गोल ट्रैकिंग' },
  'mod.goalTrack.desc': { en: 'Set monthly or quarterly targets for departments and track progress in real-time.', hi: 'डिपार्टमेंट के लिए मासिक या तिमाही टारगेट सेट करें और रियल-टाइम में प्रगति ट्रैक करें।', hinglish: 'Departments ke liye monthly ya quarterly targets set karo aur real-time mein progress track karo.', gu: 'departments માટે માસિક અથવા ત્રિમાસિક targets સેટ કરો અને real-time માં પ્રગતિ track કરો.', mr: 'departments साठी मासिक किंवा तिमाही targets सेट करा आणि real-time मध्ये प्रगती track करा.', mwr: 'डिपार्टमेंट खातर महीना या तिमाही टारगेट सेट करो अर रियल-टाइम मं प्रगति ट्रैक करो।' },
  'mod.segment.title': { en: 'Deep Segmentation', hi: 'डीप सेगमेंटेशन', hinglish: 'Deep Segmentation', gu: 'ડીપ સેગ્મેન્ટેશન', mr: 'डीप सेगमेंटेशन', mwr: 'डीप सेगमेंटेशन' },
  'mod.segment.desc': { en: 'Filter your data by location, product category, date range, or customer type.', hi: 'अपने डेटा को लोकेशन, प्रोडक्ट कैटेगरी, डेट रेंज या ग्राहक टाइप से फ़िल्टर करें।', hinglish: 'Apne data ko location, product category, date range ya customer type se filter karo.', gu: 'તમારા ડેટાને location, product category, date range અથવા customer type પ્રમાણે filter કરો.', mr: 'तुमचा डेटा location, product category, date range किंवा customer type नुसार filter करा.', mwr: 'थारा डेटा नै लोकेशन, प्रोडक्ट कैटेगरी, डेट रेंज या ग्राहक टाइप सूं फिल्टर करो।' },
  'mod.customDash.title': { en: 'Custom Dashboards', hi: 'कस्टम डैशबोर्ड', hinglish: 'Custom Dashboards', gu: 'કસ્ટમ ડેશબોર્ડ', mr: 'कस्टम डॅशबोर्ड', mwr: 'कस्टम डैशबोर्ड' },
  'mod.customDash.desc': { en: 'Build your own views with the metrics that matter most to your specific role.', hi: 'अपनी भूमिका के लिए सबसे ज़रूरी मेट्रिक्स के साथ अपने खुद के व्यू बनाएँ।', hinglish: 'Apni role ke liye sabse zaroori metrics ke saath apne views banao.', gu: 'તમારી role માટે સૌથી મહત્વના metrics સાથે તમારા પોતાના views બનાવો.', mr: 'तुमच्या role साठी सर्वात महत्त्वाच्या metrics सह तुमचे स्वतःचे views तयार करा.', mwr: 'थारी भूमिका खातर सबसूं जरूरी मेट्रिक रै साथै थारा खुद रा व्यू बणावो।' },
  'deepdive.title.pre': { en: 'Visualize your ', hi: 'अपनी ', hinglish: 'Apni ', gu: 'તમારી ', mr: 'तुमचे ', mwr: 'थारी ' },
  'deepdive.title.accent': { en: 'Success.', hi: 'कामयाबी देखें।', hinglish: 'Success dekho.', gu: 'સફળતા જુઓ.', mr: 'यश पहा.', mwr: 'कामयाबी देखो।' },
  'phase.aggregation.step': { en: 'Data Aggregation', hi: 'डेटा एग्रीगेशन', hinglish: 'Data Aggregation', gu: 'ડેટા એગ્રીગેશન', mr: 'डेटा एकत्रीकरण', mwr: 'डेटा एग्रीगेशन' },
  'phase.aggregation.desc': { en: 'We pull data from sales, inventory, and production into one unified lake.', hi: 'हम सेल्स, इन्वेंटरी और प्रोडक्शन का डेटा एक ही जगह जोड़ते हैं।', hinglish: 'Hum sales, inventory aur production ka data ek hi unified lake mein laate hain.', gu: 'અમે sales, inventory અને production નો ડેટા એક unified lake માં લાવીએ છીએ.', mr: 'आम्ही sales, inventory आणि production चा डेटा एका unified lake मध्ये आणतो.', mwr: 'हाम सेल्स, इन्वेंटरी अर प्रोडक्शन रो डेटा एकई जगां जोड़ां।' },
  'phase.pattern.step': { en: 'Pattern Recognition', hi: 'पैटर्न रिकग्निशन', hinglish: 'Pattern Recognition', gu: 'પેટર્ન રેકગ્નિશન', mr: 'पॅटर्न रेकग्निशन', mwr: 'पैटर्न रिकग्निशन' },
  'phase.pattern.desc': { en: 'Our engine identifies correlations between variables you might have missed.', hi: 'हमारा इंजन उन वेरिएबल्स के बीच संबंध पहचानता है जो आपसे छूट गए होंगे।', hinglish: 'Hamara engine un variables ke beech correlations dhoondta hai jo aapse chhoot gaye honge.', gu: 'અમારું engine એવા variables વચ્ચેના correlations ઓળખે છે જે કદાચ તમે ચૂકી ગયા હો.', mr: 'आमचे engine अशा variables मधील correlations ओळखते जे कदाचित तुम्ही चुकवले असतील.', mwr: 'म्हारो इंजन उण वेरिएबल रै बीच रो संबंध पछाणै जे थासूं छूट ग्या हुसी।' },
  'phase.reporting.step': { en: 'Automated Reporting', hi: 'ऑटोमेटेड रिपोर्टिंग', hinglish: 'Automated Reporting', gu: 'ઓટોમેટેડ રિપોર્ટિંગ', mr: 'ऑटोमेटेड रिपोर्टिंग', mwr: 'ऑटोमेटेड रिपोर्टिंग' },
  'phase.reporting.desc': { en: 'Get daily, weekly, or monthly summaries delivered to your inbox or WhatsApp.', hi: 'रोज़ाना, साप्ताहिक या मासिक सारांश सीधे अपने inbox या WhatsApp पर पाएँ।', hinglish: 'Daily, weekly ya monthly summaries seedha apne inbox ya WhatsApp par paao.', gu: 'દૈનિક, સાપ્તાહિક અથવા માસિક summaries સીધા તમારા inbox અથવા WhatsApp પર મેળવો.', mr: 'दैनिक, साप्ताहिक किंवा मासिक summaries थेट तुमच्या inbox किंवा WhatsApp वर मिळवा.', mwr: 'रोजाना, हफ्ता या महीना रो सारांश सीधो थारै inbox या WhatsApp पर पावो।' },
  'phase.alerts.step': { en: 'Strategic Alerts', hi: 'स्ट्रैटेजिक अलर्ट', hinglish: 'Strategic Alerts', gu: 'સ્ટ્રેટેજિક એલર્ટ', mr: 'स्ट्रॅटेजिक अलर्ट', mwr: 'स्ट्रैटेजिक अलर्ट' },
  'phase.alerts.desc': { en: 'Instant notifications when a KPI drops below your defined threshold.', hi: 'जब कोई KPI आपके तय किए गए स्तर से नीचे गिरे तो तुरंत नोटिफ़िकेशन।', hinglish: 'Jab koi KPI aapke defined threshold se neeche gire to instant notifications.', gu: 'જ્યારે કોઈ KPI તમે નક્કી કરેલા threshold થી નીચે જાય ત્યારે તરત notifications.', mr: 'जेव्हा एखादे KPI तुम्ही ठरवलेल्या threshold खाली येते तेव्हा त्वरित notifications.', mwr: 'जद कोई KPI थारै तय करियोड़ा स्तर सूं नीचै गिरै तो तुरंत नोटिफिकेशन।' },
  'velocity.title': { en: 'Growth Velocity', hi: 'ग्रोथ वेलोसिटी', hinglish: 'Growth Velocity', gu: 'ગ્રોથ વેલોસિટી', mr: 'ग्रोथ वेलोसिटी', mwr: 'ग्रोथ वेलोसिटी' },
  'velocity.newLeads': { en: 'New Leads', hi: 'नई लीड्स', hinglish: 'New Leads', gu: 'નવી leads', mr: 'नवीन leads', mwr: 'नई लीड्स' },
  'velocity.conversion': { en: 'Conversion Rate', hi: 'कन्वर्ज़न रेट', hinglish: 'Conversion Rate', gu: 'કન્વર્ઝન રેટ', mr: 'कन्व्हर्जन रेट', mwr: 'कन्वर्जन रेट' },
  'velocity.retention': { en: 'Retention', hi: 'रिटेंशन', hinglish: 'Retention', gu: 'રિટેન્શન', mr: 'रिटेन्शन', mwr: 'रिटेंशन' },
  'velocity.cac': { en: 'CAC (avg)', hi: 'CAC (औसत)', hinglish: 'CAC (avg)', gu: 'CAC (સરેરાશ)', mr: 'CAC (सरासरी)', mwr: 'CAC (औसत)' },
  'insight.title': { en: 'Smart Insight', hi: 'स्मार्ट इनसाइट', hinglish: 'Smart Insight', gu: 'સ્માર્ટ ઇનસાઇટ', mr: 'स्मार्ट इनसाइट', mwr: 'स्मार्ट इनसाइट' },
  'insight.desc': { en: 'Saturday afternoons show a 40% higher lead volume. Consider increasing support staff then.', hi: 'शनिवार दोपहर में 40% ज़्यादा लीड आती हैं। उस समय सपोर्ट स्टाफ़ बढ़ाने पर विचार करें।', hinglish: 'Saturday afternoons mein 40% zyada lead volume hota hai. Us time support staff badhane ke baare mein socho.', gu: 'શનિવારે બપોરે 40% વધુ lead volume દેખાય છે. ત્યારે support staff વધારવાનું વિચારો.', mr: 'शनिवारी दुपारी 40% जास्त lead volume दिसते. तेव्हा support staff वाढवण्याचा विचार करा.', mwr: 'सनीचर री दुपारी मं 40% ज्यादा लीड आवै. उण बखत सपोर्ट स्टाफ बधावण रो सोचो।' },
  'cta.title': { en: 'Stop flying blind.', hi: 'अंधेरे में चलना बंद करें।', hinglish: 'Andhere mein chalna band karo.', gu: 'અંધારામાં ચાલવાનું બંધ કરો.', mr: 'अंधारात चालणे थांबवा.', mwr: 'अंधेरै मं चालणो बंद करो।' },
  'cta.desc': { en: 'Empower your business with the data it needs to dominate the market. Start your analytics journey today.', hi: 'अपने बिज़नेस को वह डेटा दें जिसकी उसे मार्केट पर राज करने के लिए ज़रूरत है। आज ही अपना एनालिटिक्स सफ़र शुरू करें।', hinglish: 'Apne business ko wo data do jiski usse market dominate karne ke liye zaroorat hai. Aaj hi apni analytics journey shuru karo.', gu: 'તમારા business ને market પર પ્રભુત્વ માટે જરૂરી ડેટા આપો. આજે જ તમારી analytics journey શરૂ કરો.', mr: 'तुमच्या business ला market वर वर्चस्वासाठी आवश्यक डेटा द्या. आजच तुमचा analytics प्रवास सुरू करा.', mwr: 'थारै बिजनेस नै वो डेटा देवो जिकी नै मार्केट पर राज करण खातर जरूरत है। आज ही थारी एनालिटिक्स यात्रा चालू करो।' },
  'cta.btn.start': { en: 'Get Started Free', hi: 'फ़्री में शुरू करें', hinglish: 'Free mein shuru karein', gu: 'મફતમાં શરૂ કરો', mr: 'मोफत सुरू करा', mwr: 'फ्री मं चालू करो' },
  'cta.btn.scientist': { en: 'Speak with Data Scientist', hi: 'डेटा साइंटिस्ट से बात करें', hinglish: 'Data Scientist se baat karein', gu: 'ડેટા સાયન્ટિસ્ટ સાથે વાત કરો', mr: 'डेटा सायंटिस्टशी बोला', mwr: 'डेटा साइंटिस्ट सूं बात करो' },
};

const modules = [
  { icon: BarChart3, titleKey: 'mod.salesFunnel.title', descKey: 'mod.salesFunnel.desc', color: 'text-themeGreen-600 bg-themeGreen-50' },
  { icon: TrendingUp, titleKey: 'mod.revForecast.title', descKey: 'mod.revForecast.desc', color: 'text-purple-600 bg-purple-50' },
  { icon: Users, titleKey: 'mod.teamProd.title', descKey: 'mod.teamProd.desc', color: 'text-teal-600 bg-teal-50' },
  { icon: Box, titleKey: 'mod.invTurn.title', descKey: 'mod.invTurn.desc', color: 'text-orange-600 bg-orange-50' },
  { icon: Activity, titleKey: 'mod.realtime.title', descKey: 'mod.realtime.desc', color: 'text-indigo-600 bg-indigo-50' },
  { icon: Target, titleKey: 'mod.goalTrack.title', descKey: 'mod.goalTrack.desc', color: 'text-pink-600 bg-pink-50' },
  { icon: Filter, titleKey: 'mod.segment.title', descKey: 'mod.segment.desc', color: 'text-cyan-600 bg-cyan-50' },
  { icon: Zap, titleKey: 'mod.customDash.title', descKey: 'mod.customDash.desc', color: 'text-teal-600 bg-teal-50' },
];

const phases = [
  { stepKey: 'phase.aggregation.step', descKey: 'phase.aggregation.desc' },
  { stepKey: 'phase.pattern.step', descKey: 'phase.pattern.desc' },
  { stepKey: 'phase.reporting.step', descKey: 'phase.reporting.desc' },
  { stepKey: 'phase.alerts.step', descKey: 'phase.alerts.desc' },
];

const velocityStats = [
  { labelKey: 'velocity.newLeads', val: '420', p: 75, c: 'bg-purple-500' },
  { labelKey: 'velocity.conversion', val: '12.4%', p: 45, c: 'bg-blue-400' },
  { labelKey: 'velocity.retention', val: '94.2%', p: 94, c: 'bg-teal-400' },
  { labelKey: 'velocity.cac', val: '₹142', p: 25, c: 'bg-red-400' },
];

export default function Analytics() {
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
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-white">
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
                className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              >
                {t('hero.badge')}
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              >
                {t('hero.title.pre')}<span className="text-purple-600 italic">{t('hero.title.accent')}</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                {t('hero.desc')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2 group">
                  {t('hero.btn.demo')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                  {t('hero.btn.report')}
                </button>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-600/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                <img 
                  src="/images/real_time_analytics_preview_1778579404688.png" 
                  alt="Analytics Dashboard"
                  className="rounded-2xl"
                />
                
                {/* Floating KPI Cards */}
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block w-56"
                >
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('kpi.activeOrders')}</p>
                   </div>
                   <p className="text-2xl font-black text-gray-900">1,240</p>
                   <div className="mt-4 pt-4 border-t border-gray-50">
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] text-gray-400">{t('kpi.target')}</p>
                            <p className="text-xs font-bold">1,500</p>
                         </div>
                         <div className="text-[10px] text-purple-600 font-bold">82%</div>
                      </div>
                      <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                         <div className="w-[82%] h-full bg-purple-500 rounded-full" />
                      </div>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Modules Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">{t('modules.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('modules.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((item, i) => (
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

      {/* Visual Data Deep-Dive */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">{t('deepdive.title.pre')}<span className="text-purple-400 italic">{t('deepdive.title.accent')}</span></h2>
                 
                 <div className="space-y-12">
                    {phases.map((phase, i) => (
                      <div key={i} className="flex gap-8 relative group">
                         <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold group-hover:bg-purple-500 group-hover:text-black transition-all">
                               {i + 1}
                            </div>
                            {i < 3 && <div className="w-px h-16 bg-white/10 mt-4 group-hover:bg-purple-500/30 transition-colors" />}
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
                 <div className="absolute inset-0 bg-purple-500/10 blur-[150px] rounded-full" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 lg:p-14">
                    <div className="flex items-center justify-between mb-12">
                       <h3 className="text-2xl font-bold">{t('velocity.title')}</h3>
                       <Activity className="text-purple-500" />
                    </div>
                    
                    <div className="space-y-10">
                       {velocityStats.map((stat, i) => (
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
                    
                    <div className="mt-12 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center gap-4">
                       <TrendingUp className="text-purple-500" size={32} />
                       <div>
                          <p className="text-sm font-bold">{t('insight.title')}</p>
                          <p className="text-xs text-gray-400 mt-1">{t('insight.desc')}</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">{t('cta.title')}</h2>
           <p className="text-xl text-gray-600 mb-12">{t('cta.desc')}</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-purple-600 text-white rounded-2xl font-black text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-100">
                 {t('cta.btn.start')}
              </button>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all">
                 {t('cta.btn.scientist')}
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
