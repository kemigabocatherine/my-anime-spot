import myReducer from '../handler/reducer';

const { fetchAnime: fetchMovieAnime, reducer } = myReducer('movieAnime', 'movie');

export { fetchMovieAnime };

export default reducer;
