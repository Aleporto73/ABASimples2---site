import React from 'react';
import { 
  Waves, Eye, Copy, MessageSquare, Ear, Mic, 
  Gamepad2, Scale, Heart, Users, BookOpen, Sun 
} from 'lucide-react';

interface Domain {
  title: string;
  age: string;
  desc: string;
  standard: string;
  icon: React.ReactNode;
}

const domains: Domain[] = [
  { 
    title: "Integração Sensorial", 
    age: "3–16 anos", 
    desc: "Base fisiológica da autorregulação para permitir foco, participação social e aprendizagem funcional.",
    standard: "NDBI + Ayres contemporâneo",
    icon: <Waves />
  },
  { 
    title: "Habilidades de Atenção", 
    age: "2–12 anos", 
    desc: "Fundação da aprendizagem: manter, alternar e compartilhar atenção em contextos naturais.",
    standard: "NET e ABA naturalista",
    icon: <Eye />
  },
  { 
    title: "Habilidades de Imitação", 
    age: "1–10 anos", 
    desc: "Porta de entrada para aprendizagem social por observação funcional e responsiva.",
    standard: "NDBI + PEAK + Floortime",
    icon: <Copy />
  },
  { 
    title: "Comunicação Alternativa", 
    age: "2–14 anos", 
    desc: "Comunicação funcional multimodal para expressão clara de necessidades e escolhas.",
    standard: "Comunicação multimodal centrada em autonomia",
    icon: <MessageSquare />
  },
  { 
    title: "Linguagem Receptiva", 
    age: "1–12 anos", 
    desc: "Compreensão de comandos, vocabulário e relações conceituais como base da linguagem.",
    standard: "ABA + NDBI contextualizada",
    icon: <Ear />
  },
  { 
    title: "Linguagem Expressiva", 
    age: "1–12 anos", 
    desc: "Desenvolvimento de fala funcional, frases e comunicação espontânea.",
    standard: "Linguagem naturalista baseada em interação",
    icon: <Mic />
  },
  { 
    title: "Brincadeira e Jogo", 
    age: "2–12 anos", 
    desc: "Desenvolvimento simbólico, cooperação e regras sociais através do brincar.",
    standard: "NDBI + Floortime contemporâneo",
    icon: <Gamepad2 />
  },
  { 
    title: "Autorregulação Comportamental", 
    age: "3–14 anos", 
    desc: "Controle de impulsos, persistência e previsibilidade comportamental funcional.",
    standard: "FCT + co-regulação",
    icon: <Scale />
  },
  { 
    title: "Regulação Emocional", 
    age: "3–16 anos", 
    desc: "Reconhecimento e manejo de emoções para redução de crises e autonomia emocional.",
    standard: "ABA humanizada + mindfulness infantil",
    icon: <Heart />
  },
  { 
    title: "Habilidades Sociais", 
    age: "4–16 anos", 
    desc: "Iniciação, manutenção e reciprocidade em interações sociais naturais.",
    standard: "PEAK + práticas sociais contemporâneas",
    icon: <Users />
  },
  { 
    title: "Habilidades Pré-Acadêmicas", 
    age: "3–12 anos", 
    desc: "Fundamentos para alfabetização, matemática inicial e organização cognitiva.",
    standard: "ABA educacional contextualizada",
    icon: <BookOpen />
  },
  { 
    title: "Autonomia e Vida Diária", 
    age: "3–16 anos", 
    desc: "Independência funcional em autocuidado, rotinas e participação cotidiana.",
    standard: "Modelos naturalistas de independência funcional",
    icon: <Sun />
  },
];

export const ClinicalDomains: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepSlate tracking-tight mb-3">
            12 Domínios da ABA Contemporânea
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Mapa clínico organizado com rigor técnico e padronização internacional.
          </p>
        </div>

        {/* 
          Grid Layout: 
          Desktop: 4 columns (grid-cols-4) - 3 Rows
          Tablet: 2 columns
          Mobile: 1 column
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.map((domain, idx) => (
            <div 
              key={idx} 
              className="bg-[#F4F8FF] rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-colors duration-200 flex flex-col h-full"
            >
              {/* Header: Icon + Age Chip */}
              <div className="flex justify-between w-full items-start mb-3">
                <div className="text-royal">
                  {React.cloneElement(domain.icon as React.ReactElement, { size: 22, strokeWidth: 2 })}
                </div>
                <span className="text-[10px] font-bold text-slate-500 bg-white border border-blue-100 px-2 py-0.5 rounded-full">
                  {domain.age}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-deepSlate text-[16px] leading-tight mb-2">
                {domain.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-slate-600 leading-snug mb-4 flex-grow">
                {domain.desc}
              </p>

              {/* Footer: Standard */}
              <div className="mt-auto pt-3 border-t border-blue-200/50">
                <p className="text-[10px] text-royal font-bold uppercase tracking-wide">
                  Padrão Internacional: 
                  <span className="text-slate-500 font-medium normal-case capitalize ml-1 block sm:inline">
                    {domain.standard}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};