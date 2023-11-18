import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';

const store = setupStore();

vi.mock('axios');

test('list number of cards', async () => {
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
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
        ],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z',
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
  const persons = await screen.findAllByTestId('person-element');
  expect(persons.length).toBe(1);
});
