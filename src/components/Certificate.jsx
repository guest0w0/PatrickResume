import { Search } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const certs = [
  { src: 'fyp1.png', label: 'Certificate 1' },
  { src: 'fyp2.png', label: 'Certificate 2' },
  { src: 'fyp3.png', label: 'Certificate 3' },
]

const base = import.meta.env.BASE_URL

export default function Certificate() {
  const [ref, visible] = useScrollReveal()
  return (
    <section ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="certificate">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Certificate</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certs.map((cert) => (
            <a
              key={cert.src}
              href={`${base}${cert.src}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300"
            >
              {/* Thumbnail with overlay */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={`${base}${cert.src}`}
                  alt={cert.label}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
                </div>
              </div>

              {/* Label */}
              <div className="px-4 py-3">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.label}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
