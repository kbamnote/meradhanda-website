import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { 
  ChevronDown, 
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

const featureItems = [
  {
    title: 'GST Billing & Invoicing',
    description: 'Fast, compliant billing with automated GST calculations.',
    icon: Receipt,
    color: '#2563EB',
    path: '/features/gst-billing'
  },
  {
    title: 'Inventory Management',
    description: 'Track stock levels, set alerts, and manage variants.',
    icon: Box,
    color: '#16A34A',
    path: '/features/inventory'
  },
  {
    title: 'Business Marketing',
    description: 'Campaign tools to reach and retain your customers.',
    icon: Megaphone,
    color: '#D97706',
    path: '/features/marketing'
  },
  {
    title: 'Real-Time Analytics',
    description: 'Instant insights into sales, growth, and team performance.',
    icon: BarChart3,
    color: '#7C3AED',
    path: '/features/analytics'
  },
  {
    title: 'Built-in AI Assistant',
    description: 'Automate tasks and get intelligent business insights.',
    icon: Sparkles,
    color: '#DB2777',
    path: '/features/ai-assistant'
  },
  {
    title: 'Leads & CRM',
    description: 'Manage your entire sales pipeline in one place.',
    icon: Users,
    color: '#2563EB',
    path: '/features/crm'
  },
  {
    title: 'Advanced Accounting',
    description: 'Full-suite accounting with automated reconciliation.',
    icon: Wallet,
    color: '#059669',
    path: '/features/accounting'
  },
  {
    title: 'Production Tracking',
    description: 'End-to-end monitoring of your manufacturing flow.',
    icon: Factory,
    color: '#EA580C',
    path: '/features/production'
  },
];

const solutionCategories = [
  {
    title: 'Industry Type',
    icon: Briefcase,
    items: [
      { label: 'Distribution', icon: Truck, path: '/solutions/distribution' },
      { label: 'Wholesale', icon: Building2, path: '/solutions/wholesale' },
      { label: 'Manufacturing', icon: Factory, path: '/solutions/manufacturing' },
      { label: 'Service-Based', icon: Settings2, path: '/solutions/service-based' },
    ]
  },
  {
    title: 'Sectors',
    icon: Building,
    items: [
      { label: 'Restaurants', icon: UtensilsCrossed, path: '/solutions/restaurants' },
      { label: 'Hotels', icon: Hotel, path: '/solutions/hotels' },
      { label: 'Pharmacies', icon: Stethoscope, path: '/solutions/pharmacies' },
      { label: 'Real Estate', icon: Building2, path: '/solutions/real-estate' },
      { label: 'Coaching Classes', icon: GraduationCap, path: '/solutions/coaching' },
      { label: 'Printing Services', icon: Printer, path: '/solutions/printing' },
      { label: 'Hospitals & Clinics', icon: Stethoscope, path: '/solutions/hospitals' },
      { label: 'Automobile Dealers', icon: Car, path: '/solutions/automobiles' },
    ]
  }
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [activeSolutionCat, setActiveSolutionCat] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

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
          ? 'bg-[#F6F5F0]/95 backdrop-blur-xl border-b border-[rgba(17,24,39,0.12)] shadow-sm'
          : 'bg-[#F6F5F0]/92 backdrop-blur-lg border-b border-[rgba(17,24,39,0.06)]'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="font-heading text-[22px] font-extrabold tracking-[-0.5px] text-[#111827]">
            Mera <span className="text-[#2563EB]">Dhanda</span>
          </span>
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
                showFeatures ? 'bg-[rgba(233,228,218,0.55)] text-[#2563EB]' : 'text-[#4B5563] hover:bg-[rgba(233,228,218,0.55)]'
              }`}
            >
              Features
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFeatures ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Dropdown */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] transition-all duration-200 ${
                showFeatures ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[rgba(17,24,39,0.06)] overflow-hidden">
                <div className="grid grid-cols-2 p-6 gap-x-8 gap-y-6">
                  {featureItems.map((item, i) => (
                    <Link 
                      key={i} 
                      to={item.path}
                      onClick={() => setShowFeatures(false)}
                      className="group/item flex gap-4 cursor-pointer p-2 rounded-xl hover:bg-[#F6F5F0] transition-colors duration-200"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#111827] mb-1 group-hover/item:text-[#2563EB] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[12px] text-[#4B5563] leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="bg-[#FAFAF8] p-4 border-t border-[rgba(17,24,39,0.04)] flex justify-between items-center px-8">
                  <p className="text-xs text-[#6B7280] font-medium">Ready to scale your business?</p>
                  <button onClick={() => scrollTo('features')} className="text-xs font-bold text-[#2563EB] flex items-center gap-1.5 hover:underline">
                    View All Modules
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
                showSolutions ? 'bg-[rgba(233,228,218,0.55)] text-[#2563EB]' : 'text-[#4B5563] hover:bg-[rgba(233,228,218,0.55)]'
              }`}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} />
            </button>

            {/* Solutions Dropdown Content */}
            <div 
              className={`absolute top-full left-0 pt-4 w-[240px] transition-all duration-200 ${
                showSolutions ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-white rounded-xl shadow-xl border border-[rgba(17,24,39,0.06)] overflow-visible p-2">
                {solutionCategories.map((cat, i) => (
                  <div 
                    key={i}
                    className="relative group/cat"
                    onMouseEnter={() => setActiveSolutionCat(i)}
                  >
                    <div className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${activeSolutionCat === i ? 'bg-[#F6F5F0] text-[#2563EB]' : 'text-[#4B5563] hover:bg-[#F6F5F0]'}`}>
                      <div className="flex items-center gap-3">
                        <cat.icon className="w-4 h-4" />
                        <span className="text-sm font-bold">{cat.title}</span>
                      </div>
                      <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                    </div>

                    {/* Sub-menu (Nested Dropdown) */}
                    {activeSolutionCat === i && (
                      <div className="absolute top-0 left-full pl-2 w-[220px]">
                        <div className="bg-white rounded-xl shadow-2xl border border-[rgba(17,24,39,0.06)] p-2">
                          {cat.items.map((item, j) => (
                            <Link
                              key={j}
                              to={item.path}
                              onClick={() => setShowSolutions(false)}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[#4B5563] font-medium hover:bg-[#F6F5F0] hover:text-[#2563EB] transition-all"
                            >
                              <item.icon className="w-4 h-4 opacity-70" />
                              {item.label}
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
            className="px-4 py-2 text-sm font-semibold text-[#4B5563] rounded-lg hover:bg-[rgba(233,228,218,0.55)] transition-colors duration-200"
          >
            Pricing
          </Link>

          <Link
            to="/faq"
            className="px-4 py-2 text-sm font-semibold text-[#4B5563] rounded-lg hover:bg-[rgba(233,228,218,0.55)] transition-colors duration-200"
          >
            FAQ
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link 
            to="/login"
            className="hidden sm:block px-4 py-2 text-sm font-semibold text-[#4B5563] border border-[rgba(17,24,39,0.12)] rounded-lg hover:bg-[rgba(233,228,218,0.35)] transition-colors duration-200"
          >
            Login
          </Link>
          <Link 
            to="/register"
            className="hidden sm:block px-4 py-2 text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            to="/book-trial"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg btn-primary shadow-lg shadow-blue-500/20"
          >
            Book Free Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
