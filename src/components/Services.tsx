export default function Services() {
  const services = [
    {
      icon: "📦",
      title: "Emballage sécurisé",
      description:
        "Matériaux professionnels et techniques d'emballage optimisées pour protéger vos biens",
    },
    {
      icon: "🚚",
      title: "Transport national",
      description:
        "Camions équipés et chauffeurs expérimentés pour des trajets en toute sécurité",
    },
    {
      icon: "👷",
      title: "Équipe pro",
      description:
        "Personnel qualifié et formé aux meilleures pratiques du déménagement",
    },
    {
      icon: "🕒",
      title: "Disponibilité 7j/7",
      description:
        "Service disponible tous les jours de la semaine, même les weekends",
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète pour votre déménagement, de l'emballage à la
            livraison
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center card-hover"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section supplémentaire avec plus de détails */}
        <div className="mt-20 bg-[#F8E5D4] rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir Bras Rapides ?
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
                  <span className="text-gray-700">
                    Assurance tous risques incluse
                  </span>
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
                  <span className="text-gray-700">
                    Devis gratuit et sans engagement
                  </span>
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
                  <span className="text-gray-700">
                    Prix transparents, pas de surprise
                  </span>
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
                  <span className="text-gray-700">
                    Suivi en temps réel de votre déménagement
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Besoin d'informations ?
                </h4>
                <p className="text-gray-600 mb-6">
                  Contactez-nous dès maintenant pour toutes vos questions
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+33123456789"
                    className="block w-full bg-[#5073C0] hover:bg-[#4561A8] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    📞 Appeler maintenant
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
