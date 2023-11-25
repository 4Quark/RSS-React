import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/App.css';
import '../styles/index.css';
import '../styles/search.css';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
