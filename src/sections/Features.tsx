import { motion, type Variants } from 'framer-motion';
import FlipCard from '../components/FlipCard';
import { Link } from 'react-router';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'header.badge': {
    en: 'Why Mera Dhanda?',
    hi: 'Mera Dhanda क्यों?',
    hinglish: 'Mera Dhanda kyun?',
    gu: 'Mera Dhanda કેમ?',
    mr: 'Mera Dhanda का?',
    mwr: 'Mera Dhanda कीं?',
  },
  'header.title': {
    en: 'Everything you need to run smarter.',
    hi: 'स्मार्ट तरीके से चलाने के लिए हर चीज़।',
    hinglish: 'Smart tarike se business chalane ke liye sab kuch.',
    gu: 'સ્માર્ટ રીતે ચલાવવા માટે જરૂરી બધું જ.',
    mr: 'स्मार्ट पद्धतीने चालवण्यासाठी आवश्यक सर्व काही.',
    mwr: 'स्मार्ट तरीकै सूं चलावण वास्तै हर चीज।',
  },
  'header.subtitle': {
    en: 'Powerful features designed for modern businesses. Built to scale, engineered for precision.',
    hi: 'आधुनिक businesses के लिए बनाए गए powerful features. scale के लिए तैयार, सटीकता के लिए इंजीनियर किए गए।',
    hinglish: 'Modern businesses ke liye banaye gaye powerful features. Scale ke liye ready, precision ke liye engineer kiye gaye.',
    gu: 'આધુનિક businesses માટે બનાવેલા powerful features. Scale માટે તૈયાર, ચોકસાઈ માટે એન્જિનિયર કરેલા.',
    mr: 'आधुनिक businesses साठी तयार केलेली powerful features. Scale साठी तयार, अचूकतेसाठी इंजिनिअर केलेली.',
    mwr: 'आधुनिक businesses वास्तै बणायोड़ा powerful features. Scale वास्तै त्यार, सटीकता वास्तै बणायोड़ा।',
  },
  'card.hover': {
    en: 'Hover to flip',
    hi: 'पलटने के लिए hover करें',
    hinglish: 'Flip karne ke liye hover karein',
    gu: 'ફેરવવા માટે hover કરો',
    mr: 'उलटण्यासाठी hover करा',
    mwr: 'पलटण वास्तै hover करो',
  },
  'feat.analytics.title': {
    en: 'Real-Time Analytics',
    hi: 'रियल-टाइम Analytics',
    hinglish: 'Real-Time Analytics',
    gu: 'રિયલ-ટાઈમ Analytics',
    mr: 'रिअल-टाइम Analytics',
    mwr: 'रियल-टाइम Analytics',
  },
  'feat.analytics.desc': {
    en: 'Get instant insights into every aspect of your business with live dashboards and customizable reports.',
    hi: 'live dashboards और customizable reports के साथ अपने business के हर पहलू की तुरंत जानकारी पाएं।',
    hinglish: 'Live dashboards aur customizable reports ke saath apne business ke har pehlu ki turant insight paao.',
    gu: 'Live dashboards અને customizable reports સાથે તમારા business ના દરેક પાસાની તરત જ માહિતી મેળવો.',
    mr: 'Live dashboards आणि customizable reports सह तुमच्या business च्या प्रत्येक पैलूची त्वरित माहिती मिळवा.',
    mwr: 'Live dashboards अर customizable reports सूं आपरै business रै हर पहलू री तुरंत जाणकारी पावो।',
  },
  'feat.analytics.back': {
    en: 'Deep-dive into sales trends, product performance, and team productivity. Our AI suggests optimizations based on historical data to maximize your ROI.',
    hi: 'sales trends, product performance और team productivity में गहराई से जाएं। हमारा AI आपके ROI को बढ़ाने के लिए historical data के आधार पर optimizations सुझाता है।',
    hinglish: 'Sales trends, product performance aur team productivity mein deep-dive karo. Hamara AI aapke ROI ko maximize karne ke liye historical data ke base par optimizations suggest karta hai.',
    gu: 'Sales trends, product performance અને team productivity માં ઊંડે ઊતરો. અમારું AI તમારા ROI ને વધારવા historical data ના આધારે optimizations સૂચવે છે.',
    mr: 'Sales trends, product performance आणि team productivity मध्ये खोलवर जा. आमचे AI तुमचा ROI वाढवण्यासाठी historical data च्या आधारे optimizations सुचवते.',
    mwr: 'Sales trends, product performance अर team productivity मांय गहराई सूं जावो। म्हारो AI आपरो ROI बधावण वास्तै historical data रै आधार पर optimizations बतावै।',
  },
  'feat.ai.title': {
    en: 'Built-in AI Assistant',
    hi: 'Built-in AI Assistant',
    hinglish: 'Built-in AI Assistant',
    gu: 'Built-in AI Assistant',
    mr: 'Built-in AI Assistant',
    mwr: 'Built-in AI Assistant',
  },
  'feat.ai.desc': {
    en: 'Ask questions, get insights, and automate workflows with our intelligent AI companion.',
    hi: 'हमारे intelligent AI companion के साथ सवाल पूछें, insights पाएं और workflows को automate करें।',
    hinglish: 'Hamare intelligent AI companion ke saath sawal poocho, insights paao aur workflows automate karo.',
    gu: 'અમારા intelligent AI companion સાથે પ્રશ્નો પૂછો, insights મેળવો અને workflows automate કરો.',
    mr: 'आमच्या intelligent AI companion सह प्रश्न विचारा, insights मिळवा आणि workflows automate करा.',
    mwr: 'म्हारै intelligent AI companion रै साथै सवाल पूछो, insights पावो अर workflows automate करो।',
  },
  'feat.ai.back': {
    en: 'Powered by advanced LLMs, your assistant can predict inventory shortages, draft customer emails, and explain complex financial reports in simple terms.',
    hi: 'advanced LLMs से चलने वाला आपका assistant inventory की कमी का अनुमान लगा सकता है, customer emails का draft बना सकता है और जटिल financial reports को आसान भाषा में समझा सकता है।',
    hinglish: 'Advanced LLMs se powered, aapka assistant inventory shortage predict kar sakta hai, customer emails draft kar sakta hai aur complex financial reports ko simple bhasha mein samjha sakta hai.',
    gu: 'Advanced LLMs થી સંચાલિત, તમારો assistant inventory ની અછતની આગાહી કરી શકે છે, customer emails નો draft બનાવી શકે છે અને જટિલ financial reports ને સરળ ભાષામાં સમજાવી શકે છે.',
    mr: 'Advanced LLMs द्वारे चालणारा तुमचा assistant inventory ची कमतरता ओळखू शकतो, customer emails चा draft बनवू शकतो आणि गुंतागुंतीचे financial reports सोप्या भाषेत समजावू शकतो.',
    mwr: 'Advanced LLMs सूं चालण वाळो आपरो assistant inventory री कमी रो अंदाजो लगा सकै, customer emails रो draft बणा सकै अर मुश्किल financial reports नै आसान भाषा मांय समझा सकै।',
  },
  'feat.access.title': {
    en: 'Role-Based Access',
    hi: 'Role-Based Access',
    hinglish: 'Role-Based Access',
    gu: 'Role-Based Access',
    mr: 'Role-Based Access',
    mwr: 'Role-Based Access',
  },
  'feat.access.desc': {
    en: 'Granular permissions ensure team members see only what they need, keeping data secure.',
    hi: 'बारीक permissions यह सुनिश्चित करती हैं कि team members सिर्फ़ उतना ही देखें जितनी ज़रूरत हो, data सुरक्षित रहे।',
    hinglish: 'Granular permissions ensure karti hain ki team members sirf utna hi dekhein jitni zaroorat ho, data secure rahe.',
    gu: 'સૂક્ષ્મ permissions એ સુનિશ્ચિત કરે છે કે team members ને જરૂર હોય તેટલું જ દેખાય, data સુરક્ષિત રહે.',
    mr: 'सूक्ष्म permissions हे सुनिश्चित करतात की team members ना फक्त गरजेपुरतेच दिसेल, data सुरक्षित राहील.',
    mwr: 'बारीक permissions पक्की करै कै team members नै बस उतो ई दीखै जितरी जरूरत हुवै, data सुरक्षित रैवै।',
  },
  'feat.access.back': {
    en: 'Define custom roles for managers, accountants, and staff. Track every action with a detailed audit log to ensure total transparency and security.',
    hi: 'managers, accountants और staff के लिए custom roles बनाएं। पूरी पारदर्शिता और सुरक्षा सुनिश्चित करने के लिए हर action को detailed audit log के साथ track करें।',
    hinglish: 'Managers, accountants aur staff ke liye custom roles banao. Poori transparency aur security ke liye har action ko detailed audit log ke saath track karo.',
    gu: 'Managers, accountants અને staff માટે custom roles બનાવો. સંપૂર્ણ પારદર્શિતા અને સુરક્ષા માટે દરેક action ને detailed audit log સાથે track કરો.',
    mr: 'Managers, accountants आणि staff साठी custom roles तयार करा. संपूर्ण पारदर्शकता आणि सुरक्षेसाठी प्रत्येक action detailed audit log सह track करा.',
    mwr: 'Managers, accountants अर staff वास्तै custom roles बणावो. पूरी पारदर्शिता अर सुरक्षा वास्तै हर action नै detailed audit log रै साथै track करो।',
  },
  'feat.production.title': {
    en: 'Production Tracking',
    hi: 'Production Tracking',
    hinglish: 'Production Tracking',
    gu: 'Production Tracking',
    mr: 'Production Tracking',
    mwr: 'Production Tracking',
  },
  'feat.production.desc': {
    en: 'Track every stage of production with job cards, quality checks, and dispatch management.',
    hi: 'job cards, quality checks और dispatch management के साथ production के हर चरण को track करें।',
    hinglish: 'Job cards, quality checks aur dispatch management ke saath production ke har stage ko track karo.',
    gu: 'Job cards, quality checks અને dispatch management સાથે production ના દરેક તબક્કાને track કરો.',
    mr: 'Job cards, quality checks आणि dispatch management सह production च्या प्रत्येक टप्प्याला track करा.',
    mwr: 'Job cards, quality checks अर dispatch management रै साथै production रै हर पड़ाव नै track करो।',
  },
  'feat.production.back': {
    en: 'Monitor floor efficiency in real-time. Identify bottlenecks before they delay shipments. Includes automated wastage analysis and machine maintenance logs.',
    hi: 'floor efficiency को real-time में monitor करें। shipments में देरी होने से पहले रुकावटों की पहचान करें। इसमें automated wastage analysis और machine maintenance logs शामिल हैं।',
    hinglish: 'Floor efficiency ko real-time mein monitor karo. Shipments delay hone se pehle bottlenecks identify karo. Isme automated wastage analysis aur machine maintenance logs shaamil hain.',
    gu: 'Floor efficiency ને real-time માં monitor કરો. Shipments માં વિલંબ થાય તે પહેલાં અડચણો ઓળખો. તેમાં automated wastage analysis અને machine maintenance logs સામેલ છે.',
    mr: 'Floor efficiency real-time मध्ये monitor करा. Shipments ला उशीर होण्याआधी अडथळे ओळखा. यात automated wastage analysis आणि machine maintenance logs समाविष्ट आहेत.',
    mwr: 'Floor efficiency नै real-time मांय monitor करो. Shipments मांय देर होवण सूं पैला रुकावटां री पिछाण करो. इण मांय automated wastage analysis अर machine maintenance logs सामिल है।',
  },
  'feat.membership.title': {
    en: 'Membership & Loyalty',
    hi: 'Membership & Loyalty',
    hinglish: 'Membership & Loyalty',
    gu: 'Membership & Loyalty',
    mr: 'Membership & Loyalty',
    mwr: 'Membership & Loyalty',
  },
  'feat.membership.desc': {
    en: 'Design, issue, and track digital membership cards with QR codes and tier-based rewards.',
    hi: 'QR codes और tier-based rewards के साथ digital membership cards डिज़ाइन करें, जारी करें और track करें।',
    hinglish: 'QR codes aur tier-based rewards ke saath digital membership cards design karo, issue karo aur track karo.',
    gu: 'QR codes અને tier-based rewards સાથે digital membership cards ડિઝાઈન કરો, ઈશ્યૂ કરો અને track કરો.',
    mr: 'QR codes आणि tier-based rewards सह digital membership cards डिझाइन करा, जारी करा आणि track करा.',
    mwr: 'QR codes अर tier-based rewards रै साथै digital membership cards डिजाइन करो, जारी करो अर track करो।',
  },
  'feat.membership.back': {
    en: 'Boost customer retention with personalized reward programs. Track lifetime value (LTV) and automate birthday/anniversary marketing campaigns via WhatsApp.',
    hi: 'personalized reward programs के साथ customer retention बढ़ाएं। lifetime value (LTV) को track करें और WhatsApp के ज़रिए birthday/anniversary marketing campaigns को automate करें।',
    hinglish: 'Personalized reward programs ke saath customer retention badhao. Lifetime value (LTV) track karo aur WhatsApp ke through birthday/anniversary marketing campaigns automate karo.',
    gu: 'Personalized reward programs સાથે customer retention વધારો. Lifetime value (LTV) track કરો અને WhatsApp દ્વારા birthday/anniversary marketing campaigns automate કરો.',
    mr: 'Personalized reward programs सह customer retention वाढवा. Lifetime value (LTV) track करा आणि WhatsApp द्वारे birthday/anniversary marketing campaigns automate करा.',
    mwr: 'Personalized reward programs रै साथै customer retention बधावो. Lifetime value (LTV) नै track करो अर WhatsApp रै जरिए birthday/anniversary marketing campaigns नै automate करो।',
  },
  'feat.crm.title': {
    en: 'Leads & CRM',
    hi: 'Leads & CRM',
    hinglish: 'Leads & CRM',
    gu: 'Leads & CRM',
    mr: 'Leads & CRM',
    mwr: 'Leads & CRM',
  },
  'feat.crm.desc': {
    en: 'Manage your entire sales pipeline from first contact to closed deal with powerful CRM tools.',
    hi: 'powerful CRM tools के साथ पहले contact से लेकर deal बंद होने तक अपनी पूरी sales pipeline को manage करें।',
    hinglish: 'Powerful CRM tools ke saath pehle contact se lekar deal close hone tak apni poori sales pipeline manage karo.',
    gu: 'Powerful CRM tools સાથે પ્રથમ contact થી લઈને deal બંધ થવા સુધી તમારી સંપૂર્ણ sales pipeline manage કરો.',
    mr: 'Powerful CRM tools सह पहिल्या contact पासून deal बंद होईपर्यंत तुमची संपूर्ण sales pipeline manage करा.',
    mwr: 'Powerful CRM tools रै साथै पैला contact सूं लेय’र deal बंद होवण तांई आपरी पूरी sales pipeline manage करो।',
  },
  'feat.crm.back': {
    en: 'Visualize your funnel with Kanban boards. Never miss a follow-up with automated reminders. Integrate with WhatsApp for seamless communication.',
    hi: 'Kanban boards के साथ अपने funnel को देखें। automated reminders के साथ कोई follow-up न चूकें। आसान communication के लिए WhatsApp के साथ integrate करें।',
    hinglish: 'Kanban boards ke saath apne funnel ko visualize karo. Automated reminders ke saath koi follow-up miss mat karo. Seamless communication ke liye WhatsApp ke saath integrate karo.',
    gu: 'Kanban boards સાથે તમારા funnel ને visualize કરો. Automated reminders સાથે કોઈ follow-up ચૂકશો નહીં. Seamless communication માટે WhatsApp સાથે integrate કરો.',
    mr: 'Kanban boards सह तुमचा funnel visualize करा. Automated reminders सह कोणताही follow-up चुकवू नका. Seamless communication साठी WhatsApp सह integrate करा.',
    mwr: 'Kanban boards रै साथै आपरो funnel देखो. Automated reminders रै साथै कोई follow-up मती छोड़ो. आसान communication वास्तै WhatsApp रै साथै integrate करो।',
  },
  'feat.accounting.title': {
    en: 'Advanced Accounting',
    hi: 'Advanced Accounting',
    hinglish: 'Advanced Accounting',
    gu: 'Advanced Accounting',
    mr: 'Advanced Accounting',
    mwr: 'Advanced Accounting',
  },
  'feat.accounting.desc': {
    en: 'Double-entry bookkeeping, GST compliance, automated reconciliation, and financial reporting.',
    hi: 'Double-entry bookkeeping, GST compliance, automated reconciliation और financial reporting.',
    hinglish: 'Double-entry bookkeeping, GST compliance, automated reconciliation aur financial reporting.',
    gu: 'Double-entry bookkeeping, GST compliance, automated reconciliation અને financial reporting.',
    mr: 'Double-entry bookkeeping, GST compliance, automated reconciliation आणि financial reporting.',
    mwr: 'Double-entry bookkeeping, GST compliance, automated reconciliation अर financial reporting.',
  },
  'feat.accounting.back': {
    en: 'Generate P&L statements, Balance Sheets, and GST-ready invoices in seconds. Seamlessly syncs with inventory and sales for 100% accuracy.',
    hi: 'P&L statements, Balance Sheets और GST-ready invoices सेकंडों में बनाएं। 100% सटीकता के लिए inventory और sales के साथ आसानी से sync होता है।',
    hinglish: 'P&L statements, Balance Sheets aur GST-ready invoices seconds mein generate karo. 100% accuracy ke liye inventory aur sales ke saath seamlessly sync hota hai.',
    gu: 'P&L statements, Balance Sheets અને GST-ready invoices સેકન્ડોમાં બનાવો. 100% ચોકસાઈ માટે inventory અને sales સાથે સરળતાથી sync થાય છે.',
    mr: 'P&L statements, Balance Sheets आणि GST-ready invoices सेकंदात तयार करा. 100% अचूकतेसाठी inventory आणि sales सह सहजपणे sync होते.',
    mwr: 'P&L statements, Balance Sheets अर GST-ready invoices सेकंडां मांय बणावो. 100% सटीकता वास्तै inventory अर sales रै साथै आसानी सूं sync हुवै।',
  },
  'job.widgetA': {
    en: 'Widget Assembly A',
    hi: 'Widget Assembly A',
    hinglish: 'Widget Assembly A',
    gu: 'Widget Assembly A',
    mr: 'Widget Assembly A',
    mwr: 'Widget Assembly A',
  },
  'job.batchB': {
    en: 'Component Batch B',
    hi: 'Component Batch B',
    hinglish: 'Component Batch B',
    gu: 'Component Batch B',
    mr: 'Component Batch B',
    mwr: 'Component Batch B',
  },
  'job.packC': {
    en: 'Final Pack C',
    hi: 'Final Pack C',
    hinglish: 'Final Pack C',
    gu: 'Final Pack C',
    mr: 'Final Pack C',
    mwr: 'Final Pack C',
  },
  'status.inProduction': {
    en: 'In Production',
    hi: 'Production में',
    hinglish: 'Production mein',
    gu: 'Production માં',
    mr: 'Production मध्ये',
    mwr: 'Production मांय',
  },
  'status.qcPending': {
    en: 'QC Pending',
    hi: 'QC बाकी',
    hinglish: 'QC pending',
    gu: 'QC બાકી',
    mr: 'QC प्रलंबित',
    mwr: 'QC बाकी',
  },
  'status.dispatched': {
    en: 'Dispatched',
    hi: 'Dispatch हो गया',
    hinglish: 'Dispatch ho gaya',
    gu: 'Dispatch થઈ ગયું',
    mr: 'Dispatch झाले',
    mwr: 'Dispatch होग्यो',
  },
  'learn.prefix': {
    en: 'Learn More about ',
    hi: 'के बारे में और जानें ',
    hinglish: 'ke baare mein aur jaanein ',
    gu: 'વિશે વધુ જાણો ',
    mr: 'बद्दल अधिक जाणून घ्या ',
    mwr: 'बारै मांय ओर जाणो ',
  },
  'insight.suffix': {
    en: ' Insight',
    hi: ' की जानकारी',
    hinglish: ' Insight',
    gu: ' ની માહિતી',
    mr: ' ची माहिती',
    mwr: ' री जाणकारी',
  },
};

const features = [
  {
    icon: '📊',
    iconBg: 'rgba(192,86,33,0.1)',
    titleKey: 'feat.analytics.title',
    descriptionKey: 'feat.analytics.desc',
    backDescriptionKey: 'feat.analytics.back',
    path: '/features/analytics',
    wide: false,
  },
  {
    icon: '🤖',
    iconBg: 'rgba(124,58,237,0.1)',
    titleKey: 'feat.ai.title',
    descriptionKey: 'feat.ai.desc',
    backDescriptionKey: 'feat.ai.back',
    path: '/features/ai-assistant',
    wide: false,
  },
  {
    icon: '🔐',
    iconBg: 'rgba(22,163,74,0.1)',
    titleKey: 'feat.access.title',
    descriptionKey: 'feat.access.desc',
    backDescriptionKey: 'feat.access.back',
    path: '/features/crm',
    wide: false,
  },
  {
    icon: '🏭',
    iconBg: 'rgba(217,119,6,0.1)',
    titleKey: 'feat.production.title',
    descriptionKey: 'feat.production.desc',
    backDescriptionKey: 'feat.production.back',
    path: '/features/production',
    wide: true,
    mockJobs: [
      { nameKey: 'job.widgetA', progress: 75, statusKey: 'status.inProduction', statusColor: '#C05621' },
      { nameKey: 'job.batchB', progress: 40, statusKey: 'status.qcPending', statusColor: '#D97706' },
      { nameKey: 'job.packC', progress: 100, statusKey: 'status.dispatched', statusColor: '#0F766E' },
    ],
  },
  {
    icon: '💳',
    iconBg: 'rgba(220,38,38,0.1)',
    titleKey: 'feat.membership.title',
    descriptionKey: 'feat.membership.desc',
    backDescriptionKey: 'feat.membership.back',
    path: '/features/marketing',
    wide: false,
  },
  {
    icon: '📞',
    iconBg: 'rgba(192,86,33,0.1)',
    titleKey: 'feat.crm.title',
    descriptionKey: 'feat.crm.desc',
    backDescriptionKey: 'feat.crm.back',
    path: '/features/crm',
    wide: false,
  },
  {
    icon: '💰',
    iconBg: 'rgba(22,163,74,0.1)',
    titleKey: 'feat.accounting.title',
    descriptionKey: 'feat.accounting.desc',
    backDescriptionKey: 'feat.accounting.back',
    path: '/features/accounting',
    wide: false,
  },
];

export default function Features() {
  const t = useT(STRINGS);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="features"
      className="w-full bg-[#FBF6F1] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="features-header text-center mb-14"
        >
          <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#C05621]">
            {t('header.badge')}
          </span>
          <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#2B1B12] mt-3 mb-4">
            {t('header.title')}
          </h2>
          <p className="text-[17px] text-[#7A6453] max-w-xl mx-auto leading-[1.7]">
            {t('header.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`${feature.wide ? 'md:col-span-2' : ''} h-[280px]`}
            >
              <FlipCard
                className="h-full"
                front={
                  <div className="h-full bg-white rounded-2xl border border-[rgba(43,27,18,0.08)] p-7 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C05621] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="flex gap-5 h-full">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: feature.iconBg }}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-base font-bold text-[#2B1B12] mb-2">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-[13px] text-[#7A6453] leading-[1.6]">
                          {t(feature.descriptionKey)}
                        </p>
                        
                        {feature.wide && feature.mockJobs && (
                          <div className="mt-auto space-y-2">
                            {feature.mockJobs.map((job, j) => (
                              <div key={j} className="bg-[#FAFAF8] rounded-lg p-2 border border-[rgba(43,27,18,0.04)]">
                                <div className="flex items-center justify-between text-[10px] mb-1">
                                  <span className="font-semibold text-[#2B1B12]">{t(job.nameKey)}</span>
                                  <span style={{ color: job.statusColor }}>{t(job.statusKey)}</span>
                                </div>
                                <div className="w-full h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
                                  <div className="h-full" style={{ width: `${job.progress}%`, backgroundColor: job.statusColor }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-auto pt-4 text-xs font-bold text-[#C05621] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {t('card.hover')}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="h-full bg-[#2B1B12] rounded-2xl p-7 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-themeGreen-500/10 rounded-full blur-2xl" />
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span className="text-xl">{feature.icon}</span>
                        {t(feature.titleKey)}{t('insight.suffix')}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {t(feature.backDescriptionKey)}
                      </p>
                    </div>
                    <Link 
                      to={feature.path}
                      className="mt-4 w-full py-2.5 bg-[#C05621] hover:bg-[#A8471A] text-white rounded-lg text-center text-xs font-bold transition-colors"
                    >
                      {t('learn.prefix')}{t(feature.titleKey)}
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
