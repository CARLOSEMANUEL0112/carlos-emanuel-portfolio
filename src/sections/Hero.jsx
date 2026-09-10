import { ArrowDownRight } from "lucide-react";
import { personalInfo } from '../data/data';
import fotoCarlos from '../assets/foto_carlos.jpeg';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative w-full py-16 md:py-20 px-6 md:px-8 text-left border-b border-[var(--border)] blueprint-grid"
    >
      <div className="max-w-[1126px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Coluna da Esquerda com animação em cascata */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 animate-fade-in-up delay-100">
            <div className="w-6 h-[1px] bg-[var(--primary)]"></div>
            <span className="text-xs font-mono tracking-widest uppercase text-slate-300">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-normal text-white animate-fade-in-up delay-200">
            Sites com <span className="underline decoration-1 underline-offset-4 text-blue-400">clareza</span> que transformam <br className="hidden sm:block" />
            visitantes em clientes.
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-slate-300 animate-fade-in-up delay-300">
            Sou {personalInfo.name}, Desenvolvedor Front-End. Crio experiências digitais rápidas, responsivas e agradáveis de usar.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in-up delay-400">
            {/* Botão Principal com fundo sólido */}
            <a 
              href="#projetos" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 bg-white text-slate-950"
            >
              Ver projetos 
              <ArrowDownRight 
                size={17} 
                className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1" 
              />
            </a>
            
            {/* Botão Secundário com fundo sólido escuro para cobrir a grade */}
            <a 
              href="#contato" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-slate-700 bg-[#091224] text-white transition-all duration-300 hover:bg-slate-800 hover:border-slate-500 hover:-translate-y-0.5"
            >
              Entrar em contato
            </a>
          </div>

          {/* Rodapé / Redes sociais com fundo sólido e alta visibilidade */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300 border-t border-[var(--border)] mt-8 animate-fade-in-up delay-500">
            <div className="flex items-center gap-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3.5 py-2 rounded-lg bg-[#091224] border border-slate-700 text-white hover:border-blue-400 hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg> 
                <span className="text-xs font-mono font-medium">GitHub</span>
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3.5 py-2 rounded-lg bg-[#091224] border border-slate-700 text-white hover:border-blue-400 hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-xs font-mono font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="w-[1px] h-4 bg-slate-700 hidden sm:block"></div>
            
            <span className="text-xs font-mono text-slate-300">📍 Brasil · Remoto</span>
          </div>
        </div>

        {/* Coluna da Direita com Card e Ajuste Responsivo da Foto */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end animate-fade-in-up delay-400">
          <div className="relative w-full max-w-[420px] rounded-xl border border-slate-700 bg-[#091224] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:border-blue-500 hover:shadow-blue-900/30">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Imagem do Carlos ajustada para cobrir bem o espaço sem distorcer */}
            <div className="relative w-full h-[300px] sm:h-[340px] rounded-lg overflow-hidden border border-slate-800 shadow-md bg-slate-950">
              <img 
                src={fotoCarlos} 
                alt="Carlos Emanuel" 
                className="w-full h-full object-cover object-top"
              />
              
              {/* Selo integrado no canto superior ou inferior da foto para evitar sobreposição feia */}
              <div className="absolute bottom-3 right-3 z-20 bg-[#050b18]/90 border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-mono text-white">Aberto a oportunidades</span>
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-end text-xs font-mono text-slate-300 pt-4 border-t border-slate-800 mt-4">
              <div>
                <p className="font-semibold text-white">Carlos Emanuel</p>
                <p className="text-[10px] text-slate-400">Desenvolvedor Front-End</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}