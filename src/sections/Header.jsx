import { useState } from 'react';
import { personalInfo } from '../data/data';
import { MessageCircle } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg)]/90 border-b border-[var(--border)] backdrop-blur-md">
      <div className="max-w-[1126px] mx-auto px-8 h-20 flex items-center justify-between bg-[var(--bg)]">
        
        {/* Logo / Nome com o estilo exato da referência */}
        <a 
          href="#inicio" 
          className="group flex items-center gap-3 p-2 rounded-xl transition-all duration-300 hover:bg-[var(--code-bg)] hover:-translate-y-0.5"
        >
          <span className="w-9 h-9 rounded-lg bg-[#eef2f6] border border-slate-300/60 flex items-center justify-center font-mono text-xs font-bold text-blue-900 shadow-sm transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
            CE
          </span>
          <span className="text-sm font-semibold text-[var(--text-h)] tracking-wide transition-colors duration-300 group-hover:text-blue-400">
            {personalInfo.name}
          </span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text)]">
          <a href="#sobre" className="hover:text-[var(--text-h)] transition-colors">Sobre</a>
          <a href="#habilidades" className="hover:text-[var(--text-h)] transition-colors">Habilidades</a>
          <a href="#projetos" className="hover:text-[var(--text-h)] transition-colors">Projetos</a>
          <a href="#processo" className="hover:text-[var(--text-h)] transition-colors">Processo</a>
        </nav>

        {/* Botão de Ação com Estilo Fundo Branco direcionado ao WhatsApp */}
        <div className="hidden md:flex items-center">
          <a 
            href={personalInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 transition-all duration-300 hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-0.5 shadow-sm"
          >
            <MessageCircle size={16} className="text-slate-900" />
            <span>Vamos conversar</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[var(--text-h)] p-2 focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-8 py-6 space-y-4 text-left max-w-[1126px] mx-auto shadow-xl">
          <a 
            href="#sobre" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block text-base font-medium text-[var(--text-h)] hover:text-blue-400 transition-colors"
          >
            Sobre
          </a>
          <a 
            href="#habilidades" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block text-base font-medium text-[var(--text-h)] hover:text-blue-400 transition-colors"
          >
            Habilidades
          </a>
          <a 
            href="#projetos" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block text-base font-medium text-[var(--text-h)] hover:text-blue-400 transition-colors"
          >
            Projetos
          </a>
          <a 
            href="#processo" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block text-base font-medium text-[var(--text-h)] hover:text-blue-400 transition-colors"
          >
            Processo
          </a>
          <div className="pt-2">
            <a 
              href={personalInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium text-sm bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 transition-all"
            >
              <MessageCircle size={16} className="text-slate-900" />
              <span>Vamos conversar</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}