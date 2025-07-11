
import { useState } from "react";
import { Plus } from "lucide-react";
import { MenuItem } from "@/types/menu";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("pizzas");

  const menuData = {
    pizzas: [
      {
        id: "pizza-1",
        name: "Margherita",
        description: "Sauce tomate, mozzarella di bufala, basilic frais, huile d'olive",
        price: 14.50,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "pizzas"
      },
      {
        id: "pizza-2",
        name: "Quattro Stagioni",
        description: "Sauce tomate, mozzarella, jambon, champignons, artichauts, olives",
        price: 17.90,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "pizzas"
      },
      {
        id: "pizza-3",
        name: "Diavola",
        description: "Sauce tomate, mozzarella, salami piquant, piments, origan",
        price: 16.50,
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "pizzas"
      }
    ],
    pates: [
      {
        id: "pasta-1",
        name: "Spaghetti Carbonara",
        description: "Spaghetti, œufs, guanciale, pecorino romano, poivre noir",
        price: 13.90,
        image: "https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0ZXN8ZW58MHx8MHx8fDA%3D",
        category: "pates"
      },
      {
        id: "pasta-2",
        name: "Penne all'Arrabbiata",
        description: "Penne, sauce tomate épicée, ail, persil, piment",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGF0ZXN8ZW58MHx8MHx8fDA%3D",
        category: "pates"
      }
    ],
    desserts: [
      {
        id: "dessert-1",
        name: "Tiramisu",
        description: "Mascarpone, café, cacao, biscuits à la cuillère",
        price: 6.50,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "desserts"
      }
    ]
  };

  const categories = [
    { id: "pizzas", name: "Pizzas", count: menuData.pizzas.length },
    { id: "pates", name: "Pâtes", count: menuData.pates.length },
    { id: "desserts", name: "Desserts", count: menuData.desserts.length }
  ];

  const getCurrentItems = () => {
    return menuData[activeCategory as keyof typeof menuData] || [];
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Notre Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de plats authentiques, préparés avec passion 
            et des ingrédients de première qualité
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex space-x-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-black shadow-md'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentItems().map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price.toFixed(2)}€
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-yellow-400 text-black py-3 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                  <span>Ajouter au panier</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
