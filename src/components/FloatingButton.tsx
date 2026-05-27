import { ShoppingBag } from 'lucide-react';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 md:hidden flex justify-center">
       <a
          href="https://pedido.brendi.com.br/parmegianas-palladini-gonzaga"
          className="w-full max-w-sm inline-flex items-center justify-center gap-2 px-6 py-4 border border-transparent text-lg font-bold rounded-full text-brand-cream bg-brand-red shadow-[0_10px_40px_-10px_rgba(210,54,30,0.8)]"
        >
          <ShoppingBag className="w-5 h-5" />
          Ver Cardápio Digital
        </a>
    </div>
  );
}
