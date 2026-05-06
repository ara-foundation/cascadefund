import { create, exists } from './db'

const COLLECTION_NAME = 'join_waitlist_requests'

export interface JoinWaitlistRequestModel {
    email: string
    occupation: string
    workApps: string
    monthlyAmount: string
    /** When present, guest name collected from RPG dialog modal. */
    displayName?: string
    /** e.g. `landing` (full form) vs `dialog-panel` (email + optional name). */
    source?: string
    createdAt: number
}

function normalizeEmail(email: string): string {
    return email.trim().toLowerCase()
}

export async function isExistingJoinWaitlistRequestByEmail(email: string): Promise<boolean> {
    return await exists<JoinWaitlistRequestModel>(COLLECTION_NAME, {
        email: normalizeEmail(email),
    })
}

export async function createJoinWaitlistRequest(
    payload: Omit<JoinWaitlistRequestModel, 'email' | 'createdAt'> & { email: string },
): Promise<boolean> {
    const document: JoinWaitlistRequestModel = {
        ...payload,
        email: normalizeEmail(payload.email),
        createdAt: Date.now(),
    }

    return await create<JoinWaitlistRequestModel>(COLLECTION_NAME, document)
}
