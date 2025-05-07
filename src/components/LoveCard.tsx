
import { useState } from "react";
import { Heart } from "lucide-react";

interface LoveCardProps {
  title: string;
  description: string;
  index: number;
}

const LoveCard = ({ title, description, index }: LoveCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const colorClasses = [
    "bg-gradient-to-br from-love-pink to-love-rose",
    "bg-gradient-to-br from-love-light-purple to-love-purple",
    "bg-gradient-to-br from-love-peach to-love-red",
  ];

  const colorClass = colorClasses[index % colorClasses.length];

  return (
    <div 
      className={`relative w-full h-64 love-card perspective-1000 cursor-pointer ${isFlipped ? 'z-10' : ''}`}
      onClick={handleFlip}
      style={{animationDelay: `${index * 0.15}s`}}
    >
      <div className={`absolute w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 ${colorClass} rounded-2xl shadow-lg`}>
          <Heart className="w-10 h-10 text-white animate-pulse-heart mb-4" />
          <h3 className="text-xl md:text-2xl font-dancing font-bold text-white text-center">
            {title}
          </h3>
          <div className="absolute bottom-4 right-4 text-white/70">
            <span className="text-xs">Click to flip</span>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LoveCard;
