import React, { useState } from 'react';
import { Question, Quiz, QuizScreen } from '../common/types';
import Button from '../components/Button';
import Selector from '../components/Selector';

interface QuizProps {
    nextScreen: (tag: QuizScreen) => void;
    quiz: Quiz,
    handleQuizSelect: (questionIndex: number, answerIndex: number) => void;
}

const QuizTest: React.FC<QuizProps> = ({ handleQuizSelect, nextScreen, quiz: {questions, score}}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const isFirstQuestion = currentQuestionIndex === 0;

    let currentQuestion = questions[currentQuestionIndex];
    let { title, answers } = currentQuestion;

    const handleNextAction = () => {
        // Check if last question, increment score if so and call nextScreen otherwise
        if (isLastQuestion) {
            nextScreen(QuizScreen.RESULTS);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const handlePreviousAction = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }

    return (
        <div className='card card--section'>
            <h2 data-testid="title">{title}</h2>
            <Selector onSelect={(index) => handleQuizSelect(currentQuestionIndex, index)} options={answers} />
            <div className='actions'>
                {
                    !isFirstQuestion && (
                        <Button className='actions-item' onClick={handlePreviousAction}>
                            Previous Question
                        </Button>
                    )
                }
                <Button className='actions-item' onClick={handleNextAction}>
                    {isLastQuestion ? 'See Results' : 'Next Question'}
                </Button>
            </div>  
        </div>
    );
}

export default QuizTest;