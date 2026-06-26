import type { SVGProps } from "react";

/** SSCN mark — a blood droplet cradling a heart, echoing care + donation. */
export function Logo({
  variant = "color",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "color" | "white" }) {
  const drop = variant === "white" ? "#ffffff" : "#c62828";
  const heart = variant === "white" ? "#c62828" : "#ffffff";
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <path
        d="M24 3S9 18 9 30a15 15 0 0 0 30 0C39 18 24 3 24 3z"
        fill={drop}
      />
      <path
        d="M24 38s-8-5-8-10.5A4.6 4.6 0 0 1 24 24a4.6 4.6 0 0 1 8 3.5C32 33 24 38 24 38z"
        fill={heart}
      />
    </svg>
  );
}
