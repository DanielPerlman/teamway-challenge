import { Question } from "./types";

const apiUrl = 'http://localhost:3001/api'

export const getQuiz = async () => {
    let response = await fetch(`${apiUrl}/quiz`);
    let data = await response.json();

    return data;
}

export const updateQuestion = async (question: Question) => {
    let response = await fetch(`${apiUrl}/quiz/question`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question),
    });
    let data = await response.json();

    return data;
}