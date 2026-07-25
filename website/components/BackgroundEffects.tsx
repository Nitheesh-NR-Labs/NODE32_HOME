"use client";

import { useRef, useMemo } from "react";

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const circles = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        cx: 20 + i * 30,
        cy: 30 + (i % 2) * 40,
        r: 200 + i * 100,
        color: i === 0 ? "rgba(37, 99, 235, 0.08)" : "rgba(249, 115, 22, 0.06)",
        speed: 0.2 + i * 0.1,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        {circles.map((circle, i) => (
          <div
            key={i}
            className="absolute animate-glow-pulse"
            style={{
              left: `${circle.cx}%`,
              top: `${circle.cy}%`,
              width: circle.r * 2,
              height: circle.r * 2,
              marginLeft: -circle.r,
              marginTop: -circle.r,
              background: `radial-gradient(circle, ${circle.color} 0%, transparent 70%)`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
