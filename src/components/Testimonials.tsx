export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Paris → Lyon",
      rating: 5,
      text: "Service exceptionnel ! L'équipe a été professionnelle du début à la fin. Mon déménagement s'est déroulé sans aucun problème.",
      avatar: "👩‍💼",
    },
    {
      name: "Pierre Martin",
      location: "Marseille → Toulouse",
      rating: 5,
      text: "Très satisfait du service. Prix transparents, équipe ponctuelle et efficace. Je recommande vivement !",
      avatar: "👨‍💼",
    },
    {
      name: "Sophie Bernard",
      location: "Bordeaux → Nantes",
      rating: 5,
      text: "Un déménagement stressant transformé en expérience agréable. L'équipe a pris soin de tous mes biens.",
      avatar: "👩‍🎨",
    },
    {
      name: "Thomas Leroy",
      location: "Lille → Strasbourg",
      rating: 5,
      text: "Excellent rapport qualité-prix. Service client au top et livraison dans les délais annoncés.",
      avatar: "👨‍🔧",
    },
  ];

  return (
    <section className="bg-[#FDF4EF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 500 familles nous ont fait confiance pour leur déménagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              {/* Note */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texte du témoignage */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Informations client */}
              <div className="flex items-center">
                <div className="text-2xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#5073C0] mb-2">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5073C0] mb-2">500+</div>
              <div className="text-gray-600">Déménagements réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#5073C0] mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Note moyenne Google</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-[#5073C0] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez nos clients satisfaits !
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous pour un service personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33666631454"
                className="bg-white text-[#5073C0] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
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
              <a
                href="#contact"
                className="bg-[#B54340] hover:bg-[#A03A37] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
