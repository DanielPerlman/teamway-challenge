import debug from 'debug';
import { AnswerScore, Question } from './common';
import db from './db.json';

const log: debug.IDebugger = debug('app:in-memory-dao');
const questions: Array<Question> = db.questions as Array<Question>;

class Database {
    questions: Array<Question> = questions;

    constructor() {
        log('Created new instance of Database');
    }

    getQuestionIndex(id: number): number {
        return this.questions.findIndex(q => q.id === id);
    }

    createQuestion(question: Question) {
        question.id = this.questions.length;
        this.questions.push(question);
        return question;
    }

    getQuestion(id: number): Question {
        return this.questions.find(question => question.id === id)!;
    }

    getQuestions(): Array<Question> {
        return this.questions;
    }

    updateQuestion(question: Question) {
        const index = this.getQuestionIndex(question.id);
        this.questions[index] = question;
        return question;
    }

    deleteQuestion(id: number) {
        const index = this.getQuestionIndex(id);
        this.questions.splice(index, 1);
        return this.questions;
    }
}

export default new Database();