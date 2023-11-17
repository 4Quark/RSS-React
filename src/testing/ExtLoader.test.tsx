import { render, screen } from '@testing-library/react';
import PersonPage from '../pages/person';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../services/store/store';

test('extended card loader is displayed ', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <PersonPage />
      </Provider>
    </MemoryRouter>
  );
  const loader = screen.queryByTestId('loader-element');
  expect(loader).toBeTruthy();
});
