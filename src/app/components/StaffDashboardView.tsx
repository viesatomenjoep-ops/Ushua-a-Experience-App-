import { ShieldAlert, Map, CheckCircle2, MessageSquare, Bell } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function StaffDashboardView() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      
      {/* iPad Mockup */}
      <div className="flex justify-center lg:col-span-2 relative order-2 lg:order-1">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-[700px] aspect-[4/3] bg-black rounded-[2rem] border-[12px] border-[#333333] p-2 relative overflow-hidden shadow-2xl"
        >
          <div className="h-full w-full bg-[#111111] rounded-xl overflow-hidden flex relative">
            
            {/* Sidebar */}
            <div className="w-16 md:w-48 border-r border-[#333333] bg-[#1A1A1A] flex flex-col pt-6">
              <div className="px-4 mb-8 hidden md:block">
                <h4 className="text-white font-black text-sm tracking-tighter">USHUAÏA</h4>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">Command Center</p>
              </div>
              <nav className="flex-1 px-2 space-y-2">
                {[
                  { icon: Map, label: 'Live Map', active: true },
                  { icon: ShieldAlert, label: 'Security Alerts', badge: 2 },
                  { icon: MessageSquare, label: 'DJ / VIP Comms' },
                  { icon: CheckCircle2, label: 'Task Master' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${item.active ? 'bg-[#E60000]/10 text-[#E60000]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium hidden md:block">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-[#E60000] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center hidden md:flex">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-[#0A0A0A]">
              
              {/* Top Bar */}
              <div className="h-14 border-b border-[#333333] flex items-center justify-between px-6 bg-[#111111]">
                <h2 className="text-white font-bold">Active Event: David Guetta - F*** Me I'm Famous!</h2>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <span className="text-xs text-gray-400">All Systems Nominal</span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="flex-1 p-4 grid grid-cols-2 gap-4 overflow-y-auto custom-scrollbar">
                
                {/* Live Map Mock */}
                <div className="col-span-2 lg:col-span-1 bg-[#1A1A1A] rounded-xl border border-[#333333] p-4 flex flex-col">
                  <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                    <Map className="w-4 h-4 text-gray-400" /> Resort Map
                  </h3>
                  <div className="flex-1 bg-[#222] rounded-lg relative overflow-hidden flex items-center justify-center min-h-[150px]">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #E60000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#E60000] rounded-full animate-ping" />
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#E60000] rounded-full shadow-[0_0_15px_#E60000]" />
                    <span className="text-[10px] text-gray-400 absolute bottom-2 right-2">SOS ALERT: VIP CABANA 4</span>
                  </div>
                </div>

                {/* Task List */}
                <div className="col-span-2 lg:col-span-1 space-y-3">
                  <div className="bg-[#1A1A1A] rounded-xl border border-[#E60000]/30 border-l-4 border-l-[#E60000] p-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[#E60000] text-[10px] font-black tracking-widest uppercase">High Priority</span>
                      <span className="text-gray-500 text-[10px]">Just now</span>
                    </div>
                    <h4 className="text-white text-sm font-bold">MEDICAL SOS</h4>
                    <p className="text-xs text-gray-400">Guest unwell at Main Stage Right. Security & Medic dispatched.</p>
                  </div>

                  <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] border-l-4 border-l-[#D4AF37] p-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[#D4AF37] text-[10px] font-black tracking-widest uppercase">VIP Request</span>
                      <span className="text-gray-500 text-[10px]">2m ago</span>
                    </div>
                    <h4 className="text-white text-sm font-bold">More Towels & Ice</h4>
                    <p className="text-xs text-gray-400">DJ Backstage Green Room.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Feature Explanations */}
      <div className="lg:col-span-1 space-y-6 order-1 lg:order-2">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{t('staff.title')}</h3>
          <p className="text-gray-400">Empower your team with a real-time command center. Respond faster, ensure safety, and deliver flawless VIP service.</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-[#E60000]/10 p-2 rounded-lg mt-1">
              <ShieldAlert className="w-5 h-5 text-[#E60000]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Instant SOS Location</h4>
              <p className="text-sm text-gray-400">When a guest triggers the SOS button, their exact location flashes red on the management map, allowing security or medics to respond in seconds.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-white/5 p-2 rounded-lg mt-1">
              <MessageSquare className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Direct DJ & VIP Comms</h4>
              <p className="text-sm text-gray-400">Tour managers and high-tier VIPs have a direct line to head management, bypassing floor staff for critical requests (e.g., rider updates).</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-[#D4AF37]/10 p-2 rounded-lg mt-1">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Automated Dispatch</h4>
              <p className="text-sm text-gray-400">Housekeeping and runners receive tasks directly on their devices, streamlining operations and keeping the venue spotless.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
