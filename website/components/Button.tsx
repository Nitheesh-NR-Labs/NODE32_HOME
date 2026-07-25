import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "a";
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/20",
    secondary:
      "bg-white/5 text-foreground hover:bg-white/10 border border-white/10",
    outline:
      "bg-transparent text-foreground border border-white/10 hover:bg-white/5",
  };

  if (props.as === "a") {
    return (
      <Link
        href={props.href}
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      onClick={props.onClick}
      type={props.type ?? "button"}
      disabled={props.disabled ?? loading}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
