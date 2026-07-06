import { motion } from 'framer-motion'
import { Section, SectionTitle } from './Section'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle kicker="what I work with">Skills</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur p-6 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-emerald-500/10 to-green-400/10" />
            <div className="relative">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:border-emerald-400/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
