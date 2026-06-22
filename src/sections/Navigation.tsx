import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useTranslation, useT } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import type { Entry } from '../i18n/translations';
import {
  ChevronDown,
  Globe,
  Check,
  BarChart3,
  Sparkles, 
  Users, 
  Wallet, 
  Factory, 
  Receipt, 
  Box, 
  Megaphone,
  ArrowRight,
  Briefcase,
  Truck,
  Building2,
  Settings2,
  UtensilsCrossed,
  Hotel,
  Stethoscope,
  GraduationCap,
  Printer,
  Car,
  Building
} from 'lucide-react';

const NAV_STRINGS: Record<string, Entry> = {
  'feat.gst.title': { en: 'GST Billing & Invoicing', hi: 'GST बिलिंग और इनवॉइसिंग', hinglish: 'GST Billing & Invoicing', gu: 'GST બિલિંગ અને ઇનવૉઇસિંગ', mr: 'GST बिलिंग आणि इनव्हॉइसिंग', mwr: 'GST बिलिंग अर इनवॉइसिंग' },
  'feat.gst.desc': { en: 'Fast, compliant billing with automated GST calculations.', hi: 'ऑटोमेटेड GST कैलकुलेशन के साथ तेज़ और कम्प्लायंट बिलिंग।', hinglish: 'Automated GST calculations ke saath fast aur compliant billing.', gu: 'ઑટોમેટેડ GST ગણતરી સાથે ઝડપી અને કમ્પ્લાયન્ટ બિલિંગ.', mr: 'ऑटोमेटेड GST गणनेसह जलद आणि कम्प्लायंट बिलिंग.', mwr: 'ऑटोमेटेड GST हिसाब-किताब रै साथै फटाफट अर कम्प्लायंट बिलिंग।' },
  'feat.inventory.title': { en: 'Inventory Management', hi: 'इन्वेंटरी मैनेजमेंट', hinglish: 'Inventory Management', gu: 'ઇન્વેન્ટરી મેનેજમેન્ટ', mr: 'इन्व्हेंटरी मॅनेजमेंट', mwr: 'इन्वेंटरी मैनेजमेंट' },
  'feat.inventory.desc': { en: 'Track stock levels, set alerts, and manage variants.', hi: 'स्टॉक लेवल ट्रैक करें, अलर्ट सेट करें और वेरिएंट मैनेज करें।', hinglish: 'Stock levels track karein, alerts set karein aur variants manage karein.', gu: 'સ્ટોક લેવલ ટ્રૅક કરો, એલર્ટ સેટ કરો અને વેરિઅન્ટ મેનેજ કરો.', mr: 'स्टॉक लेव्हल ट्रॅक करा, अलर्ट सेट करा आणि व्हेरिएंट मॅनेज करा.', mwr: 'स्टॉक लेवल ट्रैक करो, अलर्ट सेट करो अर वेरिएंट संभाळो।' },
  'feat.marketing.title': { en: 'Business Marketing', hi: 'बिज़नेस मार्केटिंग', hinglish: 'Business Marketing', gu: 'બિઝનેસ માર્કેટિંગ', mr: 'बिझनेस मार्केटिंग', mwr: 'बिजनेस मार्केटिंग' },
  'feat.marketing.desc': { en: 'Campaign tools to reach and retain your customers.', hi: 'अपने ग्राहकों तक पहुँचने और उन्हें जोड़े रखने के लिए कैम्पेन टूल्स।', hinglish: 'Apne customers tak pahunchne aur unhe jode rakhne ke liye campaign tools.', gu: 'તમારા ગ્રાહકો સુધી પહોંચવા અને જાળવી રાખવા માટેના કૅમ્પેન ટૂલ્સ.', mr: 'तुमच्या ग्राहकांपर्यंत पोहोचण्यासाठी आणि टिकवण्यासाठी कॅम्पेन टूल्स.', mwr: 'थारा ग्राहकां तांई पूगण अर जोड़े राखण रा कैम्पेन टूल्स।' },
  'feat.analytics.title': { en: 'Real-Time Analytics', hi: 'रियल-टाइम एनालिटिक्स', hinglish: 'Real-Time Analytics', gu: 'રિયલ-ટાઇમ એનાલિટિક્સ', mr: 'रिअल-टाइम ॲनालिटिक्स', mwr: 'रियल-टाइम एनालिटिक्स' },
  'feat.analytics.desc': { en: 'Instant insights into sales, growth, and team performance.', hi: 'सेल्स, ग्रोथ और टीम परफॉर्मेंस की तुरंत जानकारी।', hinglish: 'Sales, growth aur team performance ki turant insights.', gu: 'સેલ્સ, ગ્રોથ અને ટીમ પર્ફોર્મન્સની તાત્કાલિક માહિતી.', mr: 'सेल्स, ग्रोथ आणि टीम परफॉर्मन्सची त्वरित माहिती.', mwr: 'सेल्स, ग्रोथ अर टीम परफॉर्मेंस री तुरंत जाणकारी।' },
  'feat.ai.title': { en: 'Built-in AI Assistant', hi: 'बिल्ट-इन AI असिस्टेंट', hinglish: 'Built-in AI Assistant', gu: 'બિલ્ટ-ઇન AI આસિસ્ટન્ટ', mr: 'बिल्ट-इन AI असिस्टंट', mwr: 'बिल्ट-इन AI असिस्टेंट' },
  'feat.ai.desc': { en: 'Automate tasks and get intelligent business insights.', hi: 'टास्क ऑटोमेट करें और स्मार्ट बिज़नेस इनसाइट्स पाएँ।', hinglish: 'Tasks automate karein aur intelligent business insights paayein.', gu: 'કાર્યો ઑટોમેટ કરો અને સ્માર્ટ બિઝનેસ ઇનસાઇટ્સ મેળવો.', mr: 'टास्क ऑटोमेट करा आणि स्मार्ट बिझनेस इनसाइट्स मिळवा.', mwr: 'काम ऑटोमेट करो अर स्मार्ट बिजनेस इनसाइट्स पावो।' },
  'feat.crm.title': { en: 'Leads & CRM', hi: 'लीड्स और CRM', hinglish: 'Leads & CRM', gu: 'લીડ્સ અને CRM', mr: 'लीड्स आणि CRM', mwr: 'लीड्स अर CRM' },
  'feat.crm.desc': { en: 'Manage your entire sales pipeline in one place.', hi: 'अपनी पूरी सेल्स पाइपलाइन एक ही जगह मैनेज करें।', hinglish: 'Apni puri sales pipeline ek hi jagah manage karein.', gu: 'તમારી સંપૂર્ણ સેલ્સ પાઇપલાઇન એક જ જગ્યાએ મેનેજ કરો.', mr: 'तुमची संपूर्ण सेल्स पाइपलाइन एकाच ठिकाणी मॅनेज करा.', mwr: 'थारी पूरी सेल्स पाइपलाइन एकई जगै संभाळो।' },
  'feat.accounting.title': { en: 'Advanced Accounting', hi: 'एडवांस्ड अकाउंटिंग', hinglish: 'Advanced Accounting', gu: 'એડવાન્સ્ડ એકાઉન્ટિંગ', mr: 'ॲडव्हान्स्ड अकाउंटिंग', mwr: 'एडवांस्ड अकाउंटिंग' },
  'feat.accounting.desc': { en: 'Full-suite accounting with automated reconciliation.', hi: 'ऑटोमेटेड रिकंसिलिएशन के साथ फुल-सूट अकाउंटिंग।', hinglish: 'Automated reconciliation ke saath full-suite accounting.', gu: 'ઑટોમેટેડ રિકન્સિલિએશન સાથે ફુલ-સ્યૂટ એકાઉન્ટિંગ.', mr: 'ऑटोमेटेड रिकन्सिलिएशनसह फुल-सूट अकाउंटिंग.', mwr: 'ऑटोमेटेड रिकंसिलिएशन रै साथै फुल-सूट अकाउंटिंग।' },
  'feat.production.title': { en: 'Production Tracking', hi: 'प्रोडक्शन ट्रैकिंग', hinglish: 'Production Tracking', gu: 'પ્રોડક્શન ટ્રૅકિંગ', mr: 'प्रोडक्शन ट्रॅकिंग', mwr: 'प्रोडक्शन ट्रैकिंग' },
  'feat.production.desc': { en: 'End-to-end monitoring of your manufacturing flow.', hi: 'अपने मैन्युफैक्चरिंग फ्लो की एंड-टू-एंड मॉनिटरिंग।', hinglish: 'Apne manufacturing flow ki end-to-end monitoring.', gu: 'તમારા મેન્યુફેક્ચરિંગ ફ્લોની એન્ડ-ટુ-એન્ડ મોનિટરિંગ.', mr: 'तुमच्या मॅन्युफॅक्चरिंग फ्लोची एंड-टू-एंड मॉनिटरिंग.', mwr: 'थारा मैन्युफैक्चरिंग फ्लो री एंड-टू-एंड मॉनिटरिंग।' },

  'cat.industry': { en: 'Industry Type', hi: 'इंडस्ट्री टाइप', hinglish: 'Industry Type', gu: 'ઇન્ડસ્ટ્રી ટાઇપ', mr: 'इंडस्ट्री प्रकार', mwr: 'इंडस्ट्री टाइप' },
  'cat.sectors': { en: 'Sectors', hi: 'सेक्टर्स', hinglish: 'Sectors', gu: 'સેક્ટર્સ', mr: 'सेक्टर्स', mwr: 'सेक्टर्स' },

  'sol.distribution': { en: 'Distribution', hi: 'डिस्ट्रिब्यूशन', hinglish: 'Distribution', gu: 'ડિસ્ટ્રિબ્યુશન', mr: 'डिस्ट्रिब्यूशन', mwr: 'डिस्ट्रिब्यूशन' },
  'sol.wholesale': { en: 'Wholesale', hi: 'होलसेल', hinglish: 'Wholesale', gu: 'હોલસેલ', mr: 'होलसेल', mwr: 'होलसेल' },
  'sol.manufacturing': { en: 'Manufacturing', hi: 'मैन्युफैक्चरिंग', hinglish: 'Manufacturing', gu: 'મેન્યુફેક્ચરિંગ', mr: 'मॅन्युफॅक्चरिंग', mwr: 'मैन्युफैक्चरिंग' },
  'sol.serviceBased': { en: 'Service-Based', hi: 'सर्विस-बेस्ड', hinglish: 'Service-Based', gu: 'સર્વિસ-બેઝ્ડ', mr: 'सर्व्हिस-बेस्ड', mwr: 'सर्विस-बेस्ड' },
  'sol.restaurants': { en: 'Restaurants', hi: 'रेस्टोरेंट', hinglish: 'Restaurants', gu: 'રેસ્ટોરન્ટ', mr: 'रेस्टॉरंट', mwr: 'रेस्टोरेंट' },
  'sol.hotels': { en: 'Hotels', hi: 'होटल', hinglish: 'Hotels', gu: 'હોટેલ', mr: 'हॉटेल', mwr: 'होटल' },
  'sol.pharmacies': { en: 'Pharmacies', hi: 'फार्मेसी', hinglish: 'Pharmacies', gu: 'ફાર્મસી', mr: 'फार्मसी', mwr: 'फार्मेसी' },
  'sol.realEstate': { en: 'Real Estate', hi: 'रियल एस्टेट', hinglish: 'Real Estate', gu: 'રિયલ એસ્ટેટ', mr: 'रिअल इस्टेट', mwr: 'रियल एस्टेट' },
  'sol.coaching': { en: 'Coaching Classes', hi: 'कोचिंग क्लासेस', hinglish: 'Coaching Classes', gu: 'કોચિંગ ક્લાસિસ', mr: 'कोचिंग क्लासेस', mwr: 'कोचिंग क्लासां' },
  'sol.printing': { en: 'Printing Services', hi: 'प्रिंटिंग सर्विसेज़', hinglish: 'Printing Services', gu: 'પ્રિન્ટિંગ સર્વિસિસ', mr: 'प्रिंटिंग सर्व्हिसेस', mwr: 'प्रिंटिंग सर्विसां' },
  'sol.hospitals': { en: 'Hospitals & Clinics', hi: 'हॉस्पिटल और क्लिनिक', hinglish: 'Hospitals & Clinics', gu: 'હોસ્પિટલ અને ક્લિનિક', mr: 'हॉस्पिटल आणि क्लिनिक', mwr: 'हॉस्पिटल अर क्लिनिक' },
  'sol.automobiles': { en: 'Automobile Dealers', hi: 'ऑटोमोबाइल डीलर्स', hinglish: 'Automobile Dealers', gu: 'ઑટોમોબાઇલ ડીલર્સ', mr: 'ऑटोमोबाइल डीलर्स', mwr: 'ऑटोमोबाइल डीलर्स' },
};

const featureItems = [
  {
    titleKey: 'feat.gst.title',
    descKey: 'feat.gst.desc',
    icon: Receipt,
    color: '#C05621',
    path: '/features/gst-billing'
  },
  {
    titleKey: 'feat.inventory.title',
    descKey: 'feat.inventory.desc',
    icon: Box,
    color: '#0F766E',
    path: '/features/inventory'
  },
  {
    titleKey: 'feat.marketing.title',
    descKey: 'feat.marketing.desc',
    icon: Megaphone,
    color: '#D97706',
    path: '/features/marketing'
  },
  {
    titleKey: 'feat.analytics.title',
    descKey: 'feat.analytics.desc',
    icon: BarChart3,
    color: '#7C3AED',
    path: '/features/analytics'
  },
  {
    titleKey: 'feat.ai.title',
    descKey: 'feat.ai.desc',
    icon: Sparkles,
    color: '#DB2777',
    path: '/features/ai-assistant'
  },
  {
    titleKey: 'feat.crm.title',
    descKey: 'feat.crm.desc',
    icon: Users,
    color: '#C05621',
    path: '/features/crm'
  },
  {
    titleKey: 'feat.accounting.title',
    descKey: 'feat.accounting.desc',
    icon: Wallet,
    color: '#0F766E',
    path: '/features/accounting'
  },
  {
    titleKey: 'feat.production.title',
    descKey: 'feat.production.desc',
    icon: Factory,
    color: '#EA580C',
    path: '/features/production'
  },
];

const solutionCategories = [
  {
    titleKey: 'cat.industry',
    icon: Briefcase,
    items: [
      { labelKey: 'sol.distribution', icon: Truck, path: '/solutions/distribution' },
      { labelKey: 'sol.wholesale', icon: Building2, path: '/solutions/wholesale' },
      { labelKey: 'sol.manufacturing', icon: Factory, path: '/solutions/manufacturing' },
      { labelKey: 'sol.serviceBased', icon: Settings2, path: '/solutions/service-based' },
    ]
  },
  {
    titleKey: 'cat.sectors',
    icon: Building,
    items: [
      { labelKey: 'sol.restaurants', icon: UtensilsCrossed, path: '/solutions/restaurants' },
      { labelKey: 'sol.hotels', icon: Hotel, path: '/solutions/hotels' },
      { labelKey: 'sol.pharmacies', icon: Stethoscope, path: '/solutions/pharmacies' },
      { labelKey: 'sol.realEstate', icon: Building2, path: '/solutions/real-estate' },
      { labelKey: 'sol.coaching', icon: GraduationCap, path: '/solutions/coaching' },
      { labelKey: 'sol.printing', icon: Printer, path: '/solutions/printing' },
      { labelKey: 'sol.hospitals', icon: Stethoscope, path: '/solutions/hospitals' },
      { labelKey: 'sol.automobiles', icon: Car, path: '/solutions/automobiles' },
    ]
  }
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [activeSolutionCat, setActiveSolutionCat] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang, t } = useTranslation();
  const td = useT(NAV_STRINGS);
  const activeLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setShowFeatures(false);
    setShowSolutions(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF6F1]/95 backdrop-blur-xl border-b border-[rgba(43,27,18,0.12)] shadow-sm'
          : 'bg-[#FBF6F1]/92 backdrop-blur-lg border-b border-[rgba(43,27,18,0.06)]'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="/images/Meradhanda%20Logo.png"
            alt="Mera Dhanda"
            className="h-[52px] w-auto"
          />
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Features Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setShowFeatures(true)}
            onMouseLeave={() => setShowFeatures(false)}
          >
            <button
              onClick={() => scrollTo('features')}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                showFeatures ? 'bg-[rgba(244,228,223,0.55)] text-[#C05621]' : 'text-[#7A6453] hover:bg-[rgba(244,228,223,0.55)]'
              }`}
            >
              {t('nav.features')}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFeatures ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Dropdown */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] transition-all duration-200 ${
                showFeatures ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[rgba(43,27,18,0.06)] overflow-hidden">
                <div className="grid grid-cols-2 p-6 gap-x-8 gap-y-6">
                  {featureItems.map((item, i) => (
                    <Link 
                      key={i} 
                      to={item.path}
                      onClick={() => setShowFeatures(false)}
                      className="group/item flex gap-4 cursor-pointer p-2 rounded-xl hover:bg-[#FBF6F1] transition-colors duration-200"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2B1B12] mb-1 group-hover/item:text-[#C05621] transition-colors">
                          {td(item.titleKey)}
                        </h4>
                        <p className="text-[12px] text-[#7A6453] leading-tight">
                          {td(item.descKey)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="bg-[#FAFAF8] p-4 border-t border-[rgba(43,27,18,0.04)] flex justify-between items-center px-8">
                  <p className="text-xs text-[#6B7280] font-medium">{t('nav.promo')}</p>
                  <button onClick={() => scrollTo('features')} className="text-xs font-bold text-[#C05621] flex items-center gap-1.5 hover:underline">
                    {t('nav.viewAll')}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => {
              setShowSolutions(false);
              setActiveSolutionCat(null);
            }}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                showSolutions ? 'bg-[rgba(244,228,223,0.55)] text-[#C05621]' : 'text-[#7A6453] hover:bg-[rgba(244,228,223,0.55)]'
              }`}
            >
              {t('nav.solutions')}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} />
            </button>

            {/* Solutions Dropdown Content */}
            <div 
              className={`absolute top-full left-0 pt-4 w-[240px] transition-all duration-200 ${
                showSolutions ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-white rounded-xl shadow-xl border border-[rgba(43,27,18,0.06)] overflow-visible p-2">
                {solutionCategories.map((cat, i) => (
                  <div 
                    key={i}
                    className="relative group/cat"
                    onMouseEnter={() => setActiveSolutionCat(i)}
                  >
                    <div className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${activeSolutionCat === i ? 'bg-[#FBF6F1] text-[#C05621]' : 'text-[#7A6453] hover:bg-[#FBF6F1]'}`}>
                      <div className="flex items-center gap-3">
                        <cat.icon className="w-4 h-4" />
                        <span className="text-sm font-bold">{td(cat.titleKey)}</span>
                      </div>
                      <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                    </div>

                    {/* Sub-menu (Nested Dropdown) */}
                    {activeSolutionCat === i && (
                      <div className="absolute top-0 left-full pl-2 w-[220px]">
                        <div className="bg-white rounded-xl shadow-2xl border border-[rgba(43,27,18,0.06)] p-2">
                          {cat.items.map((item, j) => (
                            <Link
                              key={j}
                              to={item.path}
                              onClick={() => setShowSolutions(false)}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[#7A6453] font-medium hover:bg-[#FBF6F1] hover:text-[#C05621] transition-all"
                            >
                              <item.icon className="w-4 h-4 opacity-70" />
                              {td(item.labelKey)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/pricing"
            className="px-4 py-2 text-sm font-semibold text-[#7A6453] rounded-lg hover:bg-[rgba(244,228,223,0.55)] transition-colors duration-200"
          >
            {t('nav.pricing')}
          </Link>

          <Link
            to="/faq"
            className="px-4 py-2 text-sm font-semibold text-[#7A6453] rounded-lg hover:bg-[rgba(244,228,223,0.55)] transition-colors duration-200"
          >
            {t('nav.faq')}
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div
            className="relative"
            onMouseEnter={() => setShowLang(true)}
            onMouseLeave={() => setShowLang(false)}
          >
            <button
              type="button"
              onClick={() => setShowLang((v) => !v)}
              aria-label={t('nav.language')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                showLang ? 'bg-[rgba(244,228,223,0.55)] text-[#C05621]' : 'text-[#7A6453] hover:bg-[rgba(244,228,223,0.55)]'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{activeLang.native}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showLang ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute top-full right-0 pt-3 w-[200px] transition-all duration-200 ${
                showLang ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-white rounded-xl shadow-xl border border-[#ECDFD1] p-2">
                <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9A8472]">
                  {t('nav.language')}
                </p>
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLang(l.code);
                      setShowLang(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      l.code === lang
                        ? 'bg-[#FBE7DA] text-[#A8471A]'
                        : 'text-[#2B1B12] hover:bg-[#FBF6F1]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-semibold">{l.native}</span>
                      {l.label !== l.native && (
                        <span className="text-[11px] text-[#9A8472]">{l.label}</span>
                      )}
                    </span>
                    {l.code === lang && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/login"
            className="hidden sm:block px-4 py-2 text-sm font-semibold text-[#7A6453] hover:text-[#2B1B12] transition-colors duration-200"
          >
            {t('nav.login')}
          </Link>
          <Link
            to="/register"
            className="px-4 sm:px-5 py-2.5 text-sm font-semibold text-white bg-[#C05621] rounded-lg btn-primary shadow-lg shadow-[#C05621]/25"
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
