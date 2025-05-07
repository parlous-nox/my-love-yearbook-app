
import { useState } from "react";
import { Gift } from "lucide-react";

const GiftReveal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleOpen = () => {
    setIsOpened(!isOpened);
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
              A Special Gift For You
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
              Your gift awaits...
            </h3>
            <p className="text-white mb-6 max-w-sm">
              I've planned a special weekend getaway for us at that beautiful resort 
              we've been talking about! Check your email for all the details. ❤️
            </p>
            <div 
              className="bg-white text-love-purple font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              I love you!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftReveal;
