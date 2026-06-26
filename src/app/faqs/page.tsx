import type { Metadata } from "next";
import { img } from "@/lib/images";
import { faqs } from "@/lib/site";
import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icons";
import { Button, SectionHeading, Section, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Support Sickle Cell Nigeria",
  description:
    "Answers to common questions about sickle cell, SSCN programmes, donations, volunteering, blood donation and emergency support across Nigeria.",
};

type Category = {
  icon: IconName;
  title: string;
  intro: string;
  items: { q: string; a: string }[];
};

const categories: Category[] = [
  {
    icon: "users",
    title: "General",
    intro: "About SSCN, our mission and how we work across Nigeria.",
    items: [
      {
        q: "Where does SSCN operate?",
        a: "We work across all 36 states and the Federal Capital Territory through state representatives, partner hospitals and community outreach teams — in both urban and rural areas.",
      },
      {
        q: "Is SSCN a registered non-profit?",
        a: "Yes. SSCN is a registered non-profit organisation. We publish annual impact and financial reports so our community can see exactly how support is used.",
      },
      {
        q: "How can I stay updated on your work?",
        a: "Subscribe to our newsletter on the Contact page and follow us on social media for events, programmes and warrior stories.",
      },
    ],
  },
  {
    icon: "stethoscope",
    title: "Medical",
    intro: "Understanding sickle cell, genotype and everyday care.",
    items: [
      {
        q: "What is sickle cell disorder?",
        a: "Sickle cell disorder is an inherited blood condition where red blood cells become rigid and crescent-shaped, blocking blood flow and causing pain crises, anaemia and other complications. With good care, warriors live full, hopeful lives.",
      },
      {
        q: "What does my genotype mean?",
        a: "Your genotype shows the haemoglobin you inherited. AA carries no sickle gene, AS is a carrier (trait), and SS means sickle cell disorder. Knowing yours — and your partner's — helps prevent new cases.",
      },
      {
        q: "How can a pain crisis be prevented?",
        a: "Staying hydrated and warm, avoiding extreme stress and exertion, taking prescribed medication such as folic acid, and attending regular check-ups all lower the risk of a crisis.",
      },
      {
        q: "Is there a cure for sickle cell?",
        a: "Bone marrow (stem cell) transplant can cure some patients, and new gene therapies are emerging. For most warriors, the focus is on excellent ongoing management to stay healthy and crisis-free.",
      },
    ],
  },
  {
    icon: "gift",
    title: "Donation",
    intro: "How giving works and where your money goes.",
    items: [
      {
        q: "How are my donations used?",
        a: "Donations fund healthcare support, medication, emergency relief, awareness campaigns and research. We publish annual reports for full financial transparency.",
      },
      {
        q: "Can I make a recurring donation?",
        a: "Yes. On the Donate page you can choose a one-off gift or set up a monthly contribution that provides steady, predictable support for warriors.",
      },
      {
        q: "Will I receive a receipt?",
        a: "Every donation is acknowledged with a receipt by email. Reach out via the Contact page if you need one re-sent or require additional documentation.",
      },
    ],
  },
  {
    icon: "heart",
    title: "Volunteer",
    intro: "Lending your time, skills and voice to the cause.",
    items: [
      {
        q: "Who can volunteer with SSCN?",
        a: "Anyone with a willing heart. We have roles for medical professionals, students, corporate teams, event helpers and community advocates across the country.",
      },
      {
        q: "How do I sign up to volunteer?",
        a: "Visit the Volunteer page, choose the role that fits you and complete the registration form. Our team will follow up with onboarding and the next opportunity near you.",
      },
      {
        q: "Do volunteers need experience?",
        a: "No prior experience is required for most roles. We provide orientation and ongoing guidance so you feel confident and supported.",
      },
    ],
  },
  {
    icon: "spark",
    title: "Programs",
    intro: "Applying to and benefiting from our support programmes.",
    items: [
      {
        q: "How do I register as a beneficiary?",
        a: "Visit the Get Support page and complete the patient registration form. Our team reviews every request and follows up with next steps and referrals.",
      },
      {
        q: "What kinds of support are available?",
        a: "Programmes include healthcare and medication support, free genotype testing, counselling, school and education support, and emergency relief — depending on need and eligibility.",
      },
      {
        q: "Is there a cost to join a programme?",
        a: "Our support programmes are offered free of charge to eligible warriors and families. Where partner services involve a fee, we work to subsidise or connect you to free options.",
      },
    ],
  },
  {
    icon: "shield",
    title: "Emergency",
    intro: "What to do when a crisis or urgent need arises.",
    items: [
      {
        q: "What should I do during a pain crisis?",
        a: "Keep warm, drink fluids, take prescribed pain relief and rest. If pain is severe, breathing is difficult, or there is a high fever, go to the nearest hospital immediately and call our helpline.",
      },
      {
        q: "Is there a 24/7 helpline?",
        a: "Yes. Our Warrior Helpline operates around the clock for crisis guidance, referrals and caregiver support. You will find the number on our Resources and Contact pages.",
      },
      {
        q: "How can I find the nearest treatment centre?",
        a: "The Healthcare Directory on our Resources page lists hospitals, blood banks and emergency contacts across Nigeria. Always call ahead to confirm availability.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        image={img.counselling.src}
        imageAlt={img.counselling.alt}
        eyebrow="FAQs"
        title="Your questions, answered"
        intro="Everything you might want to know about sickle cell, SSCN and how to get involved. Can't find it here? We're one message away."
        breadcrumb="Home / FAQs"
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Popular Questions"
          title="Start here"
          intro="The questions our community asks most often."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      <Section tone="grey">
        <SectionHeading
          eyebrow="Browse by topic"
          title="More answers, grouped for you"
          intro="Pick a category to find the detail you need."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-12">
          {categories.map((cat) => {
            const CatIcon = Icon[cat.icon];
            return (
              <Reveal key={cat.title}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <CatIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted">{cat.intro}</p>
                    </div>
                  </div>
                  <Accordion items={cat.items} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
            <Icon.chat className="h-7 w-7" />
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl text-balance">
            Didn&apos;t find your answer?
          </h2>
          <p className="mt-4 text-white/80">
            Our team is here to help — whether it&apos;s a medical question, a
            programme enquiry or an urgent need. Reach out and we&apos;ll respond
            with care.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="white" size="lg" icon>
              Contact us
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
