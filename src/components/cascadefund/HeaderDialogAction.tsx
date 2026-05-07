'use client'

import { MaintainerConvinceFeedback } from '@/components/star/MaintainerConvinceFeedback'
import { MaintainerJoinRegistration } from '@/components/star/MaintainerJoinRegistration'

type HeaderDialogActionType = 'join' | 'add-project'

export function HeaderDialogAction({
  type,
  className,
}: {
  type: HeaderDialogActionType
  className?: string
}) {
  if (type === 'join') {
    return <MaintainerJoinRegistration triggerLabel="Join" className={className} />
  }

  return <MaintainerConvinceFeedback triggerLabel="Add Project" className={className} />
}
