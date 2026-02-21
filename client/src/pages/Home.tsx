import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Wrench, Zap, Cpu, Shield, Hammer, MapPin, Star, Instagram, Mail,  } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { InstagramSection } from "../components/InstagramSection";





/**
 * Design: Tech Minimalist Futurista
 * - Dark background (oklch 0.08) with orange accent (oklch 0.65 0.22 29)
 * - Poppins for headings, Roboto for body
 * - Geometric layout with diagonal elements
 * - Smooth animations and glow effects on hover
 */
const projects = [
  {
    title: "Montagem PC Gamer de Entrada",
    images: [
      "public/images/montagem-entrada/01.jpg",
      "/images/montagem-entrada/02.jpg",
      "/images/montagem-entrada/03.jpg",
      "/images/montagem-entrada/04.jpg",
      "/images/montagem-entrada/05.jpg",
      "/images/montagem-entrada/06.jpg",
      "/images/montagem-entrada/07.jpg",
      "/images/montagem-entrada/08.jpg",
    ],
  },
  {
    title: "Montagem PC Wesley",
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
    title: "Limpeza PC Faraó Tutancâmon",
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
    title: "Troca de Placa mãe, fonte e venda de placa de video",
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
    title: "Montagem PC Gamer TOP",
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

type ModalData = {
  projectIndex: number;
  imageIndex: number;
};

export default function Home() {

  // Controle do slide de cada projeto
  const [currentSlides, setCurrentSlides] = useState(
    projects.map(() => 0)
  );

  // Próximo slide
  const nextSlide = (projectIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((value, index) =>
        index === projectIndex
          ? value === projects[projectIndex].images.length - 1
            ? 0
            : value + 1
          : value
      )
    );
  };

  // Slide anterior
  const prevSlide = (projectIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((value, index) =>
        index === projectIndex
          ? value === 0
            ? projects[projectIndex].images.length - 1
            : value - 1
          : value
      )
    );
  };

  // Controle do modal (imagem ampliada)
  const [modalData, setModalData] = useState<ModalData | null>(null);

  // Outra lógica sua
  const [activeCity, setActiveCity] = useState(0);

  const cities = [
    "Carapicuíba",
    "Barueri",
    "Osasco",
    "Cotia",
    "Jandira",
    "Itapevi",
    "Embu das Artes",
    "Santana de Parnaíba",
  ];

  const services = [
    {
      icon: Wrench,
      title: "Manutenção Técnica",
      description: "Limpeza profissional e manutenção preventiva de computadores",
    },
    {
      icon: Zap,
      title: "Diagnóstico Especializado",
      description: "Análise completa com orçamento transparente",
    },
    {
      icon: Cpu,
      title: "Upgrade de Hardware",
      description: "Troca e atualização de componentes para melhor performance",
    },
    {
      icon: Hammer,
      title: "Montagem Sob Medida",
      description: "Computadores e PCs Gamer personalizados",
    },
    {
      icon: Shield,
      title: "Manutenção Empresarial",
      description: "Planos preventivos para empresas e corporações",
    },
    {
      icon: Smartphone,
      title: "Otimização de Sistemas",
      description: "Formatação e otimização de performance",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663357228819/EJqSyXEfbZYGZfem.png"
              alt="Will Info Gamer"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-lg font-bold text-foreground">Will Info Gamer</h1>
              <p className="text-xs text-muted-foreground">Manutenção de Computadores</p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5511975307066?text=Ola%20Gostaria%20de%20Solicitar%20um%20Orcamento%20📝💻😁"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md font-medium transition-all duration-300 glow-orange-hover"
          >
            <FaWhatsapp className="w-5 h-5 text-black dark:text-black" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

     

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-cover bg-center" style={{
        backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/kTApoZhLhs2AA3WJLXxikn/sandbox/u1p0aQhg4I3UXgm22T9hNM-img-1_1771102576000_na1fn_aGVyby10ZWNoLXdvcmtzcGFjZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1RBcG9aaExoczJBQTNXSkxYeGlrbi9zYW5kYm94L3UxcDBhUWhnNEkzVVhnbTIyVDloTk0taW1nLTFfMTc3MTEwMjU3NjAwMF9uYTFmbl9hR1Z5YnkxMFpXTm9MWGR2Y210emNHRmpaUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hVNtmqlrb5s9SNfPG-nsjGgQ5H3G0ZLmY-WX0hY6iVH8WWmT44STpNW4SYb0BKAK2DM3oaZUwtzuW62MQqnkxP9IRFmAXBRZ19uC4DIIwnVJXlUO4WWQrqI3Ljk1ps5TZrM46ORAKV5nQqHRzWjMy9g4qAbEh4i4crpdrHGUFr3QCkEu4e5zlcHCVGMS-O0z97bPxLJZAdQHx-TdHNC4MLYBZFd6D2t6deRWlkbWb0soj2rNZ8KtKhEp6J1yBhjR2~gQlVJThdnl72FEqf4-M1XbJZKBmx0Yi5Z0hxoNNCjHFt576-hJRELQ3TMR6nQ3ld1nbY2U-MepYt-Sw-0msQ__)',
      }}>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="">
              <p className="text-sm font-medium text-accent"></p> 
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Seu Computador <span className="text-accent">Merece Cuidado</span> Profissional
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manutenção, upgrade e montagem de PCs com expertise técnica. Atendimento a domicílio em toda a região de Carapicuíba e cidades próximas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/5511975307066?text=Ola%20Gostaria%20de%20Solicitar%20um%20Orcamento%20📝💻😁"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold text-lg transition-all duration-300 glow-orange-hover transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5 text-black dark:text-black" />
                Solicitar Orçamento via WhatsApp
              </a>
              <a
                href="https://instagram.com/willinfogamer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg font-bold text-lg transition-all duration-300 border border-accent/30"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicos */}
      <section className="py-20 sm:py-32 bg-secondary/20">
        <div className="container space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Nossos Serviços</h2>
            <p className="text-muted-foreground text-lg">
              Soluções completas para manutenção, otimização e montagem de computadores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border border-border hover:border-accent/50 transition-all duration-300 group hover:glow-orange-hover"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Área de Atendimento</h2>
            <p className="text-muted-foreground text-lg">
              Atendimento a domicílio em toda a região metropolitana
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                onClick={() => setActiveCity(index)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer text-center font-medium flex items-center justify-center gap-2 ${
                  activeCity === index
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border bg-secondary/20 text-foreground hover:border-accent/50"
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{city}</span>
              </div>
            ))}
          </div>

          <div className="bg-secondary/30 border border-accent/20 rounded-lg p-8 text-center space-y-4">
            <p className="text-lg font-medium">
              ✅ Atendimento a domicílio
            </p>
            <p className="text-muted-foreground">
              Nos deslocamos até você para diagnóstico, manutenção, upgrade e montagem de computadores. Sem necessidade de deslocamento!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
<div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">
    📸 Galeria dos Trabalhos
  </h2>

  <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>

  <p className="text-muted-foreground text-lg">
    Confira alguns dos nossos projetos e manutenções realizadas
  </p>
  <div className="pt-6">
  <a
    href="/galeria"
    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
  >
    Ver todos os trabalhos →
  </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {projects.map((project, projectIndex) => (
    <div key={projectIndex} className="space-y-4 bg-white/5 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-bold text-center">
        {project.title}
      </h3>

      <div className="relative h-56 overflow-hidden rounded-lg border border-border">
       <img
  src={project.images[currentSlides[projectIndex]]}
  alt={project.title}
  className="w-full h-full object-cover transition-all duration-500 cursor-pointer hover:scale-105"
  onClick={() =>
    setModalData({
      projectIndex,
      imageIndex: currentSlides[projectIndex],
    })
  }
/>

        <button
          onClick={() => prevSlide(projectIndex)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-1 rounded"
        >
          ←
        </button>

        <button
          onClick={() => nextSlide(projectIndex)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-1 rounded"
        >
          →
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {project.images.map((_, index) => (
          <div
            key={index}
            onClick={() =>
              setCurrentSlides((prev) =>
                prev.map((value, i) =>
                  i === projectIndex ? index : value
                )
              )
            }
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlides[projectIndex] === index
                ? "bg-black"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  ))}
</div>

{/* Google Reviews Section */}
<section className="py-20 sm:py-32 bg-background">
  <div className="container space-y-12">
    <div className="max-w-2xl mx-auto text-center space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold">Avaliações de Clientes</h2>
      <p className="text-muted-foreground text-lg">
        Veja o que nossos clientes dizem sobre nosso trabalho
      </p>
    </div>

    <div className="bg-secondary/30 border border-accent/20 rounded-xl p-10 text-center space-y-6 max-w-3xl mx-auto">

      {/* Widget do Elfsight */}
      <div className="elfsight-widget">
        <div
          className="elfsight-app-68dfc76f-1250-44f4-ba93-9a43edd1711d"
          data-elfsight-app-lazy
        ></div>
      </div>

      {/* Botão para Google */}
      <div className="pt-6">
       <a
  href="https://www.google.com/maps/place/Will+Info+Gamer,+Informatica,+Montagem+e+Limpeza+de+Computadores+Gamers+Carapicu%C3%ADba+e+Regi%C3%A3o/@-23.5516344,-46.8542338,17z/data=!4m8!3m7!1s0x94cf01dc624019e9:0x5b67788dd4ffc662!8m2!3d-23.5516393!4d-46.8516589!9m1!1b1!16s%2Fg%2F11vzb9__cm?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex flex-col items-center gap-2 px-8 py-4 bg-accent text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
>
  <span>Ver Avaliações no Google</span>
  <span className="text-xl">⭐⭐⭐⭐⭐</span>
</a>


      </div>
    </div>
  </div>
</section>
      

      {/* Instagram Section */}
<section className="py-20 sm:py-32 bg-secondary/20">
  <div className="container space-y-12">
    {/* Título */}
    <div className="max-w-2xl mx-auto text-center space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold">Nos Acompanhe no Instagram</h2>
      <p className="text-muted-foreground text-lg">
        Fique por dentro das novidades, dicas e trabalhos realizados
      </p>
    </div>

    {/* Botão para Instagram */}
    <div className="flex justify-center">
      <a
        href="https://instagram.com/willinfogamer"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold text-lg transition-all duration-300 glow-orange-hover transform hover:scale-105"
      >
        <Instagram className="w-6 h-6" />
        @willinfogamer
      </a>
    </div>

    {/* Grid com posts */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {/* Post 1 */}
  <div className="aspect-square rounded-lg overflow-hidden border border-border">
    <iframe
      src="https://www.instagram.com/p/POST1/embed"
      className="w-full h-full"
      allowFullScreen
      loading="lazy"
      title="Instagram Post 1"
    ></iframe>
  </div>

  {/* Post 2 */}
  <div className="aspect-square rounded-lg overflow-hidden border border-border">
    <iframe
      src="https://www.instagram.com/p/POST2/embed"
      className="w-full h-full"
      allowFullScreen
      loading="lazy"
      title="Instagram Post 2"
    ></iframe>
  </div>

  {/* Post 3 */}
  <div className="aspect-square rounded-lg overflow-hidden border border-border">
    <iframe
      src="https://www.instagram.com/p/POST3/embed"
      className="w-full h-full"
      allowFullScreen
      loading="lazy"
      title="Instagram Post 3"
    ></iframe>
  </div>

  {/* Post 4 */}
  <div className="aspect-square rounded-lg overflow-hidden border border-border">
    <iframe
      src="https://www.instagram.com/p/POST4/embed"
      className="w-full h-full"
      allowFullScreen
      loading="lazy"
      title="Instagram Post 4"
    ></iframe>
  </div>
</div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-secondary/40 to-secondary/20 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Pronto para <span className="text-accent">Potencializar ou Montar</span> seu PC?
              </h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato conosco para diagnóstico gratuito e orçamento sem compromisso
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511975307066?text=Ola%20Gostaria%20de%20Solicitar%20um%20Orcamento%20📝💻😁"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold text-lg transition-all duration-300 glow-orange-hover transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp: (11) 97530-7066
              </a>
              <a
                href="mailto:willian.sergio2@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg font-bold text-lg transition-all duration-300 border border-accent/30"
              >
                <Mail className="w-5 h-5" />
                E-mail: willian.sergio2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  href="https://wa.me/5511975307066?text=Ola%20Gostaria%20de%20Solicitar%20um%20Orcamento%20📝💻😁"
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
            <p className="mt-2">Atendimento em Carapicuíba, Barueri, Osasco, Cotia, Jandira, Itapevi, Embu das Artes e Santana de Parnaíba</p>
          </div>
        </div>
      </footer>
      {/* Modal de imagem ampliada */}
{modalData && (
  <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">

    <img
      src={
        projects[modalData.projectIndex].images[
          modalData.imageIndex
        ]
      }
      alt="Imagem ampliada"
      className="max-w-[95%] max-h-[95%] rounded-xl shadow-2xl"
    />

    {/* Botão fechar */}
    <button
      className="absolute top-6 right-6 text-white text-3xl font-bold"
      onClick={() => setModalData(null)}
    >
      ✕
    </button>

    {/* Botão anterior */}
    <button
      className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 text-white px-4 py-2 rounded-lg text-2xl"
      onClick={() =>
        setModalData((prev) => {
          if (!prev) return null;
          const total =
            projects[prev.projectIndex].images.length;
          return {
            ...prev,
            imageIndex:
              prev.imageIndex === 0
                ? total - 1
                : prev.imageIndex - 1,
          };
        })
      }
    >
      ←
    </button>

    {/* Botão próximo */}
    <button
      className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 text-white px-4 py-2 rounded-lg text-2xl"
      onClick={() =>
        setModalData((prev) => {
          if (!prev) return null;
          const total =
            projects[prev.projectIndex].images.length;
          return {
            ...prev,
            imageIndex:
              prev.imageIndex === total - 1
                ? 0
                : prev.imageIndex + 1,
          };
        })
      }
    >
      →
    </button>

  </div>
)}
    </div>
  );
}
