import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay: i * 0.06 },
})

interface Props { id: string; label: string; title: string; sub?: string; children: ReactNode }

export default function Section({ id, label, title, sub, children }: Props) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.header {...reveal()} className="mb-10 text-center">
        <p className="label">{label}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {sub && <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)] sm:text-base">{sub}</p>}
      </motion.header>
      {children}
    </section>
  )
}
