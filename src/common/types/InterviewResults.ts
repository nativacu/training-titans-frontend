export interface Feedback {
    positive: Array<string>;
    negative: Array<string>;
}

export interface InterviewResults {
    feedback: Feedback;
    transcript: string[];
}