import { createFileRoute } from "@tanstack/react-router";
import { Globe, MapPin, MessageSquare } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ADDRESS, CONTACT_US_URL, MAPS_URL, WEBSITE_URL } from "@/lib/links";
import { isNativePlatform, openExternalUrl } from "@/lib/platform";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Slice Worthington" },
      {
        name: "description",
        content:
          "Questions? We're all ears. Find The Slice at 121 W. Wilson Bridge Road, Worthington, Ohio.",
      },
      { property: "og:title", content: "Contact The Slice" },
      {
        property: "og:description",
        content:
          "Questions? We're all ears. Find The Slice at 121 W. Wilson Bridge Road, Worthington, Ohio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const handleLinkClick = (url: string) => (e: React.MouseEvent) => {
    if (isNativePlatform()) {
      e.preventDefault();
      void openExternalUrl(url);
    }
  };

  return (
    <PageShell>
      <h1 className="font-display text-4xl font-semibold">Questions? We’re All Ears.</h1>
      <p className="mt-3 text-foreground/80">
        Whether you’re planning a birthday party, asking about Founders Club memberships, looking
        into group events, or just curious about what’s coming to Worthington, we’d love to hear
        from you.
      </p>
      <div className="mt-8 space-y-3">
        <a
          href={CONTACT_US_URL}
          onClick={handleLinkClick(CONTACT_US_URL)}
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 rounded-2xl border border-border bg-card p-5"
        >
          <MessageSquare className="mt-1 h-6 w-6 text-primary" />
          <div>
            <p className="font-semibold">Drop us a message</p>
            <p className="text-sm text-muted-foreground">
              Contact form on thesliceworthington.com — we’ll follow up soon.
            </p>
          </div>
        </a>
        <a
          href={MAPS_URL}
          onClick={handleLinkClick(MAPS_URL)}
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 rounded-2xl border border-border bg-card p-5"
        >
          <MapPin className="mt-1 h-6 w-6 text-primary" />
          <div>
            <p className="font-semibold">Visit us</p>
            <p className="text-sm text-muted-foreground">{ADDRESS}</p>
          </div>
        </a>
        <a
          href={WEBSITE_URL}
          onClick={handleLinkClick(WEBSITE_URL)}
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 rounded-2xl border border-border bg-card p-5"
        >
          <Globe className="mt-1 h-6 w-6 text-primary" />
          <div>
            <p className="font-semibold">Website</p>
            <p className="text-sm text-muted-foreground">thesliceworthington.com</p>
          </div>
        </a>
      </div>
    </PageShell>
  );
}
