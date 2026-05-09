import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    'nav.pitch': 'Pitch Overview',
    'nav.vip': 'VIP & Upsell Flow',
    'nav.staff': 'Staff / SOS Dashboard',
    'nav.preview': 'App Preview (Mobile)',
    'hero.title': 'The Ushuaïa Experience',
    'hero.subtitle': 'The ultimate all-in-one ecosystem for guests, VIPs, and staff. Elevate the nightlife and maximize revenue.',
    'pricing.title': 'Partnership Models',
    'pricing.enterprise': 'Enterprise Setup',
    'pricing.operations': 'Operations & SLA',
    'pricing.performance': 'Performance Partner',
    'pricing.enterprise.desc': 'Full custom deployment of the Ushuaïa ecosystem.',
    'pricing.operations.desc': '24/7 dedicated support and continuous optimization.',
    'pricing.performance.desc': 'Revenue-share model aligned with your growth.',
    'roi.title': 'ROI Projection Calculator',
    'roi.revenue': 'Estimated Daily Revenue',
    'roi.upsell': 'Upsell Conversion Rate',
    'roi.calculate': 'Calculate ROI',
    'roi.projected': 'Projected Monthly Lift:',
    'vip.title': 'VIP & Upsell Flow',
    'vip.pay': 'Ushuaïa Pay (Direct Checkout)',
    'vip.bidding': 'Dynamic Bidding (Cabanas & Daybeds)',
    'vip.bottle': 'Fast-Track Bottle Service',
    'staff.title': 'Staff & Management Dashboard',
    'staff.alerts': 'Live SOS Alerts',
    'staff.tasks': 'Housekeeping & Runner Tasks',
    'staff.dj': 'DJ Riders & VIP Requests',
  },
  es: {
    'nav.pitch': 'Resumen del Pitch',
    'nav.vip': 'Flujo VIP y Upsell',
    'nav.staff': 'Panel de Personal / SOS',
    'nav.preview': 'Vista Previa (App)',
    'hero.title': 'La Experiencia Ushuaïa',
    'hero.subtitle': 'El ecosistema definitivo para invitados, VIPs y personal. Eleva la vida nocturna y maximiza los ingresos.',
    'pricing.title': 'Modelos de Asociación',
    'pricing.enterprise': 'Configuración Enterprise',
    'pricing.operations': 'Operaciones y SLA',
    'pricing.performance': 'Socio de Rendimiento',
    'pricing.enterprise.desc': 'Implementación personalizada completa del ecosistema.',
    'pricing.operations.desc': 'Soporte dedicado 24/7 y optimización continua.',
    'pricing.performance.desc': 'Modelo de reparto de ingresos alineado con el crecimiento.',
    'roi.title': 'Calculadora de Proyección de ROI',
    'roi.revenue': 'Ingresos Diarios Estimados',
    'roi.upsell': 'Tasa de Conversión de Upsell',
    'roi.calculate': 'Calcular ROI',
    'roi.projected': 'Aumento Mensual Proyectado:',
    'vip.title': 'Flujo VIP y Upsell',
    'vip.pay': 'Ushuaïa Pay (Pago Directo)',
    'vip.bidding': 'Pujas Dinámicas (Camas Balinesas)',
    'vip.bottle': 'Servicio Rápido de Botellas',
    'staff.title': 'Panel de Administración y Personal',
    'staff.alerts': 'Alertas SOS en Vivo',
    'staff.tasks': 'Tareas de Limpieza y Asistentes',
    'staff.dj': 'Peticiones de DJs y VIPs',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
