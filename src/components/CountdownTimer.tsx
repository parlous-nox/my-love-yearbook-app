
import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { days: number; hours: number; minutes: number; seconds: number } = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isAnniversary, setIsAnniversary] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Check if it's the anniversary date
      const today = new Date();
      const anniversary = new Date(targetDate);
      setIsAnniversary(
        today.getDate() === anniversary.getDate() &&
        today.getMonth() === anniversary.getMonth() &&
        today.getFullYear() === anniversary.getFullYear()
      );
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="w-full max-w-xl mx-auto">
      {isAnniversary ? (
        <div className="animate-fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-4 text-love-rose">
            Happy Anniversary!
          </h2>
          <p className="text-xl">Today marks one amazing year together ❤️</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-dancing text-center mb-6 text-love-purple">
            Counting down to our special day
          </h2>
          <div className="flex justify-center gap-4">
            <div className="countdown-item">
              <span className="text-3xl md:text-4xl font-bold text-love-rose">
                {timeLeft.days}
              </span>
              <span className="text-sm uppercase text-gray-600">Days</span>
            </div>
            <div className="countdown-item">
              <span className="text-3xl md:text-4xl font-bold text-love-rose">
                {timeLeft.hours}
              </span>
              <span className="text-sm uppercase text-gray-600">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="text-3xl md:text-4xl font-bold text-love-rose">
                {timeLeft.minutes}
              </span>
              <span className="text-sm uppercase text-gray-600">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="text-3xl md:text-4xl font-bold text-love-rose">
                {timeLeft.seconds}
              </span>
              <span className="text-sm uppercase text-gray-600">Seconds</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
