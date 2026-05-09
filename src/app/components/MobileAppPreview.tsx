import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Utensils, BedDouble, GlassWater, Menu, ChevronRight, User, ChevronLeft, Smartphone, Tablet } from 'lucide-react';

export function MobileAppPreview() {
  const [device, setDevice] = useState<'iphone' | 'ipad'>('iphone');
  const [activeScreen, setActiveScreen] = useState<'home' | 'gastronomy' | 'rooms' | 'vip' | 'events'>('home');

  const categories = [
    { id: 'rooms', name: 'Rooms & Suites', icon: BedDouble, color: 'text-white' },
    { id: 'gastronomy', name: 'Gastronomy', icon: Utensils, color: 'text-white', sub: 'Minami, Montauk, The Beach...' },
    { id: 'vip', name: 'VIP Tables & Bottles', icon: GlassWater, color: 'text-[#D4AF37]' },
    { id: 'events', name: 'Events & Club', icon: Calendar, color: 'text-[#E60000]' },
  ] as const;

  const gastronomyRestaurants = [
    'Minami Japanese Restaurant',
    'Montauk Steakhouse Ibiza',
    'The Beach By Ushuaïa Ibiza',
    'The Unexpected Breakfast',
    'The Oyster & Caviar Bar',
    'Up Ibiza Sky Society'
  ];

  const renderScreen = () => {
    switch(activeScreen) {
      case 'gastronomy':
        return (
          <motion.div key="gastronomy" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="p-4 space-y-4">
            <h3 className="text-xl font-black uppercase tracking-widest text-white mb-6 border-b border-[#333333] pb-4">Gastronomy</h3>
            {gastronomyRestaurants.map((rest, i) => (
              <div key={i} className="bg-[#111111] border border-[#333333] p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-[#E60000]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-white">{rest}</span>
                </div>
                <button className="w-full py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                  Book Table
                </button>
              </div>
            ))}
          </motion.div>
        );
      case 'rooms':
        return (
          <motion.div key="rooms" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="p-4 space-y-4">
            <h3 className="text-xl font-black uppercase tracking-widest text-white mb-6 border-b border-[#333333] pb-4">Rooms & Suites</h3>
            {['The Ushuaïa Club Room', 'The Anything Can Happen Suite', 'The Oh My God Suite'].map((room, i) => (
              <div key={i} className="bg-[#111111] border border-[#333333] p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <BedDouble className="w-5 h-5 text-white" />
                  <span className="text-sm font-bold uppercase tracking-wider text-white">{room}</span>
                </div>
                <button className="w-full py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                  Check Rates
                </button>
              </div>
            ))}
          </motion.div>
        );
      case 'vip':
      case 'events':
        return (
          <motion.div key={activeScreen} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="p-4 space-y-4 flex flex-col items-center justify-center h-full text-center">
            <Calendar className="w-12 h-12 text-[#E60000] mb-4" />
            <h3 className="text-xl font-black uppercase tracking-widest text-white">{activeScreen === 'vip' ? 'VIP Tables' : 'Events'}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Connects directly to ticket engine.</p>
          </motion.div>
        );
      default:
        return (
          <motion.div key="home" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }}>
            {/* Hero Section */}
            <div className={`relative ${device === 'ipad' ? 'h-64' : 'h-48'} bg-[#111111] border-b border-[#333333] flex flex-col items-center justify-center p-6`}>
              <div className="absolute inset-0 bg-[#E60000]/10" />
              <h1 className={`${device === 'ipad' ? 'text-4xl' : 'text-2xl'} font-black text-white uppercase tracking-tighter relative z-10 text-center leading-tight`}>
                Welcome to <br/> The Experience
              </h1>
              <button className={`mt-4 ${device === 'ipad' ? 'px-8 py-3 text-xs' : 'px-6 py-2 text-[10px]'} bg-white text-black font-bold uppercase tracking-widest`}>
                Book Your Stay
              </button>
            </div>

            {/* Categories */}
            <div className={`p-4 ${device === 'ipad' ? 'grid grid-cols-2 gap-4' : 'space-y-3'}`}>
              {device === 'iphone' && <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">Discover</p>}
              {categories.map((cat, i) => (
                <motion.button 
                  key={i}
                  onClick={() => setActiveScreen(cat.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left bg-[#111111] border border-[#333333] ${device === 'ipad' ? 'p-6 flex-col items-start gap-4' : 'p-4 flex items-center justify-between'} cursor-none`}
                >
                  <div className={`flex ${device === 'ipad' ? 'flex-col items-start' : 'items-center'} gap-4 w-full`}>
                    <cat.icon className={`${device === 'ipad' ? 'w-8 h-8' : 'w-5 h-5'} ${cat.color}`} />
                    <div>
                      <h4 className={`${device === 'ipad' ? 'text-lg mt-2' : 'text-sm'} font-bold uppercase tracking-wider text-white`}>{cat.name}</h4>
                      {cat.sub && <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-widest">{cat.sub}</p>}
                    </div>
                  </div>
                  {device === 'iphone' && <ChevronRight className="w-4 h-4 text-gray-600" />}
                </motion.button>
              ))}
            </div>

            {/* Featured Restaurants */}
            <div className="p-4 pb-8">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">Featured</p>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                {['Minami Japanese', 'Montauk Steakhouse', 'The Beach'].map((rest, i) => (
                  <div key={i} className={`min-w-[140px] ${device === 'ipad' ? 'flex-1' : ''} bg-[#111111] border border-[#333333] aspect-square flex flex-col items-center justify-center p-4 text-center`}>
                    <Utensils className="w-6 h-6 text-[#E60000] mb-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white leading-tight">{rest}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center space-y-12"
    >
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          App Prototype
        </h2>
        
        {/* Device Toggle */}
        <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-[#333333] p-1.5 inline-flex mx-auto">
          <button 
            onClick={() => setDevice('iphone')}
            className={`flex items-center gap-2 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${device === 'iphone' ? 'bg-[#E60000] text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <Smartphone className="w-4 h-4" />
            iPhone
          </button>
          <button 
            onClick={() => setDevice('ipad')}
            className={`flex items-center gap-2 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${device === 'ipad' ? 'bg-[#E60000] text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <Tablet className="w-4 h-4" />
            iPad
          </button>
        </div>
      </div>

      {/* Interactive Device Frame */}
      <div className="w-full flex justify-center px-2 md:px-4">
        <div 
          className={`relative bg-black border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col transition-all duration-500 ease-in-out mx-auto ${
            device === 'iphone' 
              ? 'rounded-[2.5rem] border-[10px] md:border-[14px]' 
              : 'rounded-[1.5rem] md:rounded-[2rem] border-[12px] md:border-[24px]'
          }`}
          style={{
            height: device === 'iphone' ? 'min(80vh, 800px)' : 'min(80vh, 1000px)',
            width: 'auto',
            maxWidth: '100%',
            aspectRatio: device === 'iphone' ? '9/19' : '3/4',
          }}
        >
        {/* Notch (iPhone only) */}
        {device === 'iphone' && (
          <div className="absolute top-0 inset-x-0 h-6 bg-[#1A1A1A] rounded-b-3xl w-40 mx-auto z-50"></div>
        )}
        
        {/* Camera (iPad only) */}
        {device === 'ipad' && (
          <div className="absolute top-0 inset-x-0 h-3 w-full flex justify-center z-50">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-[-10px]"></div>
          </div>
        )}

        {/* App Header */}
        <div className={`pt-10 pb-4 px-6 flex items-center justify-between border-b border-[#333333] z-40 bg-black ${device === 'ipad' ? 'pt-6' : ''}`}>
          {activeScreen !== 'home' ? (
            <button onClick={() => setActiveScreen('home')} className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-none">
              <ChevronLeft className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Back</span>
            </button>
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
          
          <div className="tracking-widest uppercase font-black text-sm absolute left-1/2 -translate-x-1/2">USHUAÏA</div>
          
          <User className="w-5 h-5 text-white" />
        </div>

        {/* App Content (Scrollable with AnimatePresence) */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-black relative">
          <AnimatePresence mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </div>
        
        {/* Bottom Nav */}
        <div className={`bg-[#0A0A0A] border-t border-[#333333] flex items-center justify-around pb-4 px-6 z-40 ${device === 'ipad' ? 'h-24' : 'h-20'}`}>
          <button onClick={() => setActiveScreen('home')} className={`flex flex-col items-center gap-1 ${activeScreen === 'home' ? 'text-[#E60000]' : 'text-gray-500'} cursor-none`}>
            <div className="w-5 h-5 rounded-full border border-current" />
            <span className="text-[8px] uppercase tracking-widest font-bold">Explore</span>
          </button>
          <button onClick={() => setActiveScreen('events')} className={`flex flex-col items-center gap-1 ${activeScreen === 'events' ? 'text-[#E60000]' : 'text-gray-500'} cursor-none`}>
            <Calendar className="w-5 h-5" />
            <span className="text-[8px] uppercase tracking-widest font-bold">Events</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500 cursor-none">
            <User className="w-5 h-5" />
            <span className="text-[8px] uppercase tracking-widest font-bold">Profile</span>
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
