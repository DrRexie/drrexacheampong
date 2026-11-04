import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Gold label, serif title and optional intro — the shared rhythm at the top of every section. */
const SectionHeader = ({ eyebrow, title, intro, align = "left", className }: SectionHeaderProps) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "mb-14 max-w-3xl transition-all duration-700",
        align === "center" && "mx-auto text-center",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.04] md:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
};

export default SectionHeader;
