import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Flavours" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Distribute" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-foreground bg-primary text-primary-foreground font-display text-sm">
            GS
          </span>
          <span className="truncate font-display text-lg sm:text-xl">Goli Soda</span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-bold uppercase tracking-wide hover:bg-secondary"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-bold uppercase tracking-wide bg-foreground text-background" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-pop btn-pop-hover ml-2 px-4 py-2 text-sm">
            Become a Partner
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-secondary sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t-2 border-foreground bg-background sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-bold uppercase tracking-wide hover:bg-secondary"
                activeProps={{ className: "rounded-xl px-3 py-3 text-base font-bold uppercase tracking-wide bg-foreground text-background" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}