import { Shield, Crosshair, Zap, Wrench } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const categories = [
  {
    icon: Shield,
    label: 'Survival Skills',
    items: ['Extreme lying flat', 'Advanced spacing out', 'Rock-bottom adaptation', 'Flawless camouflage'],
  },
  {
    icon: Crosshair,
    label: 'Physical Weapons',
    items: ['"Ol\' Reliable" jellyfish net', 'Half-eaten Krabby Patties', 'Random handfuls of sand'],
  },
  {
    icon: Zap,
    label: 'Special Abilities',
    items: ['Belly drumming', 'Infinite swallowing', 'Clay-like flexibility', 'Overcomplicating simple tasks'],
  },
]

export default function TechStack() {
  const [ref, visible] = useScrollReveal()
  return (
    <section ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Specialties</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">What I Bring to the Table</h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-md bg-slate-200 dark:bg-cyan-500/10 text-slate-600 dark:text-cyan-400">
                  <cat.icon size={16} />
                </div>
                <span className="font-mono text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cat.label}
                </span>
              </div>

              {/* Items */}
              <ul className="flex flex-wrap gap-1.5 mt-auto">
                {cat.items.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-sm px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-300 dark:group-hover:bg-slate-800/80 transition-colors"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
