import React from 'react';
import { Check, Building2 } from 'lucide-react';

export const Pricing: React.FC = () => {
  const commonBenefits = [
    "Equipe ilimitada (Terapeutas / ATs)",
    "Biblioteca com 170+ protocolos clínicos",
    "Gerador automático de PEI",
    "Web App de coleta de dados",
    "Relatórios clínicos com exportação",
    "Portal para familiares",
    "Conformidade LGPD"
  ];

  return (
    <section className="pt-10 pb-20 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Faixa de Transição Institucional */}
        <div className="bg-royal rounded-xl w-full py-8 px-6 mb-10 text-center shadow-sm">
          <p className="text-white font-semibold text-base sm:text-lg md:text-xl leading-[1.4]">
            Do profissional iniciante à clínica especializada, o ABA Simples acompanha toda a jornada clínica com o mesmo padrão técnico.
          </p>
        </div>
        
        {/* Clarification Text */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-slate-500 font-medium bg-white px-5 py-3 rounded-full inline-block border border-slate-200 shadow-sm text-sm sm:text-base leading-snug">
            Os dois planos oferecem os mesmos recursos.
            <br className="hidden sm:block" />
            <span className="sm:ml-1">A única diferença do Enterprise é a escala: <strong className="text-deepSlate">pacientes ilimitados</strong>.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Professional (Highlighted) */}
          <div className="relative bg-royal rounded-3xl shadow-xl shadow-blue-900/10 overflow-hidden text-white p-8 sm:p-10 transform md:hover:scale-[1.01] transition-transform duration-300 flex flex-col order-1">
            {/* Decorative */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-blue-100 font-bold tracking-wider text-sm uppercase mb-4">
                Modo Clínica Profissional
              </h3>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">R$ 50</span>
                  <span className="ml-2 text-xl text-blue-100">/mês</span>
                </div>
                <p className="text-sm text-blue-200 mt-2 font-medium">Preço fixo. Sem surpresas.</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {/* Specific Limit */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">Até 50 pacientes ativos</span>
                </div>
                {/* Common Benefits */}
                {commonBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-50 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button className="w-full bg-white text-royal font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-50 transition-colors text-lg">
                  Quero Economizar Agora
                </button>
                <p className="mt-4 text-center text-xs text-blue-200/80 font-medium">
                  30 dias grátis. Cancele quando quiser.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise (White) */}
          <div className="relative bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 flex flex-col order-2">
            <div className="flex flex-col h-full">
              <h3 className="text-slate-400 font-bold tracking-wider text-sm uppercase mb-4 flex items-center gap-2">
                <Building2 size={16} />
                Enterprise
              </h3>
              
              <div className="mb-8">
                 <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-deepSlate">Sob consulta</span>
                </div>
                <p className="text-sm text-slate-500 mt-2 font-medium">Plano sob consulta</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                 {/* Specific Limit */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-deepSlate" />
                  </div>
                  <span className="text-deepSlate font-bold text-lg">Pacientes ilimitados</span>
                </div>
                 {/* Common Benefits */}
                {commonBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-slate-400" />
                    </div>
                    <span className="text-slate-600 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button className="w-full bg-slate-50 text-slate-700 font-bold py-4 px-8 rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-deepSlate transition-colors text-lg">
                  Solicitar proposta institucional
                </button>
                {/* Spacer to match height visual */}
                <p className="mt-4 text-center text-xs text-transparent select-none">
                  Spacer
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};