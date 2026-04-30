import { create, exists } from './db'

const COLLECTION_NAME = 'add_project_requests'

export interface AddProjectRequestModel {
    email: string
    fundsMethod: string
    projectName: string
    repositoryUrl: string
    projectType: string
    targetAudience: string
    createdAt: number
}

function normalizeEmail(email: string): string {
    return email.trim().toLowerCase()
}

export async function isExistingAddProjectRequestByEmail(email: string): Promise<boolean> {
    return await exists<AddProjectRequestModel>(COLLECTION_NAME, {
        email: normalizeEmail(email),
    })
}

export async function createAddProjectRequest(
    payload: Omit<AddProjectRequestModel, 'email' | 'createdAt'> & { email: string },
): Promise<boolean> {
    const document: AddProjectRequestModel = {
        ...payload,
        email: normalizeEmail(payload.email),
        createdAt: Date.now(),
    }

    return await create<AddProjectRequestModel>(COLLECTION_NAME, document)
}
