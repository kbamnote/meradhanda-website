import { motion } from 'framer-motion';
import { Link } from 'react-router';
import type { ReactNode } from 'react';
import { COMPANY, APP_NAME, CONTACT_EMAIL, WEBSITE, EFFECTIVE_DATE } from '../lib/legal';

/*
 * Privacy Policy page (English) — the public URL you submit to the Google Play
 * Console / App Store. Business details live in src/lib/legal.ts.
 */

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-black tracking-tight text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4 text-[17px] leading-relaxed text-gray-600">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5 list-disc marker:text-themeGreen-600">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  const mail = `mailto:${CONTACT_EMAIL}`;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-white py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-themeGreen-100 text-themeGreen-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
              Legal
            </span>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Privacy <span className="text-themeGreen-600 italic">Policy</span>
            </h1>
            <p className="text-lg text-gray-500">
              Effective date: {EFFECTIVE_DATE}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[17px] leading-relaxed text-gray-600 mb-10">
            This Privacy Policy explains how {COMPANY} (“we”, “us”, or “our”) collects,
            uses, stores, and protects your information when you use the {APP_NAME}{' '}
            mobile application and related services (collectively, the “Service”). By
            creating an account or using the Service, you agree to the practices
            described in this policy.
          </p>

          <Section title="1. Who we are">
            <p>
              {APP_NAME} is a business management and CRM application that helps small
              and medium businesses manage billing, inventory, leads and customers,
              accounting, production, and marketing. {COMPANY} is the data controller
              responsible for the information processed through the Service.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p className="font-semibold text-gray-800">a) Information you provide to us</p>
            <Bullets
              items={[
                <><strong>Account information</strong> — your name, email address, business/company name, password, and phone number when you register or sign in.</>,
                <><strong>Business data you enter</strong> — records you create inside the app, such as customers and leads, invoices and billing (including GST details), inventory items, accounting entries, and production records.</>,
                <><strong>Documents and files</strong> — any files you choose to upload or attach through the app.</>,
                <><strong>Support communications</strong> — information you share when you contact us for help or feedback.</>,
              ]}
            />
            <p className="font-semibold text-gray-800 pt-2">b) Information collected automatically</p>
            <Bullets
              items={[
                <><strong>Device and technical data</strong> — device model, operating system version, app version, and language settings.</>,
                <><strong>Usage and log data</strong> — basic information about how you use the app and error/diagnostic logs used to keep the Service reliable and secure.</>,
              ]}
            />
            <p>
              The app does <strong>not</strong> request access to your camera, location,
              or phone contacts, and we do not collect that information.
            </p>
          </Section>

          <Section title="3. How we use your information">
            <Bullets
              items={[
                'Provide, operate, and maintain the Service and your account.',
                'Store and process the business records you create so they are available to you across your devices.',
                'Authenticate you and keep your account secure.',
                'Respond to your support requests and communicate important service updates.',
                'Diagnose problems, prevent fraud or abuse, and improve the app’s performance and features.',
                'Comply with applicable legal obligations.',
              ]}
            />
          </Section>

          <Section title="4. How we share your information">
            <p>
              We do <strong>not</strong> sell your personal information or your business
              data. We share information only in the following limited circumstances:
            </p>
            <Bullets
              items={[
                <><strong>Service providers</strong> — trusted vendors who host our servers and databases and provide infrastructure on our behalf, bound by confidentiality obligations and permitted to use the data only to provide services to us.</>,
                <><strong>Legal requirements</strong> — when required to comply with applicable law, regulation, legal process, or an enforceable government request.</>,
                <><strong>Protection of rights</strong> — to detect, prevent, or address fraud, security, or technical issues, or to protect the rights, property, or safety of our users and the public.</>,
                <><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, your information may be transferred, subject to this policy.</>,
              ]}
            />
          </Section>

          <Section title="5. Data storage, location & security">
            <p>
              Your data is stored on secure cloud servers operated by our hosting
              providers. Data transmitted between the app and our servers is encrypted
              in transit using industry-standard TLS/HTTPS. On your device, your login
              session token is stored using the operating system’s secure storage.
            </p>
            <p>
              We implement reasonable technical and organizational measures to protect
              your information. However, no method of transmission or storage is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Data retention">
            <p>
              We retain your account and business data for as long as your account is
              active or as needed to provide the Service. If you delete your account, we
              will delete or anonymize your personal data within a reasonable period,
              except where we are required to retain certain information to comply with
              legal, tax, or accounting obligations.
            </p>
          </Section>

          <Section title="7. Your rights and choices">
            <p>You may, subject to applicable law:</p>
            <Bullets
              items={[
                'Access and review the information in your account.',
                'Correct or update inaccurate information directly in the app.',
                'Request a copy of your data or request its deletion.',
                'Withdraw consent or close your account at any time.',
              ]}
            />
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href={mail} className="text-themeGreen-600 font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </Section>

          <Section title="8. Account & data deletion">
            <p>
              You can request deletion of your account and associated data at any time.
              Visit our{' '}
              <Link to="/delete-account" className="text-themeGreen-600 font-semibold hover:underline">
                Account Deletion page
              </Link>{' '}
              or email us at{' '}
              <a href={mail} className="text-themeGreen-600 font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>{' '}
              from your registered email address with the subject “Delete my account”.
              We will process your request and permanently delete your personal data
              (subject to the legal retention noted in Section 6). You may also manage or
              delete data you have entered directly within the app.
            </p>
          </Section>

          <Section title="9. Children’s privacy">
            <p>
              The Service is intended for businesses and users aged 18 and over. It is
              not directed to children, and we do not knowingly collect personal
              information from children. If you believe a child has provided us
              information, please contact us so we can remove it.
            </p>
          </Section>

          <Section title="10. Third-party services">
            <p>
              The app relies on third-party infrastructure providers (such as cloud
              hosting) to operate. These providers process data on our behalf under
              their own security and privacy commitments. The app does not include
              third-party advertising networks.
            </p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              revise the “Effective date” above and, where appropriate, notify you
              within the app or by email. Your continued use of the Service after an
              update means you accept the revised policy.
            </p>
          </Section>

          <Section title="12. Contact us">
            <p>
              If you have any questions or requests regarding this Privacy Policy or your
              data, please contact us:
            </p>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-gray-700">
              <p className="font-bold text-gray-900">{COMPANY}</p>
              <p className="mt-1">
                Email:{' '}
                <a href={mail} className="text-themeGreen-600 font-semibold hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-1">
                Website:{' '}
                <a
                  href={WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-themeGreen-600 font-semibold hover:underline"
                >
                  {WEBSITE}
                </a>
              </p>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}
