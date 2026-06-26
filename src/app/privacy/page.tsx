import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Support Sickle Cell Nigeria",
  description:
    "How Support Sickle Cell Nigeria (SSCN) collects, uses and protects your personal data in line with the Nigeria Data Protection Act (NDPA) and global best practice.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        intro="Your trust matters to us. This policy explains what personal data we collect, why we collect it, and the rights you have over it."
        breadcrumb="Home / Privacy Policy"
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-muted">
            Last updated: 1 June 2026
          </p>

          <div className="mt-8 space-y-10 text-base leading-relaxed text-muted">
            <section className="space-y-4">
              <p>
                Support Sickle Cell Nigeria (&ldquo;SSCN&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to protecting
                your privacy and handling your personal data responsibly. This
                Privacy Policy describes how we collect, use, share and safeguard
                information when you visit our website, register for support,
                donate, volunteer or otherwise interact with us.
              </p>
              <p>
                We process personal data in accordance with the{" "}
                <strong className="text-navy">
                  Nigeria Data Protection Act, 2023 (NDPA)
                </strong>{" "}
                and the regulations of the Nigeria Data Protection Commission
                (NDPC). Where we serve users outside Nigeria, we also apply
                widely recognised principles such as those reflected in the
                General Data Protection Regulation (GDPR): lawfulness, fairness,
                transparency, purpose limitation, data minimisation, accuracy,
                storage limitation, integrity and accountability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                1. Information we collect
              </h2>
              <p>
                We only collect data we genuinely need to deliver our programmes
                and support warriors and families. Depending on how you engage
                with us, this may include:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong className="text-navy">Identity &amp; contact data</strong>{" "}
                  — your name, email address, phone number, and postal or state
                  location.
                </li>
                <li>
                  <strong className="text-navy">Beneficiary data</strong> —
                  information you provide when registering for support, which may
                  include genotype and health-related details necessary to assess
                  eligibility and provide care.
                </li>
                <li>
                  <strong className="text-navy">Donation data</strong> — the
                  amount, frequency and method of giving, and limited transaction
                  references.
                </li>
                <li>
                  <strong className="text-navy">Volunteer &amp; partner data</strong>{" "}
                  — skills, availability, organisation and role preferences.
                </li>
                <li>
                  <strong className="text-navy">Technical data</strong> — your IP
                  address, browser type, device information and pages visited,
                  collected automatically through cookies and similar
                  technologies.
                </li>
              </ul>
              <h3 className="text-lg font-bold text-navy">Sensitive data</h3>
              <p>
                Health and genotype information is sensitive personal data. We
                collect it only with your consent or where necessary to provide
                medical and welfare support, and we apply additional safeguards
                to protect it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                2. How we use your information
              </h2>
              <p>We use your personal data to:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>process support requests and connect you to care and referrals;</li>
                <li>administer donations, issue receipts and acknowledge gifts;</li>
                <li>coordinate volunteering, events and partnerships;</li>
                <li>
                  send updates, newsletters and programme information where you
                  have asked to receive them;
                </li>
                <li>
                  improve our website, services and impact reporting; and
                </li>
                <li>
                  meet legal, regulatory and safeguarding obligations.
                </li>
              </ul>
              <p>
                Our lawful bases for processing include your consent, the
                performance of a service you have requested, our legitimate
                interests as a non-profit, and compliance with the law. You can
                withdraw consent at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                3. Donations and payment data
              </h2>
              <p>
                Online donations are processed by trusted, PCI-DSS compliant
                payment providers. We do <strong className="text-navy">not</strong>{" "}
                store your full card or bank account numbers on our systems.
                Payment providers handle your financial details under their own
                privacy and security terms, and we receive only the limited
                confirmation data needed to record your gift and provide a
                receipt.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                4. Cookies and tracking
              </h2>
              <p>
                Our website uses cookies and similar technologies to keep the
                site working, remember your preferences and understand how the
                site is used so we can improve it. You can control or disable
                cookies through your browser settings, though some features may
                not function fully without them. Where required, we ask for your
                consent before setting non-essential cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                5. Sharing your information
              </h2>
              <p>
                We do not sell your personal data. We may share it only with:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  partner hospitals, clinics and service providers strictly to
                  deliver the support you have requested;
                </li>
                <li>
                  vetted processors who help us run our website, payments and
                  communications, under contracts that protect your data; and
                </li>
                <li>
                  authorities where we are legally required to do so.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                6. Data retention
              </h2>
              <p>
                We keep personal data only for as long as necessary to fulfil the
                purposes described in this policy, to meet legal and accounting
                obligations, and to maintain accurate impact records. When data
                is no longer needed, we securely delete or anonymise it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">7. Your rights</h2>
              <p>
                Under the NDPA and comparable frameworks, you have the right to:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>access the personal data we hold about you;</li>
                <li>request correction of inaccurate or incomplete data;</li>
                <li>request deletion of your data where appropriate;</li>
                <li>object to or restrict certain processing;</li>
                <li>withdraw consent at any time; and</li>
                <li>
                  request a portable copy of data you have provided to us.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details
                below. You also have the right to lodge a complaint with the
                Nigeria Data Protection Commission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">8. Security</h2>
              <p>
                We use appropriate technical and organisational measures —
                including access controls, encryption in transit and staff
                training — to protect your data against loss, misuse and
                unauthorised access. No system is perfectly secure, but we work
                continually to keep your information safe.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                9. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we will revise the &ldquo;last updated&rdquo; date above and,
                where changes are significant, provide a more prominent notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">10. Contact us</h2>
              <p>
                If you have questions about this policy or how we handle your
                data, please reach out:
              </p>
              <div className="rounded-2xl border border-line bg-grey/40 p-6 text-sm not-italic text-ink">
                <p className="font-bold text-navy">{site.name}</p>
                <p className="mt-1">{site.address}</p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="mt-1">
                  Phone:{" "}
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, "")}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {site.phone}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
