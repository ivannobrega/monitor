"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "@/src/lib/animations";

const services = [
  {
    index: "01",
    title: "Valuation para Litígios",
    description:
      "Laudos periciais e pareceres técnicos para disputas societárias, dissolução de sociedades, apuração de haveres e processos de indenização.",
    tags: ["Parecer Técnico", "Laudo Pericial", "Contraditório"],
  },
  {
    index: "02",
    title: "Avaliação em M&A Contencioso",
    description:
      "Suporte técnico em operações de fusões e aquisições com elementos litigiosos: earn-outs, cláusulas de ajuste e disputas pós-fechamento.",
    tags: ["Due Diligence", "Earn-out", "Pós-fechamento"],
  },
  {
    index: "03",
    title: "Análise de Danos Econômicos",
    description:
      "Quantificação de perdas e lucros cessantes em casos de responsabilidade civil, quebra de contrato e concorrência desleal.",
    tags: ["Lucros Cessantes", "Responsabilidade Civil", "Perdas"],
  },
  {
    index: "04",
    title: "Consultoria Estratégica Pré-Litígio",
    description:
      "Análise de viabilidade econômica antes do ingresso em juízo: avaliação do ativo em disputa, cenários de acordo e estratégia de negociação.",
    tags: ["Acordo", "Mediação", "Estratégia"],
  },
  {
    index: "05",
    title: "Segunda Opinião Técnica",
    description:
      "Revisão crítica de laudos adversariais: identificação de falhas metodológicas, premissas inadequadas e conclusões insustentáveis.",
    tags: ["Revisão de Laudo", "Contra-perícia", "Análise Crítica"],
  },
  {
    index: "06",
    title: "Assessoria em Arbitragem",
    description:
      "Suporte especializado em procedimentos arbitrais de alto valor: preparação de expert witness, pareceres e suporte durante audiências.",
    tags: ["Arbitragem", "Expert Witness", "CAM-CCBC"],
  },
];

export default function Services() {
  return (
    <section className="bg-[#041A1F] py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
        >
          <div>
            <motion.p variants={fadeUp} className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-6 font-medium">
              Serviços
            </motion.p>
            <motion.h2 variants={fadeLeft} className="font-serif text-4xl md:text-5xl text-[#e4f7f3] leading-tight max-w-lg">
              Inteligência financeira para cada estágio do litígio.
            </motion.h2>
          </div>
          <motion.p variants={fadeRight} className="text-[#5f9ea0] text-sm max-w-xs leading-relaxed md:text-right">
            Do pré-litígio à arbitragem internacional — cobertura técnica
            completa para o escritório de alto valor.
          </motion.p>
        </motion.div>

        {/* Services grid — stagger */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0d4a52]"
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {services.map((service) => (
            <motion.div
              key={service.index}
              variants={fadeUp}
              className="bg-[#041A1F] p-8 group hover:bg-[#062B2E] transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="font-serif text-[#00F0AC]/30 text-2xl leading-none mt-0.5 select-none">
                  {service.index}
                </span>
                <h3 className="font-serif text-lg text-[#e4f7f3] leading-snug group-hover:text-[#00F0AC] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-[#5f9ea0] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-wider uppercase text-[#0a5a60] border border-[#0d4a52] px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
