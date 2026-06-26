import type { Metadata } from "next";
import Link from "next/link";
import { shopItems, donationTiers } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icons";
import {
  Button,
  Eyebrow,
  Badge,
  IconCard,
  SectionHeading,
  Section,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Shop for a Cause | Support Sickle Cell Nigeria",
  description:
    "Wear the message and fund the mission. Every t-shirt, wristband, book and gift card in the SSCN shop helps fund treatment, testing and emergency care for sickle cell warriors across Nigeria.",
};

/* Map shop categories to brand icons */
const categoryIcon: Record<string, IconName> = {
  Apparel: "heart",
  Accessories: "spark",
  Lifestyle: "gift",
  Books: "book",
  Donation: "globe",
};

const categories = ["All", "Apparel", "Accessories", "Lifestyle", "Books", "Donation"];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop for a Cause"
        title="Wear the message. Fund the mission."
        intro="Every purchase from the SSCN store turns awareness merchandise into real care — treatment, testing, blood and emergency support for warriors nationwide. Look good, do good."
        breadcrumb="Home / Shop"
      />

      {/* Category chip row */}
      <Section tone="white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="The Collection"
            title="Awareness merchandise that gives back"
            intro="Browse apparel, accessories, lifestyle pieces, books and donation gift cards — 100% of proceeds fund the cause."
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                i === 0
                  ? "bg-primary text-white"
                  : "border border-line bg-white text-navy hover:border-primary/30 hover:text-primary"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shopItems.map((item, i) => {
            const ProductIcon = Icon[categoryIcon[item.category] ?? "heart"];
            return (
              <Reveal key={item.name} delay={(i % 4) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                  <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-primary-soft to-grey">
                    <ProductIcon className="h-14 w-14 text-primary/50" />
                    {item.tag && (
                      <span className="absolute left-4 top-4">
                        <Badge tone="red">{item.tag}</Badge>
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {item.category}
                    </p>
                    <h3 className="mt-1.5 font-bold leading-snug text-navy group-hover:text-primary">
                      {item.name}
                    </h3>
                    <div className="mt-3 flex flex-1 items-end justify-between">
                      <p className="font-heading text-lg font-extrabold text-primary">
                        {item.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light active:scale-[0.99]"
                    >
                      <Icon.gift className="h-4 w-4" /> Add to cart
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Prices shown in Nigerian Naira (₦). This is a front-end preview store —
          the cart and checkout are illustrative.
        </p>
      </Section>

      {/* Why shop with us band */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Why Shop With Us"
          title="Every purchase funds a warrior"
          intro="This isn't ordinary merchandise. When you buy, you become part of the support system that keeps warriors healthy, in school and in care."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "heart" as const,
              title: "100% to the cause",
              text: "Proceeds go directly into healthcare support, medication, testing and emergency relief for warriors across all 36 states and the FCT.",
            },
            {
              icon: "megaphone" as const,
              title: "You spread awareness",
              text: "Every shirt, cap and wristband is a walking conversation that helps end stigma and encourages genotype testing.",
            },
            {
              icon: "shield" as const,
              title: "Ethical & transparent",
              text: "We publish annual reports so you can see exactly how the funds your purchase raises are spent.",
            },
          ].map((b) => (
            <Reveal key={b.title}>
              <IconCard icon={b.icon} title={b.title}>
                {b.text}
              </IconCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-3">
            {[
              { stat: "₦7,500", label: "buys a month of folic acid" },
              { stat: "₦25,000", label: "sponsors a child's term of care" },
              { stat: "100%", label: "of proceeds fund the mission" },
            ].map((s) => (
              <div key={s.label} className="bg-white p-6 text-center">
                <p className="font-heading text-2xl font-extrabold text-primary">
                  {s.stat}
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Donation Packages / Gift Cards highlight */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 text-white">
              <div className="absolute inset-0 bg-dotgrid opacity-30" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon.gift className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-bold">Donation Packages & Gift Cards</h3>
                <p className="mt-3 text-white/80">
                  Give a gift that changes a life. Our donation gift cards let you
                  fund a specific kind of care in someone&apos;s honour — perfect for
                  birthdays, weddings, memorials and corporate gifting.
                </p>
                <div className="mt-6 space-y-3">
                  {donationTiers.map((t) => (
                    <div
                      key={t.amount}
                      className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
                    >
                      <span className="font-heading text-lg font-extrabold text-primary-light">
                        {t.amount}
                      </span>
                      <span className="text-sm text-white/80">{t.impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Give a Gift of Hope</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              Sponsor a warrior in someone&apos;s name
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              A Sponsor-a-Child gift card is the most personal item in our store. Choose
              an amount, add a message, and we&apos;ll send a beautifully designed digital
              card to your recipient — while the funds go straight to a warrior&apos;s
              healthcare, nutrition or schooling.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              {[
                "Digital gift card delivered by email instantly",
                "Personalised message and dedication",
                "A clear note of the impact the gift makes",
                "Available for individuals and corporate gifting",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon.check className="h-3.5 w-3.5" />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/donate" icon>
                Send a gift card
              </Button>
              <Button href="/donate" variant="outline">
                Make a donation
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Checkout / order tracking note */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Ordering & Delivery"
          title="Secure checkout, nationwide delivery, full tracking"
          intro="Shopping with SSCN is simple, safe and transparent from cart to doorstep."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "spark" as const,
              title: "Add to cart",
              text: "Build your order across apparel, accessories and gift cards.",
            },
            {
              icon: "shield" as const,
              title: "Secure payment",
              text: "Pay with card or bank transfer through a trusted, encrypted gateway.",
            },
            {
              icon: "calendar" as const,
              title: "We dispatch",
              text: "Orders are packed and shipped to all 36 states and the FCT.",
            },
            {
              icon: "pin" as const,
              title: "Track your order",
              text: "Follow your delivery in real time with an order-tracking link.",
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  {(() => {
                    const StepIcon = Icon[s.icon];
                    return <StepIcon className="h-5 w-5 text-primary" />;
                  })()}
                </div>
                <h3 className="mt-4 font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 rounded-2xl border border-line bg-white p-5 text-center text-sm text-muted">
          <span className="font-semibold text-navy">Note:</span> Checkout, online
          payment and order tracking are part of our live store experience. Need help
          with an order? Reach our team via the{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </Section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                Shop with purpose
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                Turn your everyday into impact
              </h2>
              <p className="mt-4 text-white/80">
                Whether it&apos;s a shirt for the weekend walk or a gift card for a loved
                one, your support keeps a warrior in care. Thank you for shopping for the
                cause.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/donate" size="lg" variant="white">
                  Donate instead
                </Button>
                <Button
                  href="/volunteer"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Volunteer with us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
