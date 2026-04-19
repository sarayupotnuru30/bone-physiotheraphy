import { Link } from "react-router-dom";
import { useEffect } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight, ShieldCheck, HeartPulse, Sparkles, Users } from "lucide-react";

const whyUs = [
  { icon: ShieldCheck, title: "Experienced Specialists", desc: "Certified clinicians with deep clinical expertise." },
  { icon: HeartPulse, title: "Personalized Care", desc: "Treatment plans tailored to your unique needs." },
  { icon: Sparkles, title: "Modern Techniques", desc: "Latest evidence-based therapies and equipment." },
  { icon: Users, title: "Patient-First Approach", desc: "Your comfort and recovery are our top priority." },
];

export default function HomePage() {
  useEffect(() => {
    document.title = "Bone Physiotherapy — Restore Movement, Relieve Pain";
  }, []);

  const featured = services.filter((s) =>
    ["fractures-bone-injuries", "stroke-recovery", "ligament-injuries", "arthritis-care"].includes(s.slug),
  );

  return (
    <>
      <HeroCarousel />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Comprehensive Care Solutions
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              From orthopaedic rehabilitation to sports recovery and senior wellness — a full spectrum of physiotherapy under one roof.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[var(--shadow-soft)]"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-medical-light py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Care that puts you first
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] p-10 text-center text-white shadow-[var(--shadow-elegant)] md:p-14">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl text-balance">
              Ready to take the first step toward recovery?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Book a consultation today and start your personalized journey to a stronger, pain-free life.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}