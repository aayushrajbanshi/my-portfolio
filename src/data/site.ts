// All personal info, projects, skills and links live here — replace freely.
export type SkillCat = 'Design' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'AI'
export interface Project {
  id: string; title: string; type: string; desc: string; tech: string[]; hue: number
  features: string[]; challenges: string[]; github: string; live: string
}
export interface Skill { name: string; cat: SkillCat; desc: string; level: number }
export interface Milestone { period: string; title: string; org: string; desc: string; tags: string[] }

export const profile = {
  name: 'Aayush Rajbanshi', short: 'Aayush', initials: 'AR',
  role: 'Graphic Designer & Photoshop Instructor',
  photo: '/me.jpg',
  email: 'aayushrajbanshi126@gmail.com', location: 'Jhapa, Nepal',
  github: 'https://github.com/aayushrajbanshi', linkedin: 'https://www.linkedin.com/in/aayush-rajbanshi/',
}

export const nav = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'experience', label: 'Experience' }, { id: 'contact', label: 'Contact' },
]

export const about = {
  intro: 'I’m a graphic designer and Photoshop instructor who also builds for the web.',
  what: 'I design social media posters, wedding cards and ID cards, and build websites, web and mobile apps, and AI-powered tools.',
  learning: 'Currently deepening TypeScript, React and backend fundamentals, and experimenting with LLM integrations.',
  goals: 'Grow into a designer-developer who ships polished, useful digital products end to end.',
}
export const stats = [
  { label: 'Projects Completed', value: 120, suffix: '+' }, { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Years Learning', value: 5, suffix: '' }, { label: 'Happy Clients', value: 60, suffix: '+' },
]

const s = (name: string, cat: SkillCat, desc: string, level: number): Skill => ({ name, cat, desc, level })
export const skills: Skill[] = [
  s('Photoshop', 'Design', 'Posters, cards, retouching', 95), s('Poster & Card Design', 'Design', 'Print-ready layouts', 92),
  s('HTML', 'Frontend', 'Semantic markup', 90), s('CSS', 'Frontend', 'Layout & animation', 85),
  s('JavaScript', 'Frontend', 'Modern ES features', 80), s('TypeScript', 'Frontend', 'Typed applications', 70),
  s('React', 'Frontend', 'Component-driven UIs', 75), s('Next.js', 'Frontend', 'Full-stack React', 55),
  s('Tailwind CSS', 'Frontend', 'Utility-first styling', 85),
  s('Node.js', 'Backend', 'Server-side JavaScript', 65), s('Express', 'Backend', 'REST servers', 60),
  s('Python', 'Backend', 'Scripts & services', 65), s('APIs', 'Backend', 'Design & integration', 70),
  s('MySQL', 'Database', 'Relational data', 60), s('PostgreSQL', 'Database', 'Advanced SQL', 55), s('MongoDB', 'Database', 'Document store', 55),
  s('Git', 'Tools', 'Version control', 75), s('GitHub', 'Tools', 'Collaboration', 75),
  s('VS Code', 'Tools', 'Daily editor', 90), s('Figma', 'Tools', 'UI design', 80),
  s('Machine Learning', 'AI', 'Core concepts', 45), s('AI APIs', 'AI', 'Model integration', 65), s('LLM Integrations', 'AI', 'Chat & tools', 60),
]

export const projects: Project[] = [
  { id: 'assistant', title: 'AI Personal Assistant', type: 'AI Tool', hue: 265, desc: 'A chat assistant that manages notes, reminders and daily planning.', tech: ['React', 'Python', 'LLM API'], features: ['Natural-language tasks', 'Reminders', 'Conversation memory'], challenges: ['Keeping responses fast', 'Structuring prompts reliably'], github: '#', live: '#' },
  { id: 'shop', title: 'Modern E-Commerce', type: 'Web App', hue: 220, desc: 'Storefront with cart, filters and a fast checkout flow.', tech: ['Next.js', 'Tailwind', 'PostgreSQL'], features: ['Product filters', 'Cart & checkout', 'Admin dashboard'], challenges: ['Cart state sync', 'Image performance'], github: '#', live: '#' },
  { id: 'portfolio', title: 'Portfolio Website', type: 'Website', hue: 285, desc: 'Animated personal site with case studies and a contact form.', tech: ['React', 'TypeScript', 'Framer Motion'], features: ['Scroll animations', 'Project modals', 'Responsive layout'], challenges: ['Mobile-first polish', 'Reduced-motion support'], github: '#', live: '#' },
  { id: 'tasks', title: 'Task Management App', type: 'Web App', hue: 200, desc: 'Kanban-style boards with due dates and progress tracking.', tech: ['React', 'Node.js', 'MongoDB'], features: ['Drag-and-drop boards', 'Due dates', 'Team sharing'], challenges: ['Optimistic updates', 'Data modelling'], github: '#', live: '#' },
  { id: 'weather', title: 'Weather Application', type: 'Mobile App', hue: 190, desc: 'Clean forecasts with hourly charts and saved locations.', tech: ['React', 'REST API', 'Chart.js'], features: ['Hourly forecast', 'Saved cities', 'Offline cache'], challenges: ['API rate limits', 'Readable data visuals'], github: '#', live: '#' },
  { id: 'chat', title: 'AI Chat Application', type: 'AI Tool', hue: 250, desc: 'Streaming chat interface with history and prompt presets.', tech: ['TypeScript', 'Express', 'LLM API'], features: ['Streaming replies', 'Chat history', 'Prompt presets'], challenges: ['Streaming UI states', 'Error recovery'], github: '#', live: '#' },
]

export const timeline: Milestone[] = [
  { period: '2025 — Present', title: 'Designer & Developer', org: 'Freelance', desc: 'Delivering brand, print and web projects for local and remote clients.', tags: ['Design', 'React', 'Clients'] },
  { period: '2023 — Present', title: 'Photoshop Instructor', org: 'Your Institute', desc: 'Teaching photo editing and poster design to beginner and intermediate students.', tags: ['Teaching', 'Photoshop'] },
  { period: '2023', title: 'Started Web Development', org: 'Self-taught', desc: 'Moved from static pages to React, TypeScript and backend basics.', tags: ['JavaScript', 'TypeScript'] },
  { period: '2020 — 2023', title: 'Education', org: 'Your School / University', desc: 'Formal studies alongside growing design work.', tags: ['Education'] },
]
