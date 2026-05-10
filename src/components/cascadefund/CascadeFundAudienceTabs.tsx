'use client'

import React, { useEffect, useId, useState } from 'react'
import { ChevronsDownUp } from 'lucide-react'
import {
  MaintainerSummary,
  MaintainerSummaryTeaser,
  NonDeveloperSummary,
  NonDeveloperSummaryTeaser,
} from '@/data/dialog'
import { setCascadeFundDeveloperSummaryExpanded } from '@/lib/cascadeFundDeveloperSummaryExpand'
import { setCascadeFundUserSummaryExpanded } from '@/lib/cascadeFundUserSummaryExpand'
import { useCascadeFundDeveloperSummaryExpanded } from '@/lib/useCascadeFundDeveloperSummaryExpanded'
import { useCascadeFundUserSummaryExpanded } from '@/lib/useCascadeFundUserSummaryExpanded'
import { cn } from '@/lib/utils'

const CENTER_STACK_ID = 'cascadefund-center-stack'

type AudienceTab = 'developers' | 'non-developers'

export default function CascadeFundAudienceTabs() {
  const [tab, setTab] = useState<AudienceTab>('developers')
  const summaryExpanded = useCascadeFundDeveloperSummaryExpanded()
  const userSummaryExpanded = useCascadeFundUserSummaryExpanded()
  const summaryBodyId = useId()
  const userSummaryBodyId = useId()

  useEffect(() => {
    if (tab !== 'developers') setCascadeFundDeveloperSummaryExpanded(false)
    if (tab !== 'non-developers') setCascadeFundUserSummaryExpanded(false)
  }, [tab])

  useEffect(() => {
    const el = document.getElementById(CENTER_STACK_ID)
    if (!el) return
    const shrinkPadding =
      (tab === 'developers' && summaryExpanded) || (tab === 'non-developers' && userSummaryExpanded)
    el.classList.toggle('cf-hide-rpg', shrinkPadding)
    return () => el.classList.remove('cf-hide-rpg')
  }, [summaryExpanded, userSummaryExpanded, tab])

  return (
    <div
      className="pointer-events-auto relative z-40 mx-auto mt-4 w-full max-w-2xl px-4 pb-6 sm:pb-8"
      role="region"
      aria-label="Audience overview"
    >
      <div
        className="mb-4 flex gap-1 rounded-lg border border-slate-200/80 bg-white/60 p-1 shadow-sm backdrop-blur-sm dark:border-slate-600/50 dark:bg-slate-900/40"
        role="tablist"
        aria-label="Choose audience"
      >
        {(
          [
            { id: 'developers' as const, label: 'Developers' },
            { id: 'non-developers' as const, label: 'Non developers' },
          ] as const
        ).map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`audience-tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`audience-panel-${id}`}
            tabIndex={tab === id ? 0 : -1}
            onClick={() => setTab(id)}
            className={cn(
              'flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              tab === id
                ? 'bg-sky-500/15 text-sky-800 shadow-sm dark:bg-sky-400/20 dark:text-sky-100'
                : 'text-slate-600 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:bg-slate-800/60',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        id="audience-panel-developers"
        role="tabpanel"
        aria-labelledby="audience-tab-developers"
        hidden={tab !== 'developers'}
        className={cn(
          'rounded-xl border border-slate-200/80 bg-white/50 p-3 shadow-sm backdrop-blur-sm dark:border-slate-600/40 dark:bg-slate-900/35',
          summaryExpanded &&
            tab === 'developers' &&
            'max-h-[min(70vh,40rem)] overflow-y-auto sm:max-h-[min(72vh,44rem)]',
        )}
      >
        <div className="flex gap-2">
          <div className="flex shrink-0 flex-col border-r border-slate-200/80 pr-2 dark:border-white/10">
            <button
              type="button"
              aria-expanded={summaryExpanded}
              aria-controls={summaryBodyId}
              aria-label={summaryExpanded ? 'Collapse overview' : 'Expand full overview'}
              onClick={() => setCascadeFundDeveloperSummaryExpanded(!summaryExpanded)}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-lg border text-slate-600 transition-colors dark:text-slate-300',
                'border-slate-300/80 bg-white/60 hover:bg-slate-50 dark:border-slate-600 dark:bg-white/10 dark:hover:bg-white/15',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50',
                summaryExpanded && 'border-sky-400/50 bg-sky-500/10 text-sky-800 dark:bg-sky-400/15 dark:text-sky-100',
              )}
            >
              <ChevronsDownUp
                className={cn('size-5 transition-transform duration-200', summaryExpanded ? 'rotate-180' : '')}
                aria-hidden
              />
            </button>
          </div>
          <div id={summaryBodyId} className="min-w-0 flex-1">
            {summaryExpanded ? <MaintainerSummary /> : <MaintainerSummaryTeaser />}
          </div>
        </div>
      </div>

      <div
        id="audience-panel-non-developers"
        role="tabpanel"
        aria-labelledby="audience-tab-non-developers"
        hidden={tab !== 'non-developers'}
        className={cn(
          'rounded-xl border border-slate-200/80 bg-white/50 p-3 shadow-sm backdrop-blur-sm dark:border-slate-600/40 dark:bg-slate-900/35 sm:p-4',
          userSummaryExpanded &&
            tab === 'non-developers' &&
            'max-h-[min(70vh,40rem)] overflow-y-auto sm:max-h-[min(72vh,44rem)]',
        )}
      >
        <div className="flex gap-2">
          <div className="flex shrink-0 flex-col border-r border-slate-200/80 pr-2 dark:border-white/10">
            <button
              type="button"
              aria-expanded={userSummaryExpanded}
              aria-controls={userSummaryBodyId}
              aria-label={userSummaryExpanded ? 'Collapse overview' : 'Expand full overview'}
              onClick={() => setCascadeFundUserSummaryExpanded(!userSummaryExpanded)}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-lg border text-slate-600 transition-colors dark:text-slate-300',
                'border-slate-300/80 bg-white/60 hover:bg-slate-50 dark:border-slate-600 dark:bg-white/10 dark:hover:bg-white/15',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50',
                userSummaryExpanded &&
                  'border-sky-400/50 bg-sky-500/10 text-sky-800 dark:bg-sky-400/15 dark:text-sky-100',
              )}
            >
              <ChevronsDownUp
                className={cn(
                  'size-5 transition-transform duration-200',
                  userSummaryExpanded ? 'rotate-180' : '',
                )}
                aria-hidden
              />
            </button>
          </div>
          <div id={userSummaryBodyId} className="min-w-0 flex-1">
            {userSummaryExpanded ? <NonDeveloperSummary /> : <NonDeveloperSummaryTeaser />}
          </div>
        </div>
      </div>
    </div>
  )
}
