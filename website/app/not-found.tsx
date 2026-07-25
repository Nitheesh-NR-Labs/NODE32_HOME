import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-gradient">404</h1>
      <p className="mt-4 text-muted-foreground">Page not found.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
