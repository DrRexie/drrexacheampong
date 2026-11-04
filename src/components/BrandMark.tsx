import { cn } from "@/lib/utils";

/**
 * Dr. Rex Acheampong brand marks (gold on black). CHOSEN selects the one the site uses.
 * crown: "Rex" = king · crest: modern shield with R + staff · caduceus: single-line caduceus · laurel: laurel monogram
 */
export type MarkName = "crown" | "crest" | "caduceus" | "laurel";
export const CHOSEN: MarkName = "crown";

const GOLD = "#D4AF5A";

const leaves: [number, number, number][] = [
  [19, 64, -60], [16, 50, -80], [18, 36, -105], [24, 25, -125],
  [81, 64, 60], [84, 50, 80], [82, 36, 105], [76, 25, 125],
];

function Glyph({ name, color }: { name: MarkName; color: string }) {
  switch (name) {
    case "crown":
      return (
        <>
          <path d="M22 66 L26 34 L40 50 L50 26 L60 50 L74 34 L78 66 Z" fill="none" stroke={color} strokeWidth="5" strokeLinejoin="round" />
          <circle cx="26" cy="29" r="4.5" fill={color} />
          <circle cx="50" cy="20" r="5" fill={color} />
          <circle cx="74" cy="29" r="4.5" fill={color} />
          <path d="M22 76 H78" stroke={color} strokeWidth="5" strokeLinecap="round" />
        </>
      );
    case "crest":
      return (
        <>
          <path d="M50 10 L82 21 V48 C82 70 68 84 50 92 C32 84 18 70 18 48 V21 Z" fill="none" stroke={color} strokeWidth="4" />
          <text x="50" y="66" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="700" fontSize="46" fill={color}>R</text>
          <path d="M50 24 V80" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <circle cx="50" cy="22" r="3" fill={color} />
        </>
      );
    case "caduceus":
      return (
        <>
          <path d="M50 14 V88" stroke={color} strokeWidth="5" strokeLinecap="round" />
          <circle cx="50" cy="13" r="5" fill={color} />
          <path d="M50 30 C24 24 22 18 22 18 C30 30 40 34 50 36 M50 30 C76 24 78 18 78 18 C70 30 60 34 50 36" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 42 C38 48 38 58 50 60 C62 62 62 72 40 78" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="63" cy="41" r="3.5" fill={color} />
        </>
      );
    case "laurel":
      return (
        <>
          <path d="M30 80 C14 66 12 40 26 22" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M70 80 C86 66 88 40 74 22" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {leaves.map(([x, y, r]) => (
            <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="6" ry="2.6" transform={`rotate(${r} ${x} ${y})`} fill={color} />
          ))}
          <text x="50" y="66" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="700" fontSize="48" fill={color}>R</text>
          <path d="M38 86 H62" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        </>
      );
  }
}

interface BrandMarkProps {
  className?: string;
  name?: MarkName;
  /** Draw the mark on a black rounded tile (for icons). */
  tile?: boolean;
  color?: string;
  title?: string;
}

const BrandMark = ({ className, name = CHOSEN, tile = false, color = GOLD, title }: BrandMarkProps) => (
  <svg
    viewBox="0 0 100 100"
    className={cn("shrink-0", className)}
    role={title ? "img" : undefined}
    aria-label={title}
    aria-hidden={title ? undefined : true}
  >
    {tile && <rect width="100" height="100" rx="22" fill="#0B0B0C" />}
    <Glyph name={name} color={color} />
  </svg>
);

export default BrandMark;
