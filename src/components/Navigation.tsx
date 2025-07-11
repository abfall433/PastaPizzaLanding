
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

interface NavigationProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Navigation = ({ cartItemsCount, onCartClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <span className="text-2xl font-bold text-black">P</span>
              <span className="text-2xl font-bold text-yellow-400 absolute -ml-1">P</span>
            </div>
            <span className="text-xl font-bold text-black">asta Pizza</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('galerie')}
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              Contact
            </button>
            
            {/* Cart Button */}
            <button 
              onClick={onCartClick}
              className="relative bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors flex items-center space-x-2"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-400 hover:bg-gray-50 transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-400 hover:bg-gray-50 transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-400 hover:bg-gray-50 transition-colors"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-400 hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
