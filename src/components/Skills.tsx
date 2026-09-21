import { useState } from 'react'
import { motion } from 'framer-motion'
import { Database, LayoutDashboard, Palette, Server, Sparkles, Wrench, type LucideIcon } from 'lucide-react'
import Section from './Section'
import { skills, type SkillCat } from '../data/site'

const icons: Record<SkillCat, LucideIcon> = { Design: Palette, Frontend: LayoutDashboard, Backend: Server, Database, Tools: Wrench, AI: Sparkles }
const cats = ['All', 'Design', 'Frontend', 'Backend', 'Database', 'Tools', 'AI'] as const

export default function Skills() {
  const [cat, setCat] = useState<(typeof cats)[number]>('All')
  const list = cat === 'All' ? skills : skills.filter((s) => s.cat === cat)
  return (
    <Section id="skills" label="What I work with" title="Skills & Technologies" sub="Languages, frameworks and tools I learn and use.">
      <div role="group" aria-label="Filter skills" className="mb-8 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
            className={`chip min-h-10 cursor-pointer px-4 text-sm transition-colors ${cat === c ? '!border-[var(--violet)] !bg-[var(--violet)]/20 !text-white' : 'hover:text-white'}`}>{c}</button>
        ))}
      </div>
      <motion.ul key={cat} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((s) => {
          const Icon = icons[s.cat]
          return (
            <motion.li key={s.name} whileHover={{ y: -5 }} className="glass group p-4 hover:bg-white/[0.04]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--indigo)]/15 text-[var(--indigo)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"><Icon size={18} /></span>
              <h3 className="mt-3 text-sm font-semibold">{s.name}</h3>
              <p className="mt-0.5 text-xs text-[var(--muted)]">{s.desc}</p>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10" role="img" aria-label={`Skill level ${s.level} percent`}>
                <div className="h-full rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--blue)]" style={{ width: `${s.level}%` }} />
              </div>
            </motion.li>
          )
        })}
      </motion.ul>
    </Section>
  )
}
