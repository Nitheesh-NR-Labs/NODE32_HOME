import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionTitle({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="mb-4 inline-block rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-400">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
