import { useState } from 'react';
import { Send, User, Mail, Phone, Building2 } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'success.title': {
    en: 'Request Received!',
    hi: 'अनुरोध मिल गया!',
    hinglish: 'Request mil gayi!',
    gu: 'વિનંતી મળી ગઈ!',
    mr: 'विनंती मिळाली!',
    mwr: 'रिक्वेस्ट मिल गी!',
  },
  'success.desc': {
    en: 'Our experts will call you within 24 hours to schedule your live demo.',
    hi: 'हमारे एक्सपर्ट्स आपकी लाइव डेमो शेड्यूल करने के लिए 24 घंटे के भीतर आपको कॉल करेंगे।',
    hinglish: 'Hamare experts aapki live demo schedule karne ke liye 24 ghante ke andar aapko call karenge.',
    gu: 'અમારા એક્સપર્ટ્સ તમારી લાઈવ ડેમો શેડ્યૂલ કરવા માટે 24 કલાકમાં તમને કૉલ કરશે.',
    mr: 'आमचे तज्ज्ञ तुमची लाइव्ह डेमो शेड्यूल करण्यासाठी 24 तासांत तुम्हाला कॉल करतील.',
    mwr: 'म्हारा एक्सपर्ट थारी लाइव डेमो शेड्यूल करण खातर 24 घंटा मांय थांने कॉल करसी.',
  },
  'form.title': {
    en: 'Book a Free Live Demo',
    hi: 'फ़्री लाइव डेमो बुक करें',
    hinglish: 'Free live demo book karein',
    gu: 'ફ્રી લાઈવ ડેમો બુક કરો',
    mr: 'मोफत लाइव्ह डेमो बुक करा',
    mwr: 'फ्री लाइव डेमो बुक करो',
  },
  'form.subtitle': {
    en: 'Get a personalized walkthrough of Mera Dhanda tailored to your business needs.',
    hi: 'अपनी बिज़नेस ज़रूरतों के मुताबिक Mera Dhanda का पर्सनलाइज़्ड वॉकथ्रू पाएं।',
    hinglish: 'Apni business needs ke hisaab se Mera Dhanda ka personalized walkthrough paayein.',
    gu: 'તમારી બિઝનેસ જરૂરિયાતો અનુસાર Mera Dhanda નો પર્સનલાઈઝ્ડ વૉકથ્રૂ મેળવો.',
    mr: 'तुमच्या व्यवसायाच्या गरजेनुसार Mera Dhanda चा पर्सनलाइज्ड वॉकथ्रू मिळवा.',
    mwr: 'थारी बिज़नेस जरूरत मुजब Mera Dhanda रो पर्सनलाइज्ड वॉकथ्रू पावो.',
  },
  'form.fullName': {
    en: 'Full Name',
    hi: 'पूरा नाम',
    hinglish: 'Full Name',
    gu: 'પૂરું નામ',
    mr: 'पूर्ण नाव',
    mwr: 'पूरो नाम',
  },
  'form.phone': {
    en: 'Phone Number',
    hi: 'फ़ोन नंबर',
    hinglish: 'Phone Number',
    gu: 'ફોન નંબર',
    mr: 'फोन नंबर',
    mwr: 'फोन नंबर',
  },
  'form.email': {
    en: 'Work Email',
    hi: 'वर्क ईमेल',
    hinglish: 'Work Email',
    gu: 'વર્ક ઈમેલ',
    mr: 'वर्क ईमेल',
    mwr: 'वर्क ईमेल',
  },
  'form.bizType.placeholder': {
    en: 'Select Business Type',
    hi: 'बिज़नेस टाइप चुनें',
    hinglish: 'Business type chunein',
    gu: 'બિઝનેસ ટાઈપ પસંદ કરો',
    mr: 'व्यवसाय प्रकार निवडा',
    mwr: 'बिज़नेस टाइप चुणो',
  },
  'form.bizType.manufacturing': {
    en: 'Manufacturing',
    hi: 'मैन्युफैक्चरिंग',
    hinglish: 'Manufacturing',
    gu: 'મેન્યુફેક્ચરિંગ',
    mr: 'उत्पादन',
    mwr: 'मैन्युफैक्चरिंग',
  },
  'form.bizType.wholesale': {
    en: 'Wholesale/Distribution',
    hi: 'होलसेल/डिस्ट्रिब्यूशन',
    hinglish: 'Wholesale/Distribution',
    gu: 'હોલસેલ/ડિસ્ટ્રિબ્યુશન',
    mr: 'घाऊक/वितरण',
    mwr: 'होलसेल/डिस्ट्रिब्यूशन',
  },
  'form.bizType.service': {
    en: 'Services',
    hi: 'सर्विसेज़',
    hinglish: 'Services',
    gu: 'સર્વિસિસ',
    mr: 'सेवा',
    mwr: 'सर्विसेज़',
  },
  'form.bizType.other': {
    en: 'Other',
    hi: 'अन्य',
    hinglish: 'Other',
    gu: 'અન્ય',
    mr: 'इतर',
    mwr: 'दूजो',
  },
  'form.submit.idle': {
    en: 'Schedule My Free Demo',
    hi: 'मेरा फ़्री डेमो शेड्यूल करें',
    hinglish: 'Mera free demo schedule karein',
    gu: 'મારો ફ્રી ડેમો શેડ્યૂલ કરો',
    mr: 'माझा मोफत डेमो शेड्यूल करा',
    mwr: 'म्हारो फ्री डेमो शेड्यूल करो',
  },
  'form.submit.submitting': {
    en: 'Scheduling...',
    hi: 'शेड्यूल हो रहा है...',
    hinglish: 'Schedule ho raha hai...',
    gu: 'શેડ્યૂલ થઈ રહ્યું છે...',
    mr: 'शेड्यूल होत आहे...',
    mwr: 'शेड्यूल हो रियो है...',
  },
  'form.footer': {
    en: 'No credit card required. Live demo takes approx. 15-20 minutes.',
    hi: 'किसी क्रेडिट कार्ड की ज़रूरत नहीं। लाइव डेमो में लगभग 15-20 मिनट लगते हैं।',
    hinglish: 'Koi credit card ki zaroorat nahi. Live demo mein lagbhag 15-20 minute lagte hain.',
    gu: 'કોઈ ક્રેડિટ કાર્ડની જરૂર નથી. લાઈવ ડેમોમાં આશરે 15-20 મિનિટ લાગે છે.',
    mr: 'कोणत्याही क्रेडिट कार्डची गरज नाही. लाइव्ह डेमोला अंदाजे 15-20 मिनिटे लागतात.',
    mwr: 'कोई क्रेडिट कार्ड री जरूरत कोनी. लाइव डेमो मांय लगभग 15-20 मिनट लागै.',
  },
};

export default function DemoForm() {
  const t = useT(STRINGS);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 text-center shadow-xl border border-themeGreen-100 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('success.title')}</h3>
        <p className="text-gray-600">{t('success.desc')}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF6F1] rounded-[2.5rem] p-8 lg:p-12 shadow-inner border border-[rgba(43,27,18,0.04)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-themeGreen-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t('form.title')}</h2>
          <p className="text-gray-600">{t('form.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                required
                type="text"
                placeholder={t('form.fullName')}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-themeGreen-500 focus:border-transparent transition-all outline-none"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                required
                type="tel"
                placeholder={t('form.phone')}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-themeGreen-500 focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              required
              type="email"
              placeholder={t('form.email')}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-themeGreen-500 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              required
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-themeGreen-500 focus:border-transparent transition-all outline-none appearance-none cursor-pointer"
            >
              <option value="">{t('form.bizType.placeholder')}</option>
              <option value="manufacturing">{t('form.bizType.manufacturing')}</option>
              <option value="wholesale">{t('form.bizType.wholesale')}</option>
              <option value="service">{t('form.bizType.service')}</option>
              <option value="other">{t('form.bizType.other')}</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 bg-themeGreen-600 text-white rounded-2xl font-bold shadow-lg shadow-themeGreen-200 hover:bg-themeGreen-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? t('form.submit.submitting') : t('form.submit.idle')}
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-gray-500 mt-4">
            {t('form.footer')}
          </p>
        </form>
      </div>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
