import Link from "next/link";
import { img, type ImageRef } from "@/lib/images";
import type { Metadata } from "next";
import { stories } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { Icon } from "@/components/icons";
import { SmartForm } from "@/components/form";
import {
  Button,
  Badge,
  SectionHeading,
  Section,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Stories of Hope | Support Sickle Cell Nigeria",
  description:
    "Real stories from sickle cell warriors, families, doctors and volunteers across Nigeria — courage, comebacks and the community rewriting what it means to live with sickle cell.",
};

const storyImages: Record<string, ImageRef> = {
  "amaras-comeback": img.portrait5,
  "a-fathers-promise": img.portrait4,
  "the-volunteer-doctor": img.doctorPatient,
  "from-patient-to-advocate": img.portrait3,
  "the-blood-that-saved-me": img.portrait2,
  "raising-a-warrior": img.motherChild,
};

const storyImage = (slug: string): ImageRef =>
  storyImages[slug] ?? img.portrait1;

const categoryChips = ["Survivor", "Family", "Doctor", "Volunteer"];

const videos = [
  {
    title: "Living as a Warrior: Amara's Day",
    duration: "6:12",
    category: "Survivor",
    blurb: "A morning-to-night look at managing crisis, medication and ambition.",
  },
  {
    title: "Why We Test Before We Marry",
    duration: "4:48",
    category: "Family",
    blurb: "Couples share why knowing their genotype changed everything.",
  },
  {
    title: "Inside a Rural Outreach",
    duration: "8:30",
    category: "Doctor",
    blurb: "Follow our medical team into communities far from any clinic.",
  },
  {
    title: "One Pint, One Life",
    duration: "3:55",
    category: "Volunteer",
    blurb: "Blood donors and the warriors whose lives they saved, side by side.",
  },
];

export default function StoriesPage() {
  const featured = stories[0];
  const rest = stories.slice(1);

  return (
    <>
      <PageHero
        image={img.celebration.src}
        imageAlt={img.celebration.alt}
        eyebrow="Stories of Hope"
        title="Every warrior has a story worth telling"
        intro="Behind every statistic is a person — a child who fought through their first crisis, a parent who turned grief into action, a doctor who answered a quiet call. These are the voices of the SSCN community, in their own words."
        breadcrumb="Home / Stories of Hope"
      />

      {/* Featured story */}
      <Section tone="white">
        <SectionHeading
          align="left"
          eyebrow="Featured Story"
          title="The story we can't stop sharing"
          intro="One life that captures why this work matters — and why hope is never naïve."
        />
        <Reveal className="mt-10">
          <article className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-2">
            <div className="relative min-h-[18rem]">
              <Photo
                src={storyImage(featured.slug).src}
                alt={storyImage(featured.slug).alt}
                className="h-full min-h-[18rem] w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                rounded="rounded-none"
              />
              <span className="absolute left-6 top-6 z-10">
                <Badge tone="red">{featured.category}</Badge>
              </span>
              <Icon.quote className="absolute bottom-6 right-6 z-10 h-12 w-12 text-white/60" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {featured.role}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-navy sm:text-3xl text-balance">
                {featured.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Like so many warriors, her journey is not defined by the pain of
                a crisis, but by the resolve that follows it. Hers is a story of
                turning a diagnosis into a calling — proof that with the right
                support, a sickle cell warrior can become exactly who they were
                always meant to be.
              </p>
              <div className="mt-7">
                <Link
                  href={`/stories#${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3"
                >
                  Read story <Icon.arrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* Category chips + grid */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Voices of the Community"
          title="Browse stories by who they belong to"
          intro="Warriors, families, doctors and volunteers — each perspective adds something the others can't."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {categoryChips.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-primary/40 hover:text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {c}
            </span>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {rest.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <article className="group break-inside-avoid overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <div className="relative h-44">
                  <Photo
                    src={storyImage(s.slug).src}
                    alt={storyImage(s.slug).alt}
                    className="h-44 w-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    rounded="rounded-none"
                  />
                  <span className="absolute left-4 top-4 z-10">
                    <Badge tone="red">{s.category}</Badge>
                  </span>
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-lg font-bold text-navy group-hover:text-primary">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    {s.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.excerpt}
                  </p>
                  <Link
                    href={`/stories#${s.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5"
                  >
                    Read story <Icon.arrow className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Videos */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Watch & Listen"
          title="Stories told in motion"
          intro="Sometimes a face, a voice and a place say what words on a page cannot. Watch warriors and the people around them share their journeys."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 100}>
              <article className="group overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {/* play triangle */}
                    <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-primary" />
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white">
                    {v.duration}
                  </span>
                  <span className="absolute left-4 top-4">
                    <Badge tone="red">{v.category}</Badge>
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Submit your story */}
      <Section tone="grey">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Submit Your Story"
              title="Your story could be someone's reason to keep going"
              intro="Whether you are a warrior, a parent, a doctor or a volunteer, your experience carries hope for someone walking the road you've already travelled."
            />
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon.heart className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-navy">Share with dignity</h3>
                  <p className="mt-1 text-sm text-muted">
                    We never publish anything without your explicit consent, and
                    we tell every story with care and respect.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon.users className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-navy">Inspire a community</h3>
                  <p className="mt-1 text-sm text-muted">
                    Your words may reach a family newly facing a diagnosis across
                    any of Nigeria&apos;s 36 states and the FCT.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon.spark className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-navy">Change the narrative</h3>
                  <p className="mt-1 text-sm text-muted">
                    Every story shared chips away at stigma and replaces fear
                    with understanding.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SmartForm
              fields={[
                {
                  name: "fullName",
                  label: "Full name",
                  required: true,
                  placeholder: "Your name",
                },
                {
                  name: "email",
                  label: "Email address",
                  type: "email",
                  required: true,
                  placeholder: "you@example.com",
                },
                {
                  name: "connection",
                  label: "Your connection to sickle cell",
                  type: "select",
                  required: true,
                  options: ["Warrior", "Parent/Family", "Doctor", "Volunteer", "Other"],
                  full: true,
                },
                {
                  name: "story",
                  label: "Your story",
                  type: "textarea",
                  required: true,
                  placeholder:
                    "Tell us your journey — the challenges, the turning points, and the hope you carry.",
                },
              ]}
              submitLabel="Share my story"
              successTitle="Thank you for trusting us"
              successText="We've received your story. Our team will read it with care and reach out before anything is ever published."
              note={
                <span>
                  By submitting, you consent to SSCN reviewing your story. We
                  will always seek your written approval before publishing, and
                  you may request edits or withdrawal at any time.
                </span>
              }
            />
          </Reveal>
        </div>
      </Section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-30" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              light
              eyebrow="Be Part of the Story"
              title="Hope grows when we share it"
              intro="Read a story, tell your own, or help us reach the warriors who haven't heard one yet."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/donate" size="lg" icon>
                Support a Warrior
              </Button>
              <Button href="/volunteer" size="lg" variant="white">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
