import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/themoviedbAPI';
import { nanoid } from 'nanoid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pictureNotFound from '../pages/pictureNotFound.jpg';
import { Button, Field, Form, ButtonLabel, Container } from './Movies.styled';
import { Gallery, GalleryItem, GalleryItemImage, Title } from './Home.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    const showNotification = data => {
      if (data.length === 0) {
        return toast.error(`There isn't result with name ${query}`);
      }
    };

    if (query !== '') {
      try {
        getMovieSearch(query).then(response => {
          setSearchMovies([...response.results]);

          showNotification(response.results);
        });
      } catch (error) {
        console.log('error: ', error);
      }
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.query.value === '') {
      toast.error(`Please, enter movie name`);
      return setSearchParams({});
    }

    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Field type="text" name="query" />
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>
        </Form>
      </Container>

      {query && (
        <>
          <Gallery>
            {searchMovies.map(movie => {
              return (
                <GalleryItem key={nanoid()}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
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
        </>
      )}

      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Movies;
