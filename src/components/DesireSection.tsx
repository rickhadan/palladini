import { Flame, Medal, PackageCheck, Timer } from 'lucide-react';

export default function DesireSection() {
  const cards = [
    {
      title: 'Molho Artesanal',
      description: 'Receita de família, tomates frescos e cozimento lento para um sabor inigualável.',
      icon: Flame,
    },
    {
      title: 'Qualidade Premium',
      description: 'Carnes rigorosamente selecionadas e ingredientes de primeira linha em cada pedido.',
      icon: Medal,
    },
    {
      title: 'Acompanhamentos',
      description: 'Arroz soltinho, batatas chips crocantes e queijo parmesão extra para finalizar.',
      icon: PackageCheck,
    },
    {
      title: 'Entrega Rápida',
      description: 'Chega quentinha na sua casa, direto do fogão, em menos de 30 minutos.',
      icon: Timer,
    },
  ];

  return (
    <section className="py-20 bg-brand-cream border-b border-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green mb-6">
            Molho artesanal, queijo gratinado e aquele sabor de comida feita com cuidado
          </h2>
          <p className="text-lg text-brand-green-light/80">
            Na Palladini Parmegianas, cada pedido é preparado para entregar sabor, fartura e qualidade. Nossas parmegianas combinam molho artesanal, ingredientes selecionados e acompanhamentos que deixam a experiência completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-cream-dark hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center mb-6 text-brand-red">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-green mb-3">
                  {card.title}
                </h3>
                <p className="text-brand-green-light/80 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
