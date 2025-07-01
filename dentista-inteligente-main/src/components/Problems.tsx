
import React from 'react';
import { Clock, MessageCircle, Calendar } from 'lucide-react';

export const Problems = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tempo perdido com agendamentos manuais",
      description: "Horas desperdiçadas organizando agenda e respondendo mensagens repetitivas"
    },
    {
      icon: MessageCircle,
      title: "Falta de integração entre sistemas",
      description: "WhatsApp, agenda e prontuários funcionam separadamente, criando confusão"
    },
    {
      icon: Calendar,
      title: "Equipe sobrecarregada",
      description: "Secretárias fazem tarefas repetitivas quando poderiam focar no atendimento"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Problemas que todo consultório enfrenta
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sabemos como é difícil gerenciar um consultório moderno. Estes desafios são familiares?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-700 font-medium">
            E se você pudesse resolver tudo isso com{' '}
            <span className="text-blue-600 font-semibold">uma única solução</span>?
          </p>
        </div>
      </div>
    </section>
  );
};
