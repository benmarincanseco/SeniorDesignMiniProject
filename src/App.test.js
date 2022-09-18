import { render, screen } from '@testing-library/react';
import App from './App';

test('render text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This starter project enables you to build web application using React Native module./i);
  expect(linkElement).toBeInTheDocument();
});
