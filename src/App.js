import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvAnime } from './redux/anime/tvAnime';
import Home from './components/home';
import Navbar from './components/Navbar';
import Details from './components/details';

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.tvAnime);

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchTvAnime());
    }
  }, []);

  return (
    <div className="App">
      <header>Animes</header>
    </div>
  );
}

export default App;
