export interface ContactPayload { name: string; email: string; subject: string; message: string }

/**
 * Replace the body with a real backend / email service later
 * (Formspree, EmailJS, Resend, your own API...). The form only calls this function.
 */
export async function sendMessage(payload: ContactPayload): Promise<void> {
  // await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  console.info('Contact payload ready to send:', payload)
  await new Promise((r) => setTimeout(r, 700))
}
