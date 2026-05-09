import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlightColor?: 'red' | 'gold' | 'default';
  delay?: number;
}

export function PricingCard({ title, price, description, features, highlightColor = 'default', delay = 0 }: PricingCardProps) {
  const isGold = highlightColor === 'gold';
  const isRed = highlightColor === 'red';

  const borderColor = isGold ? 'border-[#D4AF37]' : isRed ? 'border-[#E60000]' : 'border-[#333333]';
  const headerBg = isGold ? 'bg-gradient-to-br from-[#D4AF37]/20 to-transparent' : isRed ? 'bg-gradient-to-br from-[#E60000]/20 to-transparent' : 'bg-[#1A1A1A]';
  const buttonColor = isGold ? 'bg-[#D4AF37] text-black hover:bg-[#D4AF37]/80' : isRed ? 'bg-[#E60000] text-white hover:bg-[#E60000]/80' : 'bg-[#333333] text-white hover:bg-[#444444]';
  const iconColor = isGold ? 'text-[#D4AF37]' : isRed ? 'text-[#E60000]' : 'text-gray-400';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-none border ${borderColor} bg-black overflow-hidden flex flex-col`}
    >
      {isGold && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]" />
      )}
      {isRed && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#E60000] via-red-500 to-[#E60000]" />
      )}
      
      <div className={`p-6 ${headerBg} border-b border-[#333333]`}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 h-10">{description}</p>
        <div className="text-3xl font-black text-white">{price}</div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <Check className={`w-5 h-5 shrink-0 ${iconColor}`} />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3 rounded-none font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg ${buttonColor}`}>
          Select Model
        </button>
      </div>
    </motion.div>
  );
}
