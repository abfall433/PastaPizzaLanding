
export const TestimonialCard = () => {
  return (
    <div className="absolute top-8 right-4 lg:right-8 xl:-right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-xs z-20 animate-[float_3s_ease-in-out_infinite]">
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">
          ML
        </div>
        <div className="flex-1">
          <div className="flex space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-800 font-medium leading-snug mb-2">
            "Enfin une vraie pizza italienne à Rouen ! La pâte est parfaite."
          </p>
          <p className="text-xs text-gray-500 font-medium">
            Marie L. - Google Reviews
          </p>
        </div>
      </div>
    </div>
  );
};
