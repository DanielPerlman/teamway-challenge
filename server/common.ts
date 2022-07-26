export enum AnswerLabel {
    A = "A",
    B = "B",
    C = "C",
    D = "D"
}

export enum QuizScreen {
    LANDING = "LANDING",
    QUIZ = "QUIZ",
    RESULTS = "RESULTS",
}

export interface AnswerScore {
    text: AnswerLabel,
    value: number
}

export interface Answer {
    label: string,
    score: AnswerScore,
    selected: boolean
}

export interface Question {
    id: number,
    title: string,
    answers: Answer[]
}

