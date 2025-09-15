"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-[#5073C0]">Bras</span>
              <span className="text-[#B54340]">Rapides</span>
            </h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#accueil"
              className="text-gray-700 hover:text-[#5073C0] transition-colors font-medium"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#5073C0] transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#tarifs"
              className="text-gray-700 hover:text-[#5073C0] transition-colors font-medium"
            >
              Tarifs
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#5073C0] transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Bouton Appeler Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+33666631454"
              className="bg-[#5073C0] hover:bg-[#4561A8] text-white px-6 py-2 rounded-lg font-medium transition-colors phone-pulse"
            >
              📞 Appeler maintenant
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#5073C0] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#accueil"
                className="block px-3 py-2 text-gray-700 hover:text-[#5073C0] transition-colors"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-[#5073C0] transition-colors"
              >
                Services
              </a>
              <a
                href="#tarifs"
                className="block px-3 py-2 text-gray-700 hover:text-[#5073C0] transition-colors"
              >
                Tarifs
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-[#5073C0] transition-colors"
              >
                Contact
              </a>
              <a
                href="tel:+33666631454"
                className="block w-full mt-4 bg-[#5073C0] hover:bg-[#4561A8] text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
              >
                📞 Appeler maintenant
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
