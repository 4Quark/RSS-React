import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from '../pages/searchPage';

test('list empty', () => {
  render(
    <MemoryRouter initialEntries={['/search/1']}>
      <SearchPage />
    </MemoryRouter>
  );
  const emptyText = screen.getByText(/there is nothing here/i);
  expect(emptyText).toBeTruthy();
});
