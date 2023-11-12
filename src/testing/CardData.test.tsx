import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

vi.mock('axios');

test('card relevant data', async () => {
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
      <App />
    </MemoryRouter>
  );
  const person = await screen.findByText('Rick Sanchez');
  expect(person).toBeTruthy;
});
