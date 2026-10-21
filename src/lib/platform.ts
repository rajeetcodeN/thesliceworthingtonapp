import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

/** Returns true if running inside a native Capacitor shell (Android or iOS). */
export function isNativePlatform(): boolean {
  if (typeof window === "undefined") return false;
  return Capacitor.isNativePlatform();
}

/** Returns the current platform ('android', 'ios', or 'web'). */
export function getPlatform(): "android" | "ios" | "web" {
  if (typeof window === "undefined") return "web";
  return Capacitor.getPlatform() as "android" | "ios" | "web";
}

/**
 * Opens an external URL. On native Android/iOS, uses Chrome Custom Tabs
 * or In-App Safari via @capacitor/browser so users can easily close and return.
 * On web, falls back to standard window.open.
 */
export async function openExternalUrl(url: string, target: string = "_blank"): Promise<void> {
  if (isNativePlatform()) {
    try {
      await Browser.open({
        url,
        presentationStyle: "popover",
        toolbarColor: "#000000",
      });
      return;
    } catch (err) {
      console.warn("Capacitor Browser failed, falling back to window.open", err);
    }
  }

  if (typeof window !== "undefined") {
    window.open(url, target, "noopener,noreferrer");
  }
}

/**
 * Initializes native mobile capabilities (Android/iOS):
 * - Status bar configuration
 * - Splash screen management
 * - Android hardware back-button handling
 * - Deep link (appUrlOpen) routing
 */
export function setupNativeListeners(onNavigate?: (path: string) => void): () => void {
  if (!isNativePlatform()) return () => {};

  // 1. Configure Status Bar
  void (async () => {
    try {
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setBackgroundColor({ color: "#000000" });
    } catch {
      // Ignored if status bar manipulation is unsupported on device
    }
  })();

  // 2. Hide Splash Screen smoothly once app mounted
  void (async () => {
    try {
      await SplashScreen.hide({ fadeOutDuration: 300 });
    } catch {
      // Ignored
    }
  })();

  // 3. Android hardware back-button listener
  const backHandlerPromise = App.addListener("backButton", ({ canGoBack }) => {
    if (typeof window === "undefined") return;

    const currentPath = window.location.pathname;
    const isRoot = currentPath === "/" || currentPath === "";

    if (!isRoot) {
      window.history.back();
    } else {
      void App.exitApp();
    }
  });

  // 4. Handle incoming deep links (e.g. from notifications, external apps, or web intents)
  const appUrlPromise = App.addListener("appUrlOpen", (data) => {
    try {
      const url = new URL(data.url);
      const path = url.pathname + url.search + url.hash;
      if (path && onNavigate) {
        onNavigate(path);
      }
    } catch {
      // If it's a custom scheme like theslice://route
      const slug = data.url.split("://")[1];
      if (slug && onNavigate) {
        onNavigate("/" + slug.replace(/^\/+/, ""));
      }
    }
  });

  return () => {
    void backHandlerPromise.then((h) => h.remove());
    void appUrlPromise.then((h) => h.remove());
  };
}
