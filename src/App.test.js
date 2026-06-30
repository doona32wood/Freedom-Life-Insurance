import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Freedom Life Insurance Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Freedom Life Insurance/i);
  expect(headerElement).toBeInTheDocument();
});
