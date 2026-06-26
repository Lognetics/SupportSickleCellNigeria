import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/lib/site";
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
  title: "Events & Calendar | Support Sickle Cell Nigeria",
  description:
    "Walks, free testing, medical outreaches, fundraising dinners and donation drives — explore SSCN's upcoming and past events and find your place in the movement.",
};

const upcoming = events.filter((e) => !e.past);
const past = events.filter((e) => e.past);

const categories: { name: string; icon: IconName }[] = [
  { name: "World Sickle Cell Day", icon: "globe" },
  { name: "Medical Outreach", icon: "stethoscope" },
  { name: "Fundraising Dinner", icon: "gift" },
  { name: "Walkathons", icon: "heart" },
  { name: "Conferences", icon: "users" },
];

const galleryTiles: { icon: IconName; label: string; from: string; to: string }[] = [
  { icon: "heart", label: "Walk for Sickle Cell", from: "from-primary", to: "to-primary-dark" },
  { icon: "droplet", label: "Blood Drive Lagos", from: "from-navy", to: "to-navy-light" },
  { icon: "stethoscope", label: "Kano Outreach", from: "from-primary-dark", to: "to-navy" },
  { icon: "globe", label: "World SCD Day", from: "from-navy-light", to: "to-primary" },
  { icon: "users", label: "Warrior Conference", from: "from-primary", to: "to-navy" },
  { icon: "graduation", label: "School Tour", from: "from-navy", to: "to-primary-dark" },
  { icon: "gift", label: "Fundraising Dinner", from: "from-primary-dark", to: "to-primary" },
  { icon: "spark", label: "Youth Camp", from: "from-navy-light", to: "to-navy" },
];

export default function EventsPage() {
  const [featured, ...restUpcoming] = upcoming;

  return (
    <>
      <PageHero
        eyebrow="Events & Calendar"
        title="Show up. Stand together. Change the story."
        intro="From 5km walks to free testing drives and fundraising dinners, every SSCN event is a chance to support warriors and spread hope across Nigeria."
        breadcrumb="Home / Events"
      />

      {/* ---------------- Featured next event ---------------- */}
      {featured && (
        <Section tone="white">
          <Reveal>
            <Eyebrow>Next Up</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <article className="mt-6 grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-2">
              <div className="relative flex min-h-64 items-center justify-center bg-gradient-to-br from-primary to-primary-dark p-10">
                <div className="absolute inset-0 bg-dotgrid opacity-30" />
                <div className="relative text-center text-white">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <Icon.calendar className="h-10 w-10" />
                  </span>
                  <p className="mt-5 text-sm font-bold uppercase tracking-wider text-white/80">
                    {featured.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="red">{featured.category}</Badge>
                  <Badge tone="grey">Featured event</Badge>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl text-balance">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{featured.summary}</p>
                <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-navy">
                  <span className="inline-flex items-center gap-2">
                    <Icon.calendar className="h-4 w-4 text-primary" /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon.pin className="h-4 w-4 text-primary" /> {featured.location}
                  </span>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/contact" icon>
                    Register to attend
                  </Button>
                  <Button href="/contact" variant="outline">
                    Add to my calendar
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        </Section>
      )}

      {/* ---------------- Upcoming calendar list ---------------- */}
      <Section tone="grey">
        <SectionHeading
          align="left"
          eyebrow="Upcoming Events"
          title="The road ahead"
          intro="Browse what's coming up across the country. Reserve your place and we'll send you the details."
        />
        <div className="mt-12 space-y-5">
          {restUpcoming.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 80}>
              <article className="group flex flex-col gap-5 rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-navy/5 sm:flex-row sm:items-center sm:p-6">
                <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon.calendar className="h-7 w-7" />
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wide">
                    {e.date.split(",")[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <Badge tone="navy">{e.category}</Badge>
                  <h3 className="mt-2 text-lg font-bold text-navy">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted">{e.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-navy">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon.calendar className="h-4 w-4 text-primary" /> {e.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon.pin className="h-4 w-4 text-primary" /> {e.location}
                    </span>
                  </div>
                </div>
                <div className="flex-none">
                  <Button href="/contact" size="sm" icon>
                    Register
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Event categories ---------------- */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Event Categories"
          title="Find an event for you"
          intro="However you want to get involved, there's a way to show up for warriors."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((c, i) => {
            const C = Icon[c.icon];
            return (
              <Reveal key={c.name} delay={i * 60}>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-grey/50 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary">
                  <C className="h-5 w-5 text-primary" />
                  {c.name}
                </span>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------- Past events ---------------- */}
      <Section tone="grey">
        <SectionHeading
          align="left"
          eyebrow="Past Events"
          title="A look back at what we built together"
          intro="Milestones we reached side by side — proof of what community can do."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {past.map((e, i) => (
            <Reveal key={e.title} delay={(i % 2) * 100}>
              <article className="flex gap-5 rounded-3xl border border-line bg-white/60 p-5 opacity-90">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-navy/10 text-navy/70">
                  <Icon.check className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                    <Badge tone="grey">{e.category}</Badge>
                    <span>{e.date}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-navy/80">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted">{e.summary}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
                    <Icon.pin className="h-3.5 w-3.5" /> {e.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Event gallery ---------------- */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Event Gallery"
          title="Moments that move us"
          intro="A glimpse of the smiles, solidarity and impact from SSCN events nationwide."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryTiles.map((t, i) => {
            const C = Icon[t.icon];
            return (
              <Reveal key={t.label} delay={(i % 4) * 70}>
                <div
                  className={`group relative flex aspect-square items-end overflow-hidden rounded-3xl bg-gradient-to-br ${t.from} ${t.to} p-5`}
                >
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <C className="absolute right-4 top-4 h-9 w-9 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative text-sm font-bold text-white">
                    {t.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------- Sponsor CTA band ---------------- */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="container-x relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Icon.gift className="h-4 w-4" /> Become an event sponsor
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-balance">
                Put your brand behind a cause that saves lives
              </h2>
              <p className="mt-4 max-w-xl text-white/80">
                Sponsor a walkathon, fund a free testing drive or host a fundraising
                dinner. We&apos;ll spotlight your organisation across all 36 states and the
                FCT while delivering measurable impact for warriors.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/partners" variant="white" icon>
                  Become a sponsor
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Talk to our team
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "megaphone" as const, t: "Nationwide visibility", d: "Reach millions through our campaigns." },
                  { icon: "users" as const, t: "Engaged community", d: "Connect with warriors and families." },
                  { icon: "heart" as const, t: "Real impact", d: "Fund testing, blood and care directly." },
                  { icon: "shield" as const, t: "Trusted partner", d: "Transparent reporting on every naira." },
                ].map((b) => {
                  const C = Icon[b.icon];
                  return (
                    <div
                      key={b.t}
                      className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15"
                    >
                      <C className="h-7 w-7 text-white" />
                      <h3 className="mt-3 text-sm font-bold text-white">{b.t}</h3>
                      <p className="mt-1 text-xs text-white/70">{b.d}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
