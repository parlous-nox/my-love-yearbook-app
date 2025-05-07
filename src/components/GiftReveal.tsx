
import { useState } from "react";
import { Gift, Heart } from "lucide-react";

const GiftReveal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const toggleOpen = () => {
    setIsOpened(!isOpened);
    if (!isOpened) {
      setTimeout(() => setShowPlaylist(true), 1000);
    } else {
      setShowPlaylist(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <div 
        className={`love-card cursor-pointer transition-all duration-700 transform ${
          isOpened ? "bg-gradient-to-br from-love-light-purple to-love-purple" : ""
        }`}
        onClick={toggleOpen}
      >
        {!isOpened ? (
          <div className="py-8 flex flex-col items-center">
            <Gift className="w-16 h-16 text-love-rose animate-pulse mb-4" />
            <h3 className="text-2xl font-dancing font-bold mb-4">
              A Special Gift For You, Zoya
            </h3>
            <p className="text-gray-600 mb-6">
              Click to reveal your surprise
            </p>
            <div className="love-button inline-flex items-center justify-center">
              Open gift
            </div>
          </div>
        ) : (
          <div className="py-8 flex flex-col items-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-dancing font-bold mb-6 text-white">
              Your special playlist awaits...
            </h3>
            <p className="text-white mb-6 max-w-sm">
              I've created a special playlist with all our favorite songs. Each one reminds me of a special moment with you. Click below to listen and remember all those beautiful memories we've shared. ❤️
            </p>
            
            {showPlaylist && (
              <div className="w-full max-w-sm bg-white/90 rounded-lg p-4 shadow-lg mb-4 animate-fade-in">
                <h4 className="font-dancing text-xl font-bold text-love-purple mb-2">
                  Songs That Remind Me of You
                </h4>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-love-rose" />
                    <span>Our First Dance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-love-rose" />
                    <span>The Song From Our First Date</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-love-rose" />
                    <span>That Song You Always Sing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-love-rose" />
                    <span>The One That Made Us Laugh</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-love-rose" />
                    <span>Our Late Night Drive Song</span>
                  </li>
                </ul>
              </div>
            )}
            
            <a 
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-love-purple font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              Listen to our playlist
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftReveal;
