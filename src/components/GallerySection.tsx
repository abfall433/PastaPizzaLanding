
export const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Intérieur du restaurant"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ambiance chaleureuse"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Pizza artisanale"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cuisson au feu de bois"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Pâtes fraîches"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Desserts maison"
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            L'ambiance Pasta Pizza
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plongez dans l'univers de notre restaurant et découvrez notre savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ minHeight: index === 0 ? '400px' : '250px' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/70 px-3 py-1 rounded-full text-sm">
                  {image.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
