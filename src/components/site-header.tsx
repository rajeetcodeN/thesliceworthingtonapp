import { Link, useLocation } from "@tanstack/react-router";
import { Calendar, CalendarDays, Flag, House, Info, Menu, Phone, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import logoLight from "@/assets/logo-light.svg";
import { WHOOSH_BOOKING_URL } from "@/lib/links";
import { isNativePlatform, openExternalUrl } from "@/lib/platform";

const items = [
  { label: "Home", to: "/", icon: House },
  { label: "Book a Bay", href: WHOOSH_BOOKING_URL, icon: Calendar, external: true },
  { label: "Our Simulators", to: "/simulators", icon: Flag },
  { label: "Events", to: "/events", icon: CalendarDays },
  { label: "Memberships", to: "/memberships", icon: Users },
  { label: "About Us", to: "/about", icon: Info },
  { label: "Contact", to: "/contact", icon: Phone },
] as const;

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="relative z-20 flex items-center justify-between pt-safe">
        <Link to="/" aria-label="The Slice home">
          {dark ? (
            <span className="relative block h-14 sm:h-20 w-[8.5rem] sm:w-[12.25rem]">
              <img
                src={logo}
                alt="The Slice Worthington"
                className="absolute inset-0 h-full w-auto max-w-none"
              />
              <img
                src={logoLight}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-auto max-w-none"
                style={{ clipPath: "inset(0 0 0 40%)" }}
              />
            </span>
          ) : (
            <img src={logo} alt="The Slice Worthington" className="h-14 sm:h-20 w-auto" />
          )}
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`rounded-full p-2 transition-colors hover:text-primary ${dark ? "text-white" : "text-foreground"}`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {open && (
        <div
          className="menu-panel animate-rise fixed inset-0 z-50 flex flex-col px-6 pt-safe pb-safe"
          style={{ animationDuration: "0.25s" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="The Slice Worthington" className="h-16 w-auto" />
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-10 flex flex-1 flex-col gap-1">
            {items.map((item) =>
              "href" in item ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setOpen(false);
                    if (isNativePlatform()) {
                      e.preventDefault();
                      void openExternalUrl(item.href);
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className="flex touch-manipulation items-center gap-4 rounded-2xl px-4 py-4 text-lg font-medium transition-transform duration-150 ease-out active:scale-[0.98]"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="flex-1">{item.label}</span>
                  <span aria-hidden>›</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`flex touch-manipulation items-center gap-4 rounded-2xl px-4 py-4 text-lg font-medium transition-transform duration-150 ease-out active:scale-[0.98] ${pathname === item.to ? "menu-item-active" : ""}`}
                  aria-current={pathname === item.to ? "page" : undefined}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="flex-1">{item.label}</span>
                  <span aria-hidden>›</span>
                </Link>
              ),
            )}
          </nav>

          <p className="text-center text-xs tracking-[0.3em] uppercase opacity-60">
            Swing. Smile. Stay Awhile.
          </p>
        </div>
      )}
    </>
  );
}
