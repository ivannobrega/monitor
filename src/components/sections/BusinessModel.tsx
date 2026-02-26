"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "@/src/lib/animations";

const steps = [
  {
    step: "01",
    title: "Briefing estratégico",
    description:
      "Uma conversa confidencial para compreender o caso, a tese jurídica, os prazos e o nível de exposição. Sem custo, sem compromisso.",
    duration: "30–60 minutos",
  },
  {
    step: "02",
    title: "Escopo e proposta",
    description:
      "Definição do escopo técnico, metodologia aplicável e proposta comercial transparente. Nenhuma surpresa ao longo do processo.",
    duration: "24–48 horas",
  },
  {
    step: "03",
    title: "Trabalho técnico",
    description:
      "Execução da avaliação pela equipe sênior. Acesso direto ao responsável pelo trabalho durante todo o processo.",
    duration: "Conforme o caso",
  },
  {
    step: "04",
    title: "Revisão e entrega",
    description:
      "O laudo é revisado internamente antes da entrega, testado contra os principais vetores de questionamento do contraditório.",
    duration: "Incluso no prazo",
  },
  {
    step: "05",
    title: "Suporte contínuo",
    description:
      "Após a entrega, estamos disponíveis para esclarecimentos, quesitos, audiências e sustentação oral quando necessário.",
    duration: "Pós-entrega",
  },
];

export default function BusinessModel() {
  return (
    <section id="negocios" className="bg-[#041A1F] py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start mb-16"
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
        >
          <div>
            <motion.p variants={fadeUp} className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-6 font-medium">
              Como Trabalhamos
            </motion.p>
            <motion.h2 variants={fadeLeft} className="font-serif text-4xl md:text-5xl text-[#e4f7f3] leading-tight">
              Um processo desenhado para a confiança.
            </motion.h2>
          </div>
          <motion.p variants={fadeRight} className="text-[#5f9ea0] text-lg leading-relaxed self-end">
            Da primeira conversa à sustentação em audiência — transparência,
            rigor e comunicação direta em cada etapa.
          </motion.p>
        </motion.div>

        {/* Timeline steps — stagger */}
        <div className="relative">
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[#0d4a52] hidden md:block" />

          <motion.div
            className="space-y-3"
            initial="hidden" whileInView="visible" viewport={viewport}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {steps.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative grid md:grid-cols-[80px_1fr_160px] gap-6 items-start bg-[#041A1F] hover:bg-[#062B2E] transition-colors duration-300 p-6 md:p-8 border border-[#0d4a52]"
              >
                <div className="relative flex items-center gap-4 md:flex-col md:items-center md:gap-0">
                  <div className="w-11 h-11 rounded-full border border-[#0d4a52] bg-[#041A1F] flex items-center justify-center shrink-0 z-10">
                    <span className="font-serif text-[#00F0AC] text-sm">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#e4f7f3] font-medium mb-2">{item.title}</h3>
                  <p className="text-[#5f9ea0] text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="md:text-right">
                  <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-[#0a5a60] border border-[#0d4a52] px-3 py-1.5">
                    {item.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
