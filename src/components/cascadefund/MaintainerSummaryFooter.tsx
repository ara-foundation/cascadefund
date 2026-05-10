'use client'

import { Eye } from 'lucide-react'
import { AraCommunityClosingParagraph } from '@/components/cascadefund/AraCommunityClosingParagraph'
import { MaintainerJoinRegistration } from '@/components/star/MaintainerJoinRegistration'
import { setCascadeFundDeveloperSummaryExpanded } from '@/lib/cascadeFundDeveloperSummaryExpand'
import { cn } from '@/lib/utils'

/** Closing CTA + links for maintainer landing copy inline with RPG / add-project flow. */
export function MaintainerSummaryFooter() {
  return (
    <>
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-left text-sm leading-relaxed md:text-base">
        <span className="text-slate-700 dark:text-slate-300">Interested? Then</span>
        <MaintainerJoinRegistration
          triggerLabel="Add Your Project"
          dialogList={[]}
          className="ms-0 align-middle"
        />
        <span className="text-slate-700 dark:text-slate-300">Need more details? Medet left a dialogue below</span>
        <button
          type="button"
          aria-label="Hide this overview and show the dialogue"
          title="Show dialogue"
          onClick={() => setCascadeFundDeveloperSummaryExpanded(false)}
          className={cn(
            'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border align-middle',
            'border-slate-400/80 bg-white/70 text-slate-700 hover:bg-slate-100 dark:border-slate-500 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700/60',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50',
          )}
        >
          <Eye className="size-4" aria-hidden />
        </button>
        <span className="text-slate-700 dark:text-slate-300">Or view the</span>
        <a
          href="/landing"
          className={cn(
            'font-medium text-white underline decoration-white underline-offset-[3px] hover:text-white/90',
            'drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]',
          )}
        >
          landing page
        </a>
        <span className="text-slate-700 dark:text-slate-300">.</span>
      </p>
      <AraCommunityClosingParagraph />
    </>
  )
}
