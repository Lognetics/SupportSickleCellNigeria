import Link from "next/link";
import {
  stats,
  whatWeDo,
  programs,
  events,
  testimonials,
  news,
} from "@/lib/site";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { PartnersMarquee } from "@/components/marquee";
import { Photo } from "@/components/photo";
import { img, programImage, newsImage } from "@/lib/images";
import { Icon } from "@/components/icons";
import {
  Button,
  Eyebrow,
  IconCard,
  SectionHeading,
  Section,
  Badge,
} from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutIntro />
      <WhatWeDo />
      <FeaturedPrograms />
      <UpcomingEvents />
      <BecomeAHero />
      <Testimonials />
      <LatestNews />
      <Partners />
    </>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-dotgrid opacity-30" />
      <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <div className="animate-[fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-light" />
            Nigeria&apos;s home for sickle cell hope
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl text-balance">
            Together We Can Give Every{" "}
            <span className="relative whitespace-nowrap text-primary-light">
              Sickle Cell
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="#c62828"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Warrior Hope
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Supporting lives through awareness, healthcare, advocacy, education,
            and community across Nigeria — for every warrior, family and future.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/donate" size="lg" icon>
              Donate Now
            </Button>
            <Button href="/get-support" size="lg" variant="white">
              Get Support
            </Button>
            <Button
              href="/volunteer"
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Become a Volunteer
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5 text-white/80">
            <div className="flex -space-x-3">
              {["#c62828", "#e04848", "#13294b", "#1e3a66"].map((c, i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy text-white"
                  style={{ background: c }}
                >
                  <Icon.heart className="h-4 w-4" />
                </span>
              ))}
            </div>
            <p className="text-sm">
              <span className="font-bold text-white">20,000+ warriors</span> and
              families supported nationwide.
            </p>
          </div>
        </div>

        {/* Visual card cluster */}
        <div className="relative animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_both]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <Photo
              src={img.heroCommunity.src}
              alt={img.heroCommunity.alt}
              priority
              className="h-full w-full shadow-2xl ring-1 ring-white/10"
              sizes="(max-width: 1024px) 90vw, 40vw"
              overlay="strong"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
              <Icon.quote className="h-9 w-9 text-white/70" />
              <p className="mt-2 text-2xl font-bold leading-snug">
                &ldquo;A warrior, not a victim.&rdquo;
              </p>
              <p className="mt-2 text-sm text-white/85">
                Every act of support — a test, a pint of blood, a donation —
                rewrites a life.
              </p>
            </div>
          </div>

          {/* Floating stat chips */}
          <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl shadow-navy/20 sm:-left-8 animate-[float_5s_ease-in-out_infinite]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon.droplet className="h-6 w-6" />
            </span>
            <div>
              <p className="font-heading text-lg font-extrabold text-navy">500+</p>
              <p className="text-xs text-muted">Blood donors</p>
            </div>
          </div>
          <div className="absolute -right-3 bottom-8 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl shadow-navy/20 sm:-right-6 animate-[float_6s_ease-in-out_infinite]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy">
              <Icon.globe className="h-6 w-6" />
            </span>
            <div>
              <p className="font-heading text-lg font-extrabold text-navy">36 States</p>
              <p className="text-xs text-muted">Outreach reach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V20c240 30 480 30 720 10S1200-10 1440 20v40z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

/* ---------------- Impact Stats ---------------- */

function ImpactStats() {
  return (
    <section className="bg-white pb-4">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 70}
              className="bg-white p-6 text-center"
            >
              <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About intro ---------------- */

function AboutIntro() {
  const values = [
    { icon: "heart" as const, t: "Compassion" },
    { icon: "shield" as const, t: "Integrity" },
    { icon: "users" as const, t: "Community" },
    { icon: "spark" as const, t: "Hope" },
  ];
  return (
    <Section tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Photo
                src={img.doctorPatient.src}
                alt={img.doctorPatient.alt}
                className="aspect-[3/4] w-full"
                sizes="(max-width: 1024px) 45vw, 24vw"
              />
              <Photo
                src={img.motherChild.src}
                alt={img.motherChild.alt}
                className="mt-8 aspect-[3/4] w-full"
                sizes="(max-width: 1024px) 45vw, 24vw"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-navy/10 ring-1 ring-line">
              <span className="font-heading text-2xl font-extrabold text-primary">
                10+
              </span>
              <span className="text-sm font-medium leading-tight text-muted">
                years serving
                <br />
                Nigerian warriors
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>About SSCN</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
            A national movement for awareness, care and dignity
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Support Sickle Cell Nigeria (SSCN) is a non-profit committed to
            creating awareness, supporting individuals living with sickle cell
            disorder, advocating for better healthcare, funding research and
            empowering families across all 36 states and the FCT.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-line bg-grey/40 p-5">
              <h3 className="font-bold text-navy">Our Mission</h3>
              <p className="mt-1 text-sm text-muted">
                To improve the quality of life of every person affected by sickle
                cell through awareness, healthcare, advocacy and community.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-grey/40 p-5">
              <h3 className="font-bold text-navy">Our Vision</h3>
              <p className="mt-1 text-sm text-muted">
                A Nigeria where no one suffers or is stigmatised because of sickle
                cell — and where new cases are prevented through knowledge.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {values.map((v) => {
              const ValueIcon = Icon[v.icon];
              return (
                <span
                  key={v.t}
                  className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-sm font-semibold text-primary"
                >
                  <ValueIcon className="h-4 w-4" /> {v.t}
                </span>
              );
            })}
          </div>

          <div className="mt-8">
            <Button href="/about" icon>
              Read Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- What we do ---------------- */

function WhatWeDo() {
  return (
    <Section tone="grey">
      <SectionHeading
        eyebrow="What We Do"
        title="Ten ways we stand with every warrior"
        intro="From the hospital bed to the halls of policy, our work touches every part of the sickle cell journey."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {whatWeDo.map((item, i) => (
          <Reveal key={item.title} delay={(i % 5) * 60}>
            <IconCard icon={item.icon as never} title={item.title}>
              {item.text}
            </IconCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Featured programs ---------------- */

function FeaturedPrograms() {
  const featured = programs.slice(0, 3);
  return (
    <Section tone="white">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Featured Programs"
          title="Programs changing lives today"
          intro="Real, fundable programs you can apply to, volunteer with, or support."
        />
        <Button href="/programs" variant="outline">
          View all programs
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
              <div className="relative h-44">
                <Photo
                  src={programImage(p.slug).src}
                  alt={programImage(p.slug).alt}
                  className="h-44 w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  rounded="rounded-none"
                />
                <span className="absolute left-4 top-4 z-10">
                  <Badge tone="red">{p.tag}</Badge>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>
                <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
                  <Link href="/programs" className="text-primary hover:underline">
                    Read more
                  </Link>
                  <span className="text-line">•</span>
                  <Link href="/get-support" className="text-navy hover:underline">
                    Apply
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Upcoming events ---------------- */

function UpcomingEvents() {
  const upcoming = events.filter((e) => !e.past).slice(0, 4);
  return (
    <Section tone="grey">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Upcoming Events"
          title="Show up. Make a difference."
          intro="Walks, outreaches, free testing and donation drives — there's a place for you."
        />
        <Button href="/events" variant="outline">
          Full calendar
        </Button>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {upcoming.map((e, i) => (
          <Reveal key={e.title} delay={(i % 2) * 100}>
            <article className="group flex gap-5 rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-navy/5">
              <div className="flex h-16 w-16 flex-none flex-col items-center justify-center rounded-2xl bg-primary text-white">
                <Icon.calendar className="h-6 w-6" />
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
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Become a hero (CTA) ---------------- */

function BecomeAHero() {
  const actions = [
    {
      icon: "users" as const,
      title: "Volunteer",
      text: "Give your time and skills to warriors near you.",
      href: "/volunteer",
      cta: "Join the team",
    },
    {
      icon: "droplet" as const,
      title: "Donate",
      text: "Fund treatment, testing and emergency care.",
      href: "/donate",
      cta: "Give today",
    },
    {
      icon: "scale" as const,
      title: "Partner",
      text: "Bring your organisation's weight to the cause.",
      href: "/partners",
      cta: "Partner with us",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-dotgrid opacity-20" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
              Become a hero today
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
              Hope needs heroes. Will you be one?
            </h2>
            <p className="mt-4 text-white/80">
              It takes a community to change the story of sickle cell in Nigeria.
              Choose how you&apos;ll make a difference.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {actions.map((a, i) => {
            const ActionIcon = Icon[a.icon];
            return (
            <Reveal key={a.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-3xl bg-white/10 p-7 backdrop-blur-sm ring-1 ring-white/15 transition-colors hover:bg-white/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary">
                  <ActionIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-white/80">{a.text}</p>
                <Link
                  href={a.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3"
                >
                  {a.cta} <Icon.arrow className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Voices of Hope"
        title="What our community says"
        intro="Warriors, parents, doctors, partners and volunteers — in their own words."
      />
      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 80}>
            <figure className="break-inside-avoid rounded-3xl border border-line bg-grey/40 p-6">
              <Icon.quote className="h-8 w-8 text-primary/30" />
              <blockquote className="mt-3 text-sm leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Latest news ---------------- */

function LatestNews() {
  return (
    <Section tone="grey">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow="Latest News"
          title="From the SSCN newsroom"
          intro="Updates, medical news and milestones from across the movement."
        />
        <Button href="/news" variant="outline">
          Read the blog
        </Button>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {news.map((n, i) => (
          <Reveal key={n.slug} delay={(i % 4) * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5">
              <div className="relative h-36">
                <Photo
                  src={newsImage(n.slug).src}
                  alt={newsImage(n.slug).alt}
                  className="h-36 w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  rounded="rounded-none"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Badge tone="red">{n.category}</Badge>
                  <span>{n.date}</span>
                </div>
                <h3 className="mt-3 font-bold leading-snug text-navy group-hover:text-primary">
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
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Partners ---------------- */

function Partners() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Our Partners"
        title="Trusted by those who care"
        intro="Hospitals, NGOs, government agencies, corporates and international partners working with us."
      />
      <div className="mt-12">
        <PartnersMarquee />
      </div>
      <div className="mt-10 text-center">
        <Button href="/partners" variant="secondary" icon>
          Become a partner
        </Button>
      </div>
    </Section>
  );
}
