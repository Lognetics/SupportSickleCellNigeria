import { partners } from "@/lib/site";

/** Infinite logo marquee for partners (duplicated track for seamless loop). */
export function PartnersMarquee() {
  const track = [...partners, ...partners];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-4 group-hover:[animation-play-state:paused]">
        {track.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex h-20 w-56 flex-none items-center justify-center rounded-2xl border border-line bg-white px-6 text-center"
          >
            <span className="text-sm font-bold text-navy/70">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
