"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MAGNETIC_RANGE = 180;
const MAGNETIC_STRENGTH = 0.12;
const SPRING_STIFFNESS = 0.18;
const SPRING_DAMPING = 0.85;

export function ContactHoverReveal({ children }: { children: React.ReactNode }) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: SPRING_STIFFNESS, damping: SPRING_DAMPING });
  const springY = useSpring(y, { stiffness: SPRING_STIFFNESS, damping: SPRING_DAMPING });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    x.set(dx * MAGNETIC_STRENGTH);
    y.set(dy * MAGNETIC_STRENGTH);
  }, [x, y]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <div className="relative grid sm:grid-cols-2 gap-8 sm:gap-16">
      <div className="relative z-10">{children}</div>

      <div
        ref={containerRef}
        className="relative hidden sm:flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative w-72 h-80"
          transition={{ type: "spring", stiffness: SPRING_STIFFNESS, damping: SPRING_DAMPING }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <motion.img
              src="/Portfolio/graduation_pic.jpeg"
              alt="Benjamin Florence Nicol E. Saludes"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center top", clipPath: "inset(0% 100% 0% 0%)" }}
              loading="eager"
              animate={{
                clipPath: isHovering
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(0% 100% 0% 0%)",
                scale: isHovering ? 0.96 : 1,
              }}
              transition={{
                clipPath: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
                scale: { duration: 0.6, ease: "easeOut" },
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ opacity: isHovering ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="text-xs uppercase tracking-widest text-ink-soft/70 font-sans">
                Hover to reveal
              </span>
            </motion.div>
          </div>
          <motion.div
            className="absolute -bottom-3 -right-3 w-72 h-80 -z-10 border-2 border-sage/30 rounded-sm"
            animate={{ x: isHovering ? -4 : 0, y: isHovering ? -4 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
