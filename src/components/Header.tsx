import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import collegeLogo from '@/assets/college-logo.jpg';

interface HeaderProps {
  showHomeButton?: boolean;
}

const Header = ({ showHomeButton = false }: HeaderProps) => {
  return (
    <header className="relative py-8 px-4 text-center">
      {showHomeButton && (
        <Link 
          to="/" 
          className="no-print absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-elegant border border-border/50 text-foreground hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <Home className="w-5 h-5" />
          <span className="hidden md:inline font-medium">Home</span>
        </Link>
      )}
      
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl scale-150" />
          <img 
            src={collegeLogo} 
            alt="Ramakrishna Mission Vivekananda College Logo" 
            className="relative w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-lg animate-float"
            width={144}
            height={144}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        
        <div className="space-y-2">
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Ramakrishna Mission Vivekananda College
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-body text-muted-foreground">
            B.Com Information System Management
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
