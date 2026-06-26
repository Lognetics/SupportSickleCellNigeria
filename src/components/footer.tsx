import Link from "next/link";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";
import { NewsletterForm } from "@/components/newsletter-form";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Blood Donation", href: "/blood-donation" },
      { label: "Partner With Us", href: "/partners" },
      { label: "Fundraise", href: "/donate" },
    ],
  },
  {
    title: "Learn & Support",
    links: [
      { label: "Understanding Sickle Cell", href: "/understanding-sickle-cell" },
      { label: "Get Support", href: "/get-support" },
      { label: "Programs", href: "/programs" },
      { label: "Resources", href: "/resources" },
      { label: "Stories of Hope", href: "/stories" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "News", href: "/news" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="container-x grid gap-8 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Join the movement for every warrior
            </h3>
            <p className="mt-2 max-w-md text-white/70">
              Get awareness campaigns, event invites and impact stories in your
              inbox. No spam — just hope and action.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo className="h-10 w-10" />
            <span className="font-heading text-lg font-extrabold text-white">
              Support Sickle Cell Nigeria
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/80">
            <p className="flex items-start gap-2.5">
              <Icon.pin className="mt-0.5 h-4 w-4 flex-none text-primary-light" />
              {site.address}
            </p>
            <p className="flex items-center gap-2.5">
              <Icon.phone className="h-4 w-4 flex-none text-primary-light" />
              {site.phone}
            </p>
            <p className="flex items-center gap-2.5">
              <Icon.mail className="h-4 w-4 flex-none text-primary-light" />
              {site.email}
            </p>
          </div>
          <div className="mt-6 flex gap-2.5">
            {(["facebook", "instagram", "twitter", "youtube", "linkedin"] as const).map(
              (s) => (
                <a
                  key={s}
                  href={site.socials[s]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                >
                  <SocialGlyph name={s} />
                </a>
              )
            )}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Emergency banner */}
      <div className="bg-primary">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-3 text-center text-sm font-semibold text-white sm:flex-row">
          <span className="inline-flex items-center gap-2">
            <Icon.phone className="h-4 w-4" /> 24/7 Emergency Hotline:{" "}
            {site.emergency}
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon.chat className="h-4 w-4" /> WhatsApp Support: {site.whatsapp}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Support Sickle Cell Nigeria. All rights
            reserved. RC: 0000000.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialGlyph({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "currentColor",
  };
  switch (name) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M13 22v-8h2.5l.5-3H13V9c0-.9.3-1.5 1.6-1.5H16V5c-.3 0-1.2-.1-2.2-.1C11.7 4.9 10 6.2 10 8.7V11H7.5v3H10v8z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M18.2 3h3.3l-7.2 8.3L23 21h-6.6l-5.2-6.8L5.3 21H2l7.7-8.8L1.6 3h6.8l4.7 6.2zM17 19h1.8L7.1 5H5.2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16.5 7a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zM12 4.7c2.4 0 2.7 0 3.6.05 2.5.1 3.6 1.2 3.7 3.7.04.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.1 2.5-1.2 3.6-3.7 3.7-.9.04-1.2.05-3.6.05s-2.7 0-3.6-.05c-2.5-.1-3.6-1.2-3.7-3.7C4.7 14.7 4.7 14.4 4.7 12s0-2.7.05-3.6c.1-2.5 1.2-3.6 3.7-3.7C9.3 4.7 9.6 4.7 12 4.7zM12 3c-2.4 0-2.8 0-3.7.05C4.9 3.2 3.2 4.9 3.05 8.3 3 9.2 3 9.6 3 12s0 2.8.05 3.7c.15 3.4 1.85 5.1 5.25 5.25.9.05 1.3.05 3.7.05s2.8 0 3.7-.05c3.4-.15 5.1-1.85 5.25-5.25.05-.9.05-1.3.05-3.7s0-2.8-.05-3.7C20.8 4.9 19.1 3.2 15.7 3.05 14.8 3 14.4 3 12 3z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M22 8.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7.2.2c-.4 0-1.2.1-2 .9C2.2 6.7 2 8.2 2 8.2S1.8 9.9 1.8 11.6v1.6c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.6.2 6.9.2 6.9.2s4.4 0 7.2-.2c.4 0 1.2-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4zM9.9 14.6V9.4l4.6 2.6z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M6.9 8.6H3.8V20h3.1zM5.3 4.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM20.2 20v-6.3c0-3.1-1.6-4.5-3.8-4.5-1.7 0-2.5.9-2.9 1.6V8.6H10.4c.05.9 0 11.4 0 11.4h3.1v-6.4c0-.3 0-.6.1-.8.2-.6.8-1.2 1.7-1.2 1.2 0 1.7.9 1.7 2.3V20z" />
        </svg>
      );
    default:
      return null;
  }
}
