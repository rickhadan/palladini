import { MapPin } from 'lucide-react';

export default function HoursAndAreas() {
  const hours = [
    { day: 'Segunda-feira', time: 'Fechado' },
    { day: 'Terça-feira', time: 'Fechado' },
    { day: 'Quarta-feira', time: '11h às 17h' },
    { day: 'Quinta-feira', time: '11h às 17h' },
    { day: 'Sexta-feira', time: '11h às 22h' },
    { day: 'Sábado', time: '11h às 17h' },
    { day: 'Domingo', time: '11h às 18h' },
  ];

  return (
    <section className="py-20 bg-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-brand-cream rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="font-serif text-3xl font-bold text-brand-green mb-8">
              Confira nossos horários de atendimento
            </h2>
            <div className="space-y-4">
              {hours.map((h, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-brand-green/10 last:border-0">
                  <span className={`font-semibold ${h.time === 'Fechado' ? 'text-brand-green/40' : 'text-brand-green'}`}>{h.day}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${h.time === 'Fechado' ? 'bg-gray-200 text-gray-500' : 'bg-brand-gold/20 text-brand-gold'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6 text-brand-gold">
               <MapPin className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream mb-6">
               Delivery em Praia Grande, São Vicente e Santos
            </h2>
            <p className="text-lg text-brand-cream-dark mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
               A Palladini Parmegianas atende clientes da Baixada Santista com entrega prática, rápida e saborosa. Consulte a disponibilidade da sua região no momento do pedido.
            </p>
            <div>
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
