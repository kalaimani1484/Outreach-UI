export class QuestionData {
    id: string
    questionid: number
    question: string
    feedbacktype: string
    answertype: string
    answers: AnswerData[]
    active: number
}

export class AnswerData {
    id: number
    answer: string
}