# The Slice — iOS, Android & Web Hosting Estimate

## Executive estimate

Based on the current prototype and developer guide, the estimated effort for a customer-ready iOS and Android Version 1 is:

- **Timeline:** 4–6 calendar weeks
- **Development effort:** 110–160 hours
- **Estimated implementation cost:** **$10,000–$16,000 USD**

This estimate excludes Apple Developer, Google Play, App Store, Play Store, and other third-party service fees.

## Current implementation audit

The current application is a strong web/PWA prototype, but it is not yet a Version 1 mobile app. The audit below compares the repository with the expected Version 1 scope.

### Already implemented

- TanStack Start, React, and TypeScript foundation
- Responsive branded home screen and navigation menu
- Prominent “Book a Bay” CTA throughout the app
- Direct link to the approved Whoosh booking URL
- Homepage video with mobile and desktop sources, autoplay, mute, loop, and poster image
- Memberships page with a link to the approved membership flow
- Simulator information page using Full Swing-oriented copy
- Events page with birthday parties, family nights, group hangs, and Instagram link
- About page with brand messaging, imagery, feature copy, and testimonials
- Contact page with contact form link, map link, address, and official website link
- PWA manifest, icons, iOS web-app metadata, and service-worker registration
- Custom 404 page and general application error page
- Working production build
- Passing automated tests for routing and key external URLs

### Partially implemented or requires verification

- **Booking:** the CTA opens Whoosh, but the repository does not include device-level verification of availability, selections, checkout, browser handoff, or return-to-app behavior.
- **PWA/offline behavior:** the manifest and service worker exist, but the full route shell is not cached and offline behavior is not covered by tests.
- **Memberships:** the page exists, but membership pricing, perks, availability, and signup content must be confirmed against approved live content.
- **Events:** the page exists, but it does not currently provide a clear group-booking/contact CTA or confirmed hours.
- **Contact/location:** contact and map links are present, but business hours are not currently shown.
- **Brand/content:** the main visual direction and messaging are present, but all imagery, copy, colors, and content still require final owner approval against the official brand materials.
- **Quality assurance:** automated coverage is limited to route matching and URL constants; real-device, browser, accessibility, performance, and booking-flow testing remain outstanding.

### Not implemented

- iOS project and App Store build
- Android project and Google Play build
- Capacitor configuration and native plugins
- Native bundle identifiers, signing configuration, splash screens, and store icon sets
- Native back navigation and external-link/browser handling
- Cloudflare Workers deployment configuration
- Cloudflare Wrangler scripts and production environment setup
- App Store Connect and Google Play Console listing assets
- Store screenshots, privacy disclosures, review notes, and release builds
- Owner-controlled signing-key and certificate handoff documentation

The biggest engineering gap is that the current repository is still configured for Vercel/Nitro and contains no iOS or Android application projects.

## Version 1 scope

Version 1 should include:

- Branded home screen and navigation
- Prominent “Book a Bay” action
- Whoosh booking flow launch and return behavior
- Membership information and approved signup flow
- Events and private-group information
- Contact, location, and hours information
- iOS and Android builds using a shared codebase
- Native icons, splash screens, and safe-area support
- Proper external-link and back-navigation behavior
- Loading, error, and poor-network states
- Privacy policy and support links
- App Store and Google Play listing assets
- Source-code, build, deployment, and signing-key handoff documentation

## Estimated effort

| Workstream                                            |          Estimate |
| ----------------------------------------------------- | ----------------: |
| Codebase audit and implementation cleanup             |        8–12 hours |
| Cloudflare Workers migration and deployment setup     |        8–16 hours |
| Mobile UX, content, and native navigation completion  |       20–30 hours |
| Capacitor iOS and Android implementation              |       28–40 hours |
| Whoosh booking and return-flow testing                |       14–22 hours |
| Real-device QA, accessibility, and performance checks |       16–24 hours |
| Store submission preparation and handoff              |       10–16 hours |
| **Total including contingency**                       | **110–160 hours** |

## Cost estimate

Using a blended development rate of approximately **$75–$100 per hour**, the expected implementation cost is:

| Estimate type          |                        Cost |
| ---------------------- | --------------------------: |
| Lower-end estimate     |       Approximately $10,000 |
| Expected range         |             $10,000–$16,000 |
| Higher-complexity case | Up to approximately $18,000 |

The higher end may apply if the Whoosh flow requires additional integration work, if approved content is not ready, or if multiple review cycles are required for store approval.

## Cloudflare hosting recommendation

Cloudflare is recommended instead of upgrading the Vercel Hobby plan.

The current app uses TanStack Start with server-side rendering and Nitro. The recommended Cloudflare deployment is **Cloudflare Workers**, configured with the Cloudflare Vite plugin and Wrangler. This is preferable to treating the project as a simple static Pages site because it preserves the application’s server-rendering architecture.

Cloudflare’s current TanStack Start deployment guidance is available here:

<https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/>

### Estimated Cloudflare cost

- **Workers Free:** $0/month for early usage, subject to Cloudflare’s free-plan limits.
- **Workers Paid:** starts at approximately **$5/month**, with included monthly request capacity and usage-based charges afterward.
- **Domain registration:** separate, if applicable.
- **Email, analytics, databases, push notifications, and media storage:** separate services if added later.

Cloudflare currently documents a 100,000-request-per-day limit for the Workers Free plan and a Workers Paid plan starting at $5/month:

<https://developers.cloudflare.com/workers/platform/pricing/>

Vercel Hobby is not appropriate for the commercial application because its terms restrict the plan to personal or non-commercial use:

<https://vercel.com/legal/terms>

## Store and third-party costs excluded

The implementation estimate does not include:

- Apple Developer Program membership
- Google Play Console registration
- App Store or Google Play transaction fees
- Domain registration or renewal
- Paid email, analytics, CRM, or marketing tools
- Push notification provider costs, if applicable
- Database or content-management infrastructure, if introduced
- Professional copywriting, photography, or video production

## Optional Phase 2 features

These features should be estimated after Version 1 is stable:

| Feature                               |           Additional estimate |
| ------------------------------------- | ----------------------------: |
| Push notifications                    |                   24–40 hours |
| Customer accounts and saved favorites |                   40–80 hours |
| Loyalty or rewards features           |                  50–100 hours |
| Deeper Whoosh integration             | Dependent on API availability |
| Admin-managed content                 |                   40–80 hours |

## Current technical notes

- The production build and automated tests currently pass.
- The lint command reports existing formatting issues in several route and UI files. These are cleanup items, but they should be resolved before the mobile release.
- The current Vite configuration uses the Nitro adapter and the repository has a Vercel configuration file. Cloudflare migration will require the Cloudflare Vite plugin, Wrangler configuration, deployment scripts, and removal or replacement of the current deployment adapter.
- No `ios/`, `android/`, or Capacitor configuration is currently present in the repository.
- The service worker provides a basic shell/runtime cache, but it does not yet guarantee a complete offline route experience.
- The current automated tests do not exercise rendered screens, native builds, real devices, external browser behavior, accessibility, performance, or the Whoosh booking flow.

## Assumptions

This estimate assumes:

- The Slice provides final approved branding, imagery, copy, membership, event, location, and hours content.
- The Whoosh booking URL and customer flow remain available and do not require a new booking backend.
- Payments remain inside the approved Whoosh flow.
- The Slice owns the Apple and Google developer accounts.
- The app uses one shared codebase for iOS and Android, most likely through Capacitor.
- The owner provides timely feedback and approval during testing.
- No custom customer database, loyalty backend, or full Whoosh API integration is required for Version 1.

## Recommended delivery plan

1. Audit the existing repository and confirm content, accounts, and device targets.
2. Complete missing Version 1 content and mobile UX behavior.
3. Migrate the web application from Vercel to Cloudflare Workers.
4. Add and configure the iOS and Android Capacitor projects.
5. Test booking, navigation, external links, and error states on real devices.
6. Prepare store listings, screenshots, privacy information, and release builds.
7. Obtain owner approval and submit to the Apple App Store and Google Play.
