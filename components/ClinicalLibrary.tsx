import React from 'react';
import { Check, Search, Filter, FileText, Globe, User, Activity, Database } from 'lucide-react';

export const ClinicalLibrary: React.FC = () => {
  const checklistItems = [
    "Protocolos internacionais prontos (VB-MAPP, ABLLS-R, PEAK)",
    "Cadastro e estruturação de protocolos próprios",
    "Padronização automática de critérios de evolução",
    "Integração direta com PEI, sessões e relatórios",
    "Linguagem técnica adequada para auditoria"
  ];

  const protocols = [
    { title: "Mando por Frequência", origin: "Internacional", domain: "Linguagem Verbal", ref: "VB-MAPP", status: "Integrado" },
    { title: "Rastreio Visual Sustentado", origin: "Internacional", domain: "Atenção", ref: "ESDM", status: "Integrado" },
    { title: "Protocolo de Alimentação", origin: "Profissional", domain: "AVD", ref: "Próprio", status: "Integrado" },
    { title: "Troca de Turnos", origin: "Internacional", domain: "Habil. Sociais", ref: "PEAK", status: "Disponível" },
    { title: "Treino de Banheiro", origin: "Profissional", domain: "AVD", ref: "Próprio", status: "Em Revisão" },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinical Text */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-deepSlate tracking-tight leading-tight">
              Biblioteca Clínica com Padrão Internacional — e a sua prática integrada.
            </h2>
            <p className="text-lg font-medium text-royal mt-3 mb-6">
              Protocolos baseados em evidências + informatização inteligente dos seus protocolos usuais.
            </p>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                Além dos protocolos internacionais já estruturados, a ABA Simples permite que o profissional cadastre seus próprios protocolos clínicos.
              </p>
              <p className="font-semibold text-deepSlate pt-2">
                Seus protocolos passam a operar com <strong>o mesmo rigor técnico, organizacional e auditável</strong> da biblioteca internacional nativa, sem engessar sua prática clínica.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {checklistItems.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded flex items-center justify-center mr-3 border border-blue-100 bg-blue-50">
                    <Check className="w-3.5 h-3.5 text-royal" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Software Mock UI */}
          <div className="order-2 w-full">
            <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 overflow-hidden select-none">
              
              {/* Mock Header */}
              <div className="bg-white border-b border-slate-100 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-deepSlate font-semibold">
                  <div className="bg-blue-50 p-1.5 rounded text-royal">
                    <Database size={18} />
                  </div>
                  <span>Biblioteca de Protocolos Clínicos</span>
                </div>
                {/* Window controls */}
                <div className="flex space-x-1.5 opacity-30">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                </div>
              </div>

              {/* Mock Toolbar */}
              <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex gap-3">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
                  <div className="w-full bg-white border border-slate-200 rounded-md py-2 pl-9 pr-4 text-xs text-slate-500 shadow-sm">
                    Buscar protocolo por nome, domínio ou referência...
                  </div>
                </div>
                <button className="flex items-center px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 bg-white hover:bg-slate-50 shadow-sm">
                  <Filter size={12} className="mr-2" />
                  Filtrar
                </button>
              </div>

              {/* Mock Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left">
                      <th className="px-4 py-3 font-semibold">Protocolo</th>
                      <th className="px-4 py-3 font-semibold">Origem</th>
                      <th className="px-4 py-3 font-semibold">Domínio</th>
                      <th className="px-4 py-3 font-semibold">Ref.</th>
                      <th className="px-4 py-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {protocols.map((p, i) => (
                      <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <FileText size={14} className="text-slate-400 mr-2 group-hover:text-royal" />
                            <span className="text-xs font-semibold text-slate-700 group-hover:text-royal transition-colors">
                              {p.title}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                           <div className="flex items-center space-x-1.5">
                              {p.origin === "Internacional" ? (
                                <Globe size={12} className="text-slate-400" />
                              ) : (
                                <User size={12} className="text-royal" />
                              )}
                              <span className="text-[11px] text-slate-500">{p.origin}</span>
                           </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-[11px] text-slate-500">{p.domain}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-1.5 py-0.5 rounded text-[10px] font-medium border ${p.origin === 'Profissional' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                            {p.ref}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          {p.status === "Integrado" ? (
                            <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                              <Activity size={10} className="mr-1" />
                              PEI
                            </span>
                          ) : p.status === "Em Revisão" ? (
                             <span className="inline-flex text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                              Revisão
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 font-medium">
                              Disponível
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mock Footer */}
              <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex justify-between items-center">
                 <div className="text-[10px] text-slate-400">Total: 174 protocolos</div>
                 <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};