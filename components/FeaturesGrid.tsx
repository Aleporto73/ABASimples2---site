import React from 'react';
import { Book, FileEdit, FileText, Users, Activity, ShieldCheck } from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  { 
    title: "Biblioteca Internacional", 
    desc: "170+ protocolos clínicos em 12 domínios, baseados em VB-MAPP, ABLLS-R e PEAK, prontos para aplicação imediata.",
    icon: <Book className="text-white" strokeWidth={2} size={24} />
  },
  { 
    title: "Protocolos Personalizáveis", 
    desc: "Crie ou adapte protocolos em minutos, com liberdade total e rigor técnico — ideal para solo ou equipes.",
    icon: <FileEdit className="text-white" strokeWidth={2} size={24} /> 
  },
  { 
    title: "PEI & Relatórios", 
    desc: "PEI gerado direto da avaliação, com metas mensuráveis e relatórios clínicos claros para escola e família.",
    icon: <FileText className="text-white" strokeWidth={2} size={24} /> 
  },
  { 
    title: "Modo Clínica", 
    desc: "Até 50 pacientes por R$ 50/mês (fixo), com protocolos, PEI, relatórios e equipe ilimitada — sem cobrança por paciente.",
    icon: <Users className="text-white" strokeWidth={2} size={24} /> 
  },
  { 
    title: "Acompanhamento Clínico", 
    desc: "Progresso e evolução em tempo real, com compartilhamento controlado entre profissionais.",
    icon: <Activity className="text-white" strokeWidth={2} size={24} /> 
  },
  { 
    title: "Gestão de Acessos", 
    desc: "Permissões sob medida para pais, escolas e equipe, com segurança e privacidade em padrão internacional.",
    icon: <ShieldCheck className="text-white" strokeWidth={2} size={24} />
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepSlate">Tudo o que uma clínica precisa</h2>
          <p className="text-lg text-slate-500 mt-4">Ciência aplicada à tecnologia.</p>
        </div>

        {/* 2 Lines of 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-start text-left group">
              <div className="w-14 h-14 rounded-2xl bg-royal flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-deepSlate mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};