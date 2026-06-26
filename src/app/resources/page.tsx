import Link from "next/link";
import { img, type ImageRef } from "@/lib/images";
import { Photo } from "@/components/photo";
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
  title: "Resources & Healthcare Directory | Support Sickle Cell Nigeria",
  description:
    "Free research papers, medical guidelines, infographics, videos, books, podcasts and policy documents on sickle cell — plus a directory of hospitals, blood banks and emergency contacts across Nigeria.",
};

type ResourceItem = {
  title: string;
  desc: string;
  type: string;
  action: "Download" | "View";
};

type ResourceGroup = {
  eyebrow: string;
  heading: string;
  intro: string;
  icon: IconName;
  gradient: "navy" | "soft";
  thumb: ImageRef;
  items: ResourceItem[];
};

const groups: ResourceGroup[] = [
  {
    eyebrow: "Evidence",
    heading: "Research Papers",
    intro:
      "Peer-reviewed studies and Nigerian field research on sickle cell disorder, treatment outcomes and prevention.",
    icon: "flask",
    gradient: "navy",
    thumb: img.labResearch,
    items: [
      {
        title: "Hydroxyurea Adherence in Nigerian Warriors",
        desc: "A two-year cohort study across six tertiary hospitals examining adherence and crisis reduction.",
        type: "PDF · 2.4MB",
        action: "Download",
      },
      {
        title: "Newborn Screening Pilot in the FCT",
        desc: "Outcomes and lessons from early-detection screening of 12,000 newborns in Abuja.",
        type: "PDF · 1.8MB",
        action: "Download",
      },
      {
        title: "Burden of Sickle Cell Across the 36 States",
        desc: "A national prevalence map and economic-burden analysis to guide policy and funding.",
        type: "PDF · 3.1MB",
        action: "Download",
      },
    ],
  },
  {
    eyebrow: "Clinical",
    heading: "Medical Guidelines",
    intro:
      "Practical, evidence-based protocols for clinicians, caregivers and warriors managing the disorder.",
    icon: "stethoscope",
    gradient: "soft",
    thumb: img.doctorPatient,
    items: [
      {
        title: "Acute Pain Crisis Management Protocol",
        desc: "Step-by-step guidance on hydration, analgesia and escalation during a vaso-occlusive crisis.",
        type: "Guideline",
        action: "View",
      },
      {
        title: "Routine Care Checklist for Warriors",
        desc: "Vaccination schedules, penicillin prophylaxis, folic acid and the annual review calendar.",
        type: "Guideline",
        action: "View",
      },
      {
        title: "Pregnancy & Sickle Cell Care Pathway",
        desc: "Antenatal monitoring and multidisciplinary care for expectant mothers living with SCD.",
        type: "Guideline",
        action: "View",
      },
    ],
  },
  {
    eyebrow: "Visual",
    heading: "Infographics",
    intro:
      "Shareable, easy-to-read graphics that explain genotype, inheritance and daily self-care.",
    icon: "spark",
    gradient: "soft",
    thumb: img.students,
    items: [
      {
        title: "Know Your Genotype",
        desc: "How AA, AS and SS combine, and what every couple should check before marriage.",
        type: "PNG",
        action: "Download",
      },
      {
        title: "Recognising a Crisis Early",
        desc: "The warning signs of a pain crisis and when to head to the hospital.",
        type: "PNG",
        action: "Download",
      },
      {
        title: "Staying Hydrated & Warm",
        desc: "Simple daily habits that lower the risk of triggering a crisis.",
        type: "PNG",
        action: "Download",
      },
    ],
  },
  {
    eyebrow: "Watch",
    heading: "Educational Videos",
    intro:
      "Short, accessible explainer videos for warriors, families, schools and the wider public.",
    icon: "megaphone",
    gradient: "navy",
    thumb: img.students,
    items: [
      {
        title: "Sickle Cell Explained in 5 Minutes",
        desc: "An animated introduction to what sickle cell disorder is and how it affects the body.",
        type: "Video · 5:12",
        action: "View",
      },
      {
        title: "A Day in the Life of a Warrior",
        desc: "Real warriors share how they live full, hopeful lives while managing their condition.",
        type: "Video · 8:40",
        action: "View",
      },
      {
        title: "How to Support a Loved One",
        desc: "Guidance for parents, partners and friends on practical and emotional support.",
        type: "Video · 6:25",
        action: "View",
      },
    ],
  },
  {
    eyebrow: "Read",
    heading: "Books",
    intro:
      "Recommended reading for warriors, caregivers and advocates — from self-care to children's stories.",
    icon: "book",
    gradient: "soft",
    thumb: img.celebration,
    items: [
      {
        title: "Living Well with Sickle Cell",
        desc: "A practical handbook on nutrition, crisis prevention and mental wellbeing.",
        type: "eBook",
        action: "Download",
      },
      {
        title: "Brave Little Warrior (For Children)",
        desc: "An illustrated story that helps children understand their genotype and feel proud.",
        type: "eBook",
        action: "Download",
      },
      {
        title: "The Caregiver's Companion",
        desc: "Support, checklists and encouragement for parents and family caregivers.",
        type: "eBook",
        action: "Download",
      },
    ],
  },
  {
    eyebrow: "Listen",
    heading: "Podcasts",
    intro:
      "Conversations with doctors, warriors and advocates — listen on your commute or during care.",
    icon: "chat",
    gradient: "navy",
    thumb: img.youthGroup,
    items: [
      {
        title: "Warrior Voices · Episode 1",
        desc: "Three warriors talk stigma, school and the moment they reclaimed their story.",
        type: "Audio · 32 min",
        action: "View",
      },
      {
        title: "Ask the Haematologist",
        desc: "A Nigerian specialist answers the questions families ask most about treatment.",
        type: "Audio · 41 min",
        action: "View",
      },
      {
        title: "Blood, Hope & Community",
        desc: "Why blood donation saves warriors' lives and how you can help close the gap.",
        type: "Audio · 28 min",
        action: "View",
      },
    ],
  },
  {
    eyebrow: "Advocacy",
    heading: "Policy Documents",
    intro:
      "Position papers and submissions supporting better sickle cell policy across Nigeria.",
    icon: "scale",
    gradient: "soft",
    thumb: img.teamMeeting,
    items: [
      {
        title: "National Sickle Cell Policy Brief",
        desc: "Our recommendations for screening, subsidised treatment and public awareness.",
        type: "PDF",
        action: "Download",
      },
      {
        title: "Mandatory Pre-Marital Screening Submission",
        desc: "A policy proposal to expand access to free genotype testing and counselling.",
        type: "PDF",
        action: "Download",
      },
      {
        title: "SSCN Annual Impact Report",
        desc: "Programmes delivered, lives touched and full financial transparency.",
        type: "PDF",
        action: "Download",
      },
    ],
  },
];

type DirEntry = {
  name: string;
  detail: string;
  location: string;
  contact: string;
};

const directory: {
  heading: string;
  icon: IconName;
  intro: string;
  entries: DirEntry[];
}[] = [
  {
    heading: "Hospitals & Treatment Centres",
    icon: "stethoscope",
    intro: "Tertiary centres with haematology and sickle cell clinics.",
    entries: [
      {
        name: "Lagos University Teaching Hospital (LUTH)",
        detail: "Haematology & comprehensive sickle cell clinic",
        location: "Idi-Araba, Lagos",
        contact: "+234 801 234 5678",
      },
      {
        name: "National Hospital Abuja",
        detail: "Adult & paediatric sickle cell services",
        location: "Central District, Abuja (FCT)",
        contact: "+234 802 345 6789",
      },
      {
        name: "University College Hospital (UCH)",
        detail: "Sickle Cell Foundation referral centre",
        location: "Ibadan, Oyo State",
        contact: "+234 803 456 7890",
      },
      {
        name: "Aminu Kano Teaching Hospital",
        detail: "Haematology unit & day-care clinic",
        location: "Kano, Kano State",
        contact: "+234 804 567 8901",
      },
    ],
  },
  {
    heading: "Blood Banks",
    icon: "droplet",
    intro: "Registered centres where you can give or request safe blood.",
    entries: [
      {
        name: "National Blood Service Commission",
        detail: "Voluntary donation & screened blood supply",
        location: "Abuja (FCT)",
        contact: "+234 805 678 9012",
      },
      {
        name: "Lagos State Blood Transfusion Service",
        detail: "Donor drives & emergency blood requests",
        location: "Yaba, Lagos",
        contact: "+234 806 789 0123",
      },
      {
        name: "Red Cross Blood Centre",
        detail: "Mobile drives & community donation",
        location: "Port Harcourt, Rivers State",
        contact: "+234 807 890 1234",
      },
    ],
  },
  {
    heading: "Emergency Contacts",
    icon: "phone",
    intro: "Save these numbers — help is available day and night.",
    entries: [
      {
        name: "SSCN Warrior Helpline (24/7)",
        detail: "Crisis guidance, referrals & caregiver support",
        location: "Nationwide",
        contact: "+234 911 000 0000",
      },
      {
        name: "National Emergency Number",
        detail: "Ambulance, fire and security response",
        location: "Nationwide",
        contact: "112",
      },
      {
        name: "SSCN Support Line",
        detail: "Registration, programmes & general enquiries",
        location: "Mon–Fri, 9am–5pm",
        contact: "+234 800 000 0000",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        image={img.students.src}
        imageAlt={img.students.alt}
        eyebrow="Resources"
        title="Knowledge that empowers every warrior"
        intro="A free, growing library of research, guidelines, videos, books and policy — plus a directory of hospitals, blood banks and emergency contacts across Nigeria."
        breadcrumb="Home / Resources"
      />

      {/* Decorative search bar */}
      <Section tone="white" className="!pb-0">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-4 shadow-sm shadow-navy/5">
              <Icon.search className="h-5 w-5 flex-none text-primary" />
              <input
                type="text"
                placeholder="Search resources — guidelines, videos, infographics…"
                aria-label="Search resources"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
              <span className="hidden flex-none rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white sm:inline-block">
                Search
              </span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
              {groups.map((g) => (
                <span
                  key={g.heading}
                  className="rounded-full bg-grey px-3 py-1.5 font-semibold text-muted"
                >
                  {g.heading}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {groups.map((group, gi) => (
        <Section key={group.heading} tone={gi % 2 === 0 ? "white" : "grey"}>
          <SectionHeading
            align="left"
            eyebrow={group.eyebrow}
            title={group.heading}
            intro={group.intro}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item, i) => {
              return (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                    <div className="relative h-36">
                      <Photo
                        src={group.thumb.src}
                        alt={group.thumb.alt}
                        className="h-36 w-full"
                        imgClassName="transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        rounded="rounded-none"
                      />
                      <span className="absolute left-4 top-4 z-10">
                        <Badge tone={group.gradient === "navy" ? "red" : "navy"}>
                          {item.type}
                        </Badge>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold leading-snug text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {item.desc}
                      </p>
                      <Link
                        href="/resources"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
                        aria-label={`${item.action} ${item.title}`}
                      >
                        {item.action === "Download" ? (
                          <Icon.gift className="h-4 w-4" />
                        ) : (
                          <Icon.arrow className="h-4 w-4" />
                        )}
                        {item.action}
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      {/* Healthcare Directory */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Healthcare Directory"
          title="Find care near you, fast"
          intro="Trusted hospitals, blood banks and emergency contacts across Nigeria. Always call ahead to confirm availability."
        />
        <div className="mt-12 space-y-12">
          {directory.map((section) => {
            const SectionIcon = Icon[section.icon];
            return (
              <Reveal key={section.heading}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                      <SectionIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy">
                        {section.heading}
                      </h3>
                      <p className="text-sm text-muted">{section.intro}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {section.entries.map((entry) => (
                      <div
                        key={entry.name}
                        className="flex h-full flex-col rounded-3xl border border-line bg-white p-6"
                      >
                        <h4 className="font-bold leading-snug text-navy">
                          {entry.name}
                        </h4>
                        <p className="mt-2 flex-1 text-sm text-muted">
                          {entry.detail}
                        </p>
                        <div className="mt-4 space-y-2 text-sm font-semibold text-navy">
                          <span className="flex items-center gap-2">
                            <Icon.pin className="h-4 w-4 flex-none text-primary" />
                            {entry.location}
                          </span>
                          <a
                            href={`tel:${entry.contact.replace(/\s+/g, "")}`}
                            className="flex items-center gap-2 hover:text-primary"
                          >
                            <Icon.phone className="h-4 w-4 flex-none text-primary" />
                            {entry.contact}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            light
            eyebrow="Stay connected"
            title="Get new resources and support in your inbox"
            intro="Subscribe for fresh guidelines, events and warrior stories — or reach out and let our team support you directly."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="white" size="lg" icon>
              Subscribe for updates
            </Button>
            <Button
              href="/get-support"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Get support
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
