import React, { useEffect } from 'react';
import './App.css';
import QuizTest from './sections/QuizTest';
import { Answer, Quiz, QuizScreen } from './common/types';
import QuizLanding from './sections/QuizLanding';
import QuizResults from './sections/QuizResults';
import { getQuiz, updateQuestion } from './common/api';


function App() {
  const [currentQuizState, setCurrentQuizState] = React.useState<Quiz | boolean>(false);
  const [currentScreen, setCurrentScreen] = React.useState(QuizScreen.LANDING);
  
  // Move to next section
  const handleNextScreen = (tag: QuizScreen) => {
    setCurrentScreen(tag);
  }

  // Select target answer, update quiz
  const handleQuizSelect = async (questionIndex: number, answerIndex: number) => {
    if (!currentQuizState) return false;

    let { questions } = currentQuizState as Quiz;
    let question = questions[questionIndex];

    // Clear selected answers, update target answer to be selected
    question.answers.map((answer: Answer) => {
      return answer.selected = false;
    });
    question.answers[answerIndex].selected = true;

    // Update quiz on backend, sync currentQuizState
    let newQuestions = await updateQuestion(question);

    setCurrentQuizState(newQuestions);
  }

  // fetch quiz data on mount from server
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
