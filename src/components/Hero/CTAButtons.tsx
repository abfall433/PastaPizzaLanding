
export const CTAButtons = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-start">
      <button 
        onClick={scrollToMenu}
        className="bg-gradient-to-r from-[#f4a261] to-yellow-400 text-black px-10 py-5 rounded-full text-xl font-bold hover:from-yellow-400 hover:to-[#f4a261] hover:transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(244,162,97,0.5)] relative overflow-hidden group"
      >
        <span className="relative z-10">Commander maintenant</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
      <button 
        onClick={scrollToMenu}
        className="border-2 border-[#f4a261] text-[#f4a261] px-10 py-5 rounded-full text-xl font-bold hover:bg-[#f4a261] hover:text-black transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(244,162,97,0.3)] hover:transform hover:scale-105"
      >
        Voir la carte
      </button>
    </div>
  );
};
