import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import AutoCarousel from '../components/AutoCarousel';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'badge': {
    en: 'Success Stories',
    hi: 'सफलता की कहानियाँ',
    hinglish: 'Success Stories',
    gu: 'સફળતાની વાર્તાઓ',
    mr: 'यशोगाथा',
    mwr: 'कामयाबी री कहाणियां',
  },
  'heading.pre': {
    en: 'Trusted by ',
    hi: 'पूरे भारत के ',
    hinglish: 'Poore India ke ',
    gu: 'સમગ્ર ભારતના ',
    mr: 'संपूर्ण भारतातील ',
    mwr: 'पूरे भारत रा ',
  },
  'heading.accent': {
    en: 'visionary founders',
    hi: 'दूरदर्शी फ़ाउंडर्स',
    hinglish: 'visionary founders',
    gu: 'દૂરંદેશી founders',
    mr: 'द्रष्टे founders',
    mwr: 'दूरंदेशी founders',
  },
  'heading.post': {
    en: ' across India.',
    hi: ' का भरोसा।',
    hinglish: ' ka bharosa.',
    gu: 'નો ભરોસો.',
    mr: 'चा विश्वास.',
    mwr: ' रो भरोसो।',
  },
  'cta.caseStudies': {
    en: 'Read case studies',
    hi: 'केस स्टडीज़ पढ़ें',
    hinglish: 'Case studies padhein',
    gu: 'કેસ સ્ટડીઝ વાંચો',
    mr: 'केस स्टडीज वाचा',
    mwr: 'केस स्टडीज पढ़ो',
  },
  't.1.quote': {
    en: 'We finally stopped jumping between spreadsheets. Mera Dhanda brought everything into one place and our team actually enjoys using it.',
    hi: 'आख़िरकार हमने स्प्रेडशीट्स के बीच भागदौड़ बंद कर दी। Mera Dhanda ने सब कुछ एक जगह ले आया और हमारी टीम इसे इस्तेमाल करना सच में पसंद करती है।',
    hinglish: 'Aakhirkaar humne spreadsheets ke beech bhaag-daud band kar di. Mera Dhanda ne sab kuch ek jagah le aaya aur humari team isse use karna sach mein enjoy karti hai.',
    gu: 'આખરે અમે spreadsheets વચ્ચે દોડધામ બંધ કરી. Mera Dhanda એ બધું એક જગ્યાએ લાવી દીધું અને અમારી team તેને વાપરવાનું ખરેખર પસંદ કરે છે.',
    mr: 'अखेर आम्ही spreadsheets मध्ये उड्या मारणे थांबवले. Mera Dhanda ने सर्व काही एका जागी आणले आणि आमची team ते वापरण्याचा खरोखर आनंद घेते.',
    mwr: 'आखिर म्हे spreadsheets रे बीच भागदौड़ बंद कर दी। Mera Dhanda सगळो कुछ एक जागा ले आयो अर म्हारी team नै इणनै काम म लेणो साचमुच पसंद है।',
  },
  't.1.role': {
    en: 'Operations Director',
    hi: 'ऑपरेशंस डायरेक्टर',
    hinglish: 'Operations Director',
    gu: 'Operations Director',
    mr: 'Operations Director',
    mwr: 'Operations Director',
  },
  't.2.quote': {
    en: 'Payroll used to take two days. Now it is a few clicks. The automation is incredible and our employees love the self-service portal.',
    hi: 'पहले payroll में दो दिन लगते थे। अब बस कुछ क्लिक में हो जाता है। ऑटोमेशन कमाल का है और हमारे कर्मचारियों को self-service portal बहुत पसंद है।',
    hinglish: 'Pehle payroll mein do din lagte the. Ab bas kuch clicks mein ho jaata hai. Automation kamaal ka hai aur humare employees ko self-service portal bahut pasand hai.',
    gu: 'પહેલાં payroll માં બે દિવસ લાગતા. હવે ફક્ત થોડા clicks માં થઈ જાય છે. Automation અદ્ભુત છે અને અમારા employees ને self-service portal ખૂબ ગમે છે.',
    mr: 'पूर्वी payroll ला दोन दिवस लागायचे. आता फक्त काही clicks. Automation अप्रतिम आहे आणि आमच्या employees ना self-service portal खूप आवडतो.',
    mwr: 'पैली payroll म दो दिन लागता हा। अब बस थोड़ा clicks म हो जावै। Automation गजब रो है अर म्हारा employees नै self-service portal भोत पसंद है।',
  },
  't.2.role': {
    en: 'HR Manager',
    hi: 'HR Manager',
    hinglish: 'HR Manager',
    gu: 'HR Manager',
    mr: 'HR Manager',
    mwr: 'HR Manager',
  },
  't.3.quote': {
    en: 'Our production team actually updates their status now. The job cards and floor view made everything transparent and accountable.',
    hi: 'अब हमारी production team सच में अपना status update करती है। Job cards और floor view ने सब कुछ पारदर्शी और जवाबदेह बना दिया।',
    hinglish: 'Ab humari production team sach mein apna status update karti hai. Job cards aur floor view ne sab kuch transparent aur accountable bana diya.',
    gu: 'હવે અમારી production team ખરેખર પોતાનું status update કરે છે. Job cards અને floor view એ બધું પારદર્શક અને જવાબદાર બનાવ્યું.',
    mr: 'आता आमची production team खरोखर त्यांचे status update करते. Job cards आणि floor view ने सर्व काही पारदर्शक आणि जबाबदार केले.',
    mwr: 'अब म्हारी production team साचमुच आपणो status update करै। Job cards अर floor view सगळो कुछ पारदर्शी अर जिम्मेदार बणा दियो।',
  },
  't.3.role': {
    en: 'Plant Manager',
    hi: 'Plant Manager',
    hinglish: 'Plant Manager',
    gu: 'Plant Manager',
    mr: 'Plant Manager',
    mwr: 'Plant Manager',
  },
  't.4.quote': {
    en: 'The GST billing is lightning fast. We have reduced our billing time by 70% and eliminated human errors completely.',
    hi: 'GST billing बिजली की तरह तेज़ है। हमने अपना billing समय 70% कम कर दिया और इंसानी गलतियाँ पूरी तरह ख़त्म कर दीं।',
    hinglish: 'GST billing bijli ki tarah fast hai. Humne apna billing time 70% kam kar diya aur human errors poori tarah khatam kar diye.',
    gu: 'GST billing વીજળી જેવું ઝડપી છે. અમે અમારો billing સમય 70% ઘટાડ્યો અને માનવ ભૂલો સંપૂર્ણપણે દૂર કરી.',
    mr: 'GST billing विजेसारखे जलद आहे. आम्ही आमचा billing वेळ 70% कमी केला आणि मानवी चुका पूर्णपणे संपवल्या.',
    mwr: 'GST billing बिजली री तरां तेज है। म्हे आपणो billing टैम 70% घटा दियो अर इंसानी गलतियां पूरी तरां खतम कर दी।',
  },
  't.4.role': {
    en: 'CEO',
    hi: 'CEO',
    hinglish: 'CEO',
    gu: 'CEO',
    mr: 'CEO',
    mwr: 'CEO',
  },
  't.5.quote': {
    en: 'The AI assistant feels like a senior analyst sitting next to me. It identifies stock issues before they even happen.',
    hi: 'AI assistant ऐसा लगता है जैसे एक senior analyst मेरे पास बैठा हो। यह stock की समस्याओं को होने से पहले ही पहचान लेता है।',
    hinglish: 'AI assistant aisa lagta hai jaise ek senior analyst mere paas baitha ho. Yeh stock ki problems ko hone se pehle hi pehchaan leta hai.',
    gu: 'AI assistant એવું લાગે છે જાણે એક senior analyst મારી પાસે બેઠો હોય. તે stock ની સમસ્યાઓ થાય તે પહેલાં જ ઓળખી લે છે.',
    mr: 'AI assistant असे वाटते जणू एक senior analyst माझ्या शेजारी बसला आहे. तो stock च्या समस्या घडण्यापूर्वीच ओळखतो.',
    mwr: 'AI assistant असो लागै जणा एक senior analyst म्हारे कने बैठ्यो हो। बो stock री दिक्कतां होवण सूं पैली ही पकड़ लेवै।',
  },
  't.5.role': {
    en: 'Founder',
    hi: 'Founder',
    hinglish: 'Founder',
    gu: 'Founder',
    mr: 'Founder',
    mwr: 'Founder',
  },
};

const testimonials = [
  {
    quoteKey: 't.1.quote',
    name: 'Ankit Sharma',
    roleKey: 't.1.role',
    company: 'Metro Manufacturing',
    avatar: { bg: '#C05621', init: 'AS' },
  },
  {
    quoteKey: 't.2.quote',
    name: 'Priya Nair',
    roleKey: 't.2.role',
    company: 'TechStart India',
    avatar: { bg: '#0F766E', init: 'PN' },
  },
  {
    quoteKey: 't.3.quote',
    name: 'Rahul Verma',
    roleKey: 't.3.role',
    company: 'Precision Tools Co.',
    avatar: { bg: '#D97706', init: 'RV' },
  },
  {
    quoteKey: 't.4.quote',
    name: 'Vikram Mehta',
    roleKey: 't.4.role',
    company: 'VM Retail Group',
    avatar: { bg: '#DC2626', init: 'VM' },
  },
  {
    quoteKey: 't.5.quote',
    name: 'Sneha Gupta',
    roleKey: 't.5.role',
    company: 'Organic Roots',
    avatar: { bg: '#7C3AED', init: 'SG' },
  },
];

export default function Testimonials() {
  const t = useT(STRINGS);

  return (
    <section className="w-full bg-[#F4E4DF] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#C05621]">
              {t('badge')}
            </span>
            <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#2B1B12] mt-3">
              {t('heading.pre')}<span className="text-[#C05621]">{t('heading.accent')}</span>{t('heading.post')}
            </h2>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#C05621]"
          >
            {t('cta.caseStudies')}
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Auto Carousel */}
      <AutoCarousel
        speed={30}
        items={testimonials.map((item, i) => (
          <div
            key={i}
            className="w-[380px] bg-white rounded-3xl border border-[rgba(43,27,18,0.06)] p-8 relative group cursor-default whitespace-normal"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-themeGreen-500/10">
              <Quote size={48} />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[16px] text-[#7A6453] leading-[1.7] mb-8 min-h-[100px]">
              “{t(item.quoteKey)}”
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-[rgba(43,27,18,0.06)]">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                style={{ backgroundColor: item.avatar.bg }}
              >
                {item.avatar.init}
              </div>
              <div>
                <p className="text-sm font-bold text-[#2B1B12]">{item.name}</p>
                <p className="text-xs text-[#9A8472] font-medium">
                  {t(item.roleKey)}, {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      />
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
