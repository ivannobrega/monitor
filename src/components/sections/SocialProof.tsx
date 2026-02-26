"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger, viewport } from "@/src/lib/animations";

const testimonials = [
  {
    quote:
      "O laudo da Monitor foi o diferencial que nos permitiu conduzir a negociação em termos absolutamente favoráveis. Técnica impecável e linguagem processual que facilitou enormemente a sustentação oral.",
    author: "Dr. Marcelo Fontes",
    role: "Sócio",
    firm: "Fontes & Associados Advogados",
    location: "São Paulo · SP",
    initials: "MF",
    avatarBg: "#0d4a52",
  },
  {
    quote:
      "Trabalhamos em uma disputa societária de alto valor e a profundidade técnica dos pareceres da Monitor não deixou margem para questionamentos. Resolvemos o caso no prazo que precisávamos.",
    author: "Dra. Ana Beatriz Lemos",
    role: "Sócia Fundadora",
    firm: "Lemos Lima Sociedade de Advogados",
    location: "Rio de Janeiro · RJ",
    initials: "AL",
    avatarBg: "#083338",
  },
  {
    quote:
      "A capacidade deles de traduzir conceitos financeiros complexos para o ambiente do processo arbitral é única no mercado. Recorreremos a eles em todos os casos de arbitragem que conduzirmos.",
    author: "Dr. Ricardo Albuquerque",
    role: "Sócio de Arbitragem",
    firm: "Albuquerque Neto Advocacia",
    location: "Brasília · DF",
    initials: "RA",
    avatarBg: "#062B2E",
  },
];

const logosPlaceholder = [
  "Escritório Alves & Souza",
  "Pereira Costa Advogados",
  "Machado Lima Jurídico",
  "Grupenmacher & Cia",
  "Torres Rocha Advocacia",
  "Barros Neto Sociedade",
];

export default function SocialProof() {
  return (
    <section className="bg-[#041A1F] py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-6 font-medium">
            Clientes & Resultados
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#e4f7f3] leading-tight mb-16 max-w-2xl">
            O que dizem os sócios que confiam na Monitor.
          </motion.h2>
        </motion.div>

        {/* Testimonials — stagger */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={fadeUp}
              className="bg-[#062B2E] p-8 flex flex-col hover:bg-[#083338] transition-colors duration-300"
            >
              <span className="font-serif text-[#00F0AC]/30 text-6xl leading-none mb-4 select-none">"</span>
              <p className="text-[#5f9ea0] text-sm leading-relaxed mb-8 flex-1 italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border border-[#0d4a52]"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  <span className="font-serif text-[#00F0AC] text-sm font-medium select-none">
                    {t.initials}
                  </span>
                </div>
                {/* Info */}
                <div>
                  <p className="text-[#e4f7f3] text-sm font-medium leading-tight">{t.author}</p>
                  <p className="text-[#5f9ea0] text-xs mt-0.5">{t.role} · {t.firm}</p>
                  <p className="text-[#0a5a60] text-xs mt-0.5 tracking-wide">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos strip */}
        <motion.div
          className="pt-12"
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#0a5a60] text-xs tracking-[0.2em] uppercase text-center mb-8">
            Escritórios que já confiam na Monitor Valuation
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {logosPlaceholder.map((name) => (
              <motion.span
                key={name}
                variants={fadeIn}
                className="text-[#0d4a52] text-sm tracking-wide hover:text-[#0a5a60] transition-colors duration-300 select-none"
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
