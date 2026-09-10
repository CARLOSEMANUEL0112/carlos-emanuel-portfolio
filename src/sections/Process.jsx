import { process } from "../data/data";

export function Process() {
  return (
    <section id="processo" className="relative w-full bg-[#030712] border-b border-[var(--border)] py-20 sm:py-32 overflow-hidden">
      
      {/* Luz ambiente sutil no fundo (igual à de Habilidades) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      {/* Efeito de fade nas bordas laterais */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

      <div className="mx-auto max-w-[1126px] px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-[var(--text-h)]"></div>
              <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-h)]">
                04 · Processo
              </span>
            </div>
            <h2 className="mt-4 font-normal text-3xl sm:text-5xl text-[var(--text-h)] tracking-tight">
              Do problema<br/>à solução.
            </h2>
          </div>
          
          <div>
            {process.map(([n, t, d], index) => (
              <div 
                key={n} 
                className={`grid grid-cols-[40px_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[60px_180px_minmax(0,1fr)] sm:items-center ${
                  index !== process.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <span className="text-xs font-mono text-[var(--text)] opacity-60">{n}</span>
                <h3 className="font-semibold text-xl text-[var(--text-h)] tracking-tight">{t}</h3>
                <p className="col-start-2 text-sm leading-6 text-[var(--text)] sm:col-start-3">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}