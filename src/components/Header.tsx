
import { Heart } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-love-rose animate-pulse-heart" />
          <span className="font-dancing text-xl font-bold text-love-rose">Our Love Story</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-love-rose transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('letter')}
            className="text-gray-700 hover:text-love-rose transition-colors"
          >
            Letter
          </button>
          <button 
            onClick={() => scrollToSection('timeline')}
            className="text-gray-700 hover:text-love-rose transition-colors"
          >
            Our Journey
          </button>
          <button 
            onClick={() => scrollToSection('reasons')}
            className="text-gray-700 hover:text-love-rose transition-colors"
          >
            Why I Love You
          </button>
          <button 
            onClick={() => scrollToSection('gift')}
            className="text-gray-700 hover:text-love-rose transition-colors"
          >
            Gift
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
