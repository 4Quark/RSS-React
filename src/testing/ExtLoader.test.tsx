import axios from 'axios';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';

const store = setupStore();

vi.mock('axios');

test('extended card loader is displayed', async () => {
  const response = {
    info: {
      count: 1,
      pages: 1,
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
  const loader = screen.queryByTestId('loader-element');
  expect(loader).toBeTruthy();
});
