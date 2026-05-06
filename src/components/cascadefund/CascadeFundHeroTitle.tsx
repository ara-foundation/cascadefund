'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '@/components/GradientText'
import { cn } from '@/lib/utils'

/**
 * Center hero: animated gradient title + tagline (galaxy / RPG pages).
 * Title uses {@link GradientText} (inline gradient + `background-clip: text`) so the
 * gradient always renders; Tailwind-only `bg-gradient` on `motion.h1` was not applying reliably here.
 */
const CascadeFundHeroTitle: React.FC = () => {
  return (
    <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 py-8 pointer-events-none select-none min-h-[min(50vh,28rem)] w-full max-w-4xl mx-auto">
      <motion.div
        className="mb-5 md:mb-6 flex justify-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <GradientText
          colors={['#7dd3fc', '#a78bfa', '#c4b5fd', '#38bdf8', '#7dd3fc']}
          animationSpeed={10}
          className={cn(
            'cursor-default font-bold text-5xl leading-tight md:text-6xl lg:text-7xl',
            'max-w-[min(100%,28rem)] text-center',
          )}
        >
          Cascadefund
        </GradientText>
      </motion.div>
      <motion.p
        className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        building open source into an ecosystem with minimal burnout communication to users
      </motion.p>
    </div>
  )
}

export default CascadeFundHeroTitle
