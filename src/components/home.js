import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import Fetching and Filtering Actions
import { IoMdSettings } from 'react-icons/io';
import { fetchTvAnime, filterTvAnime } from '../redux/anime/tvAnime';
import { fetchSpecialAnime, filterSpecialAnime } from '../redux/anime/specialAnime';
import { fetchMovieAnime, filterMovieAnime } from '../redux/anime/movieAnime';
import { changePage } from '../redux/pageDetails/pageDetails';
// Import components and assets
import Anime from './Anime';
import LoadingElement from './loading';
import SorryElement from './notFound';
import image1 from '../assets/images/image1.png';
import '../styles/homepage.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { type, category } = useSelector((state) => state.pageDetails);
  const { status, dataFiltered } = useSelector((state) => state[type]);

  useEffect(() => {
    dispatch(changePage('Anime Hub'));
    const displayData = async () => {
      switch (type) {
        case 'tvAnime': {
          if (status === 'iddle') {
            dispatch(fetchTvAnime());
          }
          dispatch(filterTvAnime(category));
          break;
        }
        case 'specialAnime': {
          if (status === 'iddle') {
            dispatch(fetchSpecialAnime());
          }
          dispatch(filterSpecialAnime(category));
          break;
        }
        case 'movieAnime': {
          if (status === 'iddle') {
            dispatch(fetchMovieAnime());
          }
          dispatch(filterMovieAnime(category));
          break;
        }
        default: {
          if (status === 'iddle') {
            dispatch(fetchTvAnime());
          }
          dispatch(filterTvAnime(category));
        }
      }
    };
    displayData();
  }, [type, category]);

  return (
    <>
      {status === 'completed' ? (
        <>
          <div className="container info">
            <img className="silhouette" src={image1} alt="" />
            <p>{`Type: ${type.match(/\w+(?=Anime)/g)}`}</p>
            <p>{`Category: ${category}`}</p>
            <p className="note">
              (Click
              <IoMdSettings />
              for menu)
            </p>
            <p>{`Results: ${dataFiltered.length}`}</p>
          </div>
          <ul className="cards-container">
            {dataFiltered.length > 0 ? dataFiltered.map((anime) => (
              <li key={anime.mal_id} className="anime-card">
                <Anime
                  id={anime.mal_id}
                  imgUrl={anime.images.webp.large_image_url}
                  title={anime.title}
                  titleJapanese={anime.title_japanese}
                  score={anime.score}
                  year={anime.year}
                  genres={anime.genres}
                  type={anime.type}
                />
              </li>
            )) : <li><SorryElement /></li>}
          </ul>
        </>
      ) : <LoadingElement />}
    </>
  );
};

export default Home;
