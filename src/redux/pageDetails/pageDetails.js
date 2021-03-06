const CHANCE_CATEGORY = 'my-anime-spot/filter/CHANCE_CATEGORY';
const CHANCE_TYPE = 'my-anime-spot/filter/CHANCE_TYPE';
const CHANCE_PAGE = 'my-anime-spot/filter/CHANCE_PAGE';

const initialState = {
  category: 'All',
  type: 'tvAnime',
  currentPage: 'Home page',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANCE_CATEGORY: {
      return { ...state, category: action.payload };
    }
    case CHANCE_TYPE: {
      return { ...state, type: action.payload };
    }
    case CHANCE_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;

const changeCategory = (category) => ({
  type: CHANCE_CATEGORY,
  payload: category,
});

const changeType = (type) => ({
  type: CHANCE_TYPE,
  payload: type,
});

const changePage = (page) => ({
  type: CHANCE_PAGE,
  payload: page,
});

export { changeCategory, changeType, changePage };
