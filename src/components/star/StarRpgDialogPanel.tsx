'use client'

import React, { useEffect, useMemo, useState, isValidElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NumberFlow from '@number-flow/react'
import BasePanel from '@/components/panel/Panel'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'
import Tooltip from '@/components/custom-ui/Tooltip'
import AttentionBadge from '@/components/badge/AttentionBadge'
import { getIcon } from '@/components/icon'
import { dialog, greetingDialog, type Dialog } from '@/data/dialog'
import { BorderSize, RoundedSize, ShadowSize } from '@/types/eventTypes'
import { cn } from '@/lib/utils'
import { DialogWalkthroughProvider } from '@/components/star/DialogWalkthroughContext'

const INITIAL_ID = greetingDialog[0].id
const DIALOG_PORTRAITS: string[] = [
  '/images/ahmetson/dialog/01-dsc02548-edit.webp',
  '/images/ahmetson/dialog/02-dsc02658-edit.webp',
  '/images/ahmetson/dialog/03-dsc02663-edit.webp',
  '/images/ahmetson/dialog/04-dsc02665-edit.webp',
  '/images/ahmetson/dialog/05-dsc02666-edit.webp',
  '/images/ahmetson/dialog/06-dsc02671-edit.webp',
  '/images/ahmetson/dialog/07-dsc02680-edit.webp',
]
type BranchType = 'user' | 'maintainer'
type DialogId = string | number

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
      <p className="text-slate-500 dark:text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap mb-2">
        {content}
      </p>
    )
  }
  if (isValidElement(content)) {
    return <div className="mb-2 text-sm">{content}</div>
  }
  return <div className="mb-2 text-sm">{content as React.ReactNode}</div>
}

function getBranchFromStepId(stepId: string | number): BranchType | null {
  if (typeof stepId !== 'string') return null
  if (stepId.startsWith('maintainer-')) return 'maintainer'
  if (stepId.startsWith('user-') || stepId.startsWith('helpful-') || stepId.startsWith('sceptic-')) {
    return 'user'
  }
  return null
}

function buildFirstAnswerPath(byId: Map<string | number, Dialog>, rootId: string): Array<string | number> {
  const path: Array<string | number> = []
  const seen = new Set<string | number>()
  let current: string | number | undefined = rootId

  while (current != null && byId.has(current) && !seen.has(current)) {
    seen.add(current)
    path.push(current)

    const step = byId.get(current)
    if (!step || !step.a || step.a.length === 0) {
      break
    }
    current = step.a[0].goto
  }

  return path
}

function getInspectorHref(id: DialogId) {
  const params = new URLSearchParams()
  params.set('inspector', 'true')
  if (id !== INITIAL_ID) {
    params.set('msgId', String(id))
  }
  return `?${params.toString()}`
}

/** Small circular avatar with subtle ring; image optional */
function CharacterPortrait({ imageSrc }: { imageSrc?: string }) {
  return (
    <div
      className={cn(
        'relative z-10 shrink-0 overflow-hidden rounded-xl',
        'h-12 w-12 sm:h-14 sm:w-14 ml-2.5',
        'border border-slate-400/55 dark:border-slate-500/60',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_3px_10px_rgba(0,0,0,0.22)]',
        'ring-1 ring-slate-950/15 dark:ring-white/10',
        'bg-gradient-to-br from-slate-500/45 via-slate-600/40 to-sky-800/50 dark:from-slate-600/55 dark:to-sky-950/55',
      )}
      aria-hidden
    >
      {imageSrc ? (
        <img src={imageSrc} alt="" className="absolute inset-px h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[0.7rem] object-cover" />
      ) : null}
      <div
        className={cn(
          'absolute inset-px rounded-[0.7rem] border border-slate-300/25 dark:border-slate-600/35',
          imageSrc
            ? 'bg-gradient-to-b from-white/5 via-transparent to-black/20'
            : 'bg-gradient-to-br from-slate-400/35 via-slate-500/30 to-sky-700/40 dark:from-slate-600/45 dark:to-sky-900/45',
        )}
      />
    </div>
  )
}

const StarRpgDialogPanel: React.FC = () => {
  const byId = useMemo(() => buildDialogMap(dialog), [])
  const maintainerFirstPath = useMemo(() => buildFirstAnswerPath(byId, 'maintainer-1'), [byId])
  const userFirstPath = useMemo(() => buildFirstAnswerPath(byId, 'user-1'), [byId])
  const [currentId, setCurrentId] = useState<DialogId>(INITIAL_ID)
  const [walkthroughDialogs, setWalkthroughDialogs] = useState<DialogId[]>([INITIAL_ID])
  const [isInspectorMode, setIsInspectorMode] = useState(false)
  const [branchStepCount, setBranchStepCount] = useState(0)
  const [portraitSrc, setPortraitSrc] = useState<string | undefined>(undefined)

  const step = byId.get(currentId)
  const hasChoices = step && step.a && step.a.length > 0
  const currentBranch = getBranchFromStepId(currentId)
  const shouldShowHeaderMeta = currentId !== 1 && currentId !== 2 && currentBranch !== null
  const activePath = currentBranch === 'maintainer' ? maintainerFirstPath : currentBranch === 'user' ? userFirstPath : []
  const activePathLength = activePath.length
  const completionPercent =
    activePathLength > 0 ? Math.min(100, Math.round((branchStepCount / activePathLength) * 100)) : 0

  const goTo = (next: number | string) => {
    if (byId.has(next)) {
      const nextBranch = getBranchFromStepId(next)
      setBranchStepCount((prev) => {
        if (!nextBranch) return 0
        return prev + 1
      })
      setCurrentId(next)
    }
  }

  const resetDialog = () => {
    setCurrentId(INITIAL_ID)
    setWalkthroughDialogs([INITIAL_ID])
    setBranchStepCount(0)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = window.location.search ? new URLSearchParams(window.location.search) : new URLSearchParams()
    const inspectorFlag = (params.get('inspector') ?? params.get('inspecter') ?? '').toLowerCase() === 'true'
    setIsInspectorMode(inspectorFlag)
    if (!inspectorFlag) return

    const msgIdParam = params.get('msgId')
    if (!msgIdParam) return

    const parsedMsgId: DialogId = /^\d+$/.test(msgIdParam) ? Number(msgIdParam) : msgIdParam
    if (!byId.has(parsedMsgId)) return
    setCurrentId(parsedMsgId)
    setWalkthroughDialogs([parsedMsgId])
  }, [byId])

  useEffect(() => {
    setWalkthroughDialogs((prev) => {
      if (prev.length > 0 && prev[prev.length - 1] === currentId) {
        return prev
      }
      return [...prev, currentId]
    })
  }, [currentId])

  useEffect(() => {
    if (typeof window === 'undefined' || !isInspectorMode) return
    const params = new URLSearchParams(window.location.search)
    params.set('inspector', 'true')
    params.delete('inspecter')
    if (currentId === INITIAL_ID) {
      params.delete('msgId')
    } else {
      params.set('msgId', String(currentId))
    }
    const nextSearch = params.toString()
    const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ''}${window.location.hash}`
    window.history.replaceState({}, '', nextUrl)
  }, [currentId, isInspectorMode])

  const inspectorListRows = useMemo(() => {
    const rows: Array<{ kind: 'node' | 'answer'; depth: number; id?: DialogId; label: string; goto?: DialogId }> = []
    const visited = new Set<DialogId>()

    const walk = (nodeId: DialogId, depth: number, path: Set<DialogId>) => {
      const stepForId = byId.get(nodeId)
      if (!stepForId) return

      const isCycle = path.has(nodeId)
      const wasVisited = visited.has(nodeId)
      rows.push({
        kind: 'node',
        depth,
        id: nodeId,
        label: isCycle ? '(cycle)' : wasVisited ? '(already shown)' : '',
      })
      if (isCycle || wasVisited) return

      visited.add(nodeId)
      const nextPath = new Set(path)
      nextPath.add(nodeId)

      stepForId.a.forEach((answer) => {
        rows.push({
          kind: 'answer',
          depth: depth + 1,
          label: answer.label || '(empty answer)',
          goto: answer.goto,
        })

        if (byId.has(answer.goto)) {
          walk(answer.goto, depth + 2, nextPath)
        }
      })
    }

    walk(INITIAL_ID, 0, new Set<DialogId>())
    return rows
  }, [byId])

  useEffect(() => {
    if (DIALOG_PORTRAITS.length === 0) {
      setPortraitSrc(undefined)
      return
    }
    const randomIndex = Math.floor(Math.random() * DIALOG_PORTRAITS.length)
    setPortraitSrc(DIALOG_PORTRAITS[randomIndex])
  }, [currentId])

  return (
    <DialogWalkthroughProvider value={walkthroughDialogs}>
      <>
      {isInspectorMode && (
        <aside
          className={cn(
            'fixed left-4 top-24 bottom-6 z-30 w-[min(36rem,calc(100vw-2rem))]',
            'overflow-auto rounded-xl border border-slate-300/40 bg-white/80 p-3 shadow-xl backdrop-blur',
            'dark:border-slate-600/40 dark:bg-slate-900/80',
          )}
          aria-label="Dialog inspector navigation"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
            Dialog flow (ids + answers)
          </p>
          <nav className="flex flex-col gap-1 overflow-auto pb-2">
            {inspectorListRows.map((row, index) =>
              row.kind === 'node' ? (
                <a
                  key={`node-${index}-${String(row.id)}`}
                  href={getInspectorHref(row.id ?? INITIAL_ID)}
                  className={cn(
                    'rounded-md border px-2 py-1 text-xs leading-snug transition-colors',
                    row.id === currentId
                      ? 'border-sky-400/70 bg-sky-500/15 text-slate-900 dark:text-slate-100'
                      : 'border-slate-300/40 text-slate-700 hover:bg-slate-200/30 dark:border-slate-600/40 dark:text-slate-300 dark:hover:bg-slate-700/30',
                  )}
                  style={{ marginLeft: `${row.depth * 12}px` }}
                >
                  <span className="font-semibold text-sky-700 dark:text-sky-300">id {String(row.id)}</span>
                  {row.label ? <span className="ml-2 text-amber-600 dark:text-amber-300">{row.label}</span> : null}
                </a>
              ) : (
                <div
                  key={`answer-${index}-${String(row.goto)}`}
                  className="rounded-md border border-dashed border-slate-300/40 px-2 py-1 text-xs leading-snug text-slate-700 dark:border-slate-600/40 dark:text-slate-300"
                  style={{ marginLeft: `${row.depth * 12}px` }}
                >
                  <span className="font-semibold">{row.label}</span>
                  <span className="mx-1 text-slate-400 dark:text-slate-500">{'->'}</span>
                  <span className={cn(byId.has(row.goto ?? '') ? 'text-sky-700 dark:text-sky-300' : 'text-rose-600 dark:text-rose-300')}>
                    {String(row.goto)}
                  </span>
                </div>
              ),
            )}
          </nav>
        </aside>
      )}
      <div
        className={cn(
          'fixed left-1/2 bottom-16 z-30 w-[min(100%,36rem)] sm:w-[min(100%,40rem)] -translate-x-1/2 px-3 sm:px-4',
          'pointer-events-auto',
        )}
        role="region"
        aria-label="Dialogue"
      >
      {/* Character row: small avatar with inline name/title; panel remains below */}
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <CharacterPortrait imageSrc={portraitSrc} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-bold leading-tight text-slate-900/60 dark:text-slate-100/60 sm:text-lg">
            Medet Ahmetson
          </p>
          <div className="mt-0.5 flex items-center justify-between gap-2 text-xs leading-snug text-slate-600 dark:text-slate-400 sm:text-sm">
            <p className="min-w-0 truncate">
              Maintainer of CascadeFund{' '}
              <Tooltip content="About Ara Foundation">
                <Link
                  uri="https://ara.foundation/about"
                  className="inline-flex items-center align-middle text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-100"
                >
                  {getIcon({
                    iconType: 'globe',
                    className: 'w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-y-[0.5px]',
                  })}
                </Link>
              </Tooltip>{' '}
            </p>
            {shouldShowHeaderMeta && (
              <div className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap">
                <span>Talking to {currentBranch === 'user' ? 'User' : 'Maintainer'}</span>
                <span>
                  <NumberFlow
                    value={completionPercent}
                    locales="en-US"
                    format={{ style: 'decimal', maximumFractionDigits: 0 }}
                  />
                  %
                </span>
                <Tooltip content="Reset dialog">
                  <button
                    type="button"
                    onClick={resetDialog}
                    className="inline-flex items-center text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    aria-label="Reset dialog"
                  >
                    <span className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                      ↺
                    </span>
                  </button>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dialogue box: pulled up by 15% of portrait height so that strip covers portrait only */}
      <AnimatePresence mode="wait">
        <motion.div
          key={String(currentId)}
          className={cn(
            'relative z-20',
            '-mt-1',
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

                  {hasChoices ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {step.a.map((answer, i) => (
                        <Button
                          key={`${answer.label}-${i}`}
                          variant="secondary"
                          size="sm"
                          outline
                          onClick={() => goTo(answer.goto)}
                        >
                          {answer.label}
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </BasePanel>
        </motion.div>
      </AnimatePresence>
      </div>
      </>
    </DialogWalkthroughProvider>
  )
}

export default StarRpgDialogPanel
