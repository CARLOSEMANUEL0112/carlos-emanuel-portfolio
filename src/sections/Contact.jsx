import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "../data/data";

export function Contact() {
  const email = personalInfo.email;
  const whatsappUrl = personalInfo.whatsappLink;

  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-36">
      <div className="absolute inset-0 blueprint-grid opacity-15"/>
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">05 · Contato</p>
        
        <h2 className="mx-auto mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight sm:text-7xl">
          Tem uma ideia em mente?<br/>
          <span className="text-muted-foreground">Vamos torná-la real.</span>
        </h2>
        
        <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-muted-foreground">
          Estou disponível para projetos, colaborações e boas conversas sobre tecnologia e design.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Botão WhatsApp */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-3 rounded-xl bg-white px-6 text-sm font-medium text-slate-950 shadow-lg transition-all hover:bg-white/90 hover:-translate-y-0.5"
          >
            <MessageCircle size={18} className="text-slate-950" /> 
            <span>Falar no WhatsApp</span> 
            <ArrowUpRight size={17} className="text-slate-950"/>
          </a>

          {/* Botão E-mail */}
          <a 
            href={`mailto:${email}`} 
            className="inline-flex h-14 items-center gap-3 rounded-xl bg-transparent border border-white/20 px-6 text-sm font-medium text-white shadow-lg transition-all hover:border-white/50 hover:bg-white/5 hover:-translate-y-0.5"
          >
            <Mail size={18} className="text-white"/> 
            <span>{email}</span> 
            <ArrowUpRight size={17} className="text-white/70"/>
          </a>
        </div>
      </div>
    </section>
  );
}