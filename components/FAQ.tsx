import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 px-4 sm:px-6 text-left focus:outline-none group hover:bg-slate-50 transition-colors duration-200"
      >
        <span className={`text-lg sm:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-royal' : 'text-deepSlate group-hover:text-royal'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-50 rotate-180' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-royal" strokeWidth={2.5} />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-royal" strokeWidth={2.5} />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 px-4 sm:px-6 pt-2 text-slate-600 leading-relaxed text-lg">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "O teste é realmente gratuito?",
      answer: (
        <>
          Sim. Você pode usar o ABA Simples por <strong className="text-deepSlate">30 dias completos</strong>. 
          A cobrança só acontece após esse período, se decidir continuar.
        </>
      )
    },
    {
      question: "O sistema é difícil de usar? Terei algum treinamento?",
      answer: (
        <>
          Não. A plataforma foi desenhada para ser <strong className="text-deepSlate">intuitiva</strong>. 
          Além disso, você conta com <strong className="text-deepSlate">tutoriais em vídeo passo a passo</strong> dentro do sistema.
        </>
      )
    },
    {
      question: "Sou profissional autônomo. Vale a pena para mim?",
      answer: (
        <>
          Sim. O ABA Simples organiza agenda, prontuários, protocolos e coleta de dados em um único lugar. 
          E se você crescer, pode adicionar profissionais <strong className="text-deepSlate">sem custo extra</strong>.
        </>
      )
    },
    {
      question: "Posso cadastrar meus próprios protocolos?",
      answer: (
        <>
          Sim. Além da biblioteca com <strong className="text-deepSlate">170+ protocolos internacionais</strong>, 
          você pode cadastrar e utilizar seus próprios protocolos, organizados no <strong className="text-deepSlate">mesmo padrão internacional da plataforma</strong>.
        </>
      )
    },
    {
      question: "O valor muda conforme o número de pacientes?",
      answer: (
        <>
          Não. O plano profissional tem <strong className="text-deepSlate">valor fixo de R$ 50/mês</strong>, 
          para até <strong className="text-deepSlate">50 pacientes ativos</strong>, sem variação por paciente.
        </>
      )
    },
    {
      question: "E se eu ultrapassar 50 pacientes?",
      answer: (
        <>
          Nesse caso, você pode migrar para o <strong className="text-deepSlate">plano Enterprise</strong>, 
          com <strong className="text-deepSlate">pacientes ilimitados</strong>, mediante proposta sob consulta.
        </>
      )
    },
    {
      question: "Posso cadastrar quantos terapeutas, ATs e supervisores quiser?",
      answer: (
        <>
          Sim. <strong className="text-deepSlate">Ilimitado.</strong> Não cobramos por usuário, 
          para permitir atuação integrada da equipe multiprofissional.
        </>
      )
    },
    {
      question: "Pais e escola conseguem acompanhar a evolução?",
      answer: (
        <>
          Sim. É possível liberar <strong className="text-deepSlate">acesso seguro para familiares e escola</strong>, 
          com acompanhamento de evolução e controle de permissões.
        </>
      )
    },
    {
      question: "Os dados dos pacientes estão seguros?",
      answer: (
        <>
          Sim. A plataforma segue a <strong className="text-deepSlate">LGPD</strong>, 
          com controle de acesso por perfil, ambiente seguro (HTTPS) e rastreabilidade clínica.
        </>
      )
    },
    {
      question: "Existe fidelidade ou multa de cancelamento?",
      answer: (
        <>
          Não. A assinatura é mensal e pode ser cancelada a qualquer momento, direto pelo painel.
        </>
      )
    }
  ];

  return (
    <section className="py-24 px-4 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepSlate flex items-center justify-center gap-2">
            Perguntas Frequentes
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Aqui você encontra respostas rápidas para as dúvidas mais comuns sobre o funcionamento da plataforma.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};