import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-transparent border border-[#333333] hover:border-[#E60000] px-3 py-1.5 transition-colors group"
    >
      <Globe className="w-4 h-4 text-[#D4AF37] group-hover:text-[#E60000] transition-colors" />
      <span className="text-xs font-bold tracking-widest text-white uppercase">
        {language === 'en' ? 'EN' : 'ES'}
      </span>
    </button>
  );
}
