import { Smartphone, CreditCard, Sparkles, Wine, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function VipUpsellView() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      
      {/* Phone Mockup */}
      <div className="flex justify-center lg:col-span-1 relative">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-[#333333] p-4 relative overflow-hidden shadow-2xl shadow-[#E60000]/10"
        >
          {/* Dynamic Island Mock */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />
          
          <div className="h-full w-full bg-[#111111] rounded-[2rem] overflow-hidden flex flex-col relative">
            
            {/* App Header */}
            <div className="pt-10 pb-4 px-6 bg-gradient-to-b from-[#E60000]/20 to-transparent">
              <h4 className="text-white font-black text-xl tracking-tighter">USHUAÏA</h4>
              <p className="text-xs text-[#D4AF37] font-semibold tracking-widest uppercase mt-1">Experience</p>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 space-y-4 overflow-y-auto pb-6 custom-scrollbar">
              
              <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-[#333333]">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-white font-bold text-sm">VIP Cabana Bidding</h5>
                  <span className="bg-[#E60000] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">LIVE</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Current highest bid: €2,500</p>
                <button className="w-full bg-[#D4AF37] text-black text-xs font-bold py-2 rounded-lg">
                  Place Bid
                </button>
              </div>

              <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-[#333333] flex gap-3 items-center">
                <div className="bg-[#E60000]/10 p-2 rounded-full">
                  <Wine className="w-5 h-5 text-[#E60000]" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-bold text-sm">Fast-Track Bottle</h5>
                  <p className="text-[10px] text-gray-400">Order to table 41</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </div>

              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 rounded-2xl p-4">
                <div className="flex gap-2 items-center mb-1">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <h5 className="text-white font-bold text-sm">Room Upgrade</h5>
                </div>
                <p className="text-xs text-gray-300 mb-3">Upgrade to Stage View Suite for €350.</p>
                <button className="w-full bg-white/10 text-white hover:bg-white/20 text-xs font-bold py-2 rounded-lg transition-colors">
                  Upgrade Now
                </button>
              </div>

              {/* Ushuaia Pay Mock */}
              <div className="mt-4 bg-gradient-to-br from-[#E60000] to-red-900 rounded-2xl p-4 relative overflow-hidden">
                <CreditCard className="absolute -right-4 -bottom-4 w-24 h-24 text-black/10" />
                <h5 className="text-white font-bold text-sm mb-1">Ushuaïa Pay</h5>
                <p className="text-white/80 text-[10px] mb-3">Scan at bar to pay</p>
                <div className="w-full h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <div className="w-24 h-2 bg-white/40 rounded-full" />
                </div>
              </div>

            </div>

            {/* Floating SOS - purely visual mock for VIP */}
            <div className="absolute bottom-6 right-4 w-12 h-12 bg-[#E60000] rounded-full shadow-lg shadow-[#E60000]/50 flex items-center justify-center">
              <span className="text-white font-black text-[10px]">SOS</span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Feature Explanations */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{t('vip.title')}</h3>
          <p className="text-gray-400">Turn every digital interaction into a premium revenue opportunity while enhancing the guest experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1A1A1A] border border-[#333333] p-5 rounded-xl">
            <CreditCard className="w-6 h-6 text-[#E60000] mb-3" />
            <h4 className="text-white font-bold mb-2">{t('vip.pay')}</h4>
            <p className="text-sm text-gray-400">Integrated digital wallet via Apple/Google Pay. Reduces queues, increases frictionless spending, and captures rich data.</p>
          </div>
          
          <div className="bg-[#1A1A1A] border border-[#333333] p-5 rounded-xl">
            <Sparkles className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h4 className="text-white font-bold mb-2">{t('vip.bidding')}</h4>
            <p className="text-sm text-gray-400">Gamify luxury by allowing guests to bid on prime cabanas and daybeds. Maximize yield on high-demand inventory.</p>
          </div>
          
          <div className="bg-[#1A1A1A] border border-[#333333] p-5 rounded-xl">
            <Wine className="w-6 h-6 text-[#E60000] mb-3" />
            <h4 className="text-white font-bold mb-2">{t('vip.bottle')}</h4>
            <p className="text-sm text-gray-400">Direct VIP orders sent straight to the bar and runners. No waiting, instant gratification, higher spend per table.</p>
          </div>
          
          <div className="bg-[#1A1A1A] border border-[#333333] p-5 rounded-xl">
            <Smartphone className="w-6 h-6 text-gray-400 mb-3" />
            <h4 className="text-white font-bold mb-2">Automated Upsells</h4>
            <p className="text-sm text-gray-400">Smart push notifications for late check-out or stage-view suite upgrades based on guest behavior and availability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
