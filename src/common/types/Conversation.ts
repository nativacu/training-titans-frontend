export interface Conversation {
    target_profile_id: number,
    candidate_profile_id: number
}

export function makeConversation(id: number) {
    return {
        target_profile_id: id,
        candidate_profile_id: id
    }
}