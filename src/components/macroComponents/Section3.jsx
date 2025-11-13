import { useEffect, useState } from "react"
import { fetchLatestPublicRepos } from "../../function/scriptBasic"

export default function Section3({ style, isDesktop }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      try {
        const data = await fetchLatestPublicRepos("lillo1254", 4)
        if (isMounted) setRepos(data)
      } catch (e) {
        if (isMounted) setError("Impossibile caricare i progetti.")
      } finally {
        if (isMounted) setLoading(false)
      }
    })()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <div
        className={`${
          isDesktop
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : "relative mx-auto"
        } w-[92vw] max-w-6xl px-4 sm:px-6`}
        style={isDesktop ? style : undefined}
      >
        <div className="backdrop-blur-xl bg-gray-900/40 border border-gray-700 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.15)] p-6 sm:p-8">
          <h2 className="p-3 text-xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]">Ultimi progetti GitHub</h2>

          {loading && (
            <p className="text-gray-300 text-center">Caricamento in corso...</p>
          )}
          {error && (
            <p className="text-red-400 text-center">{error}</p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="backdrop-blur-xl bg-gray-900/35 border border-gray-700/70 rounded-xl p-4 flex flex-col shadow-xl ring-1 ring-cyan-500/10 hover:ring-cyan-400/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-cyan-300 mb-1 break-words">{repo.name}</h3>
                  <p className="text-sm text-gray-300 flex-1">
                    {repo.description || "Nessuna descrizione."}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                    <span>{repo.language || "N/A"}</span>
                    <span>★ {repo.stars}</span>
                  </div>
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-center bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 rounded-lg shadow-[0_8px_24px_rgba(34,211,238,0.25)]"
                  >
                    Apri su GitHub
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}