import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from '../pages/searchPage';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';

const store = setupStore();

test('list empty', () => {
  render(
    <MemoryRouter initialEntries={['/search/1']}>
      <Provider store={store}>
        <SearchPage />
      </Provider>
    </MemoryRouter>
  );
  const emptyText = screen.getByText(/there is nothing here/i);
  expect(emptyText).toBeTruthy();
});
