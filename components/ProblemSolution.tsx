import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text (Takes 5/12 columns) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-deepSlate tracking-tight mb-6 leading-tight">
              Ciência clínica não pode ser privilégio.
            </h2>
            <p className="text-xl font-medium text-royal mb-6">
              Escala clínica com valor justo, sem penalizar quem atende mais famílias.
            </p>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                O crescimento dos diagnósticos de TEA exige responsabilidade técnica e ética. Quando o custo de uma plataforma aumenta conforme o número de pacientes, cria-se uma barreira invisível ao acesso e à qualidade do cuidado.
              </p>
              <p>
                A ABA Simples nasce para romper essa lógica: tecnologia clínica de padrão internacional deve ser acessível, previsível e justa para quem está na linha de frente do atendimento.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Comparison (Takes 7/12 columns) */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 w-full">
              {/* Outras Plataformas */}
              <div className="p-8 bg-slate-50 border-b border-slate-100 flex items-start gap-5 opacity-75 grayscale-[0.5] hover:grayscale-0 transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                   <XCircle className="w-6 h-6 text-slate-400" />
                </div>
                <div className="text-left w-full">
                  <h3 className="font-semibold text-slate-700 text-lg">Outras Plataformas</h3>
                  <p className="text-slate-500 text-sm mt-1 mb-2">Modelo progressivo por paciente</p>
                  <div className="font-mono text-slate-800 font-bold text-lg">
                    50 pacientes → R$ 2.500/mês
                  </div>
                  <p className="text-xs text-red-500 font-medium mt-2 uppercase tracking-wide">
                    Escala clínica penalizada
                  </p>
                </div>
              </div>

              {/* ABA Simples */}
              <div className="p-8 bg-white flex items-start gap-5">
                 <div className="flex-shrink-0 mt-1">
                   <CheckCircle className="w-6 h-6 text-emerald-500" />
                 </div>
                 <div className="text-left w-full">
                   <h3 className="font-bold text-deepSlate text-lg">ABA Simples</h3>
                   <p className="text-slate-500 text-sm mt-1 mb-2">Valor fixo para escala clínica real</p>
                   <div className="font-mono text-royal font-bold text-lg">
                     Até 50 pacientes → R$ 50/mês (valor fixo)
                   </div>
                   <p className="text-xs text-emerald-600 font-bold mt-2 uppercase tracking-wide">
                     Escala viável, previsível e ética
                   </p>
                 </div>
              </div>
            </div>
            
            <div className="text-center mt-6 w-full px-1">
               <p className="text-sm md:text-base text-slate-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Mais de 170 protocolos clínicos, PEI automático e gestão completa por um valor justo.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};