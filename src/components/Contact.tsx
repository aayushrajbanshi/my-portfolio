import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import Section, { reveal } from './Section'
import { profile } from '../data/site'
import { sendMessage, type ContactPayload } from '../lib/sendMessage'

type Errors = Partial<Record<keyof ContactPayload, string>>
const empty: ContactPayload = { name: '', email: '', subject: '', message: '' }

function validate(v: ContactPayload): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Add a short subject.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

const pretty = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const info = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Github, label: 'GitHub', value: pretty(profile.github), href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: pretty(profile.linkedin), href: profile.linkedin },
]

export default function Contact() {
  const [v, setV] = useState<ContactPayload>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set = (k: keyof ContactPayload) => (e: { target: { value: string } }) => setV((p) => ({ ...p, [k]: e.target.value }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    try { await sendMessage(v); setStatus('sent'); setV(empty) } catch { setStatus('error') }
  }

  const fields: { k: keyof ContactPayload; label: string; type?: string; ph: string }[] = [
    { k: 'name', label: 'Name', ph: 'Your name' }, { k: 'email', label: 'Email', type: 'email', ph: 'you@example.com' }, { k: 'subject', label: 'Subject', ph: 'What’s this about?' },
  ]

  return (
    <Section id="contact" label="Let’s connect" title="Let’s Build Something Great Together" sub="Have a project, poster or idea in mind? Send a message and I’ll get back to you.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <ul className="grid content-start gap-3">
          {info.map((c, i) => {
            const body = (<><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--violet)]/15 text-[var(--violet)]"><c.icon size={18} /></span><span className="min-w-0"><span className="label block">{c.label}</span><span className="block truncate text-sm">{c.value}</span></span></>)
            return (
              <motion.li key={c.label} {...reveal(i)}>
                {c.href ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="glass flex items-center gap-4 p-4">{body}</a> : <div className="glass flex items-center gap-4 p-4">{body}</div>}
              </motion.li>
            )
          })}
        </ul>
        <motion.form {...reveal()} onSubmit={onSubmit} noValidate className="glass grid gap-4 p-5 sm:p-7">
          {fields.map((f) => (
            <div key={f.k}>
              <label htmlFor={f.k} className="label mb-1.5 block">{f.label}</label>
              <input id={f.k} type={f.type ?? 'text'} value={v[f.k]} onChange={set(f.k)} placeholder={f.ph} className="field" autoComplete={f.k === 'name' ? 'name' : f.k === 'email' ? 'email' : 'off'}
                aria-invalid={!!errors[f.k]} aria-describedby={errors[f.k] ? `${f.k}-err` : undefined} />
              {errors[f.k] && <p id={`${f.k}-err`} role="alert" className="mt-1 text-xs text-red-400">{errors[f.k]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="label mb-1.5 block">Message</label>
            <textarea id="message" rows={5} value={v.message} onChange={set('message')} placeholder="Tell me about your project…" className="field resize-y"
              aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
            {errors.message && <p id="message-err" role="alert" className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-60">
            <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          <p aria-live="polite" className="min-h-5 text-sm">
            {status === 'sent' && <span className="inline-flex items-center gap-1.5 text-emerald-300"><CheckCircle2 size={16} /> Message ready — thanks! I’ll reply soon.</span>}
            {status === 'error' && <span className="text-red-400">Something went wrong. Please email me directly.</span>}
          </p>
        </motion.form>
      </div>
    </Section>
  )
}
