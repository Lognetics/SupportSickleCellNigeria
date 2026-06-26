import type { Metadata } from "next";
import { img } from "@/lib/images";
import Link from "next/link";
import { news } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icons";
import {
  Button,
  Eyebrow,
  Badge,
  SectionHeading,
  Section,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "News & Blog | Support Sickle Cell Nigeria",
  description:
    "Medical breakthroughs, organisation updates, events, research and stories of hope from the SSCN newsroom — keeping Nigeria informed on the fight against sickle cell.",
};

/* Category → icon mapping for thumbnails. */
const categoryIcon: Record<string, IconName> = {
  "Medical News": "stethoscope",
  "Organization News": "megaphone",
  Events: "calendar",
  Research: "flask",
  "Success Stories": "star",
  "Government Policies": "scale",
  "Health Tips": "heart",
};

const categories = [
  "All",
  "Medical News",
  "Organization News",
  "Events",
  "Research",
  "Success Stories",
  "Government Policies",
  "Health Tips",
];

const popularTags = [
  "Genotype testing",
  "Hydroxyurea",
  "Blood donation",
  "Pre-marital counselling",
  "Awareness",
  "Crisis care",
  "Warriors",
  "Research grants",
  "Policy",
  "Nutrition",
  "Youth",
  "Stigma",
];

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageHero
        image={img.motherChild.src}
        imageAlt={img.motherChild.alt}
        eyebrow="News & Blog"
        title="From the SSCN newsroom"
        intro="Medical breakthroughs, organisation milestones, event recaps, research and stories of hope — everything moving the fight against sickle cell forward in Nigeria."
        breadcrumb="Home / News"
      />

      {/* Featured lead article */}
      <Section tone="white">
        <Reveal>
          <article className="group grid overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 lg:grid-cols-2">
            <div className="relative flex min-h-[16rem] items-center justify-center bg-gradient-to-br from-navy to-navy-light">
              <div className="absolute inset-0 bg-dotgrid opacity-30" />
              {(() => {
                const FeatureIcon = Icon[categoryIcon[featured.category] ?? "book"];
                return <FeatureIcon className="relative h-20 w-20 text-white/90" />;
              })()}
              <span className="absolute left-5 top-5">
                <Badge tone="red">Featured</Badge>
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-2 text-xs text-muted">
                <Badge tone="navy">{featured.category}</Badge>
                <span className="inline-flex items-center gap-1.5">
                  <Icon.calendar className="h-4 w-4 text-primary" /> {featured.date}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-navy sm:text-3xl text-balance group-hover:text-primary">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{featured.excerpt}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Read the full story for the dates, locations and the impact this milestone
                will have on warriors and families across all six geopolitical zones.
              </p>
              <div className="mt-6">
                <Button href="/news" icon>
                  Read the full story
                </Button>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* Category chip row + blog grid */}
      <Section tone="grey">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Latest Articles"
            title="Fresh from the movement"
            intro="Filter by topic and explore the stories shaping sickle cell care in Nigeria."
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((n, i) => {
            const ThumbIcon = Icon[categoryIcon[n.category] ?? "book"];
            return (
              <Reveal key={n.slug} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5">
                  <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-primary-soft to-grey">
                    <ThumbIcon className="h-12 w-12 text-primary/50" />
                    <span className="absolute left-4 top-4">
                      <Badge tone="red">{n.category}</Badge>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <Icon.calendar className="h-4 w-4 text-primary" /> {n.date}
                    </span>
                    <h3 className="mt-2 font-bold leading-snug text-navy group-hover:text-primary">
                      {n.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{n.excerpt}</p>
                    <Link
                      href="/news"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5"
                    >
                      Read more <Icon.arrow className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Popular tags + newsletter nudge */}
      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-line bg-grey/40 p-8">
              <Eyebrow>Explore by Topic</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold text-navy">Popular tags</h2>
              <p className="mt-2 text-sm text-muted">
                Jump into the conversations our community cares about most.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {popularTags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-navy transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Icon.spark className="h-3.5 w-3.5 text-primary" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
              <div className="absolute inset-0 bg-dotgrid opacity-20" />
              <div className="relative flex flex-1 flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Icon.mail className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">Never miss an update</h3>
                <p className="mt-2 flex-1 text-sm text-white/80">
                  Subscribe to the SSCN newsletter for medical news, event invites and
                  stories of hope — straight to your inbox.
                </p>
                <Button href="/contact" variant="white" className="mt-6 w-full">
                  Subscribe now
                </Button>
                <p className="mt-3 text-center text-xs text-white/60">
                  Find the sign-up form in our site footer too.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-30" />
        <div className="absolute -left-20 -bottom-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Be part of the story
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                Have news worth sharing?
              </h2>
              <p className="mt-4 text-white/80">
                Hosting an event, publishing research or have a story of hope? We&apos;d
                love to feature it. Reach out and help us keep Nigeria informed.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" size="lg">
                  Share your story
                </Button>
                <Button
                  href="/events"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  See upcoming events
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
