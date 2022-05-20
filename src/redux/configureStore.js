import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import tvAnimeReducer from './anime/tvAnime';
import movieAnimeReducer from './anime/movieAnime';
import specialAnimeReducer from './anime/specialAnime';

const rootReducer = combineReducers({
  tvAnime: tvAnimeReducer,
  movieAnime: movieAnimeReducer,
  specialAnime: specialAnimeReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
