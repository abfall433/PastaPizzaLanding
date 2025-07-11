
import { TestimonialCard } from "./Hero/TestimonialCard";
import { SocialProof } from "./Hero/SocialProof";
import { CTAButtons } from "./Hero/CTAButtons";
import { Badge } from "./Hero/Badge";
import { FloatingParticles } from "./Hero/FloatingParticles";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Gradient overlay sur les bords */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      
      {/* Particules dorées flottantes */}
      <FloatingParticles />

      {/* Container principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Zone Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Image de pizza avec effet parallaxe */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300"
                style={{ 
                  transform: `translateY(${scrollY * 0.02}px)`,
                  width: '140%',
                  maxWidth: '600px'
                }}
              >
                <img 
                  src="/lovable-uploads/dda67953-fc0b-446f-a980-810c6d1406cd.png"
                  alt="Pizza artisanale Pasta Pizza Rouen"
                  className="w-full h-[450px] lg:h-[600px] object-cover"
                  loading="eager"
                />
                {/* Vignettage autour de l'image */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 rounded-3xl"></div>
              </div>
              
              {/* Badge "Fait maison" plus proéminent */}
              <div className="absolute top-8 left-8">
                <Badge className="shadow-2xl animate-pulse-glow bg-gradient-to-r from-yellow-400 to-yellow-500">
                  <span>🔥</span>
                  <span className="font-bold">Fait maison</span>
                </Badge>
              </div>

              {/* Badge urgence */}
              <div className="absolute bottom-8 left-8">
                <Badge className="bg-red-500 text-white shadow-2xl animate-pulse border border-red-400">
                  <span>⚡</span>
                  <span>Livraison gratuite aujourd'hui</span>
                </Badge>
              </div>
            </div>

            {/* Testimonial flottant */}
            <TestimonialCard />
          </div>

          {/* Zone Contenu */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            {/* Social Proof */}
            <SocialProof />

            {/* Titre principal avec taille augmentée */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 font-serif leading-tight animate-fade-in">
                La meilleure pizza 
                <span className="text-[#f4a261] animate-glow-subtle"> artisanale</span> de Rouen
              </h1>

              {/* Sous-titre */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium mb-10 animate-fade-in">
                L'Italie authentique dans votre assiette
              </h2>
            </div>

            {/* Features avec meilleur espacement */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: "⏰", text: "Pâte levée 48h" },
                { icon: "🔥", text: "Cuisson feu de bois" },
                { icon: "🇮🇹", text: "Ingrédients italiens" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-white font-medium text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-8 mb-10 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Paiement 100% sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Livraison garantie en 30min</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L5.05 4.05zM4.343 4.343L14.657 14.657a9 9 0 11-10.314-10.314z" clipRule="evenodd" />
                </svg>
                <span>À 2km de vous</span>
              </div>
            </div>

            {/* Urgence */}
            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-[#f4a261]/30 rounded-xl p-5 mb-10 backdrop-blur-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-3 h-3 bg-[#f4a261] rounded-full animate-pulse"></div>
                <span className="text-[#f4a261] font-semibold text-lg">Plus que 3 créneaux disponibles ce soir</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <CTAButtons />

            {/* Géolocalisation */}
            <p className="text-gray-400 text-sm mt-8 flex items-center justify-center lg:justify-start space-x-2">
              <svg className="w-4 h-4 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L5.05 4.05zM4.343 4.343L14.657 14.657a9 9 0 11-10.314-10.314z" clipRule="evenodd" />
              </svg>
              <span>Livraison rapide sur Rouen et alentours • Votre pizzeria de quartier depuis 2020</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
