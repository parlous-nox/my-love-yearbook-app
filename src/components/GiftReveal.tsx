
import { useState } from "react";
import { Gift, Heart, Music, Sparkles, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GiftReveal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentGift, setCurrentGift] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleOpen = () => {
    setIsOpened(!isOpened);
  };

  const showGift = (gift: string) => {
    setCurrentGift(gift);
    setOpenDialog(true);
  };

  const gifts = [
    {
      id: "playlist",
      title: "Our Special Playlist",
      icon: <Music className="w-6 h-6 text-love-rose" />,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-dancing font-bold mb-4">Songs That Remind Me of You</h3>
          <div className="mb-6 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://open.spotify.com/embed/playlist/1KTxPHdP3dLgtKIwIxrgcp?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify playlist"
              className="rounded-md"
            ></iframe>
          </div>
          <p className="text-gray-600 text-sm mb-4">A collection of songs that make me think of you ❤️</p>
        </div>
      )
    },
    {
      id: "poem",
      title: "A Poem For You",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-dancing font-bold mb-4">Every Moment With You</h3>
          <div className="italic text-gray-700 mb-6 space-y-4">
            <p>
              In every sunrise, I find your smile,<br />
              In every star, your eyes that shine;<br />
              With every heartbeat, love grows stronger,<br />
              With every day, I love you longer.
            </p>
            <p>
              Distance may keep our hands apart,<br />
              But nothing can separate our hearts;<br />
              For love like ours knows no measure,<br />
              You are my greatest, truest treasure.
            </p>
          </div>
          <p className="font-dancing text-lg text-love-purple">— With all my love</p>
        </div>
      )
    },
    {
      id: "promise",
      title: "My Promise To You",
      icon: <Sparkles className="w-6 h-6 text-love-purple" />,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-dancing font-bold mb-4">My Promise</h3>
          <div className="border-2 border-dashed border-love-pink p-6 mb-6 rounded-lg bg-white/50 backdrop-blur-sm">
            <p className="mb-4 text-gray-700">
              I promise to be your support when times get tough, your joy when days are bright, and your constant companion through it all.
            </p>
            <p className="mb-6 text-gray-700">
              I promise to cherish every moment we spend together, whether close or far apart. To listen to your dreams and help make them reality.
            </p>
            <p className="text-lg font-medium text-love-purple">
              Most of all, I promise to love you more with each passing day.
            </p>
          </div>
          <div className="animate-pulse">
            <Heart className="w-8 h-8 text-love-rose mx-auto" />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-lg mx-auto text-center">
      <div 
        className={`love-card cursor-pointer transition-all duration-700 transform ${
          isOpened ? "animate-fade-in" : "hover:shadow-xl hover:scale-105"
        }`}
        onClick={toggleOpen}
      >
        {!isOpened ? (
          <div className="py-8 flex flex-col items-center">
            <Gift className="w-16 h-16 text-love-rose animate-pulse mb-4" />
            <h3 className="text-2xl font-dancing font-bold mb-4">
              A Special Gift Box For You, Zoya
            </h3>
            <p className="text-gray-600 mb-6">
              Click to unwrap your surprise gift box
            </p>
            <div className="love-button inline-flex items-center justify-center">
              Open gift box
            </div>
          </div>
        ) : (
          <div className="py-8 flex flex-col items-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-dancing font-bold mb-6 text-love-purple">
              Your special gifts await...
            </h3>
            
            <div className="relative mx-auto w-64 h-64 mb-8">
              {/* Animated gift box */}
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-love-light-purple to-love-purple rounded-lg flex items-center justify-center animate-pulse-heart">
                  <Sparkles className="w-12 h-12 text-white/80 animate-spin-slow" />
                </div>
              </div>
              
              {/* Floating gifts */}
              <div className="absolute w-full h-full">
                {gifts.map((gift, index) => (
                  <button
                    key={gift.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      showGift(gift.id);
                    }}
                    className={`absolute p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-300
                      ${index === 0 ? 'top-6 right-6' : 
                        index === 1 ? 'bottom-6 left-6' : 
                        'bottom-12 right-12'}`}
                    style={{
                      animation: `float-${index + 1} ${3 + index}s ease-in-out infinite`
                    }}
                  >
                    {gift.icon}
                  </button>
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-sm">
              Click on each floating icon to reveal a special gift I've prepared for you. Each one represents something from my heart to yours. ❤️
            </p>
            
            <button 
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-love-purple font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-love-rose" />
              With all my love
            </button>
          </div>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-gradient-to-br from-white to-love-light-purple/20 border border-love-pink">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-dancing font-bold text-love-purple">
              {currentGift && gifts.find(g => g.id === currentGift)?.title}
            </DialogTitle>
          </DialogHeader>
          {currentGift && gifts.find(g => g.id === currentGift)?.content}
        </DialogContent>
      </Dialog>

      <style>
        {`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
};

export default GiftReveal;
