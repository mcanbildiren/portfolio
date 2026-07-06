import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import { experiences } from '../data/content'

function Card({ exp }) {
  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur p-6 hover:border-emerald-400/50 transition-colors text-left">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
          <Briefcase size={15} />
        </span>
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-500">
          {exp.date}
        </span>
      </div>
      <h3 className="text-xl font-bold">{exp.role}</h3>
      <p className="text-cyan-500 dark:text-cyan-400 font-semibold mb-3">{exp.company}</p>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {exp.points.map((p, j) => (
          <li key={j} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle kicker="where I've been">Experience</SectionTitle>
      <div className="relative">
        {/* vertical line: left on mobile, center on desktop */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-green-400 via-emerald-500 to-cyan-500 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const left = i % 2 === 0
            return (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: left ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center"
              >
                {/* dot */}
                <span className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 h-4 w-4 rounded-full bg-white dark:bg-[#0a0a12] border-2 border-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" />

                {left ? (
                  <>
                    <div className="pl-12 md:pl-0 md:pr-2">
                      <Card exp={exp} />
                    </div>
                    <div className="hidden md:block" aria-hidden />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" aria-hidden />
                    <div className="pl-12 md:pl-2 md:pr-0">
                      <Card exp={exp} />
                    </div>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
