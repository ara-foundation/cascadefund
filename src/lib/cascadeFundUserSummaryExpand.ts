let expanded = false
const listeners = new Set<() => void>()

export function getCascadeFundUserSummaryExpanded() {
  return expanded
}

export function setCascadeFundUserSummaryExpanded(next: boolean) {
  if (expanded === next) return
  expanded = next
  for (const listener of listeners) listener()
}

export function subscribeCascadeFundUserSummaryExpanded(onChange: () => void) {
  listeners.add(onChange)
  return () => void listeners.delete(onChange)
}
