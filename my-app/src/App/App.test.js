/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import rootReducer from '../store/reducers/reducers';

test('renders navigation bar', () => {
  const initialState = {
    users: [],
    posts: [],
    comments: [],
    loading: false,
    error: null,
  };

  const store = createStore(rootReducer, initialState);

  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

test('renders about route', async () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  await screen.findByTestId('about');
});
