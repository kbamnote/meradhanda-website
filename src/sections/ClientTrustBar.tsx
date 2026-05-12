import AutoCarousel from '../components/AutoCarousel';

const partners = [
  { name: 'Global Prints', industry: 'Printing' },
  { name: 'Metro Textiles', industry: 'Manufacturing' },
  { name: 'Fresh Foods', industry: 'Distribution' },
  { name: 'Tech Solutions', industry: 'Distribution' },
  { name: 'Smart Services', industry: 'Service' },
  { name: 'Elite Motors', industry: 'Automobile' },
  { name: 'Health First', industry: 'Pharmacy' },
  { name: 'Bright Education', industry: 'Coaching' },
];

export default function ClientTrustBar() {
  return (
    <section className="w-full bg-white py-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-2">Trusted by industries across India</p>
      </div>
      
      <AutoCarousel 
        speed={25}
        gap={60}
        items={partners.map((partner, i) => (
          <div key={i} className="flex flex-col items-center group cursor-default">
            <span className="text-xl lg:text-2xl font-black text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
              {partner.name}
            </span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              {partner.industry}
            </span>
          </div>
        ))}
      />
    </section>
  );
}
