"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

const waNumber = site.whatsapp.replace(/[^0-9]/g, "");

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {open && (
        <div className="flex flex-col items-end gap-2.5">
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-navy/10 ring-1 ring-line transition-transform hover:-translate-y-0.5"
          >
            <Icon.chat className="h-4 w-4 text-green-600" /> WhatsApp Support
          </a>
          <Link
            href="/get-support"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-navy/10 ring-1 ring-line transition-transform hover:-translate-y-0.5"
          >
            <Icon.heart className="h-4 w-4 text-primary" /> Get Support
          </Link>
          <Link
            href="/donate"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
          >
            <Icon.droplet className="h-4 w-4" /> Donate Now
          </Link>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Quick actions"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 transition-transform hover:scale-105 active:scale-95"
      >
        {open ? (
          <Icon.close className="h-6 w-6" />
        ) : (
          <Icon.heart className="h-7 w-7 animate-[float_4s_ease-in-out_infinite]" />
        )}
      </button>
    </div>
  );
}
