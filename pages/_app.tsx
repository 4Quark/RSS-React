import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';
import './../styles/globals.css';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
