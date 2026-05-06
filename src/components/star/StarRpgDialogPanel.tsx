'use client'

import React, { useMemo, useState, isValidElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BasePanel from '@/components/panel/Panel'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'
import AttentionBadge from '@/components/badge/AttentionBadge'
import { dialog, grieetingDialog, type Dialog } from '@/data/dialog'
import { BorderSize, RoundedSize, ShadowSize } from '@/types/eventTypes'
import { cn } from '@/lib/utils'

const INITIAL_ID = grieetingDialog[0].id

function buildDialogMap(entries: Dialog[]): Map<string | number, Dialog> {
  const m = new Map<string | number, Dialog>()
  for (const d of entries) {
    m.set(d.id, d)
  }
  return m
}

function renderTextField(value: string | undefined) {
  if (!value) return null
  return (
    <p className="text-slate-700 dark:text-slate-200 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
      {value}
    </p>
  )
}

function renderContentField(content: Dialog['content']) {
  if (content == null || content === '') return null
  if (typeof content === 'string') {
    return (
      <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed whitespace-pre-wrap mb-2 border-l-2 border-sky-500/40 pl-3">
        {content}
      </p>
    )
  }
  if (isValidElement(content)) {
    return <div className="mb-2 text-sm">{content}</div>
  }
  return <div className="mb-2 text-sm">{content as React.ReactNode}</div>
}

/** Neutral frame (no warm/orange border); placeholder fill */
function CharacterPortrait() {
  return (
    <div
      className={cn(
        'relative z-10 shrink-0 overflow-hidden rounded-md',
        'h-[5.5rem] w-[5.5rem] sm:h-28 sm:w-28',
        'border-2 border-slate-400/55 dark:border-slate-500/60',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.25)]',
        'ring-1 ring-slate-950/15 dark:ring-white/10',
        'bg-gradient-to-br from-slate-500/45 via-slate-600/40 to-sky-800/50 dark:from-slate-600/55 dark:to-sky-950/55',
      )}
      aria-hidden
    >
      <div
        className={cn(
          'absolute inset-[2px] rounded-sm border border-slate-300/25 dark:border-slate-600/35',
          'bg-gradient-to-br from-slate-400/35 via-slate-500/30 to-sky-700/40 dark:from-slate-600/45 dark:to-sky-900/45',
        )}
      />
    </div>
  )
}

const StarRpgDialogPanel: React.FC = () => {
  const byId = useMemo(() => buildDialogMap(dialog), [])
  const [currentId, setCurrentId] = useState<string | number>(INITIAL_ID)

  const step = byId.get(currentId)
  const hasChoices = step && step.a && step.a.length > 0

  const goTo = (next: number | string) => {
    if (byId.has(next)) {
      setCurrentId(next)
    }
  }

  return (
    <div
      className={cn(
        'fixed left-1/2 bottom-16 z-30 w-[min(100%,36rem)] sm:w-[min(100%,40rem)] -translate-x-1/2 px-3 sm:px-4',
        'pointer-events-auto',
      )}
      role="region"
      aria-label="Dialogue"
    >
      {/* Character row: portrait + title; panel below overlaps bottom 15% of portrait (z-20) */}
      <div className="flex flex-row items-start gap-3 sm:gap-4">
        <CharacterPortrait />
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="truncate text-base font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-lg">
            Medet Ahmetson
          </p>
          <p className="mt-1 text-xs leading-snug text-slate-600 dark:text-slate-400 sm:text-sm">
            Maintainer of CascadeFund —{' '}
            <Link uri="/about" className="text-xs sm:text-sm">
              /about
            </Link>{' '}
            for more information.
          </p>
        </div>
      </div>

      {/* Dialogue box: pulled up by 15% of portrait height so that strip covers portrait only */}
      <AnimatePresence mode="wait">
        <motion.div
          key={String(currentId)}
          className={cn(
            'relative z-20',
            /* 15% of portrait height: 5.5rem→0.825rem, sm 7rem→1.05rem — panel covers bottom strip */
            '-mt-[0.825rem] sm:-mt-[1.05rem]',
          )}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          <BasePanel
            padding="p-4 md:p-5"
            bg="bg-transparent"
            border={{
              size: BorderSize.border2,
              color: 'border-slate-400/40 dark:border-slate-500/45',
            }}
            shadowSize={ShadowSize.shadowLg}
            roundedSize={RoundedSize.rounded2xl}
            className={cn('backdrop-blur-lg', 'bg-white/15 dark:bg-slate-900/25')}
          >
            <div className="flex min-w-0 flex-col gap-3">
              {!step ? (
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Missing dialogue step for id &quot;{String(currentId)}&quot;.
                </p>
              ) : (
                <>
                  <div className="space-y-2">
                    {renderContentField(step.content)}
                    <div className="flex items-start gap-2 truncate text-base font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-lg">
                      {renderTextField(step.q)}
                      <AttentionBadge className="mt-2 shrink-0" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {hasChoices ? (
                      step.a.map((answer, i) => (
                        <Button
                          key={`${answer.label}-${i}`}
                          variant="secondary"
                          size="sm"
                          outline
                          onClick={() => goTo(answer.goto)}
                        >
                          {answer.label}
                        </Button>
                      ))
                    ) : (
                      <>
                        <p className="mb-1 w-full text-xs text-slate-500 dark:text-slate-400">
                          End of this branch.
                        </p>
                        <Button variant="default" size="sm" outline onClick={() => setCurrentId(INITIAL_ID)}>
                          Start again
                        </Button>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </BasePanel>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default StarRpgDialogPanel
