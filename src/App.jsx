import ThemeProvider from './ThemeProvider'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificate from './components/Certificate'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Experience />
        <Certificate />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
