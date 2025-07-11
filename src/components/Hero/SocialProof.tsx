
import { useEffect, useState } from "react";

export const SocialProof = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < 400) {
          return prev + Math.ceil((400 - prev) / 10);
        }
        clearInterval(interval);
        return 400;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format"
  ];

  return (
    <div className="flex flex-col space-y-6 mb-8">
      {/* Chiffres et avatars */}
      <div className="flex items-center space-x-6 animate-fade-in-up">
        <div className="flex -space-x-2">
          {avatars.map((avatar, i) => (
            <div 
              key={i} 
              className="w-12 h-12 rounded-full border-2 border-[#f4a261] shadow-lg transform hover:scale-110 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img 
                src={avatar}
                alt={`Client satisfait ${i + 1}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ))}
          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#f4a261] shadow-lg animate-fade-in-up" style={{ animationDelay: '1s' }}>
            +{count}
          </div>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-xl font-bold text-white">{count}+ clients satisfaits</p>
          <p className="text-sm text-gray-400">à Rouen et alentours</p>
        </div>
      </div>

      {/* Badge Google et indicateur temps réel regroupés */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-[#f4a261]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-white">4.8/5 sur Google</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">12 commandes dans les 2 dernières heures</span>
          </div>
        </div>
      </div>
    </div>
  );
};
