
import React from 'react';
import { MessageCircle, Calendar, Check, Plus } from 'lucide-react';

export const Solution = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Chatbot inteligente para agendamento automático via WhatsApp",
      description: "IA responde 24h, agenda consultas e tira dúvidas básicas"
    },
    {
      icon: Calendar,
      title: "Integração com Google Agenda",
      description: "Sincronização automática de horários e lembretes"
    },
    {
      icon: Check,
      title: "Ficha do paciente e histórico organizados no Notion",
      description: "Prontuários digitais sempre atualizados e acessíveis"
    },
    {
      icon: Plus,
      title: "Dashboard visual com status de atendimentos",
      description: "Visão completa da agenda, indicadores e métricas"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Como nossa solução funciona
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma plataforma completa que conecta WhatsApp, Google Agenda e Notion para automatizar seu consultório
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3">Fluxo Automatizado</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Paciente envia mensagem no WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>IA analisa e oferece horários disponíveis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Agenda é atualizada automaticamente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Ficha do paciente é criada no Notion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Lembretes automáticos são enviados</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-slate-600">
                    ⏱️ <strong>Economia de tempo:</strong> 4-6 horas por dia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
