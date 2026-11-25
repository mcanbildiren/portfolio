import { motion } from 'framer-motion'
import { Section, SectionTitle, reveal } from './Section'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle index="03" kicker="How I got here">
        Education
      </SectionTitle>
      <motion.div {...reveal} className="grid md:grid-cols-3 border-t border-l border-line">
        {education.map((edu, i) => (
          <div key={edu.degree} className="flex flex-col gap-6 p-4 md:p-6 border-r border-b border-line">
            <div className="flex items-center justify-between">
              <span className="bg-inv text-inv-fg px-2 py-1 font-mono text-label font-bold uppercase tabular-nums">
                {edu.period}
              </span>
              <span className="font-mono text-label text-muted">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="font-display uppercase text-2xl md:text-[28px] leading-[0.95]">{edu.degree}</h3>
            <p className="mt-auto pt-4 border-t border-soft text-sm leading-[1.45] text-muted">{edu.school}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
