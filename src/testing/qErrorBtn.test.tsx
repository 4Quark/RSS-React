import { fireEvent, render, screen } from '@testing-library/react';
import ErrorBtn from '../components/errorBtn';

test('error btn', async () => {
  render(<ErrorBtn />);
  const errBtn = screen.getByText(/err/i);
  expect(errBtn).toBeTruthy();
  expect(() => fireEvent.click(errBtn)).toThrowError(
    'Test error from Err button'
  );
});
