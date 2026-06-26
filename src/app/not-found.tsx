import { Button } from "@/components/ui";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-dotgrid opacity-30" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="container-x relative text-center">
        <Logo className="mx-auto h-16 w-16" variant="white" />
        <p className="mt-6 font-heading text-6xl font-extrabold text-primary-light">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          This page took a detour
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          The page you&apos;re looking for can&apos;t be found — but every
          warrior&apos;s journey continues. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg" variant="white">
            Back to Home
          </Button>
          <Button
            href="/get-support"
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Get Support
          </Button>
        </div>
      </div>
    </section>
  );
}
