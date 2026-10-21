import type { ReactNode } from "react";
import { BrandCta, type BrandCtaVariant } from "@/components/brand-cta";
import { SiteHeader } from "@/components/site-header";
import { WHOOSH_BOOKING_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  bookingCtaHelper?: string;
  bookingCtaVariant?: BrandCtaVariant;
  wide?: boolean;
}

export function PageShell({
  children,
  bookingCtaHelper,
  bookingCtaVariant = "primary",
  wide = false,
}: PageShellProps) {
  return (
    <main
      className={cn(
        "mx-auto flex min-h-[100dvh] w-full flex-col bg-background px-6",
        wide ? "max-w-6xl" : "max-w-md",
      )}
    >
      <SiteHeader />
      <div className="flex-1 pt-8 pb-28">{children}</div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-background via-background/95 to-transparent px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8">
        <div className="pointer-events-auto mx-auto w-full max-w-md">
          {bookingCtaHelper && (
            <p className="mb-2 text-center text-sm text-muted-foreground">{bookingCtaHelper}</p>
          )}
          <BrandCta href={WHOOSH_BOOKING_URL} variant={bookingCtaVariant}>
            Book a Bay
          </BrandCta>
        </div>
      </div>
    </main>
  );
}
