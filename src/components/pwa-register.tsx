import { useEffect } from "react";
import { isNativePlatform } from "@/lib/platform";

/** Registers the production service worker without affecting server rendering or native shells. */
export function PwaRegister() {
  useEffect(() => {
    if (isNativePlatform() || !("serviceWorker" in navigator)) return;

    void navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // Service worker support is optional; the app remains fully usable without it.
    });
  }, []);

  return null;
}
