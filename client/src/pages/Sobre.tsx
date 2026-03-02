import { Card } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { useState } from "react";
import { Instagram, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Analytics } from "@vercel/analytics/next"

export default function Sobre() {
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

      <section className="container mx-auto py-16 px-4 md:px-6 space-y-20">

        {/* HERO */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Uma paixão que virou profissão
          </h1>
          <p className="text-muted-foreground text-lg">
            Da Lan House do interior aos atendimentos especializados em Carapicuíba.
          </p>
        </div>

        {/* FOTO + INTRO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
            <img
              src="/images/sobre/familia.jpg"
              alt="Willian Sergio e família"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed break-words">
            <p>
              Meu nome é <strong className="text-foreground">Willian Sergio</strong>,
              fundador da Will Info Gamer, marido e pai de dois filhos.
            </p>

            <p>
              Sou natural de Cabreúva, onde tive meu primeiro contato com computadores
              aos 12 anos, na época do grande “boom” das Lan Houses.
              Foi ali que nasceu minha paixão pela tecnologia.
            </p>

            <p>
              Nem sempre eu tinha dinheiro para ficar horas ali.
              Mas cada oportunidade era aproveitada ao máximo.
              Eu sabia que aquilo era mais do que jogo — era aprendizado.
            </p>

            <p>
            Aos 15 anos conquistei meu primeiro emprego registrado com um objetivo muito claro:
            ter meu próprio computador.
            Com muito esforço, comprei meu primeiro PC nas Casas Bahia.
          </p>

          <p>
            Foram horas e horas aprendendo, desmontando, montando,
            entendendo cada peça e cada detalhe.
            Foi nesse momento que descobri meu talento para manutenção e montagem.
          </p>

          <p>
            Sempre fui autodidata. Sempre gostei de entender como as coisas funcionam.
            E quando se trata de tecnologia, eu simplesmente resolvo.
          </p>

          <p>
            Em Cabreúva realizei diversas manutenções e montagens,
            inclusive computadores gamers mais complexos.
            Porém, por ser uma cidade pequena, as oportunidades eram limitadas.
          </p>
          </div>
        </div>

        {/* HISTÓRIA COMPLETA */}
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed break-words">
          
          

          <p>
            Minha grande virada aconteceu quando conheci minha esposa
            e me mudei para Carapicuíba.
            Em uma região mais populosa, meu trabalho ganhou força,
            minha página no Google foi transferida,
            e o negócio realmente decolou.
          </p>

          <p>
            Hoje, com mais de <strong className="text-foreground">14 anos de experiência</strong>,
            já atendi centenas de clientes,
            trabalhei com computadores gamers,
            notebooks, microcomputadores corporativos,
            manutenção preventiva empresarial,
            montagens sob demanda e upgrades personalizados.
          </p>

          <p>
            Sou casado, pai de dois filhos,
            e levo para o meu trabalho os mesmos valores que levo para minha casa:
            responsabilidade, honestidade e cuidado.
          </p>
        </div>

        {/* CARDS EXPERIÊNCIA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:scale-105 transition-all duration-300 border border-border bg-secondary/20">
            <h3 className="text-3xl font-bold text-accent">14+</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Anos de experiência
            </p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-all duration-300 border border-border bg-secondary/20">
            <h3 className="text-3xl font-bold text-accent">Centenas</h3>
            <p className="text-sm text-muted-foreground mt-2">
              De clientes atendidos e satisfeitos
            </p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-all duration-300 border border-border bg-secondary/20">
            <h3 className="text-3xl font-bold text-accent">PC Gamer</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Especialista em montagem de maquinas poderosas
            </p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-all duration-300 border border-border bg-secondary/20">
            <h3 className="text-3xl font-bold text-accent">Atendimento a Domicilio</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Atendimento personalizado para seu conforto
            </p>
          </Card>
        </div>

        {/* DIFERENCIAL */}
        <div className="bg-secondary/30 border border-border rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Meu Diferencial
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Eu trabalho no computador do cliente como se fosse o meu.
            Com o mesmo carinho, atenção e responsabilidade.
          </p>
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
