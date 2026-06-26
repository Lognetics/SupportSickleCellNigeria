import type { Metadata } from "next";
import { img } from "@/lib/images";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { SmartForm, type Field } from "@/components/form";
import { Accordion } from "@/components/accordion";
import { Icon, type IconName } from "@/components/icons";
import {
  Button,
  Eyebrow,
  Badge,
  SectionHeading,
  Section,
  CheckList,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Blood Donation | Support Sickle Cell Nigeria",
  description:
    "One pint of blood can carry a sickle cell warrior through their worst crisis. Become a voluntary donor, find a nearby blood centre and join an SSCN donation drive.",
};

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT — Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const donorFields: Field[] = [
  { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "e.g. Aisha Bello" },
  { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@email.com" },
  { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+234 ..." },
  {
    name: "bloodGroup",
    label: "Blood group",
    type: "select",
    required: true,
    placeholder: "Select your blood group",
    options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"],
  },
  {
    name: "state",
    label: "State",
    type: "select",
    required: true,
    placeholder: "Select your state",
    options: states,
  },
  { name: "preferredDate", label: "Preferred donation date", type: "date", required: true },
];

const bloodStats = [
  { value: 90, suffix: "%", label: "of warriors need transfusions during a severe crisis" },
  { value: 1, suffix: " pint", label: "can save up to three lives" },
  { value: 56, suffix: " days", label: "between safe whole-blood donations" },
  { value: 500, suffix: "+", label: "voluntary donors mobilised by SSCN" },
];

const canDonate = [
  "Aged 18 to 65 years",
  "Weigh more than 50kg (about 110lbs)",
  "In good general health on the day of donation",
  "Haemoglobin level within the healthy range (checked on-site)",
  "At least 56 days since your last whole-blood donation",
  "Well-hydrated and have eaten a meal beforehand",
];

const cannotDonate = [
  "Living with sickle cell disorder (SS, SC) yourself",
  "Currently pregnant, breastfeeding or recently gave birth",
  "Feeling unwell, feverish or fighting an active infection",
  "Recently received a tattoo or piercing (within the last 6 months)",
  "Severely anaemic or below the minimum weight",
  "On certain medications — please check with our screening team",
];

const drives: { title: string; date: string; location: string; tone: "red" | "navy"; status: string; icon: IconName }[] = [
  { title: "World Donor Day Mega Drive", date: "Sat, 11 Jul 2026", location: "Eko Hotel, Victoria Island, Lagos", tone: "red", status: "Open", icon: "droplet" },
  { title: "Campus Blood Challenge", date: "Wed, 22 Jul 2026", location: "University of Ibadan, Oyo", tone: "navy", status: "Registering", icon: "graduation" },
  { title: "Abuja Corporate Drive", date: "Fri, 7 Aug 2026", location: "Central Business District, Abuja", tone: "red", status: "Open", icon: "users" },
  { title: "Kano Community Donation Day", date: "Sun, 23 Aug 2026", location: "Murtala Muhammed Specialist Hospital, Kano", tone: "navy", status: "Coming soon", icon: "heart" },
];

const centres = [
  { name: "National Blood Service Centre", city: "Abuja (FCT)", hours: "Mon–Sat, 8am–5pm", phone: "+234 911 000 0001" },
  { name: "Lagos State Blood Transfusion Service", city: "Yaba, Lagos", hours: "Mon–Sat, 8am–6pm", phone: "+234 911 000 0002" },
  { name: "UCH Blood Bank", city: "Ibadan, Oyo", hours: "Mon–Fri, 8am–4pm", phone: "+234 911 000 0003" },
  { name: "Aminu Kano Teaching Hospital Bank", city: "Kano", hours: "Mon–Sat, 9am–5pm", phone: "+234 911 000 0004" },
  { name: "UNTH Donor Centre", city: "Enugu", hours: "Mon–Fri, 8am–4pm", phone: "+234 911 000 0005" },
  { name: "Rivers State Blood Service", city: "Port Harcourt", hours: "Mon–Sat, 8am–5pm", phone: "+234 911 000 0006" },
];

const bloodFaqs = [
  {
    q: "Does donating blood hurt or weaken me?",
    a: "You'll feel a brief pinch when the needle goes in, but the donation itself is painless and takes about 8–10 minutes. Your body replaces the fluid within 24 hours and the red cells within a few weeks. Most donors feel completely normal after a short rest and a snack.",
  },
  {
    q: "How often can I donate?",
    a: "Healthy adults can safely donate whole blood every 56 days — that's roughly every two months. Our screening team confirms your eligibility each time before you donate, so there's never any guesswork.",
  },
  {
    q: "Why do sickle cell warriors need so much blood?",
    a: "During a severe crisis, sickled cells block blood flow and the body struggles to carry oxygen. Transfusions and, in some cases, exchange transfusions replace those cells with healthy ones — relieving pain, preventing organ damage and sometimes saving a life outright.",
  },
  {
    q: "Is the donation process safe and hygienic?",
    a: "Completely. Every needle, bag and collection set is sterile and single-use, and all donations are screened for infections before being released. You cannot contract any disease by donating blood.",
  },
  {
    q: "Can I donate if I don't know my blood group?",
    a: "Yes. Just select 'Unknown' when you register — the centre will type your blood for free as part of the donation. You'll leave knowing your blood group and having helped a warrior in need.",
  },
];

export default function BloodDonationPage() {
  return (
    <>
      <PageHero
        image={img.bloodDonation.src}
        imageAlt={img.bloodDonation.alt}
        eyebrow="Blood Donation"
        title="A pint of blood can carry a warrior through their darkest hour."
        intro="For people living with sickle cell, a timely transfusion is often the line between crisis and recovery. Roll up your sleeve and help us keep that line unbroken."
        breadcrumb="Home / Blood Donation"
      />

      {/* ---------------- Why blood matters ---------------- */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Blood is medicine for sickle cell warriors"
          intro="When a crisis hits, there is no synthetic substitute. The only source of life-saving blood is a willing donor — someone exactly like you."
        />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line lg:grid-cols-4">
          {bloodStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="bg-white p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium leading-snug text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Become a donor form ---------------- */}
      <Section tone="grey">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Become a Donor</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
              Pledge a pint. Save a warrior.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Register your interest below and our donor team will connect you to the
              nearest blood centre or upcoming drive. It only takes a minute to sign up —
              and roughly an hour to change someone&apos;s life.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: "calendar" as const, t: "Pick a date that works", d: "We'll match you to a drive or centre near you." },
                { icon: "shield" as const, t: "Free, safe health screening", d: "Including a complimentary blood-group test." },
                { icon: "heart" as const, t: "Direct, lasting impact", d: "Your donation goes straight to warriors in care." },
              ].map((b) => {
                const C = Icon[b.icon];
                return (
                  <div key={b.t} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <C className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-navy">{b.t}</h3>
                      <p className="text-sm text-muted">{b.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SmartForm
              fields={donorFields}
              submitLabel="Register as a donor"
              successTitle="You're a lifesaver!"
              successText="Thank you for pledging to donate. Our donor team will reach out shortly with your nearest centre and the next available drive."
              note="By registering you agree to be contacted about donation opportunities. Final eligibility is confirmed by a health screening at the centre."
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Eligibility ---------------- */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Eligibility"
          title="Can you donate? Most people can."
          intro="A few simple criteria keep both you and the warrior who receives your blood safe. Here's a quick guide — the final check happens at the centre."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-grey/40 p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon.check className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-navy">You can donate if you...</h3>
              </div>
              <div className="mt-6">
                <CheckList items={canDonate} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-line bg-grey/40 p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon.shield className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-navy">Please hold off if you...</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {cannotDonate.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-navy/10 text-navy">
                      <Icon.close className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Campaign calendar / drives ---------------- */}
      <Section tone="grey">
        <SectionHeading
          align="left"
          eyebrow="Campaign Calendar"
          title="Upcoming blood drives"
          intro="Join us at one of these donation drives. Walk-ins are welcome, but registering ahead helps us prepare for you."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {drives.map((d, i) => {
            const C = Icon[d.icon];
            return (
              <Reveal key={d.title} delay={(i % 4) * 70}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <C className="h-6 w-6" />
                    </span>
                    <Badge tone={d.tone}>{d.status}</Badge>
                  </div>
                  <h3 className="mt-5 text-base font-bold leading-snug text-navy">
                    {d.title}
                  </h3>
                  <div className="mt-3 flex-1 space-y-2 text-xs font-semibold text-navy">
                    <p className="inline-flex items-center gap-1.5">
                      <Icon.calendar className="h-4 w-4 text-primary" /> {d.date}
                    </p>
                    <p className="inline-flex items-start gap-1.5">
                      <Icon.pin className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span className="font-medium text-muted">{d.location}</span>
                    </p>
                  </div>
                  <Button href="/contact" size="sm" variant="outline" className="mt-5">
                    Reserve a slot
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------- Nearest blood centres ---------------- */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Find a Centre"
          title="Nearest blood centres"
          intro="Prefer to donate on your own schedule? Walk into any of these accredited partner centres across Nigeria."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {centres.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 70}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-navy/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <Icon.pin className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{c.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{c.city}</p>
                <div className="mt-3 flex-1 space-y-1.5 text-sm text-muted">
                  <p className="inline-flex items-center gap-2">
                    <Icon.calendar className="h-4 w-4 text-primary/70" /> {c.hours}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Icon.phone className="h-4 w-4 text-primary/70" /> {c.phone}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Corporate blood drives ---------------- */}
      <Section tone="grey">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-2">
            <div className="relative flex min-h-72 items-center justify-center bg-gradient-to-br from-navy to-navy-light p-10">
              <div className="absolute inset-0 bg-dotgrid opacity-30" />
              <div className="relative text-center text-white">
                <Icon.users className="mx-auto h-14 w-14" />
                <p className="mt-4 text-2xl font-bold">One company. Hundreds of pints.</p>
                <p className="mt-2 text-white/80">Your team can save dozens of warriors in a single afternoon.</p>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <Eyebrow>Corporate Drives</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl text-balance">
                Host a blood drive at your workplace
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Turn your team&apos;s goodwill into life-saving action. SSCN brings the
                mobile collection unit, trained phlebotomists and screening kits straight
                to your office — you simply provide the willing arms. It&apos;s one of the
                most powerful and visible CSR commitments a company can make.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink">
                {[
                  "On-site mobile collection — zero disruption to your day",
                  "Full health screening and free blood-group testing for staff",
                  "Branded recognition and an impact report after the drive",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Icon.check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/partners" icon>
                  Organise a corporate drive
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Donor recognition ---------------- */}
      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Icon.star className="h-4 w-4" /> Donor Honour Roll
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-balance">
                To every donor — thank you for being a quiet hero
              </h2>
              <p className="mt-4 text-white/80">
                Behind every recovered warrior is a stranger who rolled up their sleeve.
                We celebrate our donors with badges, certificates and a place on our annual
                honour roll — because giving life deserves to be remembered.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { icon: "droplet" as const, t: "First-Pint Hero", d: "Recognising every brave first-time donor." },
              { icon: "spark" as const, t: "Lifeline Champion", d: "For donors who give three or more times a year." },
              { icon: "shield" as const, t: "Guardian Donor", d: "Our most committed, long-standing lifesavers." },
            ].map((b, i) => {
              const C = Icon[b.icon];
              return (
                <Reveal key={b.t} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-3xl bg-white/10 p-7 ring-1 ring-white/15">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary">
                      <C className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-white">{b.t}</h3>
                    <p className="mt-2 text-sm text-white/80">{b.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Donor FAQs"
          title="Your questions, answered"
          intro="New to donating? Here's everything you need to feel confident before you give."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={bloodFaqs} />
        </div>
      </Section>

      {/* ---------------- Final CTA band ---------------- */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Icon.droplet className="mx-auto h-12 w-12 text-primary-light" />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl text-balance">
                Somewhere, a warrior is waiting for your blood
              </h2>
              <p className="mt-4 text-white/80">
                It costs you an hour. It can give someone their whole life back. Register
                today and become the reason a warrior makes it home.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="white" size="lg" icon>
                  Become a donor
                </Button>
                <Button
                  href="/events"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  See upcoming drives
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
