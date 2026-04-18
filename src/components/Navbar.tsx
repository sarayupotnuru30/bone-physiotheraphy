import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Activity } from "lucide-react";
import { services, categories } from "@/data/services";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
            <Activity className="h-5 w-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Bone <span className="text-primary">Physiotherapy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary [&.active]:text-primary"
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary [&.active]:text-primary"
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform" style={{ transform: servicesOpen ? "rotate(180deg)" : undefined }} />
            </Link>
            <div
              className={cn(
                "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
                servicesOpen ? "visible opacity-100" : "invisible opacity-0",
              )}
            >
              <div className="grid w-[640px] grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-[var(--shadow-elegant)]">
                {categories.map((cat) => (
                  <div key={cat} className="space-y-1">
                    <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {cat}
                    </div>
                    {services
                      .filter((s) => s.category === cat)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-medical-light hover:text-primary"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary [&.active]:text-primary"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary [&.active]:text-primary"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-4">
            {navLinks.slice(0, 1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}

            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-1 space-y-3 px-2 py-2">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-medical-light"
                >
                  All Services →
                </Link>
                {categories.map((cat) => (
                  <div key={cat}>
                    <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {cat}
                    </div>
                    {services
                      .filter((s) => s.category === cat)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </details>

            {navLinks.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
