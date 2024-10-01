import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders the footer text and social media links', () => {
  render(<Footer />);

  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toHaveTextContent('Some footer text here');

  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');

  const xLink = screen.getByTestId('link-x');
  expect(xLink).toHaveAttribute('href', 'https://x.com');

  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com');
});

