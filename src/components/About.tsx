import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { Target, Sparkles, Palette } from 'lucide-react'
import Section, { reveal } from './Section'
import { about, profile, stats } from '../data/site'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

const blocks = [
  { icon: Palette, title: 'What I do', text: about.what },
  { icon: Sparkles, title: 'Currently learning', text: about.learning },
  { icon: Target, title: 'Career goals', text: about.goals },
]

export default function About() {
  return (
    <Section id="about" label="Get to know me" title="About Me" sub={about.intro}>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div {...reveal()} className="glass self-start overflow-hidden p-5">
          <div className="grid aspect-square place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#7c5cff]/40 via-[#5b6cff]/25 to-[#38bdf8]/30">
            {profile.photo
              ? <img src={profile.photo} alt={`Portrait of ${profile.name}`} loading="lazy" className="h-full w-full object-cover object-top" />
              : <span className="text-6xl font-extrabold text-white/90">{profile.initials}</span>}
          </div>
        </motion.div>
        <div className="grid gap-3">
          {blocks.map((b, i) => (
            <motion.div key={b.title} {...reveal(i)} className="glass flex gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--violet)]/15 text-[var(--violet)]"><b.icon size={18} /></span>
              <div><h3 className="font-semibold">{b.title}</h3><p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{b.text}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...reveal(i)} className="glass p-5 text-center">
            <p className="grad text-3xl font-extrabold sm:text-4xl"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="label mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
