import type { Metadata } from "next";
import { stats, founder } from "@/lib/site";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { img } from "@/lib/images";
import { Icon, type IconName } from "@/components/icons";
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
  title: "About Us | Support Sickle Cell Nigeria (SSCN)",
  description:
    "Learn the story, mission, leadership and milestones of Support Sickle Cell Nigeria — a national non-profit standing with sickle cell warriors and families across all 36 states and the FCT.",
};

/* ---------------- data ---------------- */

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "heart",
    title: "Compassion",
    text: "Every warrior is met with dignity, warmth and unconditional support — never pity.",
  },
  {
    icon: "shield",
    title: "Integrity",
    text: "We are transparent with our funds, honest in our reporting and accountable to our community.",
  },
  {
    icon: "users",
    title: "Community",
    text: "No one faces sickle cell alone. We build belonging across families, states and generations.",
  },
  {
    icon: "spark",
    title: "Hope",
    text: "We believe in a better tomorrow and work daily to make it real for every warrior.",
  },
  {
    icon: "scale",
    title: "Equity",
    text: "Quality care and information should reach the rural village as surely as the capital city.",
  },
  {
    icon: "flask",
    title: "Excellence",
    text: "We pursue evidence-led, world-class standards in everything from outreach to research.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "A movement begins",
    text: "SSCN is founded in Abuja by a small group of warriors, parents and clinicians determined to change the story of sickle cell in Nigeria.",
  },
  {
    year: "2016",
    title: "First free testing drives",
    text: "Our first community genotype-testing and counselling drives reach over 5,000 people across the FCT and Lagos.",
  },
  {
    year: "2018",
    title: "Hospital partnerships",
    text: "We sign our first formal partnerships with teaching hospitals to subsidise treatment and medication for registered warriors.",
  },
  {
    year: "2019",
    title: "National school outreach",
    text: "The School Awareness Tour launches, taking genotype and inheritance education into hundreds of schools nationwide.",
  },
  {
    year: "2020",
    title: "Crisis response in a pandemic",
    text: "We pivot to emergency relief, delivering medication, blood and food support to warriors cut off during COVID-19 lockdowns.",
  },
  {
    year: "2022",
    title: "Research grants programme",
    text: "SSCN begins seed-funding Nigerian-led research into affordable treatment and early diagnosis.",
  },
  {
    year: "2024",
    title: "Every state, every zone",
    text: "With state representatives in all 36 states and the FCT, our outreach reaches communities the system too often forgets.",
  },
  {
    year: "2026",
    title: "20,000 lives and counting",
    text: "More than 20,000 warriors and families have now been supported — and a national sickle cell strategy is firmly on the agenda.",
  },
];

const leadership = [
  { name: "Barr. Eyo Ugo", role: "Founder & President" },
  { name: "Ibrahim Sani", role: "Director of Programmes" },
  { name: "Funmilayo Adeyemi", role: "Director of Operations" },
  { name: "Emeka Nwosu", role: "Director of Partnerships" },
];

const board = [
  { name: "Dr. Olusegun Bello", role: "Board Chair" },
  { name: "Hauwa Mohammed", role: "Vice Chair" },
  { name: "Chidi Okafor", role: "Treasurer" },
  { name: "Ngozi Eze", role: "Board Secretary" },
];

const medical = [
  { name: "Dr. Chidinma Eze", role: "Lead Haematologist" },
  { name: "Dr. Yusuf Abubakar", role: "Paediatric Specialist" },
  { name: "Dr. Bisi Ogundipe", role: "Genetic Counsellor" },
  { name: "Dr. Tanko Aliyu", role: "Public Health Advisor" },
];

const coordinators = [
  { name: "Grace Udo", role: "South-South Coordinator" },
  { name: "Musa Garba", role: "North-West Coordinator" },
  { name: "Tunde Akinyemi", role: "South-West Coordinator" },
  { name: "Blessing Achi", role: "South-East Coordinator" },
];

const achievements = [
  "Over 20,000 warriors and families directly supported nationwide.",
  "More than 500 voluntary blood donors mobilised through our drives.",
  "Free genotype testing and counselling delivered in all six geopolitical zones.",
  "50+ partner hospitals providing subsidised treatment to beneficiaries.",
  "Three Nigerian research teams funded to advance affordable care.",
  "Hundreds of schools reached with stigma-ending genotype education.",
];

const goals = [
  "Establish a sickle cell support hub in every one of Nigeria's 36 states and the FCT by 2028.",
  "Make know-your-genotype testing routine and accessible in every partner community.",
  "Expand hydroxyurea and essential-medicine access for low-income warriors.",
  "Champion a fully funded National Sickle Cell Strategy and policy framework.",
  "Double the number of Nigerian-led research projects we fund each year.",
  "Grow our volunteer network to 1,000 active heroes across the country.",
];

const reports: { icon: IconName; title: string; text: string; tag: string }[] = [
  {
    icon: "book",
    title: "Annual Report 2025",
    text: "A full account of our programmes, reach and impact across the year.",
    tag: "PDF · 4.2MB",
  },
  {
    icon: "scale",
    title: "Audited Financial Statement 2025",
    text: "Independently audited income, expenditure and fund allocation.",
    tag: "PDF · 1.8MB",
  },
  {
    icon: "graduation",
    title: "Impact Review 2024",
    text: "Outcomes, beneficiary stories and lessons from the field.",
    tag: "PDF · 3.1MB",
  },
];

const groups = [
  { title: "Leadership Team", people: leadership, tone: "primary" },
  { title: "Board Members", people: board, tone: "navy" },
  { title: "Medical Advisory Team", people: medical, tone: "primary" },
  { title: "National Coordinators", people: coordinators, tone: "navy" },
] as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

/* ---------------- page ---------------- */

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SSCN"
        title="A national movement for awareness, care and dignity"
        intro="Support Sickle Cell Nigeria exists so that no warrior faces sickle cell alone — and so that fewer children are ever born to face it at all."
        breadcrumb="Home / About Us"
      />

      {/* Our Story */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              Born from lived experience, built for every warrior
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              <p>
                Support Sickle Cell Nigeria (SSCN) began in 2015 around a kitchen
                table in Abuja — a handful of warriors, worried parents and tired
                clinicians who refused to accept that sickle cell had to mean
                pain, stigma and silence.
              </p>
              <p>
                Nigeria carries one of the world&apos;s heaviest sickle cell
                burdens, yet too many families still face the disorder without
                information, affordable care or community. We set out to change
                that — one test, one outreach, one warrior at a time.
              </p>
              <p>
                A decade on, SSCN is a nationwide non-profit creating awareness,
                supporting individuals living with sickle cell, advocating for
                better healthcare, funding research and empowering families across
                all 36 states and the FCT. We are still the same people who
                started at that table: people who believe a warrior is never a
                victim.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/get-support" icon>
                Get Support
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex aspect-square items-center justify-center rounded-3xl bg-primary text-white">
                    <Icon.heart className="h-16 w-16" />
                  </div>
                  <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-navy text-white">
                    <Icon.users className="h-14 w-14" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-primary-soft text-primary">
                    <Icon.dna className="h-14 w-14" />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-3xl bg-grey text-navy">
                    <Icon.globe className="h-16 w-16" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-navy/10 ring-1 ring-line">
                <span className="font-heading text-2xl font-extrabold text-primary">
                  Since 2015
                </span>
                <span className="text-sm font-medium leading-tight text-muted">
                  standing with
                  <br />
                  Nigerian warriors
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Founder */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <Photo
                src={img.founder.src}
                alt={img.founder.alt}
                className="aspect-[4/5] w-full shadow-2xl ring-1 ring-white/10"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute -bottom-5 -right-4 rounded-2xl bg-primary px-5 py-4 shadow-xl">
                <p className="font-heading text-lg font-extrabold text-white">
                  {founder.name}
                </p>
                <p className="text-sm text-white/85">{founder.role}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              Meet Our Founder
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
              {founder.title}
            </h2>
            <Icon.quote className="mt-5 h-9 w-9 text-primary-light/60" />
            <blockquote className="mt-2 text-lg leading-relaxed text-white/85">
              &ldquo;{founder.message}&rdquo;
            </blockquote>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-white/70">
              {founder.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-heading text-xl font-bold italic text-primary-light">
              {founder.signature}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision / Values */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Mission, vision and the values we live by"
          intro="A clear purpose and a shared set of values guide every programme, partnership and decision we make."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon.spark className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Our Mission</h3>
              <p className="mt-2 leading-relaxed text-muted">
                To improve the quality of life of every person affected by sickle
                cell in Nigeria through awareness, healthcare support, advocacy,
                education and community — leaving no warrior behind.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                <Icon.globe className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Our Vision</h3>
              <p className="mt-2 leading-relaxed text-muted">
                A Nigeria where no one suffers or is stigmatised because of sickle
                cell — and where new cases are prevented through knowledge, testing
                and informed choice.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 80}>
              <IconCard icon={v.icon} title={v.title}>
                {v.text}
              </IconCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* History & Timeline */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Our Journey"
          title="A decade of milestones, 2015 to 2026"
          intro="From a kitchen table in Abuja to a movement in every state — the moments that shaped SSCN."
        />

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-0 h-full w-px bg-line sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={(i % 2) * 80}>
                <div
                  className={`relative flex items-start gap-6 sm:w-1/2 ${
                    i % 2 === 0
                      ? "sm:ml-auto sm:flex-row-reverse sm:pl-10 sm:text-right"
                      : "sm:pr-10"
                  }`}
                >
                  <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-white ring-4 ring-white">
                    <Icon.calendar className="h-5 w-5" />
                  </span>
                  <div className="flex-1 rounded-2xl border border-line bg-white p-5 shadow-sm">
                    <Badge tone="red">{item.year}</Badge>
                    <h3 className="mt-2 text-lg font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* People */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Our People"
          title="The hands and hearts behind SSCN"
          intro="A team of warriors, clinicians, advocates and volunteers leading the movement across Nigeria."
        />

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-bold text-navy">{group.title}</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.people.map((p, i) => (
                  <Reveal key={p.name} delay={(i % 4) * 70}>
                    <div className="group flex h-full flex-col items-center rounded-3xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                      <span
                        className={`flex h-20 w-20 items-center justify-center rounded-full text-xl font-extrabold text-white ${
                          group.tone === "primary"
                            ? "bg-gradient-to-br from-primary to-primary-dark"
                            : "bg-gradient-to-br from-navy to-navy-light"
                        }`}
                      >
                        {initials(p.name)}
                      </span>
                      <h4 className="mt-4 font-bold text-navy">{p.name}</h4>
                      <p className="mt-1 text-sm text-muted">{p.role}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Our Achievements"
          title="A decade of measurable impact"
          intro="Behind every number is a warrior who got tested, treated, supported or simply seen."
        />

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60} className="bg-white p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-line bg-grey/40 p-8 sm:p-10">
          <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {achievements.map((a) => (
              <div key={a} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon.star className="h-3.5 w-3.5" />
                </span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Strategic Goals */}
      <Section tone="grey">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Looking Ahead"
              title="Our strategic goals"
              intro="Bold, achievable commitments that will shape the next phase of our work for warriors."
            />
            <div className="mt-8">
              <Button href="/partners" variant="secondary" icon>
                Help us get there
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-white p-8">
              <CheckList items={goals} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Financial transparency */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Financial Transparency"
          title="Open books, earned trust"
          intro="We publish audited accounts and annual reports so every supporter can see exactly how their gift creates impact."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reports.map((r, i) => {
            const ReportIcon = Icon[r.icon];
            return (
              <Reveal key={r.title} delay={i * 100}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-navy/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <ReportIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {r.text}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {r.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Download <Icon.arrow className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-30" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
                Join the movement
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                Be part of the next chapter of our story
              </h2>
              <p className="mt-4 text-white/80">
                Whether you donate, volunteer, partner or simply get tested — your
                action helps rewrite the future of sickle cell in Nigeria.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/donate" size="lg" variant="white" icon>
                  Donate Now
                </Button>
                <Button
                  href="/volunteer"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Become a Volunteer
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
