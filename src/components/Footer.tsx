import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { nav, profile } from '../data/site'

export default function Footer() {
  const socials = [{ i: Github, l: 'GitHub', h: profile.github }, { i: Linkedin, l: 'LinkedIn', h: profile.linkedin }, { i: Mail, l: 'Email', h: `mailto:${profile.email}` }]
  return (
    <footer className="relative mt-8">
      <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-[var(--violet)] to-transparent shadow-[0_0_18px_rgba(124,92,255,0.8)]" />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
        <div>
          <a href="#home" className="text-lg font-extrabold">{profile.short}<span className="text-[var(--violet)]">.</span></a>
          <p className="mt-2 max-w-xs text-sm text-[var(--muted)]">Designing and building polished digital experiences.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="py-1 hover:text-white">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          {socials.map(({ i: Icon, l, h }) => <a key={l} href={h} aria-label={l} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="btn btn-ghost !min-h-11 !w-11 !p-0"><Icon size={16} /></a>)}
          <a href="#home" aria-label="Back to top" className="btn btn-primary !min-h-11 !w-11 !p-0"><ArrowUp size={16} /></a>
        </div>
      </div>
      <p className="border-t border-[var(--line)] px-5 py-5 text-center text-xs text-[var(--muted)]">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
