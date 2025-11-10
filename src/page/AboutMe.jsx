import { useState } from "react";
import { useNavigate } from "react-router";
import cv from "../assets/cv1011.pdf";

export default function AboutMe() {
  const cards = [
    {
      id: 1,
      front: "Inizio e Passione",
      back: `Mi chiamo Alessandro, sono nato a Roma il 22 gennaio 1994 e la mia
      passione per la programmazione è nata nel 2014, quando ho intrapreso
      il percorso universitario in Informatica presso l’Università di Roma
      Tor Vergata. Anche se non ho potuto completare gli studi, ho continuato
      a coltivare la curiosità verso il mondo dello sviluppo web.`,
    },
    {
      id: 2,
      front: "Formazione Specialistica",
      back: `Dopo dieci anni ho deciso di trasformare la passione in una professione,
      frequentando un corso Full Stack Web Developer presso Aulab Srl e un
      corso avanzato Formatemp su Figma e WordPress, per ampliare le mie
      competenze in UI/UX design.`,
    },
    {
      id: 3,
      front: "Focus e Tecnologie",
      back: `Prediligo la creazione di interfacce moderne, veloci e scalabili
      utilizzando React.js e Next.js, sfruttando SSR e Client Side Routing per
      ottimizzare SEO, prestazioni e tempi di caricamento.`,
    },
    {
      id: 4,
      front: "Approccio e Filosofia",
      back: `Non mi definisco un “guru”, ma un professionista curioso, determinato
      e desideroso di imparare. Credo nel valore della collaborazione e della
      crescita continua nello sviluppo web.`,
    },
  ];

  const navigate = useNavigate();
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="relative lg:max-h-screen sm:min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-linear-to-t from-cyan-900/10 via-transparent to-emerald-700/5 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

      <h1 className="text-4xl md:text-5xl font-black text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-cyan-600 via-blue-600 to-emerald-400 drop-shadow-[0_0_40px_rgba(45,212,191,0.35)]">
        Chi sono
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full justify-items-center">
        {cards.map((card) => {
          // Calcolo del colore per ogni card
          const textColor =
            card.id % 2 === 0
              ? "from-cyan-600 via-blue-600 to-emerald-400"
              : "from-emerald-400 via-blue-600 to-cyan-600";

          return (
            <div
              key={card.id}
              className="group w-72 h-72 perspective-[1000px]"
              onClick={() => handleFlip(card.id)}
            >
              <div
                className={`relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flipped[card.id] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(45,212,191,0.25)] backface-hidden">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 via-blue-600 to-emerald-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.35)]">
                    {card.front}
                  </h3>
                  <p className="text-xs text-cyan-200/70 mt-2">
                    Clicca per scoprire di più
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex items-center justify-center p-5 rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xxl shadow-[0_0_40px_rgba(45,212,191,0.3)] rotate-y-180 backface-hidden">
                  <p
                    className={`text-sm leading-relaxed bg-clip-text text-transparent bg-linear-to-r ${textColor} drop-shadow-[0_0_20px_rgba(45,212,191,0.35)] text-justify transition-transform duration-2000 ease-in ${
                      flipped[card.id] ? "scale-100" : "scale-0"
                    }`}
                  >
                    {card.back}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-cyan-200/50 mt-12">
        Clicca sulle card per scoprire di più
      </p>
      <button
        className="mt-4 inline-block text-center bg-cyan-600 hover:bg-cyan-500 text-white font-medium p-2 rounded-lg shadow-[0_8px_24px_rgba(34,211,238,0.25)]"
        onClick={handleBack}
      >
        torna indietro
      </button>
      <a href={cv} download="alessandro_lucia_cv.pdf" className="mt-3 bg-clip-text text-transparent bg-linear-to-r from-cyan-600 via-blue-600 to-emerald-400">scarica pdf CV</a>
    </section>
  );
}
