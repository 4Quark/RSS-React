import axios from 'axios';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../services/store/store';

vi.mock('axios');

test('card click call API', async () => {
  const response = {
    info: {
      count: 1,
      pages: 1,
      next: 'https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive',
      prev: null,
    },
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
      },
    ],
  };
  (axios.get as jest.Mock).mockResolvedValue({
    data: response,
  });
  render(
    <MemoryRouter initialEntries={['/search/1']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  const person = await screen.findByText('Rick Sanchez');
  fireEvent.click(person);
  expect(axios.get).toHaveBeenCalled();
});
