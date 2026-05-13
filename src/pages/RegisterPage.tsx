import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Mail, Lock, User, Building2 } from 'lucide-react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F6F5F0] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="p-8 lg:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-gray-900 mb-3">Create Account</h1>
            <p className="text-gray-500">Join 5,000+ businesses using Mera Dhanda</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {step === 1 ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Acme Industries" />
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full py-5 bg-[#2563EB] text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 group"
                >
                  Next Step
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
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="password" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="••••••••" />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-[#2563EB] text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 group"
                >
                  Create My Account
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button 
                  onClick={() => setStep(1)}
                  className="w-full text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Back to Previous Step
                </button>
              </motion.div>
            )}
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-[#FAFAF8] p-6 text-center border-t border-gray-50">
          <p className="text-xs text-gray-400 px-6">
            By creating an account, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
