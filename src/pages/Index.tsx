
import Header from "@/components/Header";
import CountdownTimer from "@/components/CountdownTimer";
import LoveLetter from "@/components/LoveLetter";
import LoveCard from "@/components/LoveCard";
import MemoriesSection from "@/components/MemoriesSection";
import GiftReveal from "@/components/GiftReveal";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { Heart, CakeSlice, CalendarHeart } from "lucide-react";

const Index = () => {
  // Anniversary date in IST (UTC+5:30)
  const anniversaryDate = "2025-05-08T00:00:00+05:30";
  
  const loveReasons = [
    {
      title: "Your Smile",
      description: "Your smile brightens even the darkest of my days, Zoya. It's like sunshine after rain."
    },
    {
      title: "Your Kindness",
      description: "The way you care for others shows the beautiful soul you have. Your kindness inspires me every day."
    },
    {
      title: "Your Support",
      description: "You've been my rock through everything. You believe in me even when I don't believe in myself."
    },
    {
      title: "Your Laugh",
      description: "Your laugh is my favorite sound in the whole world. It's music to my ears, Zoya."
    },
    {
      title: "Your Passion",
      description: "The way you pour your heart into everything you do is inspiring and beautiful to witness."
    },
    {
      title: "Our Conversations",
      description: "Every moment talking with you feels like an adventure, even when we're miles apart."
    }
  ];
  
  const memories = [
    {
      title: "When We First Met",
      description: "I still remember that day like it was yesterday. The way you smiled at me changed everything.",
      date: "May 2024"
    },
    {
      title: "Our First Call",
      description: "I was so nervous, but the moment we started talking, it felt like we'd known each other forever.",
      date: "May 2024"
    },
    {
      title: "Late Night Talks",
      description: "Those nights we stayed up talking until sunrise showed me how compatible we are.",
      date: "August 2024"
    },
    {
      title: "That Rainy Day",
      description: "When you sent me that picture of you in the rain, and we talked for hours about our dreams.",
      date: "October 2024"
    },
    {
      title: "Holiday Magic",
      description: "Our first holiday season together was magical, even from a distance. You made every tradition feel special.",
      date: "December 2024"
    }
  ];

  const timelineEvents = [
    {
      date: "",
      title: "Where It All Began",
      description: "Our beautiful journey began when we first connected online. Little did we know, that moment would be the start of something magical.",
    },
    {
      date: "",
      title: "Supporting Each Other",
      description: "When you helped me through that difficult time, I realized how much strength we give each other, even from a distance.",
    },
    {
      date: "",
      title: "One Year of Us",
      description: "Today, we celebrate one amazing year together. A year of growth, love, and building a connection I cherish more than anything. Here's to many more.",
      highlight: true
    }
  ];
  
  const loveLetter = `My dearest Zoya,

As we celebrate our first anniversary, I wanted to take a moment to tell you how much you mean to me.

This past year has been the most beautiful chapter of my life, all because of you. From our first conversation to this very moment, you have filled my days with joy, laughter, and so much love.

I cherish every smile, every call, every message we share. You've taught me what it means to truly love someone with my whole heart, even across the distance between us.

Thank you for being you. Thank you for choosing me. Thank you for making this the most incredible year.

I love you more with each passing day, and I can't wait to create countless more beautiful memories together.

Forever yours,
Ahmed`;

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-dancing font-bold mb-6">
              <span className="heart-bg">Zoya & Ahmed</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Celebrating 365 days of laughter, conversations, and endless love with you
            </p>
            
            <div className="relative inline-block mb-12">
              <Heart className="w-20 h-20 text-love-rose animate-pulse-heart mx-auto" />
              <div className="absolute -top-1 -right-1 bg-love-purple text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                1
              </div>
            </div>
            
            <CountdownTimer targetDate={anniversaryDate} />
          </div>
        </section>
        
        {/* Love Letter Section */}
        <section id="letter" className="py-20 px-4">
          <h2 className="section-title">A Letter For You</h2>
          <LoveLetter message={loveLetter} />
        </section>
        
        {/* Our Journey Timeline Section */}
        <section id="timeline" className="py-20 px-4 bg-love-light-purple/20">
          <h2 className="section-title">Our Journey Together</h2>
          <InteractiveTimeline events={timelineEvents} />
        </section>
        
        {/* Why I Love You Section */}
        <section id="reasons" className="py-20 px-4">
          <h2 className="section-title">Why I Love You</h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loveReasons.map((reason, index) => (
              <LoveCard 
                key={index}
                title={reason.title}
                description={reason.description}
                index={index}
              />
            ))}
          </div>
        </section>
        
        {/* Favorite Memories Section */}
        <section className="py-20 px-4 bg-love-pink/20">
          <h2 className="section-title">Favorite Memories</h2>
          <MemoriesSection memories={memories} />
        </section>
        
        {/* Gift Reveal Section */}
        <section id="gift" className="py-20 px-4">
          <h2 className="section-title">A Special Surprise</h2>
          <GiftReveal />
        </section>
        
        {/* Final Message Section */}
        <section className="py-20 px-4 text-center">
          <div className="love-card max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-love-rose animate-rotate-heart mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-6 heart-bg">
              Here's to Many More Years
            </h2>
            <p className="text-lg mb-6">
              Thank you for the most amazing year of my life, Zoya. I can't wait to see what the future holds for us.
              Every day with you is a gift that I cherish deeply.
            </p>
            <p className="text-2xl font-dancing font-bold text-love-purple">
              I love you more than words can express.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <CakeSlice className="w-6 h-6 text-love-rose" />
              <span className="text-love-rose font-medium">Happy Anniversary!</span>
              <CakeSlice className="w-6 h-6 text-love-rose" />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <div className="container mx-auto">
          <p>Made with love for our anniversary ❤️</p>
          <p>May 8, 2024 - May 8, 2025</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
