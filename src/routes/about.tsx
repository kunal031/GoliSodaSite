import { createFileRoute, Link } from "@tanstack/react-router";
import aboutStory from "@/assets/about-story.jpg";
import { ShieldCheck, Beaker, Truck, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Goli Soda" },
      { name: "description", content: "From a small bottling unit to a beloved Indian brand. The story, quality standards, and distribution reach of Goli Soda by Uday Food & Beverages." },
      { property: "og:title", content: "Our Story — Goli Soda" },
      { property: "og:description", content: "From a small bottling unit to a beloved Indian brand." },
      { property: "og:image", content: aboutStory },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b-2 border-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <span className="chip">Our Story</span>
            <h1 className="mt-3 text-5xl sm:text-6xl">A family bottling fizz since 1985.</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Uday Food &amp; Beverages started with one small unit, a hand-operated capping machine, and an obsession with getting the marble pop just right. Four decades later, we still bottle every Goli Soda the same way — with care, craft, and a lot of love.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border-2 border-foreground bg-primary" />
            <img
              src={aboutStory}
              alt="Vintage Indian street vendor with goli soda cart"
              width={1280}
              height={960}
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[1.75rem] border-2 border-foreground object-cover shadow-[8px_8px_0_0_var(--ink)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <span className="chip" style={{ background: "var(--cream)" }}>Quality first</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">Standards we don't compromise on.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Beaker, title: "Triple-filtered water", body: "Every drop passes through carbon, RO and UV filtration before bottling." },
              { icon: ShieldCheck, title: "FSSAI compliant", body: "All flavours certified by FSSAI. Batch-tested in NABL-accredited labs." },
              { icon: Truck, title: "Cold-chain ready", body: "Crates designed for safe transit. No leaks, no broken marbles, no compromise." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-pop p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-foreground bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="chip">Distribution</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">From our bottling line to neighbourhoods across India.</h2>
            <p className="mt-4 text-muted-foreground">
              You'll find Goli Soda at paan shops, kirana stores, restaurants and event caterers in 12 states and counting. We work directly with regional distributors to keep every bottle fresh and on time.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "12+", v: "States" },
                { k: "5,000+", v: "Outlets" },
                { k: "40 yrs", v: "Of fizz" },
              ].map((s) => (
                <div key={s.v} className="card-pop p-4">
                  <div className="font-display text-3xl text-primary">{s.k}</div>
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-pop bg-foreground p-8 text-background">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="mt-3 text-2xl">Want to bring Goli Soda to your city?</h3>
            <p className="mt-2 opacity-85">We're actively onboarding distributors in South and East India. Drop your details and our team will reach out.</p>
            <Link to="/contact" className="btn-pop btn-pop-hover mt-5">Partner with us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}