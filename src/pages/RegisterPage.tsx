import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Mail, Lock, User, Building2 } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';
import type { Entry } from '../i18n/translations';

const STRINGS: Record<string, Entry> = {
  'title': { en: 'Create Account', hi: 'अकाउंट बनाएं', hinglish: 'Account banayein', gu: 'એકાઉન્ટ બનાવો', mr: 'खाते तयार करा', mwr: 'अकाउंट बणावो' },
  'subtitle': { en: 'Join 5,000+ businesses using Mera Dhanda', hi: 'Mera Dhanda इस्तेमाल करने वाले 5,000+ बिज़नेस से जुड़ें', hinglish: 'Mera Dhanda use karne wale 5,000+ businesses se judein', gu: 'Mera Dhanda વાપરતા 5,000+ બિઝનેસ સાથે જોડાઓ', mr: 'Mera Dhanda वापरणाऱ्या 5,000+ व्यवसायांमध्ये सामील व्हा', mwr: 'Mera Dhanda काम में लेवण वाला 5,000+ बिज़नेस सूं जुड़ो' },
  'label.fullName': { en: 'Full Name', hi: 'पूरा नाम', hinglish: 'Full Name', gu: 'પૂરું નામ', mr: 'पूर्ण नाव', mwr: 'पूरो नाम' },
  'label.companyName': { en: 'Company Name', hi: 'कंपनी का नाम', hinglish: 'Company Name', gu: 'કંપનીનું નામ', mr: 'कंपनीचे नाव', mwr: 'कंपनी रो नाम' },
  'label.email': { en: 'Email Address', hi: 'ईमेल एड्रेस', hinglish: 'Email Address', gu: 'ઈમેલ એડ્રેસ', mr: 'ईमेल पत्ता', mwr: 'ईमेल एड्रेस' },
  'label.password': { en: 'Password', hi: 'पासवर्ड', hinglish: 'Password', gu: 'પાસવર્ડ', mr: 'पासवर्ड', mwr: 'पासवर्ड' },
  'btn.nextStep': { en: 'Next Step', hi: 'अगला स्टेप', hinglish: 'Next Step', gu: 'આગળનું પગલું', mr: 'पुढील पायरी', mwr: 'अगलो स्टेप' },
  'btn.createAccount': { en: 'Create My Account', hi: 'मेरा अकाउंट बनाएं', hinglish: 'Mera account banayein', gu: 'મારું એકાઉન્ટ બનાવો', mr: 'माझे खाते तयार करा', mwr: 'म्हारो अकाउंट बणावो' },
  'btn.back': { en: 'Back to Previous Step', hi: 'पिछले स्टेप पर वापस जाएं', hinglish: 'Pichle step par wapas jayein', gu: 'પાછલા પગલા પર પાછા જાઓ', mr: 'मागील पायरीवर परत जा', mwr: 'पाछला स्टेप पर वापस जावो' },
  'haveAccount': { en: 'Already have an account?', hi: 'पहले से अकाउंट है?', hinglish: 'Pehle se account hai?', gu: 'પહેલેથી એકાઉન્ટ છે?', mr: 'आधीच खाते आहे?', mwr: 'पैलां सूं अकाउंट है?' },
  'signIn': { en: 'Sign In', hi: 'साइन इन करें', hinglish: 'Sign In karein', gu: 'સાઇન ઇન કરો', mr: 'साइन इन करा', mwr: 'साइन इन करो' },
  'terms': { en: 'By creating an account, you agree to our Terms of Service and Privacy Policy.', hi: 'अकाउंट बनाकर, आप हमारी Terms of Service और Privacy Policy से सहमत होते हैं।', hinglish: 'Account bana kar, aap hamari Terms of Service aur Privacy Policy se agree karte hain.', gu: 'એકાઉન્ટ બનાવીને, તમે અમારી Terms of Service અને Privacy Policy સાથે સંમત થાઓ છો.', mr: 'खाते तयार करून, तुम्ही आमच्या Terms of Service आणि Privacy Policy ला सहमती देता.', mwr: 'अकाउंट बणार, थे म्हारी Terms of Service अर Privacy Policy सूं सहमत हो।' },
};

export default function RegisterPage() {
  const t = useT(STRINGS);
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FBF6F1] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="p-8 lg:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-gray-900 mb-3">{t('title')}</h1>
            <p className="text-gray-500">{t('subtitle')}</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {step === 1 ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('label.fullName')}</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('label.companyName')}</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder="Acme Industries" />
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full py-5 bg-[#C05621] text-white font-black text-lg rounded-2xl hover:bg-themeGreen-700 transition-all shadow-xl shadow-themeGreen-500/30 flex items-center justify-center gap-3 group"
                >
                  {t('btn.nextStep')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('label.email')}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">{t('label.password')}</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="password" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-themeGreen-500 outline-none transition-all" placeholder="••••••••" />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-[#C05621] text-white font-black text-lg rounded-2xl hover:bg-themeGreen-700 transition-all shadow-xl shadow-themeGreen-500/30 flex items-center justify-center gap-3 group"
                >
                  {t('btn.createAccount')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button 
                  onClick={() => setStep(1)}
                  className="w-full text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {t('btn.back')}
                </button>
              </motion.div>
            )}
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-sm text-gray-500">
              {t('haveAccount')}{' '}
              <Link to="/login" className="text-themeGreen-600 font-bold hover:underline">
                {t('signIn')}
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-[#FAFAF8] p-6 text-center border-t border-gray-50">
          <p className="text-xs text-gray-400 px-6">
            {t('terms')}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
