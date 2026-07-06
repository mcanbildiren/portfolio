import { motion } from 'framer-motion'

export function SectionTitle({ children, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-500 mb-3">
          {kicker}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="text-gradient">{children}</span>
      </h2>
    </motion.div>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 px-4 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
