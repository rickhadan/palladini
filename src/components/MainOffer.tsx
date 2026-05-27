import { Check } from 'lucide-react';

export default function MainOffer() {
  const bullets = [
    'Serve até 4 pessoas generosamente',
    'Filé mignon da mais alta qualidade',
    'Acompanha arroz branco soltinho',
    'Acompanha batata chips crocante',
    'Finalizada com parmesão extra relado na hora'
  ];

  return (
    <section className="py-20 bg-brand-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-green-light rounded-[3rem] p-8 sm:p-12 lg:p-16 relative shadow-2xl border border-brand-gold/10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-gold blur-[120px] opacity-20 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-brand-red blur-[80px] opacity-10 rounded-full"></div>
               <img 
                 src="https://i.ibb.co/spFYBXGc/usar-essa-comprimida.webp" 
                 alt="Família de Filé Mignon" 
                 className="relative w-full rounded-2xl shadow-xl object-cover h-[400px] sm:h-[500px]"
               />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-gold font-semibold text-sm mb-6 uppercase tracking-wider">
                Oferta Especial
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mb-6 leading-tight">
                Destaque da casa: <br/> Família de Filé Mignon
              </h2>
              <p className="text-lg text-brand-cream-dark mb-8 leading-relaxed">
                Uma parmegiana generosa para compartilhar com até 4 pessoas. Ideal para almoço em família, fim de semana ou aquele pedido especial sem sair de casa.
              </p>

              <ul className="space-y-4 mb-10">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-green font-bold" />
                      </div>
                    </div>
                    <span className="ml-3 text-brand-cream-dark">{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://pedido.brendi.com.br/parmegianas-palladini-gonzaga"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-brand-cream bg-brand-red hover:bg-brand-red-hover transition-all shadow-xl shadow-brand-red/30 transform hover:-translate-y-1"
              >
                Ver Cardápio Digital
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
