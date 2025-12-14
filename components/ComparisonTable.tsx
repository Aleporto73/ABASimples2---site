import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    { 
      feature: "Custo para 50 pacientes", 
      aba: "R$ 50 (fixo)", 
      other: "R$ 2.500+" 
    },
    { 
      feature: "Automatização de protocolos", 
      aba: (
        <span className="flex items-center justify-center gap-1.5 text-emerald-600">
          <Check className="w-4 h-4" strokeWidth={3} /> 
          Sim (padrão internacional)
        </span>
      ), 
      other: (
        <span className="flex items-center justify-center gap-1.5 text-slate-600">
           <Check className="w-4 h-4 text-emerald-500" />
           Sim
        </span>
      )
    },
    { 
      feature: "Protocolos prontos", 
      aba: "170+ inclusos", 
      other: "—" 
    },
    { 
      feature: "Gerador de PEI", 
      aba: (
        <span className="flex items-center justify-center gap-1.5 text-emerald-600">
          <Check className="w-4 h-4" strokeWidth={3} /> 
          Sim
        </span>
      ), 
      other: "—" 
    },
    { 
      feature: "Acesso às famílias", 
      aba: (
        <span className="flex items-center justify-center gap-1.5 text-emerald-600">
          <Check className="w-4 h-4" strokeWidth={3} /> 
          Incluso
        </span>
      ), 
      other: "Algumas cobram à parte" 
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-deepSlate mb-8">Comparativo Rápido</h2>
        
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Recurso</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-royal uppercase tracking-wider bg-blue-50/50">ABA Simples</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">Outras Plataformas</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {rows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-royal bg-blue-50/10">
                      {row.aba === true ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        row.aba
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-slate-500">
                      {row.other === false ? (
                        <Minus className="w-5 h-5 mx-auto opacity-30" />
                      ) : (
                        row.other
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};