export interface Feedback {
    positive: Array<string>;
    negative: Array<string>;
}

export interface TranscriptEntry {
    interviewer: string;
    candidate: string;
}

export interface InterviewResults {
    feedback: Feedback;
    transcript: TranscriptEntry[];
}

export function makeInterviewResults(interviewResults: Partial<InterviewResults>): InterviewResults {
    const defaultValue: InterviewResults = {
        feedback: {
            positive: [],
            negative: []
        },
        transcript: []
    }

    return {...defaultValue, ...interviewResults};
}