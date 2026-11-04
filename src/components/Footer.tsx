import BrandMark from "@/components/BrandMark";

const links = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact-form" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-[hsl(240_4%_3.5%)] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <BrandMark className="h-12 w-12" />
            <div>
              <p className="font-serif text-xl font-bold tracking-[0.08em] text-primary">DR. REX ACHEAMPONG</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">PhD · Health Informatics &amp; AI</p>
            </div>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Rex Acheampong, PhD. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs tracking-wider">English · Twi · Ga</span>
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
