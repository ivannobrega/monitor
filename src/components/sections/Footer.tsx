import Image from "next/image";

const links = {
  services: [
    { label: "Valuation para Litígios", href: "#servicos" },
    { label: "Avaliação em M&A Contencioso", href: "#servicos" },
    { label: "Análise de Danos Econômicos", href: "#servicos" },
    { label: "Segunda Opinião Técnica", href: "#servicos" },
    { label: "Assessoria em Arbitragem", href: "#servicos" },
  ],
  company: [
    { label: "Sobre a Monitor", href: "#autoridade" },
    { label: "Programa de Parceria", href: "#parceria" },
    { label: "Como Trabalhamos", href: "#modelo" },
    { label: "Contato", href: "#cta" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#041A1F] border-t border-[#0d4a52]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl text-[#e4f7f3] leading-snug max-w-md mb-6">
              Inteligência financeira e valuation especializado para escritórios
              jurídicos de alto valor.
            </p>
            <div className="space-y-1">
              <p className="text-[#5f9ea0] text-xs">
                <span className="text-[#0a5a60]">E:</span>{" "}
                contato@monitorvaluation.com.br
              </p>
              <p className="text-[#5f9ea0] text-xs">
                <span className="text-[#0a5a60]">T:</span>{" "}
                +55 (11) 9 9999-9999
              </p>
              <p className="text-[#5f9ea0] text-xs">
                <span className="text-[#0a5a60]">L:</span>{" "}
                São Paulo, SP — Brasil
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#00F0AC] tracking-[0.2em] text-xs uppercase mb-6 font-medium">
              Serviços
            </p>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#5f9ea0] text-sm hover:text-[#e4f7f3] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[#00F0AC] tracking-[0.2em] text-xs uppercase mb-6 font-medium">
              Empresa
            </p>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#5f9ea0] text-sm hover:text-[#e4f7f3] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Swoosh divider — full width */}
      <div className="w-full opacity-30">
        <Image src="/Brand/Swoosh.png" alt="" width={1920} height={220} className="w-full h-auto" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0a5a60]">
        <p>
          © {new Date().getFullYear()} Monitor Valuation. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#5f9ea0] transition-colors duration-200">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#5f9ea0] transition-colors duration-200">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
