import React from 'react';
import DevImage from '../assets/img/Dev.jpeg';
import DigiMark from '../assets/img/DigiMark.jpeg';
import SEOImage from '../assets/img/SEO.jpeg';
import EquipeImage from '../assets/img/equipe_netera-removebg-preview.png'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-primary to-secondary min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold text-center animate-zoomIn">
          Bienvenue à <span className="text-primary">NetEra DigiNest!</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-center animate-typewriting">
          Laissez-nous transformer vos idées en succès.
        </p>
        <button className="mt-8 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-md hover:bg-red-700 hover:shadow-lg transition-all duration-300">
          Découvrir Nos Services
        </button>
      </div>
      <div className="bg-secondary text-white py-16 px-8 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-primary">Qui sommes-nous ?</h2>
          <p className="text-lg text-justify">
            Chez NetEra DigiNest, nous sommes passionnés par la création de sites web modernes
            et la conception de stratégies marketing digitales novatrices. Notre expertise réside
            dans la fusion de technologie de pointe et de créativité pour offrir des solutions 
            complètes adaptées à vos besoins uniques. Que vous cherchiez à établir une présence en
            ligne impressionnante ou à maximiser l'impact de vos campagnes marketing, nous avons les
            compétences et les outils nécessaires pour faire briller votre marque dans un environnement
            numérique en constante évolution. Avec NetEra DigiNest, transformez vos idées en succès et faites
            passer votre entreprise à un niveau supérieur.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center overflow-hidden">
          <img
            src={EquipeImage}
            alt="NetEra DigiNest"
            className="w-full h-auto max-w-md rounded-lg shadow-lg border-none object-cover animate-fadeIn"
          />
        </div>
      </div>
      <div className="bg-primary py-16 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Nos Services</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
          <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src={DevImage}
              alt="Développement Web"
              className="w-full h-40 object-cover rounded-t-md"
            />
            <h3 className="text-2xl font-bold mt-4 mb-2">Développement Web</h3>
            <p className="text-lg">
              Des sites web élégants et performants adaptés à vos besoins.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src={DigiMark}
              alt="Marketing Digital"
              className="w-full h-40 object-cover rounded-t-md"
            />
            <h3 className="text-2xl font-bold mt-4 mb-2">Marketing Digital</h3>
            <p className="text-lg">
              Stratégies marketing sur mesure pour maximiser votre présence en ligne.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src={SEOImage}
              alt="SEO & Référencement"
              className="w-full h-40 object-cover rounded-t-md"
            />
            <h3 className="text-2xl font-bold mt-4 mb-2">SEO & Référencement</h3>
            <p className="text-lg">
              Améliorez votre visibilité sur les moteurs de recherche avec notre expertise SEO.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-16 px-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Ce que disent nos clients</h2>
        <div className="space-y-8">
          <div className="bg-primary p-6 rounded-lg shadow-lg">
            <p className="text-lg italic">
              "NetEra DigiNest a complètement transformé notre présence en ligne !"
            </p>
            <p className="mt-4 font-semibold text-right">- Client Satisfait</p>
          </div>
          <div className="bg-primary p-6 rounded-lg shadow-lg">
            <p className="text-lg italic">
              "Leur expertise en marketing digital est incroyable. Hautement recommandé."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-secondary to-primary py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Prêt à propulser votre marque ?
        </h2>
        <button className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-md hover:bg-red-700 hover:shadow-lg transition-all duration-300">
          Contactez-nous dès maintenant
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
