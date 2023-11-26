import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';
import Home from '@/pages';
import React from 'react';
// import Home from './../pages/index';

const store = setupStore();

test('render home', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const textHeader = screen.getByText(/home rick and morty/i);
  expect(textHeader).toBeTruthy();
});
