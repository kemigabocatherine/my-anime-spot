import myReducer from '../handler/reducer';

const { fetchAnime: fetchTvAnime, reducer } = myReducer('tvAnime', 'tv');

export { fetchTvAnime };

export default reducer;
