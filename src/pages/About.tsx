import { useEffect } from "react";
import aboutMission from "@/assets/services/about-mission.jpg";
import aboutTeam from "@/assets/services/about-team.jpg";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — Bone Physiotherapy";
  }, []);

  return (
    <>
      <section className="bg-medical-light py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">About Us</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance">Care designed around you</h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            We combine clinical expertise with a patient-first philosophy to help every individual move better, feel stronger, and live pain-free.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img src={aboutMission} alt="Our mission" className="rounded-3xl shadow-[var(--shadow-elegant)]" />
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Our mission</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To deliver expert orthopaedic and physiotherapy care that restores mobility, relieves pain, and improves quality of life — for every patient, at every stage of recovery.
            </p>
            <ul className="mt-6 space-y-3">
              {["Evidence-based treatment plans", "Compassionate, patient-first care", "Long-term recovery and prevention"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-medical-light py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-3xl font-bold text-foreground">A team you can trust</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our experienced specialists work together to deliver personalized care that addresses both immediate symptoms and long-term wellness goals.
            </p>
          </div>
          <img src={aboutTeam} alt="Our team" className="order-1 rounded-3xl shadow-[var(--shadow-elegant)] lg:order-2" />
        </div>
      </section>
    </>
  );
}