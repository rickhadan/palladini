import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'A Palladini Parmegianas tem loja física?',
      a: 'Nós operamos no modelo Dark Kitchen, sendo 100% focados em delivery para garantir a máxima qualidade e rapidez na entrega até a sua casa.'
    },
    {
      q: 'Quais cidades vocês atendem?',
      a: 'Atendemos clientes em Praia Grande, São Vicente e Santos. Verifique a disponibilidade para o seu bairro no momento do pedido.'
    },
    {
      q: 'Onde vejo os preços?',
      a: 'Todos os nossos preços e ofertas exclusivas estão disponíveis no nosso cardápio digital.'
    },
    {
      q: 'Qual é o tempo médio de entrega?',
      a: 'Nosso objetivo é entregar o seu pedido quentinho em até 30 minutos, dependendo da sua localização e da demanda do momento.'
    },
    {
      q: 'Quais acompanhamentos acompanham a parmegiana?',
      a: 'Nossas parmegianas acompanham arroz branco soltinho, as nossas famosas batatas chips crocantes e queijo parmesão extra.'
    },
    {
      q: 'Como faço meu pedido?',
      a: 'É super simples! Basta clicar em qualquer botão "Ver Cardápio Digital" nesta página para acessar nossa plataforma, selecionar seu pedido e finalizar.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-brand-cream border-t border-brand-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-center text-brand-green mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border text-left border-brand-cream-dark rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-brand-green">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-brand-green-light/80 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
