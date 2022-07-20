import React from 'react';
import { render, screen } from '@testing-library/react';
import QuizResults from './QuizResults';
import { getExtrovertQuiz, getIntrovertQuiz } from '../common/mock';


test('should display introvert when average score below 2.5', async () => {
  let quiz = getIntrovertQuiz();
  render(<QuizResults nextScreen={() => {}} quiz={quiz} />);
  const scoreResult = screen.getByText(/Introvert/g);
  expect(scoreResult).toBeInTheDocument();
});

test('should display extrovert when average score above 2.5', async () => {
  let quiz = getExtrovertQuiz();
  render(<QuizResults nextScreen={() => {}} quiz={quiz} />);
  const scoreResult = screen.getByText(/Extrovert/g);
  expect(scoreResult).toBeInTheDocument();
});
