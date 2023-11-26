import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';
import React from 'react';
import Page from '@/pages/search/[page]';

import mockRouter from 'next-router-mock';
import { vi } from 'vitest';

const store = setupStore();

vi.mock('next/router', () => vi.importActual('next-router-mock'));

const characters = {
  info: {
    count: 1,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 22,
      name: 'Aqua Rick',
      status: 'unknown',
      species: 'Humanoid',
      type: 'Fish-Person',
      gender: 'Male',
      origin: { name: 'unknown', url: '' },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/28',
      ],
      url: 'https://rickandmortyapi.com/api/character/22',
      created: '2017-11-04T22:41:07.171Z',
    },
  ],
};

test('render search', () => {
  mockRouter.push('/search/1');
  render(
    <Provider store={store}>
      <Page characters={characters} />
    </Provider>
  );
  screen.debug();
  const label = screen.getByLabelText('Items per page:', {
    selector: 'select',
  });
  expect(label).toBeTruthy();
});
