"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeDemenagement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Merci pour votre message ! Nous vous contacterons rapidement.");
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      typeDemenagement: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt pour votre déménagement ? Contactez-nous pour un devis
            personnalisé ou pour toute question.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#5073C0] rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <a
                      href="tel:+33123456789"
                      className="text-[#5073C0] hover:text-[#4561A8] transition-colors"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#5073C0] rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a
                      href="mailto:contact@brasrapides.fr"
                      className="text-[#5073C0] hover:text-[#4561A8] transition-colors"
                    >
                      contact@brasrapides.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#5073C0] rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Zone d'intervention
                    </div>
                    <div className="text-gray-600">Partout en France</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#5073C0] rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Horaires</div>
                    <div className="text-gray-600">Lun-Dim : 7h-20h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton d'appel rapide */}
            <div className="bg-[#F8E5D4] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Besoin d'une réponse immédiate ?
              </h4>
              <p className="text-gray-600 mb-4">
                Appelez-nous directement pour un devis rapide
              </p>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center bg-[#5073C0] hover:bg-[#4561A8] text-white px-6 py-3 rounded-lg font-semibold transition-colors phone-pulse"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Appeler maintenant
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5073C0] focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5073C0] focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5073C0] focus:border-transparent transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label
                  htmlFor="typeDemenagement"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Type de déménagement
                </label>
                <select
                  id="typeDemenagement"
                  name="typeDemenagement"
                  value={formData.typeDemenagement}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5073C0] focus:border-transparent transition-colors"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="studio">Studio/1 pièce</option>
                  <option value="appartement">Appartement 2-3 pièces</option>
                  <option value="maison">Maison 4+ pièces</option>
                  <option value="bureau">Bureau/Commerce</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5073C0] focus:border-transparent transition-colors"
                  placeholder="Décrivez votre projet de déménagement..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B54340] hover:bg-[#A03A37] text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
