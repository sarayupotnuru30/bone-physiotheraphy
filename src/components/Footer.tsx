import { Link } from "@tanstack/react-router";
import { Activity, Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-medical-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Activity className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold text-foreground">
                Bone <span className="text-primary">Physiotherapy</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Restoring movement, relieving pain, and helping you live better with expert physiotherapy and orthopaedic care.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Featured Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Hyderabad, India</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +91 93903 70782</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> care@bonephysio.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bone Physiotherapy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
