import { ArrowUp } from 'lucide-react'
import { profile } from '../data/content'
import { Shell } from './Section'

const labels = { github: 'GitHub', linkedin: 'LinkedIn', instagram: 'Instagram' }

export default function Footer() {
  return (
    <footer className="bg-inv text-inv-fg">
      <Shell className="pt-16 md:pt-24">
        <p className="br-label text-inv-muted">■ Get in touch</p>
        <a
          href="#about"
          className="mt-4 block font-display uppercase leading-[0.85] tracking-[-0.01em] text-[clamp(3rem,9vw,8rem)]"
        >
          {profile.name}
        </a>
      </Shell>

      <Shell className="mt-12 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-[repeat(3,1fr)_auto] border-t border-l border-inv-line">
          {Object.entries(profile.socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 px-4 h-16 border-b md:border-b-0 border-r border-inv-line br-label transition-colors duration-75 hover:bg-inv-fg hover:text-inv"
            >
              {labels[key] || key}
              <span aria-hidden>↗</span>
            </a>
          ))}
          <a
            href="#about"
            aria-label="Back to top"
            className="flex items-center justify-center gap-3 px-6 h-16 bg-lime text-ink br-label hover:bg-[#C6E625] active:translate-y-px"
          >
            Top <ArrowUp size={16} strokeWidth={2} />
          </a>
        </div>
      </Shell>

      <div className="border-t border-inv-line">
        <Shell className="flex flex-wrap justify-between gap-2 py-4 text-micro font-semibold uppercase text-inv-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.title}</span>
        </Shell>
      </div>
    </footer>
  )
}
