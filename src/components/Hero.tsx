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
              professionnelle s'occupe de tout pour que votre déménagement se
              passe en douceur.
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
                href="tel:+33123456789"
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
              <svg
                className="w-full h-auto max-w-md"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Camion de déménagement */}
                <rect
                  x="50"
                  y="200"
                  width="200"
                  height="60"
                  rx="10"
                  fill="#5073C0"
                />
                <rect
                  x="60"
                  y="210"
                  width="180"
                  height="40"
                  rx="5"
                  fill="#B54340"
                />
                <circle cx="80" cy="260" r="15" fill="#333" />
                <circle cx="220" cy="260" r="15" fill="#333" />
                <rect
                  x="70"
                  y="180"
                  width="160"
                  height="30"
                  rx="5"
                  fill="#5073C0"
                />

                {/* Boîtes */}
                <rect
                  x="250"
                  y="220"
                  width="40"
                  height="30"
                  fill="#F8E5D4"
                  stroke="#333"
                  strokeWidth="2"
                />
                <rect
                  x="260"
                  y="210"
                  width="30"
                  height="20"
                  fill="#F8E5D4"
                  stroke="#333"
                  strokeWidth="2"
                />
                <rect
                  x="270"
                  y="200"
                  width="20"
                  height="15"
                  fill="#F8E5D4"
                  stroke="#333"
                  strokeWidth="2"
                />

                {/* Maison */}
                <rect x="300" y="180" width="80" height="60" fill="#E5E7EB" />
                <polygon points="300,180 340,150 380,180" fill="#B54340" />
                <rect x="320" y="200" width="15" height="25" fill="#5073C0" />
                <rect x="345" y="200" width="15" height="25" fill="#5073C0" />

                {/* Personnes */}
                <circle cx="320" cy="160" r="8" fill="#FBBF24" />
                <rect x="315" y="168" width="10" height="15" fill="#5073C0" />

                <circle cx="340" cy="160" r="8" fill="#FBBF24" />
                <rect x="335" y="168" width="10" height="15" fill="#B54340" />

                {/* Éléments décoratifs */}
                <circle cx="100" cy="100" r="3" fill="#FBBF24" opacity="0.6" />
                <circle cx="150" cy="80" r="2" fill="#FBBF24" opacity="0.6" />
                <circle cx="200" cy="120" r="4" fill="#FBBF24" opacity="0.6" />
                <circle cx="250" cy="90" r="3" fill="#FBBF24" opacity="0.6" />
                <circle cx="300" cy="110" r="2" fill="#FBBF24" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
