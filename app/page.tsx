"use client";

import { motion } from "motion/react";
import EmailSignup from "@/components/EmailSignup";
import StampLogo from "@/components/StampLogo";
import FlavorCard from "@/components/FlavorCard";
import Footer from "@/components/Footer";

const flavors = [
  {
    dip: "Hot Honey Whipped Feta",
    chip: "Sourdough Chips",
    description:
      "Sweet heat meets tangy, creamy feta. The one you can't stop eating.",
    accent: "#C2704E",
  },
  {
    dip: "Truffle Mushroom",
    chip: "Parmesan Crisps",
    description:
      "Earthy, rich, and impossibly savory. The fancy one.",
    accent: "#5B7553",
  },
  {
    dip: "Spinach Artichoke",
    chip: "Pita Bread",
    description:
      "The restaurant classic, finally grab-and-go. Warm, familiar, perfect.",
    accent: "#8BA584",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
        {/* Decorative corner marks */}
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-olive/15 hidden md:block" />
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-olive/15 hidden md:block" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-olive/15 hidden md:block" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-olive/15 hidden md:block" />

        {/* Logo */}
        <div className="animate-stamp mb-10">
          <StampLogo size="large" />
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-olive text-center tracking-tight leading-[1.1] mb-5"
        >
          Snacking,{" "}
          <span className="italic text-terracotta">made easy.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="font-body text-lg md:text-xl text-charcoal/60 text-center max-w-lg mb-12 leading-relaxed"
        >
          Premium dips paired with flavor-matched chips.
          <br className="hidden sm:block" />
          Every duo, a perfect match.
        </motion.p>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="w-full max-w-md"
        >
          <EmailSignup variant="hero" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-[10px] uppercase tracking-[3px] text-olive/30">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-4 h-4 text-olive/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="divider-line mx-8" />

      {/* ===== FLAVORS ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs uppercase tracking-[4px] text-terracotta font-semibold mb-4 block">
              The Lineup
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-olive tracking-tight">
              Three duos. Zero compromises.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {flavors.map((flavor, i) => (
              <FlavorCard key={flavor.dip} {...flavor} delay={i * 0.15} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12 font-body text-sm text-charcoal/40"
          >
            More flavors coming. These are just the beginning.
          </motion.p>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="divider-line mx-8" />

      {/* ===== STORY ===== */}
      <section className="px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-body text-xs uppercase tracking-[4px] text-terracotta font-semibold mb-6 block">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-olive tracking-tight mb-8 leading-snug">
            We got tired of the same
            <br />
            hummus and pretzels.
          </h2>
          <div className="space-y-5 font-body text-lg text-charcoal/70 leading-relaxed">
            <p>
              Every dip we found came with the same sad bag of generic chips.
              So we started making our own pairings &mdash; the dip and the chip,
              designed for each other. Hot honey whipped feta with a crunchy
              sourdough chip. Truffle mushroom with a parmesan crisp that actually holds up.
            </p>
            <p>
              DipEZ is snacking that makes sense. Real ingredients, bold flavors, grab and go.
            </p>
          </div>

          {/* Decorative stamp mark */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-olive/20" />
            <svg className="w-6 h-6 text-olive/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <div className="w-12 h-px bg-olive/20" />
          </div>
        </motion.div>
      </section>

      {/* ===== FOLLOW ===== */}
      <section className="px-6 py-16 bg-olive/[0.03]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          <h3 className="font-display text-xl font-bold text-olive mb-2">
            Follow the journey
          </h3>
          <p className="font-body text-sm text-charcoal/50 mb-6">
            Behind-the-scenes, taste tests, and launch updates.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://instagram.com/eatdipez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-warm-white border border-olive/10 rounded-full text-olive hover:border-olive/30 transition-all duration-300 font-body text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://tiktok.com/@eatdipez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-warm-white border border-olive/10 rounded-full text-olive hover:border-olive/30 transition-all duration-300 font-body text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
              </svg>
              TikTok
            </a>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
