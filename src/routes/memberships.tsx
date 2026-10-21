import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BrandCta } from "@/components/brand-cta";
import { PageShell } from "@/components/page-shell";
import { MEMBERSHIPS_URL } from "@/lib/links";

export const Route = createFileRoute("/memberships")({
  head: () => ({
    meta: [
      { title: "Founders Club Memberships — The Slice" },
      {
        name: "description",
        content: "Priority access, exclusive Founders pricing and early booking at The Slice.",
      },
      { property: "og:title", content: "Founders Club — The Slice" },
      {
        property: "og:description",
        content: "Priority access, exclusive Founders pricing and early booking at The Slice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Memberships,
});

const perks = [
  "Priority access before public opening",
  "Exclusive Founders pricing",
  "Early booking privileges",
];

function Memberships() {
  return (
    <PageShell bookingCtaHelper="Already a member? Reserve a golf bay." bookingCtaVariant="outline">
      <h1 className="font-display text-4xl font-semibold">Founders Club</h1>
      <p className="mt-3 text-foreground/80">
        Be the first to experience The Slice — a fun, welcoming place for golf, games, food, and
        time together. Limited memberships available.
      </p>
      <div className="mt-8 rounded-2xl border border-foreground/15 bg-card p-6 shadow-sm">
        <ul className="space-y-4">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-primary" /> {p}
            </li>
          ))}
        </ul>
        <BrandCta href={MEMBERSHIPS_URL} target="_blank" rel="noreferrer" className="mt-8">
          Join Founders Club
        </BrandCta>
      </div>
    </PageShell>
  );
}
