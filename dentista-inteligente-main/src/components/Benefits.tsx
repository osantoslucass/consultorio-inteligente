
import React from 'react';
import { Check, Clock, Calendar, MessageCircle, Plus } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Redução de faltas e atrasos",
      metric: "85%",
      description: "Lembretes automáticos diminuem no-shows drasticamente"
    },
    {
      icon: Clock,
      title: "Mais tempo para atendimentos",
      metric: "6h/dia",
      description: "Tempo economizado em tarefas administrativas"
    },
    {
      icon: MessageCircle,
      title: "Atendimento mais profissional",
      metric: "24/7",
      description: "Resposta imediata aos pacientes, mesmo fora do horário"
    },
    {
      icon: Plus,
      title: "Fácil de usar",
      metric: "0",
      description: "Conhecimento técnico necessário - setup em 30 minutos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Benefícios diretos para seu consultório
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Resultados comprovados que transformam a rotina do seu consultório
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {benefit.metric}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Transforme seu consultório em uma máquina eficiente
              </h3>
              <div className="space-y-4">
                {[
                  "Agenda sempre organizada e atualizada",
                  "Pacientes mais satisfeitos com atendimento rápido",
                  "Equipe focada no que realmente importa",
                  "Crescimento do faturamento com mais eficiência"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">
                Imagine seu consultório funcionando assim:
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li>• Agenda sempre cheia e organizada</li>
                <li>• Zero tempo perdido com ligações</li>
                <li>• Pacientes impressionados com a agilidade</li>
                <li>• Você focado 100% no atendimento clínico</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
