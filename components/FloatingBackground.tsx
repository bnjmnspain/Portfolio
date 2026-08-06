"use client";

interface SquareBubbleProps {
  left: string;
  width: number;
  height: number;
  delay: number;
  duration?: number;
}

function SquareBubble({ left, width, height, delay, duration = 25 }: SquareBubbleProps) {
  return (
    <li
      className="square-bubble"
      style={{
        left,
        width: `${width}px`,
        height: `${height}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

const BUBBLES: SquareBubbleProps[] = [
  { left: "25%", width: 80, height: 80, delay: 0 },
  { left: "10%", width: 20, height: 20, delay: 2, duration: 12 },
  { left: "70%", width: 20, height: 20, delay: 4 },
  { left: "40%", width: 60, height: 60, delay: 0, duration: 18 },
  { left: "65%", width: 20, height: 20, delay: 0 },
  { left: "75%", width: 110, height: 110, delay: 3 },
  { left: "35%", width: 150, height: 150, delay: 7 },
  { left: "50%", width: 25, height: 25, delay: 15, duration: 45 },
  { left: "20%", width: 15, height: 15, delay: 2, duration: 35 },
  { left: "85%", width: 150, height: 150, delay: 0, duration: 11 },
];

export function FloatingBackground() {
  return (
    <ul className="squares" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <SquareBubble key={i} {...b} />
      ))}
    </ul>
  );
}
