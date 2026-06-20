import { Globe, MessageCircle } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const languages = [
  { lang: 'Bikini Bottom Lingua Franca', level: 'Native', desc: 'Fluent in loud screaming and highly illogical debates' },
  { lang: 'Wumbology', level: 'Expert', desc: 'I wumbo, you wumbo, he/she/me wumbo. The study of Wumbo is first grade!' },
  { lang: 'Dolphin Squeaks & Jellyfish Buzzes', level: 'Conversational (A2)', desc: 'Can accurately mimic the anger of a jellyfish and the mockery of a dolphin' },
]

const strengths = [
  'Top-tier stress tolerance — sleeps soundly under a crushing rock every night',
  'Emotional stability — award-winning ability to do absolutely nothing',
  'Extreme adaptability — falls asleep instantly in any extreme environment',
  'Loyal team collaborator — will go to the ends of the ocean for my best friend',
  'Exceptional digestive system — consume 10 Krabby Patties at 3 AM and digest instantly',
]

export default function Footer() {
  const [ref, visible] = useScrollReveal()
  return (
    <footer ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe size={15} className="text-slate-500 dark:text-cyan-400" />
              <h3 className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-wider">Languages</h3>
            </div>
            <ul className="space-y-3">
              {languages.map((l) => (
                <li key={l.lang}>
                  <span className="text-base font-medium text-slate-800 dark:text-slate-200">{l.lang}</span>
                  <span className="text-base text-slate-600 dark:text-slate-400"> — {l.level}</span>
                  <p className="text-base text-slate-600 dark:text-slate-400">{l.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle size={15} className="text-slate-500 dark:text-cyan-400" />
              <h3 className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-wider">Strengths</h3>
            </div>
            <ul className="space-y-2">
              {strengths.map((s) => (
                <li key={s} className="text-base text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-600/50 dark:bg-cyan-500/50 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <p className="mt-10 text-center font-mono text-xs text-slate-400 dark:text-slate-600">
          &copy; {new Date().getFullYear()} Patrick Star&rsquo;s Resume. Knowledge cannot replace friendship.
        </p>
      </div>
    </footer>
  )
}
