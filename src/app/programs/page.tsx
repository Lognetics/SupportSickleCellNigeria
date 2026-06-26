import type { Metadata } from "next";
import { img, programImage } from "@/lib/images";
import { Photo } from "@/components/photo";
import Link from "next/link";
import { programs } from "@/lib/site";
import { Icon, type IconName } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import {
  Button,
  Badge,
  Section,
  SectionHeading,
  PageHero,
  CheckList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Programs | Support Sickle Cell Nigeria",
  description:
    "Explore SSCN's nationwide programs — healthcare, medication, education, awareness, counselling, emergency relief, scholarships and research — for warriors and families across all 36 states and the FCT.",
};

const categories = [
  "All Programs",
  ...Array.from(new Set(programs.map((p) => p.tag))),
];

const processSteps = [
  {
    icon: "search" as IconName,
    title: "Discover & Register",
    text: "A warrior, parent or referrer reaches out and completes our beneficiary registration so we understand the need.",
  },
  {
    icon: "users" as IconName,
    title: "Assess & Match",
    text: "Our care team reviews each case and matches the warrior to the right program — healthcare, relief, education or counselling.",
  },
  {
    icon: "heart" as IconName,
    title: "Deliver Support",
    text: "We work with partner hospitals, clinicians and volunteers to deliver care, medication, funding or training on the ground.",
  },
  {
    icon: "spark" as IconName,
    title: "Follow Up & Sustain",
    text: "We stay with families — tracking progress, adjusting support and connecting them to community for the long haul.",
  },
];

export default function ProgramsPage() {
  const featured =
    programs.find((p) => p.slug === "emergency-relief") ?? programs[0];

  return (
    <>
      <PageHero
        image={img.counselling.src}
        imageAlt={img.counselling.alt}
        breadcrumb="Home / Programs"
        eyebrow="Our Programs"
        title="Programs that meet warriors where they are"
        intro="From the hospital ward to the classroom, every SSCN program is a practical, fundable answer to a real need in the sickle cell journey. Apply for support, volunteer your time, or fund the work."
      />

      {/* ---------------- Program grid ---------------- */}
      <Section tone="white">
        <SectionHeading
          align="left"
          eyebrow="Explore the work"
          title="Every program, in one place"
          intro="Browse our full range of programs serving warriors and families across all 36 states and the FCT."
        />

        {/* Category chips (visual filter) */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                i === 0
                  ? "bg-primary text-white"
                  : "border border-line bg-white text-navy hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const pImg = programImage(p.slug);
            return (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                  <div className="relative h-40">
                    <Photo
                      src={pImg.src}
                      alt={pImg.alt}
                      className="h-40 w-full"
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

                    {/* Footer: eligibility + objective count */}
                    <div className="mt-5 space-y-2 border-t border-line pt-4 text-xs text-muted">
                      <p className="flex items-start gap-2">
                        <Icon.check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                        <span>
                          <span className="font-semibold text-navy">
                            Who&apos;s eligible:{" "}
                          </span>
                          {p.eligibility}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon.spark className="h-4 w-4 flex-none text-primary" />
                        <span className="font-semibold text-navy">
                          {p.objectives.length} key objectives
                        </span>
                      </p>
                    </div>

                    {/* Action links */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
                      <Link
                        href="/get-support"
                        className="inline-flex items-center gap-1 text-primary hover:gap-1.5"
                      >
                        Apply <Icon.arrow className="h-3.5 w-3.5" />
                      </Link>
                      <span className="text-line">•</span>
                      <Link
                        href="/volunteer"
                        className="text-navy hover:underline"
                      >
                        Volunteer
                      </Link>
                      <span className="text-line">•</span>
                      <Link
                        href="/donate"
                        className="text-navy hover:underline"
                      >
                        Donate
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------- How programs work ---------------- */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="How It Works"
          title="How our programs work"
          intro="A clear, compassionate path from first contact to lasting support — no warrior left to navigate it alone."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => {
            const StepIcon = Icon[s.icon];
            return (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative h-full rounded-3xl border border-line bg-white p-7">
                  <span className="absolute right-6 top-5 font-heading text-5xl font-extrabold text-primary-soft">
                    {i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <StepIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------- Featured deep-dive ---------------- */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-2xl">
              <div className="absolute inset-0 bg-dotgrid opacity-25" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                  Program Spotlight
                </span>
                <Icon.heart className="mt-8 h-16 w-16 animate-[float_4s_ease-in-out_infinite]" />
                <p className="mt-6 text-2xl font-bold leading-snug">
                  When every minute matters, no warrior should face a crisis
                  alone.
                </p>
                <p className="mt-4 text-white/80">
                  Our {featured.title} program responds around the clock —
                  mobilising blood, medication and admission cover so a
                  life-threatening crisis never becomes a tragedy.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Badge tone="red">{featured.tag}</Badge>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{featured.summary}</p>

            <div className="mt-6 rounded-2xl border border-line bg-grey/40 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Who&apos;s eligible
              </h3>
              <p className="mt-1.5 text-sm text-muted">{featured.eligibility}</p>
            </div>

            <h3 className="mt-7 text-sm font-bold uppercase tracking-wide text-navy">
              What this program sets out to do
            </h3>
            <div className="mt-4">
              <CheckList items={featured.objectives} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-support" icon>
                Apply for support
              </Button>
              <Button href="/donate" variant="outline">
                Fund this program
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- CTA band ---------------- */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-30" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                light
                eyebrow="Be part of it"
                title="Every program runs on people like you"
                intro="Whether you need support, want to give your time, or can fund the work — there is a place for you in this movement."
              />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/get-support" size="lg" variant="white" icon>
                  Get Support
                </Button>
                <Button
                  href="/volunteer"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Volunteer
                </Button>
                <Button href="/donate" size="lg">
                  Donate
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
