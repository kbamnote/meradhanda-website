import { motion } from 'framer-motion';
import { 
  Store, 
  Truck, 
  Building2, 
  Factory, 
  Settings2,
  UtensilsCrossed,
  Hotel,
  Stethoscope,
  GraduationCap,
  Printer,
  Car,
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';
import FlipCard from '../components/FlipCard';
import AutoCarousel from '../components/AutoCarousel';

const sectors = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    color: '#EA580C',
    desc: 'BOM and production tracking.',
    details: 'Monitor work-in-progress, quality checks, and raw material wastage.',
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    icon: UtensilsCrossed,
    color: '#DC2626',
    desc: 'KOT and table management.',
    details: 'Seamlessly integrate with food aggregators and manage daily kitchen stock.',
  },
  {
    id: 'distribution',
    title: 'Distribution',
    icon: Truck,
    color: '#16A34A',
    desc: 'Secondary sales and route tracking.',
    details: 'Empower your sales force with live stock updates and order collection.',
  },
  {
    id: 'hotels',
    title: 'Hotels',
    icon: Hotel,
    color: '#7C3AED',
    desc: 'PMS and guest management.',
    details: 'Track room occupancy, automated billing, and housekeeping schedules.',
  },
  {
    id: 'service-based',
    title: 'Services',
    icon: Settings2,
    color: '#0D9488',
    desc: 'AMC and project tracking.',
    details: 'Manage professional services, service contracts, and team productivity.',
  },
];

export default function Solutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="solutions" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#2563EB]">
              Industry Solutions
            </span>
            <h2 className="font-heading text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#111827] mt-3">
              Built for the way <span className="text-[#2563EB]">you work.</span>
            </h2>
            <p className="text-[17px] text-[#4B5563] mt-4 leading-[1.7]">
              Mera Dhanda isn't a generic software. We've built industry-specific modules that address the unique challenges of your business sector.
            </p>
          </div>
          <Link to="/solutions/distribution" className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:underline">
            View All Sectors
            <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              className="h-[240px]"
            >
              <FlipCard
                className="h-full"
                front={
                  <div className="h-full bg-[#FAFAF8] rounded-2xl border border-[rgba(17,24,39,0.06)] p-8 flex flex-col items-center justify-center text-center group">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${sector.color}15`, color: sector.color }}
                    >
                      <sector.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827]">{sector.title}</h3>
                    <p className="text-sm text-[#4B5563] mt-2">{sector.desc}</p>
                  </div>
                }
                back={
                  <div 
                    className="h-full rounded-2xl p-8 flex flex-col justify-between text-white"
                    style={{ backgroundColor: sector.color }}
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-3">{sector.title} Features</h3>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {sector.details}
                      </p>
                    </div>
                    <Link 
                      to={`/solutions/${sector.id}`}
                      className="w-full py-2.5 bg-white text-[#111827] rounded-lg text-center text-xs font-bold hover:bg-opacity-90 transition-all"
                    >
                      Explore {sector.title} Solution
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Industry Carousel */}
        <div className="mt-24 pt-12 border-t border-gray-100">
           <p className="text-center text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-10">Sector-specific excellence</p>
           <AutoCarousel 
              speed={30}
              gap={40}
              items={[
                "Pharma: Expiry tracking with H1 alerts",
                "Textiles: Multi-warehouse fabric management",
                "FMCG: Route optimization for distributors",
                "Education: Student fee cycle automation",
                "Hospitals: OPD & IPD management system",
                "Automobiles: Chassis & Spare parts tracking",
                "Printing: Custom job cards & paper stock"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-[#FAFAF8] border border-gray-100 rounded-full">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-sm font-bold text-gray-700">{text}</span>
                </div>
              ))}
           />
        </div>
      </div>
    </section>
  );
}
