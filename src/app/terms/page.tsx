import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use | Support Sickle Cell Nigeria",
  description:
    "The terms governing your use of the Support Sickle Cell Nigeria (SSCN) website, including donations, intellectual property, disclaimers and governing law.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        intro="Please read these terms carefully. They set out the rules for using our website and the basis on which we provide information and services."
        breadcrumb="Home / Terms of Use"
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-muted">
            Last updated: 1 June 2026
          </p>

          <div className="mt-8 space-y-10 text-base leading-relaxed text-muted">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                1. Acceptance of terms
              </h2>
              <p>
                Welcome to the Support Sickle Cell Nigeria (&ldquo;SSCN&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) website.
                By accessing or using this website, you agree to be bound by these
                Terms of Use and our Privacy Policy. If you do not agree with any
                part of these terms, please do not use the website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                2. Use of the website
              </h2>
              <p>
                You may use this website for lawful, personal and non-commercial
                purposes consistent with its charitable mission. You agree not to:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  use the site in any way that breaches applicable laws or
                  regulations;
                </li>
                <li>
                  attempt to gain unauthorised access to our systems, data or
                  accounts;
                </li>
                <li>
                  upload or transmit harmful code, spam or misleading content; or
                </li>
                <li>
                  use the site to harass, defame or harm others, or to
                  misrepresent your identity.
                </li>
              </ul>
              <p>
                We may suspend or restrict access to the website at any time to
                protect our community and systems.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">3. Donations</h2>
              <p>
                Donations made through this website support our charitable
                programmes. By donating, you confirm that the funds are lawfully
                yours to give and that the payment information you provide is
                accurate. Donations are generally non-refundable; if you believe a
                donation was made in error, please contact us promptly and we will
                review the matter in good faith. We are committed to using
                donations responsibly and publishing impact and financial reports.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                4. Intellectual property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                icons, images and resources — is owned by or licensed to SSCN and
                is protected by applicable intellectual property laws. You may
                view and share content for personal, non-commercial awareness
                purposes with appropriate credit. You may not reproduce, modify,
                distribute or commercially exploit our content without our prior
                written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                5. Medical information disclaimer
              </h2>
              <p>
                The information on this website — including articles, guidelines,
                infographics and resources — is provided for general educational
                and awareness purposes only. It is{" "}
                <strong className="text-navy">
                  not a substitute for professional medical advice, diagnosis or
                  treatment
                </strong>
                . Always seek the guidance of a qualified healthcare provider with
                any questions about a medical condition, and never disregard or
                delay professional advice because of something you have read here.
                In an emergency, contact a hospital or emergency service
                immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                6. Third-party links
              </h2>
              <p>
                Our website may contain links to third-party websites and
                services, including partner hospitals, blood banks and payment
                providers. These are offered for convenience only. We do not
                control and are not responsible for the content, policies or
                practices of third-party sites, and you access them at your own
                risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                7. Limitation of liability
              </h2>
              <p>
                The website and its content are provided &ldquo;as is&rdquo; and
                &ldquo;as available&rdquo; without warranties of any kind, whether
                express or implied. To the fullest extent permitted by law, SSCN
                will not be liable for any indirect, incidental or consequential
                loss or damage arising from your use of, or inability to use, this
                website or any information it contains.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">8. Governing law</h2>
              <p>
                These Terms of Use are governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria. Any dispute
                arising from or relating to these terms or your use of the website
                shall be subject to the exclusive jurisdiction of the courts of
                Nigeria.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">
                9. Changes to these terms
              </h2>
              <p>
                We may revise these Terms of Use from time to time. Updated terms
                take effect when posted, and the &ldquo;last updated&rdquo; date
                above will reflect the most recent revision. Your continued use of
                the website after changes are posted constitutes acceptance of the
                revised terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">10. Contact us</h2>
              <p>
                If you have any questions about these Terms of Use, please contact
                us:
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
