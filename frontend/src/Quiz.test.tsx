import React from 'react';
import { render, screen } from '@testing-library/react';
import Quiz from './Quiz';

test('renders learn react link', () => {
  render(<Quiz />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
