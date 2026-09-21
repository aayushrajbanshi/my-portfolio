import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/site'

/** Swinging lanyard ID badge — drag it sideways and it springs back. */
export default function Lanyard() {
  const still = useReducedMotion()
  return (
    <div className="relative mx-auto flex h-[400px] w-[230px] justify-center sm:h-[500px] sm:w-[270px]" aria-hidden="true">
      <motion.div
        style={{ transformOrigin: '50% 0' }}
        animate={still ? undefined : { rotate: [3.5, -3.5, 3.5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        drag="x" dragConstraints={{ left: -30, right: 30 }} dragElastic={0.4} dragSnapToOrigin
        className="flex cursor-grab flex-col items-center active:cursor-grabbing"
      >
        <div className="-mt-48 flex h-64 w-8 shrink-0 items-center justify-center overflow-hidden border-x border-white/10 bg-[#080a14]">
          <span className="whitespace-nowrap text-[9px] font-bold tracking-[0.35em] text-white/55 [writing-mode:vertical-rl]">{'AAYUSH • DESIGN • '.repeat(6)}</span>
        </div>
        <div className="h-5 w-7 rounded-sm bg-gradient-to-b from-slate-200 to-slate-500" />
        <div className="w-52 rounded-2xl border border-white/15 p-4 shadow-[0_24px_60px_-16px_rgba(91,108,255,0.7)] sm:w-56"
          style={{ background: 'linear-gradient(160deg, #1b2454, #0b1030 60%, #14104a)' }}>
          <div className="mb-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
            <span>Creative ID</span><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="grid aspect-[4/4.4] place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#7c5cff] via-[#5b6cff] to-[#38bdf8]">
            {profile.photo
              ? <img src={profile.photo} alt="" loading="lazy" className="h-full w-full object-cover" />
              : <span className="text-5xl font-extrabold tracking-tight text-white/95">{profile.initials}</span>}
          </div>
          <p className="mt-3 text-base font-bold leading-tight">{profile.name}</p>
          <p className="text-[11px] text-cyan-300">{profile.role}</p>
          <div className="mt-3 flex h-6 items-end gap-[2px] opacity-60">
            {Array.from({ length: 36 }, (_, i) => <span key={i} className="w-full bg-white" style={{ height: `${40 + ((i * 37) % 60)}%` }} />)}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
