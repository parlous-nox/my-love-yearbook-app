
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-love-rose animate-pulse-heart" />
          <span className="font-dancing text-xl font-bold text-love-rose">Our Love Story</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
