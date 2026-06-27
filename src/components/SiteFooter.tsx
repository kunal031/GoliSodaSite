import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-background bg-primary font-display text-sm">
              GS
            </span>
            <span className="font-display text-xl">Goli Soda</span>
          </div>
          <p className="mt-3 text-sm opacity-80">
            By Uday Food &amp; Beverages. The original marble-pop fizz, bottled with love.
          </p>
        </div>
        <div>
          <h3 className="font-display text-base">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary">Flavours</Link></li>
            <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Become a Partner</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base">Reach Us</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@golisoda.in</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Uday Food &amp; Beverages, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/20 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Uday Food &amp; Beverages. All rights reserved.
      </div>
    </footer>
  );
}