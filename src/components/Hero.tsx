import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, FileText, Mail } from 'lucide-react'
import Lanyard from './Lanyard'
import CvModal from './CvModal'
import { profile } from '../data/site'

const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false)
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-4 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.09, delayChildren: 0.15 }} className="text-center lg:text-left">
          <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-emerald-300">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
            AVAILABLE FOR WORK
          </motion.span>
          <motion.h1 variants={item} className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="grad">{profile.name}</span>
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-lg font-semibold text-cyan-300 sm:text-xl">{profile.role}</motion.p>
          <motion.p variants={item} className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] lg:mx-0">
            I design social media posters, wedding cards and ID cards — and build websites, web and mobile applications, AI-powered tools and modern digital experiences.
          </motion.p>
          <motion.div variants={item} className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#projects" className="btn btn-primary group">View My Work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
            <a href="#contact" className="btn btn-ghost group"><Mail size={16} className="transition-transform group-hover:-rotate-12" /> Contact Me</a>
            {profile.resume && (
              <button type="button" onClick={() => setCvOpen(true)} className="btn btn-ghost group"><FileText size={16} /> My CV</button>
            )}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="min-w-0"><Lanyard /></motion.div>
      </div>
      <AnimatePresence>{cvOpen && <CvModal onClose={() => setCvOpen(false)} />}</AnimatePresence>
    </section>
  )
}
