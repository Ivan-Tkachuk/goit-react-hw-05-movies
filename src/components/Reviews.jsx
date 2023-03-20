import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/themoviedbAPI';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState({});

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(response => {
        setMovieReviews(response.results);
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }, [movieId]);

  return (
    <>
      {!movieReviews.length ? (
        <p>We don`t have any rewiews on this movie</p>
      ) : (
        <div>
          <ul>
            {movieReviews.map(({ author, content }) => {
              return (
                <li key={nanoid()}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
