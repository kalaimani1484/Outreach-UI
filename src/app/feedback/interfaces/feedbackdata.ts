export class FeedbackData {
    id: string
    EventId:string
    FeedbackType: string
    Rating: number
    Responses: ResponseData[];
}

export class ResponseData {
    QuestionId: string
    answers: string[];
}
