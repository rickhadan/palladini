import { ChefHat, Clock, Star, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-green pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-cream leading-tight mb-6">
              A Parmegiana que transforma seu almoço em um <span className="text-brand-gold">momento especial</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-cream-dark mb-8 max-w-2xl mx-auto lg:mx-0">
              Delivery de parmegianas artesanais em Praia Grande, São Vicente e Santos, com molho artesanal, ingredientes de primeira qualidade e entrega em até 30 minutos.
            </p>
            
            <div className="mb-10">
              <a
                href="https://pedido.brendi.com.br/parmegianas-palladini-gonzaga"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-brand-cream bg-brand-red hover:bg-brand-red-hover transition-all shadow-xl shadow-brand-red/30 transform hover:-translate-y-1"
              >
                Ver Cardápio Digital
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                <div className="bg-brand-green-light p-3 rounded-full text-brand-gold">
                  <ChefHat className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-brand-cream-dark">Molho<br/>Artesanal</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                <div className="bg-brand-green-light p-3 rounded-full text-brand-gold">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-brand-cream-dark">Entrega<br/>30 min</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                <div className="bg-brand-green-light p-3 rounded-full text-brand-gold">
                  <Star className="h-6 w-6" fill="currentColor" />
                </div>
                <span className="text-sm font-medium text-brand-cream-dark">5 Estrelas<br/>iFood</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                <div className="bg-brand-green-light p-3 rounded-full text-brand-gold">
                  <Truck className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-brand-cream-dark">Somente<br/>Delivery</span>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-brand-gold blur-[100px] opacity-20 rounded-full"></div>
            <iframe 
              src="https://drive.google.com/file/d/109IUyu2Gd3StE0QlvsPUn3U8cVAf5jRR/preview"
              title="Vídeo de Apresentação"
              className="relative z-10 w-full max-w-lg mx-auto lg:max-w-none rounded-3xl shadow-2xl object-cover aspect-square sm:aspect-auto sm:h-[600px] border-4 border-brand-green-light/50"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}
