import { Button } from "@/components/ui/button";
import { Search, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/concert-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-accent bg-clip-text text-transparent">
            Get Into Any Show
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Buy and sell sold-out concert tickets with complete security. Your dream show is just one click away.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 max-w-2xl mx-auto mb-8 border border-white/20">
            <div className="flex items-center gap-4">
              <Search className="text-white/70 ml-4 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search for artists, venues, or events..."
                className="flex-1 bg-transparent text-white placeholder-white/60 border-none outline-none py-3"
              />
              <Button variant="default" size="lg" className="rounded-xl">
                Search
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>100% Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-400" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">★★★★★</span>
              <span>Trusted by 50K+ fans</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;