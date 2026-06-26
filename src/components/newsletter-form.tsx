"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setDone(true);
      }}
      className="w-full"
    >
      {done ? (
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 text-white">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary">
            <Icon.check className="h-5 w-5" />
          </span>
          <p className="text-sm">
            <span className="font-bold">You&apos;re in!</span> Thank you for
            joining the movement. Watch your inbox.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            className="inline-flex flex-none items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark active:scale-95"
          >
            Subscribe
            <Icon.arrow className="h-4 w-4" />
          </button>
        </div>
      )}
      <p className="mt-2.5 text-xs text-white/50">
        By subscribing you agree to our Privacy Policy and NDPA-compliant data
        handling.
      </p>
    </form>
  );
}
