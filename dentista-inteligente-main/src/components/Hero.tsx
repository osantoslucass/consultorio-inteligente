import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Clock } from 'lucide-react';

export const Hero = () => {
  const whatsappUrl = "https://wa.me/553584232316";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Automatize seu consultório com{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  IA
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-700">
                Agenda cheia, rotina leve.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                IA no WhatsApp + Gestão no Notion = Mais tempo para cuidar dos seus pacientes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Quero uma demonstração gratuita
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-300 text-slate-700 px-8 py-6 text-lg font-medium hover:bg-slate-50"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Ver como funciona
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-slate-600">Integração com Google Agenda</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm text-slate-600">WhatsApp Automático</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Consultório Online</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">Nova mensagem recebida</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      "Olá! Gostaria de agendar uma consulta para amanhã..."
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-900">Agendamento confirmado</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      Maria Silva - 15:30 | Limpeza + Avaliação
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-900">Lembrete enviado</span>
                    </div>
                    <p className="text-sm text-purple-700 mt-1">
                      Consulta em 1 hora - João Santos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
