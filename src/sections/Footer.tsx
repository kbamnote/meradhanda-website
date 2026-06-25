import { Link } from 'react-router';
import { useTranslation } from '../i18n/LanguageContext';

// Internal links that have a real route (others are placeholders for now).
const ROUTES: Record<string, string> = {
  Privacy: '/privacy',
  Pricing: '/pricing',
  Features: '/#features',
  'Help Center': '/faq',
};

const footerColumns = [
  { titleKey: 'footer.col.product', links: ['Features', 'Pricing', 'Security', 'Updates', 'API Docs'] },
  { titleKey: 'footer.col.company', links: ['About', 'Careers', 'Contact', 'Partners', 'Blog'] },
  { titleKey: 'footer.col.resources', links: ['Help Center', 'Community', 'Tutorials', 'Webinars'] },
  { titleKey: 'footer.col.legal', links: ['Privacy', 'Terms', 'Cookies', 'GDPR'] },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#1E120B] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-xl font-extrabold text-white">
              Mera <span className="text-[#C05621]">Dhanda</span>
            </span>
            <p className="mt-3 text-sm text-white/45 leading-[1.7]">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.titleKey}>
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-4">
                {t(col.titleKey)}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => {
                  const className =
                    'text-sm text-white/45 hover:text-white/85 transition-colors duration-200';
                  const route = ROUTES[link];
                  return (
                    <li key={link}>
                      {route ? (
                        <Link to={route} className={className}>
                          {link}
                        </Link>
                      ) : (
                        <a href="#" className={className}>
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} Mera Dhanda. {t('footer.rights')}
          </p>
          <p className="text-sm text-white/45 flex items-center gap-2">
            {t('footer.madeInIndia')} <span>🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
