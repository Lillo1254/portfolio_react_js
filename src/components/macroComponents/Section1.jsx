import { Link } from "react-router";
import img from "../../assets/react.svg";

export default function Section1({ style, isDesktop }) {

  const handleCLick = () => {
    scrollTo({ top: 9000, behavior: "smooth" });
  }
  return (
    <section className={`relative w-full text-white overflow-hidden ${isDesktop ? "min-h-screen" : "pb-16"}`}>
      <div className="pointer-events-none fixed inset-0 bg-linear-to-b from-transparent via-cyan-900/15 to-transparent" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 right-4 w-[360px] h-[360px] rounded-full bg-purple-500/10 blur-3xl" />

      <div
        className={`w-full max-w-5xl ${
          isDesktop
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 lg:px-10"
            : "relative mx-auto px-5 sm:px-6"
        }`}
        style={isDesktop ? style : undefined}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 ${
            isDesktop ? "items-center" : "items-start"
          }`}
        >
          <div className="text-center lg:text-left space-y-4">
            <Link to={"about-me"}><span className="inline-flex items-center justify-center lg:justify-start gap-2 px-5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-sm uppercase tracking-[0.15em] text-white">
              Crafted by <span className="font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-300  ">Alessandro Lucia</span>
            </span></Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.25rem] xl:text-[3.4rem] font-black tracking-tight leading-tight">
              <span className="block bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)]">
                Creo esperienze digitali
              </span>
              <span className="block bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] mt-1">che raccontano il tuo brand.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0">
              Full Stack Developer con focus sul frontend, unisco design emozionale, codice pulito e strategia
              prodotto per trasformare idee in prodotti web magnetici e performanti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl w-full sm:w-auto">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 grid place-items-center">
                  <span className="ext-sm font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-700">UI</span>
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-700">Design • Animazioni • Accessibilità</h3>
                  <p className="text-xs text-white">React, Tailwind, Motion</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl w-full sm:w-auto">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 grid place-items-center">
                  <span className="text-sm font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-700">API</span>
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-700">Architetture scalabili</h3>
                  <p className="text-xs text-white">Laravel, Next.js, MySQL</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <button
                onClick={handleCLick}
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors shadow-[0_10px_30px_rgba(34,211,238,0.35)]"
              >
                Parliamo del tuo progetto
              </button>
<Link to={"about-me"}>
              <div className="flex items-center gap-3 text-black text-sm bg-cyan-500 border border-white/10 rounded-2xl backdrop-blur-xl p-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse"></span>
                Disponibile per collaborazioni, <strong className="font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-700">mi racconto un po...</strong>
              </div>
</Link>
            </div>
          </div>

          <div className={`relative flex justify-center ${isDesktop ? "mt-0" : "mt-10"}`}>
  <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

  <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-72 lg:h-72 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.3)] flex items-center justify-center">
    <img
      src={img}
      alt="React Logo"
      className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 animate-[spin_12s_linear_infinite]"
    />
  </div>

  <div
    className="
      absolute 
      -bottom-12 
      left-1/2 
      transform 
      -translate-x-1/2 
      sm:left-auto sm:right-12 sm:translate-x-0
      px-4 py-3 
      rounded-2xl 
      bg-white/5 
      border border-white/10 
      backdrop-blur-xl 
      shadow-lg 
      text-left 
      max-w-[220px]
    "
  >
    <p className="text-[10px] uppercase tracking-[0.32em] text-cyan-200/70">Stack</p>
    <p className="text-sm font-bold bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.35)] bg-linear-to-r from-cyan-700 via-blue-700 to-emerald-700">React • Tailwind • Laravel • Next.js</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
