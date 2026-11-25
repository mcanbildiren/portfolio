import { motion } from 'framer-motion'
import { Section, SectionTitle, reveal } from './Section'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle index="04" kicker="Proud moments" aside={`${achievements.length} entries`}>
        Achievements &amp; Certificates
      </SectionTitle>

      <motion.div {...reveal} className="border border-line">
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 h-10 items-center border-b border-line br-micro">
          <span className="col-span-1">No.</span>
          <span className="col-span-6">Title</span>
          <span className="col-span-5">Issuer</span>
        </div>
        {achievements.map((a, i) => (
          <div
            key={a.title}
            className="grid grid-cols-12 gap-x-4 gap-y-1 px-4 py-4 md:py-0 md:min-h-[52px] items-center border-b border-line last:border-b-0 transition-colors duration-75 hover:bg-inv hover:text-inv-fg"
          >
            <span className="col-span-2 md:col-span-1 font-mono text-label font-bold tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="col-span-10 md:col-span-6 text-sm font-extrabold uppercase leading-[1.2]">
              {a.title}
              {/first place/i.test(a.title) && <span className="ml-2 align-middle bg-lime text-ink px-1.5 py-0.5 text-micro font-semibold">1st</span>}
            </span>
            <span className="col-span-10 col-start-3 md:col-span-5 md:col-start-auto text-sm leading-[1.45] opacity-70">
              {a.org}
            </span>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
