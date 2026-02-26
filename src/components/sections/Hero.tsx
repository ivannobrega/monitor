"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, heroStagger, viewport } from "@/src/lib/animations";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#041A1F]"
    >

      {/* ── Background image ─────────────────────────────────── */}
      <Image
        src="/Hero/pendulo.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* ── Left-to-right overlay ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041A1F] from-40% via-[#041A1F]/75 to-[#041A1F]/10 pointer-events-none" />

      {/* ── Top + bottom vignette ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#041A1F]/60 via-transparent to-[#041A1F]/75 pointer-events-none" />

      {/* ── Swoosh — decorativo, full width, subido ligeiramente ─ */}
      <motion.div
        className="absolute bottom-10 left-0 w-full z-[5] pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
      >
        <Image
          src="/Brand/Swoosh.png"
          alt=""
          width={1920}
          height={220}
          className="w-full h-auto opacity-[0.45]"
        />
      </motion.div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-16 pt-28 pb-24">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="hero-title font-serif font-medium leading-[1.02] tracking-tight text-[#e4f7f3] mb-7"
          >
            O equilíbrio exato entre risco e oportunidade.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-[#5f9ea0] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-relaxed max-w-lg"
          >
            Inteligência financeira e valuation especializado para decisões
            jurídicas estratégicas de alto impacto.
          </motion.p>

        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-24 flex flex-col sm:flex-row gap-5 sm:gap-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            "25 anos de experiência",
            "+R$ 10 bilhões avaliados",
            "Referência nacional em valuation jurídico",
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && (
                <span className="hidden sm:block w-px h-4 bg-[#0d4a52] shrink-0" />
              )}
              <span className="text-[#5f9ea0] text-sm">{stat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
