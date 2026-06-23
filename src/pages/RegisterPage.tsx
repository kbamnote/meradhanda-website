import { useEffect } from 'react';
import { APP_URL } from '../apiConfig';

// Signup happens in the CRM app (which creates the company + 30-day trial and
// runs onboarding). The marketing site just hands the visitor off to it.
export default function RegisterPage() {
  useEffect(() => {
    window.location.replace(`${APP_URL}/signup`);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FBF6F1] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[#C05621] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 font-semibold">Taking you to sign up…</p>
        <a href={`${APP_URL}/signup`} className="text-[#C05621] font-bold underline mt-2 inline-block">
          Click here if you’re not redirected
        </a>
      </div>
    </div>
  );
}
