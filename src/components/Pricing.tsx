export default function Pricing() {
  const plans = [
    {
      name: "Studio/1 pièce",
      price: "À partir de 299€",
      description: "Idéal pour un studio ou une chambre",
      features: [
        "Emballage inclus",
        "Transport sécurisé",
        "Équipe de 2 personnes",
        "Assurance incluse",
        "Livraison en 24h",
      ],
      popular: false,
    },
    {
      name: "2-3 pièces",
      price: "À partir de 499€",
      description: "Parfait pour un appartement",
      features: [
        "Emballage complet",
        "Transport sécurisé",
        "Équipe de 3 personnes",
        "Assurance tous risques",
        "Livraison en 24h",
        "Monte-meubles inclus",
      ],
      popular: true,
    },
    {
      name: "Maison 4+ pièces",
      price: "Sur devis",
      description: "Solution personnalisée",
      features: [
        "Emballage sur mesure",
        "Transport dédié",
        "Équipe de 4+ personnes",
        "Assurance complète",
        "Planning flexible",
        "Service premium",
      ],
      popular: false,
    },
  ];

  return (
    <section id="tarifs" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Tarifs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des prix transparents et sans surprise. Devis gratuit et sans
            engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg card-hover ${
                plan.popular ? "ring-2 ring-[#5073C0] relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#5073C0] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-[#5073C0] mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href="tel:+33123456789"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center ${
                    plan.popular
                      ? "bg-[#5073C0] hover:bg-[#4561A8] text-white"
                      : "bg-[#B54340] hover:bg-[#A03A37] text-white"
                  }`}
                >
                  📞 Appeler pour plus d'infos
                </a>
                <a
                  href="#contact"
                  className="block w-full text-center py-2 px-6 text-[#5073C0] hover:text-[#4561A8] font-medium transition-colors"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Pourquoi nos tarifs sont transparents ?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5073C0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Pas de frais cachés</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5073C0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Devis détaillé gratuit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5073C0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Prix fixe garanti</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#5073C0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sans engagement</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-[#F8E5D4] rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Devis personnalisé gratuit
                </h4>
                <p className="text-gray-600 mb-6">
                  Contactez-nous pour un devis sur mesure adapté à vos besoins
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+33123456789"
                    className="block w-full bg-[#5073C0] hover:bg-[#4561A8] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    📞 Appeler pour un devis
                  </a>
                  <a
                    href="#contact"
                    className="block w-full bg-[#B54340] hover:bg-[#A03A37] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    📝 Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
