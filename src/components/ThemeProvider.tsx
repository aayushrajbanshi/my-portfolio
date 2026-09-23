import { useEffect, type ReactNode } from 'react'
import theme from '../content/theme.json'

/** Reads src/content/theme.json (editable in the admin) and applies it as CSS variables. */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement.style
    root.setProperty('--bg', theme.bg)
    root.setProperty('--bg-2', theme.bg2)
    root.setProperty('--bg-3', theme.bg3)
    root.setProperty('--surface', theme.surface)
    root.setProperty('--surface-2', theme.surface2)
    root.setProperty('--violet', theme.violet)
    root.setProperty('--indigo', theme.indigo)
    root.setProperty('--blue', theme.blue)
    root.setProperty('--text', theme.text)
    root.setProperty('--muted', theme.muted)
  }, [])
  return <>{children}</>
}
