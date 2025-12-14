import React from 'react';
import { Users, Activity, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-royal text-xs font-semibold uppercase tracking-wider mb-8 border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-royal mr-2"></span>
          Nova Versão 2.0
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-deepSlate leading-[1.1] mb-6 tracking-tight">
          A Única Plataforma ABA do Brasil com <span className="text-royal">Padrão Internacional Real.</span>
        </h1>

        {/* Subheadline - Adjusted for functional focus */}
        <p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          170+ protocolos clínicos, PEI automático e gestão integrada para a prática ABA real.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-royal hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/10 transition-all transform hover:-translate-y-0.5 flex items-center justify-center text-base">
            Começar Teste Grátis
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl transition-colors flex items-center justify-center text-base">
            <BookOpen className="mr-2 w-5 h-5 text-slate-500" />
            Ver Biblioteca de Protocolos
          </button>
        </div>

        {/* Trust Badges - Clean & Institutional */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium border-t border-slate-100 pt-8 max-w-2xl mx-auto">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-royal mr-2" />
            500+ Terapeutas
          </div>
          <div className="flex items-center">
            <Activity className="w-4 h-4 text-royal mr-2" />
            10k+ Sessões
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-royal mr-2" />
            Sem fidelidade
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element - Subtle/Professional */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-slate-50/50 blur-3xl opacity-60"></div>
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-50/30 blur-3xl opacity-50"></div>
      </div>
    </section>
  );
};