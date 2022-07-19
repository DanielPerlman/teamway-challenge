import React, { useEffect, useState } from 'react';
import { Quiz, QuizScreen } from '../common/types';
import Button from '../components/Button';

interface QuizResultsProps {
    nextScreen: (tag: QuizScreen) => void;
    quiz: Quiz;
}

const QuizResults: React.FC<QuizResultsProps> = ({nextScreen, quiz}) => {
    const [score, setScore] = useState<number>(0);

    const getResults = () => {
        let { questions } = quiz;
        let score = 0;

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            let { answers } = question;
            let correctAnswer = answers.find(answer => answer.selected);
            if (correctAnswer) {
                score += correctAnswer.score.value;
            }
        }
        let averageScore = score / questions.length;
        return averageScore;
    }

    useEffect(() => {
        setScore(getResults());
    }, [])


    return (
        <div className='card card--section'>
          <h2>You are an {score > 2.5 ? 'Extrovert' : 'Introvert'}!</h2>
        </div>
    );
}

export default QuizResults;