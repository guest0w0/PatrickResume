import { Image, Home, BookOpen, Sparkles } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const projects = [
  {
    title: 'Art Masterpiece: "The Inner Machinations of My Mind Are an Enigma"',
    tag: 'Performance Art · 2025',
    description:
      'A profound 3-hour performance art piece utilizing a spilled carton of milk, sparking widespread debate in the Bikini Bottom art community about emptiness and existence.',
    highlights: [
      { icon: Image, text: 'Spilled milk as artistic medium' },
      { icon: Sparkles, text: 'Critically debated by local art community' },
      { icon: BookOpen, text: 'Themes: emptiness and existence' },
    ],
    techStack: ['Milk', 'Creative vision', 'Profound patience'],
    size: 'sm',
  },
  {
    title: 'Eco-Friendly Sand Interior Design',
    tag: 'Architecture · 2025',
    description:
      'Independently designed and implemented a complete set of furniture under a rock. Handcrafted a sofa, TV, and refrigerator using 100% natural ocean sand.',
    highlights: [
      { icon: Home, text: 'Handcrafted sofa from natural sand' },
      { icon: Home, text: 'Functional sand TV and refrigerator' },
      { icon: Sparkles, text: 'Perfectly embodies minimalist environmentalism' },
    ],
    techStack: ['Sand', 'Rock', 'SpongeBob approval'],
    size: 'sm',
  },
]

const personalProjects = [
  { title: 'Action Guide: "How to Ruin Everything in One Second"', tech: '105 Proven Techniques', desc: 'Personally planned and tested field guide documenting 105 effective ways to annoy Squidward. Classified as highly confidential underwater material.' },
]

export default function Projects() {
  const [ref, visible] = useScrollReveal()
  return (
    <section ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Selected Works</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map((proj, i) => {
            const isLg = proj.size === 'lg'
            return (
              <div
                key={i}
                className={`group rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300 flex flex-col ${
                  isLg ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <span className="inline-block mt-1.5 font-mono text-xs text-slate-600 dark:text-cyan-400 bg-slate-200 dark:bg-cyan-500/10 border border-slate-300 dark:border-cyan-500/20 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                    {proj.tag}
                  </span>
                </div>

                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{proj.description}</p>

                {/* Highlights */}
                <ul className={`space-y-3 mb-6 flex-1 ${isLg ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3' : ''}`}>
                  {proj.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      <div className="mt-0.5 shrink-0">
                        <h.icon size={14} className="text-slate-400 dark:text-cyan-500/60" />
                      </div>
                      <span>{h.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-300 dark:border-slate-800">
                  {proj.techStack.map((t) => (
                    <span key={t} className="font-mono text-xs px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-800/70 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Personal Projects Card */}
          <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Personal Project</h3>
              <span className="inline-block mt-1.5 font-mono text-xs text-slate-600 dark:text-cyan-400 bg-slate-200 dark:bg-cyan-500/10 border border-slate-300 dark:border-cyan-500/20 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                Classified
              </span>
            </div>
            <ul className="space-y-4">
              {personalProjects.map((a, i) => (
                <li key={i} className="group/item">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors">
                      {a.title}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-slate-500 dark:text-cyan-500/70 mb-0.5">{a.tech}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-500">{a.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
