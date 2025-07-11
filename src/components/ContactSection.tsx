
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Venez nous rendre visite
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Situés au cœur de Rouen, nous vous accueillons dans une ambiance chaleureuse
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Adresse</h3>
                <p className="text-gray-600">
                  15 Rue de la République<br />
                  76000 Rouen, France
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Téléphone</h3>
                <a href="tel:+33235123456" className="text-gray-600 hover:text-yellow-400 transition-colors">
                  02 35 12 34 56
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Email</h3>
                <a href="mailto:contact@pastapizza-rouen.fr" className="text-gray-600 hover:text-yellow-400 transition-colors">
                  contact@pastapizza-rouen.fr
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Horaires</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Lundi - Jeudi : 11h30 - 14h30, 18h30 - 22h30</p>
                  <p>Vendredi - Samedi : 11h30 - 14h30, 18h30 - 23h00</p>
                  <p>Dimanche : 18h30 - 22h30</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 w-full sm:w-auto">
                Réservez votre table
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                <p>Carte interactive</p>
                <p className="text-sm">15 Rue de la République, 76000 Rouen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
