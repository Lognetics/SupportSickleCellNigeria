import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SmartForm, type Field } from "@/components/form";
import { Icon, type IconName } from "@/components/icons";
import { Badge, SectionHeading, Section, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us | Support Sickle Cell Nigeria (SSCN)",
  description:
    "Reach Support Sickle Cell Nigeria — call, email, WhatsApp or visit our offices in Abuja, Lagos and across the country. Get support, volunteer, partner or send us a message.",
};

const contactDetails: { icon: IconName; label: string; value: string; href?: string }[] = [
  {
    icon: "pin",
    label: "Head Office",
    value: site.address,
  },
  {
    icon: "phone",
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: "mail",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "heart",
    label: "Emergency Line (24/7)",
    value: site.emergency,
    href: `tel:${site.emergency.replace(/\s+/g, "")}`,
  },
  {
    icon: "chat",
    label: "WhatsApp",
    value: site.whatsapp,
    href: `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`,
  },
];

const formFields: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your full name" },
  { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@example.com" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 800 000 0000" },
  {
    name: "subject",
    label: "Subject",
    type: "select",
    required: true,
    placeholder: "What is this about?",
    options: [
      "General Enquiry",
      "Get Support",
      "Volunteering",
      "Partnership",
      "Media",
      "Donation",
    ],
  },
  {
    name: "message",
    label: "Your message",
    type: "textarea",
    required: true,
    placeholder: "Tell us how we can help…",
  },
];

const offices = [
  {
    city: "Abuja — National HQ",
    address: "Plot 12, Health Way, Central Business District, Abuja, FCT",
    detail: "Mon–Fri · 9:00am – 5:00pm",
    tag: "Headquarters",
  },
  {
    city: "Lagos Regional Office",
    address: "24 Adeola Odeku Street, Victoria Island, Lagos State",
    detail: "Mon–Fri · 9:00am – 5:00pm",
    tag: "South-West",
  },
  {
    city: "Kano Liaison Office",
    address: "15 Murtala Mohammed Way, Fagge, Kano State",
    detail: "Mon–Fri · 9:00am – 4:00pm",
    tag: "North-West",
  },
  {
    city: "Enugu Liaison Office",
    address: "8 Okpara Avenue, Enugu, Enugu State",
    detail: "Mon–Fri · 9:00am – 4:00pm",
    tag: "South-East",
  },
];

const socials: { icon: IconName; label: string; href: string }[] = [
  { icon: "globe", label: "Facebook", href: site.socials.facebook },
  { icon: "spark", label: "Instagram", href: site.socials.instagram },
  { icon: "megaphone", label: "Twitter / X", href: site.socials.twitter },
  { icon: "star", label: "YouTube", href: site.socials.youtube },
  { icon: "users", label: "LinkedIn", href: site.socials.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We are here for every warrior — let's talk"
        intro="Whether you need support, want to volunteer, hope to partner with us or simply have a question, our team is ready to help."
        breadcrumb="Home / Contact"
      />

      {/* Details + form */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="Reach out, any way you like"
              intro="Call, email or message us — and we'll respond as quickly as we can during working hours."
            />

            <div className="mt-8 space-y-4">
              {contactDetails.map((c) => {
                const DetailIcon = Icon[c.icon];
                const body = (
                  <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-primary/30">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <DetailIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted">
                        {c.label}
                      </p>
                      <p className="mt-1 font-semibold text-navy">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <Link key={c.label} href={c.href} className="block">
                    {body}
                  </Link>
                ) : (
                  <div key={c.label}>{body}</div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-navy p-5 text-white">
              <Icon.calendar className="h-6 w-6 flex-none text-primary-light" />
              <div>
                <p className="text-sm font-bold">Working Hours</p>
                <p className="text-sm text-white/80">
                  Monday – Friday · 9:00am – 5:00pm (WAT)
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-muted">
                Fill in the form and the right team will get back to you. Fields
                marked with <span className="text-primary">*</span> are required.
              </p>
            </div>
            <SmartForm
              fields={formFields}
              submitLabel="Send Message"
              successTitle="Message received!"
              successText="Thank you for reaching out to SSCN. Our team will respond within two working days."
              note="By submitting, you agree to be contacted by SSCN regarding your enquiry. We never share your details."
            />
          </Reveal>
        </div>
      </Section>

      {/* Office locations */}
      <Section tone="grey">
        <SectionHeading
          eyebrow="Our Offices"
          title="Find us across Nigeria"
          intro="From our Abuja headquarters to regional liaison offices, we're closer than you think."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={(i % 4) * 80}>
              <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon.pin className="h-6 w-6" />
                </span>
                <div className="mt-5">
                  <Badge tone="navy">{o.tag}</Badge>
                </div>
                <h3 className="mt-3 text-lg font-bold text-navy">{o.city}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {o.address}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
                  <Icon.calendar className="h-4 w-4 text-primary" /> {o.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Emergency hotline band */}
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-dotgrid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex items-center gap-5">
                <span className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-white text-primary">
                  <Icon.heart className="h-8 w-8" />
                </span>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    24/7 Crisis Support
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Warrior in crisis? Call our emergency hotline now.
                  </h2>
                </div>
              </div>
              <Link
                href={`tel:${site.emergency.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-lg font-extrabold text-primary shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Icon.phone className="h-5 w-5" />
                {site.emergency}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Visit Us"
          title="Our headquarters in Abuja"
          intro="Plot 12, Health Way, Central Business District, Abuja — the home of the SSCN movement."
        />
        <Reveal className="mt-12">
          <div className="relative flex h-72 flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light text-center sm:h-96">
            <div className="absolute inset-0 bg-dotgrid opacity-30" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
              <Icon.pin className="h-8 w-8" />
            </span>
            <p className="relative mt-4 text-lg font-bold text-white">
              Interactive map
            </p>
            <p className="relative mt-1 max-w-sm text-sm text-white/70">
              A live, interactive map of our office locations will appear here.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Social links */}
      <Section tone="grey">
        <div className="rounded-3xl border border-line bg-white p-8 text-center sm:p-12">
          <SectionHeading
            eyebrow="Stay Connected"
            title="Follow SSCN online"
            intro="Join the conversation, celebrate our warriors and never miss an update across our social channels."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {socials.map((s) => {
              const SocialIcon = Icon[s.icon];
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <SocialIcon className="h-4 w-4" />
                  </span>
                  {s.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
