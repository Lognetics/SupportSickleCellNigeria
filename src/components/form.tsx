"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "@/components/icons";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "date";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  full?: boolean;
};

export function SmartForm({
  fields,
  submitLabel = "Submit",
  successTitle = "Thank you!",
  successText = "Your submission has been received. Our team will be in touch shortly.",
  note,
}: {
  fields: Field[];
  submitLabel?: string;
  successTitle?: string;
  successText?: string;
  note?: ReactNode;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-line bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Icon.check className="h-8 w-8" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-navy">{successTitle}</h3>
        <p className="mx-auto mt-2 max-w-md text-muted">{successText}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div
            key={f.name}
            className={f.type === "textarea" || f.full ? "sm:col-span-2" : ""}
          >
            <label
              htmlFor={f.name}
              className="mb-1.5 block text-sm font-semibold text-navy"
            >
              {f.label}
              {f.required && <span className="text-primary"> *</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={4}
                placeholder={f.placeholder}
                className="w-full rounded-2xl border border-line bg-grey/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            ) : f.type === "select" ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                defaultValue=""
                className="w-full rounded-2xl border border-line bg-grey/50 px-4 py-3 text-sm text-ink focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="" disabled>
                  {f.placeholder ?? "Select an option"}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className="w-full rounded-2xl border border-line bg-grey/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            )}
          </div>
        ))}
      </div>

      {note && <div className="mt-4 text-xs text-muted">{note}</div>}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark active:scale-[0.99] sm:w-auto"
      >
        {submitLabel}
        <Icon.arrow className="h-4 w-4" />
      </button>
    </form>
  );
}
