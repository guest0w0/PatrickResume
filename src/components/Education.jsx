import { GraduationCap, Award } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const education = [
  {
    school: 'Bikini Bottom Community College',
    qualification: 'Bachelor of Wumbology',
    result: 'CGPA: 4.0000 (Ate half the transcript, drew a perfect score on the rest with a pink crayon)',
  },
  {
    school: "Mrs. Puff's Boating School",
    qualification: 'Safe Driving and Boat Operation (Special Certificate)',
    result: 'CGPA: 0.0001 (Forcibly graduated for attempting to eat the steering wheel)',
  },
  {
    school: 'Bikini Bottom Spacing Out Association',
    qualification: 'Supreme Honor in the "Doing Nothing" Championship',
    result: 'Two-time defending champion (Defeated SpongeBob for a solid gold trophy)',
  },
]

export default function Education() {
  const [ref, visible] = useScrollReveal()
  return (
    <section ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="education">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Academic Background</h2>
        </div>

        <div className="space-y-1">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group rounded-xl border border-transparent hover:border-cyan-400/20 dark:hover:border-cyan-500/10 hover:bg-slate-50 dark:hover:bg-slate-900/30 px-5 py-4 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {edu.qualification.includes('Championship') ? (
                    <Award size={15} className="text-slate-500 dark:text-cyan-400" />
                  ) : (
                    <GraduationCap size={15} className="text-slate-500 dark:text-cyan-400" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {edu.qualification}
                  </h3>
                  <p className="font-mono text-base text-slate-500 dark:text-cyan-500/70 mt-0.5">{edu.result}</p>
                  <p className="font-mono text-base text-slate-600 dark:text-slate-400 mt-0.5">{edu.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
