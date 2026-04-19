import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919390370782";

const SERVICE_OPTIONS = [
  "Orthopaedic Care",
  "Neuro Rehabilitation",
  "Sports Rehabilitation",
  "Elderly Wellness",
  "Post-Surgery Rehab",
  "Back & Neck Pain",
  "Joint Pain & Arthritis",
  "Knee Replacement",
  "Hip Replacement",
  "Arthroscopy Surgery",
  "Other",
] as const;

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s\-()]+$/, "Phone number contains invalid characters"),
  age: z.string().trim().max(3).optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

const CONTACT_CARDS = [
  { icon: Phone, label: "Call Us", value: "9390370782", href: "tel:+919390370782" },
  { icon: Mail, label: "Email Us", value: "bonephysiotherapy@gmail.com", href: "mailto:bonephysiotherapy@gmail.com" },
  { icon: MapPin, label: "Visit Us", value: "Beside Lucid Diagnostics, Plot No: 26-113, Balram Nagar, Safilguda, Secunderabad – 500047" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:30 AM – 8:30 PM" },
] as const;

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Bone Physiotherapy";
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    service: "",
    message: "",
  });

  const handleChange = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const first = result.error.issues[0];
      toast.error(first?.message ?? "Please check the form");
      return;
    }
    const { name, phone, age, service, message } = result.data;
    const text =
      `Hi, I'd like to book an appointment.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      (age ? `Age: ${age}\n` : "") +
      `Service: ${service}\n` +
      (message ? `Message: ${message}\n` : "");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…");
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Get in touch
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance">
            Book your consultation
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Take the first step toward recovery. We're here to answer your questions and help you start your journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((c) => {
            const content = (
              <>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{c.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.value}</p>
              </>
            );
            const className =
              "group rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]";
            return "href" in c && c.href ? (
              <a key={c.label} href={c.href} className={className}>
                {content}
              </a>
            ) : (
              <div key={c.label} className={className}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8 lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Book an Appointment</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form and we'll connect with you via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange("name")}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your full name"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="age" className="text-sm font-medium text-foreground">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  min={1}
                  max={120}
                  value={form.age}
                  onChange={handleChange("age")}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Optional"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="service" className="text-sm font-medium text-foreground">
                  Service <span className="text-primary">*</span>
                </label>
                <select
                  id="service"
                  required
                  value={form.service}
                  onChange={handleChange("service")}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us briefly about your concern (optional)"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[var(--shadow-elegant)] sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[image:var(--gradient-hero)] p-8 text-white shadow-[var(--shadow-elegant)] md:p-10 lg:col-span-2">
            <div>
              <MessageCircle className="h-8 w-8" />
              <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">Quick reply on WhatsApp</h2>
              <p className="mt-3 text-white/85">
                Prefer to chat directly? Message us and our team will get back with available appointment slots.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}