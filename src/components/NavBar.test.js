import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import Button from './Button';

test('renders the NavBar with a "My Recipe" link', () => {
  const mockHandleClick = jest.fn();
  render(<NavBar />);
  render(<Button onClick={mockHandleClick} />);

  const myRecipeLink = screen.getByTestId('my-recipe');
  expect(myRecipeLink).toHaveTextContent('My Recipe');
  expect(myRecipeLink).toHaveAttribute('href', '/my-recipe');

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(mockHandleClick).toHaveBeenCalledTimes(1);
});
