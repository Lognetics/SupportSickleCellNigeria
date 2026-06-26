import type { Metadata } from "next";
import { partners } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { PartnersMarquee } from "@/components/marquee";
import { SmartForm, type Field } from "@/components/form";
import { Icon, type IconName } from "@/components/icons";
import {
  Button,
  Eyebrow,
  IconCard,
  SectionHeading,
  Section,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Partners | Support Sickle Cell Nigeria",
  description:
    "Hospitals, corporates, NGOs, government agencies, universities and international organisations join SSCN to change the story of sickle cell in Nigeria. Become a partner today.",
};

type PartnerGroup = {
  icon: IconName;
  title: string;
  blurb: string;
  members: string[];
};

/* Real partners from site data, supplemented with plausible invented names. */
const partnerGroups: PartnerGroup[] = [
  {
    icon: "stethoscope",
    title: "Healthcare Partners",
    blurb:
      "Teaching hospitals and clinics that deliver subsidised care, screening and treatment to warriors.",
    members: [
      "University College Hospital",
      "Lagos University Teaching Hospital",
      "National Hospital Abuja",
      "Aminu Kano Teaching Hospital",
      "St. Nicholas Hospital",
    ],
  },
  {
    icon: "users",
    title: "Corporate Sponsors",
    blurb:
      "Forward-thinking businesses funding programs and rallying staff for blood drives and CSR.",
    members: [
      "Zenith Cares Foundation",
      "Dangote Foundation",
      "MTN Nigeria Foundation",
      "GTCO Plc",
      "Seplat Energy",
    ],
  },
  {
    icon: "heart",
    title: "NGOs & Foundations",
    blurb:
      "Mission-aligned non-profits amplifying awareness, relief and community support.",
    members: [
      "Nigerian Red Cross",
      "Sickle Cell Foundation",
      "Hope Alive Initiative",
      "Warriors of Nigeria Trust",
      "Genotype Awareness Network",
    ],
  },
  {
    icon: "scale",
    title: "Government Agencies",
    blurb:
      "Public institutions shaping policy and extending services into every state.",
    members: [
      "Federal Ministry of Health",
      "National Blood Service",
      "NCDC",
      "National Primary Health Care Development Agency",
      "State Sickle Cell Programmes",
    ],
  },
  {
    icon: "globe",
    title: "International Organisations",
    blurb:
      "Global partners bringing expertise, funding and best practice to Nigeria.",
    members: [
      "WHO Nigeria",
      "Rotary International",
      "UNICEF Nigeria",
      "Global Sickle Cell Alliance",
      "Sickle Cell International",
    ],
  },
  {
    icon: "graduation",
    title: "Universities & Research",
    blurb:
      "Academic and research institutions advancing affordable treatment and the evidence base.",
    members: [
      "University of Ibadan",
      "Ahmadu Bello University",
      "University of Lagos",
      "Obafemi Awolowo University",
      "Centre for Genetic Medicine",
    ],
  },
];

const partnershipWays = [
  {
    icon: "heart" as const,
    title: "Sponsorship",
    text: "Fund a program, an outreach or a warrior's care directly and see the measurable impact of your gift.",
  },
  {
    icon: "users" as const,
    title: "Corporate CSR",
    text: "Build a meaningful, year-round CSR partnership that engages your staff and customers around a cause that matters.",
  },
  {
    icon: "droplet" as const,
    title: "Blood Drives",
    text: "Host an on-site blood donation campaign with your team and help keep blood banks stocked for warriors in crisis.",
  },
  {
    icon: "flask" as const,
    title: "Research Funding",
    text: "Back Nigerian-led research into affordable diagnosis, pain management and better long-term care.",
  },
  {
    icon: "gift" as const,
    title: "In-Kind Support",
    text: "Donate medication, medical supplies, logistics, media, venues or professional services pro bono.",
  },
];

const benefits = [
  {
    icon: "spark" as const,
    title: "Visible, authentic impact",
    text: "Associate your brand with a trusted national cause and reach communities in all 36 states and the FCT.",
  },
  {
    icon: "chat" as const,
    title: "Employee engagement",
    text: "Give your team purpose-led volunteering, blood drives and awareness events they're proud to join.",
  },
  {
    icon: "shield" as const,
    title: "Transparency & reporting",
    text: "Receive clear impact reports so you can show stakeholders exactly what your support achieved.",
  },
  {
    icon: "megaphone" as const,
    title: "Co-branded awareness",
    text: "Feature in joint campaigns, our partner marquee and event materials reaching millions.",
  },
];

const partnerFields: Field[] = [
  { name: "organisation", label: "Organisation name", type: "text", required: true, placeholder: "Your company or organisation" },
  { name: "contact", label: "Contact person", type: "text", required: true, placeholder: "Full name" },
  { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@organisation.com" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 ..." },
  {
    name: "interest",
    label: "Partnership interest",
    type: "select",
    required: true,
    placeholder: "Select a partnership type",
    options: ["Sponsorship", "Corporate CSR", "Blood Drives", "Research Funding", "In-Kind Support", "Other"],
  },
  { name: "message", label: "Tell us about your goals", type: "textarea", required: true, placeholder: "How would you like to partner with SSCN?" },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Together, we change the story of sickle cell"
        intro="No single organisation can do this alone. With hospitals, corporates, NGOs, government and global allies, SSCN reaches further, faster — and every partnership becomes care for a warrior."
        breadcrumb="Home / Partners"
      />

      {/* Intro — power of partnership */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>The Power of Partnership</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              Big change is built on strong partnerships
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Sickle cell is a national challenge — and it calls for a national coalition.
              Our partners bring the hospitals that treat warriors, the funding that powers
              programs, the policy that protects rights, and the research that points to a
              better future. Every collaboration multiplies what we can do.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you&apos;re a global institution or a local business, there is a place
              for you in this movement — and a warrior whose life will be better for it.
            </p>
            <div className="mt-8">
              <Button href="#become-a-partner" icon>
                Start a partnership
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "users" as const, n: "50+", l: "Partner hospitals" },
                { icon: "globe" as const, n: "36", l: "States reached" },
                { icon: "droplet" as const, n: "500+", l: "Units pledged" },
                { icon: "heart" as const, n: "20k+", l: "Lives touched" },
              ].map((s) => {
                const StatIcon = Icon[s.icon];
                return (
                  <div
                    key={s.l}
                    className="rounded-3xl border border-line bg-grey/40 p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <StatIcon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 font-heading text-2xl font-extrabold text-navy">
                      {s.n}
                    </p>
                    <p className="text-sm text-muted">{s.l}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <PartnersMarquee />
        </div>
      </Section>

      {/* Partner category sections */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Our Partners"
          title="A coalition that spans the nation"
          intro="From the operating theatre to the boardroom to the halls of government, these are the organisations standing with warriors."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {partnerGroups.map((group, gi) => {
            const GroupIcon = Icon[group.icon];
            return (
              <Reveal key={group.title} delay={(gi % 2) * 100}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <GroupIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{group.title}</h3>
                      <p className="mt-1 text-sm text-muted">{group.blurb}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {group.members.map((m) => (
                      <div
                        key={m}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-grey/40 px-4 py-3"
                      >
                        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white text-navy ring-1 ring-line">
                          <span className="font-heading text-sm font-extrabold text-primary">
                            {m.charAt(0)}
                          </span>
                        </span>
                        <span className="text-sm font-semibold leading-tight text-navy">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Partner organisations shown for illustration alongside our founding partners
          ({partners.slice(0, 3).join(", ")} and more).
        </p>
      </Section>

      {/* Why partner with us */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Why Partner With Us"
          title="Partnership that delivers — for warriors and for you"
          intro="A partnership with SSCN is more than a logo on a banner. It's measurable impact, real engagement and a story worth telling."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 80}>
              <IconCard icon={b.icon} title={b.title}>
                {b.text}
              </IconCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Ways to partner */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Ways to Partner"
          title="Find the partnership that fits you"
          intro="There are many ways to make a difference — choose the one that matches your strengths, or combine a few."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnershipWays.map((w, i) => {
            const WayIcon = Icon[w.icon];
            return (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-navy/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-primary">
                    <WayIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{w.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Become a partner form */}
      <Section tone="white" className="scroll-mt-24">
        <div id="become-a-partner" className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Become a Partner</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              Let&apos;s build something that lasts
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Tell us a little about your organisation and how you&apos;d like to get
              involved. Our partnerships team will reach out to design a collaboration
              around your goals — and a warrior&apos;s needs.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              {[
                "A dedicated partnerships contact",
                "A tailored proposal for your organisation",
                "Clear impact metrics and reporting",
                "Recognition across our channels and events",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon.check className="h-3.5 w-3.5" />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <SmartForm
              fields={partnerFields}
              submitLabel="Submit partnership enquiry"
              successTitle="Thank you for reaching out!"
              successText="Our partnerships team has received your enquiry and will be in touch within a few working days to explore how we can collaborate."
              note="We'll only use your details to respond to your partnership enquiry."
            />
          </Reveal>
        </div>
      </Section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-30" />
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Join the coalition
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                Your organisation could be a warrior&apos;s turning point
              </h2>
              <p className="mt-4 text-white/80">
                Add your strength to a national movement. Together we can give every sickle
                cell warrior the care, dignity and hope they deserve.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="#become-a-partner" size="lg">
                  Become a partner
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Talk to our team
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
