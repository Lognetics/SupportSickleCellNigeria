import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";
import { Photo } from "@/components/photo";

/* ---------------- Button ---------------- */

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/30",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline:
    "border border-primary/30 text-primary hover:bg-primary-soft",
  ghost: "text-navy hover:bg-grey",
  white: "bg-white text-primary hover:bg-primary-soft",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  external?: boolean;
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {children}
      {icon && (
        <Icon.arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* ---------------- Badge / Eyebrow ---------------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function Badge({
  children,
  tone = "navy",
}: {
  children: ReactNode;
  tone?: "navy" | "red" | "grey";
}) {
  const tones = {
    navy: "bg-navy/10 text-navy",
    red: "bg-primary-soft text-primary",
    grey: "bg-grey text-muted",
  };
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-bold sm:text-4xl text-balance ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------------- Card with icon ---------------- */

export function IconCard({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: ReactNode;
}) {
  const IconCmp = Icon[icon];
  return (
    <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-navy/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <IconCmp className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

/* ---------------- Section wrapper ---------------- */

export function Section({
  children,
  className = "",
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "grey" | "navy" | "soft";
}) {
  const tones = {
    white: "bg-white",
    grey: "bg-grey",
    navy: "bg-navy text-white",
    soft: "bg-primary-soft/40",
  };
  return (
    <section className={`py-16 sm:py-24 ${tones[tone]} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

/* ---------------- Page hero (inner pages) ---------------- */

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumb?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-dotgrid opacity-40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className={image ? "" : "max-w-3xl"}>
          {breadcrumb && (
            <p className="mb-4 text-sm font-medium text-white/60">{breadcrumb}</p>
          )}
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl text-balance">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {intro}
            </p>
          )}
        </div>
        {image && (
          <div className="relative">
            <Photo
              src={image}
              alt={imageAlt ?? title}
              priority
              className="aspect-[5/4] w-full shadow-2xl ring-1 ring-white/10"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-primary/30 blur-xl" />
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Bullet list ---------------- */

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-ink">
          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary-soft text-primary">
            <Icon.check className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
