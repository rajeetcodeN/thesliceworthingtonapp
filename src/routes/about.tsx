import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/page-shell";

const IMAGES = {
  fun: "https://cdn.prod.website-files.com/69ce6ac1f2e984905187f960/69df15a14b3d271b460b1166_TS%20VibeImages-01-1.jpg",
  multisport:
    "https://cdn.prod.website-files.com/69ce6ac1f2e984905187f960/69d87f286b08255899dc1d9a_TS%20VibeImages-03.webp",
  gather:
    "https://cdn.prod.website-files.com/69ce6ac1f2e984905187f960/69df1581096927fea86ddcee_TS%20VibeImages-02-1.jpg",
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Slice Worthington" },
      {
        name: "description",
        content:
          "Approachable Golf in Worthington, Ohio: simulator golf, great pizza and a laid-back vibe. Opening Fall 2026.",
      },
      { property: "og:title", content: "About The Slice" },
      {
        property: "og:description",
        content:
          "Approachable Golf in Worthington, Ohio: simulator golf, great pizza and a laid-back vibe. Opening Fall 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.fun },
      { name: "twitter:image", content: IMAGES.fun },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const rows = [
  {
    number: "01",
    title: "Fun for Everyone",
    description:
      "From the second you walk in, The Slice delivers a true golf experience without losing the fun. Whether you are sharpening your game, competing with friends, or just showing up for a casual night out, it is a space where avid golfers, beginners, and everyone in between can jump in, play, and feel right at home.",
    image: IMAGES.fun,
    alt: "Guests enjoying a golf simulator bay at The Slice",
  },
  {
    number: "02",
    title: "More Than Just Golf",
    description:
      "This is not just about golf. Our Full Swing simulators feature a full lineup of multisport games like soccer, baseball, football, and interactive challenges that kids and groups love. It is active, engaging, and perfect for all ages, so everyone has something to play.",
    image: IMAGES.multisport,
    alt: "Guest playing a multisport game at The Slice",
  },
  {
    number: "03",
    title: "A Place to Gather in Columbus",
    description:
      "Located in Worthington, Ohio, in the heart of Central Ohio, The Slice is your go-to spot for birthday parties, family nights, casual meetups, and group hangs. Pair the experience with great food, drinks, and a relaxed vibe, and you have a place Columbus families, friends, and groups will want to come back to again and again.",
    image: IMAGES.gather,
    alt: "Friends gathering at The Slice",
  },
];

const testimonials = [
  {
    quote:
      "We’ve been waiting for something like this in Worthington. A place where we can bring the kids and still actually enjoy ourselves? We’ll be there week one.",
    byline: "Sarah M., Worthington",
  },
  {
    quote:
      "Already planning our girls’ night here as soon as it opens. Golf without the pressure plus good food and drinks… I’m in.",
    byline: "Emily R., Columbus",
  },
  {
    quote:
      "The multisport setup is what sold me. My kids aren’t all into golf, but this gives everyone something to do. Can’t wait to check it out.",
    byline: "Jason K., Dublin",
  },
  {
    quote:
      "Finally something different in the area. This feels like the kind of spot you go once and then keep coming back to.",
    byline: "Lauren T., Powell",
  },
];

function About() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const moveTestimonial = (direction: -1 | 1) => {
    setTestimonialIndex(
      (current) => (current + direction + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = [
    testimonials[testimonialIndex],
    testimonials[(testimonialIndex + 1) % testimonials.length],
  ];

  return (
    <PageShell wide>
      <h1 className="font-display text-5xl font-semibold leading-none tracking-tight md:text-6xl">
        The Vibe.
      </h1>

      <div className="mt-12 border-t border-border">
        {rows.map((row) => (
          <article
            key={row.number}
            className="grid gap-6 border-b border-border py-8 md:grid-cols-[4rem_minmax(0,1fr)_14rem] md:items-center md:gap-8 md:py-9"
          >
            <span className="text-2xl font-medium tracking-tight text-muted-foreground">
              {row.number}
            </span>
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                {row.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {row.description}
              </p>
            </div>
            <div className="group overflow-hidden rounded-lg">
              <img
                src={row.image}
                alt={row.alt}
                width={560}
                height={360}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
          </article>
        ))}
      </div>

      <section className="testimonial-panel mt-16 rounded-xl px-6 py-8 text-white md:px-20 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xl font-medium text-white/70">✳ Testimonials</p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => moveTestimonial(-1)}
              className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => moveTestimonial(1)}
              className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div aria-live="polite" className="mt-8">
          {visibleTestimonials.map((testimonial, index) => (
            <blockquote
              key={`${testimonial.byline}-${testimonialIndex}`}
              className={index === 1 ? "mt-8 border-t border-white/25 pt-8" : ""}
            >
              <p className="max-w-4xl text-2xl leading-tight md:text-4xl">“{testimonial.quote}”</p>
              <footer className="mt-7 text-lg">— {testimonial.byline}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
