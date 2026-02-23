import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function Servicos() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/40 backdrop-blur-md border-b border-accent/60 shadow-sm">
  <div className="container py-4 relative flex items-center justify-between">
      
          {/* Logo clicável */}
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
      
          {/* Menu Central */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 text-sm font-medium">
  <Link href="/" className="hover:text-orange-500 transition">Home</Link>
  <Link href="/sobre" className="hover:text-orange-500 transition">Sobre Nós</Link>
  <Link href="/galeria" className="hover:text-orange-500 transition">Galeria</Link>
  <Link href="/servicos" className="hover:text-orange-500 transition">Serviços</Link>
  <Link href="/contato" className="hover:text-orange-500 transition">Contato</Link>
</nav>
      
          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5511975307066?text=Ola%20Gostaria%20de%20Solicitar%20um%20Orçamento%20📝💻😁"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-black rounded-md font-medium transition-all duration-300"
          >
            <FaWhatsapp className="w-5 h-5 text-black" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
      
        </div>
      </header>

      <section className="py-20 container text-center">
        <h2 className="text-4xl font-bold mb-6">Pagina em Desenvolvimento</h2>
        <p className="text-muted-foreground">
          Pagina de Serviços em desenvolvimento para voce poder ver nossos serviços prestados.
        </p>
      </section>

    </div>
  );
}