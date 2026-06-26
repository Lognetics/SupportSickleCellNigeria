import type { Metadata } from "next";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import { Icon, type IconName } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SmartForm, type Field } from "@/components/form";
import {
  Button,
  IconCard,
  Section,
  SectionHeading,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Get Support | Support Sickle Cell Nigeria",
  description:
    "Living with sickle cell, or caring for someone who is? SSCN offers patient registration, emergency assistance, medical referrals, counselling, financial aid, scholarships and more — for warriors and families across Nigeria.",
};

const supportTypes: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "users",
    title: "Patient Registration",
    text: "Become a registered SSCN beneficiary to unlock our full range of care, referrals and support.",
  },
  {
    icon: "heart",
    title: "Emergency Assistance",
    text: "Rapid-response help during a crisis — blood, medication and admission cover when minutes matter.",
  },
  {
    icon: "stethoscope",
    title: "Medical Referral",
    text: "Connection to our network of partner hospitals, haematologists and subsidised clinics nationwide.",
  },
  {
    icon: "chat",
    title: "Counselling",
    text: "Genetic and pre-marital counselling for couples, parents and families navigating sickle cell.",
  },
  {
    icon: "users",
    title: "Support Groups",
    text: "Safe, welcoming warrior communities in all 36 states and the FCT — you are never alone.",
  },
  {
    icon: "gift",
    title: "Financial Aid",
    text: "Means-tested emergency funds for treatment, transport and crisis care for families under strain.",
  },
  {
    icon: "graduation",
    title: "Educational Scholarship",
    text: "Tuition and learning support so a diagnosis never ends a warrior's education.",
  },
  {
    icon: "spark",
    title: "Psychological Support",
    text: "Mental-health support to help warriors and carers cope with the emotional weight of chronic illness.",
  },
  {
    icon: "calendar",
    title: "Appointment Booking",
    text: "Help scheduling consultations, tests and follow-ups with the right clinician at the right time.",
  },
];

const nigerianStates = [
  "Abia",
  "Abuja (FCT)",
  "Anambra",
  "Bayelsa",
  "Borno",
  "Cross River",
  "Delta",
  "Edo",
  "Enugu",
  "Imo",
  "Kaduna",
  "Kano",
  "Lagos",
  "Ogun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Other",
];

const registrationFields: Field[] = [
  {
    name: "fullName",
    label: "Full name",
    type: "text",
    required: true,
    placeholder: "Beneficiary's full name",
  },
  {
    name: "dob",
    label: "Date of birth",
    type: "date",
    required: true,
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    required: true,
    placeholder: "+234 ...",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    name: "state",
    label: "State of residence",
    type: "select",
    required: true,
    placeholder: "Select your state",
    options: nigerianStates,
  },
  {
    name: "genotype",
    label: "Genotype",
    type: "select",
    required: true,
    placeholder: "Select genotype",
    options: ["SS", "SC", "S-beta thalassaemia", "Other / Unknown"],
  },
  {
    name: "supportType",
    label: "Type of support needed",
    type: "select",
    required: true,
    placeholder: "Select support type",
    options: [
      "Emergency Assistance",
      "Medical Referral",
      "Medication Assistance",
      "Counselling",
      "Financial Aid",
      "Educational Scholarship",
      "Psychological Support",
      "Join a Support Group",
      "Appointment Booking",
      "Other",
    ],
  },
  {
    name: "description",
    label: "Brief description of your situation",
    type: "textarea",
    required: true,
    placeholder:
      "Tell us a little about the warrior, the support needed, and any urgent details. The more we know, the better we can help.",
    full: true,
  },
];

const nextSteps = [
  {
    icon: "check" as const,
    title: "We receive your request",
    text: "Your registration lands securely with our care team. You'll get an acknowledgement within 24 hours.",
  },
  {
    icon: "users" as const,
    title: "A coordinator reviews your case",
    text: "We assess the support needed and, where helpful, may call to understand the situation more fully.",
  },
  {
    icon: "stethoscope" as const,
    title: "We match you to support",
    text: "You're connected to the right program, partner hospital, counsellor or fund — with clear next steps.",
  },
  {
    icon: "heart" as const,
    title: "We stay with you",
    text: "Support isn't a one-off. We follow up, adjust and keep you linked to community for the long term.",
  },
];

export default function GetSupportPage() {
  return (
    <>
      <PageHero
        image={img.nurse.src}
        imageAlt={img.nurse.alt}
        breadcrumb="Home / Get Support"
        eyebrow="Get Support"
        title="You don't have to face sickle cell alone"
        intro="Whether you're a warrior, a parent or a carer, SSCN is here. Register as a beneficiary to access healthcare, emergency help, counselling, financial aid and a community that understands."
      />

      {/* ---------------- Reassuring intro ---------------- */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="You are welcome here"
              title="Real help, offered with dignity"
              intro="Reaching out can be hard. We make it simple — and we treat every warrior and family with compassion, confidentiality and respect."
            />
            <p className="mt-5 leading-relaxed text-muted">
              Support Sickle Cell Nigeria walks alongside thousands of warriors
              and families every year. There is no &ldquo;too small&rdquo; a
              request and no judgement — only people ready to help. Registering
              takes a few minutes and opens the door to our full range of care,
              from a single medical referral to long-term support.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { icon: "shield" as const, label: "Confidential & secure" },
                { icon: "globe" as const, label: "All 36 states & FCT" },
                { icon: "heart" as const, label: "Free to register" },
              ].map((b) => {
                const BadgeIcon = Icon[b.icon];
                return (
                  <div
                    key={b.label}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-grey/40 p-4"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <BadgeIcon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-navy">
                      {b.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light p-10 text-white shadow-2xl">
              <div className="absolute inset-0 bg-dotgrid opacity-30" />
              <div className="relative">
                <Icon.quote className="h-10 w-10 text-white/40" />
                <p className="mt-4 text-xl font-bold leading-snug">
                  &ldquo;SSCN covered my son&apos;s medication when we had
                  nothing left. Today he is back in school and thriving.&rdquo;
                </p>
                <p className="mt-5 text-sm text-white/70">
                  — A parent we supported, Enugu
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Support types ---------------- */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Ways We Can Help"
          title="The support available to you"
          intro="From the first diagnosis to everyday life, here's how SSCN stands with warriors and families."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportTypes.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <IconCard icon={s.icon} title={s.title}>
                {s.text}
              </IconCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Registration form ---------------- */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Register"
              title="Patient / Beneficiary Registration"
              intro="Complete this short form to register the warrior who needs support. Everything you share is treated as strictly confidential."
            />
            <div className="mt-6 rounded-2xl border border-line bg-grey/40 p-5 text-sm text-muted">
              <p className="flex items-start gap-2.5">
                <Icon.shield className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>
                  Registering on behalf of someone else? That&apos;s welcome —
                  just enter the warrior&apos;s details and we&apos;ll follow up
                  with you.
                </span>
              </p>
              <p className="mt-3 flex items-start gap-2.5">
                <Icon.phone className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>
                  In an active medical emergency? Don&apos;t wait for the form —
                  call our hotline below right now.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SmartForm
              fields={registrationFields}
              submitLabel="Submit registration"
              successTitle="Registration received"
              successText="Thank you. Our care team has your details and will reach out within 24 hours with your next steps. If this is urgent, please call our emergency hotline."
              note={
                <p>
                  By submitting, you consent to SSCN contacting you about your
                  request. Your information is kept private and never shared
                  without your permission.
                </p>
              }
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Emergency band ---------------- */}
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  Emergency? We respond 24/7
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                  In a crisis right now? Reach us immediately.
                </h2>
                <p className="mt-3 text-white/85">
                  If a warrior is in an active sickle cell crisis, call our
                  emergency line or message us on WhatsApp. Our response team is
                  on standby around the clock.
                </p>
              </div>

              <div className="flex w-full max-w-sm flex-col gap-4 lg:w-auto">
                <a
                  href={`tel:${site.emergency.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 text-left shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon.phone className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-muted">
                      Emergency Hotline
                    </span>
                    <span className="block text-lg font-extrabold text-navy">
                      {site.emergency}
                    </span>
                  </span>
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 text-left ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white text-primary">
                    <Icon.chat className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-white/70">
                      WhatsApp
                    </span>
                    <span className="block text-lg font-extrabold text-white">
                      {site.whatsapp}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- What happens next ---------------- */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="After You Register"
          title="What happens next"
          intro="Here's exactly what to expect once you've reached out to us."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nextSteps.map((s, i) => {
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

        <div className="mt-12 text-center">
          <p className="text-muted">
            Have a question before you register?
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button href="/contact" icon>
              Contact our team
            </Button>
            <Button href="/faqs" variant="outline">
              Read the FAQs
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
