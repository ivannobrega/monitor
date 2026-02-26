"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Negócios", href: "#negocios" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#041A1F]/95 backdrop-blur-md"
          : "bg-gradient-to-b from-[#041A1F]/60 to-transparent"
      }`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="shrink-0">
          <Image
            src="/Brand/LogoDark.svg"
            alt="Monitor Valuation"
            width={160}
            height={40}
            className="w-auto h-7 md:h-8"
            priority
          />
        </a>

        {/* Links — desktop only */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#e4f7f3]/50 hover:text-[#e4f7f3] text-[11px] tracking-[0.18em] uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#inicio"
          className="hidden md:inline-flex items-center bg-[#00F0AC] hover:bg-[#00d49a] text-[#041A1F] font-semibold text-[11px] tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300"
        >
          Agendar Reunião
        </a>

      </div>
    </motion.nav>
  );
}
