'use client'

import { MaintainerJoinRegistration } from '@/components/star/MaintainerJoinRegistration'
import { JoinWaitlistDialogRegistration } from '@/components/star/JoinWaitlistDialogRegistration'

type HeaderDialogActionType = 'join' | 'add-project'

export function HeaderDialogAction({
  type,
  className,
  dialogList = [],
}: {
  type: HeaderDialogActionType
  className?: string
  dialogList?: Array<string | number>
}) {
  if (type === 'join') {
    return <JoinWaitlistDialogRegistration className={className} dialogList={dialogList} />
  }

  return <MaintainerJoinRegistration triggerLabel="Add Project" className={className} dialogList={dialogList} />
}
