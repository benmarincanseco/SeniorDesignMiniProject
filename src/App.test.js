import { render, screen } from '@testing-library/react';
import App from './App';

test('render text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Twitter Bot Checker!/i);
  expect(linkElement).toBeInTheDocument();
});
