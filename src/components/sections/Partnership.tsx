"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "@/src/lib/animations";

const benefits = [
  {
    title: "Prioridade de atendimento",
    description:
      "Escritórios parceiros têm acesso garantido à equipe sênior, sem filas ou redistribuição para analistas júnior.",
  },
  {
    title: "Integração com sua equipe",
    description:
      "Participamos de reuniões internas, calls estratégicos e audiências — agindo como extensão técnica do seu escritório.",
  },
  {
    title: "Sigilo absoluto",
    description:
      "NDAs rigorosos, segmentação de informações e acesso restrito garantem que nenhum conflito de interesse seja possível.",
  },
  {
    title: "Honorários estruturados",
    description:
      "Modelos de remuneração adaptados ao perfil de cada escritório: honorários fixos, por projeto ou estrutura de retainer.",
  },
];

export default function Partnership() {
  return (
    <section className="relative overflow-hidden bg-[#062B2E] py-32 px-6">
      <Image src="/Hero/telescopio.jpg" alt="" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041A1F] from-45% via-[#041A1F]/80 to-[#041A1F]/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#041A1F]/55 via-transparent to-[#041A1F]/65 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — headline + CTA */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#00F0AC] tracking-[0.25em] text-xs uppercase mb-6 font-medium">
              Parceria Estratégica
            </motion.p>
            <motion.h2 variants={fadeLeft} className="font-serif text-4xl md:text-5xl text-[#e4f7f3] leading-tight mb-6">
              Um parceiro técnico
              <br />para o longo prazo.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#5f9ea0] leading-relaxed mb-8">
              Os escritórios que mais nos buscam não procuram um perito para
              um caso isolado. Eles querem um parceiro estratégico que
              compreenda sua carteira, seus clientes e seu padrão de excelência.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#5f9ea0] leading-relaxed mb-12">
              Nosso Programa de Parceria foi desenhado para criar uma relação
              contínua e de confiança — não uma transação pontual.
            </motion.p>
            <motion.button
              variants={fadeUp}
              className="bg-[#00F0AC] hover:bg-[#00d49a] text-[#041A1F] font-semibold text-xs tracking-[0.15em] uppercase px-10 py-4 transition-all duration-300"
            >
              Conhecer o Programa
            </motion.button>
          </motion.div>

          {/* Right — benefit cards */}
          <motion.div
            className="space-y-3"
            initial="hidden" whileInView="visible" viewport={viewport}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeRight}
                className="border border-[#0d4a52]/70 bg-[#041A1F]/65 backdrop-blur-sm p-8 hover:bg-[#041A1F]/80 transition-colors duration-300"
              >
                <h3 className="text-[#e4f7f3] font-medium mb-2">{benefit.title}</h3>
                <p className="text-[#5f9ea0] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
