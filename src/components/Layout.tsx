import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navigation />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
