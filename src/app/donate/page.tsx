import type { Metadata } from "next";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import {
  Button,
  Eyebrow,
  Badge,
  IconCard,
  SectionHeading,
  Section,
  PageHero,
  CheckList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Donate to SSCN | Support Sickle Cell Nigeria",
  description:
    "Your gift funds genotype testing, life-saving crisis care, blood drives, awareness and research for sickle cell warriors across all 36 states and the FCT. Give once or monthly.",
};

const giftImpacts = [
  "Folic acid and pain medication that keep warriors crisis-free.",
  "Free, confidential genotype testing and counselling at outreaches.",
  "A unit of blood and crisis-care supplies during an emergency admission.",
  "Awareness drives that prevent new cases of sickle cell.",
];

const waysToGive: { icon: Parameters<typeof IconCard>[0]["icon"]; title: string; text: string }[] = [
  {
    icon: "gift",
    title: "One-Time Gift",
    text: "A single donation that goes straight to work — funding a test, a medication refill or an emergency.",
  },
  {
    icon: "heart",
    title: "Monthly Giving",
    text: "Become a Hope Partner. Recurring support lets us plan care and respond to crises all year round.",
  },
  {
    icon: "scale",
    title: "Corporate Giving",
    text: "CSR partnerships, matched giving and sponsored drives that multiply your company's impact.",
  },
  {
    icon: "shield",
    title: "Legacy Giving",
    text: "Leave a lasting gift in your will to sustain the movement for the warriors of tomorrow.",
  },
  {
    icon: "users",
    title: "Sponsor a Child",
    text: "Cover a warrior child's medication, clinic visits and folic acid for a full school term.",
  },
  {
    icon: "stethoscope",
    title: "Fund Medical Care",
    text: "Directly support crisis admissions, blood transfusions and specialist consultations.",
  },
  {
    icon: "megaphone",
    title: "Power Awareness",
    text: "Fund free genotype testing drives and campaigns that prevent new cases of sickle cell.",
  },
  {
    icon: "flask",
    title: "Advance Research",
    text: "Help fund Nigerian-led research into better, more affordable sickle cell treatment.",
  },
];

const paymentMethods: { icon: Parameters<typeof IconCard>[0]["icon"]; label: string }[] = [
  { icon: "gift", label: "Cards" },
  { icon: "scale", label: "Bank Transfer" },
  { icon: "phone", label: "USSD" },
  { icon: "chat", label: "Mobile Money" },
  { icon: "globe", label: "International" },
];

const transparency = [
  "82 kobo of every naira goes directly to programs and warrior care.",
  "Independently audited accounts published in our annual report.",
  "Every campaign has a clear, trackable funding goal.",
  "Registered non-profit with full regulatory compliance.",
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        image={img.childSmiling.src}
        imageAlt={img.childSmiling.alt}
        eyebrow="Donate"
        title="Your gift rewrites a warrior's story"
        intro="Every naira you give becomes a genotype test, a pint of blood, a dose of medication, a crisis survived. Give today and stand with the sickle cell community across all 36 states and the FCT."
        breadcrumb="Home / Donate"
      />

      {/* Donate via Paystack */}
      <Section tone="grey">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl shadow-primary/20 sm:p-10">
              <div className="absolute inset-0 bg-dotgrid opacity-20" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <Icon.shield className="h-4 w-4" /> Secure online giving
                </span>
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl text-balance">
                  Give any amount, in seconds
                </h2>
                <p className="mt-3 text-white/85">
                  Donate securely with your card, bank transfer, USSD or mobile
                  money through our trusted payment partner. You choose the amount
                  on the next screen.
                </p>
                <div className="mt-7">
                  <Button
                    href={site.donateUrl}
                    external
                    size="lg"
                    variant="white"
                    icon
                    className="w-full sm:w-auto"
                  >
                    Donate with Paystack
                  </Button>
                </div>
                <p className="mt-4 flex items-center gap-2 text-xs text-white/75">
                  <Icon.shield className="h-4 w-4" />
                  Payments are processed securely by Paystack. SSCN never stores
                  your card details.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Your Impact</Eyebrow>
            <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl text-balance">
              Whatever you give, it goes straight to work
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              We believe in radical clarity. Every gift — of any size — funds real
              care for warriors and families across all 36 states and the FCT:
            </p>
            <div className="mt-6">
              <CheckList items={giftImpacts} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ways to give */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Ways to Give"
          title="Choose how you want to make a difference"
          intro="From a one-off gift to a lasting legacy, there is a way to give that fits your heart and your means."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {waysToGive.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 70}>
              <IconCard icon={w.icon} title={w.title}>
                {w.text}
              </IconCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Payment methods */}
      <Section tone="white">
        <div className="rounded-3xl border border-line bg-grey/40 p-8 sm:p-10">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-md text-center lg:text-left">
              <Eyebrow>Payment Methods</Eyebrow>
              <h3 className="mt-4 text-2xl font-bold text-navy text-balance">
                Give the way that works for you
              </h3>
              <p className="mt-3 text-sm text-muted">
                Whether you bank in Lagos or live abroad, we make it easy to give
                securely.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {paymentMethods.map((m) => {
                const MIcon = Icon[m.icon];
                return (
                  <div
                    key={m.label}
                    className="flex items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy/10 text-navy">
                      <MIcon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-navy">
                      {m.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Financial transparency */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 text-white">
              <div className="absolute inset-0 bg-dotgrid opacity-30" />
              <div className="relative">
                <Icon.scale className="h-10 w-10 text-primary-light" />
                <h3 className="mt-5 text-2xl font-bold">Where your money goes</h3>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Programs & warrior care", value: 82 },
                    { label: "Awareness & advocacy", value: 11 },
                    { label: "Administration", value: 7 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">{row.label}</span>
                        <span className="font-bold">{row.value}%</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/15">
                        <div
                          className="h-full rounded-full bg-primary-light"
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Financial Transparency</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              Trust is earned. We open our books.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              You deserve to know that your gift is handled with integrity. We
              publish audited accounts, track every campaign, and report back on
              the lives changed by your generosity.
            </p>
            <div className="mt-6">
              <CheckList items={transparency} />
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="outline" icon>
                Request our annual report
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Receipts / tax note */}
      <Section tone="grey">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-line bg-white p-8 text-center sm:flex-row sm:text-left">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Icon.book className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-navy">
                Donation receipts &amp; tax notes
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Every donor receives an official receipt by email. As a registered
                non-profit, eligible gifts may qualify for tax relief — keep your
                receipt for your records and consult your tax adviser.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge tone="grey">Be a lifeline today</Badge>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                Somewhere, a warrior is counting on you
              </h2>
              <p className="mt-4 text-white/80">
                Your gift — large or small, once or monthly — turns hope into
                healthcare. Join thousands of Nigerians standing with the sickle
                cell community.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={site.donateUrl} external size="lg" variant="white" icon>
                  Donate with Paystack
                </Button>
                <Button
                  href="/volunteer"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Or give your time
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
