import Image from "next/image";

/**
 * Photo — a fill-mode next/image inside a sized, rounded container.
 * The parent controls the aspect/size via className (must set a height,
 * e.g. an aspect-* class or explicit h-*). Use `overlay` to darken for
 * text legibility.
 */
export function Photo({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  overlay = false,
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean | "strong";
  rounded?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
      {overlay && (
        <div
          className={`absolute inset-0 ${
            overlay === "strong"
              ? "bg-gradient-to-t from-navy/85 via-navy/40 to-transparent"
              : "bg-navy/25"
          }`}
        />
      )}
    </div>
  );
}
