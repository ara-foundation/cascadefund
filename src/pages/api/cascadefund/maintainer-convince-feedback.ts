import type { APIRoute } from 'astro'
import {
  createMaintainerConvinceFeedbackRequest,
  isExistingMaintainerConvinceFeedbackRequestByEmail,
} from '@/server-side/maintainer-convince-feedback-request'

function asRequiredString(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null
  }

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
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
    const feedback = asRequiredString(payload?.feedback)
    const dialogList = asDialogList(payload?.dialogList)
    console.log('[API maintainer-feedback] dialogList', dialogList)

    if (!email || !feedback) {
      return new Response(
        JSON.stringify({ code: 'INVALID_PAYLOAD', message: 'Missing required fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const isDuplicate = await isExistingMaintainerConvinceFeedbackRequestByEmail(email)
    if (isDuplicate) {
      return new Response(
        JSON.stringify({
          code: 'DUPLICATE_EMAIL',
          message: 'This email already submitted feedback.',
        }),
        { status: 409, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const created = await createMaintainerConvinceFeedbackRequest({
      email,
      feedback,
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
    console.error('Error handling maintainer feedback request:', error)
    return new Response(
      JSON.stringify({ code: 'SERVER_ERROR', message: 'Unexpected server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
