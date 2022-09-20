import { render, screen } from '@testing-library/react';
import App from './App';

test('render text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a login page./i);
  expect(linkElement).toBeInTheDocument();
});
