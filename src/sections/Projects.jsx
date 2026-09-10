import { ArrowUpRight } from "lucide-react";
import { ProjectMockup } from "./ProjectMockup";
import { projects as rawProjects } from "../data/data";

// Importações centralizadas da pasta assets
import proTrainerDesktop from "../assets/protrainer-desktop-raw.png";
import proTrainerMobile from "../assets/protrainer-mobile.png";
import essenciaDesktop from "../assets/essencia-desktop-raw.png";
import essenciaMobile from "../assets/essencia-mobile.png";
import kronosDesktop from "../assets/kronos-desktop-raw.png";
import kronosMobile from "../assets/kronos-mobile.png";

// Dicionário para vincular o título do projeto aos seus respectivos imports
const projectImages = {
  "ProTrainer": {
    image: proTrainerDesktop,
    mobileImage: proTrainerMobile,
  },
  "Essência Estética": {
    image: essenciaDesktop,
    mobileImage: essenciaMobile,
  },
  "Kronos Store": {
    image: kronosDesktop,
    mobileImage: kronosMobile,
  },
};

export function Projects() {
  // Injeta automaticamente as imagens do assets com base no dicionário acima
  const projects = rawProjects.map((project) => {
    const assets = projectImages[project.title];
    if (assets) {
      return {
        ...project,
        image: assets.image,
        mobileImage: assets.mobileImage,
      };
    }
    return project;
  });

  return (
    <section id="projetos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase text-primary font-mono tracking-widest">03 · Projetos selecionados</p>
        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl tracking-tight">Trabalho em contexto.</h2>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Cada projeto parte de uma necessidade real e evolui com decisões claras de produto e interface.</p>
        </div>
        
        <div className="mt-16 space-y-24 sm:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <article key={project.title} className="grid items-center gap-12 lg:grid-cols-2">
                <div className={`w-full flex justify-center ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="w-full max-w-[580px]">
                    <ProjectMockup 
                      image={project.image} 
                      mobileImage={project.mobileImage} 
                      title={project.title} 
                    />
                  </div>
                </div>
                <div className="w-full">
                  <span className="text-xs text-primary font-mono tracking-wider uppercase">{project.subtitle}</span>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.desc}</p>
                  
                  {/* Tags com design arredondado e acabamento limpo */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map(t => (
                      <span 
                        key={t} 
                        className="rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Botão em formato de pílula branca para destaque de conversão */}
                  <div className="mt-8">
                    <a 
                      href={project.demo} 
                      target={project.demo.startsWith("http") ? "_blank" : "_self"} 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition-all hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {project.demo.startsWith("http") ? "Ver projeto" : "Ver detalhes"} 
                      <ArrowUpRight size={16} className="text-slate-950"/>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}