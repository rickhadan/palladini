import { HeartHandshake, MapPin, Smartphone, Star } from 'lucide-react';

export default function WhyOrder() {
  const reasons = [
    {
      title: 'Sabor Marcante',
      desc: 'Nossa receita exclusiva gratinada tem o ponto perfeito e a crocância ideal.',
      icon: HeartHandshake,
    },
    {
      title: 'Pedido Fácil',
      desc: 'Cardápio 100% digital, muito intuitivo, onde você faz o pedido rapidinho.',
      icon: Smartphone,
    },
    {
      title: 'Delivery Regional',
      desc: 'Entregamos em Praia Grande, São Vicente e Santos com agilidade.',
      icon: MapPin,
    },
    {
      title: 'Avaliação 5 Estrelas',
      desc: 'Nosso sabor e atendimento nos garantem a nota máxima no iFood.',
      icon: Star,
    },
  ];

  return (
    <section className="py-20 bg-brand-cream border-t border-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-brand-green mb-16">
          Não é só uma parmegiana. É uma refeição completa.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => {
             const Icon = item.icon;
             return (
               <div key={idx} className="flex flex-col items-center text-center p-6">
                 <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-6">
                   <Icon className="w-8 h-8 text-brand-red" fill={item.title === 'Avaliação 5 Estrelas' ? 'currentColor' : 'none'} />
                 </div>
                 <h3 className="font-serif text-xl font-bold text-brand-green mb-3">{item.title}</h3>
                 <p className="text-brand-green-light/80">{item.desc}</p>
               </div>
             )
          })}
        </div>
      </div>
    </section>
  );
}
