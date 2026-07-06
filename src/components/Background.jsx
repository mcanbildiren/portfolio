import { useMemo } from 'react'
import { motion } from 'framer-motion'

function Fireflies({ count = 22 }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 88,
        size: 2 + Math.random() * 3,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 6,
        drift: 12 + Math.random() * 26,
      })),
    [count],
  )

  return (
    <div className="absolute inset-0">
      {flies.map((f) => (
        <motion.span
          key={f.id}
          className="absolute rounded-full bg-emerald-300 dark:bg-emerald-300"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px rgba(52, 211, 153, 0.7)`,
          }}
          animate={{
            y: [0, -f.drift, 0],
            x: [0, f.drift * 0.5, 0],
            opacity: [0, 0.9, 0.2, 0.9, 0],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function ForestSilhouette() {
  return (
    <div className="absolute bottom-0 inset-x-0 h-[38vh] min-h-[240px]">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* far mountains */}
        <path
          fill="#064e3b"
          fillOpacity="0.35"
          d="M0,240 L120,180 L240,230 L360,150 L500,220 L640,160 L780,225 L920,170 L1080,230 L1220,175 L1340,225 L1440,190 L1440,400 L0,400 Z"
        />
        {/* mid hills */}
        <path
          fill="#065f46"
          fillOpacity="0.55"
          d="M0,300 L160,255 L320,300 L480,250 L640,300 L800,260 L960,305 L1120,255 L1280,300 L1440,265 L1440,400 L0,400 Z"
        />
        {/* front tree line */}
        <path
          fill="#047857"
          fillOpacity="0.8"
          d="M0,360 L40,330 L60,355 L100,320 L130,358 L170,335 L210,362 L250,325 L290,360 L340,330 L380,362 L430,335 L470,360 L520,325 L560,360 L610,332 L650,362 L700,330 L740,360 L800,325 L840,360 L900,335 L940,362 L1000,328 L1040,360 L1100,332 L1150,362 L1200,330 L1250,360 L1310,332 L1360,362 L1410,335 L1440,358 L1440,400 L0,400 Z"
        />
      </svg>
    </div>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 dark:bg-cyan-600/25 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-green-400/20 dark:bg-green-500/20 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 dark:bg-emerald-600/25 blur-3xl animate-blob [animation-delay:6s]" />
      <Fireflies />
      <ForestSilhouette />
    </div>
  )
}
