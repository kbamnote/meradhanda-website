import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Factory, Timer, AlertCircle, ShieldCheck } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'badge': {
    en: 'Operational Excellence',
    hi: 'संचालन में उत्कृष्टता',
    hinglish: 'Operational Excellence',
    gu: 'ઓપરેશનલ એક્સેલન્સ',
    mr: 'कार्यचालन उत्कृष्टता',
    mwr: 'ऑपरेशन में बढ़िया काम',
  },
  'heading.pre': {
    en: 'See the floor.',
    hi: 'फ़्लोर देखें।',
    hinglish: 'Floor dekho.',
    gu: 'ફ્લોર જુઓ.',
    mr: 'फ्लोर पहा.',
    mwr: 'फ्लोर देखो।',
  },
  'heading.accent': {
    en: 'Spot the bottleneck.',
    hi: 'अड़चन पहचानें।',
    hinglish: 'Bottleneck pakdo.',
    gu: 'અડચણ ઓળખો.',
    mr: 'अडथळा ओळखा.',
    mwr: 'अड़चण पकड़ो।',
  },
  'lead': {
    en: 'Plan jobs, track progress, and catch delays before they become fire drills. Everyone knows exactly what to work on next.',
    hi: 'जॉब्स प्लान करें, प्रोग्रेस ट्रैक करें, और देरी को बड़ी समस्या बनने से पहले पकड़ें। हर किसी को पता रहता है कि आगे क्या काम करना है।',
    hinglish: 'Jobs plan karo, progress track karo, aur delays ko badi problem banne se pehle pakdo. Har kisi ko pata rehta hai ki aage kya kaam karna hai.',
    gu: 'જોબ્સ પ્લાન કરો, પ્રોગ્રેસ ટ્રૅક કરો, અને વિલંબ મોટી સમસ્યા બને એ પહેલાં પકડો. દરેકને ખબર હોય છે કે આગળ શું કામ કરવાનું છે.',
    mr: 'जॉब्स प्लॅन करा, प्रगती ट्रॅक करा, आणि उशीर मोठी समस्या होण्याआधी पकडा. प्रत्येकाला नेमके पुढे काय करायचे हे माहीत असते.',
    mwr: 'जॉब्स प्लान करो, प्रोग्रेस ट्रैक करो, अर देरी नै बड़ी समस्या बणण सूं पैली पकड़ो। हर कोई नै ठाह रैवै कै आगै कांई काम करणो है।',
  },
  'feat.floor.title': {
    en: 'Floor Control',
    hi: 'फ़्लोर कंट्रोल',
    hinglish: 'Floor Control',
    gu: 'ફ્લોર કંટ્રોલ',
    mr: 'फ्लोर कंट्रोल',
    mwr: 'फ्लोर कंट्रोल',
  },
  'feat.floor.desc': {
    en: 'Real-time machine & station monitoring.',
    hi: 'रियल-टाइम मशीन और स्टेशन मॉनिटरिंग।',
    hinglish: 'Real-time machine aur station monitoring.',
    gu: 'રિયલ-ટાઇમ મશીન અને સ્ટેશન મોનિટરિંગ.',
    mr: 'रिअल-टाइम मशीन व स्टेशन मॉनिटरिंग.',
    mwr: 'रियल-टाइम मशीन अर स्टेशन मॉनिटरिंग।',
  },
  'feat.wip.title': {
    en: 'WIP Tracking',
    hi: 'WIP ट्रैकिंग',
    hinglish: 'WIP Tracking',
    gu: 'WIP ટ્રૅકિંગ',
    mr: 'WIP ट्रॅकिंग',
    mwr: 'WIP ट्रैकिंग',
  },
  'feat.wip.desc': {
    en: 'Know where every job is, instantly.',
    hi: 'तुरंत जानें कि हर जॉब कहाँ है।',
    hinglish: 'Turant jaano ki har job kahan hai.',
    gu: 'દરેક જોબ ક્યાં છે એ તરત જાણો.',
    mr: 'प्रत्येक जॉब कुठे आहे ते लगेच जाणून घ्या.',
    mwr: 'तुरंत ठाह करो कै हर जॉब कठै है।',
  },
  'feat.qa.title': {
    en: 'QA Checkpoints',
    hi: 'QA चेकपॉइंट्स',
    hinglish: 'QA Checkpoints',
    gu: 'QA ચેકપોઇન્ટ્સ',
    mr: 'QA चेकपॉइंट्स',
    mwr: 'QA चेकपॉइंट्स',
  },
  'feat.qa.desc': {
    en: 'Integrated quality control at every step.',
    hi: 'हर चरण पर एकीकृत क्वालिटी कंट्रोल।',
    hinglish: 'Har step par integrated quality control.',
    gu: 'દરેક પગલે ઇન્ટિગ્રેટેડ ક્વોલિટી કંટ્રોલ.',
    mr: 'प्रत्येक टप्प्यावर एकात्मिक क्वालिटी कंट्रोल.',
    mwr: 'हर स्टेप पर इंटीग्रेटेड क्वालिटी कंट्रोल।',
  },
  'feat.delay.title': {
    en: 'Delay Alerts',
    hi: 'देरी की चेतावनी',
    hinglish: 'Delay Alerts',
    gu: 'વિલંબ એલર્ટ્સ',
    mr: 'उशीर इशारे',
    mwr: 'देरी रा अलर्ट',
  },
  'feat.delay.desc': {
    en: 'Predictive warnings for schedule slips.',
    hi: 'शेड्यूल बिगड़ने की पूर्वानुमानित चेतावनियाँ।',
    hinglish: 'Schedule bigadne ki predictive warnings.',
    gu: 'શેડ્યૂલ ખોરવાય એની પૂર્વાનુમાનિત ચેતવણીઓ.',
    mr: 'शेड्यूल बिघडण्याचे पूर्वानुमानित इशारे.',
    mwr: 'शेड्यूल बिगड़ण री पैली चेतावणी।',
  },
  'cta': {
    en: 'Production Roadmap',
    hi: 'प्रोडक्शन रोडमैप',
    hinglish: 'Production Roadmap',
    gu: 'પ્રોડક્શન રોડમેપ',
    mr: 'प्रोडक्शन रोडमॅप',
    mwr: 'प्रोडक्शन रोडमैप',
  },
  'step.accepted': {
    en: 'Job accepted',
    hi: 'जॉब स्वीकार किया',
    hinglish: 'Job accept hua',
    gu: 'જોબ સ્વીકારી',
    mr: 'जॉब स्वीकारली',
    mwr: 'जॉब मंजूर कर्यो',
  },
  'step.designing': {
    en: 'Designing Completed',
    hi: 'डिज़ाइनिंग पूरी हुई',
    hinglish: 'Designing complete hui',
    gu: 'ડિઝાઇનિંગ પૂર્ણ',
    mr: 'डिझायनिंग पूर्ण',
    mwr: 'डिज़ाइनिंग पूरी होई',
  },
  'step.production': {
    en: 'Production Completed',
    hi: 'प्रोडक्शन पूरा हुआ',
    hinglish: 'Production complete hua',
    gu: 'પ્રોડક્શન પૂર્ણ',
    mr: 'प्रोडक्शन पूर्ण',
    mwr: 'प्रोडक्शन पूरो होयो',
  },
  'step.qa': {
    en: 'Quality Check Completed',
    hi: 'क्वालिटी चेक पूरा हुआ',
    hinglish: 'Quality check complete hua',
    gu: 'ક્વોલિટી ચેક પૂર્ણ',
    mr: 'क्वालिटी चेक पूर्ण',
    mwr: 'क्वालिटी चेक पूरो होयो',
  },
  'step.dispatched': {
    en: 'Job Dispatched',
    hi: 'जॉब डिस्पैच किया',
    hinglish: 'Job dispatch hua',
    gu: 'જોબ ડિસ્પેચ',
    mr: 'जॉब डिस्पॅच',
    mwr: 'जॉब डिस्पैच कर्यो',
  },
  'status.completed': {
    en: 'Completed',
    hi: 'पूर्ण',
    hinglish: 'Completed',
    gu: 'પૂર્ણ',
    mr: 'पूर्ण',
    mwr: 'पूरो',
  },
  'status.inprogress': {
    en: 'In Progress',
    hi: 'जारी है',
    hinglish: 'In Progress',
    gu: 'ચાલુ છે',
    mr: 'सुरू आहे',
    mwr: 'चालू है',
  },
  'status.pending': {
    en: 'Pending',
    hi: 'बाकी है',
    hinglish: 'Pending',
    gu: 'બાકી',
    mr: 'प्रलंबित',
    mwr: 'बाकी है',
  },
  'gauge.label': {
    en: 'Floor Efficiency',
    hi: 'फ़्लोर एफ़िशिएंसी',
    hinglish: 'Floor Efficiency',
    gu: 'ફ્લોર એફિશિયન્સી',
    mr: 'फ्लोर एफिशियन्सी',
    mwr: 'फ्लोर एफिशिएंसी',
  },
};

export default function ProductionSection() {
  const t = useT(STRINGS);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Text content */}
          <div className="lg:pr-10 order-2 lg:order-1">
            <motion.div variants={itemVariants}>
               <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
                 {t('badge')}
               </span>
               <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
                 {t('heading.pre')} <br/>
                 <span className="text-orange-600 italic">{t('heading.accent')}</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                 {t('lead')}
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  {[
                    { icon: Factory, titleKey: "feat.floor.title", descKey: "feat.floor.desc" },
                    { icon: Timer, titleKey: "feat.wip.title", descKey: "feat.wip.desc" },
                    { icon: ShieldCheck, titleKey: "feat.qa.title", descKey: "feat.qa.desc" },
                    { icon: AlertCircle, titleKey: "feat.delay.title", descKey: "feat.delay.desc" }
                  ].map((feat, i) => (
                    <div key={i} className="group cursor-default">
                       <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                          <feat.icon size={20} />
                       </div>
                       <h4 className="text-lg font-black text-gray-900 mb-1">{t(feat.titleKey)}</h4>
                       <p className="text-sm text-gray-500">{t(feat.descKey)}</p>
                    </div>
                  ))}
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="group inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
               >
                 {t('cta')}
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>

          {/* Right Media Card (The Visualizer) */}
          <motion.div 
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 bg-orange-600/5 rounded-[2rem] blur-2xl pointer-events-none" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-gray-50 p-4 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 p-6">
                 {/* Production Steps Visualizer */}
                 <div className="space-y-4">
                    {[
                      { stepKey: "step.accepted", statusKey: "status.completed", time: "08:00 AM", color: "bg-teal-500" },
                      { stepKey: "step.designing", statusKey: "status.completed", time: "10:00 AM", color: "bg-teal-500" },
                      { stepKey: "step.production", statusKey: "status.inprogress", time: "12:00 PM", color: "bg-themeGreen-500", active: true },
                      { stepKey: "step.qa", statusKey: "status.pending", time: "02:00 PM", color: "bg-gray-200" },
                      { stepKey: "step.dispatched", statusKey: "status.pending", time: "04:00 PM", color: "bg-gray-200" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className={`p-4 rounded-xl border flex items-center justify-between ${
                          item.active ? 'border-orange-200 bg-orange-50 shadow-lg shadow-orange-500/5' : 'border-gray-50'
                        }`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`w-2 h-2 rounded-full ${item.color} ${item.active ? 'animate-pulse' : ''}`} />
                            <div>
                               <p className="text-sm font-black text-gray-900">{t(item.stepKey)}</p>
                               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t(item.statusKey)}</p>
                            </div>
                         </div>
                         <span className="text-xs font-bold text-gray-400">{item.time}</span>
                      </motion.div>
                    ))}
                 </div>

                 {/* Efficiency Gauge Mock */}
                 <div className="mt-8 pt-8 border-t border-gray-50">
                    <div className="flex justify-between items-end mb-4">
                       <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{t('gauge.label')}</p>
                          <p className="text-2xl font-black text-gray-900">92.4%</p>
                       </div>
                       <div className="flex items-center gap-1 text-teal-500 text-xs font-bold">
                          <TrendingUp size={14} /> +2.1%
                       </div>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "92.4%" }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                         className="h-full bg-orange-500 rounded-full"
                       />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
