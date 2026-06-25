import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Mail, Trash2, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY, APP_NAME, CONTACT_EMAIL } from '../lib/legal';

/*
 * Account Deletion request page — this is the URL you put in the Google Play
 * Console "Delete account URL" field. There is no public form-submission
 * backend on this marketing site, so the request is sent as a real, pre-filled
 * email to CONTACT_EMAIL (which always works and actually reaches you).
 */
export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const buildMailto = () => {
    const subject = `Account deletion request — ${APP_NAME}`;
    const body =
      `I would like to permanently delete my ${APP_NAME} account and all associated data.\n\n` +
      `Registered email: ${email || '(your registered email)'}\n` +
      `Reason (optional): ${reason || '—'}\n\n` +
      `I understand my business data will be permanently deleted and cannot be recovered.`;
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
              Account &amp; Data
            </span>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Delete your <span className="text-themeGreen-600 italic">account</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              You can request permanent deletion of your {APP_NAME} account and all the
              data associated with it. Here&apos;s exactly what happens and how to request it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* What gets deleted */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Trash2 className="w-5 h-5 text-themeGreen-600" />
                <h3 className="font-black text-gray-900">What gets deleted</h3>
              </div>
              <ul className="space-y-2 text-[15px] text-gray-600 pl-5 list-disc marker:text-themeGreen-600">
                <li>Your account profile (name, email, phone, company)</li>
                <li>All business data you created — customers and leads, invoices and billing, inventory, accounting, and production records</li>
                <li>Any documents or files you uploaded</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-themeGreen-600" />
                <h3 className="font-black text-gray-900">What we may retain</h3>
              </div>
              <p className="text-[15px] text-gray-600">
                We only keep records we are legally required to retain (for example,
                invoice or tax records under applicable law). These are kept securely
                for the legally mandated period and then deleted.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-start gap-3 rounded-2xl bg-themeGreen-50 border border-themeGreen-100 p-5 mb-12">
            <Clock className="w-5 h-5 text-themeGreen-600 mt-0.5 shrink-0" />
            <p className="text-[15px] text-gray-700">
              <strong>Timeline:</strong> we verify and process deletion requests within
              <strong> 7 days</strong>, and your personal data is permanently removed
              within <strong>30 days</strong> of confirmation.
            </p>
          </div>

          {/* Request form -> opens a pre-filled email */}
          <h2 className="text-2xl font-black tracking-tight text-gray-900 mb-2">
            Request account deletion
          </h2>
          <p className="text-[16px] text-gray-600 mb-6">
            Enter the email address you use to sign in, then send your request. To
            protect your account, please send it from your registered email address.
          </p>

          <div className="rounded-3xl border border-gray-100 bg-[#FBF6F1] p-6 lg:p-8">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
              Registered email
            </label>
            <div className="relative mb-5">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-themeGreen-500 focus:border-transparent transition-all outline-none"
              />
            </div>

            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
              Reason (optional)
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              placeholder="Tell us why you're leaving (optional)"
              className="w-full px-4 py-4 mb-6 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-themeGreen-500 focus:border-transparent transition-all outline-none resize-none"
            />

            <a
              href={buildMailto()}
              className="w-full py-4 bg-themeGreen-600 text-white rounded-2xl font-bold shadow-lg shadow-themeGreen-200 hover:bg-themeGreen-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Trash2 className="w-5 h-5" />
              Send deletion request
            </a>

            <p className="text-center text-xs text-gray-500 mt-4">
              This opens your email app with the request pre-filled. Prefer to email us
              directly? Write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-themeGreen-600 font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>{' '}
              with the subject “Delete my account”.
            </p>
          </div>

          <p className="text-[15px] text-gray-500 mt-10">
            For full details on how {COMPANY} handles your data, see our{' '}
            <Link to="/privacy" className="text-themeGreen-600 font-semibold hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
