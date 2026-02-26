"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, scaleIn, stagger, viewport } from "@/src/lib/animations";

const stats = [
  { value: "25+", label: "Anos de experiência", detail: "em valuation jurídico" },
  { value: "R$ 10bi+", label: "Em ativos avaliados", detail: "ao longo da trajetória" },
  { value: "500+", label: "Laudos emitidos", detail: "em litígios de alto valor" },
  { value: "98%", label: "Taxa de sustentação", detail: "dos laudos em contraditório" },
];

const credentials = [
  "Membro do Instituto Brasileiro de Avaliações e Perícias (IBAPE)",
  "Certificação CFA — Chartered Financial Analyst",
  "Certificação CBV — Chartered Business Valuator",
  "Docência em valuation e finanças corporativas",
  "Publicações em revistas jurídicas especializadas",
  "Atuação em tribunais arbitrais nacionais e internacionais",
];

export default function Authority() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-[#062B2E] py-32 px-6">
      <Image src="/Hero/mulher.jpg" alt="" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041A1F] from-35% via-[#041A1F]/82 to-[#041A1F]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#041A1F]/50 via-transparent to-[#041A1F]/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — narrative */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-6 font-medium">
              Autoridade
            </motion.p>
            <motion.h2 variants={fadeLeft} className="font-serif text-4xl md:text-5xl text-[#e4f7f3] leading-tight mb-8">
              Uma trajetória construída
              <br />caso a caso.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#5f9ea0] leading-relaxed mb-8">
              A Monitor Valuation foi fundada por profissionais com formação
              dupla em finanças e direito empresarial. Não somos avaliadores
              que aprenderam sobre litígio — somos especialistas em litígio que
              dominam valuation.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#5f9ea0] leading-relaxed mb-10">
              Essa combinação única nos permite antecipar as objeções do
              contraditório, estruturar premissas que resistem ao escrutínio
              judicial e produzir documentos que elevam — não comprometem — a
              tese do escritório.
            </motion.p>
            <motion.ul
              className="space-y-3"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {credentials.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-[#5f9ea0]">
                  <span className="text-[#00F0AC] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-px bg-[#0d4a52]/60"
            initial="hidden" whileInView="visible" viewport={viewport}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.value} variants={scaleIn} className="bg-[#041A1F]/70 backdrop-blur-sm p-10 text-center">
                <div className="font-serif text-4xl text-[#00F0AC] mb-2">{stat.value}</div>
                <div className="text-[#e4f7f3] text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-[#5f9ea0] text-xs">{stat.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
