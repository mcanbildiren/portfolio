import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/content'

const socialIcons = { github: Github, linkedin: Linkedin, instagram: Instagram }

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 py-12 px-4">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6 text-center">
        <a href="#about" className="font-mono font-bold text-2xl">
          <span className="text-gradient">MCB</span>
          <span className="text-emerald-500">.</span>
        </a>

        <div className="flex items-center gap-3">
          {Object.entries(profile.socials).map(([key, url]) => {
            const Icon = socialIcons[key]
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
                className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all hover:scale-110"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 hover:text-emerald-600"
        >
          <ArrowUp size={15} /> Back to top
        </a>
      </div>
    </footer>
  )
}
