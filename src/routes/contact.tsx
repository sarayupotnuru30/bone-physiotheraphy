import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bone Physiotherapy" },
      { name: "description", content: "Book your physiotherapy consultation. Reach us by phone, email, or WhatsApp." },
      { property: "og:title", content: "Contact — Bone Physiotherapy" },
      { property: "og:description", content: "Book a consultation and start your recovery journey today." },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_URL = "https://wa.me/919390370782?text=Hi%2C%20I%20want%20to%20book%20an%20appointment.";

function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Get in touch</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance">Book your consultation</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Take the first step toward recovery. We're here to answer your questions and help you start your journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Phone, label: "Call Us", value: "+91 93903 70782", href: "tel:+919390370782" },
            { icon: Mail, label: "Email", value: "care@bonephysio.in", href: "mailto:care@bonephysio.in" },
            { icon: MapPin, label: "Visit", value: "Hyderabad, India" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{c.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-[image:var(--gradient-hero)] p-10 text-center text-white shadow-[var(--shadow-elegant)] md:p-14">
          <MessageCircle className="mx-auto h-8 w-8" />
          <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">Quick reply on WhatsApp</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/85">
            Send us a message and our team will get back to you with available appointment slots.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
