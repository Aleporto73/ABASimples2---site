import React from 'react';
import { ClipboardList, BrainCircuit, BarChart2 } from 'lucide-react';

export const PlatformOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Manifesto / Narrative Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
           {/* Subtitle/Tag */}
          <span className="inline-block py-1 px-3 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">
            Posicionamento Técnico
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepSlate leading-tight mb-8 tracking-tight">
            A prática clínica evoluiu.
          </h2>

          {/* Body Text - Technical Manifesto */}
          <div className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto space-y-6">
            <p>
              Durante anos, a prática ABA foi sustentada por protocolos isolados, PEIs manuais e registros fragmentados. Esse modelo aumenta o risco clínico, consome tempo terapêutico e gera inconsistências na comunicação com famílias e escolas.
            </p>
            <p>
              A <strong className="text-deepSlate font-semibold">ABA Simples</strong> nasce para consolidar a prática clínica baseada em evidências em um único sistema operacional. Avaliação, protocolos, PEI, intervenção e relatórios passam a funcionar de forma integrada, rastreável e tecnicamente coerente.
            </p>
          </div>
        </div>

        {/* Overview Cards Section - Flowing directly from the narrative */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 text-left">
            <div className="w-14 h-14 bg-blue-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
              <ClipboardList className="w-7 h-7 text-royal group-hover:text-white transition-colors duration-300" strokeWidth={2} />
            </div>
            <h4 className="text-xl font-bold text-deepSlate mb-3">Avaliação Estruturada</h4>
            <p className="text-slate-600 leading-relaxed">
              Ferramentas de avaliação inicial que mapeiam competências e déficits com precisão clínica.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 text-left">
            <div className="w-14 h-14 bg-blue-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
              <BrainCircuit className="w-7 h-7 text-royal group-hover:text-white transition-colors duration-300" strokeWidth={2} />
            </div>
            <h4 className="text-xl font-bold text-deepSlate mb-3">Protocolos + PEI Auto</h4>
            <p className="text-slate-600 leading-relaxed">
              Geração automática de Planos de Ensino Individualizados baseados nos resultados da avaliação.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 text-left">
            <div className="w-14 h-14 bg-blue-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
              <BarChart2 className="w-7 h-7 text-royal group-hover:text-white transition-colors duration-300" strokeWidth={2} />
            </div>
            <h4 className="text-xl font-bold text-deepSlate mb-3">Relatórios Clínicos</h4>
            <p className="text-slate-600 leading-relaxed">
              Gráficos de evolução claros e linguagem profissional para comunicação com famílias e escolas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};