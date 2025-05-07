
import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Memory {
  title: string;
  description: string;
  date: string;
}

interface MemoriesSectionProps {
  memories: Memory[];
}

const MemoriesSection = ({ memories }: MemoriesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMemory = () => {
    setActiveIndex((current) => 
      current === memories.length - 1 ? 0 : current + 1
    );
  };

  const prevMemory = () => {
    setActiveIndex((current) => 
      current === 0 ? memories.length - 1 : current - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="love-card min-h-[300px] relative">
        <div className="absolute -top-4 -left-4 bg-love-rose p-2 rounded-full shadow-lg">
          <Heart className="w-6 h-6 text-white animate-pulse-heart" />
        </div>
        
        <div className="flex flex-col items-center justify-center py-6 px-4">
          {memories.map((memory, index) => (
            <div 
              key={index} 
              className={cn(
                "absolute transition-all duration-500 w-full max-w-xl px-4",
                index === activeIndex 
                  ? "opacity-100 translate-x-0" 
                  : index < activeIndex 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              )}
            >
              <div className="text-center mb-6">
                <span className="text-sm px-3 py-1 rounded-full bg-love-light-purple text-love-purple font-medium">
                  {memory.date}
                </span>
                <h3 className="text-2xl md:text-3xl font-dancing font-bold text-love-rose mt-3">
                  {memory.title}
                </h3>
              </div>
              <p className="text-center text-lg">
                {memory.description}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
          <button 
            onClick={prevMemory}
            className="bg-white p-2 rounded-full shadow-md hover:bg-love-pink transition-colors"
            aria-label="Previous memory"
          >
            <ChevronLeft className="w-6 h-6 text-love-rose" />
          </button>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
          <button 
            onClick={nextMemory}
            className="bg-white p-2 rounded-full shadow-md hover:bg-love-pink transition-colors"
            aria-label="Next memory"
          >
            <ChevronRight className="w-6 h-6 text-love-rose" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {memories.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-love-rose w-4" : "bg-love-pink"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to memory ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;
