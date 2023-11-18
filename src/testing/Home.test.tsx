import { render, screen } from '@testing-library/react';
import Home from './../pages/home';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';

const store = setupStore();

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const textHeader = screen.getByText(/home/i);
  expect(textHeader).toBeTruthy();
});
