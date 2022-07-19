import { Quiz } from "./common";

const apiUrl = 'http://localhost:3001/api'

export const getQuiz = async () => {
    let response = await fetch(`${apiUrl}/quiz/first`);
    let data = await response.json();

    return data;
}

export const updateQuiz = async (quiz: Quiz) => {
    let response = await fetch(`${apiUrl}/quiz`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quiz),
    });
    let data = await response.json();

    return data;
}