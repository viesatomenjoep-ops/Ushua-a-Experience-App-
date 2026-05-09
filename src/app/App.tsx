import { useState } from 'react';
import { useLanguage, LanguageProvider } from './context/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { PricingCard } from './components/PricingCard';
import { ROICalculator } from './components/ROICalculator';
import { VipUpsellView } from './components/VipUpsellView';
import { StaffDashboardView } from './components/StaffDashboardView';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { HummingbirdLogo } from './components/HummingbirdLogo';
import '../styles/custom.css';

function PitchOverview() {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-16"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          {t('hero.title')}
        </h2>
        <p className="text-xl text-gray-400">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Pricing Models */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.title')}</h3>
          <div className="w-24 h-1 bg-[#E60000] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title={t('pricing.enterprise')}
            description={t('pricing.enterprise.desc')}
            price="€12.5k / mo"
            features={[
              { text: 'Custom White-label App' },
              { text: 'Full POS & PMS Integration' },
              { text: 'Dedicated Account Manager' },
              { text: 'Ushuaïa Pay Setup' }
            ]}
            delay={0.1}
          />
          <PricingCard
            title={t('pricing.performance')}
            description={t('pricing.performance.desc')}
            price="5.5% Rev Share"
            highlightColor="gold"
            features={[
              { text: 'Zero Upfront Cost' },
              { text: 'Dynamic Bidding Engine' },
              { text: 'Automated Upsell Flows' },
              { text: 'VIP Fast-track Optimization' }
            ]}
            delay={0.2}
          />
          <PricingCard
            title={t('pricing.operations')}
            description={t('pricing.operations.desc')}
            price="€7.5k / mo"
            highlightColor="red"
            features={[
              { text: 'Live SOS Command Center' },
              { text: 'Staff Task Management' },
              { text: 'DJ & VIP Direct Comms' },
              { text: '24/7 Priority Support' }
            ]}
            delay={0.3}
          />
        </div>
      </div>

      {/* ROI Calculator */}
      <ROICalculator />

    </motion.div>
  );
}

function MainApp() {
  const [activeTab, setActiveTab] = useState<'pitch' | 'vip' | 'staff'>('pitch');
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const flyingLogoY = useTransform(scrollYProgress, [0, 1], ['10vh', '85vh']);
  const flyingLogoX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['20px', '60px', '20px', '80px', '20px']);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#E60000] selection:text-white relative">
      
      {/* Global Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E60000]/10 blur-[120px] rounded-full" />
      </div>

      {/* Free-floating Bird on the left side */}
      <motion.div 
        style={{ y: flyingLogoY, x: flyingLogoX }}
        className="fixed top-0 left-0 z-50 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 md:w-20 md:h-20"
        >
          <HummingbirdLogo className="w-full h-full text-[#E60000] drop-shadow-[0_0_15px_rgba(230,0,0,0.5)]" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="px-6 py-4 flex items-center justify-between border-b border-[#333333] bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
          
          {/* Invisible spacer to balance the flex layout */}
          <div className="w-10"></div>
          
          {/* Centered Text */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none">USHUAÏA</h1>
              <p className="text-[10px] md:text-xs text-[#D4AF37] tracking-widest uppercase font-bold">Experience Pitch</p>
            </div>
          </div>
          
          <div className="relative z-10">
            <LanguageSelector />
          </div>
        </header>

        {/* Navigation */}
        <div className="px-6 py-8 flex justify-center pb-10 relative z-10">
          <div className="bg-[#1A1A1A] p-1.5 rounded-2xl inline-flex flex-wrap justify-center gap-1 border border-[#333333] shadow-xl">
            {[
              { id: 'pitch', label: t('nav.pitch') },
              { id: 'vip', label: t('nav.vip') },
              { id: 'staff', label: t('nav.staff') },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'pitch' | 'vip' | 'staff')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#333333] text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 px-6 pb-20 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {activeTab === 'pitch' && <PitchOverview key="pitch" />}
            {activeTab === 'vip' && (
              <motion.div
                key="vip"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <VipUpsellView />
              </motion.div>
            )}
            {activeTab === 'staff' && (
              <motion.div
                key="staff"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <StaffDashboardView />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
