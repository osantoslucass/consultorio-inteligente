import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Inteligência de Negócio Ai</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Automatize seu consultório odontológico com IA. Mais tempo para cuidar dos seus pacientes, menos tempo com burocracias.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">contato@autoconsultorio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Itajubá, MG</span>
              </div>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors"></a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors"></a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors"></a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 InteligenciadeNegocioAi. Todos os direitos reservados.</p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Desenvolvido para revolucionar consultórios odontológicos
            </p>
          </div>
        </div>
      </div>
    </footer>;
};