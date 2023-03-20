import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/themoviedbAPI';

import pictureNotFound from '../pages/pictureNotFound.jpg';
import { Gallery, GalleryItem, GalleryItemImage, Title } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    try {
      getMovieCast(movieId).then(response => {
        setMovieCast(response.cast);
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }, [movieId]);

  return (
    <>
      {!movieCast.length ? (
        <p>No information</p>
      ) : (
        <div>
          <Gallery>
            {movieCast.map(({ profile_path, name, character }) => {
              return (
                <GalleryItem key={nanoid()}>
                  <GalleryItemImage
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : pictureNotFound
                    }
                    alt={name}
                  />
                  <Title>{name}</Title>
                  <Title>Character: {character}</Title>
                </GalleryItem>
              );
            })}
          </Gallery>
        </div>
      )}
    </>
  );
};

export default Cast;
