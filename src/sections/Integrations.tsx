import { motion } from 'framer-motion';
import AutoCarousel from '../components/AutoCarousel';

const integrations = [
  { name: 'WhatsApp Business', color: '#25D366' },
  { name: 'Tally', color: '#3B82F6' },
  { name: 'Razorpay', color: '#528FF0' },
  { name: 'Google Workspace', color: '#EA4335' },
  { name: 'Zoho', color: '#E42527' },
  { name: 'Paytm', color: '#00BAF2' },
  { name: 'HDFC SmartHub', color: '#004C8F' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Shiprocket', color: '#7441B8' },
  { name: 'Delhivery', color: '#E74C3C' },
  { name: 'India Post', color: '#C41E3A' },
  { name: 'GSTN Portal', color: '#16A34A' },
];

export default function Integrations() {
  return (
    <section className="w-full bg-[#F6F5F0] py-24 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/[0.02] rounded-l-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#2563EB] mb-4 block">Ecosystem</span>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-[#111827] mb-6">
            Connects with the tools <br/> 
            <span className="text-blue-600 italic">you already use.</span>
          </h2>
          <p className="text-xl text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Keep your existing accounting, payments, and communication stack. Mera Dhanda fits right in.
          </p>
        </motion.div>

        {/* Integration AutoCarousel */}
        <AutoCarousel 
          speed={35}
          gap={24}
          items={integrations.map((integration, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                y: -5, 
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-8 py-5 cursor-pointer transition-all duration-300"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: integration.color }}
              />
              <span className="text-lg font-bold text-[#111827]">
                {integration.name}
              </span>
            </motion.div>
          ))}
        />
        
        {/* Second row in opposite direction */}
        <AutoCarousel 
          speed={45}
          gap={24}
          direction="right"
          className="mt-6"
          items={[...integrations].reverse().map((integration, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                y: -5, 
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-8 py-5 cursor-pointer transition-all duration-300"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: integration.color }}
              />
              <span className="text-lg font-bold text-[#111827]">
                {integration.name}
              </span>
            </motion.div>
          ))}
        />
      </div>
    </section>
  );
}
