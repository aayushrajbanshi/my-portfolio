import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section, { reveal } from './Section'
import Preview from './Preview'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../data/site'

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null)
  const close = useCallback(() => setSel(null), [])
  return (
    <Section id="projects" label="Selected work" title="Projects" sub="A few things I’ve designed and built. Click a card for details.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.li key={p.id} {...reveal(i % 3)} style={{ perspective: 800 }}>
            <motion.button type="button" onClick={() => setSel(p)} whileHover={{ y: -6, rotateX: 2 }} aria-label={`Open details for ${p.title}`}
              className="glass block h-full w-full cursor-pointer p-4 text-left">
              <Preview hue={p.hue} />
              <div className="mt-4 flex items-start justify-between gap-2">
                <div><p className="label">{p.type}</p><h3 className="mt-1 text-lg font-semibold">{p.title}</h3></div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-[var(--muted)]" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <span key={t} className="chip !min-h-7 !text-[11px]">{t}</span>)}</div>
            </motion.button>
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>{sel && <ProjectModal project={sel} onClose={close} />}</AnimatePresence>
    </Section>
  )
}
