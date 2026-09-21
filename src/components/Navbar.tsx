import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-[var(--line)] bg-[rgba(5,8,22,0.72)] backdrop-blur-xl' : 'border-transparent'}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-extrabold tracking-tight">
          {profile.short}<span className="text-[var(--violet)]">.</span>
        </a>

        <nav aria-label="Primary" className="hidden rounded-full border border-[var(--line)] bg-white/[0.03] p-1 md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-colors hover:text-white ${active === n.id ? 'text-white' : 'text-[var(--muted)]'}`}>
              {active === n.id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10 shadow-[0_0_18px_rgba(124,92,255,0.45)]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span className="relative">{n.label}</span>
            </a>
          ))}
        </nav>

        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-white/[0.03] md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-nav" aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--line)] bg-[rgba(5,8,22,0.92)] backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1 p-4">
              {nav.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-base ${active === n.id ? 'bg-white/10 text-white' : 'text-[var(--muted)]'}`}>
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
