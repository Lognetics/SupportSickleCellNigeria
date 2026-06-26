import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Accordion } from "@/components/accordion";
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
  title:
    "Understanding Sickle Cell Disease | Genotype, Inheritance & Care — SSCN",
  description:
    "Nigeria's largest plain-language guide to sickle cell disease: what it is, genotypes (AA, AS, SS, SC), inheritance and genotype-pairing risk, signs and symptoms, diagnosis, complications, treatment, living well, prevention and free genotype testing. Trusted, accurate and reassuring information from Support Sickle Cell Nigeria.",
  keywords: [
    "sickle cell",
    "sickle cell disease",
    "genotype test",
    "genotype compatibility",
    "AS genotype",
    "SS genotype",
    "sickle cell inheritance",
    "sickle cell Nigeria",
    "hydroxyurea",
    "haemoglobin",
    "newborn screening",
    "premarital genotype counselling",
  ],
  alternates: { canonical: "/understanding-sickle-cell" },
};

/* ---------------- Table of contents ---------------- */

const toc: { id: string; label: string }[] = [
  { id: "what-is", label: "What is Sickle Cell?" },
  { id: "types", label: "Types & Traits" },
  { id: "genotype", label: "Genotype & Inheritance" },
  { id: "symptoms", label: "Signs & Symptoms" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "complications", label: "Complications" },
  { id: "treatment", label: "Treatment" },
  { id: "living", label: "Living Well" },
  { id: "prevention", label: "Prevention & Marriage" },
  { id: "myths", label: "Myths vs Facts" },
  { id: "resources", label: "Resources" },
  { id: "faq", label: "FAQ" },
];

export default function UnderstandingSickleCellPage() {
  return (
    <>
      <PageHero
        eyebrow="Nigeria's largest sickle cell resource"
        title="Understanding Sickle Cell Disease"
        intro="A clear, accurate and reassuring guide to what sickle cell is, how it is inherited, how it is diagnosed and treated, and how every warrior can live a full, healthy life — written in plain language for Nigerian families."
        breadcrumb="Home / Understanding Sickle Cell"
      />

      <TableOfContents />

      <WhatIsSection />
      <TypesSection />
      <GenotypeSection />
      <SymptomsSection />
      <DiagnosisSection />
      <ComplicationsSection />
      <TreatmentSection />
      <LivingWellSection />
      <PreventionSection />
      <MythsSection />
      <ResourcesSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}

/* ---------------- On this page ---------------- */

function TableOfContents() {
  return (
    <div className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-x">
        <nav
          aria-label="On this page"
          className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <span className="flex flex-none items-center gap-1.5 pr-2 text-xs font-bold uppercase tracking-wider text-muted">
            <Icon.book className="h-4 w-4 text-primary" /> On this page
          </span>
          {toc.map((t) => (
            <Link
              key={t.id}
              href={`#${t.id}`}
              className="flex-none rounded-full px-3.5 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-primary-soft hover:text-primary"
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ---------------- 1. What is sickle cell ---------------- */

function WhatIsSection() {
  const facts: { icon: IconName; title: string; text: string }[] = [
    {
      icon: "droplet",
      title: "It starts with haemoglobin",
      text: "Haemoglobin is the protein inside red blood cells that carries oxygen from your lungs to every organ. A small change in its genetic recipe produces an abnormal form called haemoglobin S.",
    },
    {
      icon: "dna",
      title: "Cells change shape",
      text: "When haemoglobin S gives up its oxygen, it clumps together and stiffens the cell. Soft, round, flexible discs turn into hard, sticky crescent (sickle) shapes.",
    },
    {
      icon: "heart",
      title: "Blood flow is blocked",
      text: "Sickled cells snag in small blood vessels, blocking oxygen-rich blood from reaching tissues. This causes the pain, anaemia and organ stress that define the disease.",
    },
  ];
  return (
    <Section tone="white" className="scroll-mt-20">
      <span id="what-is" className="block -mt-20 pt-20" aria-hidden />
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>The basics</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
            What is sickle cell disease?
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Sickle cell disease (SCD) is an inherited blood disorder, not an
            illness you can catch from another person. It is present from birth
            and is passed down through families in the genes — the instructions
            we inherit from both parents.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            In healthy blood, red cells are smooth, round and flexible, so they
            glide easily through even the tiniest vessels. In sickle cell
            disease, an inherited change makes the cells produce abnormal{" "}
            <strong className="text-navy">haemoglobin S</strong>. Under low
            oxygen, stress, cold or dehydration, these cells become rigid and
            curved like a crescent or a farmer&apos;s sickle — which is where the
            name comes from.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            These sickled cells break down quickly (causing anaemia) and get
            stuck in blood vessels (causing painful episodes called crises).
            Nigeria has the largest number of people living with sickle cell in
            the world, which is exactly why understanding it — and getting
            tested — matters so much. The encouraging news: with the right care,
            warriors live long, active and meaningful lives.
          </p>
          <div className="mt-6">
            <Button href="#genotype" icon>
              See how it is inherited
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {facts.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <IconCard icon={f.icon} title={f.title}>
                {f.text}
              </IconCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- 2. Types & traits ---------------- */

function TypesSection() {
  const disease: { code: string; name: string; text: string }[] = [
    {
      code: "SS",
      name: "Sickle Cell Anaemia (Hb SS)",
      text: "The most common and usually most severe form. The child inherits a haemoglobin S gene from each parent. This is what most people mean by \"sickle cell disease\".",
    },
    {
      code: "SC",
      name: "Haemoglobin SC Disease",
      text: "A haemoglobin S gene from one parent and a haemoglobin C gene from the other. Often milder than SS, but still needs care and can cause serious complications.",
    },
    {
      code: "Sβ",
      name: "S–Beta Thalassaemia (Sβ⁺ / Sβ⁰)",
      text: "A haemoglobin S gene combined with a beta-thalassaemia gene. Sβ⁰ behaves much like SS; Sβ⁺ is usually milder. Both are genuine forms of sickle cell disease.",
    },
  ];
  const traits: { code: string; name: string; text: string }[] = [
    {
      code: "AS",
      name: "Sickle Cell Trait (Carrier)",
      text: "One normal gene (A) and one sickle gene (S). People with AS are healthy carriers — they do not have the disease but can pass the S gene to their children.",
    },
    {
      code: "AC",
      name: "Haemoglobin C Trait (Carrier)",
      text: "One normal gene (A) and one haemoglobin C gene. Like AS, this is a healthy carrier state that can be passed on to children.",
    },
  ];
  return (
    <Section tone="grey" className="scroll-mt-20">
      <span id="types" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Types & traits"
        title="The main types of sickle cell"
        intro="Sickle cell is a family of conditions. Disease forms (you have sickle cell) are different from trait forms (you are a healthy carrier). Knowing the difference is the key to understanding your own results."
      />

      <Reveal>
        <h3 className="mt-12 text-xl font-bold text-navy">
          Disease forms — the person has sickle cell
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {disease.map((d, i) => (
          <Reveal key={d.code} delay={i * 90}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-white">
                {d.code}
              </span>
              <h4 className="mt-4 text-lg font-bold text-navy">{d.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-14 text-xl font-bold text-navy">
          Trait forms — the person is a healthy carrier
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {traits.map((t, i) => (
          <Reveal key={t.code} delay={i * 90}>
            <article className="flex h-full items-start gap-5 rounded-3xl border border-line bg-white p-6">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-navy text-lg font-extrabold text-white">
                {t.code}
              </span>
              <div>
                <h4 className="text-lg font-bold text-navy">{t.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary-soft/60 p-5">
          <Icon.spark className="mt-0.5 h-5 w-5 flex-none text-primary" />
          <p className="text-sm leading-relaxed text-ink">
            <strong className="text-navy">Good to know:</strong> A normal result
            is <strong className="text-navy">AA</strong> (two normal genes). If
            you are <strong className="text-navy">AS</strong> or{" "}
            <strong className="text-navy">AC</strong>, you are perfectly healthy
            — but your genotype matters a great deal when choosing who to have
            children with.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- 3. Genotype & inheritance ---------------- */

type Outcome = "AA" | "AS" | "SS" | "AC" | "SC" | "CC";

const outcomeStyle: Record<Outcome, string> = {
  AA: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  AS: "bg-amber-50 text-amber-700 ring-amber-200",
  AC: "bg-amber-50 text-amber-700 ring-amber-200",
  SS: "bg-primary-soft text-primary ring-primary/30",
  SC: "bg-primary-soft text-primary ring-primary/30",
  CC: "bg-amber-50 text-amber-700 ring-amber-200",
};

/** A Punnett-style 2x2 grid for two parent genotypes. */
function PunnettGrid({
  parentA,
  parentB,
}: {
  parentA: [string, string];
  parentB: [string, string];
}) {
  const norm = (x: string, y: string) =>
    [x, y].sort((a, b) => (a === "A" ? -1 : b === "A" ? 1 : 0)).join("") as Outcome;
  return (
    <div className="inline-grid grid-cols-3 gap-1.5 text-center">
      <span aria-hidden />
      {parentB.map((g, i) => (
        <span
          key={`top-${i}`}
          className="flex h-9 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white"
        >
          {g}
        </span>
      ))}
      {parentA.map((a, ri) => (
        <FragmentRow key={`row-${ri}`} a={a} parentB={parentB} norm={norm} />
      ))}
    </div>
  );
}

function FragmentRow({
  a,
  parentB,
  norm,
}: {
  a: string;
  parentB: [string, string];
  norm: (x: string, y: string) => Outcome;
}) {
  return (
    <>
      <span className="flex h-9 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
        {a}
      </span>
      {parentB.map((b, ci) => {
        const o = norm(a, b);
        return (
          <span
            key={ci}
            className={`flex h-9 items-center justify-center rounded-lg text-sm font-bold ring-1 ${outcomeStyle[o]}`}
          >
            {o}
          </span>
        );
      })}
    </>
  );
}

function GenotypeSection() {
  const pairings: {
    a: string;
    b: string;
    parentA: [string, string];
    parentB: [string, string];
    result: { label: string; pct: string; tone: Outcome }[];
    risk: "none" | "carrier" | "disease";
    note: string;
  }[] = [
    {
      a: "AA",
      b: "AA",
      parentA: ["A", "A"],
      parentB: ["A", "A"],
      result: [{ label: "AA", pct: "100%", tone: "AA" }],
      risk: "none",
      note: "No risk. Every child is AA (completely normal). A safe match.",
    },
    {
      a: "AA",
      b: "AS",
      parentA: ["A", "A"],
      parentB: ["A", "S"],
      result: [
        { label: "AA", pct: "50%", tone: "AA" },
        { label: "AS", pct: "50%", tone: "AS" },
      ],
      risk: "carrier",
      note: "No child will have sickle cell. Half may be healthy carriers (AS).",
    },
    {
      a: "AS",
      b: "AS",
      parentA: ["A", "S"],
      parentB: ["A", "S"],
      result: [
        { label: "AA", pct: "25%", tone: "AA" },
        { label: "AS", pct: "50%", tone: "AS" },
        { label: "SS", pct: "25%", tone: "SS" },
      ],
      risk: "disease",
      note: "1 in 4 risk of a child with sickle cell (SS) in every pregnancy. Counselling is strongly advised.",
    },
    {
      a: "AS",
      b: "SS",
      parentA: ["A", "S"],
      parentB: ["S", "S"],
      result: [
        { label: "AS", pct: "50%", tone: "AS" },
        { label: "SS", pct: "50%", tone: "SS" },
      ],
      risk: "disease",
      note: "1 in 2 risk of a child with sickle cell in every pregnancy. High-risk match.",
    },
    {
      a: "AS",
      b: "AC",
      parentA: ["A", "S"],
      parentB: ["A", "C"],
      result: [
        { label: "AA", pct: "25%", tone: "AA" },
        { label: "AS", pct: "25%", tone: "AS" },
        { label: "AC", pct: "25%", tone: "AC" },
        { label: "SC", pct: "25%", tone: "SC" },
      ],
      risk: "disease",
      note: "1 in 4 risk of haemoglobin SC disease, a true form of sickle cell.",
    },
    {
      a: "SS",
      b: "SS",
      parentA: ["S", "S"],
      parentB: ["S", "S"],
      result: [{ label: "SS", pct: "100%", tone: "SS" }],
      risk: "disease",
      note: "Every child will have sickle cell (SS). The highest-risk match.",
    },
  ];

  const riskBadge = (risk: "none" | "carrier" | "disease") => {
    if (risk === "none")
      return <Badge tone="grey">Safe match — no risk</Badge>;
    if (risk === "carrier")
      return <Badge tone="navy">No disease — carriers possible</Badge>;
    return <Badge tone="red">At-risk match — counselling advised</Badge>;
  };

  return (
    <Section tone="white" className="scroll-mt-20">
      <span id="genotype" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Genotype & inheritance"
        title="Your genotype, explained"
        intro="Everyone inherits one haemoglobin gene from their mother and one from their father. Together these two genes make up your genotype. Understanding how they combine is the single most powerful tool for preventing sickle cell."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="rounded-3xl border border-line bg-grey/40 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-700">
              A
            </span>
            <h3 className="mt-4 font-bold text-navy">The normal gene (A)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Produces normal adult haemoglobin. Two A genes (AA) means no sickle
              cell and no carrier status.
            </p>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="rounded-3xl border border-line bg-grey/40 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-lg font-extrabold text-primary">
              S
            </span>
            <h3 className="mt-4 font-bold text-navy">The sickle gene (S)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Produces haemoglobin S. One copy (AS) is harmless carrier status;
              two copies (SS) cause sickle cell disease.
            </p>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="rounded-3xl border border-line bg-grey/40 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-lg font-extrabold text-amber-700">
              C
            </span>
            <h3 className="mt-4 font-bold text-navy">The C gene (C)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A less common variant. AC is a healthy carrier state, but combined
              with S it causes haemoglobin SC disease.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <h3 className="mt-16 text-center text-2xl font-bold text-navy">
          Genotype pairing &amp; risk per pregnancy
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted">
          Each grid shows the possible genotypes of a child when two parents have
          children. The percentages are the chance for{" "}
          <strong className="text-navy">every single pregnancy</strong> — they do
          not &ldquo;use up&rdquo; over time. A 1-in-4 risk applies afresh to each
          child.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pairings.map((p, i) => (
          <Reveal key={`${p.a}-${p.b}`} delay={(i % 3) * 90}>
            <article
              className={`flex h-full flex-col rounded-3xl border bg-white p-6 ${
                p.risk === "disease" ? "border-primary/30" : "border-line"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-heading text-lg font-extrabold text-navy">
                  {p.a} <span className="text-muted">×</span> {p.b}
                </p>
                <Icon.dna className="h-6 w-6 text-primary/40" />
              </div>
              <div className="mt-5 flex justify-center">
                <PunnettGrid parentA={p.parentA} parentB={p.parentB} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.result.map((r) => (
                  <span
                    key={r.label}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${outcomeStyle[r.tone]}`}
                  >
                    {r.label} · {r.pct}
                  </span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {p.note}
              </p>
              <div className="mt-4">{riskBadge(p.risk)}</div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-emerald-200" /> AA · normal
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-amber-200" /> AS / AC · carrier
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-primary/30" /> SS / SC · sickle
            cell disease
          </span>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-navy p-8 text-center sm:flex-row sm:text-left">
          <Icon.shield className="h-10 w-10 flex-none text-primary-light" />
          <p className="flex-1 text-white/90">
            The only way to know your genotype is to test. A simple, affordable
            blood test gives you the answer for life — and lets couples plan with
            full knowledge and peace of mind.
          </p>
          <Button href="/get-support" variant="white" icon>
            Find free testing
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- 4. Signs & symptoms ---------------- */

function SymptomsSection() {
  const early = [
    "Painful swelling of the hands and feet in babies (dactylitis) — often the first sign",
    "Unusual tiredness, fussiness or pale palms, lips and nail beds (anaemia)",
    "Yellowing of the eyes or skin (jaundice) from rapid red-cell breakdown",
    "Slower growth or delayed puberty compared with peers",
    "Frequent infections, especially in young children",
  ];
  const crisis = [
    "Sudden severe pain in the bones, back, chest, abdomen or joints (a pain crisis)",
    "Pain triggered by cold, dehydration, infection, stress or over-exertion",
    "Episodes lasting hours to days, ranging from mild to severe",
    "Chest pain with fever and breathing difficulty (possible acute chest syndrome — seek care urgently)",
  ];
  return (
    <Section tone="grey" className="scroll-mt-20">
      <span id="symptoms" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Signs & symptoms"
        title="What sickle cell can look like"
        intro="Symptoms vary widely — some warriors have frequent crises, others very few. They usually begin in the first year of life, after a baby's protective foetal haemoglobin fades."
        align="left"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-white p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon.heart className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-navy">
                Everyday &amp; early signs
              </h3>
            </div>
            <div className="mt-5">
              <CheckList items={early} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-3xl border border-line bg-white p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon.spark className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-navy">
                Pain crises &amp; warning signs
              </h3>
            </div>
            <div className="mt-5">
              <CheckList items={crisis} />
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-white p-5">
          <Icon.phone className="mt-0.5 h-5 w-5 flex-none text-primary" />
          <p className="text-sm leading-relaxed text-ink">
            <strong className="text-navy">Seek emergency care</strong> for high
            fever, severe chest pain or breathlessness, sudden weakness or
            slurred speech, a painful erection lasting over 2 hours (priapism),
            severe headache, or pain that will not settle with home measures.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------- 5. Diagnosis ---------------- */

function DiagnosisSection() {
  const methods: { icon: IconName; title: string; text: string }[] = [
    {
      icon: "users",
      title: "Newborn screening",
      text: "A few drops of blood from a newborn's heel can reveal sickle cell within days of birth. Early diagnosis allows protective care — like penicillin and vaccines — to start before any harm is done.",
    },
    {
      icon: "flask",
      title: "Haemoglobin electrophoresis",
      text: "The standard confirming test. It separates the different haemoglobins in a blood sample to show your exact genotype — AA, AS, AC, SS, SC and more. This is the test you ask for to \"know your genotype\".",
    },
    {
      icon: "droplet",
      title: "Solubility & HPLC tests",
      text: "Quick sickling/solubility screens can flag the presence of haemoglobin S, while high-performance liquid chromatography (HPLC) precisely measures each haemoglobin type for an accurate diagnosis.",
    },
    {
      icon: "dna",
      title: "Prenatal & genetic testing",
      text: "For couples at risk, testing during pregnancy (or DNA analysis) can determine a baby's genotype, allowing families to prepare and plan care in advance with their doctor.",
    },
  ];
  return (
    <Section tone="white" className="scroll-mt-20">
      <span id="diagnosis" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Diagnosis"
        title="How sickle cell is diagnosed"
        intro="Diagnosis is simple, safe and affordable. A single blood test confirms your genotype for life — there is no need to repeat it."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {methods.map((m, i) => (
          <Reveal key={m.title} delay={(i % 2) * 100}>
            <IconCard icon={m.icon} title={m.title}>
              {m.text}
            </IconCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- 6. Complications ---------------- */

function ComplicationsSection() {
  const items: { icon: IconName; title: string; text: string }[] = [
    {
      icon: "spark",
      title: "Pain crises (vaso-occlusion)",
      text: "Sickled cells block small vessels, starving tissue of oxygen and causing sudden, sometimes severe pain. The most common reason warriors need hospital care.",
    },
    {
      icon: "droplet",
      title: "Chronic anaemia",
      text: "Sickle cells live only 10–20 days instead of 120, so the body is short of red cells. This causes tiredness, breathlessness and, occasionally, sudden severe drops needing transfusion.",
    },
    {
      icon: "shield",
      title: "Increased infections",
      text: "The spleen is often damaged early, weakening defences. Pneumonia, meningitis and other infections can be serious — which is why vaccines and penicillin are so important in childhood.",
    },
    {
      icon: "heart",
      title: "Acute chest syndrome",
      text: "A medical emergency with chest pain, fever and breathing trouble caused by sickling in the lungs. It needs urgent hospital treatment.",
    },
    {
      icon: "scale",
      title: "Organ stress over time",
      text: "Repeated blocked blood flow can affect the kidneys, liver, eyes, joints (avascular necrosis) and lungs. Regular check-ups catch and manage these early.",
    },
    {
      icon: "stethoscope",
      title: "Stroke & other risks",
      text: "Children can have strokes from blocked brain vessels; doctors screen with a simple ultrasound (TCD). Leg ulcers, gallstones and delayed growth can also occur — all manageable with good care.",
    },
  ];
  return (
    <Section tone="navy" className="scroll-mt-20">
      <span id="complications" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        light
        eyebrow="Complications"
        title="Challenges warriors may face"
        intro="Understanding possible complications is not about fear — it is about catching problems early. With regular care, most are prevented or well managed."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => {
          const C = Icon[c.icon];
          return (
            <Reveal key={c.title} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary-light">
                  <C className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {c.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- 7. Treatment ---------------- */

function TreatmentSection() {
  const treatments: { icon: IconName; title: string; text: string }[] = [
    {
      icon: "flask",
      title: "Hydroxyurea",
      text: "A daily medicine that boosts protective foetal haemoglobin, reducing the number of pain crises, hospital visits and acute chest episodes. One of the most important advances in sickle cell care.",
    },
    {
      icon: "spark",
      title: "Folic acid",
      text: "A simple daily supplement that helps the body keep making new red blood cells to replace those lost to rapid breakdown.",
    },
    {
      icon: "droplet",
      title: "Hydration & warmth",
      text: "Drinking plenty of water and staying warm keeps blood flowing freely and helps prevent cells from sickling — a powerful, everyday line of defence.",
    },
    {
      icon: "heart",
      title: "Pain management",
      text: "Crises are treated with rest, fluids, warmth and pain relief — from paracetamol and anti-inflammatories at home to stronger medicines in hospital for severe pain.",
    },
    {
      icon: "stethoscope",
      title: "Blood transfusion",
      text: "Adding healthy donor red cells treats severe anaemia and helps prevent strokes. Some warriors receive regular (chronic) transfusion programmes under specialist care.",
    },
    {
      icon: "shield",
      title: "Infection prevention",
      text: "Childhood penicillin and a full vaccination schedule (including pneumococcal and flu vaccines) dramatically lower the risk of dangerous infections.",
    },
    {
      icon: "dna",
      title: "Bone marrow / stem cell transplant",
      text: "Currently the only established cure. A matched donor's healthy stem cells replace the faulty ones. It carries real risks, so it is offered carefully to selected patients.",
    },
    {
      icon: "graduation",
      title: "New & emerging therapies",
      text: "Gene therapies and newer medicines are expanding what is possible. Regular specialist follow-up ensures warriors benefit from the latest, safest options as they arrive.",
    },
  ];
  return (
    <Section tone="white" className="scroll-mt-20">
      <span id="treatment" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Treatment & care"
        title="How sickle cell is treated"
        intro="There is no single cure for everyone yet, but a combination of proven treatments lets warriors prevent crises, stay well and thrive. Care should always be guided by a doctor."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {treatments.map((t, i) => (
          <Reveal key={t.title} delay={(i % 4) * 80}>
            <IconCard icon={t.icon} title={t.title}>
              {t.text}
            </IconCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- 8. Living well (accordion-style cards) ---------------- */

function LivingWellSection() {
  const topics: { icon: IconName; title: string; points: string[] }[] = [
    {
      icon: "droplet",
      title: "Nutrition",
      points: [
        "Drink water steadily through the day to stay well hydrated.",
        "Eat a balanced diet rich in fruit, vegetables and protein.",
        "Take folic acid as prescribed to support red-cell production.",
        "Limit alcohol and avoid smoking, which worsen dehydration and crises.",
      ],
    },
    {
      icon: "heart",
      title: "Pain management",
      points: [
        "Learn your personal triggers — cold, stress, dehydration, over-exertion.",
        "Keep warm, rest and hydrate at the very first sign of a crisis.",
        "Have a doctor-agreed home pain plan and know when to go to hospital.",
        "Gentle activity, heat packs and relaxation can ease milder pain.",
      ],
    },
    {
      icon: "users",
      title: "Pregnancy",
      points: [
        "Pregnancy is possible and usually successful with the right care.",
        "Seek specialist (high-risk) antenatal care as early as possible.",
        "Stay hydrated, rest well and attend every check-up.",
        "Know your partner's genotype so you can plan with full information.",
      ],
    },
    {
      icon: "chat",
      title: "Mental health",
      points: [
        "Living with a chronic condition can bring stress, anxiety or low mood.",
        "It is okay — and brave — to ask for emotional support.",
        "Peer support groups connect you with others who truly understand.",
        "Counselling and community make a real difference to wellbeing.",
      ],
    },
    {
      icon: "graduation",
      title: "Children & school",
      points: [
        "Start protective care early: penicillin, vaccines and regular check-ups.",
        "Keep children warm, hydrated and active within comfortable limits.",
        "Inform teachers so they understand crises, bathroom needs and absences.",
        "With support, children with sickle cell learn, play and flourish.",
      ],
    },
    {
      icon: "spark",
      title: "Adults & work",
      points: [
        "Many warriors build full careers, families and active lives.",
        "Pace yourself, stay hydrated and manage stress at work.",
        "Keep up specialist reviews to monitor organs and adjust treatment.",
        "Know your rights and ask employers for reasonable adjustments.",
      ],
    },
  ];
  return (
    <Section tone="soft" className="scroll-mt-20">
      <span id="living" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Living with sickle cell"
        title="Living a full, healthy life"
        intro="Sickle cell is something warriors live with — not something that defines them. With knowledge and the right habits, life can be active, joyful and long."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t, i) => {
          const C = Icon[t.icon];
          return (
            <Reveal key={t.title} delay={(i % 3) * 90}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <C className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">{t.title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm text-ink"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
                        <Icon.check className="h-3.5 w-3.5" />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- 9. Prevention & marriage counselling ---------------- */

function PreventionSection() {
  return (
    <Section tone="white" className="scroll-mt-20">
      <span id="prevention" className="block -mt-20 pt-20" aria-hidden />
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Prevention & marriage counselling</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl text-balance">
            Know your genotype before you marry
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Sickle cell disease is almost entirely preventable. The single most
            powerful step any couple can take is simple:{" "}
            <strong className="text-navy">
              both partners learn their genotype before deciding to have
              children together
            </strong>
            .
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            If both partners carry the S gene (for example, AS × AS), every
            pregnancy carries a 1-in-4 chance of a child with sickle cell. Knowing
            this early lets couples make informed, loving decisions with proper
            counselling — never out of fear or stigma.
          </p>
          <div className="mt-6">
            <CheckList
              items={[
                "Get tested early — ideally before any relationship becomes serious.",
                "Encourage your partner to test too; both results matter.",
                "Seek pre-marital genetic counselling to understand your options.",
                "Share knowledge with family and friends to prevent new cases.",
              ]}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/get-support" size="lg" icon>
              Book free genotype testing
            </Button>
            <Button href="/programs" size="lg" variant="outline">
              Counselling programmes
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 text-white">
            <div className="absolute inset-0 bg-dotgrid opacity-30" />
            <div className="relative">
              <Icon.shield className="h-12 w-12 text-primary-light" />
              <h3 className="mt-5 text-2xl font-bold">
                A test today protects a generation
              </h3>
              <p className="mt-3 text-white/80">
                A genotype test takes minutes and gives you an answer for life.
                It is the kindest, most responsible gift you can give your future
                children.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "1 test", v: "for life" },
                  { k: "2 results", v: "to plan well" },
                  { k: "0 stigma", v: "just knowledge" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"
                  >
                    <p className="font-heading text-xl font-extrabold text-white">
                      {s.k}
                    </p>
                    <p className="mt-1 text-xs text-white/70">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- 10. Myths vs facts ---------------- */

function MythsSection() {
  const pairs: { myth: string; fact: string }[] = [
    {
      myth: "Sickle cell is contagious — you can catch it.",
      fact: "It is not contagious. Sickle cell is inherited through genes and present from birth. You cannot catch it from anyone.",
    },
    {
      myth: "Sickle cell is a curse or spiritual punishment.",
      fact: "It is a medical, genetic condition — nothing more. Stigma causes real harm; understanding and compassion help warriors thrive.",
    },
    {
      myth: "People with sickle cell cannot live long.",
      fact: "With modern care, warriors live into adulthood and old age, raising families and building careers. Early, consistent care makes all the difference.",
    },
    {
      myth: "Carriers (AS) have the disease.",
      fact: "Carriers are healthy and do not have sickle cell disease. AS only matters when choosing a partner who also carries the S gene.",
    },
    {
      myth: "Two AS parents will definitely have a sickle cell child.",
      fact: "Not definitely. Each pregnancy carries a 1-in-4 (25%) chance of SS, a 50% chance of AS, and a 25% chance of AA.",
    },
    {
      myth: "Sickle cell cannot be prevented.",
      fact: "It is highly preventable. When couples know their genotypes and seek counselling, new cases can be avoided entirely.",
    },
  ];
  return (
    <Section tone="grey" className="scroll-mt-20">
      <span id="myths" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Myths vs facts"
        title="Clearing up the myths"
        intro="Misinformation and stigma hurt warriors and their families. Here is the truth, plainly stated."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pairs.map((p, i) => (
          <Reveal key={p.myth} delay={(i % 2) * 90}>
            <article className="overflow-hidden rounded-3xl border border-line bg-white">
              <div className="flex items-start gap-3 border-b border-line bg-grey/40 p-5">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-navy/10 text-navy">
                  <Icon.close className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">
                    Myth
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    {p.myth}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon.check className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Fact
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {p.fact}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- 11. Resources ---------------- */

function ResourcesSection() {
  const resources: {
    icon: IconName;
    tag: string;
    title: string;
    text: string;
  }[] = [
    {
      icon: "book",
      tag: "Guide (PDF)",
      title: "Sickle Cell Family Handbook",
      text: "A printable plain-language handbook covering genotypes, daily care and emergency warning signs for families.",
    },
    {
      icon: "scale",
      tag: "Infographic",
      title: "Genotype Compatibility Chart",
      text: "A one-page visual of genotype pairings and risks — perfect for sharing with couples and community groups.",
    },
    {
      icon: "megaphone",
      tag: "Video",
      title: "What is Sickle Cell? (3 min)",
      text: "A short animated explainer that breaks down haemoglobin, sickling and inheritance in simple terms.",
    },
    {
      icon: "graduation",
      tag: "Toolkit",
      title: "Schools & Workplace Toolkit",
      text: "Practical guidance to help teachers and employers support warriors with understanding and reasonable adjustments.",
    },
    {
      icon: "droplet",
      tag: "Checklist",
      title: "Crisis Prevention Checklist",
      text: "A handy fridge-door checklist of triggers to avoid and habits that keep crises away.",
    },
    {
      icon: "users",
      tag: "Directory",
      title: "Find a Specialist Clinic",
      text: "A growing directory of sickle cell clinics and testing centres across all 36 states and the FCT.",
    },
  ];
  return (
    <Section tone="white" className="scroll-mt-20">
      <span id="resources" className="block -mt-20 pt-20" aria-hidden />
      <SectionHeading
        eyebrow="Resources"
        title="Free guides, videos & infographics"
        intro="Download, watch and share trusted materials to spread accurate knowledge. New resources are added regularly."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r, i) => {
          const C = Icon[r.icon];
          return (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-primary-soft to-grey">
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <C className="h-12 w-12 text-primary/50" />
                  <span className="absolute left-4 top-4">
                    <Badge tone="red">{r.tag}</Badge>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {r.text}
                  </p>
                  <Link
                    href="/get-support"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5"
                  >
                    Access resource <Icon.arrow className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- 12. FAQ ---------------- */

function FaqSection() {
  const faqItems = [
    {
      q: "Is sickle cell disease contagious?",
      a: "No. Sickle cell is inherited from your parents' genes and is present from birth. It cannot be passed on by contact, blood-sharing of an everyday kind, food or the air.",
    },
    {
      q: "What is the difference between sickle cell trait (AS) and sickle cell disease (SS)?",
      a: "AS (trait) means you carry one sickle gene but are healthy and do not have the disease. SS (and SC, Sβ-thalassaemia) means you have inherited two affected genes and have sickle cell disease, which needs ongoing care.",
    },
    {
      q: "If two AS partners have children, will the child definitely have sickle cell?",
      a: "No. For each pregnancy there is a 25% chance of an SS (sickle cell) child, a 50% chance of an AS carrier, and a 25% chance of a fully normal AA child. The 1-in-4 risk applies afresh to every pregnancy.",
    },
    {
      q: "Can people with sickle cell get married and have children?",
      a: "Yes. Warriors marry and raise families. The important step is for both partners to know their genotypes and seek counselling, so they can plan with full information and proper medical support during pregnancy.",
    },
    {
      q: "How do I find out my genotype?",
      a: "A simple blood test called haemoglobin electrophoresis shows your genotype. It is affordable, done once and valid for life. SSCN runs free testing drives — visit Get Support to find one near you.",
    },
    {
      q: "Is there a cure for sickle cell?",
      a: "Bone marrow (stem cell) transplant can cure sickle cell for selected patients, and gene therapies are emerging. For most warriors, treatments like hydroxyurea, hydration, folic acid and good preventive care keep them well and active.",
    },
    {
      q: "What should I do during a pain crisis at home?",
      a: "Rest, keep warm, drink plenty of fluids and take the pain relief your doctor has recommended. Go to hospital if the pain is severe, if there is a high fever, chest pain, breathlessness, or pain that will not settle.",
    },
    {
      q: "Does SSCN offer free genotype testing and counselling?",
      a: "Yes. We organise free genotype testing drives and pre-marital and family counselling across all 36 states and the FCT. Reach out through Get Support and we will connect you to the nearest opportunity.",
    },
  ];
  return (
    <Section tone="grey" className="scroll-mt-20">
      <span id="faq" className="block -mt-20 pt-20" aria-hidden />
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Your questions, answered"
            intro="Honest, accurate answers to the questions families ask most. Still unsure? Our team is always here to help."
          />
          <div className="mt-8">
            <Button href="/get-support" icon>
              Ask our team
            </Button>
          </div>
        </div>
        <Reveal>
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- CTA band ---------------- */

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-dotgrid opacity-20" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
              Knowledge is power
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
              Know your genotype. Protect your future.
            </h2>
            <p className="mt-4 text-white/85">
              Whether you want to get tested, support a warrior, or help us reach
              more families — your next step changes a life. Take it today.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/get-support" size="lg" variant="white" icon>
            Get free genotype testing
          </Button>
          <Button
            href="/get-support"
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10"
          >
            Get Support
          </Button>
          <Button
            href="/donate"
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10"
          >
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
