import React from 'react';

export const SocialProof = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Dentistas já estão transformando seus consultórios
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Veja como nossa solução tem ajudado profissionais a economizar tempo, organizar atendimentos e encantar pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="space-y-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
              <p className="text-slate-300 italic">
                “Antes era uma confusão com as agendas, hoje tudo está centralizado e automatizado. Meus pacientes elogiam a organização!”
              </p>
              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Dra. Juliana Martins</p>
                    <p className="text-sm text-slate-400">Odontoclínica Martins – Belo Horizonte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="space-y-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
              <p className="text-slate-300 italic">
                “Com a automação do WhatsApp, conseguimos reduzir 80% dos agendamentos manuais. Meu tempo é focado no que importa.”
              </p>
              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Dr. Ricardo Lopes</p>
                    <p className="text-sm text-slate-400">Clínica Sorriso – São Paulo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="space-y-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
              <p className="text-slate-300 italic">
                “O sistema no Notion me deu clareza total da rotina. E o suporte foi impecável! Recomendo para qualquer consultório.”
              </p>
              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Dra. Camila Ribeiro</p>
                    <p className="text-sm text-slate-400">Camila Odonto – Itajubá</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-slate-800 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-slate-400">Horas economizadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">95%</div>
              <div className="text-sm text-slate-400">Satisfação dos dentistas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-slate-400">Atendimento automático</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
