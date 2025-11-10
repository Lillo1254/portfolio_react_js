import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Section4({ style, isDesktop }) {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: null, message: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSending) return
    setIsSending(true)
    setStatus({ type: null, message: "" })

    try {
      // Configure your EmailJS IDs via Vite env variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS non configurato: verifica le variabili .env")
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })
      setStatus({ type: "success", message: "Messaggio inviato! Ti risponderò a breve." })
      formRef.current?.reset()
    } catch (err) {
      setStatus({ type: "error", message: "Invio fallito. Riprova tra poco." })
      console.error(err)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <div
        id="contact"
        className={`${
          isDesktop
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : "relative mx-auto"
        } w-[92vw] max-w-2xl px-4 sm:px-6`}
        style={isDesktop ? style : undefined}
      >
        <div className="backdrop-blur-xl bg-gray-900/40 border border-gray-700 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.15)] p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2 bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]">Contattami</h2>
          <p className="text-gray-300 text-center mb-6">Scrivimi: backbacklazio@gmail.com</p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Nome</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-transparent border border-gray-700/70 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 shadow-[inset_0_0_0_999px_rgba(0,0,0,0)]"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-transparent border border-gray-700/70 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 shadow-[inset_0_0_0_999px_rgba(0,0,0,0)]"
                  placeholder="tua@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Oggetto</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full bg-transparent border border-gray-700/70 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 shadow-[inset_0_0_0_999px_rgba(0,0,0,0)]"
                placeholder="Come posso aiutarti?"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Messaggio</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-transparent border border-gray-700/70 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 shadow-[inset_0_0_0_999px_rgba(0,0,0,0)]"
                placeholder="Scrivi il tuo messaggio..."
              />
            </div>

            {status.type && (
              <div
                className={
                  status.type === "success"
                    ? "text-green-400 text-sm"
                    : "text-red-400 text-sm"
                }
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors shadow-[0_8px_24px_rgba(34,211,238,0.25)]"
            >
              {isSending ? "Invio..." : "Invia messaggio"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}