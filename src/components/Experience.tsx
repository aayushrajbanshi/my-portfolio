import { motion } from 'framer-motion'
import Section, { reveal } from './Section'
import { timeline } from '../data/site'

export default function Experience() {
  return (
    <Section id="experience" label="My path so far" title="Journey Timeline" sub="Education, teaching and the projects that shaped my work.">
      <ol className="relative mx-auto max-w-3xl pl-10">
        <motion.span aria-hidden="true" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-[var(--violet)] via-[var(--indigo)] to-transparent" />
        {timeline.map((m, i) => (
          <motion.li key={m.title} {...reveal(i)} className="relative pb-6 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[37px] top-6 h-3 w-3 rounded-full bg-[var(--violet)] shadow-[0_0_0_4px_rgba(124,92,255,0.2),0_0_18px_rgba(124,92,255,0.9)]" />
            <div className="glass p-5">
              <p className="label">{m.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
              <p className="text-sm font-medium text-cyan-300">{m.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{m.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">{m.tags.map((t) => <span key={t} className="chip !min-h-7 !text-[11px]">{t}</span>)}</div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
