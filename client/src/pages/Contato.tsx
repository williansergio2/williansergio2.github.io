import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { useState } from "react";
import { Instagram, Mail } from "lucide-react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    outraCidade: "",
    mensagem: "",
  });
  const [cepErro, setCepErro] = useState("");

  const cidadesAtendidas = [
    "Carapicuíba",
    "Barueri",
    "Osasco",
    "Cotia",
    "Jandira",
    "Itapevi",
    "Embu das Artes",
    "Santana de Parnaíba",
    "Outras",
  ];

  const buscarCEP = async (cep: string) => {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setForm((prev) => ({
          ...prev,
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar CEP");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "cep") buscarCEP(value);
  };

  const enviarWhatsApp = () => {
    const cidadeFinal =
      form.cidade === "Outras" ? form.outraCidade : form.cidade;

    const mensagem = `
Olá Will Info Gamer 👋

📌 Novo Contato pelo Site

Nome: ${form.nome}
Telefone: ${form.telefone}
Email: ${form.email}
CEP: ${form.cep}
Endereço: ${form.rua}, Nº ${form.numero}
Bairro: ${form.bairro}
Cidade: ${cidadeFinal}

Mensagem:
${form.mensagem}
`;

    const url = `https://wa.me/5511975307066?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER ORIGINAL */}
      <header className="sticky top-0 z-50 bg-background/40 backdrop-blur-md border-b border-accent/60 shadow-sm">
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

          <nav className="absolute left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <Link href="/sobre" className="hover:text-orange-500 transition">Sobre Nós</Link>
            <Link href="/galeria" className="hover:text-orange-500 transition">Galeria</Link>
            <Link href="/servicos" className="hover:text-orange-500 transition">Serviços</Link>
            <Link href="/contato" className="hover:text-orange-500 transition">Contato</Link>
          </nav>

          <a
            href="https://wa.me/5511975307066"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-black rounded-md font-medium transition-all duration-300"
          >
            <FaWhatsapp className="w-5 h-5 text-black" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* FORMULÁRIO */}
      <section className="container mx-auto py-16 px-4 md:px-6 space-y-16">

        <div className="max-w-3xl mx-auto bg-secondary/30 border border-border rounded-2xl p-10 shadow-lg space-y-6">

          <h1 className="text-3xl font-bold text-center">
            Entre em Contato
          </h1>

          <input type="text" name="nome" placeholder="Nome Completo"
            onChange={handleChange}
            className="w-full p-3 rounded border border-border bg-background" />

          <input type="text" name="telefone" placeholder="Telefone"
            onChange={handleChange}
            className="w-full p-3 rounded border border-border bg-background" />

          <input type="email" name="email"
            placeholder="Endereço de Email"
            onChange={handleChange}
            className="w-full p-3 rounded border border-border bg-background" />

          <input type="text" name="cep" placeholder="CEP"
            onChange={handleChange}
            className="w-full p-3 rounded border border-border bg-background" />

          {/* Rua + Número */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              name="rua"
              placeholder="Nome da Rua"
              value={form.rua}
              onChange={handleChange}
              className="md:col-span-2 p-3 rounded border border-border bg-background"
            />

            <input
              type="text"
              name="numero"
              placeholder="N°"
              value={form.numero}
              onChange={handleChange}
              className="p-3 rounded border border-border bg-background"
            />
          </div>

          {/* Bairro */}
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={form.bairro}
            onChange={handleChange}
            className="w-full p-3 rounded border border-border bg-background"
          />

          <select name="cidade"
            onChange={handleChange}
            className="w-full p-3 rounded border border-border bg-background">
            <option value="">Selecione a cidade</option>
            {cidadesAtendidas.map((cidade) => (
              <option key={cidade} value={cidade}>{cidade}</option>
            ))}
          </select>

          {form.cidade === "Outras" && (
            <input type="text" name="outraCidade"
              placeholder="Digite a cidade e o estado"
              onChange={handleChange}
              className="w-full p-3 rounded border border-border bg-background" />
          )}

          

          <textarea name="mensagem"
            placeholder="Escreva sua mensagem..."
            onChange={handleChange}
            className="w-full p-3 rounded border border-border bg-background min-h-[120px]" />

          <button
            onClick={enviarWhatsApp}
            className="w-full py-3 bg-accent hover:bg-accent/90 text-black font-bold rounded-md transition flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            Enviar pelo WhatsApp
          </button>
        </div>

        {/* Widgets mantidos */}
        <div className="elfsight-widget">
          <div className="elfsight-app-68dfc76f-1250-44f4-ba93-9a43edd1711d" data-elfsight-app-lazy></div>
        </div>

        <div className="mt-10">
          <div className="elfsight-app-66f698d5-14c6-4567-944c-9fb0f9815f67"></div>
        </div>

      </section>

      {/* FOOTER COMPLETO ORIGINAL RESTAURADO */}
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