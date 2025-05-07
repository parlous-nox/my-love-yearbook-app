
import { ReactNode } from "react";

interface TimelineEventProps {
  date: string;
  title: string;
  children: ReactNode;
  isEven?: boolean;
}

const TimelineEvent = ({ date, title, children, isEven }: TimelineEventProps) => {
  return (
    <div className="relative pl-10 pb-10 animate-fade-in" style={{ animationDelay: isEven ? '0.2s' : '0' }}>
      <div className="timeline-dot"></div>
      <div className="timeline-line"></div>
      
      <div className="love-card animate-slide-up" style={{ animationDelay: isEven ? '0.3s' : '0.1s' }}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start mb-3">
          <span className="text-sm px-3 py-1 rounded-full bg-love-light-purple text-love-purple font-medium">
            {date}
          </span>
          <h3 className="text-xl md:text-2xl font-dancing font-bold text-love-rose">
            {title}
          </h3>
        </div>
        <div className="prose prose-pink max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
