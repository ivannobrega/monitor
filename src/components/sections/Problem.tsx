"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewport } from "@/src/lib/animations";

const problems = [
  {
    number: "01",
    title: "Laudos genéricos que não resistem ao contraditório",
    description:
      "Avaliações padronizadas carecem de metodologia robusta e exposição contextual, fragilizando a tese do escritório em momentos decisivos.",
  },
  {
    number: "02",
    title: "Peritos sem experiência em litígio de alto valor",
    description:
      "A maioria dos avaliadores opera em contextos contábeis, sem compreender a dinâmica processual e as exigências probatórias do ambiente jurídico.",
  },
  {
    number: "03",
    title: "Risco reputacional em operações estratégicas",
    description:
      "Um laudo questionável em uma causa de R$ 100 milhões pode comprometer anos de relacionamento com o cliente e a credibilidade do escritório.",
  },
  {
    number: "04",
    title: "Assimetria de informação nas negociações",
    description:
      "Sem inteligência financeira adequada, o escritório entra em acordos e mediações sem visibilidade real sobre o valor justo do ativo em disputa.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="bg-[#062B2E] py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-20"
        >
          {/* Section label */}
          <motion.p
            variants={fadeUp}
            className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-6 font-medium"
          >
            O Problema
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={scaleIn}
            className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#e4f7f3] leading-tight mb-6 max-w-3xl mx-auto"
          >
            O que está em jogo quando o valuation é fraco.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#5f9ea0] text-lg leading-relaxed max-w-xl mx-auto"
          >
            Grandes escritórios dominam o direito, mas dependem de terceiros
            para quantificar o valor real das disputas que conduzem.
          </motion.p>
        </motion.div>

        {/* Problem grid — 2 × 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {problems.map((item) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <span className="font-serif text-[#00F0AC]/20 text-6xl leading-none mb-4 select-none">
                {item.number}
              </span>
              <h3 className="text-[#e4f7f3] font-medium text-base md:text-lg mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#5f9ea0] text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
