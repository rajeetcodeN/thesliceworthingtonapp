import { createFileRoute } from "@tanstack/react-router";
import { Globe, Share, PlusSquare, X } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-bay.jpg";
import { BrandCta } from "@/components/brand-cta";
import { HERO_VIDEO_MOBILE_URL, WEBSITE_URL, WHOOSH_BOOKING_URL } from "@/lib/links";
import { SiteHeader } from "@/components/site-header";
import { isNativePlatform, openExternalUrl } from "@/lib/platform";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Slice — Book a Golf Simulator Bay in Worthington" },
      {
        name: "description",
        content:
          "Approachable golf, multisport games, great pizza, and a laid-back vibe in Worthington.",
      },
      { property: "og:title", content: "The Slice — Book a Bay" },
      {
        property: "og:description",
        content:
          "Approachable golf, multisport games, great pizza, and a laid-back vibe in Worthington.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function useInstallHint() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isNativePlatform()) return;
    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/.test(ua);
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    const dismissed = localStorage.getItem("slice-install-dismissed") === "1";
    setShow(isIOS && !standalone && !dismissed);
  }, []);
  const dismiss = () => {
    localStorage.setItem("slice-install-dismissed", "1");
    setShow(false);
  };
  return { show, dismiss };
}

function Home() {
  const { show, dismiss } = useInstallHint();

  return (
    <main className="relative flex h-[100dvh] max-h-[100dvh] w-full flex-col overflow-hidden bg-background select-none touch-none md:bg-black">
      <div className="hero-media relative flex-1 min-h-0 w-full overflow-hidden md:absolute md:inset-0 md:h-auto">
        <div className="relative z-10 mx-auto w-full max-w-md px-5">
          <SiteHeader dark />
        </div>
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImg}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_MOBILE_URL} type="video/mp4" />
        </video>
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="relative mx-auto flex w-full max-w-md shrink-0 flex-col px-6 pt-3.5 pb-safe md:min-h-[100dvh] md:justify-end md:pt-0">
        <div className="hidden md:block md:flex-1" />

        <div className="flex flex-col gap-2.5 sm:gap-3.5 pb-0.5">
          <section
            className="animate-rise space-y-1 sm:space-y-1.5"
            style={{ animationDelay: "120ms" }}
          >
            <h2 className="font-display text-[clamp(1.75rem,4.2vh,2.35rem)] font-extrabold leading-[1.0] tracking-tight text-foreground sm:text-5xl md:text-white">
              Swing.
              <br />
              Smile.
              <br />
              Stay Awhile.
            </h2>
            <p className="max-w-xs text-xs sm:text-sm text-foreground/80 md:text-base md:text-white/85">
              Approachable golf, multisport games, great food, and a laid-back vibe in Worthington.
            </p>
          </section>

          <div
            className="animate-rise space-y-2 sm:space-y-2.5"
            style={{ animationDelay: "240ms" }}
          >
            <BrandCta href={WHOOSH_BOOKING_URL}>Book a Bay</BrandCta>
            <a
              href={WEBSITE_URL}
              onClick={(e) => {
                if (isNativePlatform()) {
                  e.preventDefault();
                  void openExternalUrl(WEBSITE_URL);
                }
              }}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 sm:h-12 touch-manipulation items-center justify-center gap-2 rounded-full border border-border text-sm font-medium text-foreground/80 transition-[transform,color] duration-150 ease-out hover:text-foreground active:scale-[0.97] md:border-white/30 md:text-white/85 md:hover:text-white"
            >
              <Globe className="h-4 w-4" /> Visit our website
            </a>
            <p className="pt-0.5 text-center text-[10px] sm:text-xs tracking-[0.25em] text-muted-foreground uppercase md:text-white/70">
              Golf, games, food, and good times
            </p>
          </div>
        </div>
      </div>

      {show && (
        <div className="fixed inset-x-3 bottom-3 z-10 mx-auto max-w-md rounded-2xl border border-border bg-card/95 p-4 backdrop-blur pb-safe">
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute top-3 right-3 text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="pr-6 text-sm font-semibold text-card-foreground">
            Add The Slice to your Home Screen
          </p>
          <p className="mt-1 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            Tap <Share className="h-4 w-4 text-primary" /> Share, then
            <PlusSquare className="h-4 w-4 text-primary" /> “Add to Home Screen”.
          </p>
        </div>
      )}
    </main>
  );
}
