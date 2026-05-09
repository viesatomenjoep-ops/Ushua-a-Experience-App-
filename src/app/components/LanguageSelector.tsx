import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] rounded-full px-3 py-1.5">
      <Globe className="w-4 h-4 text-[#D4AF37]" />
      <div className="flex gap-1 text-sm font-medium">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            language === 'en' ? 'bg-[#E60000] text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            language === 'es' ? 'bg-[#E60000] text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
}
