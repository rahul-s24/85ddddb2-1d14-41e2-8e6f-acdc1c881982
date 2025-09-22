import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light mb-8 text-foreground tracking-tight">
            TicketVault
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground font-light max-w-2xl mx-auto">
            Secure marketplace for sold-out concert tickets
          </p>
          
          {/* Search Bar */}
          <div className="bg-card border border-border rounded-lg p-1 max-w-xl mx-auto mb-16">
            <div className="flex items-center gap-3">
              <Search className="text-muted-foreground ml-4 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search artists or events"
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground border-none outline-none py-4 text-lg"
              />
              <Button variant="default" size="lg" className="m-1">
                Search
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-light text-foreground mb-1">50K+</div>
              <div>Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-foreground mb-1">100%</div>
              <div>Secure</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-foreground mb-1">24/7</div>
              <div>Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;