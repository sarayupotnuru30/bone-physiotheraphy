import { useEffect } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { categories, services } from "@/data/services";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services — Bone Physiotherapy";
  }, []);

  return (
    <>
      <section className="bg-medical-light py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance">
            Comprehensive Physiotherapy Services
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Expert care across orthopaedics, neurology, sports medicine, and wellness — all under one roof.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        {categories.map((cat, ci) => {
          const catServices = services.filter((s) => s.category === cat);
          return (
            <section key={cat} className={ci > 0 ? "mt-16" : ""}>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">{cat}</h2>
                <span className="text-sm text-muted-foreground">{catServices.length} services</span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {catServices.map((s, i) => (
                  <ServiceCard key={s.slug} service={s} index={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}