import { create, exists } from './db'

const COLLECTION_NAME = 'maintainer_convince_feedback_requests'

export interface MaintainerConvinceFeedbackRequestModel {
  email: string
  feedback: string
  dialogList?: Array<string | number>
  createdAt: number
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

export async function isExistingMaintainerConvinceFeedbackRequestByEmail(email: string): Promise<boolean> {
  return await exists<MaintainerConvinceFeedbackRequestModel>(COLLECTION_NAME, {
    email: normalizeEmail(email),
  })
}

export async function createMaintainerConvinceFeedbackRequest(
  payload: Omit<MaintainerConvinceFeedbackRequestModel, 'email' | 'createdAt'> & { email: string },
): Promise<boolean> {
  const document: MaintainerConvinceFeedbackRequestModel = {
    ...payload,
    email: normalizeEmail(payload.email),
    createdAt: Date.now(),
  }

  return await create<MaintainerConvinceFeedbackRequestModel>(COLLECTION_NAME, document)
}
