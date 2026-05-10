import { useSyncExternalStore } from 'react'
import {
  getCascadeFundDeveloperSummaryExpanded,
  subscribeCascadeFundDeveloperSummaryExpanded,
} from '@/lib/cascadeFundDeveloperSummaryExpand'

export function useCascadeFundDeveloperSummaryExpanded() {
  return useSyncExternalStore(
    subscribeCascadeFundDeveloperSummaryExpanded,
    getCascadeFundDeveloperSummaryExpanded,
    getCascadeFundDeveloperSummaryExpanded,
  )
}
