import { useState, useEffect } from 'react';
import { useLanguage, LanguageProvider } from './context/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { PricingCard } from './components/PricingCard';
import { ROICalculator } from './components/ROICalculator';
import { VipUpsellView } from './components/VipUpsellView';
import { StaffDashboardView } from './components/StaffDashboardView';
import { MobileAppPreview } from './components/MobileAppPreview';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { HummingbirdLogo } from './components/HummingbirdLogo';
import '../styles/custom.css';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[99999] pointer-events-none"
      style={{ transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)` }}
    >
      <HummingbirdLogo className="w-6 h-6 text-[#E60000] drop-shadow-[0_0_8px_rgba(230,0,0,0.8)]" />
    </div>
  );
}

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
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
          {t('hero.title')}
        </h2>
        <p className="text-xl text-gray-400">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Pricing Models */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-widest">{t('pricing.title')}</h3>
          <div className="w-24 h-1 bg-[#E60000] mx-auto" />
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
  const [activeTab, setActiveTab] = useState<'pitch' | 'vip' | 'staff' | 'preview'>('pitch');
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const flyingLogoY = useTransform(scrollYProgress, [0, 1], ['0px', '85vh']);
  const flyingLogoX = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    ['0px', '30px', '10px', '40px', '20px']
  );
  const flyingLogoRotate = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [0, 10, -5, 12, 0]
  );
  const flyingLogoScale = useTransform(scrollYProgress,
    [0, 0.5, 1],
    [1, 1.2, 1]
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E60000] selection:text-white relative">
      <CustomCursor />
      
      {/* Global Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E60000]/10 blur-[120px]" />
      </div>

      {/* Animated Flying Logo (Starts in header visual space, flies down) - Desktop/iPad Only */}
      <motion.div 
        style={{ 
          y: flyingLogoY, 
          x: flyingLogoX,
          rotate: flyingLogoRotate,
          scale: flyingLogoScale
        }}
        className="fixed left-6 top-4 md:top-6 z-50 pointer-events-none origin-center hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <HummingbirdLogo className="w-full h-full text-[#E60000] drop-shadow-[0_0_15px_rgba(230,0,0,0.6)]" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="px-6 py-6 md:py-10 flex items-center justify-between border-b border-[#333333] bg-black/90 backdrop-blur-md sticky top-0 z-50">
          
          {/* Mobile Logo (Bobbing up and down, stays in header) */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none md:hidden">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-8"
            >
              <HummingbirdLogo className="w-full h-full text-[#E60000] drop-shadow-[0_0_10px_rgba(230,0,0,0.6)]" />
            </motion.div>
          </div>

          {/* Invisible spacer to balance the flex layout */}
          <div className="w-10"></div>
          
          {/* Centered Logo (Replacing Text) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
            <img 
              src="/ushuaia-logo.png" 
              alt="Ushuaia Luanda Beach Club" 
              className="h-16 md:h-24 object-contain"
            />
          </div>
          
          <div className="relative z-10">
            <LanguageSelector />
          </div>
        </header>

        {/* Navigation */}
        <div className="px-6 py-8 flex justify-center pb-10 relative z-10">
          <div className="bg-[#111111] p-2 inline-flex flex-wrap justify-center gap-2 border border-[#333333] shadow-xl">
            {[
              { id: 'pitch', label: t('nav.pitch') },
              { id: 'vip', label: t('nav.vip') },
              { id: 'staff', label: t('nav.staff') },
              { id: 'preview', label: t('nav.preview') },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'pitch' | 'vip' | 'staff' | 'preview')}
                className={`px-8 py-3 text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#E60000] text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
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
                <StaffDashboardView onPreviewClick={() => setActiveTab('preview')} />
              </motion.div>
            )}
            {activeTab === 'preview' && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <MobileAppPreview />
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
