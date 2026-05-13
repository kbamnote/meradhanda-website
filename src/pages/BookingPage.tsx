import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Users, Building2, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

import { API_BASE_URL } from '../apiConfig';

export default function BookingPage() {
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
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 bg-[#F6F5F0] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-blue-50"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Request Received!</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our solution expert will call you within <span className="text-blue-600 font-bold">30 minutes</span> to schedule your personalized product <span className="text-blue-600 font-bold">Demo</span>.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div className="pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-6 inline-block">
              Free Demo Booking
            </span>
            <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
              See Mera Dhanda <br/>
              <span className="text-blue-600 italic">in action.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-12">
              Book your personalized product demo. We'll show you how to automate your specific business workflows and solve your bottlenecks.
            </p>

            <div className="space-y-8">
              {[
                { icon: ShieldCheck, title: 'Personalized Walkthrough', desc: 'A 1-on-1 session with our experts tailored to your industry.' },
                { icon: Users, title: 'ROI Analysis', desc: 'See exactly how much time and money you can save with automation.' },
                { icon: Building2, title: 'Custom Workflow Design', desc: 'We will map your current processes to the platform during the demo.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-blue-600">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 leading-snug">{item.desc}</p>
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
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white rotate-12 shadow-xl">
             <Calendar size={40} />
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-8">Ready for a demo?</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-bold">
                {error}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name*</label>
                <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number*</label>
                <input required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Company Name*</label>
                <input required name="companyName" value={formData.companyName} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Acme Industries" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Industry Type*</label>
                <select name="industryType" value={formData.industryType} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                  <option>Manufacturing</option>
                  <option>Wholesale/Distribution</option>
                  <option>Retail Shop</option>
                  <option>Service Business</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Size of your business?*</label>
                <select required name="businessSize" value={formData.businessSize} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select Size</option>
                  <option>1-10 Employees</option>
                  <option>11-50 Employees</option>
                  <option>51-200 Employees</option>
                  <option>200+ Employees</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Language Preference?*</label>
                <select required name="languagePreference" value={formData.languagePreference} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select Language</option>
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Marathi</option>
                  <option>Gujarati</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Monthly Credit Sales?*</label>
              <select required name="monthlySales" value={formData.monthlySales} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                <option value="">Select Range</option>
                <option>Below ₹5 Lakhs</option>
                <option>₹5 Lakhs - ₹20 Lakhs</option>
                <option>₹20 Lakhs - ₹1 Crore</option>
                <option>Above ₹1 Crore</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-[#2563EB] text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 group disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Confirm My Demo Booking
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              By clicking confirm, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
