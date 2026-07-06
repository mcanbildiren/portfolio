import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle kicker="how I got here">Education</SectionTitle>
      <div className="grid md:grid-cols-3 gap-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur p-6 overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-cyan-500/20 to-green-400/20 blur-2xl" />
            <span className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white mb-4">
              <GraduationCap size={20} />
            </span>
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 mb-2">{edu.period}</p>
            <h3 className="font-bold text-lg leading-snug">{edu.degree}</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">{edu.school}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
