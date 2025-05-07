
import Header from "@/components/Header";
import CountdownTimer from "@/components/CountdownTimer";
import LoveLetter from "@/components/LoveLetter";
import TimelineEvent from "@/components/TimelineEvent";
import LoveCard from "@/components/LoveCard";
import MemoriesSection from "@/components/MemoriesSection";
import GiftReveal from "@/components/GiftReveal";
import { Heart, CakeSlice, CalendarHeart } from "lucide-react";

const Index = () => {
  // This should be your anniversary date
  const anniversaryDate = "2025-05-08";
  
  const loveReasons = [
    {
      title: "Your Smile",
      description: "Your smile brightens even the darkest of my days. It's like sunshine after rain."
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
      description: "Your laugh is my favorite sound in the whole world. It's music to my ears."
    },
    {
      title: "Your Passion",
      description: "The way you pour your heart into everything you do is inspiring and beautiful to witness."
    },
    {
      title: "Our Adventures",
      description: "Every moment with you feels like an adventure, even the ordinary days become extraordinary."
    }
  ];
  
  const memories = [
    {
      title: "When We First Met",
      description: "I still remember that day like it was yesterday. The way you smiled at me changed everything.",
      date: "May 2024"
    },
    {
      title: "Our First Date",
      description: "I was so nervous, but the moment we started talking, it felt like we'd known each other forever.",
      date: "May 2024"
    },
    {
      title: "Our First Trip",
      description: "Exploring new places with you showed me how compatible we are and how much fun we have together.",
      date: "August 2024"
    },
    {
      title: "That Rainy Day",
      description: "We got caught in the rain and instead of running for cover, we danced. I knew then how special you are.",
      date: "October 2024"
    },
    {
      title: "Holiday Magic",
      description: "Our first holiday season together was magical. You made every tradition feel new and exciting.",
      date: "December 2024"
    }
  ];
  
  const loveLetter = `My dearest love,

As we celebrate our first anniversary, I wanted to take a moment to tell you how much you mean to me.

This past year has been the most beautiful chapter of my life, all because of you. From our first conversation to this very moment, you have filled my days with joy, laughter, and so much love.

I cherish every smile, every touch, every quiet moment we share. You've taught me what it means to truly love someone with my whole heart.

Thank you for being you. Thank you for choosing me. Thank you for making this the most incredible year.

I love you more with each passing day, and I can't wait to create countless more beautiful memories together.

Forever yours,
[Your Name]`;

  return (
    <>
      <Header />
      
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-dancing font-bold mb-6">
              <span className="heart-bg">One Year of Love</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Celebrating 365 days of laughter, adventures, and endless love with you
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
          
          <div className="max-w-3xl mx-auto">
            <TimelineEvent 
              date="May 2024" 
              title="Where It All Began"
            >
              <p>
                Our beautiful journey began when we first met. Little did we know,
                that moment would be the start of something magical.
              </p>
            </TimelineEvent>
            
            <TimelineEvent 
              date="July 2024" 
              title="First 'I Love You'"
              isEven={true}
            >
              <p>
                Under the stars, when you first told me you loved me, my heart felt complete.
                Those three words changed everything.
              </p>
            </TimelineEvent>
            
            <TimelineEvent 
              date="October 2024" 
              title="Our First Adventure"
            >
              <p>
                Our trip to the mountains showed me how incredible exploring the world with you could be.
                Every view was better because we shared it.
              </p>
            </TimelineEvent>
            
            <TimelineEvent 
              date="December 2024" 
              title="Holiday Magic"
              isEven={true}
            >
              <p>
                Our first holiday season together was filled with warmth, love, and new traditions
                that I hope we'll continue for years to come.
              </p>
            </TimelineEvent>
            
            <TimelineEvent 
              date="February 2025" 
              title="Through Challenges"
            >
              <p>
                Even when times were tough, we faced everything together. Your strength
                and resilience amazed me and made our bond stronger.
              </p>
            </TimelineEvent>
            
            <TimelineEvent 
              date="May 8, 2025" 
              title="One Year of Us"
              isEven={true}
            >
              <p>
                Today, we celebrate one amazing year together. A year of growth, love, and building
                a connection I cherish more than anything. Here's to many more.
              </p>
              <div className="flex justify-center mt-4">
                <CalendarHeart className="w-8 h-8 text-love-rose animate-pulse-heart" />
              </div>
            </TimelineEvent>
          </div>
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
              Thank you for the most amazing year of my life. I can't wait to see what the future holds for us.
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
