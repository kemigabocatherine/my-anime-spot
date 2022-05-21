import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import pageDetailsReducer from './pageDetails/pageDetails';
import tvAnimeReducer from './anime/tvAnime';
import movieAnimeReducer from './anime/movieAnime';
import specialAnimeReducer from './anime/specialAnime';

const store = configureStore({
  reducer: {
    tvAnime: tvAnimeReducer,
    movieAnime: movieAnimeReducer,
    specialAnime: specialAnimeReducer,
    pageDetails: pageDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(logger)
  ),
});

export default store;
