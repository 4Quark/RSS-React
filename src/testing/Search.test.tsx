import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from '../pages/searchPage';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../services/store/store';

const LSMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};

Object.defineProperty(window, 'localStorage', { value: LSMock });

test('search saves the entered value to the local storage', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchPage />
      </Provider>
    </MemoryRouter>
  );
  const searchBtn = screen.getByText('Search');
  const searchInput = screen.getByRole('textbox');
  expect(searchBtn).toBeTruthy();
  expect(searchInput).toBeTruthy();
  const testData = 'test data';
  fireEvent.change(searchInput, { target: { value: testData } });
  fireEvent.click(searchBtn);
  expect(localStorage.setItem).toHaveBeenCalled();
});

test('search value from the local storage', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchPage />
      </Provider>
    </MemoryRouter>
  );
  expect(localStorage.getItem).toHaveBeenCalled();
});
