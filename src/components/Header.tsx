import { Utensils } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-brand-green border-b border-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold">
              <span className="text-brand-red">Palladini</span>
              <span className="text-brand-gold ml-2">Parmegianas</span>
            </span>
          </div>
          <div className="hidden md:block">
            <a
              href="https://pedido.brendi.com.br/parmegianas-palladini-gonzaga"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-brand-cream bg-brand-red hover:bg-brand-red-hover transition-colors shadow-lg shadow-brand-red/30"
            >
              Ver Cardápio Digital
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
