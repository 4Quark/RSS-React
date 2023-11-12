import axios from 'axios';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

vi.mock('axios');

test('extended card close', async () => {
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
  const responsePerson = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  };
  (axios.get as jest.Mock).mockReturnValue(response);
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
  (axios.get as jest.Mock).mockResolvedValue({
    data: responsePerson,
  });
  fireEvent.click(person);
  (axios.get as jest.Mock).mockResolvedValue({
    data: responsePerson,
  });
  const closeBtn = await screen.findByText('×');
  expect(closeBtn).toBeTruthy();
  fireEvent.click(closeBtn);
  const closeBtnNew = await screen.queryByText('×');
  expect(closeBtnNew).toBeNull();
});
