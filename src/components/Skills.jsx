import { motion } from 'framer-motion'
import { Section, SectionTitle, reveal } from './Section'
import { skills } from '../data/content'

export default function Skills() {
  const total = skills.reduce((n, g) => n + g.items.length, 0)
  return (
    <Section id="skills">
      <SectionTitle index="01" kicker="What I work with" aside={`${total} tools / ${skills.length} areas`}>
        Skills
      </SectionTitle>
      <motion.div
        {...reveal}
        className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line"
      >
        {skills.map((group, i) => (
          <div
            key={group.category}
            className="group flex flex-col gap-4 p-4 md:p-6 border-r border-b border-line transition-colors duration-75 hover:bg-deep"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-extrabold uppercase leading-[1.1]">{group.category}</h3>
              <span className="font-mono text-label text-muted tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="br-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
