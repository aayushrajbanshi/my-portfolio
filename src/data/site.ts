// Content now lives in src/content/*.json — edit it in the Pages CMS admin, not here.
import profileJson from '../content/profile.json'
import aboutJson from '../content/about.json'
import skillsJson from '../content/skills.json'
import projectsJson from '../content/projects.json'
import timelineJson from '../content/timeline.json'
import servicesJson from '../content/services.json'

export type SkillCat = 'Design' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'AI'
export interface Project {
  id: string; title: string; type: string; desc: string; tech: string[]; hue: number
  features: string[]; challenges: string[]; github: string; live: string
}
export interface Skill { name: string; cat: SkillCat; desc: string; level: number }
export interface Milestone { period: string; title: string; org: string; desc: string; tags: string[] }
export interface Service { icon: string; title: string; desc: string }

export const profile = profileJson
export const about = aboutJson
export const stats = aboutJson.stats
export const skills = skillsJson as Skill[]
export const projects = projectsJson as Project[]
export const timeline = timelineJson as Milestone[]
export const services = servicesJson as Service[]

export const nav = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' }, { id: 'contact', label: 'Contact' },
]
