import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroBottle from "@/assets/hero-bottle.jpg";
import { Sparkles, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goli Soda — Thanda Thanda, Mazaa Mazaa" },
      { name: "description", content: "The original marble-pop Goli Soda from Uday Food & Beverages. Bold flavours, nostalgic fizz." },
      { property: "og:title", content: "Goli Soda — Thanda Thanda, Mazaa Mazaa" },
      { property: "og:description", content: "Bold flavours, nostalgic fizz. Made with love by Uday Food & Beverages." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,var(--mango),transparent_55%),radial-gradient(circle_at_85%_90%,var(--fizz),transparent_50%)] opacity-80" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-2 md:pt-20">
          <div>
            <span className="chip">Since 1985 · India</span>
            <h1 className="mt-4 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              Thanda Thanda,<br />
              <span className="text-primary">Mazaa Mazaa.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              The original marble-pop Goli Soda. Bottled by Uday Food &amp; Beverages with the same fizz, flavour, and feel-good factor you grew up with.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/products" className="btn-pop btn-pop-hover">
                Explore Flavours <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground bg-background px-6 py-3 font-bold hover:bg-secondary"
              >
                Distribute With Us
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold">
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> 6 bold flavours</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> FSSAI certified</span>
              <span className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> Made in India</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border-2 border-foreground bg-secondary" />
            <img
              src={heroBottle}
              alt="Goli Soda bottle splashing pink fizz"
              width={1280}
              height={1280}
              className="relative aspect-square w-full rounded-[1.75rem] border-2 border-foreground object-cover shadow-[8px_8px_0_0_var(--ink)]"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-y-2 border-foreground bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <span className="chip" style={{ background: "var(--cream)" }}>What makes it special</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">A pop of nostalgia in every bottle.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Pure Nostalgia",
                body: "The unmistakable marble click, the rush of fizz — the same goli soda from your childhood gully.",
              },
              {
                icon: ShieldCheck,
                title: "Honest Quality",
                body: "Triple-filtered water, food-safe glass bottles, and rigorous lab checks on every batch.",
              },
              {
                icon: Sparkles,
                title: "Bold Taste",
                body: "Six punchy flavours — from classic lemon to kala khatta — crafted to wake up your tastebuds.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-pop p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-foreground bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="card-pop relative overflow-hidden bg-foreground p-8 text-background sm:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-80" />
          <div className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-secondary opacity-90" />
          <div className="relative max-w-xl">
            <h2 className="text-4xl sm:text-5xl">Stock the fizz everyone asks for.</h2>
            <p className="mt-3 opacity-85">
              We partner with retailers, wholesalers, and HoReCa across India. Tell us about your business and we'll get back within 48 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-pop btn-pop-hover">Start an inquiry <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/products" className="inline-flex items-center justify-center rounded-full border-2 border-background px-6 py-3 font-bold hover:bg-background hover:text-foreground">
                See the range
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
