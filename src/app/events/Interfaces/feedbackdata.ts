export class FeedbackData {
    id: string;
    eventId: string;
    feedbackType: string;
    responses: response;
}

export class response {
    questionId: string;
    answers: string[];
}