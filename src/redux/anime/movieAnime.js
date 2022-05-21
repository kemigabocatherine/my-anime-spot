import generateReducer from '../handler/reducer';

const { fetchAnime: fetchMovieAnime, filterAnime: filterMovieAnime, reducer } = generateReducer('movieAnime', 'movie');

export { fetchMovieAnime, filterMovieAnime };

export default reducer;
