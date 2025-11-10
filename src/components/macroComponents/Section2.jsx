import { useState } from "react";
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/javascript.png";
import phpLogo from "../../assets/php.png";
import mysqlLogo from "../../assets/mysql.jpg";
import laravelLogo from "../../assets/laravel.png";
import nextLogo from "../../assets/nextjs.jpg";
import reactLogo from "../../assets/react.svg";

export default function Section2({ style, isDesktop }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const cards = [
    {
      title: "Frontend Essentials",
      badge: "UI Dev",
      icons: [htmlLogo, cssLogo, jsLogo],
      description:
        "HTML, CSS e JavaScript come base solida per costruire interfacce accessibili, responsive e dinamiche.",
      gradient:
        "bg-linear-to-br from-orange-500/40 via-sky-400/10 to-transparent",
      ring: "ring-orange-300/40",
      shadow: "shadow-[0_0_36px_rgba(251,191,36,0.35)]",
      focus: "Struttura, stile, interazione",
    },
    {
      title: "Full-Stack Toolkit",
      badge: "Backend & Data",
      icons: [phpLogo, mysqlLogo, laravelLogo, nextLogo],
      description:
        "PHP, MySQL, Laravel e Next.js lavorano insieme per API robuste, gestione dati e rendering server-side performante.",
      gradient:
        "bg-linear-to-br from-violet-500/40 via-rose-400/10 to-transparent",
      ring: "ring-violet-300/40",
      shadow: "shadow-[0_0_36px_rgba(192,132,252,0.35)]",
      focus: "Backend moderno, integrazione front/back",
    },
    {
      title: "React Power",
      badge: "SPA & UI",
      icons: [reactLogo],
      description:
        "React mi permette di creare Single Page Application fluide, component-driven, ottimizzate per performance e SEO.",
      gradient:
        "bg-linear-to-br from-cyan-500/40 via-blue-400/10 to-transparent",
      ring: "ring-cyan-300/40",
      shadow: "shadow-[0_0_36px_rgba(34,211,238,0.4)]",
      focus: "Componenti riutilizzabili, ecosystem",
    },
  ];

  return (
    <section
      className={`relative w-full text-white overflow-hidden ${
        isDesktop ? "h-screen" : "py-16"
      }`}
    >
      <div
        className={`w-full max-w-7xl ${
          isDesktop
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6"
            : "relative mx-auto px-4 sm:px-6"
        } flex flex-col justify-center items-center`}
        style={isDesktop ? style : undefined}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]">
          Tecnologie & Linguaggi
        </h1>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full max-w-6xl mx-auto place-items-center overflow-hidden"
          style={isDesktop ? { maxHeight: "90vh" } : undefined}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleFlip(index)}
              className="w-full max-w-[260px] h-60 sm:max-w-[260px] sm:h-[260px] lg:max-w-[280px] lg:h-[280px] perspective flex justify-center items-center cursor-pointer py-6"
            >
              <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* --- Fronte --- */}
                <div
                  className={`absolute inset-0 backdrop-blur-xl bg-gray-900/35 rounded-2xl flex flex-col justify-center items-center backface-hidden border border-gray-700/60 ring-1 transition-all duration-300 ${card.ring} ${card.shadow}`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-70 ${card.gradient}`}
                  />
                  <div className="relative w-full px-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] uppercase tracking-[0.35em] text-gray-300/70">
                        Tech
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-gray-100 border border-white/10">
                        {card.badge}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`flex items-center justify-center gap-2 sm:gap-3 mb-3 ${
                          card.icons.length > 1 ? "flex-wrap" : ""
                        }`}
                      >
                        {card.icons.map((iconSrc, iconIndex) => (
                          <img
                            key={`${card.title}-${iconIndex}`}
                            src={iconSrc}
                            alt={`${card.title} icon ${iconIndex + 1}`}
                            className={`drop-shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-transform duration-300 ${
                              card.icons.length === 1
                                ? "w-16 h-16 sm:w-20 sm:h-20"
                                : "w-10 h-10 sm:w-12 sm:h-12"
                            }`}
                          />
                        ))}
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* --- Retro --- */}
                <div className="absolute inset-0 bg-gray-950/85 rounded-2xl flex flex-col justify-center items-center rotate-y-180 backface-hidden shadow-xl border border-gray-800/80 p-4">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-cyan-300/70">
                    {card.focus}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
