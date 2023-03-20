import { useEffect, useState } from 'react';
import { getTrendingList } from 'services/themoviedbAPI';
import { nanoid } from 'nanoid';
import { Link, useLocation } from 'react-router-dom';
import pictureNotFound from '../pages/pictureNotFound.jpg';
import { Gallery, GalleryItem, GalleryItemImage, Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    try {
      getTrendingList().then(data => {
        setTrendingMovies(data.results);
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }, []);

  return (
    <div>
      <Gallery>
        {trendingMovies.map(movie => {
          return (
            <GalleryItem key={nanoid()}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                <GalleryItemImage
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : pictureNotFound
                  }
                  alt={movie.title}
                />
                <Title>{movie.title}</Title>
              </Link>
            </GalleryItem>
          );
        })}
      </Gallery>
    </div>
  );
};

export default Home;
