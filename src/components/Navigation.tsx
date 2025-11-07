import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md font-orbitron">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <Shield className="h-8 w-8 text-primary" /> */}
            <span className="text-xl font-bold text-foreground font-orbitron">s e c u r e . a i</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">
              Security Tools
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="demo" size="sm">
              Get Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#solutions"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={toggleMenu}
              >
                Solutions
              </a>
              <a
                href="#tools"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={toggleMenu}
              >
                Security Tools
              </a>
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" onClick={toggleMenu}>
                  Sign In
                </Button>
                <Button variant="demo" size="sm" onClick={toggleMenu}>
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;