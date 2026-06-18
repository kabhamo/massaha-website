import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <LogoMark className="h-16 w-16" />
      <p className="eyebrow mt-8">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-sm text-earth">
        The space you&rsquo;re looking for doesn&rsquo;t exist — or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-linen transition-colors hover:bg-earth"
      >
        Back home
      </Link>
    </div>
  );
}
