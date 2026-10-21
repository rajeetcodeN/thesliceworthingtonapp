import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

const IMG =
  "https://cdn.prod.website-files.com/69ce6ac1f2e984905187f960/69d87f286b08255899dc1d9a_TS%20VibeImages-03.webp";

export const Route = createFileRoute("/simulators")({
  head: () => ({
    meta: [
      { title: "Our Simulators — The Slice Worthington" },
      {
        name: "description",
        content:
          "Simulator golf plus multisport games like soccer, baseball and football — fun for all ages at The Slice.",
      },
      { property: "og:title", content: "Our Simulators — The Slice" },
      {
        property: "og:description",
        content:
          "Simulator golf plus multisport games like soccer, baseball and football — fun for all ages at The Slice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Simulators,
});

const features = [
  [
    "Fun for Everyone",
    "A true golf experience without losing the fun — avid golfers, beginners, and everyone in between.",
  ],
  [
    "More Than Just Golf",
    "Full Swing supports a lineup of multisport games like soccer, baseball, football, and interactive challenges that kids and groups love.",
  ],
  ["All Ages", "Active, engaging, and perfect for all ages, so everyone has something to play."],
];

function Simulators() {
  return (
    <PageShell>
      <h1 className="font-display text-4xl font-semibold">More Than Just Golf</h1>
      <p className="mt-3 text-foreground/80">
        Full Swing experiences for sharpening your game, competing with friends, or showing up for a
        casual night out.
      </p>
      <div className="group mt-6 overflow-hidden rounded-2xl">
        <img
          src={IMG}
          alt="Guests enjoying a multisport experience at The Slice"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <ul className="mt-6 space-y-5">
        {features.map(([t, d]) => (
          <li key={t}>
            <h2 className="text-lg font-semibold">{t}</h2>
            <p className="text-sm text-muted-foreground">{d}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
