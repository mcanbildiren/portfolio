import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { profile, experiences, skills, achievements } from '../data/content'
import { Shell } from './Section'

const socialIcons = { github: Github, linkedin: Linkedin, instagram: Instagram }

const firstYear = Math.min(
  ...experiences
    .filter((e) => !/intern/i.test(e.role))
    .map((e) => Number((e.date.match(/\d{4}/) || [])[0]))
    .filter(Boolean),
)

const stats = [
  { label: 'Building since', value: firstYear, caption: 'Backend · .NET' },
  { label: 'Roles', value: String(experiences.length).padStart(2, '0'), caption: 'Industry & teaching' },
  { label: 'Skill areas', value: String(skills.length).padStart(2, '0'), caption: 'Languages to DevOps' },
  { label: 'Certificates', value: String(achievements.length).padStart(2, '0'), caption: 'Awards & courses' },
]

const fade = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay, ease: 'linear' },
})

function Crosshair({ className = '' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`absolute text-fg ${className}`} aria-hidden>
      <path d="M12 0v24M0 12h24" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  const lineOne = [first, ...rest.slice(0, -1)].join(' ')
  const lineTwo = rest[rest.length - 1]

  return (
    <section id="about" className="relative pt-14">
      <Shell className="relative flex flex-col justify-center md:justify-start min-h-[calc(100svh-3.5rem)] pt-10 md:pt-16 pb-10 md:pb-16">
        <Crosshair className="left-1 top-3 md:left-3" />
        <Crosshair className="right-1 top-3 md:right-3" />

        <motion.div {...fade(0)} className="br-eyebrow br-label">
          Portfolio <span className="mx-2 text-muted">/</span> {new Date().getFullYear()}
        </motion.div>

        <motion.h1
          {...fade(0.05)}
          className="mt-6 font-name font-medium uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(3.5rem,13vw,13rem)]"
        >
          {lineOne}
          <br />
          {lineTwo}
          <span className="text-muted">.</span>
        </motion.h1>

        <div className="mt-8 md:mt-auto md:pt-12 grid grid-cols-12 gap-4 md:gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <motion.div {...fade(0.12)}>
              <span className="inline-block bg-lime text-ink px-3 py-2 font-extrabold uppercase tracking-[0.04em] text-sm md:text-base">
                {profile.title}
              </span>
            </motion.div>
          </div>

          <motion.div
            {...fade(0.24)}
            className="col-span-12 lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-4"
          >
            <a href="#experience" className="br-btn br-btn--primary">
              View my work <span aria-hidden>→</span>
            </a>
            <div className="flex">
              {Object.entries(profile.socials).map(([key, url], i) => {
                const Icon = socialIcons[key]
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={key}
                    className={`br-icon-btn ${i > 0 ? '-ml-px' : ''}`}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Shell>

      <Shell className="pb-12 md:pb-16">
        <motion.div
          {...fade(0.3)}
          className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-line"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3 p-4 border-r border-b border-line">
              <div className="flex justify-between items-start">
                <span className="br-label">{s.label}</span>
                <span aria-hidden>↗</span>
              </div>
              <span className="font-display text-figure tabular-nums">{s.value}</span>
              <span className="br-micro">{s.caption}</span>
            </div>
          ))}
        </motion.div>
      </Shell>
    </section>
  )
}
