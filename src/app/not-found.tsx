import Link from 'next/link';
import { Sparkles, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dfba73] to-[#8d6c2a] flex items-center justify-center mx-auto shadow-xl">
          <Sparkles className="w-8 h-8 text-black" />
        </div>
        <div>
          <h1 className="text-6xl font-black gold-gradient-text font-serif">404</h1>
          <h2 className="text-xl font-bold text-white mt-2 font-serif">
            Propriété Introuvable
          </h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Ce bien a peut-être déjà trouvé preneur. Consultez notre catalogue pour découvrir d'autres propriétés d'exception.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/biens"
            className="gold-gradient-bg px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-black" />
            Explorer le Catalogue
          </Link>
          <Link
            href="/"
            className="gold-outline-btn px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
