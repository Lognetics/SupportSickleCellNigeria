import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Icon = {
  stethoscope: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 3v6a4 4 0 0 0 8 0V3" /><path d="M4 3H2m10 0h-2" /><path d="M8 13v3a5 5 0 0 0 10 0v-1" /><circle cx="19" cy="11" r="2" /></svg>
  ),
  book: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5z" /><path d="M4 4.5v15" /></svg>
  ),
  megaphone: (p: IconProps) => (
    <svg {...base(p)}><path d="m3 11 15-6v14L3 13z" /><path d="M3 11v2a3 3 0 0 0 3 3" /><path d="M7 16v3a2 2 0 0 0 4 0v-2" /><path d="M21 9v6" /></svg>
  ),
  droplet: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 2.5S5 9.5 5 14a7 7 0 0 0 14 0c0-4.5-7-11.5-7-11.5z" /></svg>
  ),
  scale: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3v18" /><path d="M5 21h14" /><path d="m3 8 4-2 4 2-4 5z" /><path d="m13 8 4-2 4 2-4 5z" /><path d="M7 6 12 4l5 2" /></svg>
  ),
  flask: (p: IconProps) => (
    <svg {...base(p)}><path d="M9 3h6" /><path d="M10 3v6L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V3" /><path d="M7 15h10" /></svg>
  ),
  heart: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 20s-7-4.4-9.5-9A4.6 4.6 0 0 1 12 6.5 4.6 4.6 0 0 1 21.5 11C19 15.6 12 20 12 20z" /></svg>
  ),
  users: (p: IconProps) => (
    <svg {...base(p)}><circle cx="9" cy="8" r="3" /><path d="M3 21a6 6 0 0 1 12 0" /><path d="M16 6a3 3 0 0 1 0 6" /><path d="M18 21a6 6 0 0 0-3-5.2" /></svg>
  ),
  spark: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" /></svg>
  ),
  dna: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 3c0 6 14 6 14 12M5 9c0 6 14 6 14 12" /><path d="M6 6h12M6 18h12M8 4h8M8 20h8" /></svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  check: (p: IconProps) => (
    <svg {...base(p)}><path d="m5 12 4 4L19 6" /></svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
  ),
  calendar: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="4.5" width="18" height="17" rx="2" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base(p)}><path d="M3 5.5C3 4 4 3 5.5 3H7l2 4-2 1.5a12 12 0 0 0 4.5 4.5L13 15l4 2v1.5c0 1.5-1 2.5-2.5 2.5A12.5 12.5 0 0 1 3 5.5z" /></svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  chat: (p: IconProps) => (
    <svg {...base(p)}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z" /></svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
  ),
  close: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
  ),
  chevron: (p: IconProps) => (
    <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
  ),
  star: (p: IconProps) => (
    <svg {...base(p)} fill="currentColor" stroke="none"><path d="m12 2 2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z" /></svg>
  ),
  quote: (p: IconProps) => (
    <svg {...base(p)} fill="currentColor" stroke="none"><path d="M7 7H3v6h4v-2H5v-2h2zM17 7h-4v6h4v-2h-2v-2h2z" /><path d="M3 13c0 2 1 3 3 3v-2H5v-1zM13 13c0 2 1 3 3 3v-2h-1v-1z" /></svg>
  ),
  search: (p: IconProps) => (
    <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m21 21-4-4" /></svg>
  ),
  graduation: (p: IconProps) => (
    <svg {...base(p)}><path d="m2 8 10-4 10 4-10 4z" /><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /><path d="M22 8v5" /></svg>
  ),
  gift: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v8h14v-8M12 8v12" /><path d="M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z" /></svg>
  ),
  globe: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg>
  ),
};

export type IconName = keyof typeof Icon;
