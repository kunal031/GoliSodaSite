import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Distributor Inquiry — Goli Soda" },
      { name: "description", content: "Become a Goli Soda retail or wholesale partner. Send us an inquiry and our team will respond within 48 hours." },
      { property: "og:title", content: "Distributor Inquiry — Goli Soda" },
      { property: "og:description", content: "Become a Goli Soda retail or wholesale partner." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  company: z.string().trim().min(2, "Company name is required").max(100),
  location: z.string().trim().min(2, "Location is required").max(100),
  interest: z.enum(["retail", "wholesale"]),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = import.meta.env.VITE_API_ENDPOINT ?? "http://localhost:3001/api";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // 1. Capture the form reference synchronously right away
    const form = e.currentTarget;
    
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    setStatus("submitting");
    
    try {
      const res = await fetch(FORMSPREE_ENDPOINT + "/enquiry", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      
      setStatus(res.ok ? "success" : "error");
      
      // 2. Use the captured reference to reset the form
      if (res.ok) form.reset(); 
      
    } catch {
      setStatus("error");
    }
}

  return (
    <>
      <section className="border-b-2 border-foreground bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <span className="chip" style={{ background: "var(--cream)" }}>Get in touch</span>
          <h1 className="mt-3 text-5xl sm:text-6xl">Let's pop bottles together.</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">
            Whether you run a kirana, a chain, or a distribution network — tell us about your business and we'll get back within 48 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="card-pop space-y-5 p-6 sm:p-8" noValidate>
            <h2 className="text-3xl">Distributor inquiry</h2>

            <Field label="Company name" name="company" error={errors.company} placeholder="ABC Traders" />
            <Field label="Location (city, state)" name="location" error={errors.location} placeholder="Pune, Maharashtra" />

            <div>
              <label className="mb-1 block text-sm font-bold uppercase tracking-wide">Interest</label>
              <select
                name="interest"
                defaultValue="retail"
                className="w-full rounded-xl border-2 border-foreground bg-background px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="retail">Retail (single outlet)</option>
                <option value="wholesale">Wholesale / Distribution</option>
              </select>
              {errors.interest && <p className="mt-1 text-sm text-destructive">{errors.interest}</p>}
            </div>

            <Field label="Email" name="email" type="email" error={errors.email} placeholder="you@company.com" />

            <div>
              <label className="mb-1 block text-sm font-bold uppercase tracking-wide">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your business, expected volumes, and any questions."
                className="w-full rounded-xl border-2 border-foreground bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-pop btn-pop-hover w-full disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : (<>Send inquiry <Send className="h-4 w-4" /></>)}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 rounded-xl border-2 border-foreground bg-secondary p-3 text-sm font-semibold">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Thanks! We've received your inquiry and will reply within 48 hours.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-xl border-2 border-destructive bg-destructive/10 p-3 text-sm font-semibold text-destructive">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>

          <aside className="space-y-5">
            <div className="card-pop bg-secondary p-6">
              <h3 className="text-2xl">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm font-semibold">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div>+91 98765 43210</div>
                    <div className="text-xs font-normal text-muted-foreground">Mon–Sat, 10am–7pm IST</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div>hello@golisoda.in</div>
                    <div className="text-xs font-normal text-muted-foreground">Partnerships &amp; press</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    Uday Food &amp; Beverages<br />
                    Bottling Unit, Industrial Estate, India
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-pop bg-foreground p-6 text-background">
              <h3 className="text-xl">Fast track</h3>
              <p className="mt-2 text-sm opacity-85">
                Already running a beverage distribution network? Mention your existing brands in the message and we'll prioritise your inquiry.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-bold uppercase tracking-wide" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-foreground bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}