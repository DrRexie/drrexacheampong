import BrandMark from "@/components/BrandMark";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-[hsl(240_4%_3.5%)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <BrandMark className="w-7 h-7" />
            <span>© {new Date().getFullYear()} Rex Acheampong, PhD. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
