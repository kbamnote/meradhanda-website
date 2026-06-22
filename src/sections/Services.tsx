import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Check,
  ChevronRight
} from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'eyebrow': { en: 'All Modules', hi: 'सभी मॉड्यूल', hinglish: 'Sabhi Modules', gu: 'બધા મોડ્યુલ્સ', mr: 'सर्व मॉड्यूल्स', mwr: 'सगळा मॉड्यूल' },
  'heading': { en: 'One platform. Every department.', hi: 'एक प्लेटफ़ॉर्म। हर डिपार्टमेंट।', hinglish: 'Ek platform. Har department.', gu: 'એક પ્લેટફોર્મ. દરેક ડિપાર્ટમેન્ટ.', mr: 'एक प्लॅटफॉर्म. प्रत्येक विभाग.', mwr: 'एक प्लेटफॉर्म। हर डिपार्टमेंट।' },
  'subheading': { en: '50+ modules designed to work together. Start with what you need, add more as you grow.', hi: '50+ मॉड्यूल जो एक साथ काम करने के लिए बनाए गए हैं। जो ज़रूरी है उससे शुरू करें, बढ़ते जाएं वैसे और जोड़ें।', hinglish: '50+ modules jo ek saath kaam karne ke liye banaye gaye hain. Jo zaroori hai usse shuru karein, business badhne par aur add karein.', gu: '50+ મોડ્યુલ્સ જે સાથે કામ કરવા માટે બનાવાયા છે. જે જરૂરી હોય તેનાથી શરૂ કરો, વધતા જાઓ તેમ વધુ ઉમેરો.', mr: '50+ मॉड्यूल्स जे एकत्र काम करण्यासाठी तयार केले आहेत. जे आवश्यक आहे त्यापासून सुरुवात करा, वाढत जाल तसे अधिक जोडा.', mwr: '50+ मॉड्यूल जका एकठै काम करै सारू बणाया है। जिकौ जरूरत है उठै सूं चालू करो, बढ़तां जावो जद ओर जोड़ो।' },

  // Tab labels
  'tab.hr': { en: 'HR & People', hi: 'HR और स्टाफ', hinglish: 'HR & People', gu: 'HR અને સ્ટાફ', mr: 'HR आणि कर्मचारी', mwr: 'HR अर स्टाफ' },
  'tab.sales': { en: 'Sales & CRM', hi: 'Sales और CRM', hinglish: 'Sales & CRM', gu: 'Sales અને CRM', mr: 'Sales आणि CRM', mwr: 'Sales अर CRM' },
  'tab.production': { en: 'Production', hi: 'प्रोडक्शन', hinglish: 'Production', gu: 'પ્રોડક્શન', mr: 'उत्पादन', mwr: 'प्रोडक्शन' },
  'tab.finance': { en: 'Finance', hi: 'फाइनेंस', hinglish: 'Finance', gu: 'ફાઇનાન્સ', mr: 'वित्त', mwr: 'फाइनेंस' },
  'tab.operations': { en: 'Operations', hi: 'ऑपरेशन्स', hinglish: 'Operations', gu: 'ઓપરેશન્સ', mr: 'ऑपरेशन्स', mwr: 'ऑपरेशन्स' },
  'tab.analytics': { en: 'Analytics & AI', hi: 'Analytics और AI', hinglish: 'Analytics & AI', gu: 'Analytics અને AI', mr: 'Analytics आणि AI', mwr: 'Analytics अर AI' },

  // HR modules
  'mod.attendance.title': { en: 'Attendance Management', hi: 'अटेंडेंस मैनेजमेंट', hinglish: 'Attendance Management', gu: 'એટેન્ડન્સ મેનેજમેન્ટ', mr: 'हजेरी व्यवस्थापन', mwr: 'अटेंडेंस मैनेजमेंट' },
  'mod.attendance.desc': { en: 'GPS punch-in/out, selfie capture, shift tracking, regularization requests, bulk CSV import.', hi: 'GPS पंच-इन/आउट, सेल्फी कैप्चर, शिफ्ट ट्रैकिंग, रेगुलराइज़ेशन रिक्वेस्ट, बल्क CSV इम्पोर्ट।', hinglish: 'GPS punch-in/out, selfie capture, shift tracking, regularization requests, bulk CSV import.', gu: 'GPS પંચ-ઇન/આઉટ, સેલ્ફી કેપ્ચર, શિફ્ટ ટ્રેકિંગ, રેગ્યુલરાઇઝેશન રિક્વેસ્ટ, બલ્ક CSV ઇમ્પોર્ટ.', mr: 'GPS पंच-इन/आउट, सेल्फी कॅप्चर, शिफ्ट ट्रॅकिंग, रेग्युलरायझेशन विनंत्या, बल्क CSV इम्पोर्ट.', mwr: 'GPS पंच-इन/आउट, सेल्फी कैप्चर, शिफ्ट ट्रैकिंग, रेगुलराइजेशन रिक्वेस्ट, बल्क CSV इम्पोर्ट।' },
  'mod.leave.title': { en: 'Leave Management', hi: 'लीव मैनेजमेंट', hinglish: 'Leave Management', gu: 'લીવ મેનેજમેન્ટ', mr: 'रजा व्यवस्थापन', mwr: 'लीव मैनेजमेंट' },
  'mod.leave.desc': { en: 'Multi-level approval workflows, balance tracking, team calendar, policy configuration per leave type.', hi: 'मल्टी-लेवल अप्रूवल वर्कफ़्लो, बैलेंस ट्रैकिंग, टीम कैलेंडर, हर लीव टाइप के लिए पॉलिसी कॉन्फ़िगरेशन।', hinglish: 'Multi-level approval workflows, balance tracking, team calendar, har leave type ke liye policy configuration.', gu: 'મલ્ટિ-લેવલ એપ્રૂવલ વર્કફ્લો, બેલેન્સ ટ્રેકિંગ, ટીમ કેલેન્ડર, દરેક લીવ ટાઇપ માટે પોલિસી કોન્ફિગરેશન.', mr: 'मल्टी-लेव्हल अप्रूव्हल वर्कफ्लो, बॅलन्स ट्रॅकिंग, टीम कॅलेंडर, प्रत्येक रजा प्रकारासाठी पॉलिसी कॉन्फिगरेशन.', mwr: 'मल्टी-लेवल अप्रूवल वर्कफ्लो, बैलेंस ट्रैकिंग, टीम कैलेंडर, हर लीव टाइप सारू पॉलिसी कॉन्फिगरेशन।' },
  'mod.payroll.title': { en: 'Payroll', hi: 'पेरोल', hinglish: 'Payroll', gu: 'પેરોલ', mr: 'पेरोल', mwr: 'पेरोल' },
  'mod.payroll.desc': { en: 'CTC structure, auto deductions (PF, ESI, TDS), payslip PDF, bank transfer file export.', hi: 'CTC स्ट्रक्चर, ऑटो डिडक्शन (PF, ESI, TDS), पेस्लिप PDF, बैंक ट्रांसफर फ़ाइल एक्सपोर्ट।', hinglish: 'CTC structure, auto deductions (PF, ESI, TDS), payslip PDF, bank transfer file export.', gu: 'CTC સ્ટ્રક્ચર, ઓટો ડિડક્શન (PF, ESI, TDS), પેસ્લિપ PDF, બેંક ટ્રાન્સફર ફાઇલ એક્સપોર્ટ.', mr: 'CTC स्ट्रक्चर, ऑटो डिडक्शन (PF, ESI, TDS), पेस्लिप PDF, बँक ट्रान्सफर फाइल एक्सपोर्ट.', mwr: 'CTC स्ट्रक्चर, ऑटो डिडक्शन (PF, ESI, TDS), पेस्लिप PDF, बैंक ट्रांसफर फाइल एक्सपोर्ट।' },
  'mod.staff.title': { en: 'Staff Directory', hi: 'स्टाफ डायरेक्टरी', hinglish: 'Staff Directory', gu: 'સ્ટાફ ડિરેક્ટરી', mr: 'कर्मचारी निर्देशिका', mwr: 'स्टाफ डायरेक्टरी' },
  'mod.staff.desc': { en: 'Full employee profiles with documents, work history, attendance, leave balance, performance reviews.', hi: 'डॉक्युमेंट्स, वर्क हिस्ट्री, अटेंडेंस, लीव बैलेंस और परफ़ॉर्मेंस रिव्यू के साथ पूरी एम्प्लॉयी प्रोफ़ाइल।', hinglish: 'Documents, work history, attendance, leave balance aur performance reviews ke saath puri employee profiles.', gu: 'ડોક્યુમેન્ટ્સ, વર્ક હિસ્ટ્રી, એટેન્ડન્સ, લીવ બેલેન્સ અને પરફોર્મન્સ રિવ્યૂ સાથે પૂર્ણ એમ્પ્લોયી પ્રોફાઇલ.', mr: 'डॉक्युमेंट्स, कामाचा इतिहास, हजेरी, रजा शिल्लक आणि कामगिरी आढावा यांसह संपूर्ण कर्मचारी प्रोफाइल.', mwr: 'डॉक्युमेंट्स, वर्क हिस्ट्री, अटेंडेंस, लीव बैलेंस अर परफॉर्मेंस रिव्यू रै साथै पूरी एम्प्लॉयी प्रोफाइल।' },
  'mod.hrdash.title': { en: 'HR Dashboard', hi: 'HR डैशबोर्ड', hinglish: 'HR Dashboard', gu: 'HR ડેશબોર્ડ', mr: 'HR डॅशबोर्ड', mwr: 'HR डैशबोर्ड' },
  'mod.hrdash.desc': { en: 'Headcount, attrition, open positions, upcoming appraisals, recent HR actions.', hi: 'हेडकाउंट, अट्रिशन, खाली पोज़िशन, आने वाले अप्रेज़ल, हाल के HR एक्शन।', hinglish: 'Headcount, attrition, open positions, aane wale appraisals, recent HR actions.', gu: 'હેડકાઉન્ટ, એટ્રિશન, ખાલી પોઝિશન, આવનારા એપ્રેઇઝલ, તાજેતરના HR એક્શન.', mr: 'हेडकाउंट, अॅट्रिशन, रिक्त पदे, आगामी अॅप्रेझल, अलीकडील HR क्रिया.', mwr: 'हेडकाउंट, अट्रिशन, खाली पोजिशन, आवण वाळा अप्रेजल, हाल रा HR एक्शन।' },
  'mod.dept.title': { en: 'Manage Departments', hi: 'डिपार्टमेंट मैनेज करें', hinglish: 'Departments Manage karein', gu: 'ડિપાર્ટમેન્ટ મેનેજ કરો', mr: 'विभाग व्यवस्थापित करा', mwr: 'डिपार्टमेंट मैनेज करो' },
  'mod.dept.desc': { en: 'Department cards with HOD, staff count, org chart, quick reassignment.', hi: 'HOD, स्टाफ काउंट, org चार्ट और क्विक रीअसाइनमेंट के साथ डिपार्टमेंट कार्ड।', hinglish: 'HOD, staff count, org chart aur quick reassignment ke saath department cards.', gu: 'HOD, સ્ટાફ કાઉન્ટ, org ચાર્ટ અને ક્વિક રીઅસાઇનમેન્ટ સાથે ડિપાર્ટમેન્ટ કાર્ડ્સ.', mr: 'HOD, स्टाफ संख्या, org चार्ट आणि क्विक रीअसाइनमेंट यांसह विभाग कार्ड्स.', mwr: 'HOD, स्टाफ काउंट, org चार्ट अर क्विक रीअसाइनमेंट रै साथै डिपार्टमेंट कार्ड।' },
  'mod.hierarchy.title': { en: 'Hierarchy', hi: 'हायरार्की', hinglish: 'Hierarchy', gu: 'હાયરાર્કી', mr: 'पदानुक्रम', mwr: 'हायरार्की' },
  'mod.hierarchy.desc': { en: 'Interactive org tree, click nodes to view reporting lines, editable, PDF/PNG export.', hi: 'इंटरैक्टिव org ट्री, रिपोर्टिंग लाइन देखने के लिए नोड पर क्लिक करें, एडिटेबल, PDF/PNG एक्सपोर्ट।', hinglish: 'Interactive org tree, reporting lines dekhne ke liye nodes par click karein, editable, PDF/PNG export.', gu: 'ઇન્ટરેક્ટિવ org ટ્રી, રિપોર્ટિંગ લાઇન જોવા માટે નોડ પર ક્લિક કરો, એડિટેબલ, PDF/PNG એક્સપોર્ટ.', mr: 'इंटरॅक्टिव्ह org ट्री, रिपोर्टिंग लाइन्स पाहण्यासाठी नोड्सवर क्लिक करा, एडिटेबल, PDF/PNG एक्सपोर्ट.', mwr: 'इंटरैक्टिव org ट्री, रिपोर्टिंग लाइन देखण सारू नोड पर क्लिक करो, एडिटेबल, PDF/PNG एक्सपोर्ट।' },
  'mod.productivity.title': { en: 'Productivity', hi: 'प्रोडक्टिविटी', hinglish: 'Productivity', gu: 'પ્રોડક્ટિવિટી', mr: 'उत्पादकता', mwr: 'प्रोडक्टिविटी' },
  'mod.productivity.desc': { en: 'Personal productivity score, task completion rate chart, time tracking per project, leaderboard, focus mode (Pomodoro).', hi: 'पर्सनल प्रोडक्टिविटी स्कोर, टास्क कम्प्लीशन रेट चार्ट, हर प्रोजेक्ट का टाइम ट्रैकिंग, लीडरबोर्ड, फ़ोकस मोड (Pomodoro)।', hinglish: 'Personal productivity score, task completion rate chart, har project ka time tracking, leaderboard, focus mode (Pomodoro).', gu: 'પર્સનલ પ્રોડક્ટિવિટી સ્કોર, ટાસ્ક કમ્પ્લીશન રેટ ચાર્ટ, દરેક પ્રોજેક્ટનું ટાઇમ ટ્રેકિંગ, લીડરબોર્ડ, ફોકસ મોડ (Pomodoro).', mr: 'वैयक्तिक उत्पादकता स्कोअर, टास्क पूर्णता दर चार्ट, प्रत्येक प्रोजेक्टसाठी टाइम ट्रॅकिंग, लीडरबोर्ड, फोकस मोड (Pomodoro).', mwr: 'पर्सनल प्रोडक्टिविटी स्कोर, टास्क कम्प्लीशन रेट चार्ट, हर प्रोजेक्ट रौ टाइम ट्रैकिंग, लीडरबोर्ड, फोकस मोड (Pomodoro)।' },

  // Sales modules
  'mod.leads.title': { en: 'Leads & CRM', hi: 'लीड्स और CRM', hinglish: 'Leads & CRM', gu: 'લીડ્સ અને CRM', mr: 'लीड्स आणि CRM', mwr: 'लीड्स अर CRM' },
  'mod.leads.desc': { en: 'Pipeline kanban/list toggle, lead cards with source/stage/score, full activity timeline, CSV/WhatsApp import.', hi: 'पाइपलाइन kanban/लिस्ट टॉगल, सोर्स/स्टेज/स्कोर वाले लीड कार्ड, पूरी एक्टिविटी टाइमलाइन, CSV/WhatsApp इम्पोर्ट।', hinglish: 'Pipeline kanban/list toggle, source/stage/score wale lead cards, puri activity timeline, CSV/WhatsApp import.', gu: 'પાઇપલાઇન kanban/લિસ્ટ ટોગલ, source/stage/score વાળા લીડ કાર્ડ, પૂર્ણ એક્ટિવિટી ટાઇમલાઇન, CSV/WhatsApp ઇમ્પોર્ટ.', mr: 'पाइपलाइन kanban/लिस्ट टॉगल, source/stage/score असलेली लीड कार्ड्स, संपूर्ण अॅक्टिव्हिटी टाइमलाइन, CSV/WhatsApp इम्पोर्ट.', mwr: 'पाइपलाइन kanban/लिस्ट टॉगल, सोर्स/स्टेज/स्कोर वाळा लीड कार्ड, पूरी एक्टिविटी टाइमलाइन, CSV/WhatsApp इम्पोर्ट।' },
  'mod.salesover.title': { en: 'Sales Overview', hi: 'सेल्स ओवरव्यू', hinglish: 'Sales Overview', gu: 'સેલ્સ ઓવરવ્યૂ', mr: 'सेल्स आढावा', mwr: 'सेल्स ओवरव्यू' },
  'mod.salesover.desc': { en: 'Pipeline value, stage-wise funnel, win rate %, avg deal size, rep performance table.', hi: 'पाइपलाइन वैल्यू, स्टेज-वाइज़ फ़नल, win rate %, औसत डील साइज़, rep परफ़ॉर्मेंस टेबल।', hinglish: 'Pipeline value, stage-wise funnel, win rate %, average deal size, rep performance table.', gu: 'પાઇપલાઇન વેલ્યૂ, સ્ટેજ-વાઇઝ ફનલ, win rate %, સરેરાશ ડીલ સાઇઝ, rep પરફોર્મન્સ ટેબલ.', mr: 'पाइपलाइन व्हॅल्यू, स्टेज-निहाय फनेल, win rate %, सरासरी डील साइझ, rep कामगिरी टेबल.', mwr: 'पाइपलाइन वैल्यू, स्टेज-वाइज फनल, win rate %, औसत डील साइज, rep परफॉर्मेंस टेबल।' },
  'mod.targets.title': { en: 'Sales Targets', hi: 'सेल्स टारगेट', hinglish: 'Sales Targets', gu: 'સેલ્સ ટાર્ગેટ', mr: 'सेल्स लक्ष्य', mwr: 'सेल्स टारगेट' },
  'mod.targets.desc': { en: 'Target setting by team/individual/product, progress gauge, leaderboard, gap analysis.', hi: 'टीम/व्यक्ति/प्रोडक्ट के हिसाब से टारगेट सेटिंग, प्रोग्रेस गेज, लीडरबोर्ड, गैप एनालिसिस।', hinglish: 'Team/individual/product ke hisaab se target setting, progress gauge, leaderboard, gap analysis.', gu: 'ટીમ/વ્યક્તિ/પ્રોડક્ટ પ્રમાણે ટાર્ગેટ સેટિંગ, પ્રોગ્રેસ ગેજ, લીડરબોર્ડ, ગેપ એનાલિસિસ.', mr: 'टीम/व्यक्ती/प्रोडक्टनुसार लक्ष्य सेटिंग, प्रगती गेज, लीडरबोर्ड, गॅप विश्लेषण.', mwr: 'टीम/व्यक्ति/प्रोडक्ट रै हिसाब सूं टारगेट सेटिंग, प्रोग्रेस गेज, लीडरबोर्ड, गैप एनालिसिस।' },
  'mod.coldcall.title': { en: 'Cold Calling', hi: 'कोल्ड कॉलिंग', hinglish: 'Cold Calling', gu: 'કોલ્ડ કોલિંગ', mr: 'कोल्ड कॉलिंग', mwr: 'कोल्ड कॉलिंग' },
  'mod.coldcall.desc': { en: 'Click-to-call dialer, call timer, in-call notes, disposition tags, call scripts panel, performance metrics.', hi: 'click-to-call डायलर, कॉल टाइमर, इन-कॉल नोट्स, डिस्पोज़िशन टैग, कॉल स्क्रिप्ट पैनल, परफ़ॉर्मेंस मेट्रिक्स।', hinglish: 'Click-to-call dialer, call timer, in-call notes, disposition tags, call scripts panel, performance metrics.', gu: 'click-to-call ડાયલર, કોલ ટાઇમર, ઇન-કોલ નોટ્સ, ડિસ્પોઝિશન ટેગ, કોલ સ્ક્રિપ્ટ પેનલ, પરફોર્મન્સ મેટ્રિક્સ.', mr: 'click-to-call डायलर, कॉल टाइमर, इन-कॉल नोट्स, डिस्पोझिशन टॅग, कॉल स्क्रिप्ट पॅनेल, कामगिरी मेट्रिक्स.', mwr: 'click-to-call डायलर, कॉल टाइमर, इन-कॉल नोट्स, डिस्पोजिशन टैग, कॉल स्क्रिप्ट पैनल, परफॉर्मेंस मेट्रिक्स।' },
  'mod.custhub.title': { en: 'Customer Hub', hi: 'कस्टमर हब', hinglish: 'Customer Hub', gu: 'કસ્ટમર હબ', mr: 'ग्राहक हब', mwr: 'कस्टमर हब' },
  'mod.custhub.desc': { en: 'Customer directory, profile with purchase timeline, segmentation by tier/location, quick actions.', hi: 'कस्टमर डायरेक्टरी, परचेज़ टाइमलाइन वाली प्रोफ़ाइल, tier/लोकेशन के हिसाब से सेगमेंटेशन, क्विक एक्शन।', hinglish: 'Customer directory, purchase timeline wali profile, tier/location ke hisaab se segmentation, quick actions.', gu: 'કસ્ટમર ડિરેક્ટરી, પરચેઝ ટાઇમલાઇન સાથેની પ્રોફાઇલ, tier/location પ્રમાણે સેગ્મેન્ટેશન, ક્વિક એક્શન.', mr: 'ग्राहक निर्देशिका, खरेदी टाइमलाइनसह प्रोफाइल, tier/स्थानानुसार सेगमेंटेशन, क्विक अॅक्शन्स.', mwr: 'कस्टमर डायरेक्टरी, परचेज टाइमलाइन वाळी प्रोफाइल, tier/लोकेशन रै हिसाब सूं सेगमेंटेशन, क्विक एक्शन।' },
  'mod.member.title': { en: 'Membership Cards', hi: 'मेम्बरशिप कार्ड', hinglish: 'Membership Cards', gu: 'મેમ્બરશિપ કાર્ડ', mr: 'सदस्यत्व कार्ड', mwr: 'मेम्बरशिप कार्ड' },
  'mod.member.desc': { en: 'Visual card designer, QR codes, points & tier tracking, bulk issue, renewal reminders.', hi: 'विज़ुअल कार्ड डिज़ाइनर, QR कोड, पॉइंट्स और tier ट्रैकिंग, बल्क इश्यू, रिन्यूअल रिमाइंडर।', hinglish: 'Visual card designer, QR codes, points aur tier tracking, bulk issue, renewal reminders.', gu: 'વિઝ્યુઅલ કાર્ડ ડિઝાઇનર, QR કોડ, પોઇન્ટ્સ અને tier ટ્રેકિંગ, બલ્ક ઇશ્યૂ, રિન્યૂઅલ રિમાઇન્ડર.', mr: 'व्हिज्युअल कार्ड डिझायनर, QR कोड, पॉइंट्स आणि tier ट्रॅकिंग, बल्क इश्यू, रिन्यूअल रिमाइंडर.', mwr: 'विजुअल कार्ड डिजाइनर, QR कोड, पॉइंट्स अर tier ट्रैकिंग, बल्क इश्यू, रिन्यूअल रिमाइंडर।' },
  'mod.broadcast.title': { en: 'Broadcast', hi: 'ब्रॉडकास्ट', hinglish: 'Broadcast', gu: 'બ્રોડકાસ્ટ', mr: 'ब्रॉडकास्ट', mwr: 'ब्रॉडकास्ट' },
  'mod.broadcast.desc': { en: 'Rich text composer, audience selector (All/Dept/Role/Custom), scheduled sends, read receipts, templates.', hi: 'रिच टेक्स्ट कम्पोज़र, audience सिलेक्टर (All/Dept/Role/Custom), शेड्यूल्ड सेंड, रीड रिसीट, टेम्पलेट।', hinglish: 'Rich text composer, audience selector (All/Dept/Role/Custom), scheduled sends, read receipts, templates.', gu: 'રિચ ટેક્સ્ટ કમ્પોઝર, audience સિલેક્ટર (All/Dept/Role/Custom), શેડ્યૂલ્ડ સેન્ડ, રીડ રિસીપ્ટ, ટેમ્પ્લેટ.', mr: 'रिच टेक्स्ट कम्पोझर, audience सिलेक्टर (All/Dept/Role/Custom), शेड्यूल्ड सेंड, रीड रिसीट, टेम्पलेट्स.', mwr: 'रिच टेक्स्ट कम्पोजर, audience सिलेक्टर (All/Dept/Role/Custom), शेड्यूल्ड सेंड, रीड रिसीट, टेम्पलेट।' },

  // Production modules
  'mod.jobcards.title': { en: 'Job Cards', hi: 'जॉब कार्ड', hinglish: 'Job Cards', gu: 'જોબ કાર્ડ', mr: 'जॉब कार्ड', mwr: 'जॉब कार्ड' },
  'mod.jobcards.desc': { en: 'ID, product, assignee, deadline, priority, status, linked materials, checklists, time log.', hi: 'ID, प्रोडक्ट, असाइनी, डेडलाइन, प्रायोरिटी, स्टेटस, लिंक्ड मटेरियल, चेकलिस्ट, टाइम लॉग।', hinglish: 'ID, product, assignee, deadline, priority, status, linked materials, checklists, time log.', gu: 'ID, પ્રોડક્ટ, એસાઇની, ડેડલાઇન, પ્રાયોરિટી, સ્ટેટસ, લિન્ક્ડ મટેરિયલ, ચેકલિસ્ટ, ટાઇમ લોગ.', mr: 'ID, प्रोडक्ट, असाइनी, डेडलाइन, प्राधान्य, स्थिती, लिंक्ड मटेरियल, चेकलिस्ट, टाइम लॉग.', mwr: 'ID, प्रोडक्ट, असाइनी, डेडलाइन, प्रायोरिटी, स्टेटस, लिंक्ड मटेरियल, चेकलिस्ट, टाइम लॉग।' },
  'mod.qc.title': { en: 'Quality Check', hi: 'क्वालिटी चेक', hinglish: 'Quality Check', gu: 'ક્વોલિટી ચેક', mr: 'गुणवत्ता तपासणी', mwr: 'क्वालिटी चेक' },
  'mod.qc.desc': { en: 'QC checklist builder per product, pass/fail per parameter, photo upload, rework trigger, QC reports.', hi: 'हर प्रोडक्ट के लिए QC चेकलिस्ट बिल्डर, हर पैरामीटर पर pass/fail, फ़ोटो अपलोड, rework ट्रिगर, QC रिपोर्ट।', hinglish: 'Har product ke liye QC checklist builder, har parameter par pass/fail, photo upload, rework trigger, QC reports.', gu: 'દરેક પ્રોડક્ટ માટે QC ચેકલિસ્ટ બિલ્ડર, દરેક પેરામીટર પર pass/fail, ફોટો અપલોડ, rework ટ્રિગર, QC રિપોર્ટ.', mr: 'प्रत्येक प्रोडक्टसाठी QC चेकलिस्ट बिल्डर, प्रत्येक पॅरामीटरवर pass/fail, फोटो अपलोड, rework ट्रिगर, QC रिपोर्ट.', mwr: 'हर प्रोडक्ट सारू QC चेकलिस्ट बिल्डर, हर पैरामीटर पर pass/fail, फोटो अपलोड, rework ट्रिगर, QC रिपोर्ट।' },
  'mod.dispatch.title': { en: 'Dispatch', hi: 'डिस्पैच', hinglish: 'Dispatch', gu: 'ડિસ્પેચ', mr: 'डिस्पॅच', mwr: 'डिस्पैच' },
  'mod.dispatch.desc': { en: 'Dispatch queue, courier partner, tracking number, label PDF, delivery confirmation with POD photo.', hi: 'डिस्पैच क्यू, कूरियर पार्टनर, ट्रैकिंग नंबर, लेबल PDF, POD फ़ोटो के साथ डिलीवरी कन्फ़र्मेशन।', hinglish: 'Dispatch queue, courier partner, tracking number, label PDF, POD photo ke saath delivery confirmation.', gu: 'ડિસ્પેચ ક્યૂ, કુરિયર પાર્ટનર, ટ્રેકિંગ નંબર, લેબલ PDF, POD ફોટો સાથે ડિલિવરી કન્ફર્મેશન.', mr: 'डिस्पॅच क्यू, कुरिअर पार्टनर, ट्रॅकिंग नंबर, लेबल PDF, POD फोटोसह डिलिव्हरी कन्फर्मेशन.', mwr: 'डिस्पैच क्यू, कूरियर पार्टनर, ट्रैकिंग नंबर, लेबल PDF, POD फोटो रै साथै डिलीवरी कन्फर्मेशन।' },
  'mod.prodintel.title': { en: 'Production Intel', hi: 'प्रोडक्शन इंटेल', hinglish: 'Production Intel', gu: 'પ્રોડક્શન ઇન્ટેલ', mr: 'उत्पादन इंटेल', mwr: 'प्रोडक्शन इंटेल' },
  'mod.prodintel.desc': { en: 'Units planned vs produced, efficiency %, waste %, batch tracking, bottleneck alerts, shift-wise summary.', hi: 'प्लान किए vs बनाए गए यूनिट, efficiency %, waste %, बैच ट्रैकिंग, bottleneck अलर्ट, शिफ्ट-वाइज़ समरी।', hinglish: 'Plan kiye vs banaye gaye units, efficiency %, waste %, batch tracking, bottleneck alerts, shift-wise summary.', gu: 'પ્લાન કરેલા vs બનાવેલા યુનિટ, efficiency %, waste %, બેચ ટ્રેકિંગ, bottleneck એલર્ટ, શિફ્ટ-વાઇઝ સમરી.', mr: 'नियोजित vs उत्पादित युनिट्स, efficiency %, waste %, बॅच ट्रॅकिंग, bottleneck अलर्ट, शिफ्ट-निहाय सारांश.', mwr: 'प्लान करिया vs बणाया युनिट, efficiency %, waste %, बैच ट्रैकिंग, bottleneck अलर्ट, शिफ्ट-वाइज समरी।' },
  'mod.machines.title': { en: 'Machines', hi: 'मशीनें', hinglish: 'Machines', gu: 'મશીનો', mr: 'मशीन', mwr: 'मशीनां' },
  'mod.machines.desc': { en: 'Registry, maintenance schedule calendar, downtime tracker, utilization chart, maintenance due alerts.', hi: 'रजिस्ट्री, मेंटेनेंस शेड्यूल कैलेंडर, downtime ट्रैकर, utilization चार्ट, मेंटेनेंस due अलर्ट।', hinglish: 'Registry, maintenance schedule calendar, downtime tracker, utilization chart, maintenance due alerts.', gu: 'રજિસ્ટ્રી, મેન્ટેનન્સ શેડ્યૂલ કેલેન્ડર, downtime ટ્રેકર, utilization ચાર્ટ, મેન્ટેનન્સ due એલર્ટ.', mr: 'रजिस्ट्री, मेंटेनन्स शेड्यूल कॅलेंडर, downtime ट्रॅकर, utilization चार्ट, मेंटेनन्स due अलर्ट.', mwr: 'रजिस्ट्री, मेंटेनेंस शेड्यूल कैलेंडर, downtime ट्रैकर, utilization चार्ट, मेंटेनेंस due अलर्ट।' },
  'mod.bulk.title': { en: 'Bulk Orders', hi: 'बल्क ऑर्डर', hinglish: 'Bulk Orders', gu: 'બલ્ક ઓર્ડર', mr: 'बल्क ऑर्डर', mwr: 'बल्क ऑर्डर' },
  'mod.bulk.desc': { en: 'Order pipeline from client to dispatch, line items, production link, progress tracker, Excel/PDF export.', hi: 'क्लाइंट से डिस्पैच तक ऑर्डर पाइपलाइन, line items, प्रोडक्शन लिंक, प्रोग्रेस ट्रैकर, Excel/PDF एक्सपोर्ट।', hinglish: 'Client se dispatch tak order pipeline, line items, production link, progress tracker, Excel/PDF export.', gu: 'ક્લાયન્ટથી ડિસ્પેચ સુધી ઓર્ડર પાઇપલાઇન, line items, પ્રોડક્શન લિન્ક, પ્રોગ્રેસ ટ્રેકર, Excel/PDF એક્સપોર્ટ.', mr: 'क्लायंटपासून डिस्पॅचपर्यंत ऑर्डर पाइपलाइन, line items, प्रोडक्शन लिंक, प्रगती ट्रॅकर, Excel/PDF एक्सपोर्ट.', mwr: 'क्लाइंट सूं डिस्पैच तांई ऑर्डर पाइपलाइन, line items, प्रोडक्शन लिंक, प्रोग्रेस ट्रैकर, Excel/PDF एक्सपोर्ट।' },
  'mod.jobsetter.title': { en: 'Job Setter', hi: 'जॉब सेटर', hinglish: 'Job Setter', gu: 'જોબ સેટર', mr: 'जॉब सेटर', mwr: 'जॉब सेटर' },
  'mod.jobsetter.desc': { en: 'Job type templates, SLA rules, auto-assignment (round-robin/skill-based), job number format config.', hi: 'जॉब टाइप टेम्पलेट, SLA रूल्स, ऑटो-असाइनमेंट (round-robin/skill-based), जॉब नंबर फ़ॉर्मेट कॉन्फ़िग।', hinglish: 'Job type templates, SLA rules, auto-assignment (round-robin/skill-based), job number format config.', gu: 'જોબ ટાઇપ ટેમ્પ્લેટ, SLA રૂલ્સ, ઓટો-એસાઇનમેન્ટ (round-robin/skill-based), જોબ નંબર ફોર્મેટ કોન્ફિગ.', mr: 'जॉब टाइप टेम्पलेट्स, SLA नियम, ऑटो-असाइनमेंट (round-robin/skill-based), जॉब नंबर फॉरमॅट कॉन्फिग.', mwr: 'जॉब टाइप टेम्पलेट, SLA रूल्स, ऑटो-असाइनमेंट (round-robin/skill-based), जॉब नंबर फॉर्मेट कॉन्फिग।' },
  'mod.floor.title': { en: 'Production Floor', hi: 'प्रोडक्शन फ़्लोर', hinglish: 'Production Floor', gu: 'પ્રોડક્શન ફ્લોર', mr: 'उत्पादन फ्लोअर', mwr: 'प्रोडक्शन फ्लोर' },
  'mod.floor.desc': { en: 'Active production orders, visual machine grid with status, worker assignment, input material allocation.', hi: 'एक्टिव प्रोडक्शन ऑर्डर, स्टेटस वाला विज़ुअल मशीन ग्रिड, वर्कर असाइनमेंट, input मटेरियल एलोकेशन।', hinglish: 'Active production orders, status wala visual machine grid, worker assignment, input material allocation.', gu: 'એક્ટિવ પ્રોડક્શન ઓર્ડર, સ્ટેટસ સાથે વિઝ્યુઅલ મશીન ગ્રિડ, વર્કર એસાઇનમેન્ટ, input મટેરિયલ એલોકેશન.', mr: 'अॅक्टिव्ह प्रोडक्शन ऑर्डर, स्थितीसह व्हिज्युअल मशीन ग्रिड, वर्कर असाइनमेंट, input मटेरियल वाटप.', mwr: 'एक्टिव प्रोडक्शन ऑर्डर, स्टेटस वाळौ विजुअल मशीन ग्रिड, वर्कर असाइनमेंट, input मटेरियल एलोकेशन।' },

  // Finance modules
  'mod.advacct.title': { en: 'Advanced Accounting', hi: 'एडवांस्ड अकाउंटिंग', hinglish: 'Advanced Accounting', gu: 'એડવાન્સ્ડ એકાઉન્ટિંગ', mr: 'अॅडव्हान्स्ड अकाउंटिंग', mwr: 'एडवांस्ड अकाउंटिंग' },
  'mod.advacct.desc': { en: 'Double-entry ledger, P&L, balance sheet, GST R1/R3B reports, journal entries, bank reconciliation, TDS.', hi: 'डबल-एंट्री लेजर, P&L, बैलेंस शीट, GST R1/R3B रिपोर्ट, जर्नल एंट्री, बैंक रिकॉन्सिलिएशन, TDS।', hinglish: 'Double-entry ledger, P&L, balance sheet, GST R1/R3B reports, journal entries, bank reconciliation, TDS.', gu: 'ડબલ-એન્ટ્રી લેજર, P&L, બેલેન્સ શીટ, GST R1/R3B રિપોર્ટ, જર્નલ એન્ટ્રી, બેંક રિકન્સિલિએશન, TDS.', mr: 'डबल-एंट्री लेजर, P&L, बॅलन्स शीट, GST R1/R3B रिपोर्ट, जर्नल एंट्री, बँक रिकन्सिलिएशन, TDS.', mwr: 'डबल-एंट्री लेजर, P&L, बैलेंस शीट, GST R1/R3B रिपोर्ट, जर्नल एंट्री, बैंक रिकॉन्सिलिएशन, TDS।' },
  'mod.basicacct.title': { en: 'Accounting (Basic)', hi: 'अकाउंटिंग (बेसिक)', hinglish: 'Accounting (Basic)', gu: 'એકાઉન્ટિંગ (બેઝિક)', mr: 'अकाउंटिंग (बेसिक)', mwr: 'अकाउंटिंग (बेसिक)' },
  'mod.basicacct.desc': { en: 'Income & expense tracker, category-wise pie chart, add transaction form, recurring entries, monthly summary.', hi: 'इनकम और खर्च ट्रैकर, category-wise पाई चार्ट, ट्रांज़ैक्शन जोड़ने का फ़ॉर्म, recurring एंट्री, मंथली समरी।', hinglish: 'Income aur expense tracker, category-wise pie chart, transaction add karne ka form, recurring entries, monthly summary.', gu: 'ઇન્કમ અને ખર્ચ ટ્રેકર, category-wise પાઇ ચાર્ટ, ટ્રાન્ઝેક્શન ઉમેરવાનું ફોર્મ, recurring એન્ટ્રી, મંથલી સમરી.', mr: 'इन्कम आणि खर्च ट्रॅकर, category-wise पाई चार्ट, ट्रान्झॅक्शन जोडण्याचा फॉर्म, recurring एंट्री, मासिक सारांश.', mwr: 'इनकम अर खर्च ट्रैकर, category-wise पाई चार्ट, ट्रांजैक्शन जोड़ण रौ फॉर्म, recurring एंट्री, मंथली समरी।' },
  'mod.stock.title': { en: 'Stock', hi: 'स्टॉक', hinglish: 'Stock', gu: 'સ્ટોક', mr: 'स्टॉक', mwr: 'स्टॉक' },
  'mod.stock.desc': { en: 'Total/low/out-of-stock summary, stock table with min/max levels, movement log, adjust stock modal, auto-alert config.', hi: 'Total/low/out-of-stock समरी, min/max लेवल वाली स्टॉक टेबल, movement लॉग, स्टॉक adjust मोडल, ऑटो-अलर्ट कॉन्फ़िग।', hinglish: 'Total/low/out-of-stock summary, min/max levels wali stock table, movement log, adjust stock modal, auto-alert config.', gu: 'Total/low/out-of-stock સમરી, min/max લેવલ વાળી સ્ટોક ટેબલ, movement લોગ, સ્ટોક adjust મોડલ, ઓટો-એલર્ટ કોન્ફિગ.', mr: 'Total/low/out-of-stock सारांश, min/max लेव्हलसह स्टॉक टेबल, movement लॉग, स्टॉक adjust मोडल, ऑटो-अलर्ट कॉन्फिग.', mwr: 'Total/low/out-of-stock समरी, min/max लेवल वाळी स्टॉक टेबल, movement लॉग, स्टॉक adjust मोडल, ऑटो-अलर्ट कॉन्फिग।' },
  'mod.invintel.title': { en: 'Inventory Intel', hi: 'इन्वेंट्री इंटेल', hinglish: 'Inventory Intel', gu: 'ઇન્વેન્ટરી ઇન્ટેલ', mr: 'इन्व्हेंटरी इंटेल', mwr: 'इन्वेंट्री इंटेल' },
  'mod.invintel.desc': { en: 'AI-powered restock predictions, ABC analysis chart, slow-moving items, reorder suggestions, valuation (FIFO/LIFO).', hi: 'AI-पावर्ड restock प्रिडिक्शन, ABC एनालिसिस चार्ट, slow-moving आइटम, reorder सजेशन, वैल्युएशन (FIFO/LIFO)।', hinglish: 'AI-powered restock predictions, ABC analysis chart, slow-moving items, reorder suggestions, valuation (FIFO/LIFO).', gu: 'AI-powered restock predictions, ABC એનાલિસિસ ચાર્ટ, slow-moving આઇટમ, reorder સજેશન, valuation (FIFO/LIFO).', mr: 'AI-पॉवर्ड restock predictions, ABC विश्लेषण चार्ट, slow-moving आयटम, reorder सूचना, valuation (FIFO/LIFO).', mwr: 'AI-पावर्ड restock प्रिडिक्शन, ABC एनालिसिस चार्ट, slow-moving आइटम, reorder सजेशन, valuation (FIFO/LIFO)।' },
  'mod.procure.title': { en: 'Procurement', hi: 'प्रोक्योरमेंट', hinglish: 'Procurement', gu: 'પ્રોક્યોરમેન્ટ', mr: 'खरेदी', mwr: 'प्रोक्योरमेंट' },
  'mod.procure.desc': { en: 'Purchase requests, multi-level approval workflow, PO creation and PDF export, vendor comparison matrix, GRN on delivery.', hi: 'परचेज़ रिक्वेस्ट, मल्टी-लेवल अप्रूवल वर्कफ़्लो, PO बनाना और PDF एक्सपोर्ट, vendor कम्पैरिज़न मैट्रिक्स, डिलीवरी पर GRN।', hinglish: 'Purchase requests, multi-level approval workflow, PO creation aur PDF export, vendor comparison matrix, delivery par GRN.', gu: 'પરચેઝ રિક્વેસ્ટ, મલ્ટિ-લેવલ એપ્રૂવલ વર્કફ્લો, PO બનાવવું અને PDF એક્સપોર્ટ, vendor કમ્પેરિઝન મેટ્રિક્સ, ડિલિવરી પર GRN.', mr: 'परचेस विनंत्या, मल्टी-लेव्हल अप्रूव्हल वर्कफ्लो, PO तयार करणे आणि PDF एक्सपोर्ट, vendor तुलना मॅट्रिक्स, डिलिव्हरीवर GRN.', mwr: 'परचेज रिक्वेस्ट, मल्टी-लेवल अप्रूवल वर्कफ्लो, PO बणावणौ अर PDF एक्सपोर्ट, vendor कम्पैरिजन मैट्रिक्स, डिलीवरी पर GRN।' },
  'mod.vendors.title': { en: 'Vendors', hi: 'वेंडर', hinglish: 'Vendors', gu: 'વેન્ડર', mr: 'विक्रेते', mwr: 'वेंडर' },
  'mod.vendors.desc': { en: 'Vendor directory with rating, GST/PAN/bank details, purchase history, delivery performance scoring, linked to procurement.', hi: 'रेटिंग वाली vendor डायरेक्टरी, GST/PAN/बैंक डिटेल, परचेज़ हिस्ट्री, डिलीवरी परफ़ॉर्मेंस स्कोरिंग, procurement से लिंक्ड।', hinglish: 'Rating wali vendor directory, GST/PAN/bank details, purchase history, delivery performance scoring, procurement se linked.', gu: 'રેટિંગ સાથે vendor ડિરેક્ટરી, GST/PAN/બેંક ડિટેલ, પરચેઝ હિસ્ટ્રી, ડિલિવરી પરફોર્મન્સ સ્કોરિંગ, procurement સાથે લિન્ક્ડ.', mr: 'रेटिंगसह vendor निर्देशिका, GST/PAN/बँक तपशील, खरेदी इतिहास, डिलिव्हरी कामगिरी स्कोरिंग, procurement शी लिंक्ड.', mwr: 'रेटिंग वाळी vendor डायरेक्टरी, GST/PAN/बैंक डिटेल, परचेज हिस्ट्री, डिलीवरी परफॉर्मेंस स्कोरिंग, procurement सूं लिंक्ड।' },

  // Operations modules
  'mod.products.title': { en: 'Products', hi: 'प्रोडक्ट्स', hinglish: 'Products', gu: 'પ્રોડક્ટ્સ', mr: 'उत्पादने', mwr: 'प्रोडक्ट्स' },
  'mod.products.desc': { en: 'Product catalog grid/table toggle, SKU, category, price, stock count, variants (size/color), bulk CSV import.', hi: 'प्रोडक्ट कैटलॉग grid/table टॉगल, SKU, category, price, स्टॉक काउंट, variants (size/color), बल्क CSV इम्पोर्ट।', hinglish: 'Product catalog grid/table toggle, SKU, category, price, stock count, variants (size/color), bulk CSV import.', gu: 'પ્રોડક્ટ કેટલોગ grid/table ટોગલ, SKU, category, price, સ્ટોક કાઉન્ટ, variants (size/color), બલ્ક CSV ઇમ્પોર્ટ.', mr: 'प्रोडक्ट कॅटलॉग grid/table टॉगल, SKU, category, price, स्टॉक संख्या, variants (size/color), बल्क CSV इम्पोर्ट.', mwr: 'प्रोडक्ट कैटलॉग grid/table टॉगल, SKU, category, price, स्टॉक काउंट, variants (size/color), बल्क CSV इम्पोर्ट।' },
  'mod.sampledm.title': { en: 'Sample DM', hi: 'सैंपल DM', hinglish: 'Sample DM', gu: 'સેમ્પલ DM', mr: 'सॅम्पल DM', mwr: 'सैंपल DM' },
  'mod.sampledm.desc': { en: 'WhatsApp/SMS template library by category (Sales/HR/Operations), variable highlighting {{name}}, test send, clone & edit.', hi: 'category (Sales/HR/Operations) के हिसाब से WhatsApp/SMS टेम्पलेट लाइब्रेरी, variable हाइलाइटिंग {{name}}, टेस्ट सेंड, clone और edit।', hinglish: 'Category (Sales/HR/Operations) ke hisaab se WhatsApp/SMS template library, variable highlighting {{name}}, test send, clone aur edit.', gu: 'category (Sales/HR/Operations) પ્રમાણે WhatsApp/SMS ટેમ્પ્લેટ લાઇબ્રેરી, variable હાઇલાઇટિંગ {{name}}, ટેસ્ટ સેન્ડ, clone અને edit.', mr: 'category (Sales/HR/Operations) नुसार WhatsApp/SMS टेम्पलेट लायब्ररी, variable हायलाइटिंग {{name}}, टेस्ट सेंड, clone आणि edit.', mwr: 'category (Sales/HR/Operations) रै हिसाब सूं WhatsApp/SMS टेम्पलेट लाइब्रेरी, variable हाइलाइटिंग {{name}}, टेस्ट सेंड, clone अर edit।' },
  'mod.tasks.title': { en: 'Tasks', hi: 'टास्क', hinglish: 'Tasks', gu: 'ટાસ્ક', mr: 'कार्ये', mwr: 'टास्क' },
  'mod.tasks.desc': { en: 'My/Team tasks, kanban board, side panel detail, subtasks, attachments, comments, time log, overdue filters.', hi: 'My/Team टास्क, kanban बोर्ड, साइड पैनल डिटेल, subtasks, अटैचमेंट, कमेंट, टाइम लॉग, overdue फ़िल्टर।', hinglish: 'My/Team tasks, kanban board, side panel detail, subtasks, attachments, comments, time log, overdue filters.', gu: 'My/Team ટાસ્ક, kanban બોર્ડ, સાઇડ પેનલ ડિટેલ, subtasks, અટેચમેન્ટ, કોમેન્ટ, ટાઇમ લોગ, overdue ફિલ્ટર.', mr: 'My/Team कार्ये, kanban बोर्ड, साइड पॅनेल तपशील, subtasks, अटॅचमेंट, कमेंट, टाइम लॉग, overdue फिल्टर.', mwr: 'My/Team टास्क, kanban बोर्ड, साइड पैनल डिटेल, subtasks, अटैचमेंट, कमेंट, टाइम लॉग, overdue फिल्टर।' },
  'mod.perms.title': { en: 'Permissions', hi: 'परमिशन', hinglish: 'Permissions', gu: 'પરમિશન', mr: 'परवानग्या', mwr: 'परमिशन' },
  'mod.perms.desc': { en: 'Role matrix (rows = modules, columns = roles, cells = toggles), custom role builder, user-role assignment with preview, audit log.', hi: 'रोल मैट्रिक्स (rows = modules, columns = roles, cells = toggles), कस्टम रोल बिल्डर, प्रिव्यू के साथ user-role असाइनमेंट, audit लॉग।', hinglish: 'Role matrix (rows = modules, columns = roles, cells = toggles), custom role builder, preview ke saath user-role assignment, audit log.', gu: 'રોલ મેટ્રિક્સ (rows = modules, columns = roles, cells = toggles), કસ્ટમ રોલ બિલ્ડર, preview સાથે user-role એસાઇનમેન્ટ, audit લોગ.', mr: 'रोल मॅट्रिक्स (rows = modules, columns = roles, cells = toggles), कस्टम रोल बिल्डर, preview सह user-role असाइनमेंट, audit लॉग.', mwr: 'रोल मैट्रिक्स (rows = modules, columns = roles, cells = toggles), कस्टम रोल बिल्डर, preview रै साथै user-role असाइनमेंट, audit लॉग।' },
  'mod.company.title': { en: 'Company Settings', hi: 'कंपनी सेटिंग्स', hinglish: 'Company Settings', gu: 'કંપની સેટિંગ્સ', mr: 'कंपनी सेटिंग्ज', mwr: 'कंपनी सेटिंग्स' },
  'mod.company.desc': { en: 'Tabs: General, Branding, Localization, Integrations (WhatsApp, Tally, Razorpay), Security (2FA, IP whitelist, session log).', hi: 'टैब: General, Branding, Localization, Integrations (WhatsApp, Tally, Razorpay), Security (2FA, IP whitelist, session log)।', hinglish: 'Tabs: General, Branding, Localization, Integrations (WhatsApp, Tally, Razorpay), Security (2FA, IP whitelist, session log).', gu: 'ટેબ્સ: General, Branding, Localization, Integrations (WhatsApp, Tally, Razorpay), Security (2FA, IP whitelist, session log).', mr: 'टॅब्स: General, Branding, Localization, Integrations (WhatsApp, Tally, Razorpay), Security (2FA, IP whitelist, session log).', mwr: 'टैब: General, Branding, Localization, Integrations (WhatsApp, Tally, Razorpay), Security (2FA, IP whitelist, session log)।' },

  // Analytics modules
  'mod.analytics.title': { en: 'Analytics', hi: 'एनालिटिक्स', hinglish: 'Analytics', gu: 'એનાલિટિક્સ', mr: 'अॅनालिटिक्स', mwr: 'एनालिटिक्स' },
  'mod.analytics.desc': { en: 'Modular pinnable dashboard, revenue trend, lead funnel, attendance heatmap, stock movement, date range picker, PDF/Excel/CSV export.', hi: 'मॉड्यूलर pinnable डैशबोर्ड, रेवेन्यू ट्रेंड, लीड फ़नल, अटेंडेंस heatmap, स्टॉक movement, date range picker, PDF/Excel/CSV एक्सपोर्ट।', hinglish: 'Modular pinnable dashboard, revenue trend, lead funnel, attendance heatmap, stock movement, date range picker, PDF/Excel/CSV export.', gu: 'મોડ્યુલર pinnable ડેશબોર્ડ, રેવન્યૂ ટ્રેન્ડ, lead funnel, એટેન્ડન્સ heatmap, સ્ટોક movement, date range picker, PDF/Excel/CSV એક્સપોર્ટ.', mr: 'मॉड्यूलर pinnable डॅशबोर्ड, रेव्हेन्यू ट्रेंड, lead funnel, हजेरी heatmap, स्टॉक movement, date range picker, PDF/Excel/CSV एक्सपोर्ट.', mwr: 'मॉड्यूलर pinnable डैशबोर्ड, रेवेन्यू ट्रेंड, lead funnel, अटेंडेंस heatmap, स्टॉक movement, date range picker, PDF/Excel/CSV एक्सपोर्ट।' },
  'mod.aiassist.title': { en: 'AI Assistant', hi: 'AI असिस्टेंट', hinglish: 'AI Assistant', gu: 'AI આસિસ્ટન્ટ', mr: 'AI असिस्टंट', mwr: 'AI असिस्टेंट' },
  'mod.aiassist.desc': { en: 'Full-screen or floating chat, data-card responses embedded in chat, suggested prompt chips, voice input, clear history.', hi: 'फ़ुल-स्क्रीन या फ़्लोटिंग चैट, चैट में embedded data-card रिस्पॉन्स, suggested prompt chips, वॉइस इनपुट, हिस्ट्री क्लियर।', hinglish: 'Full-screen ya floating chat, chat mein embedded data-card responses, suggested prompt chips, voice input, history clear.', gu: 'ફુલ-સ્ક્રીન અથવા ફ્લોટિંગ ચેટ, ચેટમાં embedded data-card responses, suggested prompt chips, વોઇસ ઇનપુટ, history clear.', mr: 'फुल-स्क्रीन किंवा फ्लोटिंग चॅट, चॅटमध्ये embedded data-card responses, suggested prompt chips, व्हॉइस इनपुट, history clear.', mwr: 'फुल-स्क्रीन या फ्लोटिंग चैट, चैट में embedded data-card रिस्पॉन्स, suggested prompt chips, वॉइस इनपुट, history क्लियर।' },
  'mod.prodintel2.desc': { en: 'Batch-level traceability, efficiency trends, bottleneck identification, shift-wise production chart.', hi: 'बैच-लेवल traceability, efficiency ट्रेंड, bottleneck पहचान, शिफ्ट-वाइज़ प्रोडक्शन चार्ट।', hinglish: 'Batch-level traceability, efficiency trends, bottleneck identification, shift-wise production chart.', gu: 'બેચ-લેવલ traceability, efficiency ટ્રેન્ડ, bottleneck ઓળખ, શિફ્ટ-વાઇઝ પ્રોડક્શન ચાર્ટ.', mr: 'बॅच-लेव्हल traceability, efficiency ट्रेंड, bottleneck ओळख, शिफ्ट-निहाय उत्पादन चार्ट.', mwr: 'बैच-लेवल traceability, efficiency ट्रेंड, bottleneck पिछाण, शिफ्ट-वाइज प्रोडक्शन चार्ट।' },
  'mod.custhub2.desc': { en: 'Customer segmentation, lifetime value, purchase frequency analysis, segment-based broadcast trigger.', hi: 'कस्टमर सेगमेंटेशन, lifetime value, परचेज़ फ़्रीक्वेंसी एनालिसिस, segment-based ब्रॉडकास्ट ट्रिगर।', hinglish: 'Customer segmentation, lifetime value, purchase frequency analysis, segment-based broadcast trigger.', gu: 'કસ્ટમર સેગ્મેન્ટેશન, lifetime value, પરચેઝ ફ્રીક્વન્સી એનાલિસિસ, segment-based broadcast trigger.', mr: 'ग्राहक सेगमेंटेशन, lifetime value, खरेदी वारंवारता विश्लेषण, segment-based broadcast trigger.', mwr: 'कस्टमर सेगमेंटेशन, lifetime value, परचेज फ्रीक्वेंसी एनालिसिस, segment-based ब्रॉडकास्ट ट्रिगर।' },
  'mod.productivity2.desc': { en: 'Team leaderboard, productivity scores, task completion rate over time, focus mode timer.', hi: 'टीम लीडरबोर्ड, प्रोडक्टिविटी स्कोर, समय के साथ टास्क कम्प्लीशन रेट, फ़ोकस मोड टाइमर।', hinglish: 'Team leaderboard, productivity scores, time ke saath task completion rate, focus mode timer.', gu: 'ટીમ લીડરબોર્ડ, પ્રોડક્ટિવિટી સ્કોર, સમય સાથે ટાસ્ક કમ્પ્લીશન રેટ, focus mode timer.', mr: 'टीम लीडरबोर्ड, उत्पादकता स्कोअर, कालांतराने टास्क पूर्णता दर, focus mode timer.', mwr: 'टीम लीडरबोर्ड, प्रोडक्टिविटी स्कोर, टैम रै साथै टास्क कम्प्लीशन रेट, focus mode timer।' },

  // Highlight card
  'hl.eyebrow': { en: 'Smart HR', hi: 'स्मार्ट HR', hinglish: 'Smart HR', gu: 'સ્માર્ટ HR', mr: 'स्मार्ट HR', mwr: 'स्मार्ट HR' },
  'hl.title': { en: 'Track attendance, leaves, and payroll — automatically.', hi: 'अटेंडेंस, लीव और पेरोल को ट्रैक करें — अपने आप।', hinglish: 'Attendance, leaves aur payroll track karein — automatically.', gu: 'એટેન્ડન્સ, લીવ અને પેરોલ ટ્રેક કરો — આપમેળે.', mr: 'हजेरी, रजा आणि पेरोल ट्रॅक करा — आपोआप.', mwr: 'अटेंडेंस, लीव अर पेरोल ट्रैक करो — आपणै आप।' },
  'hl.desc': { en: 'Mera Dhanda HR module handles everything from punch-in to payslip, so you can focus on your people, not paperwork.', hi: 'Mera Dhanda HR मॉड्यूल punch-in से payslip तक सब कुछ संभालता है, ताकि आप अपने लोगों पर ध्यान दें, paperwork पर नहीं।', hinglish: 'Mera Dhanda HR module punch-in se payslip tak sab kuch handle karta hai, taaki aap apne logon par focus karein, paperwork par nahi.', gu: 'Mera Dhanda HR મોડ્યુલ punch-in થી payslip સુધી બધું સંભાળે છે, જેથી તમે તમારા લોકો પર ધ્યાન આપો, paperwork પર નહીં.', mr: 'Mera Dhanda HR मॉड्यूल punch-in पासून payslip पर्यंत सर्व काही हाताळते, जेणेकरून तुम्ही तुमच्या लोकांवर लक्ष केंद्रित करू शकता, paperwork वर नाही.', mwr: 'Mera Dhanda HR मॉड्यूल punch-in सूं payslip तांई सगळौ संभालै है, ताकि थे आपणा लोगां पर ध्यान दो, paperwork पर नीं।' },
  'hl.bullet1': { en: 'Geo-tagged punch-in with selfie verification', hi: 'सेल्फी वेरिफ़िकेशन के साथ geo-tagged punch-in', hinglish: 'Selfie verification ke saath geo-tagged punch-in', gu: 'સેલ્ફી વેરિફિકેશન સાથે geo-tagged punch-in', mr: 'सेल्फी व्हेरिफिकेशनसह geo-tagged punch-in', mwr: 'सेल्फी वेरिफिकेशन रै साथै geo-tagged punch-in' },
  'hl.bullet2': { en: 'Automatic payslip generation every month', hi: 'हर महीने अपने आप payslip जनरेशन', hinglish: 'Har mahine automatic payslip generation', gu: 'દર મહિને આપમેળે payslip generation', mr: 'दर महिन्याला आपोआप payslip generation', mwr: 'हर महीनै आपणै आप payslip generation' },
  'hl.bullet3': { en: 'Leave balance syncs with payroll in real time', hi: 'लीव बैलेंस payroll के साथ real time में sync होता है', hinglish: 'Leave balance payroll ke saath real time mein sync hota hai', gu: 'લીવ બેલેન્સ payroll સાથે real time માં sync થાય છે', mr: 'रजा शिल्लक payroll शी real time मध्ये sync होते', mwr: 'लीव बैलेंस payroll रै साथै real time में sync हुवै' },
  'hl.bullet4': { en: 'Statutory reports — PF, ESI, TDS — always ready', hi: 'स्टैच्युटरी रिपोर्ट — PF, ESI, TDS — हमेशा तैयार', hinglish: 'Statutory reports — PF, ESI, TDS — hamesha ready', gu: 'સ્ટેચ્યુટરી રિપોર્ટ — PF, ESI, TDS — હંમેશા તૈયાર', mr: 'वैधानिक रिपोर्ट — PF, ESI, TDS — नेहमी तयार', mwr: 'स्टैच्युटरी रिपोर्ट — PF, ESI, TDS — हमेसा तैयार' },

  // Mock table
  'tbl.title': { en: "Today's Attendance", hi: 'आज की अटेंडेंस', hinglish: 'Aaj ki Attendance', gu: 'આજની એટેન્ડન્સ', mr: 'आजची हजेरी', mwr: 'आज री अटेंडेंस' },
  'tbl.name': { en: 'Name', hi: 'नाम', hinglish: 'Name', gu: 'નામ', mr: 'नाव', mwr: 'नाम' },
  'tbl.status': { en: 'Status', hi: 'स्टेटस', hinglish: 'Status', gu: 'સ્ટેટસ', mr: 'स्थिती', mwr: 'स्टेटस' },
  'tbl.clockin': { en: 'Clock-in', hi: 'क्लॉक-इन', hinglish: 'Clock-in', gu: 'ક્લોક-ઇન', mr: 'क्लॉक-इन', mwr: 'क्लॉक-इन' },
  'tbl.dept': { en: 'Department', hi: 'डिपार्टमेंट', hinglish: 'Department', gu: 'ડિપાર્ટમેન્ટ', mr: 'विभाग', mwr: 'डिपार्टमेंट' },
  'status.present': { en: 'Present', hi: 'उपस्थित', hinglish: 'Present', gu: 'હાજર', mr: 'उपस्थित', mwr: 'हाजर' },
  'status.absent': { en: 'Absent', hi: 'अनुपस्थित', hinglish: 'Absent', gu: 'ગેરહાજર', mr: 'अनुपस्थित', mwr: 'गैरहाजर' },
  'status.leave': { en: 'Leave', hi: 'छुट्टी', hinglish: 'Leave', gu: 'રજા', mr: 'रजा', mwr: 'छुट्टी' },
};

type ModuleCard = {
  icon: string;
  titleKey: string;
  descKey: string;
  tags: string[];
};

type TabData = {
  icon: string;
  labelKey: string;
  modules: ModuleCard[];
};

const tabs: TabData[] = [
  {
    icon: '👥',
    labelKey: 'tab.hr',
    modules: [
      { icon: '📅', titleKey: 'mod.attendance.title', descKey: 'mod.attendance.desc', tags: ['GPS', 'Auto-sync'] },
      { icon: '🏖️', titleKey: 'mod.leave.title', descKey: 'mod.leave.desc', tags: ['Workflows', 'Policy Engine'] },
      { icon: '💰', titleKey: 'mod.payroll.title', descKey: 'mod.payroll.desc', tags: ['GST Ready', 'Statutory'] },
      { icon: '👤', titleKey: 'mod.staff.title', descKey: 'mod.staff.desc', tags: ['Documents', 'Timeline'] },
      { icon: '👥', titleKey: 'mod.hrdash.title', descKey: 'mod.hrdash.desc', tags: ['KPIs', 'Alerts'] },
      { icon: '🏢', titleKey: 'mod.dept.title', descKey: 'mod.dept.desc', tags: ['Org Chart', 'Tree View'] },
      { icon: '👔', titleKey: 'mod.hierarchy.title', descKey: 'mod.hierarchy.desc', tags: ['Interactive', 'PDF Export'] },
      { icon: '⭐', titleKey: 'mod.productivity.title', descKey: 'mod.productivity.desc', tags: ['Leaderboard', 'Focus Mode'] },
    ],
  },
  {
    icon: '📞',
    labelKey: 'tab.sales',
    modules: [
      { icon: '📞', titleKey: 'mod.leads.title', descKey: 'mod.leads.desc', tags: ['Kanban', 'Lead Scoring'] },
      { icon: '💼', titleKey: 'mod.salesover.title', descKey: 'mod.salesover.desc', tags: ['Funnel', 'Analytics'] },
      { icon: '🎯', titleKey: 'mod.targets.title', descKey: 'mod.targets.desc', tags: ['Targets', 'Leaderboard'] },
      { icon: '📱', titleKey: 'mod.coldcall.title', descKey: 'mod.coldcall.desc', tags: ['Dialer', 'Scripts'] },
      { icon: '💖', titleKey: 'mod.custhub.title', descKey: 'mod.custhub.desc', tags: ['Segments', 'Profiles'] },
      { icon: '💳', titleKey: 'mod.member.title', descKey: 'mod.member.desc', tags: ['QR Code', 'Tiers'] },
      { icon: '📢', titleKey: 'mod.broadcast.title', descKey: 'mod.broadcast.desc', tags: ['WhatsApp', 'SMS', 'Email'] },
    ],
  },
  {
    icon: '🏭',
    labelKey: 'tab.production',
    modules: [
      { icon: '📋', titleKey: 'mod.jobcards.title', descKey: 'mod.jobcards.desc', tags: ['Kanban', 'Templates'] },
      { icon: '✅', titleKey: 'mod.qc.title', descKey: 'mod.qc.desc', tags: ['Checklists', 'Rework'] },
      { icon: '🚚', titleKey: 'mod.dispatch.title', descKey: 'mod.dispatch.desc', tags: ['Courier', 'POD'] },
      { icon: '📈', titleKey: 'mod.prodintel.title', descKey: 'mod.prodintel.desc', tags: ['Batch', 'Efficiency'] },
      { icon: '🔧', titleKey: 'mod.machines.title', descKey: 'mod.machines.desc', tags: ['Maintenance', 'Alerts'] },
      { icon: '📦', titleKey: 'mod.bulk.title', descKey: 'mod.bulk.desc', tags: ['Bulk', 'Export'] },
      { icon: '⚙️', titleKey: 'mod.jobsetter.title', descKey: 'mod.jobsetter.desc', tags: ['SLA', 'Auto-assign'] },
      { icon: '🏭', titleKey: 'mod.floor.title', descKey: 'mod.floor.desc', tags: ['Real-time', 'Floor View'] },
    ],
  },
  {
    icon: '💰',
    labelKey: 'tab.finance',
    modules: [
      { icon: '💰', titleKey: 'mod.advacct.title', descKey: 'mod.advacct.desc', tags: ['GST', 'Double-Entry'] },
      { icon: '💵', titleKey: 'mod.basicacct.title', descKey: 'mod.basicacct.desc', tags: ['Simple', 'Recurring'] },
      { icon: '📊', titleKey: 'mod.stock.title', descKey: 'mod.stock.desc', tags: ['Alerts', 'Movement Log'] },
      { icon: '📦', titleKey: 'mod.invintel.title', descKey: 'mod.invintel.desc', tags: ['AI', 'FIFO/LIFO'] },
      { icon: '🛒', titleKey: 'mod.procure.title', descKey: 'mod.procure.desc', tags: ['Approval', 'GRN'] },
      { icon: '🏭', titleKey: 'mod.vendors.title', descKey: 'mod.vendors.desc', tags: ['Ratings', 'History'] },
    ],
  },
  {
    icon: '⚙️',
    labelKey: 'tab.operations',
    modules: [
      { icon: '📦', titleKey: 'mod.products.title', descKey: 'mod.products.desc', tags: ['Variants', 'CSV Import'] },
      { icon: '📋', titleKey: 'mod.sampledm.title', descKey: 'mod.sampledm.desc', tags: ['WhatsApp', 'Variables'] },
      { icon: '✅', titleKey: 'mod.tasks.title', descKey: 'mod.tasks.desc', tags: ['Kanban', 'Time Log'] },
      { icon: '🔐', titleKey: 'mod.perms.title', descKey: 'mod.perms.desc', tags: ['Role Matrix', 'Audit Log'] },
      { icon: '🏢', titleKey: 'mod.company.title', descKey: 'mod.company.desc', tags: ['Integrations', '2FA'] },
      { icon: '📋', titleKey: 'mod.jobsetter.title', descKey: 'mod.jobsetter.desc', tags: ['Templates', 'SLA'] },
    ],
  },
  {
    icon: '📊',
    labelKey: 'tab.analytics',
    modules: [
      { icon: '📊', titleKey: 'mod.analytics.title', descKey: 'mod.analytics.desc', tags: ['Pinnable', 'Export'] },
      { icon: '🤖', titleKey: 'mod.aiassist.title', descKey: 'mod.aiassist.desc', tags: ['Voice', 'Data Cards'] },
      { icon: '⭐', titleKey: 'mod.productivity.title', descKey: 'mod.productivity2.desc', tags: ['Leaderboard', 'Insights'] },
      { icon: '📈', titleKey: 'mod.prodintel.title', descKey: 'mod.prodintel2.desc', tags: ['Batch', 'Trends'] },
      { icon: '💖', titleKey: 'mod.custhub.title', descKey: 'mod.custhub2.desc', tags: ['LTV', 'Segments'] },
    ],
  },
];

const highlightCardBullets = ['hl.bullet1', 'hl.bullet2', 'hl.bullet3', 'hl.bullet4'];

const mockTableData = [
  { name: 'Amit Kumar', statusKey: 'status.present', time: '09:02 AM', dept: 'Engineering' },
  { name: 'Sneha Roy', statusKey: 'status.present', time: '08:55 AM', dept: 'Design' },
  { name: 'Rahul Verma', statusKey: 'status.absent', time: '-', dept: 'Sales' },
  { name: 'Priya Singh', statusKey: 'status.present', time: '09:10 AM', dept: 'HR' },
  { name: 'Vikram Patel', statusKey: 'status.leave', time: '-', dept: 'Production' },
];

export default function Services() {
  const t = useT(STRINGS);
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="services"
      className="w-full bg-[#F4E4DF] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services-header text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#C05621]">
            {t('eyebrow')}
          </span>
          <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#2B1B12] mt-3 mb-4">
            {t('heading')}
          </h2>
          <p className="text-[17px] text-[#7A6453] max-w-xl mx-auto leading-[1.7]">
            {t('subheading')}
          </p>
        </motion.div>

        {/* Tab Bar */}
        <div className="tab-bar flex flex-wrap justify-center gap-2 mb-10 bg-[rgba(244,228,223,0.8)] rounded-2xl p-2 max-w-4xl mx-auto">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? 'bg-white text-[#C05621] shadow-sm border border-[rgba(192,86,33,0.15)]'
                  : 'text-[#7A6453] hover:text-[#2B1B12] hover:bg-[rgba(255,255,255,0.5)]'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{t(tab.labelKey)}</span>
            </button>
          ))}
        </div>

        {/* Module Cards Grid */}
        <div className="relative min-h-[400px] mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {tabs[activeTab].modules.map((module, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: '#ffffff' }}
                  className="bg-[#F0EEE8] rounded-xl border border-[rgba(43,27,18,0.08)] p-5 cursor-pointer transition-colors duration-200 hover:border-[rgba(192,86,33,0.2)] shadow-sm hover:shadow-md group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-[26px]">{module.icon}</div>
                    <ChevronRight size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-sm font-bold text-[#2B1B12] mb-2 group-hover:text-[#C05621] transition-colors">
                    {t(module.titleKey)}
                  </h4>
                  <p className="text-[13px] text-[#7A6453] leading-[1.55] mb-4">
                    {t(module.descKey)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {module.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 bg-[rgba(192,86,33,0.08)] text-[#C05621] text-[11px] font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Highlight Card */}
        <div className="bg-white rounded-3xl border border-[rgba(43,27,18,0.08)] p-8 lg:p-12 grid lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#C05621]">
              {t('hl.eyebrow')}
            </span>
            <h3 className="font-heading text-[28px] lg:text-[32px] font-extrabold leading-[1.15] tracking-[-1px] text-[#2B1B12] mt-3 mb-4">
              {t('hl.title')}
            </h3>
            <p className="text-[15px] text-[#7A6453] leading-[1.7] mb-6">
              {t('hl.desc')}
            </p>
            <ul className="space-y-3">
              {highlightCardBullets.map((bulletKey, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[rgba(192,86,33,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C05621]" />
                  </div>
                  <span className="text-sm text-[#7A6453] leading-[1.6]">
                    {t(bulletKey)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Mock Table */}
          <div className="bg-white rounded-xl border border-[rgba(43,27,18,0.08)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[rgba(43,27,18,0.06)] bg-[#FAFAF8]">
              <p className="text-xs font-semibold text-[#7A6453]">
                {t('tbl.title')}
              </p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-[11px] text-[#9A8472] text-left">
                  <th className="px-4 py-2 font-medium">{t('tbl.name')}</th>
                  <th className="px-4 py-2 font-medium">{t('tbl.status')}</th>
                  <th className="px-4 py-2 font-medium">{t('tbl.clockin')}</th>
                  <th className="px-4 py-2 font-medium">{t('tbl.dept')}</th>
                </tr>
              </thead>
              <tbody>
                {mockTableData.map((row, i) => (
                  <tr
                    key={i}
                    className={`text-sm ${
                      i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 py-2.5 font-medium text-[#2B1B12]">
                      {row.name}
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          row.statusKey === 'status.present'
                            ? 'bg-[rgba(22,163,74,0.1)] text-[#0F766E]'
                            : row.statusKey === 'status.absent'
                            ? 'bg-[rgba(220,38,38,0.1)] text-[#DC2626]'
                            : 'bg-[rgba(217,119,6,0.1)] text-[#D97706]'
                        }`}
                      >
                        {t(row.statusKey)}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-[#7A6453]">{row.time}</td>
                    <td className="px-4 py-2.5 text-[#7A6453]">{row.dept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
