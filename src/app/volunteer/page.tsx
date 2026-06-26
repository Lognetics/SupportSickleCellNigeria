import type { Metadata } from "next";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { SmartForm } from "@/components/form";
import { Icon } from "@/components/icons";
import {
  Button,
  Eyebrow,
  Badge,
  IconCard,
  SectionHeading,
  Section,
  CheckList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Volunteer with SSCN | Support Sickle Cell Nigeria",
  description:
    "Lend your time, skills and compassion to the sickle cell movement. Join SSCN as a medical, student, corporate, event or community volunteer across all 36 states and the FCT.",
};

const impactStats = [
  { value: 1200, suffix: "+", label: "Active volunteers" },
  { value: 36, suffix: "", label: "States reached" },
  { value: 480, suffix: "+", label: "Outreaches powered" },
  { value: 75000, suffix: "+", label: "Volunteer hours given" },
];

const opportunities: { icon: Parameters<typeof IconCard>[0]["icon"]; title: string; text: string }[] = [
  {
    icon: "stethoscope",
    title: "Medical Volunteers",
    text: "Doctors, nurses, lab scientists and counsellors who staff free testing drives, crisis clinics and warrior check-ups.",
  },
  {
    icon: "graduation",
    title: "Student Volunteers",
    text: "University and secondary school students who run campus awareness, genotype campaigns and peer education clubs.",
  },
  {
    icon: "users",
    title: "Corporate Volunteers",
    text: "Company teams who give skilled days — finance, design, logistics, IT — and rally colleagues for blood drives.",
  },
  {
    icon: "calendar",
    title: "Event Volunteers",
    text: "Hands-on helpers for walks, fundraisers and outreaches: registration, logistics, hospitality and crowd care.",
  },
  {
    icon: "megaphone",
    title: "Community Advocates",
    text: "Trusted local voices who carry the message to markets, mosques, churches and rural communities nationwide.",
  },
];

const benefits = [
  "Make a direct, measurable difference in the life of a warrior and their family.",
  "Free SSCN training, certification and a recognised volunteer handbook.",
  "Build real skills in healthcare, advocacy, event management and community work.",
  "Join a nationwide community of like-minded changemakers and mentors.",
  "Flexible roles that fit around your studies, job or family life.",
  "Letters of recommendation and verified service hours for school or work.",
];

const steps = [
  {
    icon: "book" as const,
    title: "Apply",
    text: "Complete the short registration form below telling us your interests, skills and availability.",
  },
  {
    icon: "graduation" as const,
    title: "Training",
    text: "Attend a free onboarding and role-specific training session — online or at a hub near you.",
  },
  {
    icon: "users" as const,
    title: "Get matched",
    text: "We pair you with a program, team lead and schedule that fits your strengths and location.",
  },
  {
    icon: "heart" as const,
    title: "Make impact",
    text: "Start serving warriors, log your hours, and grow into leadership and mentoring roles.",
  },
];

const resources = [
  {
    icon: "book" as const,
    title: "Volunteer Handbook",
    text: "Your complete guide to roles, conduct, safety and the SSCN code of care.",
    meta: "PDF · 2.4 MB",
  },
  {
    icon: "shield" as const,
    title: "Safeguarding Policy",
    text: "How we protect warriors, families and volunteers in every interaction.",
    meta: "PDF · 0.9 MB",
  },
  {
    icon: "graduation" as const,
    title: "Training Modules",
    text: "Self-paced lessons on sickle cell basics, advocacy and crisis support.",
    meta: "Online · 6 modules",
  },
  {
    icon: "check" as const,
    title: "Service Certificate",
    text: "Earn a verified certificate after completing training and 20 service hours.",
    meta: "Digital · Auto-issued",
  },
];

const volunteerVoices = [
  {
    quote:
      "I joined as a student volunteer in my second year. Two years on, I've helped test over 3,000 people and lead my campus chapter. SSCN gave me purpose and a family.",
    name: "Halima Yusuf",
    role: "Student Volunteer · Kano",
  },
  {
    quote:
      "As a nurse, my weekends with SSCN's crisis clinics are the most fulfilling work I do. You see hope return to a warrior's eyes in real time. That is priceless.",
    name: "Dr. Emeka Obi",
    role: "Medical Volunteer · Enugu",
  },
];

const STATES = [
  "Abuja (FCT)",
  "Lagos",
  "Kano",
  "Rivers",
  "Oyo",
  "Kaduna",
  "Enugu",
  "Borno",
  "Other state",
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeroIntro />

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Why we need you</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              Every warrior&apos;s story is brighter because someone showed up
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Behind every free genotype test, every pint of blood, every crisis
              survived and every child kept in school, there is a volunteer who
              chose to give their time. You do not need to be a doctor to change a
              life — you need a willing heart and a few hours. From medical
              professionals to first-year students, our volunteers are the engine
              of the sickle cell movement across all 36 states and the FCT.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#register" size="lg" icon>
                Register to volunteer
              </Button>
              <Button href="#opportunities" size="lg" variant="outline">
                Explore roles
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-3xl border border-line p-6 text-center ${
                    i % 2 === 0 ? "bg-primary-soft/50" : "bg-grey/60"
                  }`}
                >
                  <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="grey">
        <div id="opportunities" className="-mt-24 scroll-mt-20 pt-24" />
        <SectionHeading
          eyebrow="Volunteer Opportunities"
          title="Find the role that fits you"
          intro="Whatever your skills, schedule or background, there is a place for you on the team. Pick the path that calls to you."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o, i) => (
            <Reveal key={o.title} delay={(i % 3) * 70}>
              <IconCard icon={o.icon} title={o.title}>
                {o.text}
              </IconCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 text-white">
              <div className="absolute inset-0 bg-dotgrid opacity-30" />
              <div className="relative">
                <Icon.spark className="h-10 w-10 text-primary-light" />
                <h3 className="mt-5 text-2xl font-bold">More than giving back</h3>
                <p className="mt-3 text-white/80">
                  Volunteering with SSCN is a two-way gift. You pour into the
                  community — and the community pours skills, friendship and
                  purpose right back into you.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                    <p className="font-heading text-2xl font-extrabold">100%</p>
                    <p className="text-xs text-white/70">Free training</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                    <p className="font-heading text-2xl font-extrabold">Verified</p>
                    <p className="text-xs text-white/70">Service hours</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why volunteer</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              The benefits of becoming an SSCN volunteer
            </h2>
            <div className="mt-6">
              <CheckList items={benefits} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="grey">
        <SectionHeading
          eyebrow="How It Works"
          title="From sign-up to impact in four steps"
          intro="We make it simple to get started and supported every step of the way."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const StepIcon = Icon[s.icon];
            return (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative flex h-full flex-col rounded-3xl border border-line bg-white p-6">
                  <span className="absolute right-5 top-5 font-heading text-4xl font-extrabold text-primary/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <StepIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="white" className="scroll-mt-20">
        <div id="register" className="-mt-24 pt-24" />
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <Eyebrow>Volunteer Registration</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
                Ready to join? Tell us about yourself
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Fill in the form and our volunteer coordinator will reach out
                within a few days with onboarding details, training dates and the
                best-fit role for your skills and schedule.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon.shield className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-navy">Your data is safe</p>
                    <p className="text-sm text-muted">
                      We use your details only to coordinate volunteering.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon.calendar className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-navy">No minimum commitment</p>
                    <p className="text-sm text-muted">
                      Give as much or as little time as you can.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Reveal delay={120}>
              <SmartForm
                submitLabel="Submit application"
                successTitle="Welcome to the team!"
                successText="Thank you for stepping up. Our volunteer coordinator will be in touch shortly with your onboarding and training details."
                note="By submitting, you agree to be contacted by SSCN regarding volunteering opportunities."
                fields={[
                  { name: "fullName", label: "Full name", required: true, placeholder: "Your full name" },
                  { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@example.com" },
                  { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+234 ..." },
                  { name: "state", label: "State", type: "select", required: true, options: STATES },
                  {
                    name: "volunteerType",
                    label: "Volunteer type",
                    type: "select",
                    required: true,
                    options: [
                      "Medical Volunteer",
                      "Student Volunteer",
                      "Corporate Volunteer",
                      "Event Volunteer",
                      "Community Advocate",
                    ],
                  },
                  {
                    name: "availability",
                    label: "Availability",
                    type: "select",
                    required: true,
                    options: ["Weekdays", "Weekends", "Flexible"],
                  },
                  {
                    name: "skills",
                    label: "Skills & experience",
                    type: "textarea",
                    full: true,
                    placeholder: "Tell us about your skills, experience and why you'd like to volunteer.",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="grey">
        <SectionHeading
          eyebrow="Training & Resources"
          title="Everything you need to serve with confidence"
          intro="Once you're onboard, these resources help you train, stay safe and earn recognition for your service."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => {
            const ResIcon = Icon[r.icon];
            return (
              <Reveal key={r.title} delay={(i % 4) * 70}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <ResIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {r.text}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs font-semibold text-muted">{r.meta}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Download <Icon.arrow className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Download links unlock automatically after your application is approved.
        </p>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Volunteer Voices"
          title="In their own words"
          intro="Hear from the people already giving their time to the movement."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {volunteerVoices.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-grey/40 p-8">
                <Icon.quote className="h-10 w-10 text-primary/30" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-navy">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge tone="grey">Join 1,200+ volunteers</Badge>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                Your hands could be the next miracle a warrior needs
              </h2>
              <p className="mt-4 text-white/80">
                Sign up today and become part of a community changing the story of
                sickle cell in Nigeria — one act of service at a time.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="#register" size="lg" variant="white" icon>
                  Register now
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Ask a question
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PageHeroIntro() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-dotgrid opacity-40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="container-x relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-white/60">Home / Volunteer</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
            Become a volunteer
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl text-balance">
            Give your time. Change a warrior&apos;s life.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Compassion is the most powerful medicine we have. Join thousands of
            volunteers across Nigeria bringing hope, care and dignity to the
            sickle cell community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#register" size="lg" variant="white" icon>
              Register to volunteer
            </Button>
            <Button
              href="#opportunities"
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              See opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
