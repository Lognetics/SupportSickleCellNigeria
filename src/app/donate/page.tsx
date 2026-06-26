import type { Metadata } from "next";
import Link from "next/link";
import { donationTiers } from "@/lib/site";
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

const presetAmounts = ["₦5,000", "₦15,000", "₦50,000", "₦150,000", "Custom"];

const GOAL = 100_000_000;
const RAISED = 62_000_000;
const percent = Math.round((RAISED / GOAL) * 100);

const naira = (n: number) => "₦" + n.toLocaleString("en-NG");

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

const calculatorRows = [
  { amount: "₦10,000", impact: "Folic acid and pain medication for two warriors for a month." },
  { amount: "₦30,000", impact: "Free genotype testing for 10 young people at an outreach." },
  { amount: "₦100,000", impact: "A unit of blood plus crisis-care supplies for an admission." },
  { amount: "₦500,000", impact: "A full free testing drive reaching 200+ people in one community." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your gift rewrites a warrior's story"
        intro="Every naira you give becomes a genotype test, a pint of blood, a dose of medication, a crisis survived. Give today and stand with the sickle cell community across all 36 states and the FCT."
        breadcrumb="Home / Donate"
      />

      {/* Donation widget + campaign goal */}
      <Section tone="grey">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-navy/5 sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-navy">Make a donation</h2>
                <Badge tone="red">Secure</Badge>
              </div>

              {/* One-time / Monthly toggle (visual only) */}
              <div className="mt-5 grid grid-cols-2 gap-1 rounded-full bg-grey p-1">
                <span className="rounded-full bg-primary px-4 py-2 text-center text-sm font-bold text-white shadow-sm">
                  One-Time
                </span>
                <span className="rounded-full px-4 py-2 text-center text-sm font-semibold text-muted">
                  Monthly
                </span>
              </div>

              {/* Amount pills */}
              <p className="mt-6 text-sm font-semibold text-navy">Choose an amount</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {presetAmounts.map((amt, i) => (
                  <span
                    key={amt}
                    className={`rounded-2xl border px-4 py-3 text-center text-sm font-bold transition-colors ${
                      i === 2
                        ? "border-primary bg-primary-soft text-primary"
                        : "border-line bg-white text-navy"
                    }`}
                  >
                    {amt}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Button href="/contact" size="lg" className="w-full" icon>
                  Donate Now
                </Button>
              </div>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
                <Icon.shield className="h-4 w-4 text-primary" />
                Front-end mockup — no live payment is processed.
              </p>
            </div>
          </Reveal>

          {/* Campaign progress */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8">
              <Eyebrow>Live Campaign</Eyebrow>
              <h3 className="mt-4 text-2xl font-bold text-navy text-balance">
                Hope Fund 2026: Care for 10,000 warriors
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Help us close the gap on this year&apos;s national care fund —
                covering testing, medication, blood and crisis support nationwide.
              </p>

              <div className="mt-6">
                <div className="flex items-end justify-between">
                  <span className="font-heading text-3xl font-extrabold text-primary">
                    {naira(RAISED)}
                  </span>
                  <span className="text-sm text-muted">
                    raised of {naira(GOAL)}
                  </span>
                </div>
                <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-grey">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs font-semibold text-muted">
                  <span>{percent}% funded</span>
                  <span>{naira(GOAL - RAISED)} to go</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-grey/60 p-4">
                  <p className="font-heading text-xl font-extrabold text-navy">6,200</p>
                  <p className="text-xs text-muted">Donors</p>
                </div>
                <div className="rounded-2xl bg-grey/60 p-4">
                  <p className="font-heading text-xl font-extrabold text-navy">36</p>
                  <p className="text-xs text-muted">States</p>
                </div>
                <div className="rounded-2xl bg-grey/60 p-4">
                  <p className="font-heading text-xl font-extrabold text-navy">42</p>
                  <p className="text-xs text-muted">Days left</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Your impact (donationTiers) */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Your Impact"
          title="See exactly what your gift does"
          intro="We believe in radical clarity. Here is the real-world difference your donation makes the moment it lands."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {donationTiers.map((tier, i) => (
            <Reveal key={tier.amount} delay={(i % 4) * 80}>
              <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-navy/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon.droplet className="h-6 w-6" />
                </span>
                <p className="mt-5 font-heading text-2xl font-extrabold text-primary">
                  {tier.amount}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {tier.impact}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-primary"
                >
                  Give this <Icon.arrow className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
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

      {/* Impact calculator (static) */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Impact Calculator"
          title="Picture your generosity at work"
          intro="A few examples of how different gift sizes translate into real care for warriors and families."
        />
        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-line bg-white">
            <div className="grid grid-cols-3 gap-4 bg-navy px-6 py-4 text-xs font-bold uppercase tracking-wide text-white/70">
              <span>You give</span>
              <span className="col-span-2">Your impact</span>
            </div>
            {calculatorRows.map((row, i) => (
              <div
                key={row.amount}
                className={`grid grid-cols-3 items-center gap-4 px-6 py-5 ${
                  i % 2 === 1 ? "bg-grey/40" : "bg-white"
                }`}
              >
                <span className="font-heading text-lg font-extrabold text-primary">
                  {row.amount}
                </span>
                <span className="col-span-2 text-sm leading-relaxed text-ink">
                  {row.impact}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mt-5 text-center text-xs text-muted">
          Illustrative figures based on average program costs. Actual allocation
          is directed where the need is greatest.
        </p>
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
                <Button href="/contact" size="lg" variant="white" icon>
                  Donate now
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
