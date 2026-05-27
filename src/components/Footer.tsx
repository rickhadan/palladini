import { Utensils } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green-light py-12 border-t border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-[80px] md:pb-0">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Utensils className="h-8 w-8 text-brand-gold" />
          <span className="font-serif text-2xl font-bold text-brand-cream">
            Palladini
          </span>
        </div>
        <p className="text-brand-cream-dark/60 text-sm">
          &copy; {new Date().getFullYear()} Palladini Parmegianas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
