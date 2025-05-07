
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, CalendarHeart } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
}

const InteractiveTimeline = ({ events }: InteractiveTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = events[activeIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="love-card pb-12 relative overflow-hidden">
        <Carousel
          className="w-full"
          onSelect={(index) => setActiveIndex(index)}
        >
          <CarouselContent className="-ml-1">
            {events.map((event, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/1">
                <div className="love-card min-h-[300px] flex flex-col items-center justify-center p-6 border-none shadow-none relative">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <CalendarHeart className="w-full h-full text-love-purple" />
                  </div>
                  
                  <div className="text-center mb-6 animate-fade-in">
                    <span className="text-sm px-3 py-1 rounded-full bg-love-light-purple text-love-purple font-medium">
                      {event.date}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-dancing font-bold text-love-rose mt-3">
                      {event.title}
                    </h3>
                  </div>
                  <div className="prose prose-pink max-w-none animate-fade-in text-center">
                    <p className="text-lg">{event.description}</p>
                  </div>
                  {event.highlight && (
                    <div className="mt-6 animate-pulse-heart">
                      <Heart className="w-8 h-8 text-love-rose" />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-6 gap-2">
            <CarouselPrevious className="relative static left-0 translate-y-0 h-10 w-10 rounded-full" />
            <div className="flex items-center justify-center gap-1">
              {events.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? "bg-love-rose w-6" : "bg-love-pink"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative static right-0 translate-y-0 h-10 w-10 rounded-full" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
