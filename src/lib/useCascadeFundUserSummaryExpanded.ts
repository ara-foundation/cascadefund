import { useSyncExternalStore } from 'react'
import {
  getCascadeFundUserSummaryExpanded,
  subscribeCascadeFundUserSummaryExpanded,
} from '@/lib/cascadeFundUserSummaryExpand'

export function useCascadeFundUserSummaryExpanded() {
  return useSyncExternalStore(
    subscribeCascadeFundUserSummaryExpanded,
    getCascadeFundUserSummaryExpanded,
    getCascadeFundUserSummaryExpanded,
  )
}
