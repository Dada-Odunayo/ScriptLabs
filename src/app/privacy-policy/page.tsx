import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy for PromptPro | ScriptLabs",
  description: "Privacy Policy for the PromptPro mobile application.",
};

const accountInformation = ["Your name", "Email address", "Profile photo"];

const advertisingData = [
  "Device identifiers",
  "Advertising identifiers",
  "Approximate location",
  "App interaction data",
];

const permissions = [
  {
    title: "Camera Permission",
    items: ["Video recording", "Camera preview"],
  },
  {
    title: "Microphone Permission",
    items: ["Audio recording during videos"],
  },
  {
    title: "Storage / Media Permissions",
    items: ["Saving recorded videos", "Accessing saved videos"],
  },
  {
    title: "Internet Permission",
    items: ["Authentication", "Ads", "Subscription validation", "Future online features"],
  },
];

const informationUses = [
  "Provide teleprompter functionality",
  "Enable video recording features",
  "Save and manage scripts/videos",
  "Authenticate users",
  "Process subscriptions",
  "Improve app stability and performance",
  "Deliver advertisements for free users",
];

const storageDetails = [
  "Scripts are stored locally on your device",
  "Recorded videos are stored locally on your device",
  "Authentication data is managed securely through Firebase Authentication",
];

const thirdPartyServices = [
  "Google Play Billing",
  "Firebase Authentication",
  "Google AdMob",
  "Google Play Services",
  "CameraX libraries",
];

const userChoices = [
  "Use the App without authentication",
  "Delete saved scripts and videos locally",
  "Uninstall the App at any time",
  "Manage ad preferences through Google settings",
  "Cancel subscriptions through Google Play",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PolicySection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="border-t border-white/10 pt-10">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-5 space-y-6 leading-8 text-slate-300">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="lab-grid fixed inset-0 -z-10" />
      <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <a
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-glow/45 hover:text-cyan-glow focus:outline-none focus:ring-2 focus:ring-cyan-glow focus:ring-offset-2 focus:ring-offset-ink"
        >
          Back to ScriptLabs
        </a>

        <header className="mt-12">
          <p className="font-mono text-sm uppercase text-cyan-glow">Effective Date: May 22, 2026</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Privacy Policy for PromptPro
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            PromptPro (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your
            privacy. This Privacy Policy explains how the PromptPro mobile application
            (&quot;the App&quot;) collects, uses, and protects user information.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            By using the App, you agree to the practices described in this Privacy Policy.
          </p>
        </header>

        <div className="mt-12 space-y-12 rounded-lg border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
          <PolicySection title="1. Information We Collect">
            <div>
              <h3 className="text-lg font-semibold text-white">a. Account Information</h3>
              <p className="mt-3">
                If you choose to sign in using Google Sign-In, we may collect:
              </p>
              <BulletList items={accountInformation} />
              <p className="mt-4">
                Authentication is optional and is used for future account-related features such
                as cloud sync and personalization.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">b. Scripts and User Content</h3>
              <p className="mt-3">
                The scripts you create inside the App are stored locally on your device unless
                future cloud sync features are introduced.
              </p>
              <p className="mt-4">We do not currently upload your scripts to our servers.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">c. Recorded Videos</h3>
              <p className="mt-3">
                Videos recorded using the App are stored locally on your device using Android
                MediaStore APIs.
              </p>
              <p className="mt-4">
                We do not upload or process your videos on external servers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">d. Usage and Analytics Data</h3>
              <p className="mt-3">
                The App may collect limited anonymous diagnostic and usage information to
                improve stability, performance, and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">e. Advertising Data</h3>
              <p className="mt-3">
                Free users may see advertisements provided by third-party advertising providers
                such as Google AdMob.
              </p>
              <p className="mt-4">Ad providers may collect:</p>
              <BulletList items={advertisingData} />
              <p className="mt-4">
                This information is governed by the privacy policies of those providers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                f. Subscription and Billing Information
              </h3>
              <p className="mt-3">
                Purchases and subscriptions are processed securely through Google Play Billing.
              </p>
              <p className="mt-4">We do not collect or store your payment card details.</p>
              <p className="mt-4">
                Google may collect billing-related information according to its own privacy
                policies.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="2. Permissions We Use">
            <p>The App may request the following permissions:</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {permissions.map((permission) => (
                <div key={permission.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <h3 className="font-semibold text-white">{permission.title}</h3>
                  <p className="mt-3">Used for:</p>
                  <BulletList items={permission.items} />
                </div>
              ))}
            </div>
          </PolicySection>

          <PolicySection title="3. How We Use Information">
            <p>We use collected information to:</p>
            <BulletList items={informationUses} />
          </PolicySection>

          <PolicySection title="4. Data Storage">
            <p>Currently:</p>
            <BulletList items={storageDetails} />
            <p className="mt-4">
              We do not currently operate our own backend servers for storing user-generated
              content.
            </p>
          </PolicySection>

          <PolicySection title="5. Third-Party Services">
            <p>The App may use third-party services including:</p>
            <BulletList items={thirdPartyServices} />
            <p className="mt-4">
              These services may collect information according to their own privacy policies.
            </p>
          </PolicySection>

          <PolicySection title="6. Children's Privacy">
            <p>The App is not directed toward children under the age of 13.</p>
            <p>We do not knowingly collect personal information from children.</p>
          </PolicySection>

          <PolicySection title="7. Security">
            <p>
              We take reasonable measures to protect user information and app integrity.
              However, no system can be guaranteed completely secure.
            </p>
          </PolicySection>

          <PolicySection title="8. Rooted or Modified Devices">
            <p>
              Certain features of the App may be restricted on rooted, modified, or
              integrity-compromised devices in order to protect subscriptions, billing systems,
              and app security.
            </p>
          </PolicySection>

          <PolicySection title="9. Your Choices">
            <p>You may:</p>
            <BulletList items={userChoices} />
          </PolicySection>

          <PolicySection title="10. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time.</p>
            <p>Changes will become effective once the updated policy is published.</p>
          </PolicySection>

          <PolicySection title="11. Contact">
            <p>If you have questions regarding this Privacy Policy, you may contact:</p>
            <div className="rounded-lg border border-cyan-glow/20 bg-cyan-glow/10 p-5">
              <p className="font-semibold text-white">ScriptLabs</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href={`mailto:${process.env.RESEND_FROM_EMAIL?.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? process.env.CONTACT_EMAIL ?? "hello@scriptlabs.ng"}`}
                  className="text-cyan-glow underline-offset-4 hover:underline"
                >
                  {process.env.RESEND_FROM_EMAIL?.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? process.env.CONTACT_EMAIL ?? "hello@scriptlabs.ng"}
                </a>
              </p>
            </div>
          </PolicySection>
        </div>
      </article>
    </main>
  );
}
