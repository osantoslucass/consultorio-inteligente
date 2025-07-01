
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Calendar } from 'lucide-react';

export const FinalCTA = () => {
  const whatsappUrl = "https://wa.me/5535842323216";

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Seu consultório merece uma{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              secretária virtual 24h
            </span>{' '}
            por dia
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Pare de perder tempo com tarefas repetitivas. Automatize seu consultório hoje mesmo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MessageCircle, text: "Setup em 30 minutos" },
              { icon: Calendar, text: "Suporte completo incluído" },
              { icon: Check, text: "Demonstração 100% gratuita" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-blue-700/50 rounded-lg p-4">
                <feature.icon className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Agendar demonstração gratuita
            </Button>
            
            <p className="text-sm text-blue-200">
              ⚡ Vagas limitadas para demonstração personalizada
            </p>
          </div>

          <div className="mt-16 bg-blue-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              O que você vai descobrir na demonstração:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "Como configurar a IA do WhatsApp em 15 minutos",
                "Integração completa com sua agenda atual",
                "Dashboard personalizado para seu consultório",
                "ROI esperado em 30 dias de uso"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
