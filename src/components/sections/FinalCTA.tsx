"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewport } from "@/src/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#041A1F] py-40 px-6">
      <Image src="/Hero/prisma.jpg" alt="" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#041A1F]/90 via-[#041A1F]/55 to-[#041A1F]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041A1F]/80 via-transparent to-[#041A1F]/80 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
      >
        <motion.p variants={fadeUp} className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-8 font-medium">
          Próximo Passo
        </motion.p>

        <motion.h2 variants={scaleIn} className="font-serif text-4xl md:text-6xl text-[#e4f7f3] leading-tight mb-6">
          O caso do seu cliente
          <br />
          merece o melhor argumento financeiro.
        </motion.h2>

        <motion.p variants={fadeUp} className="text-[#5f9ea0] text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Agende uma conversa confidencial com nossa equipe. Sem apresentações
          comerciais, sem perda de tempo — apenas inteligência técnica aplicada
          ao seu caso.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-xs text-[#5f9ea0]/70 tracking-wide mb-0">
          <span>Sigilo garantido</span>
          <span className="hidden sm:block text-[#0d4a52]">·</span>
          <span>Sem compromisso inicial</span>
          <span className="hidden sm:block text-[#0d4a52]">·</span>
          <span>Resposta em até 4 horas úteis</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
