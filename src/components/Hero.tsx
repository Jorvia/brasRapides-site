import Image from "next/image";

export default function Hero() {
  return (
    <section id="accueil" className="bg-[#F8E5D4] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu à gauche */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Votre déménagement en{" "}
              <span className="text-[#5073C0]">toute simplicité</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Service rapide, fiable, partout en France. Notre équipe
              professionnelle s&apos;occupe de tout pour que votre déménagement
              se passe en douceur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#B54340] hover:bg-[#A03A37] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Contactez-nous
              </a>

              {/* Bouton Appeler */}
              <a
                href="tel:+33666631454"
                className="bg-[#5073C0] hover:bg-[#4561A8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 phone-pulse"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Appeler maintenant
              </a>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5073C0]">500+</div>
                <div className="text-sm text-gray-600">Déménagements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5073C0]">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5073C0]">24h</div>
                <div className="text-sm text-gray-600">Réponse</div>
              </div>
            </div>
          </div>

          {/* Illustration à droite */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Illustration SVG d'un déménagement */}
              <Image
                src="/loading.png"
                alt="Déménagement"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
