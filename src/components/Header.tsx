import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-light text-foreground">
              TicketVault
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Browse
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Sell
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Support
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="font-light">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="font-light">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                Browse
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                Sell
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                Support
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start font-light">
                  Sign In
                </Button>
                <Button variant="default" size="sm" className="font-light">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;