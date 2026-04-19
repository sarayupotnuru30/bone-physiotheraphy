import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import slide1 from "@/assets/services/hero-physio-new.jpg";
import slide2 from "@/assets/services/sports-rehab.jpg";
import slide3 from "@/assets/services/neuro-rehab.jpg";
import slide4 from "@/assets/services/elderly-care.jpg";

const slides = [
  {
    image: slide1,
    eyebrow: "Expert Physiotherapy & Orthopaedic Care",
    title: "Restore Movement.",
    accent: "Relieve Pain.",
    tail: "Live Better.",
    description: "Advanced physiotherapy and orthopaedic care for a pain-free, active life.",
  },
  {
    image: slide2,
    eyebrow: "Sports Rehabilitation",
    title: "Recover Stronger.",
    accent: "Perform Better.",
    tail: "Prevent Injuries.",
    description: "Specialized programs to get athletes safely back to peak performance.",
  },
  {
    image: slide3,
    eyebrow: "Neurological Rehabilitation",
    title: "Regain Function.",
    accent: "Rebuild Confidence.",
    tail: "Reclaim Independence.",
    description: "Focused stroke and neuro rehab for meaningful, lasting recovery.",
  },
  {
    image: slide4,
    eyebrow: "Elderly & Wellness Care",
    title: "Stay Active.",
    accent: "Stay Steady.",
    tail: "Stay Independent.",
    description: "Gentle, expert care designed for healthy, confident aging.",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 32 },
    [Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.eyebrow}
                  className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    {selected === i && (
                      <div className="max-w-2xl text-background">
                        <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                          <Sparkles className="h-3.5 w-3.5" />
                          {s.eyebrow}
                        </span>
                        <h1
                          className="animate-fade-in-up mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-white text-balance md:text-5xl lg:text-6xl"
                          style={{ animationDelay: "120ms" }}
                        >
                          {s.title}{" "}
                          <span className="bg-gradient-to-r from-[oklch(0.78_0.15_195)] to-[oklch(0.92_0.07_195)] bg-clip-text text-transparent">
                            {s.accent}
                          </span>{" "}
                          {s.tail}
                        </h1>
                        <p
                          className="animate-fade-in-up mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
                          style={{ animationDelay: "240ms" }}
                        >
                          {s.description}
                        </p>
                        <div
                          className="animate-fade-in-up mt-8 flex flex-wrap gap-3"
                          style={{ animationDelay: "360ms" }}
                        >
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_oklch(0.52_0.14_230_/_0.5)]"
                          >
                            Book Appointment
                          </Link>
                          <Link
                            to="/services"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                          >
                            Explore Services
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 md:inline-flex lg:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 md:inline-flex lg:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              selected === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
