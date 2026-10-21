import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Cake, PartyPopper, Users } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { INSTAGRAM_URL } from "@/lib/links";
import { isNativePlatform, openExternalUrl } from "@/lib/platform";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — The Slice Worthington" },
      {
        name: "description",
        content:
          "Birthday parties, family nights, casual meetups and group hangs at The Slice in Worthington, Ohio.",
      },
      { property: "og:title", content: "Events — The Slice" },
      {
        property: "og:description",
        content:
          "Birthday parties, family nights, casual meetups and group hangs at The Slice in Worthington, Ohio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Events,
});

const list = [
  { icon: Cake, t: "Birthday Parties" },
  { icon: Users, t: "Family Nights" },
  { icon: PartyPopper, t: "Casual Meetups & Group Hangs" },
];

function Events() {
  return (
    <PageShell>
      <h1 className="font-display text-4xl font-semibold">A Place to Gather</h1>
      <p className="mt-3 text-foreground/80">
        Located in Worthington, Ohio, in the heart of Central Ohio, The Slice is your go-to spot for
        birthday parties, family nights, casual meetups, and group hangs. Pair the experience with
        great food, drinks, and a relaxed vibe.
      </p>
      <ul className="mt-8 divide-y divide-border">
        {list.map(({ icon: Icon, t }) => (
          <li key={t} className="flex items-center gap-4 py-5">
            <Icon className="h-6 w-6 text-primary" />
            <h2 className="font-semibold">{t}</h2>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted-foreground">
        Event dates and bookings will be announced closer to our opening in Fall 2026.
      </p>
      <a
        href={INSTAGRAM_URL}
        onClick={(e) => {
          if (isNativePlatform()) {
            e.preventDefault();
            void openExternalUrl(INSTAGRAM_URL);
          }
        }}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 font-semibold text-primary"
      >
        Follow Along on Instagram <ArrowUpRight className="h-4 w-4" />
      </a>
    </PageShell>
  );
}
