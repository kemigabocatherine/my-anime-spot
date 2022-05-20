import myReducer from '../handler/reducer';

const { fetchAnime: fetchSpecialAnime, reducer } = myReducer('specialAnime', 'special');

export { fetchSpecialAnime };

export default reducer;
