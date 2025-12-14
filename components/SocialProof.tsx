import React from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Dra. Ana Paula", role: "Diretora Clínica", img: "https://picsum.photos/300/533?random=1", label: "Economia de R$2k" },
  { id: 2, name: "Carlos M.", role: "Supervisor ABA", img: "https://picsum.photos/300/533?random=2", label: "170 Protocolos" },
  { id: 3, name: "Mariana", role: "Mãe Atípica", img: "https://picsum.photos/300/533?random=3", label: "Transparência" },
  { id: 4, name: "Roberto", role: "Psicólogo", img: "https://picsum.photos/300/533?random=4", label: "Relatórios" },
  { id: 5, name: "Fernanda", role: "AT", img: "https://picsum.photos/300/533?random=5", label: "App Offline" },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 text-center mb-12 max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-deepSlate leading-tight">
            Relatos de equipes multiprofissionais da primeira clínica credenciada pelo Ministério da Saúde para atendimento via SUS que utilizam o ABA Simples na prática clínica.
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x no-scrollbar justify-start md:justify-center">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="relative min-w-[160px] w-[160px] h-[284px] rounded-2xl overflow-hidden shadow-md cursor-pointer group snap-center transform transition-transform hover:scale-105"
            >
              <img src={t.img} alt={t.name} className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:bg-white/50 transition-colors">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-sm truncate">{t.name}</p>
                <p className="text-slate-300 text-xs truncate">{t.role}</p>
                <div className="mt-2 inline-block px-2 py-0.5 bg-emerald-500/90 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                  {t.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};