import React, { useState, useEffect } from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import partner1 from '../assets/partner/part1.jpeg';
//import partner2 from '../assets/partner/part2.jpeg';
import partner3 from '../assets/partner/part3.jpeg';
import partner4 from '../assets/partner/part4.jpeg';
import partner5 from '../assets/partner/part5.jpeg';
//import partner6 from '../assets/partner/part6.jpeg';
import partner7 from '../assets/partner/part7.jpeg';
import partner8 from '../assets/partner/part8.jpeg';
import partner9 from '../assets/partner/part9.jpeg';
import partner10 from '../assets/partner/part10.jpeg';

const Footer: React.FC = () => {
  // Compte à rebours
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-31T00:00:00');
    const difference = eventDate.getTime() - new Date().getTime();
    let timeLeft = {} as any;

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <footer className="bg-primary text-white py-16 px-8">
      <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Partenaires & Certifications</h2>
        <div className="flex flex-wrap gap-6 justify-center">
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner1} alt="Partner 1" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner3} alt="Partner 3" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner4} alt="Partner 4" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner5} alt="Partner 5" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner7} alt="Partner 7" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner8} alt="Partner 8" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner9} alt="Partner 9" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-md">
            <img src={partner10} alt="Partner 10" className="w-24 h-24 object-contain transition-transform transform hover:scale-105" />
          </div>
        </div>
      </div>
      <br />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Prochain Événement</h2>
          <div className="text-lg">
            <p>Lancement de la nuit de l'info dans :</p>
            <div className="text-4xl font-bold mt-4">
              {timeLeft.jours || '0'}j {timeLeft.heures || '0'}h {timeLeft.minutes || '0'}m {timeLeft.secondes || '0'}s
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <ul className="space-y-2">
            <li>
              <a href="#faq1" className="hover:text-secondary transition-all duration-300">
                Quels services proposez-vous ?
              </a>
            </li>
            <li>
              <a href="#faq2" className="hover:text-secondary transition-all duration-300">
                Comment puis-je obtenir un devis ?
              </a>
            </li>
            <li>
              <a href="#faq3" className="hover:text-secondary transition-all duration-300">
                Quels sont vos délais de livraison ?
              </a>
            </li>
          </ul>
        </div>
        <div>
        <h2 className="text-2xl font-bold mb-4">Contactez-nous rapidement</h2>
        <form className="flex flex-col space-y-4 items-center">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
            <input
            type="text"
            className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Votre nom"
            />
            <input
            type="email"
            className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Votre email"
            />
        </div>
        <button className="w-full md:w-auto px-6 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-red-600 transition-all duration-300 mt-4">
            Envoyer
        </button>
        </form>

        </div>
      </div>
      <div className="bg-secondary text-white py-8 mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à transformer vos idées en succès ?</h2>
        <button className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-red-600 transition-all duration-300">
          Demandez un devis
        </button>
      </div>
      <div className="container mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Nos chiffres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">150+</p>
            <p className="text-lg">Projets réalisés</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-lg">Clients satisfaits</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10</p>
            <p className="text-lg">Années d'expérience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">24/7</p>
            <p className="text-lg">Support</p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-8 mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Notre Engagement RSE</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Nous nous engageons à respecter l'environnement, à soutenir des initiatives locales, et à promouvoir l'inclusion et la diversité dans toutes nos actions.
        </p>
      </div>
      <div className="border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} NetEra DigiNest. Tous droits réservés.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300">
            <FiFacebook className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300">
            <FiInstagram className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration-300">
            <FiLinkedin className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition duration--300">
            <FiTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
