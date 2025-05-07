
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface LoveLetterProps {
  message: string;
}

const LoveLetter = ({ message }: LoveLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      setDisplayText("");
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    let typingInterval: ReturnType<typeof setInterval> | null = null;
    
    if (isOpen && currentIndex < message.length) {
      typingInterval = setInterval(() => {
        setDisplayText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [isOpen, currentIndex, message]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        className={`love-card transition-all duration-500 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-90"
        }`}
      >
        <div className="text-center mb-4">
          <h3 className="text-2xl md:text-3xl font-dancing font-bold text-love-rose mb-2">
            A Letter For You
          </h3>
          <p className="text-sm text-gray-500">Click the envelope to {isOpen ? "close" : "open"}</p>
        </div>
        
        <div 
          className={`relative bg-gradient-to-br from-love-pink to-love-peach p-6 rounded-lg cursor-pointer transition-all duration-500 transform ${
            isOpen ? "h-auto" : "h-32"
          }`}
          onClick={toggleLetter}
        >
          {!isOpen && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-2">
                <Heart className="w-8 h-8 text-white animate-pulse-heart" />
                <span className="text-white font-medium">Open letter</span>
              </div>
            </div>
          )}
          
          {isOpen && (
            <div className="p-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-inner">
              <p className="font-dancing text-xl md:text-2xl leading-relaxed whitespace-pre-line">
                {displayText}
                <span className="animate-pulse inline-block ml-1">|</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
