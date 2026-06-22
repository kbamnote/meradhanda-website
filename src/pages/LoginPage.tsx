import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Mail, Lock, Sparkles } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'welcomeBack': {
    en: 'Welcome Back',
    hi: 'वापस स्वागत है',
    hinglish: 'Wapas swagat hai',
    gu: 'પાછા સ્વાગત છે',
    mr: 'पुन्हा स्वागत आहे',
    mwr: 'फेर सूं स्वागत है',
  },
  'subtitle': {
    en: 'Login to manage your business',
    hi: 'अपना business मैनेज करने के लिए login करें',
    hinglish: 'Apna business manage karne ke liye login karein',
    gu: 'તમારો business મેનેજ કરવા login કરો',
    mr: 'तुमचा business व्यवस्थापित करण्यासाठी login करा',
    mwr: 'आपणो business संभालण खातर login करो',
  },
  'emailLabel': {
    en: 'Email Address',
    hi: 'ईमेल पता',
    hinglish: 'Email address',
    gu: 'ઇમેઇલ સરનામું',
    mr: 'ईमेल पत्ता',
    mwr: 'ईमेल पतो',
  },
  'passwordLabel': {
    en: 'Password',
    hi: 'पासवर्ड',
    hinglish: 'Password',
    gu: 'પાસવર્ડ',
    mr: 'पासवर्ड',
    mwr: 'पासवर्ड',
  },
  'forgotPassword': {
    en: 'Forgot password?',
    hi: 'पासवर्ड भूल गए?',
    hinglish: 'Password bhool gaye?',
    gu: 'પાસવર્ડ ભૂલી ગયા?',
    mr: 'पासवर्ड विसरलात?',
    mwr: 'पासवर्ड भूल गया?',
  },
  'rememberMe': {
    en: 'Remember me for 30 days',
    hi: 'मुझे 30 दिन तक याद रखें',
    hinglish: 'Mujhe 30 din tak yaad rakho',
    gu: 'મને 30 દિવસ સુધી યાદ રાખો',
    mr: 'मला 30 दिवस लक्षात ठेवा',
    mwr: 'म्हनै 30 दिन ताईं याद राखो',
  },
  'signIn': {
    en: 'Sign In',
    hi: 'साइन इन करें',
    hinglish: 'Sign in karein',
    gu: 'સાઇન ઇન કરો',
    mr: 'साइन इन करा',
    mwr: 'साइन इन करो',
  },
  'newToPre': {
    en: 'New to Mera Dhanda?',
    hi: 'Mera Dhanda पर नए हैं?',
    hinglish: 'Mera Dhanda par naye ho?',
    gu: 'Mera Dhanda પર નવા છો?',
    mr: 'Mera Dhanda वर नवीन आहात?',
    mwr: 'Mera Dhanda पर नया हो?',
  },
  'startFreeTrial': {
    en: 'Start Free Trial',
    hi: 'फ़्री ट्रायल शुरू करें',
    hinglish: 'Free trial shuru karein',
    gu: 'ફ્રી ટ્રાયલ શરૂ કરો',
    mr: 'मोफत ट्रायल सुरू करा',
    mwr: 'फ्री ट्रायल चालू करो',
  },
  'quote': {
    en: '"The best way to predict the future is to create it."',
    hi: '"भविष्य का अनुमान लगाने का सबसे अच्छा तरीका है उसे बनाना।"',
    hinglish: '"Future ka andaaza lagane ka sabse accha tareeka hai use khud banana."',
    gu: '"ભવિષ્યની આગાહી કરવાનો શ્રેષ્ઠ માર્ગ એ છે કે તેને બનાવો."',
    mr: '"भविष्याचा अंदाज लावण्याचा सर्वोत्तम मार्ग म्हणजे ते घडवणे."',
    mwr: '"भविष्य रो अंदाजो लगावण रो सबसूं चोखो तरीको है उणनै बणाणो।"',
  },
};

export default function LoginPage() {
  const t = useT(STRINGS);
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FBF6F1] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="p-8 lg:p-12">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-themeGreen-100 text-themeGreen-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles size={32} />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-3">{t('welcomeBack')}</h1>
            <p className="text-gray-500">{t('subtitle')}</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('emailLabel')}</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('passwordLabel')}</label>
                <button type="button" className="text-xs font-bold text-themeGreen-600 hover:underline">{t('forgotPassword')}</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input required type="password" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder="••••••••" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-themeGreen-600 focus:ring-themeGreen-500" />
              <label htmlFor="remember" className="text-sm font-medium text-gray-600 cursor-pointer select-none">{t('rememberMe')}</label>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-[#C05621] text-white font-black text-lg rounded-2xl hover:bg-themeGreen-700 transition-all shadow-xl shadow-themeGreen-500/30 flex items-center justify-center gap-3 group"
            >
              {t('signIn')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-sm text-gray-500">
              {t('newToPre')}{' '}
              <Link to="/register" className="text-themeGreen-600 font-bold hover:underline">
                {t('startFreeTrial')}
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-[#FAFAF8] p-6 text-center border-t border-gray-50">
          <p className="text-xs text-gray-400 px-6 italic">
            {t('quote')}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
