import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Users, Building2, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

import { API_BASE_URL } from '../apiConfig';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'success.title': { en: 'Request Received!', hi: 'अनुरोध मिल गया!', hinglish: 'Request mil gaya!', gu: 'વિનંતી મળી ગઈ!', mr: 'विनंती मिळाली!', mwr: 'रिक्वेस्ट मिल गई!' },
  'success.body.pre': { en: 'Our solution expert will call you within ', hi: 'हमारा सॉल्यूशन एक्सपर्ट आपको ', hinglish: 'Hamara solution expert aapko ', gu: 'અમારો સોલ્યુશન એક્સપર્ટ તમને ', mr: 'आमचा सोल्युशन एक्सपर्ट तुम्हाला ', mwr: 'म्हारो सॉल्यूशन एक्सपर्ट थांने ' },
  'success.body.time': { en: '30 minutes', hi: '30 मिनट', hinglish: '30 minutes', gu: '30 મિનિટ', mr: '30 मिनिटे', mwr: '30 मिनट' },
  'success.body.mid': { en: ' to schedule your personalized product ', hi: ' में कॉल करके आपका पर्सनलाइज़्ड प्रोडक्ट ', hinglish: ' mein call karke aapka personalized product ', gu: ' માં કૉલ કરીને તમારો પર્સનલાઇઝ્ડ પ્રોડક્ટ ', mr: ' मध्ये कॉल करून तुमचा पर्सनलाइझ्ड प्रोडक्ट ', mwr: ' में कॉल करके थांरो पर्सनलाइज्ड प्रोडक्ट ' },
  'success.body.demo': { en: 'Demo', hi: 'Demo', hinglish: 'Demo', gu: 'Demo', mr: 'Demo', mwr: 'Demo' },
  'success.body.post': { en: '.', hi: ' शेड्यूल करने के लिए कॉल करेगा।', hinglish: ' schedule karne ke liye call karega.', gu: ' શેડ્યૂલ કરવા માટે કૉલ કરશે.', mr: ' शेड्यूल करण्यासाठी कॉल करेल.', mwr: ' शेड्यूल करण सारू कॉल करसी.' },
  'success.backHome': { en: 'Back to Home', hi: 'होम पर वापस जाएं', hinglish: 'Home par wapas jao', gu: 'હોમ પર પાછા જાઓ', mr: 'होमवर परत जा', mwr: 'होम पर वापस जावो' },

  'badge': { en: 'Free Demo Booking', hi: 'फ़्री डेमो बुकिंग', hinglish: 'Free Demo Booking', gu: 'ફ્રી ડેમો બુકિંગ', mr: 'मोफत डेमो बुकिंग', mwr: 'फ्री डेमो बुकिंग' },
  'hero.pre': { en: 'See Mera Dhanda ', hi: 'Mera Dhanda देखें ', hinglish: 'Mera Dhanda dekho ', gu: 'Mera Dhanda જુઓ ', mr: 'Mera Dhanda पाहा ', mwr: 'Mera Dhanda देखो ' },
  'hero.accent': { en: 'in action.', hi: 'एक्शन में।', hinglish: 'action mein.', gu: 'એક્શનમાં.', mr: 'अॅक्शनमध्ये.', mwr: 'एक्शन में.' },
  'hero.sub': { en: "Book your personalized product demo. We'll show you how to automate your specific business workflows and solve your bottlenecks.", hi: 'अपना पर्सनलाइज़्ड प्रोडक्ट डेमो बुक करें। हम आपको दिखाएंगे कि अपने बिज़नेस वर्कफ़्लो को कैसे ऑटोमेट करें और रुकावटों को कैसे दूर करें।', hinglish: 'Apna personalized product demo book karo. Hum aapko dikhayenge ki apne business workflows ko kaise automate karein aur bottlenecks kaise solve karein.', gu: 'તમારો પર્સનલાઇઝ્ડ પ્રોડક્ટ ડેમો બુક કરો. અમે તમને બતાવીશું કે તમારા બિઝનેસ વર્કફ્લોને કેવી રીતે ઑટોમેટ કરવા અને અડચણો કેવી રીતે દૂર કરવી.', mr: 'तुमचा पर्सनलाइझ्ड प्रोडक्ट डेमो बुक करा. आम्ही तुम्हाला दाखवू की तुमचे बिझनेस वर्कफ्लो कसे ऑटोमेट करायचे आणि अडथळे कसे दूर करायचे.', mwr: 'थांरो पर्सनलाइज्ड प्रोडक्ट डेमो बुक करो. म्हे थांने बतावांगा के थांरा बिजनेस वर्कफ्लो कांई तरै ऑटोमेट करणा अर रुकावटां कांई तरै दूर करणी.' },

  'feat.walkthrough.title': { en: 'Personalized Walkthrough', hi: 'पर्सनलाइज़्ड वॉकथ्रू', hinglish: 'Personalized Walkthrough', gu: 'પર્સનલાઇઝ્ડ વૉકથ્રૂ', mr: 'पर्सनलाइझ्ड वॉकथ्रू', mwr: 'पर्सनलाइज्ड वॉकथ्रू' },
  'feat.walkthrough.desc': { en: 'A 1-on-1 session with our experts tailored to your industry.', hi: 'आपकी इंडस्ट्री के हिसाब से हमारे एक्सपर्ट्स के साथ 1-on-1 सेशन।', hinglish: 'Aapki industry ke hisaab se hamare experts ke saath 1-on-1 session.', gu: 'તમારી ઇન્ડસ્ટ્રી મુજબ અમારા એક્સપર્ટ્સ સાથે 1-on-1 સેશન.', mr: 'तुमच्या इंडस्ट्रीनुसार आमच्या एक्सपर्ट्ससोबत 1-on-1 सेशन.', mwr: 'थांरी इंडस्ट्री रे हिसाब सूं म्हारा एक्सपर्ट्स रे साथै 1-on-1 सेशन.' },
  'feat.roi.title': { en: 'ROI Analysis', hi: 'ROI विश्लेषण', hinglish: 'ROI Analysis', gu: 'ROI એનાલિસિસ', mr: 'ROI विश्लेषण', mwr: 'ROI एनालिसिस' },
  'feat.roi.desc': { en: 'See exactly how much time and money you can save with automation.', hi: 'देखें कि ऑटोमेशन से आप कितना समय और पैसा बचा सकते हैं।', hinglish: 'Dekho ki automation se aap kitna time aur paisa bacha sakte ho.', gu: 'જુઓ કે ઑટોમેશનથી તમે કેટલો સમય અને પૈસા બચાવી શકો છો.', mr: 'पाहा की ऑटोमेशनने तुम्ही किती वेळ आणि पैसा वाचवू शकता.', mwr: 'देखो के ऑटोमेशन सूं थे कितरो टैम अर पईसो बचा सको.' },
  'feat.workflow.title': { en: 'Custom Workflow Design', hi: 'कस्टम वर्कफ़्लो डिज़ाइन', hinglish: 'Custom Workflow Design', gu: 'કસ્ટમ વર્કફ્લો ડિઝાઇન', mr: 'कस्टम वर्कफ्लो डिझाइन', mwr: 'कस्टम वर्कफ्लो डिजाइन' },
  'feat.workflow.desc': { en: 'We will map your current processes to the platform during the demo.', hi: 'डेमो के दौरान हम आपकी मौजूदा प्रक्रियाओं को प्लेटफ़ॉर्म से मैप करेंगे।', hinglish: 'Demo ke dauraan hum aapki current processes ko platform se map karenge.', gu: 'ડેમો દરમિયાન અમે તમારી હાલની પ્રક્રિયાઓને પ્લેટફોર્મ સાથે મેપ કરીશું.', mr: 'डेमो दरम्यान आम्ही तुमच्या सध्याच्या प्रक्रिया प्लॅटफॉर्मशी मॅप करू.', mwr: 'डेमो रै दौरान म्हे थांरी मौजूदा प्रोसेस ने प्लेटफॉर्म सूं मैप करांगा.' },

  'form.title': { en: 'Ready for a demo?', hi: 'डेमो के लिए तैयार हैं?', hinglish: 'Demo ke liye ready ho?', gu: 'ડેમો માટે તૈયાર છો?', mr: 'डेमोसाठी तयार आहात?', mwr: 'डेमो सारू तैयार हो?' },
  'form.error': { en: 'Something went wrong. Please try again.', hi: 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें।', hinglish: 'Kuch gadbad ho gayi. Please dobara try karein.', gu: 'કંઈક ખોટું થયું. કૃપા કરીને ફરી પ્રયાસ કરો.', mr: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.', mwr: 'कुछ गड़बड़ हो गी. किरपा करके फेर सूं कोशिश करो.' },

  'form.fullName': { en: 'Full Name*', hi: 'पूरा नाम*', hinglish: 'Full Name*', gu: 'પૂરું નામ*', mr: 'पूर्ण नाव*', mwr: 'पूरो नाम*' },
  'form.fullName.ph': { en: 'John Doe', hi: 'John Doe', hinglish: 'John Doe', gu: 'John Doe', mr: 'John Doe', mwr: 'John Doe' },
  'form.phone': { en: 'Phone Number*', hi: 'फ़ोन नंबर*', hinglish: 'Phone Number*', gu: 'ફોન નંબર*', mr: 'फोन नंबर*', mwr: 'फोन नंबर*' },
  'form.company': { en: 'Company Name*', hi: 'कंपनी का नाम*', hinglish: 'Company Name*', gu: 'કંપનીનું નામ*', mr: 'कंपनीचे नाव*', mwr: 'कंपनी रो नाम*' },
  'form.company.ph': { en: 'Acme Industries', hi: 'Acme Industries', hinglish: 'Acme Industries', gu: 'Acme Industries', mr: 'Acme Industries', mwr: 'Acme Industries' },
  'form.industry': { en: 'Industry Type*', hi: 'इंडस्ट्री टाइप*', hinglish: 'Industry Type*', gu: 'ઇન્ડસ્ટ્રી ટાઇપ*', mr: 'इंडस्ट्री प्रकार*', mwr: 'इंडस्ट्री टाइप*' },
  'form.industry.manufacturing': { en: 'Manufacturing', hi: 'मैन्युफैक्चरिंग', hinglish: 'Manufacturing', gu: 'મેન્યુફેક્ચરિંગ', mr: 'मॅन्युफॅक्चरिंग', mwr: 'मैन्युफैक्चरिंग' },
  'form.industry.wholesale': { en: 'Wholesale/Distribution', hi: 'होलसेल/डिस्ट्रिब्यूशन', hinglish: 'Wholesale/Distribution', gu: 'હોલસેલ/ડિસ્ટ્રિબ્યુશન', mr: 'होलसेल/डिस्ट्रिब्युशन', mwr: 'होलसेल/डिस्ट्रिब्यूशन' },
  'form.industry.retail': { en: 'Retail Shop', hi: 'रिटेल शॉप', hinglish: 'Retail Shop', gu: 'રિટેલ શોપ', mr: 'रिटेल शॉप', mwr: 'रिटेल शॉप' },
  'form.industry.service': { en: 'Service Business', hi: 'सर्विस बिज़नेस', hinglish: 'Service Business', gu: 'સર્વિસ બિઝનેસ', mr: 'सर्विस बिझनेस', mwr: 'सर्विस बिजनेस' },
  'form.industry.other': { en: 'Other', hi: 'अन्य', hinglish: 'Other', gu: 'અન્ય', mr: 'इतर', mwr: 'दूजो' },

  'form.size': { en: 'Size of your business?*', hi: 'आपके बिज़नेस का साइज़?*', hinglish: 'Aapke business ka size?*', gu: 'તમારા બિઝનેસનું કદ?*', mr: 'तुमच्या बिझनेसचा आकार?*', mwr: 'थांरा बिजनेस रो साइज?*' },
  'form.size.select': { en: 'Select Size', hi: 'साइज़ चुनें', hinglish: 'Size chuno', gu: 'કદ પસંદ કરો', mr: 'आकार निवडा', mwr: 'साइज चुणो' },
  'form.size.1': { en: '1-10 Employees', hi: '1-10 कर्मचारी', hinglish: '1-10 Employees', gu: '1-10 કર્મચારી', mr: '1-10 कर्मचारी', mwr: '1-10 कर्मचारी' },
  'form.size.11': { en: '11-50 Employees', hi: '11-50 कर्मचारी', hinglish: '11-50 Employees', gu: '11-50 કર્મચારી', mr: '11-50 कर्मचारी', mwr: '11-50 कर्मचारी' },
  'form.size.51': { en: '51-200 Employees', hi: '51-200 कर्मचारी', hinglish: '51-200 Employees', gu: '51-200 કર્મચારી', mr: '51-200 कर्मचारी', mwr: '51-200 कर्मचारी' },
  'form.size.200': { en: '200+ Employees', hi: '200+ कर्मचारी', hinglish: '200+ Employees', gu: '200+ કર્મચારી', mr: '200+ कर्मचारी', mwr: '200+ कर्मचारी' },

  'form.language': { en: 'Language Preference?*', hi: 'भाषा प्राथमिकता?*', hinglish: 'Language Preference?*', gu: 'ભાષા પસંદગી?*', mr: 'भाषेची पसंती?*', mwr: 'भाषा री पसंद?*' },
  'form.language.select': { en: 'Select Language', hi: 'भाषा चुनें', hinglish: 'Language chuno', gu: 'ભાષા પસંદ કરો', mr: 'भाषा निवडा', mwr: 'भाषा चुणो' },
  'form.language.hindi': { en: 'Hindi', hi: 'हिंदी', hinglish: 'Hindi', gu: 'હિન્દી', mr: 'हिंदी', mwr: 'हिंदी' },
  'form.language.english': { en: 'English', hi: 'अंग्रेज़ी', hinglish: 'English', gu: 'અંગ્રેજી', mr: 'इंग्रजी', mwr: 'अंग्रेजी' },
  'form.language.marathi': { en: 'Marathi', hi: 'मराठी', hinglish: 'Marathi', gu: 'મરાઠી', mr: 'मराठी', mwr: 'मराठी' },
  'form.language.gujarati': { en: 'Gujarati', hi: 'गुजराती', hinglish: 'Gujarati', gu: 'ગુજરાતી', mr: 'गुजराती', mwr: 'गुजराती' },
  'form.language.other': { en: 'Other', hi: 'अन्य', hinglish: 'Other', gu: 'અન્ય', mr: 'इतर', mwr: 'दूजो' },

  'form.sales': { en: 'Monthly Credit Sales?*', hi: 'मासिक उधार बिक्री?*', hinglish: 'Monthly Credit Sales?*', gu: 'માસિક ઉધાર વેચાણ?*', mr: 'मासिक उधार विक्री?*', mwr: 'महीनै री उधार बिक्री?*' },
  'form.sales.select': { en: 'Select Range', hi: 'रेंज चुनें', hinglish: 'Range chuno', gu: 'રેન્જ પસંદ કરો', mr: 'रेंज निवडा', mwr: 'रेंज चुणो' },
  'form.sales.below5': { en: 'Below ₹5 Lakhs', hi: '₹5 लाख से कम', hinglish: '₹5 Lakhs se kam', gu: '₹5 લાખથી ઓછું', mr: '₹5 लाखांपेक्षा कमी', mwr: '₹5 लाख सूं कम' },
  'form.sales.5to20': { en: '₹5 Lakhs - ₹20 Lakhs', hi: '₹5 लाख - ₹20 लाख', hinglish: '₹5 Lakhs - ₹20 Lakhs', gu: '₹5 લાખ - ₹20 લાખ', mr: '₹5 लाख - ₹20 लाख', mwr: '₹5 लाख - ₹20 लाख' },
  'form.sales.20to1cr': { en: '₹20 Lakhs - ₹1 Crore', hi: '₹20 लाख - ₹1 करोड़', hinglish: '₹20 Lakhs - ₹1 Crore', gu: '₹20 લાખ - ₹1 કરોડ', mr: '₹20 लाख - ₹1 कोटी', mwr: '₹20 लाख - ₹1 करोड़' },
  'form.sales.above1cr': { en: 'Above ₹1 Crore', hi: '₹1 करोड़ से ज़्यादा', hinglish: '₹1 Crore se zyada', gu: '₹1 કરોડથી વધુ', mr: '₹1 कोटीपेक्षा जास्त', mwr: '₹1 करोड़ सूं ज्यादा' },

  'form.submit': { en: 'Confirm My Demo Booking', hi: 'मेरी डेमो बुकिंग कन्फर्म करें', hinglish: 'Meri demo booking confirm karein', gu: 'મારી ડેમો બુકિંગ કન્ફર્મ કરો', mr: 'माझी डेमो बुकिंग कन्फर्म करा', mwr: 'म्हारी डेमो बुकिंग कन्फर्म करो' },
  'form.terms': { en: 'By clicking confirm, you agree to our Terms of Service and Privacy Policy.', hi: 'कन्फर्म पर क्लिक करके, आप हमारी सर्विस की शर्तों और प्राइवेसी पॉलिसी से सहमत होते हैं।', hinglish: 'Confirm par click karke, aap hamari Terms of Service aur Privacy Policy se agree karte ho.', gu: 'કન્ફર્મ પર ક્લિક કરીને, તમે અમારી સર્વિસની શરતો અને પ્રાઇવસી પોલિસી સાથે સંમત થાઓ છો.', mr: 'कन्फर्मवर क्लिक करून, तुम्ही आमच्या सर्विसच्या अटी आणि प्रायव्हसी पॉलिसीशी सहमत होता.', mwr: 'कन्फर्म पर क्लिक करके, थे म्हारी सर्विस री शर्तां अर प्राइवेसी पॉलिसी सूं सहमत हो.' },
};

const features = [
  { icon: ShieldCheck, titleKey: 'feat.walkthrough.title', descKey: 'feat.walkthrough.desc' },
  { icon: Users, titleKey: 'feat.roi.title', descKey: 'feat.roi.desc' },
  { icon: Building2, titleKey: 'feat.workflow.title', descKey: 'feat.workflow.desc' }
];

export default function BookingPage() {
  const t = useT(STRINGS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    companyName: '',
    industryType: 'Manufacturing',
    businessSize: '',
    languagePreference: '',
    monthlySales: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${API_BASE_URL}/api/bookings`, formData);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(t('form.error'));
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 bg-[#FBF6F1] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-themeGreen-50"
        >
          <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">{t('success.title')}</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            {t('success.body.pre')}<span className="text-themeGreen-600 font-bold">{t('success.body.time')}</span>{t('success.body.mid')}<span className="text-themeGreen-600 font-bold">{t('success.body.demo')}</span>{t('success.body.post')}
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-colors"
          >
            {t('success.backHome')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FBF6F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div className="pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
              {t('badge')}
            </span>
            <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
              {t('hero.pre')}<br/>
              <span className="text-themeGreen-600 italic">{t('hero.accent')}</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-12">
              {t('hero.sub')}
            </p>

            <div className="space-y-8">
              {features.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-themeGreen-600">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-1">{t(item.titleKey)}</h3>
                    <p className="text-gray-500 leading-snug">{t(item.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative"
        >
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-themeGreen-600 rounded-full flex items-center justify-center text-white rotate-12 shadow-xl">
             <Calendar size={40} />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-8">{t('form.title')}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-bold">
                {error}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('form.fullName')}</label>
                <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder={t('form.fullName.ph')} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('form.phone')}</label>
                <input required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('form.company')}</label>
                <input required name="companyName" value={formData.companyName} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder={t('form.company.ph')} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('form.industry')}</label>
                <select name="industryType" value={formData.industryType} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all appearance-none cursor-pointer">
                  <option value="Manufacturing">{t('form.industry.manufacturing')}</option>
                  <option value="Wholesale/Distribution">{t('form.industry.wholesale')}</option>
                  <option value="Retail Shop">{t('form.industry.retail')}</option>
                  <option value="Service Business">{t('form.industry.service')}</option>
                  <option value="Other">{t('form.industry.other')}</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('form.size')}</label>
                <select required name="businessSize" value={formData.businessSize} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all appearance-none cursor-pointer">
                  <option value="">{t('form.size.select')}</option>
                  <option value="1-10 Employees">{t('form.size.1')}</option>
                  <option value="11-50 Employees">{t('form.size.11')}</option>
                  <option value="51-200 Employees">{t('form.size.51')}</option>
                  <option value="200+ Employees">{t('form.size.200')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('form.language')}</label>
                <select required name="languagePreference" value={formData.languagePreference} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all appearance-none cursor-pointer">
                  <option value="">{t('form.language.select')}</option>
                  <option value="Hindi">{t('form.language.hindi')}</option>
                  <option value="English">{t('form.language.english')}</option>
                  <option value="Marathi">{t('form.language.marathi')}</option>
                  <option value="Gujarati">{t('form.language.gujarati')}</option>
                  <option value="Other">{t('form.language.other')}</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('form.sales')}</label>
              <select required name="monthlySales" value={formData.monthlySales} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all appearance-none cursor-pointer">
                <option value="">{t('form.sales.select')}</option>
                <option value="Below ₹5 Lakhs">{t('form.sales.below5')}</option>
                <option value="₹5 Lakhs - ₹20 Lakhs">{t('form.sales.5to20')}</option>
                <option value="₹20 Lakhs - ₹1 Crore">{t('form.sales.20to1cr')}</option>
                <option value="Above ₹1 Crore">{t('form.sales.above1cr')}</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-[#C05621] text-white font-black text-lg rounded-2xl hover:bg-themeGreen-700 transition-all shadow-xl shadow-themeGreen-500/30 flex items-center justify-center gap-3 group disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  {t('form.submit')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              {t('form.terms')}
            </p>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
