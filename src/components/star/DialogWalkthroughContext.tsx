'use client'

import { createContext, useContext } from 'react'

export type DialogWalkthroughItem = string | number

const DialogWalkthroughContext = createContext<DialogWalkthroughItem[] | null>(null)

export function DialogWalkthroughProvider({
  value,
  children,
}: {
  value: DialogWalkthroughItem[]
  children: React.ReactNode
}) {
  return <DialogWalkthroughContext.Provider value={value}>{children}</DialogWalkthroughContext.Provider>
}

export function useDialogWalkthrough() {
  return useContext(DialogWalkthroughContext)
}
