import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import QuizTest from './sections/QuizTest';
import { Answer, AnswerScore, Quiz, QuizScreen } from './common/types';
import QuizLanding from './sections/QuizLanding';
import QuizResults from './sections/QuizResults';
import { getQuiz, updateQuiz } from './common/api';


function App() {
  const [currentQuizState, setCurrentQuizState] = React.useState<Quiz | boolean>(false);
  const [currentScreen, setCurrentScreen] = React.useState(QuizScreen.LANDING);
  
  const handleNextScreen = (tag: QuizScreen) => {
    setCurrentScreen(tag);
  }

  const handleQuizSelect = async (questionIndex: number, answerIndex: number) => {
    if (!currentQuizState) return false;

    let { questions } = currentQuizState as Quiz;
    let question = questions[questionIndex];
    question.answers.map((answer: Answer) => {
      return answer.selected = false;
    });
    questions[questionIndex].answers[answerIndex].selected = true;
    let newQuizState = { ...currentQuizState as Quiz, questions }
    newQuizState = await updateQuiz(newQuizState);

    setCurrentQuizState(newQuizState);
  }

  useEffect(() => {
    getQuiz().then((quiz: Quiz) => {
      setCurrentQuizState(quiz);
    });
  }, []);

  // get the current screen based on the currentScreen state
  let currentScreenComponent = null;
  switch (currentScreen) {
    case QuizScreen.LANDING:
      currentScreenComponent = <QuizLanding nextScreen={handleNextScreen} />;
      break;
    case QuizScreen.QUIZ:
      currentScreenComponent = <QuizTest handleQuizSelect={handleQuizSelect} nextScreen={handleNextScreen} quiz={currentQuizState as Quiz} />;
      break;
    case QuizScreen.RESULTS:
      currentScreenComponent = <QuizResults nextScreen={handleNextScreen} quiz={currentQuizState as Quiz} />;
      break;
    default:
      currentScreenComponent = <div>Unknown Screen</div>;
  }

  return (
    <div className='main'>
      {currentScreenComponent}
    </div>
  );
}

export default App;
