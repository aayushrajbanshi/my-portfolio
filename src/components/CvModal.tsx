import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, Printer, X } from 'lucide-react'
import { profile } from '../data/site'

export default function CvModal({ onClose }: { onClose: () => void }) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  const print = () => {
    const win = frameRef.current?.contentWindow
    if (win) { win.focus(); win.print() }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-3 backdrop-blur-sm sm:p-6">
      <motion.div role="dialog" aria-modal="true" aria-label="Resume preview" onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="glass flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden !bg-[#0b1020] p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="label">Resume</p>
          <div className="flex items-center gap-2">
            <a href={profile.resume} download aria-label="Download CV" className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-white/[0.03] hover:bg-white/[0.08]"><Download size={18} /></a>
            <button type="button" onClick={print} aria-label="Print CV" className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-white/[0.03] hover:bg-white/[0.08]"><Printer size={18} /></button>
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-white/[0.03] hover:bg-white/[0.08]"><X size={18} /></button>
          </div>
        </div>
        <iframe ref={frameRef} src={profile.resume} title="Resume" className="min-h-0 flex-1 rounded-xl border border-[var(--line)] bg-white" />
      </motion.div>
    </motion.div>
  )
}
