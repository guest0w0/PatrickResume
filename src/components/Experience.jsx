import { Calendar, ExternalLink } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const experiences = [
  {
    role: 'Telephone Operator / Hat Wearing Specialist',
    company: 'The Krusty Krab',
    url: 'https://krustykrab.fandom.com/wiki/Krusty_Krab',
    period: 'Oct 2024 – Feb 2025',
    description: 'Answered 500+ customer calls with a highly recognizable voice, successfully correcting customers who used the wrong name.',
  },
  {
    role: 'Senior Destructive Consultant / Taste Tester',
    company: 'The Chum Bucket',
    url: 'https://spongebob.fandom.com/wiki/Chum_Bucket',
    period: 'Nov 2025',
    description: 'Led internal brainstorming sessions proposing 15 highly destructive "bad ideas" that were fully adopted. Bravely taste-tested concentrated Chum and survived.',
  },
  {
    role: 'Professional Jellyfishing Partner',
    company: 'Bikini Bottom Jellyfish Fields',
    url: 'https://spongebob.fandom.com/wiki/Jellyfish_Fields',
    period: 'Oct 2022 – Sep 2024',
    description: 'Executed over 2,000 high-difficulty catch-and-release jellyfish missions alongside Chief Partner SpongeBob.',
  },
]

export default function Experience() {
  const [ref, visible] = useScrollReveal()
  return (
    <section ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="experience">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Where I've Worked</h2>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group rounded-xl border border-transparent hover:border-cyan-400/20 dark:hover:border-cyan-500/10 hover:bg-slate-50 dark:hover:bg-slate-900/30 px-5 py-4 transition-all duration-300"
            >
              <div className="flex items-center gap-2 font-mono text-sm text-slate-500 dark:text-cyan-500/60 sm:w-48 mb-2 sm:mb-1">
                <Calendar size={13} />
                {exp.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-base text-slate-500 dark:text-slate-300/60 font-mono mb-1">
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      {exp.company}<ExternalLink size={12} className="opacity-60" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
