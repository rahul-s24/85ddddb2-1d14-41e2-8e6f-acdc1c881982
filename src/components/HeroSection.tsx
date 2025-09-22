import { Button } from "@/components/ui/button";
import { Search, Star, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-card border border-border rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Trusted by 50K+ fans</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
            TicketVault
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The most secure marketplace for sold-out concert tickets. 
            <span className="text-foreground"> Get into any show.</span>
          </p>
          
          {/* Search Bar */}
          <div className="bg-gradient-card border border-border rounded-2xl p-2 max-w-2xl mx-auto mb-16 shadow-card">
            <div className="flex items-center gap-4">
              <Search className="text-muted-foreground ml-4 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search artists, venues, or events..."
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground border-none outline-none py-4 text-lg"
              />
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity m-1 shadow-glow"
              >
                Search
              </Button>
            </div>
          </div>
          
          {/* Trust Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">5.0</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;