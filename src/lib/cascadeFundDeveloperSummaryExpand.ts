let expanded = false
const listeners = new Set<() => void>()

export function getCascadeFundDeveloperSummaryExpanded() {
  return expanded
}

export function setCascadeFundDeveloperSummaryExpanded(next: boolean) {
  if (expanded === next) return
  expanded = next
  for (const listener of listeners) listener()
}

export function subscribeCascadeFundDeveloperSummaryExpanded(onChange: () => void) {
  listeners.add(onChange)
  return () => void listeners.delete(onChange)
}
