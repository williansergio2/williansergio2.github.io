import { Card } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { useState } from "react";
import { Mail, Instagram, X } from "lucide-react";

export default function Servicos() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [backupSize, setBackupSize] = useState("");
  const [observacao, setObservacao] = useState("");

  // 🔥 Serviços principais apenas estão primeiro na lista
  const services = [
  // 🔥 PRINCIPAIS
  {
    title: "Montagem de Computador",
    description:
      "Montagem com peças do cliente, organização de cabos e aplicação de Pasta Térmica de Alta Eficiência de 12,5w/mk.",
  },
  {
    title: "Montagem Sob Medida",
    description:
      "Computador completo planejado sob demanda.",
  },
  {
    title: "Limpeza Completa Premium",
    description:
      "Desmontagem total, limpeza peça por peça e aplicação de Pasta Térmica de Alta Eficiência de 12,5w/mk.",
  },
  { title: "Formatação / Instalação Windows", description: "Instalação Windows 7, 10 ou 11 com drivers atualizados e pacote Office incluso.",},

  // 🔧 COMPLEMENTARES
  { title: "Limpeza Preventiva", description: "Limpeza interna sem desmontagem total, troca por pasta termica prata de 5 w/mk" },
  { title: "Avaliação Técnica", description: "Diagnóstico completo sujeito a avaliação." },
  { title: "Manutenção Corporativa", description: "Manutenção para lotes de computadores de empresas ou escritorios, instalação dos equipamentos e preparação de embiente de trabalho " },
  { title: "Troca de Hardware", description: "Substituição de componentes sob avaliação." },
  { title: "Troca de Bateria da Placa Mãe", description: "Substituição da bateria CMOS." },
  { title: "Atualização de BIOS", description: "Procedimento executado com segurança." },
  { title: "Limpeza Completa de Placa de Vídeo", description: "Limpeza interna com troca de pasta térmica por pasta de alta eficiencia de 12,5w/mk" },
  { title: "Remoção de Vírus", description: "Limpeza completa contra virus." },
  { title: "Otimização de Sistema", description: "Correção de lentidão e travamentos." },
  { title: "Instalação de Programas", description: "Instalação de softwares como Office, Photoshop, Autocad e CorelDRAW." },
  { title: "Manutenção de Notebook", description: "Manutenção geral para notebooks, descreva sua necessidade a baixo do pedido" },
  { title: "Backup de Dados", description: "Backup seguro conforme volume selecionado." },
  { title: "Configuração de Rede", description: "Configuração de roteador e rede doméstica." },
  { title: "Instalação de Setup Completo", description: "Organização e instalação completa do computador e seu local de uso" },
  { title: "Venda de Peças Sob Encomenda", description: "Fornecimento de componentes." },
  { title: "Troca de Cabos e Periféricos", description: "Substituição sob necessidade." },
  { title: "Montagem de Setup Gamer", description: "Montagem completa de ambiente gamer." },
  { title: "Não encontrei oque preciso", description: "Não encontrei oque preciso, liste sua necessidade no compo de pedido" },
  //{ title: "Montagem de Setup Gamer", description: "Montagem completa de ambiente gamer." },
];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };
const removeService = (service: string) => {
  setSelectedServices((prev) => prev.filter((s) => s !== service));
};
  const generateWhatsAppMessage = () => {
    let message = `Olá Will Info Gamer 👋\n\nGostaria de solicitar os seguintes serviços:\n\n`;

    selectedServices.forEach((service) => {
      message += `- ${service}\n`;
    });

    if (backupSize) message += `- Backup ${backupSize}\n`;
    if (observacao)
      message += `\nObservações:\n${observacao}\n`;

    message += `\nAguardo retorno.`;

    const url = `https://wa.me/5511975307066?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background text-foreground">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container py-4 relative flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357228819/EJqSyXEfbZYGZfem.png"
              alt="Will Info Gamer"
              className="h-10 w-auto"
            />
            <div className="hidden sm:flex flex-col">
              <h1 className="text-lg font-bold text-foreground">
                Will Info Gamer
              </h1>
              <p className="text-xs text-muted-foreground">
                Manutenção de Computadores
              </p>
            </div>
          </Link>

          <nav className="absolute left-1/2 -translate-x-1/2 flex gap-4 text-sm font-medium">
            <Link href="/" className="hover:text-accent">Home</Link>
            <Link href="/sobre" className="hover:text-accent">Sobre</Link>
            <Link href="/galeria" className="hover:text-accent">Galeria</Link>
            <Link href="/servicos" className="text-accent font-semibold">Serviços</Link>
            <Link href="/contato" className="hover:text-accent">Contato</Link>
          </nav>

          <a
            href="https://wa.me/5511975307066"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-black rounded-md font-medium transition"
          >
            <FaWhatsapp className="w-5 h-5 text-black" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="container mx-auto py-16 px-4 md:px-6 space-y-16">

        {/* TÍTULO */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Lista com nossos Serviços
          </h1>
          <p className="text-muted-foreground text-lg">
            Veja nossa lista de serviços, caso não encontre oque precisa basta escrever a baixo em pedidos.
          </p>
        </div>

        {/* CAIXA EXTERNA DOS SERVIÇOS */}
<div className="bg-secondary/10 backdrop-blur-md border border-border rounded-2xl p-8 shadow-lg">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map((service, index) => {
      const isSelected = selectedServices.includes(service.title);

      return (
        <Card
          key={index}
          onClick={() => toggleService(service.title)}
          className={`p-6 cursor-pointer transition-all duration-300 border rounded-xl
${
  isSelected
    ? "border-accent bg-secondary/40 scale-105 shadow-[0_0_25px_rgba(255,140,0,0.5)]"
    : "border-border bg-secondary/20 hover:scale-105 hover:border-accent/60 hover:shadow-[0_0_20px_rgba(255,140,0,0.35)]"
}`}
        >
          <h3 className="text-xl font-bold mb-2">
            {service.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            {service.description}
          </p>

          <p className="text-xs text-muted-foreground">
            💬 Preço sob consulta
          </p>

          {isSelected && (
            <p className="text-accent text-sm mt-2">
              ✔ Adicionado ao pedido
            </p>
          )}
        </Card>
      );
    })}
  </div>

</div>

        {/* PEDIDO */}
        <div className="bg-secondary/30 backdrop-blur-md border border-border rounded-2xl p-8 space-y-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center">
            Seu Pedido
          </h2>

          {selectedServices.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {selectedServices.map((service, index) => (
                <li
  key={index}
  className="flex justify-between items-center bg-background/60 px-4 py-2 rounded-md border border-border"
>
  <span>{service}</span>

  <button
    type="button"
    onClick={() => removeService(service)}
    className="text-red-500 hover:text-red-400 transition"
  >
    <X size={16} />
  </button>
</li>
              ))}
            </ul>
          )}

          <div>
            <label className="block mb-2 font-semibold">
              Backup (Opcional)
            </label>
            <select
              value={backupSize}
              onChange={(e) => setBackupSize(e.target.value)}
              className="w-full p-2 rounded bg-background border border-border"
            >
              <option value="">Não preciso de Backup</option>
              <option value="5GB">5GB</option>
              <option value="10GB">10GB</option>
              <option value="20GB">20GB</option>
              <option value="50GB">50GB</option>
              <option value="100GB">100GB</option>
            </select>
          </div>

          <textarea
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            placeholder="Descreva aqui o problema ou necessidade..."
            className="w-full p-3 rounded bg-background border border-border min-h-[120px]"
          />

          <button
            onClick={generateWhatsAppMessage}
            disabled={selectedServices.length === 0}
            className="w-full py-3 bg-accent hover:bg-accent/90 text-black font-bold rounded-md transition disabled:opacity-50"
          >
            Finalizar pelo WhatsApp
          </button>
        </div>

      </section>

      {/* FOOTER ORIGINAL */}
      <footer className="bg-secondary/30 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357228819/EJqSyXEfbZYGZfem.png"
                  alt="Will Info Gamer"
                  className="h-8 w-auto"
                />
                <span className="font-bold">Will Info Gamer</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Manutenção e assistência técnica especializada em computadores e PCs Gamer
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Contato</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="https://wa.me/5511975307066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                  WhatsApp: (11) 97530-7066
                </a>
                <a
                  href="mailto:willian.sergio2@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  willian.sergio2@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Redes Sociais</h4>
              <a
                href="https://instagram.com/willinfogamer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm"
              >
                <Instagram className="w-4 h-4" />
                @willinfogamer
              </a>
            </div>

          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Will Info Gamer. Todos os direitos reservados.</p>
            <p className="mt-2">
              Atendimento em Carapicuíba, Barueri, Osasco, Cotia, Jandira,
              Itapevi, Embu das Artes e Santana de Parnaíba
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}