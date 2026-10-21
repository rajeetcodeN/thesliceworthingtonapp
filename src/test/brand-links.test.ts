import { describe, expect, it } from "vitest";
import {
  HERO_VIDEO_DESKTOP_URL,
  HERO_VIDEO_MOBILE_URL,
  INSTAGRAM_URL,
  WHOOSH_BOOKING_URL,
} from "@/lib/links";

describe("The Slice external destinations", () => {
  it("keeps booking connected directly to Whoosh", () => {
    expect(WHOOSH_BOOKING_URL).toBe(
      "https://app.whoosh.io/patron/club/the-slice/agenda/simulators/today",
    );
  });

  it("uses the official Instagram destination for updates", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/thesliceworthington/");
  });

  it("provides both homepage video variants", () => {
    expect(HERO_VIDEO_DESKTOP_URL).toContain("HeroVideo-Desktop-new-logo_mp4.mp4");
    expect(HERO_VIDEO_MOBILE_URL).toContain("HeroVideo-Mobile_mp4.mp4");
  });
});
