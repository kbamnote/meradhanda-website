const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Updates', 'API Docs'],
  Company: ['About', 'Careers', 'Contact', 'Partners', 'Blog'],
  Resources: ['Help Center', 'Community', 'Tutorials', 'Webinars'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'GDPR'],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F19] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-xl font-extrabold text-white">
              Mera <span className="text-[#2563EB]">Dhanda</span>
            </span>
            <p className="mt-3 text-sm text-white/45 leading-[1.7]">
              The all-in-one business operations platform for modern teams.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-white/90 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-white/85 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} Mera Dhanda. All rights reserved.
          </p>
          <p className="text-sm text-white/45 flex items-center gap-2">
            Made in India <span>🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
