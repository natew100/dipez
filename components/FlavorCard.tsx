"use client";

import { motion } from "motion/react";

interface FlavorCardProps {
  dip: string;
  chip: string;
  description: string;
  accent: string;
  delay?: number;
}

export default function FlavorCard({
  dip,
  chip,
  description,
  accent,
  delay = 0,
}: FlavorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-warm-white border border-olive/8 p-8 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        style={{
          boxShadow: "0 2px 16px rgba(61, 90, 58, 0.06)",
        }}
      >
        {/* Accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
          style={{ backgroundColor: accent }}
        />

        {/* Dip name */}
        <h3 className="font-display text-xl font-bold text-olive mb-1 tracking-tight">
          {dip}
        </h3>

        {/* Plus divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-olive/10" />
          <span className="text-terracotta font-display font-bold text-lg">
            +
          </span>
          <div className="flex-1 h-px bg-olive/10" />
        </div>

        {/* Chip name */}
        <h4 className="font-display text-lg font-semibold text-olive-light mb-4">
          {chip}
        </h4>

        {/* Description */}
        <p className="font-body text-sm text-charcoal/60 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
