import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { changeType, changeCategory } from '../redux/pageDetails/pageDetails';

const MenuSettings = (props) => {
  const dispatch = useDispatch();
  const { type, category } = useSelector((state) => state.pageDetails);
  const { setMenu } = props;

  const onChangeHandlerType = (event) => {
    dispatch(changeType(event.target.value));
    setMenu(false);
  };

  const onChangeHandlerCategory = (event) => {
    dispatch(changeCategory(event.target.value));
  };

  return (
    <div className="settings-menu">
      <button type="button" onClick={() => setMenu(false)}>
        <MdClose stroke="#000" fill="#000" strokeWidth="2" />
      </button>
      <form>
        <label htmlFor="type">
          <p>Anime Type</p>
          <select onChange={onChangeHandlerType} name="type" id="type" value={type} data-testid="typeSelector">
            <option value="tvAnime">Tv</option>
            <option value="movieAnime">Movie</option>
            <option value="specialAnime">Special</option>

          </select>
        </label>
        <label htmlFor="category">
          <p>Anime Category</p>
          <select onChange={onChangeHandlerCategory} name="category" id="category" value={category}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Suspense">Suspense</option>
            <option value="Romance">Romance</option>
            <option value="Slice of Life">Slice of Life</option>
            <option value="Supernatural">Supernatural</option>
          </select>
        </label>
      </form>
    </div>
  );
};

MenuSettings.propTypes = {
  setMenu: PropTypes.func.isRequired,
};

export default MenuSettings;
