import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Achievements' },
]

function useActiveSection() {
  const [active, setActive] = useState('#about')
  useEffect(() => {
    const els = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg border-b border-line">
      <div className="mx-auto max-w-7xl flex items-stretch h-14 md:border-x border-line">
        <a
          href="#about"
          className="flex items-center gap-2 px-4 md:px-6 border-r border-line font-display text-2xl leading-none uppercase"
        >
          MCB
          <span className="h-2.5 w-2.5 bg-fg" aria-hidden />
        </a>

        <nav className="hidden md:flex flex-1 items-stretch">
          {links.map((l, i) => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? 'true' : undefined}
                className={`flex items-center gap-2 px-4 lg:px-5 border-r border-line br-label transition-colors duration-75 ${
                  isActive ? 'bg-inv text-inv-fg' : 'hover:bg-deep'
                }`}
              >
                <span className={`font-mono ${isActive ? 'text-inv-muted' : 'text-muted'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {l.label}
              </a>
            )
          })}
        </nav>

        <div className="flex flex-1 md:flex-none items-stretch justify-end">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid place-items-center w-14 border-l border-line hover:bg-inv hover:text-inv-fg transition-colors duration-75"
          >
            {theme === 'dark' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden grid place-items-center w-14 border-l border-line hover:bg-inv hover:text-inv-fg transition-colors duration-75"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-bg">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between h-12 px-4 border-b border-line last:border-b-0 br-label ${
                active === l.href ? 'bg-inv text-inv-fg' : ''
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono opacity-60">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </span>
              <span aria-hidden>→</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
