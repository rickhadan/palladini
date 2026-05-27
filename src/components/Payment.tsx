import { Banknote, CreditCard, QrCode } from 'lucide-react';

export default function Payment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold text-brand-green mb-12">
          Pagamento fácil e seguro
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-4 text-brand-green">
              <QrCode className="w-8 h-8" />
            </div>
            <span className="font-semibold text-brand-green">Pix</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-4 text-brand-green">
              <CreditCard className="w-8 h-8" />
            </div>
            <span className="font-semibold text-brand-green">Crédito</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-4 text-brand-green">
              <CreditCard className="w-8 h-8 opacity-70" />
            </div>
            <span className="font-semibold text-brand-green">Débito</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-4 text-brand-green">
              <Banknote className="w-8 h-8" />
            </div>
            <span className="font-semibold text-brand-green">Dinheiro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
