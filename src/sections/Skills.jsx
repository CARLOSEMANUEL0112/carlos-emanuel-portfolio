import { skills } from "../data/data";
import { Code2, Monitor, Globe, Cpu, Sparkles } from "lucide-react";

export function Skills() {
  const icons = [Code2, Monitor, Globe, Cpu, Sparkles];

  // Duplicamos o array para o loop infinito
  const infiniteSkills = [...skills, ...skills];

  return (
    <section id="habilidades" className="relative w-full bg-[#030712] border-b border-[var(--border)] py-20 sm:py-32 overflow-hidden">
      
      {/* Luz ambiente sutil no fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="mx-auto max-w-[1126px] px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end mb-14">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-[var(--text-h)]"></div>
              <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-h)]">
                02 · Habilidades
              </span>
            </div>
            <h2 className="mt-4 font-normal text-3xl sm:text-5xl text-[var(--text-h)] tracking-tight">
              Ferramentas com propósito.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[var(--text)]">
            Tecnologias escolhidas para criar experiências consistentes, escaláveis e simples de manter.
          </p>
        </div>
      </div>

      {/* Trilha de Rolagem com a classe group para acionar o pause */}
      <div className="w-full overflow-hidden relative flex group">
        
        {/* Efeito de fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-6 py-4">
          {infiniteSkills.map((skill, i) => {
            const originalIndex = i % skills.length;
            const IconComponent = icons[originalIndex] || Sparkles;

            return (
              <article 
                key={`${skill.title}-${i}`} 
                className="w-[320px] sm:w-[360px] min-h-64 bg-[#050914] border border-[var(--border)] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/80 hover:-translate-y-1 relative flex-shrink-0 shadow-lg"
              >
                {/* Linha de brilho superior no hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--text)] opacity-60">
                    {skill.number}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 transition-all duration-300">
                      <IconComponent size={18} className="text-[var(--text-h)] transition-all duration-300" />
                    </div>

                    <svg className="w-4 h-4 text-[var(--text)] opacity-40 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl text-[var(--text-h)] tracking-tight transition-colors">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text)] transition-colors">
                    {skill.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}