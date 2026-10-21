# The Slice — Project Requirements & Product Scope

## 1. Executive Summary

**The Slice** is launching a streamlined, mobile-optimized digital experience allowing customers to easily book one of five premium golf simulator bays in Worthington, Ohio.

To maximize delivery speed, minimize friction, and validate customer adoption rapidly, the project adopts a **phased rollout strategy**:

- **Phase 1 (Immediate MVP)**: Mobile-first Progressive Web App (PWA) that customers can install directly to their iPhone/Android home screen.
- **Phase 2 (Subsequent Expansion)**: Native iOS application distributed via the Apple App Store.

---

## 2. Strategic Roadmap & Phased Approach

### Phase 1: Mobile Web App / PWA (Current Priority)

- **Target**: Working prototype / MVP live for testing within 1 week.
- **Deployment**: Hosted at `https://app.thesliceworthington.com`.
- **Installability**: PWA manifest and iOS web app meta tags allowing users to tap **"Add to Home Screen"** on Safari to get a full-screen, native-feeling app icon and splash screen without App Store approval delays.
- **Core Function**: Fast, frictionless entry point with prominent **"Book a Bay"** CTA that connects directly into The Slice's existing Whoosh booking platform.

### Phase 2: Native iOS App (App Store)

- **Target**: Follow-up milestone after Phase 1 validation.
- **Distribution**: Apple App Store via Apple Developer Program enrollment.
- **Architecture**: Package the web app using Capacitor/native shell or dedicated Swift/React Native container.
- **Review & Compliance**: Coordinate Apple App Store guidelines, In-App Purchase vs. external booking compliance, privacy manifests, and TestFlight beta testing.

---

## 3. Core Functional Requirements (Phase 1 — MVP)

| ID       | Requirement                     | Description                                                                                   | Status   |
| -------- | ------------------------------- | --------------------------------------------------------------------------------------------- | -------- |
| **FR-1** | **Brand Experience**            | Elegant, modern UI tailored to The Slice's brand identity, photography, and luxury aesthetic. | Required |
| **FR-2** | **"Book a Bay" CTA**            | Primary button prominently directing users into Whoosh simulator booking agenda.              | Required |
| **FR-3** | **PWA & Add to Home Screen**    | Web App Manifest, iOS touch icons, standalone display mode, and mobile viewport optimization. | Required |
| **FR-4** | **Supporting Information**      | Quick links and summaries for simulator details, venue location, hours, and the main website. | Required |
| **FR-5** | **Error Handling & Resilience** | Graceful fallback/offline shell and clean navigation back to home or booking.                 | Required |

---

## 4. Future Expansion (Phase 2 & Beyond)

As user engagement and operational data grow, the platform will expand to include:

- **Memberships**: Information on tiers, perks, and member-only booking access.
- **Events & Leagues**: Bay tournaments, private parties, corporate events, and league sign-ups.
- **Promotions & Notifications**: Push notifications for last-minute bay openings, peak/off-peak specials.
- **Integrated Profiles**: Customer history, favorite bay selections, and automated reminders.

---

## 5. Key URLs & External Resources

- **Whoosh Simulator Booking**: [https://app.whoosh.io/patron/club/the-slice/agenda/simulators/today](https://app.whoosh.io/patron/club/the-slice/agenda/simulators/today)
- **The Slice Official Website**: [https://www.thesliceworthington.com](https://www.thesliceworthington.com)
- **Target Application URL**: [https://app.thesliceworthington.com](https://app.thesliceworthington.com)
- **Apple Developer Program**: [https://developer.apple.com/programs/enroll/](https://developer.apple.com/programs/enroll/)

---

## 6. Success Criteria

1. **Speed to Market**: Functional, branded web app deployed and ready for user testing within 1 week.
2. **Zero Friction**: Customers can access the booking system in a single tap from their home screen.
3. **Foundation for Native**: Architecture supports clean transition to iOS App Store build without code rewrites.
