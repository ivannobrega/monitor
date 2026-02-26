"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "@/src/lib/animations";

const pillars = [
  {
    label: "Metodologia",
    title: "Rigor técnico com linguagem processual",
    description:
      "Nossas avaliações são construídas para o ambiente jurídico: cada premissa documentada, cada método justificado, cada conclusão sustentável sob o contraditório mais exigente.",
  },
  {
    label: "Velocidade",
    title: "Entrega calibrada ao ritmo do litígio",
    description:
      "Compreendemos que prazos judiciais não negociam. Nossa estrutura garante laudos completos e defensáveis dentro das janelas processuais críticas.",
  },
  {
    label: "Parceria",
    title: "Extensão técnica do seu escritório",
    description:
      "Não somos apenas peritos — somos o braço financeiro da sua equipe. Participamos de reuniões estratégicas, audiências e negociações com a discrição que o caso exige.",
  },
];

export default function Solution() {
  return (
    <section id="solucao" className="bg-[#062B2E] py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-6 font-medium">
            A Solução
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.h2 variants={fadeLeft} className="font-serif text-4xl md:text-5xl text-[#e4f7f3] leading-tight">
              Valuation que sustenta
              <br />
              <em className="not-italic text-[#00F0AC]">qualquer tese jurídica.</em>
            </motion.h2>
            <motion.p variants={fadeRight} className="text-[#5f9ea0] text-lg leading-relaxed self-end">
              A Monitor Valuation foi construída a partir de uma premissa única:
              para atender ao direito de alto valor, é preciso dominar tanto a
              linguagem financeira quanto a lógica processual.
            </motion.p>
          </div>
        </motion.div>

        {/* Pillars — stagger */}
        <motion.div
          className="grid md:grid-cols-3 gap-px bg-[#0d4a52]"
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.label}
              variants={fadeUp}
              className="bg-[#062B2E] p-10 group hover:bg-[#083338] transition-colors duration-300"
            >
              <p className="text-[#00F0AC] tracking-[0.2em] text-xs uppercase mb-6 font-medium">
                {pillar.label}
              </p>
              <h3 className="font-serif text-xl text-[#e4f7f3] mb-4 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-[#5f9ea0] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
