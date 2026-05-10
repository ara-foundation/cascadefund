import { cn } from '@/lib/utils'

/** Closing line shared by maintainer and non-developer landing summaries. */
export function AraCommunityClosingParagraph() {
  return (
    <p className="text-left text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
      Our community is part of{' '}
      <a
        href="https://ara.foundation"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'font-medium underline decoration-slate-500 underline-offset-[3px]',
          'text-slate-800 hover:text-sky-800 dark:text-slate-100 dark:decoration-slate-400 dark:hover:text-sky-200',
        )}
      >
        Ara
      </a>{' '}
      project with the goal to bring computer ownership to users. When you use a computer, you must feel like a god of
      technology and AI as your servant, not your equal.
    </p>
  )
}
