import React from 'react';
import { QuizScreen } from '../common/types';
import Button from '../components/Button';

interface QuizLandingProps {
  nextScreen: (tag: QuizScreen) => void;
}

const QuizLanding: React.FC<QuizLandingProps> = ({nextScreen}) => {

    return (
        <div className='card card--section'>
          <h2>Are you an Introvert or Extrovert?</h2>
          <Button
            onClick={() => nextScreen(QuizScreen.QUIZ)} 
          >
            I want to find out!
          </Button>
        </div>
    );
}

export default QuizLanding;