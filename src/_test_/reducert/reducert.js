import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Reducers
import tvAnimeReducer from '../../redux/anime/tvAnime';
import movieAnimeReducer from '../../redux/anime/movieAnime';
import specialAnimeReducer from '../../redux/anime/specialAnime';
import pageDetailsReducer from '../../redux/pageDetails/pageDetails';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        tvAnime: tvAnimeReducer,
        movieAnime: movieAnimeReducer,
        specialAnime: specialAnimeReducer,
        pageDetails: pageDetailsReducer,
      },
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
