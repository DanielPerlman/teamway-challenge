import React from 'react';
import { act, render, screen } from '@testing-library/react';
import QuizTest from './QuizTest';
import { baseQuiz } from '../common/mock';

test('shows default question and answer', async () => {
  let quiz = baseQuiz;
  render(<QuizTest handleQuizSelect={() => console.log()} nextScreen={() => {}} quiz={quiz} />);
  
  const question = screen.getByText(quiz.questions[0].title);
  const answer = screen.getByText(quiz.questions[0].answers[0].label);
  const answerSelected = screen.getByTestId('answer-0');

  expect(question).toBeInTheDocument();
  expect(answer).toBeInTheDocument();
  expect(answerSelected).toHaveClass('selected');;
});

test('should go to next question when clicking on next button', async () => {
  let quiz = baseQuiz;
  render(<QuizTest handleQuizSelect={() => console.log()} nextScreen={() => {}} quiz={quiz} />);
  
  const next = screen.getByText('Next Question');
  
  await act(() => {
    next.click();
  });

  const question = screen.getByText(quiz.questions[1].title);
  const answer = screen.getByText(quiz.questions[1].answers[0].label);

  expect(question).toBeInTheDocument();
  expect(answer).toBeInTheDocument();
});

test('should go to previous question when clicking on previous button', async () => {
  let quiz = baseQuiz;
  render(<QuizTest handleQuizSelect={() => console.log()} nextScreen={() => {}} quiz={quiz} />);
  
  const next = screen.getByText('Next Question');
  await act(() => {
    next.click();
  });

  const nextQuestion = screen.getByText(quiz.questions[1].title);
  const nextAnswer = screen.getByText(quiz.questions[1].answers[0].label);

  expect(nextQuestion).toBeInTheDocument();
  expect(nextAnswer).toBeInTheDocument();

  const previous = screen.getByText('Previous Question');
  await act(() => {
    previous.click();
  });
  
  const previousQuestion = screen.getByText(quiz.questions[0].title);
  const previousAnswer = screen.getByText(quiz.questions[0].answers[0].label);

  expect(previousQuestion).toBeInTheDocument();
  expect(previousAnswer).toBeInTheDocument();
});

test('should show see results button on last question', async () => {
  let quiz = baseQuiz;
  render(<QuizTest handleQuizSelect={() => {}} nextScreen={() => {}} quiz={quiz} />);

  
  const next = screen.getByText('Next Question');
  await act(() => {
    next.click();
  });
  await act(() => {
    next.click();
  });
  await act(() => {
    next.click();
  });
  await act(() => {
    next.click();
  });

  const nextScreen = screen.getByText('See Results');
  expect(nextScreen).toBeInTheDocument();
});

test('should select clicked answer', async () => {
  let quiz = baseQuiz;
  render(<QuizTest handleQuizSelect={() => console.log()} nextScreen={() => {}} quiz={quiz} />);
  
  const targetAnswer = screen.getByTestId('answer-2');
  await act(() => {
    targetAnswer.click();
  });
  expect(targetAnswer).toHaveClass('selected');
});
