import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import './app.scss';
import AirApp from './containers/airapp';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AirApp />
    </Provider>
  );
}
