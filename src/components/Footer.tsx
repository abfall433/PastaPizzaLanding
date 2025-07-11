
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <span className="text-3xl font-bold text-white">P</span>
                <span className="text-3xl font-bold text-yellow-400 absolute -ml-1">P</span>
              </div>
              <span className="text-2xl font-bold">Pasta Pizza</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Restaurant italien authentique à Rouen. Découvrez nos pizzas artisanales 
              et nos pâtes fraîches dans une ambiance chaleureuse et conviviale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-gray-300 hover:text-yellow-400 transition-colors">Accueil</a></li>
              <li><a href="#histoire" className="text-gray-300 hover:text-yellow-400 transition-colors">Notre Histoire</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors">Menu</a></li>
              <li><a href="#galerie" className="text-gray-300 hover:text-yellow-400 transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>15 Rue de la République<br />76000 Rouen</p>
              <p>Tél: 02 35 12 34 56</p>
              <p>Email: contact@pastapizza-rouen.fr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pasta Pizza Rouen. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">CGV</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
