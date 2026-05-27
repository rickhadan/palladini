import { Star } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    {
      text: "Parmegiana muito bem servida, molho delicioso e entrega rápida.",
      author: "João M."
    },
    {
      text: "Chegou quentinha e muito saborosa. A batata chips combina demais.",
      author: "Mariana S."
    },
    {
      text: "Pedi a família de filé mignon e valeu muito a pena. Serve muito bem.",
      author: "Carlos E."
    }
  ];

  return (
    <section className="py-20 bg-brand-cream border-t border-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green mb-6">
            Sabor aprovado por quem já pediu
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="flex text-brand-gold">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6" fill="currentColor" />)}
             </div>
          </div>
          <p className="text-xl font-medium text-brand-red">5 Estrelas no iFood</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-brand-cream-dark relative">
              <div className="absolute top-8 right-8 text-brand-gold/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.122C16.593 13.568 16.702 12.983 16.702 12.389V3H23V12.389C23 16.924 20.063 20.768 15.69 22.387L14.017 21ZM3.017 21L5.411 14.122C5.593 13.568 5.702 12.983 5.702 12.389V3H12V12.389C12 16.924 9.063 20.768 4.69 22.387L3.017 21Z" />
                </svg>
              </div>
              <div className="flex text-brand-gold mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4" fill="currentColor" />)}
              </div>
              <p className="text-brand-green-light font-medium text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="font-bold text-brand-green">
                {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
