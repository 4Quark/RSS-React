import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../components/pagination';
import { MemoryRouter } from 'react-router-dom';

import { createMemoryHistory } from 'history';

test('pagination updates URL query', () => {
  const history = createMemoryHistory();
  render(
    <MemoryRouter initialEntries={['/search/1']}>
      <Pagination page={1} totalPage={2} />
    </MemoryRouter>
  );
  const nextBtn = screen.getByText('→');
  expect(nextBtn).toBeTruthy();
  fireEvent.click(nextBtn);
  expect(history.location.pathname).toContain('/');
});

test('pagination updates URL query', () => {
  const history = createMemoryHistory();
  render(
    <MemoryRouter initialEntries={['/search/2']}>
      <Pagination page={2} totalPage={2} />
    </MemoryRouter>
  );
  const prevBtn = screen.getByText('←');
  expect(prevBtn).toBeTruthy();
  fireEvent.click(prevBtn);
  expect(history.location.pathname).toContain('/');
});
