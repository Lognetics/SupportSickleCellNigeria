import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icons";
import {
  Button,
  Badge,
  SectionHeading,
  Section,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery | Support Sickle Cell Nigeria",
  description:
    "A visual journey through SSCN's work — medical outreaches, blood drives, community events, awards and awareness campaigns reaching warriors across all 36 states and the FCT.",
};

type Tile = {
  caption: string;
  category: string;
  icon: IconName;
  gradient: string;
  /* aspect tailwind class for varied masonry heights */
  span: string;
};

const tiles: Tile[] = [
  {
    caption: "Free testing camp, Kano",
    category: "Medical Outreach",
    icon: "stethoscope",
    gradient: "from-navy to-navy-light",
    span: "aspect-[4/5]",
  },
  {
    caption: "World Sickle Cell Day walk",
    category: "Events",
    icon: "calendar",
    gradient: "from-primary to-primary-dark",
    span: "aspect-square",
  },
  {
    caption: "Corporate blood drive, Lagos",
    category: "Blood Drives",
    icon: "droplet",
    gradient: "from-primary-dark to-primary",
    span: "aspect-[4/3]",
  },
  {
    caption: "Genotype awareness rally",
    category: "Awareness Campaigns",
    icon: "megaphone",
    gradient: "from-navy-light to-navy",
    span: "aspect-square",
  },
  {
    caption: "Humanitarian Impact Award 2025",
    category: "Awards",
    icon: "star",
    gradient: "from-navy to-navy-light",
    span: "aspect-[4/5]",
  },
  {
    caption: "Warriors' family picnic",
    category: "Community Engagement",
    icon: "users",
    gradient: "from-primary to-primary-dark",
    span: "aspect-[4/3]",
  },
  {
    caption: "Rural clinic outreach, Benue",
    category: "Medical Outreach",
    icon: "heart",
    gradient: "from-navy-light to-navy",
    span: "aspect-square",
  },
  {
    caption: "Donor recognition night",
    category: "Blood Drives",
    icon: "gift",
    gradient: "from-primary-dark to-primary",
    span: "aspect-[4/5]",
  },
  {
    caption: "School awareness session, Abuja",
    category: "Awareness Campaigns",
    icon: "graduation",
    gradient: "from-navy to-navy-light",
    span: "aspect-[4/3]",
  },
  {
    caption: "Annual warriors' summit",
    category: "Events",
    icon: "globe",
    gradient: "from-primary to-primary-dark",
    span: "aspect-square",
  },
  {
    caption: "Volunteer of the Year honours",
    category: "Awards",
    icon: "shield",
    gradient: "from-navy-light to-navy",
    span: "aspect-square",
  },
  {
    caption: "Community health fair, Enugu",
    category: "Community Engagement",
    icon: "chat",
    gradient: "from-primary-dark to-primary",
    span: "aspect-[4/5]",
  },
];

const filterChips = [
  "All",
  "Medical Outreach",
  "Blood Drives",
  "Events",
  "Awards",
  "Community Engagement",
  "Awareness Campaigns",
];

const videos = [
  {
    title: "A Year of Outreach in 90 Seconds",
    duration: "1:30",
    category: "Medical Outreach",
  },
  {
    title: "Inside Our Biggest Blood Drive",
    duration: "5:20",
    category: "Blood Drives",
  },
  {
    title: "World Sickle Cell Day Highlights",
    duration: "3:14",
    category: "Events",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The work, the warriors, the moments that matter"
        intro="From testing camps in the north to blood drives in Lagos, from award stages to community picnics — this is a visual record of a movement that refuses to let anyone face sickle cell alone."
        breadcrumb="Home / Gallery"
      />

      {/* Filter chips (decorative) */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Moments of Impact"
          title="Explore the SSCN gallery"
          intro="Every frame is a reminder that change is built one outreach, one pint of blood and one warrior at a time."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {filterChips.map((c, i) => (
            <span
              key={c}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                i === 0
                  ? "bg-primary text-white"
                  : "border border-line bg-white text-navy hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {tiles.map((t, i) => {
            const TileIcon = Icon[t.icon];
            return (
              <Reveal key={t.caption} delay={(i % 3) * 70}>
                <figure
                  className={`group relative flex break-inside-avoid items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${t.gradient} ${t.span}`}
                >
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <TileIcon className="relative h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute left-4 top-4">
                    <Badge tone="red">{t.category}</Badge>
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-10">
                    <p className="text-sm font-semibold text-white">
                      {t.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Videos */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="On Film"
          title="Watch the movement in motion"
          intro="A few short films capturing the energy of our outreaches, drives and gatherings."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90}>
              <article className="group overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-primary" />
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white">
                    {v.duration}
                  </span>
                  <span className="absolute left-4 top-4">
                    <Badge tone="red">{v.category}</Badge>
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold leading-snug text-navy">{v.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
              Be in the next frame
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
              Were you at one of our events?
            </h2>
            <p className="mt-4 text-white/80">
              Follow us on social media for the latest moments, and share your
              own photos from SSCN outreaches, drives and gatherings — your
              snapshot might tell the next story.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg" variant="white" icon>
                Submit Your Photos
              </Button>
              <Button
                href="/events"
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                See Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
