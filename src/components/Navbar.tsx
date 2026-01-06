import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import rexLogo from "@/assets/rex-logo.png";

const navLinks = [
  { label: "About", href: "#about", isPage: false },
  { label: "Projects", href: "#projects", isPage: false },
  { label: "Services", href: "#services", isPage: false },
  { label: "Gallery", href: "/gallery", isPage: true },
  { label: "Contact", href: "#contact-form", isPage: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isPage: boolean) => {
    if (!isPage && location.pathname !== "/") {
      // Navigate to home first, then scroll to section
      window.location.href = "/" + href;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group relative flex items-center cursor-pointer"
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 bg-white">
              <img 
                src={rexLogo} 
                alt="Rex Acheampong - Home" 
                className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.label}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  key={link.label}
                  href={location.pathname === "/" ? link.href : "/" + link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleNavClick(link.href, link.isPage)}
                >
                  {link.label}
                </a>
              )
            ))}
            <a href="tel:+19735635798">
              <Button size="sm" className="ml-4">
                Book a Call
              </Button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link 
                  key={link.label}
                  to={link.href}
                  className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  key={link.label}
                  href={location.pathname === "/" ? link.href : "/" + link.href}
                  className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <a href="tel:+19735635798" className="w-full">
              <Button size="sm" className="w-full mt-4">
                Book a Call
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
