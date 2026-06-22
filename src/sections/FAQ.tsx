import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'heading.pre': {
    en: 'Questions?',
    hi: 'सवाल?',
    hinglish: 'Questions?',
    gu: 'પ્રશ્નો?',
    mr: 'प्रश्न?',
    mwr: 'सवाल?',
  },
  'heading.accent': {
    en: 'Answers.',
    hi: 'जवाब।',
    hinglish: 'Answers.',
    gu: 'જવાબો.',
    mr: 'उत्तरे.',
    mwr: 'जवाब।',
  },
  'subtitle': {
    en: 'Everything you need to know about Mera Dhanda. Cannot find what you are looking for? Reach out to our team.',
    hi: 'Mera Dhanda के बारे में वह सब कुछ जो आपको जानना चाहिए। जो ढूंढ रहे हैं वह नहीं मिल रहा? हमारी टीम से संपर्क करें।',
    hinglish: 'Mera Dhanda ke baare mein wo sab kuch jo aapko jaanna chahiye. Jo dhoondh rahe hain wo nahi mila? Hamari team se contact karein.',
    gu: 'Mera Dhanda વિશે તમારે જે જાણવાની જરૂર છે તે બધું. તમે જે શોધી રહ્યા છો તે મળતું નથી? અમારી ટીમનો સંપર્ક કરો.',
    mr: 'Mera Dhanda बद्दल तुम्हाला जे जाणून घ्यायचे आहे ते सर्व. तुम्ही जे शोधत आहात ते सापडत नाही? आमच्या टीमशी संपर्क साधा.',
    mwr: 'Mera Dhanda रे बारे में जो कुछ आपने जाणणो चाहिजे। जो ढूंढ रिया हो वो कोनी मिल रिया? म्हारी टीम सूं संपर्क करो।',
  },
  'q1.question': {
    en: 'Is there a free trial?',
    hi: 'क्या फ़्री ट्रायल है?',
    hinglish: 'Kya free trial hai?',
    gu: 'શું ફ્રી ટ્રાયલ છે?',
    mr: 'फ्री ट्रायल आहे का?',
    mwr: 'फ्री ट्रायल है के?',
  },
  'q1.answer': {
    en: 'Yes! Every plan starts with a 14-day free trial. No credit card required. You get full access to all features during the trial period, and our team will help you get set up.',
    hi: 'हाँ! हर प्लान 14-दिन के फ़्री ट्रायल के साथ शुरू होता है। कोई क्रेडिट कार्ड ज़रूरी नहीं। ट्रायल के दौरान आपको सभी फ़ीचर्स का पूरा एक्सेस मिलता है, और हमारी टीम आपको सेटअप करने में मदद करेगी।',
    hinglish: 'Haan! Har plan 14-day free trial ke saath shuru hota hai. Koi credit card zaroori nahi. Trial ke dauraan aapko saare features ka pura access milta hai, aur hamari team aapko setup karne mein help karegi.',
    gu: 'હા! દરેક પ્લાન 14-દિવસના ફ્રી ટ્રાયલ સાથે શરૂ થાય છે. કોઈ ક્રેડિટ કાર્ડ જરૂરી નથી. ટ્રાયલ દરમિયાન તમને બધા ફીચર્સનો સંપૂર્ણ એક્સેસ મળે છે, અને અમારી ટીમ તમને સેટઅપ કરવામાં મદદ કરશે.',
    mr: 'हो! प्रत्येक प्लॅन 14-दिवसांच्या फ्री ट्रायलने सुरू होतो. कोणतेही क्रेडिट कार्ड आवश्यक नाही. ट्रायल दरम्यान तुम्हाला सर्व वैशिष्ट्यांचा पूर्ण अ‍ॅक्सेस मिळतो, आणि आमची टीम तुम्हाला सेटअप करण्यात मदत करेल.',
    mwr: 'हाँ! हर प्लान 14-दिन रे फ्री ट्रायल सूं चालू होवे। कोई क्रेडिट कार्ड री जरूरत कोनी। ट्रायल रे टैम सारा फीचर्स रो पूरो एक्सेस मिले, अर म्हारी टीम आपने सेटअप करण में मदद करसी।',
  },
  'q2.question': {
    en: 'Can I import data from my existing tools?',
    hi: 'क्या मैं अपने मौजूदा टूल्स से डेटा इम्पोर्ट कर सकता हूँ?',
    hinglish: 'Kya main apne existing tools se data import kar sakta hoon?',
    gu: 'શું હું મારા હાલના ટૂલ્સમાંથી ડેટા ઇમ્પોર્ટ કરી શકું?',
    mr: 'मी माझ्या सध्याच्या टूल्समधून डेटा इम्पोर्ट करू शकतो का?',
    mwr: 'के म्हूं म्हारा मौजूदा टूल्स सूं डेटा इम्पोर्ट कर सकूं?',
  },
  'q2.answer': {
    en: 'Absolutely. Mera Dhanda supports bulk CSV import for employees, products, customers, and transactions. We also offer direct integrations with Tally, Excel, and popular CRMs. Our migration team can assist with complex data transfers.',
    hi: 'बिल्कुल। Mera Dhanda कर्मचारियों, प्रोडक्ट्स, ग्राहकों और ट्रांज़ैक्शन के लिए बल्क CSV इम्पोर्ट सपोर्ट करता है। हम Tally, Excel और लोकप्रिय CRMs के साथ डायरेक्ट इंटीग्रेशन भी देते हैं। हमारी माइग्रेशन टीम जटिल डेटा ट्रांसफर में मदद कर सकती है।',
    hinglish: 'Bilkul. Mera Dhanda employees, products, customers aur transactions ke liye bulk CSV import support karta hai. Hum Tally, Excel aur popular CRMs ke saath direct integrations bhi dete hain. Hamari migration team complex data transfers mein madad kar sakti hai.',
    gu: 'બિલકુલ. Mera Dhanda કર્મચારીઓ, પ્રોડક્ટ્સ, ગ્રાહકો અને ટ્રાન્ઝેક્શન માટે બલ્ક CSV ઇમ્પોર્ટ સપોર્ટ કરે છે. અમે Tally, Excel અને લોકપ્રિય CRMs સાથે ડાયરેક્ટ ઇન્ટિગ્રેશન પણ આપીએ છીએ. અમારી માઇગ્રેશન ટીમ જટિલ ડેટા ટ્રાન્સફરમાં મદદ કરી શકે છે.',
    mr: 'अगदी. Mera Dhanda कर्मचारी, प्रॉडक्ट्स, ग्राहक आणि ट्रांझॅक्शनसाठी बल्क CSV इम्पोर्ट सपोर्ट करते. आम्ही Tally, Excel आणि लोकप्रिय CRMs सोबत डायरेक्ट इंटिग्रेशन देखील देतो. आमची मायग्रेशन टीम जटिल डेटा ट्रान्सफरमध्ये मदत करू शकते.',
    mwr: 'बिल्कुल। Mera Dhanda कर्मचारी, प्रोडक्ट्स, ग्राहक अर ट्रांज़ैक्शन वास्ते बल्क CSV इम्पोर्ट सपोर्ट करे। म्हे Tally, Excel अर लोकप्रिय CRMs रे साथै डायरेक्ट इंटीग्रेशन भी देवां। म्हारी माइग्रेशन टीम औखा डेटा ट्रांसफर में मदद कर सके।',
  },
  'q3.question': {
    en: 'Does Mera Dhanda work for manufacturing businesses?',
    hi: 'क्या Mera Dhanda मैन्युफैक्चरिंग बिज़नेस के लिए काम करता है?',
    hinglish: 'Kya Mera Dhanda manufacturing business ke liye kaam karta hai?',
    gu: 'શું Mera Dhanda મેન્યુફેક્ચરિંગ બિઝનેસ માટે કામ કરે છે?',
    mr: 'Mera Dhanda मॅन्युफॅक्चरिंग बिझनेससाठी काम करते का?',
    mwr: 'के Mera Dhanda मैन्युफैक्चरिंग बिज़नेस वास्ते काम करे?',
  },
  'q3.answer': {
    en: 'Mera Dhanda was built with manufacturing in mind. Our Production module includes job cards, quality checks, machine maintenance, bulk order tracking, and floor management — everything you need to run your plant efficiently.',
    hi: 'Mera Dhanda मैन्युफैक्चरिंग को ध्यान में रखकर बनाया गया है। हमारे Production मॉड्यूल में जॉब कार्ड, क्वालिटी चेक, मशीन मेंटेनेंस, बल्क ऑर्डर ट्रैकिंग और फ्लोर मैनेजमेंट शामिल हैं — आपके प्लांट को कुशलता से चलाने के लिए सब कुछ।',
    hinglish: 'Mera Dhanda manufacturing ko dhyaan mein rakhke banaya gaya hai. Hamare Production module mein job cards, quality checks, machine maintenance, bulk order tracking aur floor management shaamil hain — aapke plant ko efficiently chalane ke liye sab kuch.',
    gu: 'Mera Dhanda મેન્યુફેક્ચરિંગને ધ્યાનમાં રાખીને બનાવાયું છે. અમારા Production મોડ્યુલમાં જોબ કાર્ડ્સ, ક્વોલિટી ચેક્સ, મશીન મેઇન્ટેનન્સ, બલ્ક ઓર્ડર ટ્રેકિંગ અને ફ્લોર મેનેજમેન્ટ સામેલ છે — તમારા પ્લાન્ટને કાર્યક્ષમ રીતે ચલાવવા માટે બધું જ.',
    mr: 'Mera Dhanda मॅन्युफॅक्चरिंग लक्षात घेऊन बनवले गेले आहे. आमच्या Production मॉड्यूलमध्ये जॉब कार्ड्स, क्वालिटी चेक्स, मशीन मेंटेनन्स, बल्क ऑर्डर ट्रॅकिंग आणि फ्लोर मॅनेजमेंट समाविष्ट आहे — तुमचा प्लांट कार्यक्षमतेने चालवण्यासाठी सर्व काही.',
    mwr: 'Mera Dhanda मैन्युफैक्चरिंग ने ध्यान में राख'+'र बणायो गयो है। म्हारा Production मॉड्यूल में जॉब कार्ड, क्वालिटी चेक, मशीन मेंटेनेंस, बल्क ऑर्डर ट्रैकिंग अर फ्लोर मैनेजमेंट है — आपरे प्लांट ने ढंग सूं चलावण वास्ते सब कुछ।',
  },
  'q4.question': {
    en: 'Is my data secure?',
    hi: 'क्या मेरा डेटा सुरक्षित है?',
    hinglish: 'Kya mera data secure hai?',
    gu: 'શું મારો ડેટા સુરક્ષિત છે?',
    mr: 'माझा डेटा सुरक्षित आहे का?',
    mwr: 'के म्हारो डेटा सुरक्षित है?',
  },
  'q4.answer': {
    en: 'Security is our top priority. We use bank-grade AES-256 encryption, regular automated backups, and comply with ISO 27001 standards. Our servers are hosted on AWS with 99.9% uptime SLA. Two-factor authentication and IP whitelisting are available on all plans.',
    hi: 'सुरक्षा हमारी सबसे बड़ी प्राथमिकता है। हम बैंक-ग्रेड AES-256 एन्क्रिप्शन, नियमित ऑटोमेटेड बैकअप का इस्तेमाल करते हैं, और ISO 27001 मानकों का पालन करते हैं। हमारे सर्वर AWS पर 99.9% अपटाइम SLA के साथ होस्ट किए गए हैं। टू-फैक्टर ऑथेंटिकेशन और IP व्हाइटलिस्टिंग सभी प्लान पर उपलब्ध हैं।',
    hinglish: 'Security hamari sabse badi priority hai. Hum bank-grade AES-256 encryption, regular automated backups use karte hain, aur ISO 27001 standards follow karte hain. Hamare servers AWS par 99.9% uptime SLA ke saath hosted hain. Two-factor authentication aur IP whitelisting sabhi plans par available hain.',
    gu: 'સુરક્ષા અમારી સૌથી મોટી પ્રાથમિકતા છે. અમે બેંક-ગ્રેડ AES-256 એન્ક્રિપ્શન, નિયમિત ઓટોમેટેડ બેકઅપ વાપરીએ છીએ, અને ISO 27001 ધોરણોનું પાલન કરીએ છીએ. અમારા સર્વર્સ AWS પર 99.9% અપટાઇમ SLA સાથે હોસ્ટ થયેલા છે. ટુ-ફેક્ટર ઓથેન્ટિકેશન અને IP વ્હાઇટલિસ્ટિંગ બધા પ્લાન પર ઉપલબ્ધ છે.',
    mr: 'सुरक्षा ही आमची सर्वात मोठी प्राथमिकता आहे. आम्ही बँक-ग्रेड AES-256 एन्क्रिप्शन, नियमित ऑटोमेटेड बॅकअप वापरतो, आणि ISO 27001 मानकांचे पालन करतो. आमचे सर्व्हर AWS वर 99.9% अपटाइम SLA सह होस्ट केलेले आहेत. टू-फॅक्टर ऑथेंटिकेशन आणि IP व्हाइटलिस्टिंग सर्व प्लॅनवर उपलब्ध आहे.',
    mwr: 'सुरक्षा म्हारी सबसूं बड़ी प्राथमिकता है। म्हे बैंक-ग्रेड AES-256 एन्क्रिप्शन, नियमित ऑटोमेटेड बैकअप काम में लेवां, अर ISO 27001 मानक रो पालन करां। म्हारा सर्वर AWS माथै 99.9% अपटाइम SLA रे साथै होस्ट है। टू-फैक्टर ऑथेंटिकेशन अर IP व्हाइटलिस्टिंग सारा प्लान माथै मिले।',
  },
  'q5.question': {
    en: 'Can I add custom modules or fields?',
    hi: 'क्या मैं कस्टम मॉड्यूल या फ़ील्ड जोड़ सकता हूँ?',
    hinglish: 'Kya main custom modules ya fields add kar sakta hoon?',
    gu: 'શું હું કસ્ટમ મોડ્યુલ્સ અથવા ફીલ્ડ્સ ઉમેરી શકું?',
    mr: 'मी कस्टम मॉड्यूल्स किंवा फील्ड्स जोडू शकतो का?',
    mwr: 'के म्हूं कस्टम मॉड्यूल या फील्ड जोड़ सकूं?',
  },
  'q5.answer': {
    en: 'Yes. Enterprise customers can create custom fields, forms, and workflows. Our flexible data model lets you tailor Mera Dhanda to your specific business processes without writing any code.',
    hi: 'हाँ। Enterprise ग्राहक कस्टम फ़ील्ड, फ़ॉर्म और वर्कफ़्लो बना सकते हैं। हमारा फ्लेक्सिबल डेटा मॉडल आपको बिना कोई कोड लिखे Mera Dhanda को अपनी खास बिज़नेस प्रोसेस के मुताबिक ढालने देता है।',
    hinglish: 'Haan. Enterprise customers custom fields, forms aur workflows bana sakte hain. Hamara flexible data model aapko bina koi code likhe Mera Dhanda ko apni specific business processes ke hisaab se tailor karne deta hai.',
    gu: 'હા. Enterprise ગ્રાહકો કસ્ટમ ફીલ્ડ્સ, ફોર્મ્સ અને વર્કફ્લો બનાવી શકે છે. અમારું ફ્લેક્સિબલ ડેટા મોડેલ તમને કોઈ કોડ લખ્યા વગર Mera Dhanda ને તમારી ચોક્કસ બિઝનેસ પ્રોસેસ પ્રમાણે ગોઠવવા દે છે.',
    mr: 'हो. Enterprise ग्राहक कस्टम फील्ड्स, फॉर्म्स आणि वर्कफ्लो तयार करू शकतात. आमचे फ्लेक्सिबल डेटा मॉडेल तुम्हाला कोणताही कोड न लिहिता Mera Dhanda ला तुमच्या विशिष्ट बिझनेस प्रोसेसनुसार जुळवून घेऊ देते.',
    mwr: 'हाँ। Enterprise ग्राहक कस्टम फील्ड, फॉर्म अर वर्कफ्लो बणा सके। म्हारो फ्लेक्सिबल डेटा मॉडल आपने बिना कोई कोड लिख्या Mera Dhanda ने आपरी खास बिज़नेस प्रोसेस रे मुजब ढालण देवे।',
  },
  'q6.question': {
    en: 'What kind of support do you offer?',
    hi: 'आप किस तरह का सपोर्ट देते हैं?',
    hinglish: 'Aap kis tarah ka support dete hain?',
    gu: 'તમે કેવા પ્રકારનો સપોર્ટ આપો છો?',
    mr: 'तुम्ही कोणत्या प्रकारचा सपोर्ट देता?',
    mwr: 'आप कांई तरै रो सपोर्ट देवो?',
  },
  'q6.answer': {
    en: 'We offer email support on Starter, priority chat and email on Growth, and a dedicated account manager with phone support on Enterprise. All customers get access to our comprehensive knowledge base and video tutorials.',
    hi: 'हम Starter पर ईमेल सपोर्ट, Growth पर प्रायोरिटी चैट और ईमेल, और Enterprise पर फ़ोन सपोर्ट के साथ डेडिकेटेड अकाउंट मैनेजर देते हैं। सभी ग्राहकों को हमारे व्यापक नॉलेज बेस और वीडियो ट्यूटोरियल का एक्सेस मिलता है।',
    hinglish: 'Hum Starter par email support, Growth par priority chat aur email, aur Enterprise par phone support ke saath dedicated account manager dete hain. Saare customers ko hamare comprehensive knowledge base aur video tutorials ka access milta hai.',
    gu: 'અમે Starter પર ઈમેલ સપોર્ટ, Growth પર પ્રાયોરિટી ચેટ અને ઈમેલ, અને Enterprise પર ફોન સપોર્ટ સાથે ડેડિકેટેડ એકાઉન્ટ મેનેજર આપીએ છીએ. બધા ગ્રાહકોને અમારા વ્યાપક નોલેજ બેઝ અને વિડિયો ટ્યુટોરિયલ્સનો એક્સેસ મળે છે.',
    mr: 'आम्ही Starter वर ईमेल सपोर्ट, Growth वर प्रायोरिटी चॅट आणि ईमेल, आणि Enterprise वर फोन सपोर्टसह डेडिकेटेड अकाउंट मॅनेजर देतो. सर्व ग्राहकांना आमच्या सर्वसमावेशक नॉलेज बेस आणि व्हिडिओ ट्युटोरियल्सचा अ‍ॅक्सेस मिळतो.',
    mwr: 'म्हे Starter माथै ईमेल सपोर्ट, Growth माथै प्रायोरिटी चैट अर ईमेल, अर Enterprise माथै फ़ोन सपोर्ट रे साथै डेडिकेटेड अकाउंट मैनेजर देवां। सारा ग्राहक ने म्हारा पूरा नॉलेज बेस अर वीडियो ट्यूटोरियल रो एक्सेस मिले।',
  },
};

const faqs = [
  { questionKey: 'q1.question', answerKey: 'q1.answer' },
  { questionKey: 'q2.question', answerKey: 'q2.answer' },
  { questionKey: 'q3.question', answerKey: 'q3.answer' },
  { questionKey: 'q4.question', answerKey: 'q4.answer' },
  { questionKey: 'q5.question', answerKey: 'q5.answer' },
  { questionKey: 'q6.question', answerKey: 'q6.answer' },
];

export default function FAQ() {
  const t = useT(STRINGS);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="faq" className="w-full bg-[#FBF6F1] py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#2B1B12] mb-6">
            {t('heading.pre')} <span className="text-themeGreen-600 italic">{t('heading.accent')}</span>
          </h2>
          <p className="text-lg text-[#7A6453] max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === i
                ? 'border-themeGreen-200 shadow-xl shadow-themeGreen-500/5'
                : 'border-gray-100 hover:border-themeGreen-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === i ? 'text-themeGreen-600' : 'text-[#2B1B12]'
                }`}>
                  {t(faq.questionKey)}
                </span>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-themeGreen-600 text-white rotate-180'
                      : 'bg-gray-50 text-gray-400 group-hover:bg-themeGreen-50 group-hover:text-themeGreen-600'
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-6">
                      <div className="w-full h-px bg-gray-50 mb-6" />
                      <p className="text-[#7A6453] leading-relaxed text-[16px]">
                        {t(faq.answerKey)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
