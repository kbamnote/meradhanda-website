import { motion, type Variants } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'heading.pre': {
    en: 'Get started in ',
    hi: 'शुरुआत करें ',
    hinglish: 'Shuru karein ',
    gu: 'શરૂઆત કરો ',
    mr: 'सुरुवात करा ',
    mwr: 'चालू करो ',
  },
  'heading.accent': {
    en: 'three simple steps.',
    hi: 'तीन आसान स्टेप्स में।',
    hinglish: 'teen simple steps mein.',
    gu: 'ત્રણ સરળ સ્ટેપ્સમાં.',
    mr: 'तीन सोप्या स्टेप्समध्ये.',
    mwr: 'तीन सोरा स्टेप्स में।',
  },
  'heading.post': {
    en: '',
    hi: '',
    hinglish: '',
    gu: '',
    mr: '',
    mwr: '',
  },
  'subtitle': {
    en: 'From signup to full operations in under an hour. No complex IT integration required.',
    hi: 'साइनअप से लेकर पूरा काम शुरू करने तक एक घंटे से भी कम समय। कोई जटिल IT इंटीग्रेशन की ज़रूरत नहीं।',
    hinglish: 'Signup se lekar pura operation start karne tak ek ghante se bhi kam time. Koi complex IT integration ki zaroorat nahi.',
    gu: 'સાઇનઅપથી લઈને સંપૂર્ણ ઓપરેશન સુધી એક કલાકથી પણ ઓછા સમયમાં. કોઈ જટિલ IT ઇન્ટિગ્રેશનની જરૂર નથી.',
    mr: 'साइनअपपासून ते संपूर्ण कामकाजापर्यंत एका तासापेक्षा कमी वेळात. कोणतेही क्लिष्ट IT इंटिग्रेशन आवश्यक नाही.',
    mwr: 'साइनअप सूं लेय पूरो काम चालू करण तक एक घंटा सूं भी कम बखत। कोई अड़कीली IT इंटीग्रेशन री जरूरत कोनी।',
  },
  'step.1.title': {
    en: 'Set up your workspace in minutes',
    hi: 'मिनटों में अपना वर्कस्पेस सेट करें',
    hinglish: 'Minute mein apna workspace set karein',
    gu: 'મિનિટોમાં તમારું વર્કસ્પેસ સેટ કરો',
    mr: 'काही मिनिटांत तुमचे वर्कस्पेस सेट करा',
    mwr: 'मिनटां में आपणो वर्कस्पेस सेट करो',
  },
  'step.1.desc': {
    en: 'Add your company, teams, and preferences. Import your existing data with our guided setup wizard.',
    hi: 'अपनी कंपनी, टीमें और प्राथमिकताएं जोड़ें। हमारे गाइडेड सेटअप विज़ार्ड से अपना मौजूदा डेटा इम्पोर्ट करें।',
    hinglish: 'Apni company, teams aur preferences add karein. Hamare guided setup wizard se apna existing data import karein.',
    gu: 'તમારી કંપની, ટીમો અને પસંદગીઓ ઉમેરો. અમારા ગાઇડેડ સેટઅપ વિઝાર્ડ વડે તમારો હાલનો ડેટા ઇમ્પોર્ટ કરો.',
    mr: 'तुमची कंपनी, टीम्स आणि प्राधान्ये जोडा. आमच्या गाइडेड सेटअप विझार्डने तुमचा सध्याचा डेटा इम्पोर्ट करा.',
    mwr: 'आपणी कंपनी, टीमां अर पसंदां जोड़ो। म्हारे गाइडेड सेटअप विज़ार्ड सूं आपणो मौजूदा डेटा इम्पोर्ट करो।',
  },
  'step.2.title': {
    en: 'Invite your team and assign roles',
    hi: 'अपनी टीम को इनवाइट करें और रोल असाइन करें',
    hinglish: 'Apni team ko invite karein aur roles assign karein',
    gu: 'તમારી ટીમને આમંત્રિત કરો અને રોલ સોંપો',
    mr: 'तुमच्या टीमला आमंत्रित करा आणि रोल नेमा',
    mwr: 'आपणी टीम नै इनवाइट करो अर रोल सौंपो',
  },
  'step.2.desc': {
    en: 'Send invites, define permissions, and get everyone onboard with role-based access control.',
    hi: 'इनवाइट भेजें, परमिशन तय करें, और रोल-बेस्ड एक्सेस कंट्रोल के साथ सबको जोड़ें।',
    hinglish: 'Invites bhejein, permissions define karein, aur role-based access control ke saath sabko onboard karein.',
    gu: 'આમંત્રણ મોકલો, પરમિશન નક્કી કરો, અને રોલ-બેઝ્ડ એક્સેસ કંટ્રોલ સાથે દરેકને જોડો.',
    mr: 'आमंत्रणे पाठवा, परवानग्या ठरवा, आणि रोल-बेस्ड अॅक्सेस कंट्रोलसह सर्वांना जोडा.',
    mwr: 'इनवाइट भेजो, परमिशन तय करो, अर रोल-बेस्ड एक्सेस कंट्रोल सूं सगळां नै जोड़ो।',
  },
  'step.3.title': {
    en: 'Start managing — everything in one place',
    hi: 'मैनेज करना शुरू करें — सब कुछ एक ही जगह',
    hinglish: 'Manage karna shuru karein — sab kuch ek hi jagah',
    gu: 'મેનેજ કરવાનું શરૂ કરો — બધું જ એક જ જગ્યાએ',
    mr: 'व्यवस्थापन सुरू करा — सर्व काही एकाच ठिकाणी',
    mwr: 'मैनेज करणो चालू करो — सगळो कुछ एकीच जगां',
  },
  'step.3.desc': {
    en: 'Run HR, sales, production, and accounting from a single dashboard. Watch productivity soar.',
    hi: 'एक ही dashboard से HR, सेल्स, प्रोडक्शन और अकाउंटिंग चलाएं। प्रोडक्टिविटी को बढ़ते देखें।',
    hinglish: 'Ek hi dashboard se HR, sales, production aur accounting chalayein. Productivity ko badhte dekhein.',
    gu: 'એક જ dashboard પરથી HR, સેલ્સ, પ્રોડક્શન અને એકાઉન્ટિંગ ચલાવો. પ્રોડક્ટિવિટી વધતી જુઓ.',
    mr: 'एकाच dashboard वरून HR, सेल्स, प्रोडक्शन आणि अकाउंटिंग चालवा. उत्पादकता वाढताना पहा.',
    mwr: 'एकीच dashboard सूं HR, सेल्स, प्रोडक्शन अर अकाउंटिंग चलाओ। प्रोडक्टिविटी नै बधतां देखो।',
  },
};

const steps = [
  {
    number: '1',
    titleKey: 'step.1.title',
    descKey: 'step.1.desc',
  },
  {
    number: '2',
    titleKey: 'step.2.title',
    descKey: 'step.2.desc',
  },
  {
    number: '3',
    titleKey: 'step.3.title',
    descKey: 'step.3.desc',
  },
];

export default function HowItWorks() {
  const t = useT(STRINGS);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-white py-32 relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
         <div className="absolute top-10 left-10 w-4 h-4 bg-themeGreen-600 rounded-full" />
         <div className="absolute bottom-20 right-20 w-8 h-8 bg-themeGreen-600 rounded-full" />
         <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-themeGreen-600 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#2B1B12] mb-6">
            {t('heading.pre')}<span className="text-themeGreen-600 italic">{t('heading.accent')}</span>{t('heading.post')}
          </h2>
          <p className="text-lg text-[#7A6453] max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12 relative"
        >
          {/* Progress Line (Animated on Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gray-100 overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: "0%" }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
               className="w-full h-full bg-gradient-to-r from-blue-400 to-themeGreen-600"
             />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={stepVariants}
              className="text-center relative group"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-[2rem] bg-white border-2 border-gray-100 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:border-themeGreen-500 group-hover:shadow-2xl group-hover:shadow-themeGreen-500/10 group-hover:-translate-y-2">
                <span className="text-4xl font-black text-themeGreen-600">
                  {step.number}
                </span>
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-themeGreen-500/5 animate-ping opacity-0 group-hover:opacity-100" />
              </div>
              
              <h3 className="text-xl font-bold text-[#2B1B12] mb-4">
                {t(step.titleKey)}
              </h3>
              <p className="text-[#7A6453] leading-relaxed max-w-xs mx-auto">
                {t(step.descKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
