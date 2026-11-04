import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";

const navLinks = [
  { label: "About", href: "#about", isPage: false },
  { label: "Expertise", href: "#expertise", isPage: false },
  { label: "Services", href: "#services", isPage: false },
  { label: "Work", href: "#work", isPage: false },
  { label: "Research", href: "#research", isPage: false },
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
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-gradient-to-b from-background/80 to-transparent"
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
            className="group relative flex items-center cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Dr. Rex Acheampong, home"
          >
            <BrandMark className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="ml-3 flex flex-col leading-none">
              <span className="font-serif text-[19px] font-bold tracking-[0.08em] text-primary">DR. REX ACHEAMPONG</span>
              <span className="mt-1 hidden sm:block text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">PhD · Health Informatics &amp; AI</span>
            </span>
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
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
              <Button size="sm" className="ml-2 px-5">
                Book a Call
              </Button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-xl -mx-6 px-6">
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
