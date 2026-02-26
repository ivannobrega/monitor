"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, stagger, viewport } from "@/src/lib/animations";

const bullets = [
  "Quanto vale o negócio em uma cisão?",
  "A empresa está subprecificada em uma venda?",
  "Qual o valor de referência para um programa de stock options?",
];

export default function Statement() {
  return (
    <section className="flex flex-col lg:flex-row overflow-hidden min-h-screen">

      {/* ── Esquerda — imagem, opacidade original, corte horizontal ── */}
      {/* mobile: aparece embaixo (order-2) / desktop: à esquerda (order-1) */}
      <div className="relative order-2 lg:order-1 lg:w-1/2 min-h-[60vh] lg:min-h-screen">
        <Image
          src="/Images/homem.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── Direita — texto, fundo neutro claro ────────────────────── */}
      {/* mobile: aparece em cima (order-1) / desktop: à direita (order-2) */}
      <div className="order-1 lg:order-2 lg:w-1/2 flex items-center bg-[#f5f3f0] px-8 md:px-12 lg:px-16 py-24 lg:py-0">
        <motion.div
          className="w-full max-w-lg"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {/* Headline — grande, serif, escuro */}
          <motion.h2
            variants={fadeRight}
            className="font-serif text-4xl md:text-5xl lg:text-[52px] leading-[1.1] tracking-tight text-[#041A1F] mb-8"
          >
            O advogado muitas vezes se vê sozinho ao aconselhar ajustes
            societários ou vendas de empresas.
          </motion.h2>

          {/* Sub — menor, muted */}
          <motion.p
            variants={fadeUp}
            className="text-[#3a4a45] text-lg md:text-xl leading-relaxed mb-10"
          >
            Sem uma modelagem financeira, a decisão fica sem embasamento.
          </motion.p>

          {/* Bullet points */}
          <motion.ul
            className="space-y-4"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
          >
            {bullets.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <span className="text-[#00F0AC] shrink-0 mt-[3px] text-xl leading-none select-none">
                  —
                </span>
                <span className="text-[#041A1F] text-base md:text-lg leading-snug">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

    </section>
  );
}
