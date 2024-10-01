import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders App component with NavBar, image banner, and Footer', async () => {
  render(<App />);

  const banner = screen.getByTestId('image-banner')
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveProperty('src', 'change-to-link-url')

  const searchForm = screen.getByTestId('form-search');
  expect(searchForm).toBeInTheDocument();
});