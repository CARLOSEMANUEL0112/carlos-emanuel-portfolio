export function ProjectMockup({ image, mobileImage, title }) {
  const isEstetica = title === "Essência Estética";

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[580px] aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800 bg-[#070b14] p-6 sm:p-8 shadow-2xl flex items-center justify-center group shrink-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative w-full max-w-[460px] flex items-center justify-center">
          {/* Notebook (Tela Principal) */}
          <div className="w-[92%] rounded-xl border border-zinc-700/80 bg-[#090d16] shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] z-10">
            <div className="flex h-7 items-center justify-between border-b border-zinc-800 px-3 bg-[#05080f]">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-zinc-600"/>
                <div className="h-2 w-2 rounded-full bg-zinc-600"/>
                <div className="h-2 w-2 rounded-full bg-zinc-600"/>
              </div>
              <div className="h-1.5 w-24 rounded-full bg-zinc-800/80"/>
              <div className="w-4"/>
            </div>
            <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className={`w-full h-full ${isEstetica ? 'object-fill' : 'object-cover object-center'}`} 
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-zinc-500 font-mono">Sem imagem desktop</div>
              )}
            </div>
          </div>

          {/* Celular sobreposto à direita/frente */}
          <div className="absolute -right-2 -bottom-6 w-[26%] sm:w-[28%] rotate-[2deg] rounded-[20px] sm:rounded-[24px] border-[3px] sm:border-4 border-zinc-800 bg-[#05080f] shadow-2xl overflow-hidden transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 z-20">
            <div className="h-2.5 sm:h-3 w-full bg-zinc-950 flex justify-center items-center">
              <div className="h-1 w-6 sm:h-1.5 sm:w-8 rounded-full bg-zinc-800"/>
            </div>
            <div className="relative aspect-[9/16] w-full bg-zinc-950 overflow-hidden">
              {mobileImage ? (
                <img src={mobileImage} alt={`${title} mobile`} className="h-full w-full object-cover object-top" />
              ) : image ? (
                <img src={image} alt={title} className="h-full w-full object-cover object-top" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] text-zinc-500 font-mono">Mobile</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}