import { render, screen } from '@testing-library/react';
import Home from './../pages/home';

test('renders learn react link', () => {
  render(<Home />);
  const textHeader = screen.getByText(/home/i);
  expect(textHeader).toBeTruthy();
});
