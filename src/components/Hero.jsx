import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'
import { profile } from '../data/content'

const socialIcons = { github: Github, linkedin: Linkedin, instagram: Instagram }

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center px-4 pt-28 pb-16">
      <div className="mx-auto max-w-3xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]"
        >
          {profile.name.split(' ').map((word, i) => (
            <span key={i} className={i === profile.name.split(' ').length - 1 ? 'text-gradient' : ''}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-lg md:text-xl font-mono text-slate-500 dark:text-slate-400"
        >
          <span className="text-emerald-500">&gt;</span>
          {profile.subtitles.map((s, i) => (
            <span key={i}>{s}{i < profile.subtitles.length - 1 && <span className="mx-2 text-emerald-400">·</span>}</span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 mx-auto max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="#experience"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 animated-gradient animate-gradient-x px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-[1.03]"
          >
            View my work
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <div className="flex items-center gap-2">
            {Object.entries(profile.socials).map(([key, url]) => {
              const Icon = socialIcons[key]
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key}
                  className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-white hover:border-emerald-500 hover:bg-emerald-500 transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hidden md:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={22} />
        </motion.div>
      </a>
    </section>
  )
}
