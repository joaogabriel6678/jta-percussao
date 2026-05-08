import React from "react";

// ─── SectionBadge ─────────────────────────────────────────────────────────────

interface SectionBadgeProps {
  text: string;
  color?: "blue" | "green";
}

export function SectionBadge({ text, color = "blue" }: SectionBadgeProps) {
  const styles =
    color === "green" ? "border-green-200 text-green-700" : "border-blue-200 text-blue-700";
  return (
    <span
      className={`inline-block border text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${styles}`}
    >
      {text}
    </span>
  );
}

// ─── ColorBar ─────────────────────────────────────────────────────────────────

export function ColorBar() {
  return (
    <div className="flex gap-2 mt-5">
      <div className="h-1 w-10 bg-blue-700 rounded-full" />
      <div className="h-1 w-6 bg-green-500 rounded-full" />
      <div className="h-1 w-4 bg-yellow-400 rounded-full" />
    </div>
  );
}

// ─── SectionHeader ────────────────────────────────────────────────────────────

interface SectionHeaderProps {
  badge: string;
  badgeColor?: "blue" | "green";
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({
  badge,
  badgeColor,
  title,
  subtitle,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <SectionBadge text={badge} color={badgeColor} />
      <h2
        className={`text-3xl md:text-4xl font-extrabold mb-3 ${
          light ? "text-white" : "text-blue-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl mx-auto text-base ${light ? "text-blue-200" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
      <div className="flex gap-2 justify-center mt-5">
        <div className={`h-1 w-10 rounded-full ${light ? "bg-yellow-400" : "bg-blue-700"}`} />
        <div className="h-1 w-6 bg-green-500 rounded-full" />
        <div className={`h-1 w-4 rounded-full ${light ? "bg-blue-400" : "bg-yellow-400"}`} />
      </div>
    </div>
  );
}
