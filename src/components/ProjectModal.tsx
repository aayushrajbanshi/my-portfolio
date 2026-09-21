import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import Preview from './Preview'
import type { Project } from '../data/site'

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-3 backdrop-blur-sm sm:p-6">
      <motion.div role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="glass relative max-h-[90vh] w-full max-w-3xl overflow-y-auto !bg-[#0b1020] p-5 sm:p-7">
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project details" className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-black/40"><X size={18} /></button>
        <Preview hue={project.hue} large />
        <p className="label mt-6">{project.type}</p>
        <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{project.title}</h3>
        <p className="mt-3 text-[var(--muted)]">{project.desc}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div><h4 className="label mb-2">Features</h4><ul className="list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">{project.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
          <div><h4 className="label mb-2">Challenges</h4><ul className="list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">{project.challenges.map((f) => <li key={f}>{f}</li>)}</ul></div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost"><Github size={16} /> GitHub</a>
          <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary"><ExternalLink size={16} /> Live Demo</a>
        </div>
      </motion.div>
    </motion.div>
  )
}
