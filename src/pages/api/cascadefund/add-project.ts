import type { APIRoute } from 'astro'
import {
    createAddProjectRequest,
    isExistingAddProjectRequestByEmail,
} from '@/server-side/add-project-request'

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
        const fundsMethod = asRequiredString(payload?.fundsMethod)
        const projectName = asRequiredString(payload?.projectName)
        const repositoryUrl = asRequiredString(payload?.repositoryUrl)
        const projectType = asRequiredString(payload?.projectType)
        const targetAudience = asRequiredString(payload?.targetAudience)

        if (!email || !fundsMethod || !projectName || !repositoryUrl || !projectType || !targetAudience) {
            return new Response(
                JSON.stringify({ code: 'INVALID_PAYLOAD', message: 'Missing required fields.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } },
            )
        }

        const isDuplicate = await isExistingAddProjectRequestByEmail(email)
        if (isDuplicate) {
            return new Response(
                JSON.stringify({
                    code: 'DUPLICATE_EMAIL',
                    message: 'This email already submitted an add project request.',
                }),
                { status: 409, headers: { 'Content-Type': 'application/json' } },
            )
        }

        const created = await createAddProjectRequest({
            email,
            fundsMethod,
            projectName,
            repositoryUrl,
            projectType,
            targetAudience,
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
        console.error('Error handling add project request:', error)
        return new Response(
            JSON.stringify({ code: 'SERVER_ERROR', message: 'Unexpected server error.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } },
        )
    }
}
