import { motion } from 'framer-motion'
import { Section, SectionTitle, reveal } from './Section'
import { experiences } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle index="02" kicker="Where I've been" aside={`${experiences.length} roles`}>
        Experience
      </SectionTitle>

      <div className="border-t border-line">
        {experiences.map((exp, i) => {
          const current = /present/i.test(exp.date)
          return (
            <motion.article
              key={exp.role + exp.company}
              {...reveal}
              className="grid grid-cols-12 gap-x-4 gap-y-4 py-8 md:py-10 border-b border-line"
            >
              <div className="col-span-12 md:col-span-3 flex md:flex-col items-start justify-between md:justify-start gap-3">
                <span className="font-mono text-label12 font-bold uppercase tabular-nums">{exp.date}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-label text-muted">{String(i + 1).padStart(2, '0')}</span>
                  {current && (
                    <span className="inline-flex items-center gap-1.5 bg-inv text-inv-fg px-2 py-1 text-micro font-semibold uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display uppercase text-3xl md:text-[40px] leading-[0.95]">{exp.role}</h3>
                <p className="mt-2 br-label text-muted">
                  <span className="text-fg">↳</span> {exp.company}
                </p>

                <ul className="mt-6 grid gap-x-8 lg:grid-cols-2 border-t border-soft">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-3 py-3 border-b border-soft text-sm leading-[1.45]">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-fg" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
