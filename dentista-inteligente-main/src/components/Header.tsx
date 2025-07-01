
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const whatsappUrl = "https://wa.me/553584232316";
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">🦷</div>
            <div className="font-bold text-xl text-slate-900">
              DentBot<span className="text-blue-600">AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('como-funciona')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Planos
            </button>
            <div className="flex items-center gap-3 ml-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <Phone className="h-4 w-4" />
                Contato
              </Button>
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
                Demo Gratuita
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600 hover:text-slate-900">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('como-funciona')} className="text-left text-slate-600 hover:text-slate-900 transition-colors py-2">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-left text-slate-600 hover:text-slate-900 transition-colors py-2">
                Benefícios
              </button>
              <button onClick={() => scrollToSection('planos')} className="text-left text-slate-600 hover:text-slate-900 transition-colors py-2">
                Planos
              </button>
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 justify-center"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <Phone className="h-4 w-4" />
                  Contato
                </Button>
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 justify-center"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                  Demo Gratuita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
