import { stats } from "../data/data";

export default function About() {
  return (
    <section id="sobre" className="relative w-full bg-[var(--bg)] border-b border-[var(--border)] py-20 sm:py-32">
      <div className="mx-auto max-w-[1126px] px-5 sm:px-8 lg:px-12">
        
        {/* Grid Principal */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Coluna da Esquerda (Título) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-[var(--text)]"></div>
              <span className="text-xs font-mono tracking-widest uppercase text-[var(--text)]">
                01 · Sobre
              </span>
            </div>
            <h2 className="font-normal text-3xl sm:text-4xl text-[var(--text-h)] leading-tight">
              Da lógica ao layout,<br />com propósito.
            </h2>
          </div>

          {/* Coluna da Direita (Manifesto + Formação) */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-balance text-xl sm:text-3xl leading-snug text-[var(--text-h)] font-normal">
              Venho da Análise e Desenvolvimento de Sistemas — por isso penso em cada interface como{" "}
              <span className="text-[var(--text)]">um problema a resolver antes de ser uma tela a desenhar.</span>
            </p>

            <div className="grid gap-6 pt-6 border-t border-[var(--border)] sm:grid-cols-2">
              <p className="text-sm leading-7 text-[var(--text)]">
                Essa base me ensinou a organizar antes de programar: entender a raiz, estruturar a informação e construir a solução com atenção ao detalhe que o usuário sente, mesmo sem saber nomear.
              </p>
              
              {/* Card de Formação otimizado para toque no mobile */}
              <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--code-bg)]/40 flex flex-col justify-between active:scale-[0.98] sm:hover:border-[var(--text)]/40 sm:hover:bg-[var(--code-bg)]/70 transition-all duration-200">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text)] opacity-80">Formação</span>
                <div>
                  <p className="mt-2 font-semibold text-sm text-[var(--text-h)]">Análise e Desenvolvimento de Sistemas</p>
                  <p className="mt-1 text-xs text-[var(--text)]">Raciocínio lógico aplicado à experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Grade de Estatísticas em Cards Individuais */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(([n, l]) => (
              <div 
                key={l} 
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--code-bg)]/40 flex flex-col justify-between transition-all duration-300 hover:border-white/80 hover:-translate-y-1 shadow-sm group"
              >
                <strong className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-h)] tracking-tight">
                  {n}
                </strong>
                <p className="mt-3 text-xs text-[var(--text)] leading-relaxed">
                  {l}
                </p>
              </div>
            ))}
          </div>

      </div>
    </section>
  );
}