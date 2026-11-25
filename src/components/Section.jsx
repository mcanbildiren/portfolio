import { motion } from 'framer-motion'

export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.35, ease: 'linear' },
}

export function Shell({ children, className = '' }) {
  return <div className={`mx-auto max-w-7xl px-4 md:px-8 lg:px-12 ${className}`}>{children}</div>
}

export function SectionTitle({ index, kicker, children, aside }) {
  return (
    <motion.div {...reveal} className="grid grid-cols-12 gap-4 pt-6 pb-8 md:pb-12">
      <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between md:justify-start gap-4">
        <div className="br-eyebrow br-label">
          <span className="font-mono tabular-nums">{index}</span>
          <span className="mx-2 text-muted">/</span>
          {kicker}
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] tracking-[-0.01em]">
          {children}
        </h2>
        {aside && <div className="br-micro pb-2">{aside}</div>}
      </div>
    </motion.div>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative border-t border-line py-12 md:py-24 ${className}`}>
      <Shell>{children}</Shell>
    </section>
  )
}
