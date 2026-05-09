import { motion } from 'motion/react';
import { Calendar, Utensils, BedDouble, GlassWater, Menu, ChevronRight, User } from 'lucide-react';

export function MobileAppPreview() {
  const categories = [
    { name: 'Rooms & Suites', icon: BedDouble, color: 'text-white' },
    { name: 'Gastronomy', icon: Utensils, color: 'text-white', sub: 'Minami, Montauk, The Beach...' },
    { name: 'VIP Tables & Bottles', icon: GlassWater, color: 'text-[#D4AF37]' },
    { name: 'Events & Club', icon: Calendar, color: 'text-[#E60000]' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest">
          App Prototype
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-xs">
          Interactive Guest Experience Preview
        </p>
      </div>

      {/* iPhone Frame */}
      <div className="relative w-[320px] h-[680px] bg-black rounded-[3rem] border-[14px] border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-[#1A1A1A] rounded-b-3xl w-40 mx-auto z-50"></div>

        {/* App Header */}
        <div className="pt-10 pb-4 px-6 flex items-center justify-between border-b border-[#333333] z-40 bg-black">
          <Menu className="w-5 h-5 text-white" />
          <div className="tracking-widest uppercase font-black text-sm">USHUAÏA</div>
          <User className="w-5 h-5 text-white" />
        </div>

        {/* App Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-black">
          {/* Hero Section */}
          <div className="relative h-48 bg-[#111111] border-b border-[#333333] flex flex-col items-center justify-center p-6">
            <div className="absolute inset-0 bg-[#E60000]/10" />
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter relative z-10 text-center leading-tight">
              Welcome to <br/> The Experience
            </h1>
            <button className="mt-4 px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest">
              Book Your Stay
            </button>
          </div>

          {/* Categories */}
          <div className="p-4 space-y-3">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">Discover</p>
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#111111] border border-[#333333] p-4 flex items-center justify-between cursor-none"
              >
                <div className="flex items-center gap-4">
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">{cat.name}</h4>
                    {cat.sub && <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-widest">{cat.sub}</p>}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </motion.div>
            ))}
          </div>

          {/* Featured Restaurants */}
          <div className="p-4 pb-8">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">Gastronomy</p>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
              {['Minami Japanese', 'Montauk Steakhouse', 'The Beach'].map((rest, i) => (
                <div key={i} className="min-w-[140px] bg-[#111111] border border-[#333333] aspect-square flex flex-col items-center justify-center p-4 text-center">
                  <Utensils className="w-6 h-6 text-[#E60000] mb-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white leading-tight">{rest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Nav */}
        <div className="h-20 bg-[#0A0A0A] border-t border-[#333333] flex items-center justify-around pb-4 px-6 z-40">
          <button className="flex flex-col items-center gap-1 text-[#E60000]">
            <div className="w-5 h-5 rounded-full border border-current" />
            <span className="text-[8px] uppercase tracking-widest font-bold">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500">
            <Calendar className="w-5 h-5" />
            <span className="text-[8px] uppercase tracking-widest font-bold">Events</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500">
            <User className="w-5 h-5" />
            <span className="text-[8px] uppercase tracking-widest font-bold">Profile</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
