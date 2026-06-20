import { MapPin, Mail, Phone, ExternalLink, Star } from 'lucide-react'

function ContactItem({ href, icon: Icon, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
    >
      <Icon size={14} /> {label}<ExternalLink size={12} className="opacity-60" />
    </a>
  )
}

function PlainItem({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Icon size={14} /> {children}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="flex flex-col justify-center px-4 pt-16 pb-8">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

        {/* Left: Avatar */}
        <div className="shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}hero.png`}
            alt="Patrick Star"
            className="w-36 md:w-48 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>

        {/* Right: Name + Info */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
            Patrick Star
          </h1>

          {/* Tagline */}
          <blockquote className="text-base md:text-lg text-slate-500 dark:text-slate-400 italic border-l-2 border-cyan-400/50 dark:border-cyan-500/30 pl-4 mb-5 leading-relaxed max-w-xl">
            &ldquo;Knowledge cannot replace friendship, but I happen to have friends and a degree in Wumbology!&rdquo;
          </blockquote>

          {/* About */}
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-5 max-w-xl text-justify">
            A senior idler and philosopher from Bikini Bottom. I possess extensive experience in staring into space, eating, and jellyfishing. Although the inner machinations of my mind are an enigma, I am incredibly passionate about life (mostly food). I excel at remaining remarkably calm in the most chaotic situations, making me the perfect candidate for any team needing a mascot, taste tester, or professional vibe-checker.
          </p>

          {/* Contact */}
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-base font-mono text-slate-600 dark:text-slate-500">
            <ContactItem href="https://www.instagram.com/real_patrick_star_120/" icon={Star} label="real_patrick_star_120" />
            <a href="mailto:patrick.wumbo.master@bikinibottom.net" className="inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Mail size={14} /> patrick.wumbo.master@bikinibottom.net
            </a>
            <PlainItem icon={Phone}>+60 14-888 9999</PlainItem>
            <PlainItem icon={MapPin}>120 Conch Street, Bikini Bottom</PlainItem>
          </div>
        </div>

      </div>
    </section>
  )
}
