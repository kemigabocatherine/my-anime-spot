import generateReducer from '../handler/reducer';

const { fetchAnime: fetchTvAnime, filterAnime: filterTvAnime, reducer } = generateReducer('tvAnime', 'tv');

export { fetchTvAnime, filterTvAnime };

export default reducer;
