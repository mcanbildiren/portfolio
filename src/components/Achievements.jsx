import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle kicker="proud moments">Achievements &amp; Certificates</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
            className="group flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur p-5 hover:border-cyan-400/50 transition-colors"
          >
            <span className="shrink-0 inline-flex p-2.5 rounded-xl bg-gradient-to-br from-green-400 to-cyan-500 text-white group-hover:scale-110 transition-transform">
              <Award size={18} />
            </span>
            <div>
              <h3 className="font-semibold leading-snug">{a.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{a.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
