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

export const POST: APIRoute = async ({ request }) => {
    try {
        const payload = await request.json()
        const email = asRequiredString(payload?.email)
        const occupation = asRequiredString(payload?.occupation)
        const workApps = asRequiredString(payload?.workApps)
        const monthlyAmount = asRequiredString(payload?.monthlyAmount)

        if (!email || !occupation || !workApps || !monthlyAmount) {
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

        const created = await createJoinWaitlistRequest({
            email,
            occupation,
            workApps,
            monthlyAmount,
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
