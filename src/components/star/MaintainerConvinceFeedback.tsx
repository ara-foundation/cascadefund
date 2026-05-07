'use client'

import React, { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import BasePanel from '@/components/panel/Panel'
import Button from '@/components/custom-ui/Button'
import { BorderSize, RoundedSize, ShadowSize } from '@/types/eventTypes'
import { cn } from '@/lib/utils'

const MODAL_BACKDROP_Z = 'z-[10050]'
const MODAL_SHEET_Z = 'z-[10060]'

type Phase = 'form' | 'success'

export function MaintainerConvinceFeedback({
  className,
  triggerLabel = 'Comment 💬',
}: {
  className?: string
  triggerLabel?: string
}) {
  const [open, setOpen] = useState(false)
  const [phase, setPhase] = useState<Phase>('form')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const titleId = useId()

  const resetAndClose = useCallback(() => {
    setOpen(false)
    setPhase('form')
    setEmail('')
    setFeedback('')
    setSubmitting(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetAndClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, resetAndClose])

  const submit = async () => {
    setSubmitting(true)
    console.log('[MaintainerFeedback] request', { email, feedback })
    await new Promise((r) => setTimeout(r, 500))
    console.log('[MaintainerFeedback] response success')
    setSubmitting(false)
    setPhase('success')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'ms-1 inline-flex h-8 shrink-0 items-center rounded-md border border-slate-400 bg-transparent px-3 py-1 text-sm font-medium whitespace-nowrap',
          'text-slate-700 hover:bg-slate-50 dark:border-slate-500 dark:text-slate-300 dark:hover:bg-slate-800/40',
          'align-middle focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50',
          className,
        )}
      >
        {triggerLabel}
      </button>

      {open && typeof document !== 'undefined'
        ? createPortal(
          <>
            <div
              className={cn(
                MODAL_BACKDROP_Z,
                'fixed inset-0 cursor-default bg-slate-950/35 backdrop-blur-sm dark:bg-slate-950/50',
              )}
              aria-hidden
              onClick={resetAndClose}
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={cn(
                MODAL_SHEET_Z,
                'fixed inset-x-0 bottom-0 flex max-h-[50dvh] min-h-0 w-full justify-center px-3 pb-3 sm:max-h-[50vh]',
              )}
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
                className={cn(
                  'backdrop-blur-lg',
                  'w-full max-w-[40rem]',
                  'rounded-t-2xl rounded-b-2xl border-b-2',
                  'bg-white/15 dark:bg-slate-900/25',
                  'shadow-[0_-12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_-12px_40px_rgba(0,0,0,0.35)]',
                  'flex min-h-0 max-h-[min(50dvh,100%)] flex-col sm:max-h-[min(50vh,100%)]',
                )}
              >
                <div className="relative flex shrink-0 items-start gap-3 border-b border-slate-400/25 pb-3 dark:border-white/10">
                  <h2
                    id={titleId}
                    className="min-w-0 flex-1 pr-10 text-base font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-lg"
                  >
                    {phase === 'form' ? 'Your feedback' : 'Thank you'}
                  </h2>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className={cn(
                      'absolute right-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-xl text-xl leading-none',
                      'border border-transparent text-slate-600 hover:bg-slate-950/10 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50',
                    )}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto pt-4">
                  {phase === 'form' ? (
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={(e) => {
                        e.preventDefault()
                        void submit()
                      }}
                    >
                      <div className="space-y-1.5">
                        <label htmlFor="maintainer-feedback-email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Email
                        </label>
                        <input
                          id="maintainer-feedback-email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={cn(
                            'w-full rounded-xl border border-slate-400/40 bg-white/70 px-3 py-2 text-sm text-slate-900',
                            'placeholder:text-slate-500 focus:border-sky-500/80 focus:outline-none focus:ring-2 focus:ring-sky-400/35',
                            'dark:border-slate-500/45 dark:bg-slate-950/35 dark:text-slate-100 dark:placeholder:text-slate-400',
                          )}
                          placeholder="you@example.com"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="maintainer-feedback-text" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Feedback
                        </label>
                        <textarea
                          id="maintainer-feedback-text"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          rows={5}
                          className={cn(
                            'w-full resize-y rounded-xl border border-slate-400/40 bg-white/70 px-3 py-2 text-sm text-slate-900',
                            'placeholder:text-slate-500 focus:border-sky-500/80 focus:outline-none focus:ring-2 focus:ring-sky-400/35',
                            'dark:border-slate-500/45 dark:bg-slate-950/35 dark:text-slate-100 dark:placeholder:text-slate-400',
                          )}
                          placeholder="What could we improve?"
                        />
                      </div>

                      <Button variant="primary" size="sm" disabled={submitting}>
                        {submitting ? 'Sending…' : 'Complete'}
                      </Button>
                    </form>
                  ) : (
                    <div className="flex flex-col gap-6">
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
                        Thanks for your feedback. Comeback later, I&apos;ll try to convince you!
                      </p>
                      <Button variant="secondary" size="sm" outline onClick={resetAndClose}>
                        Close
                      </Button>
                    </div>
                  )}
                </div>
              </BasePanel>
            </div>
          </>,
          document.body,
        )
        : null}
    </>
  )
}
