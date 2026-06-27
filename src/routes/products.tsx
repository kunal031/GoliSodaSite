import { createFileRoute, Link } from "@tanstack/react-router";
import flavorsLineup from "@/assets/flavors-lineup.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Flavours — Goli Soda" },
      { name: "description", content: "Six bold Goli Soda flavours: Classic Lemon, Orange, Jeera Masala, Rose, Kala Khatta and Green Apple. Available in 200ml glass and 250ml PET." },
      { property: "og:title", content: "Goli Soda Flavours" },
      { property: "og:description", content: "Six punchy flavours, bottled by Uday Food & Beverages." },
      { property: "og:image", content: flavorsLineup },
    ],
  }),
  component: Products,
});

type Flavour = {
  name: string;
  tagline: string;
  description: string;
  serving: string;
  packs: string[];
  swatch: string;
  emoji: string;
};

const flavours: Flavour[] = [
  {
    name: "Classic Lemon",
    tagline: "The original",
    description: "Zesty lemon kissed with rock salt — the goli soda you grew up chasing down the street.",
    serving: "200 ml · per bottle",
    packs: ["200ml glass", "250ml PET", "Crate of 24"],
    swatch: "oklch(0.9 0.18 100)",
    emoji: "🍋",
  },
  {
    name: "Orange Tang",
    tagline: "Sunshine in a bottle",
    description: "Juicy Nagpur orange with a tangy edge. Tropical, bright, refreshing.",
    serving: "200 ml · per bottle",
    packs: ["200ml glass", "250ml PET", "Crate of 24"],
    swatch: "oklch(0.78 0.19 55)",
    emoji: "🍊",
  },
  {
    name: "Jeera Masala",
    tagline: "The desi classic",
    description: "Roasted cumin, black salt and a hint of mint. The chatpata kick after every meal.",
    serving: "200 ml · per bottle",
    packs: ["200ml glass", "250ml PET", "Crate of 24"],
    swatch: "oklch(0.55 0.1 50)",
    emoji: "🌿",
  },
  {
    name: "Rose Sharbat",
    tagline: "Garden-fresh",
    description: "Damascus rose syrup with sparkling soda. Floral, smooth, unforgettable.",
    serving: "200 ml · per bottle",
    packs: ["200ml glass", "250ml PET", "Crate of 24"],
    swatch: "oklch(0.7 0.18 12)",
    emoji: "🌹",
  },
  {
    name: "Kala Khatta",
    tagline: "Khatta-meetha legend",
    description: "That iconic purple jamun-and-tamarind rush. Sweet, sour, and full of attitude.",
    serving: "200 ml · per bottle",
    packs: ["200ml glass", "250ml PET", "Crate of 24"],
    swatch: "oklch(0.42 0.16 320)",
    emoji: "🍇",
  },
  {
    name: "Green Apple",
    tagline: "Crisp & cool",
    description: "Crunchy green apple with a sharp fizz. The crowd-favourite for kids and cocktails.",
    serving: "200 ml · per bottle",
    packs: ["200ml glass", "250ml PET", "Crate of 24"],
    swatch: "oklch(0.78 0.18 145)",
    emoji: "🍏",
  },
];

function Products() {
  return (
    <>
      <section className="border-b-2 border-foreground bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <span className="chip" style={{ background: "var(--cream)" }}>Our Range</span>
          <h1 className="mt-3 text-5xl sm:text-6xl">Six flavours. One iconic pop.</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Every Goli Soda bottle is sealed with a glass marble — that satisfying click means freshness is locked in until you pop it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flavours.map((f) => (
            <article key={f.name} className="card-pop overflow-hidden transition-transform hover:-translate-y-1">
              <div
                className="relative grid aspect-[4/3] place-items-center border-b-2 border-foreground"
                style={{ background: f.swatch }}
              >
                <span className="text-7xl drop-shadow-sm">{f.emoji}</span>
                <span className="absolute left-3 top-3 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {f.tagline}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-2xl">{f.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-foreground/70">
                  {f.serving}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {f.packs.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border-2 border-foreground bg-secondary px-3 py-1 text-xs font-bold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-3xl sm:text-4xl">Want the full price list?</h2>
            <p className="mt-2 opacity-80">Retailers and wholesalers — send us an inquiry and we'll share crate pricing and MOQs.</p>
          </div>
          <Link to="/contact" className="btn-pop btn-pop-hover">Request pricing <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}