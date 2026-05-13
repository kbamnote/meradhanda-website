import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Mail, Lock, Sparkles } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F6F5F0] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="p-8 lg:p-12">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles size={32} />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-3">Welcome Back</h1>
            <p className="text-gray-500">Login to manage your business</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Password</label>
                <button type="button" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input required type="password" className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="••••••••" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="remember" className="text-sm font-medium text-gray-600 cursor-pointer select-none">Remember me for 30 days</label>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-[#2563EB] text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 group"
            >
              Sign In
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-sm text-gray-500">
              New to Mera Dhanda?{' '}
              <Link to="/register" className="text-blue-600 font-bold hover:underline">
                Start Free Trial
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-[#FAFAF8] p-6 text-center border-t border-gray-50">
          <p className="text-xs text-gray-400 px-6 italic">
            "The best way to predict the future is to create it."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
