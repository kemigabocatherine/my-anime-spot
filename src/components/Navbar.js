import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';
import MenuSettings from './menu';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { currentPage } = useSelector((state) => state.pageDetails);

  const clickHandler = () => {
    setMenuActive(true);
  };

  return (
    <nav>
      <Link to="/">
        <IoIosArrowBack fill="#fff" />
      </Link>
      <h1>
        { currentPage }
      </h1>
      <div>
        <button type="button">
          <FaMicrophone />
        </button>
        <button onClick={clickHandler} type="button" data-testid="settings">
          <IoMdSettings />
        </button>
      </div>
      { menuActive && <MenuSettings setMenu={setMenuActive} /> }
    </nav>
  );
};

export default Navbar;
