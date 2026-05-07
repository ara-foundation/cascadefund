import type { APIRoute } from 'astro'
import {
    createJoinWaitlistRequest,
    isExistingJoinWaitlistRequestByEmail,
} from '@/server-side/join-waitlist-request'

function asRequiredString(value: unknown): string | null {
    if (typeof value !== 'string') {
        return null
    }

    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
}

function asOptionalTrimmed(value: unknown): string | undefined {
    if (typeof value !== 'string') {
        return undefined
    }
    const t = value.trim()
    return t.length > 0 ? t : undefined
}

function asDialogList(value: unknown): Array<string | number> {
    if (!Array.isArray(value)) {
        return []
    }
    return value.filter((item): item is string | number => typeof item === 'string' || typeof item === 'number')
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const payload = await request.json()
        const email = asRequiredString(payload?.email)
        const dialogList = asDialogList(payload?.dialogList)
        console.log('[API join-waitlist] dialogList', dialogList)

        const isMinimal = payload?.minimal === true || payload?.source === 'dialog-panel'

        if (!email) {
            return new Response(
                JSON.stringify({ code: 'INVALID_PAYLOAD', message: 'Missing required fields.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } },
            )
        }

        const isDuplicate = await isExistingJoinWaitlistRequestByEmail(email)
        if (isDuplicate) {
            return new Response(
                JSON.stringify({
                    code: 'DUPLICATE_EMAIL',
                    message: 'This email already joined the waitlist.',
                }),
                { status: 409, headers: { 'Content-Type': 'application/json' } },
            )
        }

        if (isMinimal) {
            const displayName = asOptionalTrimmed(payload?.name ?? payload?.displayName)
            const created = await createJoinWaitlistRequest({
                email,
                occupation: '—',
                workApps: '—',
                monthlyAmount: '—',
                ...(displayName ? { displayName } : {}),
                source: 'dialog-panel',
                ...(dialogList.length > 0 ? { dialogList } : {}),
            })
            if (!created) {
                return new Response(
                    JSON.stringify({ code: 'CREATE_FAILED', message: 'Failed to save request.' }),
                    { status: 500, headers: { 'Content-Type': 'application/json' } },
                )
            }
            return new Response(JSON.stringify({ success: true }), {
                status: 201,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        const occupation = asRequiredString(payload?.occupation)
        const workApps = asRequiredString(payload?.workApps)
        const monthlyAmount = asRequiredString(payload?.monthlyAmount)

        if (!occupation || !workApps || !monthlyAmount) {
            return new Response(
                JSON.stringify({ code: 'INVALID_PAYLOAD', message: 'Missing required fields.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } },
            )
        }

        const created = await createJoinWaitlistRequest({
            email,
            occupation,
            workApps,
            monthlyAmount,
            source: 'landing',
            ...(dialogList.length > 0 ? { dialogList } : {}),
        })

        if (!created) {
            return new Response(
                JSON.stringify({ code: 'CREATE_FAILED', message: 'Failed to save request.' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } },
            )
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Error handling join waitlist request:', error)
        return new Response(
            JSON.stringify({ code: 'SERVER_ERROR', message: 'Unexpected server error.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } },
        )
    }
}
