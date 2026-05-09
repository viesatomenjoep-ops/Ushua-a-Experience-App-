export function HummingbirdLogo({ className }: { className?: string }) {
  return (
    <img 
      src="/colibri.png" 
      alt="Ushuaïa Logo" 
      className={`object-contain ${className || ''}`}
    />
  );
}
