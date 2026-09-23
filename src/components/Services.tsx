import { motion } from 'framer-motion'
import { Code2, Gauge, LayoutDashboard, Palette, Smartphone, Sparkles, type LucideIcon } from 'lucide-react'
import Section, { reveal } from './Section'
import { services } from '../data/site'

const icons: Record<string, LucideIcon> = { Palette, Code2, LayoutDashboard, Smartphone, Sparkles, Gauge }

export default function Services() {
  if (!services?.length) return null
  return (
    <Section id="services" label="How I can help" title="Services" sub="From print-ready designs to full web and AI-powered products.">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Sparkles
          return (
            <motion.li key={s.title} {...reveal(i % 3)} whileHover={{ y: -6 }} className="glass group p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--violet)]/15 text-[var(--violet)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"><Icon size={20} /></span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.desc}</p>
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
