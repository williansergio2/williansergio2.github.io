import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { useState } from "react";
import { Instagram, Mail, ChevronLeft, ChevronRight } from "lucide-react";

type ModalData = {
  projectIndex: number;
  imageIndex: number;
};

// Fotos dos Cards com os Projetos.
const galleryProjects = [
  {
    title: "Montagem PC Gamer de Entrada",
    description: "Projeto completo de montagem de PC Gamer custo-benefício.",
    images: [
      "/images/montagementrada/01.jpg",
      "/images/montagementrada/02.jpg",
      "/images/montagementrada/03.jpg",
      "/images/montagementrada/04.jpg",
      "/images/montagementrada/05.jpg",
      "/images/montagementrada/06.jpg",
      "/images/montagementrada/07.jpg",
      "/images/montagementrada/08.jpg",
    ],
  },
  {
    title: "Limpeza Completa PC Faraó Tutancâmon",
    description: "Limpeza interna profunda e pesada com troca de pasta térmica premium de 12,5w/mk.",
    images: [
      "/images/limpezacompleta01/01.jpg",
      "/images/limpezacompleta01/02.jpg",
      "/images/limpezacompleta01/03.jpg",
      "/images/limpezacompleta01/04.jpg",
      "/images/limpezacompleta01/05.jpg",
      "/images/limpezacompleta01/06.jpg",
      "/images/limpezacompleta01/07.jpg",
      "/images/limpezacompleta01/08.jpg",
      "/images/limpezacompleta01/09.jpg",
      "/images/limpezacompleta01/10.jpg",
      "/images/limpezacompleta01/11.jpg",
      "/images/limpezacompleta01/12.jpg",
      "/images/limpezacompleta01/13.jpg",
      "/images/limpezacompleta01/14.jpg",
      "/images/limpezacompleta01/15.jpg",
      "/images/limpezacompleta01/16.jpg",
      "/images/limpezacompleta01/17.jpg",
    ],
  },
  {
    title: "Limpeza PC Faraó Ramsés",
    description: "Mais uma limpeza pesada e profunda devido a ausencia de uma manutenção preventiva por muito tempo, pode vir a causar danos aos componentes por oxidação.",
    images: [
      "/images/limpezacompleta02/01.jpg",
      "/images/limpezacompleta02/02.jpg",
      "/images/limpezacompleta02/03.jpg",
      "/images/limpezacompleta02/04.jpg",
      "/images/limpezacompleta02/05.jpg",
      "/images/limpezacompleta02/06.jpg",
      "/images/limpezacompleta02/07.jpg",
      "/images/limpezacompleta02/08.jpg",
      "/images/limpezacompleta02/09.jpg",
      "/images/limpezacompleta02/10.jpg",
      "/images/limpezacompleta02/11.jpg",
      "/images/limpezacompleta02/12.jpg",
      "/images/limpezacompleta02/13.jpg",
      "/images/limpezacompleta02/14.jpg",
      "/images/limpezacompleta02/15.jpg",
      "/images/limpezacompleta02/16.jpg",
      "/images/limpezacompleta02/17.jpg",
      "/images/limpezacompleta02/18.jpg",
      "/images/limpezacompleta02/19.jpg",
      "/images/limpezacompleta02/20.jpg",
      "/images/limpezacompleta02/21.jpg",
      "/images/limpezacompleta02/22.jpg",
      "/images/limpezacompleta02/23.jpg",
      "/images/limpezacompleta02/24.jpg",
      "/images/limpezacompleta02/25.jpg",
      "/images/limpezacompleta02/26.jpg",
      "/images/limpezacompleta02/27.jpg",
      "/images/limpezacompleta02/28.jpg",
      "/images/limpezacompleta02/29.jpg",
      "/images/limpezacompleta02/30.jpg",
      "/images/limpezacompleta02/31.jpg",
      "/images/limpezacompleta02/32.jpg",
      "/images/limpezacompleta02/33.jpg",
      "/images/limpezacompleta02/34.jpg",
      "/images/limpezacompleta02/35.jpg",
      "/images/limpezacompleta02/36.jpg",
      "/images/limpezacompleta02/37.jpg",
      "/images/limpezacompleta02/38.jpg",
      "/images/limpezacompleta02/39.jpg",
      "/images/limpezacompleta02/40.jpg",
      "/images/limpezacompleta02/41.jpg",
      "/images/limpezacompleta02/42.jpg",
      ],
  },
  {
    title: "Montagem PC Gamer, Cliente Wesley",
    description: "Montagem de uma configuração adquirida pelo cliente.",
    images: [
      "/images/montagem01/07.jpg",
      "/images/montagem01/01.jpg",
      "/images/montagem01/02.jpg",
      "/images/montagem01/03.jpg",
      "/images/montagem01/04.jpg",
      "/images/montagem01/05.jpg",
      "/images/montagem01/06.jpg",
      "/images/montagem01/08.jpg",
      "/images/montagem01/09.jpg",
      ],
  },
  {
    title: "Troca de Placa mãe, fonte e venda de placa de video",
    description: "Troca de Componentes internos, Placa mae, fonte, e cliente adquiriu conosco uma placa de video GTX 660 TI Boost",
    images: [
      "/images/trocaplacamae/01.jpg",
      "/images/trocaplacamae/02.jpg",
      "/images/trocaplacamae/03.jpg",
      "/images/trocaplacamae/04.jpg",
      "/images/trocaplacamae/05.jpg",
      "/images/trocaplacamae/06.jpg",
      "/images/trocaplacamae/07.jpg",
    ],
  },
  {
    title: "Montagem di PC Gamer TOP",
    description: "Montagem de uma configuração bem forte adquirida pelo cliente.",
    images: [
      "/images/montagem03/01.jpg",
      "/images/montagem03/02.jpg",  
      "/images/montagem03/03.jpg",
      "/images/montagem03/04.jpg",
      "/images/montagem03/05.jpg",
      "/images/montagem03/06.jpg",
      "/images/montagem03/07.jpg",
      "/images/montagem03/08.jpg",
      "/images/montagem03/09.jpg",
      "/images/montagem03/10.jpg",
      "/images/montagem03/11.jpg",
      "/images/montagem03/12.jpg",
      "/images/montagem03/13.jpg",
      "/images/montagem03/14.jpg",
      "/images/montagem03/15.jpg",
      "/images/montagem03/16.jpg",
      "/images/montagem03/17.jpg",
      "/images/montagem03/18.jpg",
      "/images/montagem03/19.jpg",
      "/images/montagem03/20.jpg",    
      "/images/montagem03/21.jpg",
      "/images/montagem03/22.jpg",
      "/images/montagem03/23.jpg",
      "/images/montagem03/24.jpg",
      "/images/montagem03/25.jpg",
      "/images/montagem03/26.jpg",
      "/images/montagem03/27.jpg",
      "/images/montagem03/28.jpg",
      "/images/montagem03/29.jpg",
    ],
  },
];

export default function Galeria() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const nextImage = () => {
    if (!modalData) return;
    const total =
      galleryProjects[modalData.projectIndex].images.length;

    setModalData({
      ...modalData,
      imageIndex: (modalData.imageIndex + 1) % total,
    });
  };

  const prevImage = () => {
    if (!modalData) return;
    const total =
      galleryProjects[modalData.projectIndex].images.length;

    setModalData({
      ...modalData,
      imageIndex:
        (modalData.imageIndex - 1 + total) % total,
    });
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

      {/* CONTEÚDO */}
      <section className="py-20 sm:py-32 bg-secondary/10">
        <div className="container space-y-16">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Nosso Portfólio de Trabalhos
            </h2>
            <p className="text-muted-foreground text-lg">
              Confira alguns dos serviços realizados pela Will Info Gamer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryProjects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="bg-secondary/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 border border-border/40 hover:border-accent/40 transition-all duration-300"
              >
                <div className="h-64 overflow-hidden bg-black/20">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover cursor-pointer transition duration-500 hover:scale-110"
                    onClick={() =>
                      setModalData({
                        projectIndex,
                        imageIndex: 0,
                      })
                    }
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  <button
                    onClick={() =>
                      setModalData({
                        projectIndex,
                        imageIndex: 0,
                      })
                    }
                    className="mt-4 inline-flex items-center px-4 py-2 bg-accent text-black rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Ver Projeto
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL MELHORADO MAS LEVE */}
      {modalData && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
          onClick={() => setModalData(null)}
        >
          <div
            className="relative max-w-4xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                galleryProjects[modalData.projectIndex].images[
                  modalData.imageIndex
                ]
              }
              alt="Projeto"
              className="max-h-[85vh] rounded-xl shadow-2xl"
            />

            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setModalData(null)}
            >
              ✕
            </button>

            <button
              onClick={prevImage}
              className="absolute left-2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition"
            >
              <ChevronRight />
            </button>

            <div className="absolute bottom-4 text-sm text-white bg-black/50 px-3 py-1 rounded-full">
              {modalData.imageIndex + 1} /{" "}
              {
                galleryProjects[modalData.projectIndex].images.length
              }
            </div>
          </div>
        </div>
      )}

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