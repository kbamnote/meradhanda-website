import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import GSTBilling from './pages/features/GSTBilling';
import Inventory from './pages/features/Inventory';
import Marketing from './pages/features/Marketing';
import Analytics from './pages/features/Analytics';
import AIAssistant from './pages/features/AIAssistant';
import LeadsCRM from './pages/features/LeadsCRM';
import Accounting from './pages/features/Accounting';
import ProductionTracking from './pages/features/ProductionTracking';

import SolutionDetail from './pages/solutions/SolutionDetail';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import BookingPage from './pages/BookingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/book-trial" element={<BookingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/features/gst-billing" element={<GSTBilling />} />
        <Route path="/features/inventory" element={<Inventory />} />
        <Route path="/features/marketing" element={<Marketing />} />
        <Route path="/features/analytics" element={<Analytics />} />
        <Route path="/features/ai-assistant" element={<AIAssistant />} />
        <Route path="/features/crm" element={<LeadsCRM />} />
        <Route path="/features/accounting" element={<Accounting />} />
        <Route path="/features/production" element={<ProductionTracking />} />
        <Route path="/solutions/:type" element={<SolutionDetail />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
