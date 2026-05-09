import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Calculator, TrendingUp } from 'lucide-react';

export function ROICalculator() {
  const { t } = useLanguage();
  const [revenue, setRevenue] = useState<number>(50000);
  const [upsellRate, setUpsellRate] = useState<number>(15);

  const calculateLift = () => {
    // Basic mock formula for pitch: (Daily Revenue * 30 days) * (Upsell Rate / 100) * (Average upsell margin 0.3)
    const monthlyRev = revenue * 30;
    const additional = monthlyRev * (upsellRate / 100) * 0.3;
    return additional.toLocaleString('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#333333] rounded-2xl p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#E60000] opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#E60000]/10 rounded-xl border border-[#E60000]/20">
              <Calculator className="w-6 h-6 text-[#E60000]" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t('roi.title')}</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-300">{t('roi.revenue')}</label>
                <span className="text-[#D4AF37] font-bold">€{revenue.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="250000" 
                step="5000"
                value={revenue} 
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full accent-[#E60000] h-2 bg-[#333333] rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-300">{t('roi.upsell')}</label>
                <span className="text-[#D4AF37] font-bold">{upsellRate}%</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="40" 
                step="1"
                value={upsellRate} 
                onChange={(e) => setUpsellRate(Number(e.target.value))}
                className="w-full accent-[#E60000] h-2 bg-[#333333] rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px h-32 bg-[#333333]" />

        <div className="flex-1 w-full bg-[#111111] p-6 rounded-xl border border-[#333333] flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <p className="text-sm font-medium text-gray-400">{t('roi.projected')}</p>
          </div>
          <motion.div 
            key={revenue + upsellRate}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#D4AF37]"
          >
            {calculateLift()}
          </motion.div>
          <p className="text-xs text-gray-500 mt-4 max-w-[250px]">
            Based on a 30-day operation cycle with dynamic pricing and in-app checkout conversions.
          </p>
        </div>

      </div>
    </div>
  );
}
