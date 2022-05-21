import generateReducer from '../handler/reducer';

const { fetchAnime: fetchSpecialAnime, filterAnime: filterSpecialAnime, reducer } = generateReducer('specialAnime', 'special');

export { fetchSpecialAnime, filterSpecialAnime };

export default reducer;
