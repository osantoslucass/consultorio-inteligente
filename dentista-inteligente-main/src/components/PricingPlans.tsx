
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Phone, Mail, MessageCircle } from 'lucide-react';

export const PricingPlans = () => {
  const whatsappUrl = "https://wa.me/553584232316";
  
  const plans = [
    {
      name: "Essencial",
      emoji: "🦷",
      subtitle: "Ideal para dentistas autônomos que querem começar a automatizar a rotina",
      features: [
        "Chatbot para agendamento via WhatsApp",
        "Integração com Google Agenda",
        "Ficha de pacientes no Notion",
        "Painel de consultas por status",
        "Suporte básico por e-mail + Página no Notion"
      ],
      popular: false,
      ctaText: "Começar agora"
    },
    {
      name: "Profissional",
      emoji: "🦷🦷",
      subtitle: "Para consultórios com equipe e mais volume de atendimentos",
      features: [
        "Tudo do Plano Essencial",
        "Dashboard de indicadores completo",
        "Envio automático de lembretes via WhatsApp",
        "Gestão de pós-consulta personalizada",
        "Suporte prioritário por WhatsApp"
      ],
      popular: true,
      ctaText: "Plano mais popular"
    },
    {
      name: "Exclusivo",
      emoji: "👑",
      subtitle: "Para clínicas que desejam integração com seu sistema atual",
      setup: null,
      features: [
        "Tudo do Plano Profissional",
        "Integração com sistema interno",
        "Personalização avançada da interface",
        "Modelagem do fluxo personalizada",
        "Suporte dedicado e acompanhamento mensal"
      ],
      popular: false,
      ctaText: "Agendar consulta"
    }
  ];

  const commonBenefits = [
    "Treinamento inicial",
    "Documentação personalizada",
    "Acesso contínuo a melhorias da ferramenta"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Escolha o plano ideal para seu consultório
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluções flexíveis para consultórios de todos os tamanhos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? 'border-blue-500 ring-4 ring-blue-100' : 'border-slate-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="text-4xl mb-2">{plan.emoji}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Plano {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {plan.subtitle}
                </p>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-600">
                  </div>
                  {plan.setup && (
                    <div className="text-sm text-slate-500 mt-1">
                      + setup de {plan.setup}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-slate-900 mb-3">💡 Inclui:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'} text-white py-3`}
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              🚀 Todos os planos incluem:
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {commonBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              Tem dúvidas sobre qual plano escolher?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
