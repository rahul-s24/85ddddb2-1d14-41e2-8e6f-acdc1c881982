import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ import Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TicketVault
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Browse
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/sell"
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Sell
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* ⬇️ wrap Button in Link */}
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                Log In
              </Button>
            </Link>
            <Link to="/Signup">
              <Button variant="default"
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
                Sign Up
              </Button>
            </Link>
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
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Browse
              </Link>
              <Link
                to="/sell"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Sell
              </Link>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Support
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="justify-start font-light">
                    Sign In
                  </Button>
                </Link>
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
