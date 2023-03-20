import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieDetail } from 'services/themoviedbAPI';
import Loader from '../components/Loader/Loader';
import pictureNotFound from '../pages/pictureNotFound.jpg';
import { Suspense } from 'react';
import { isEmpty } from 'lodash';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  DetailsInfo,
  Text,
  StyledLink,
  InfoContainer,
  ButtonBack,
} from './MovieDetails.styled';

const FilmDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    const showNotification = data => {
      if (data && movieId !== String(data)) {
        toast.error(`There is't result`);
      }
    };

    try {
      getMovieDetail(movieId)
        .then(response => {
          showNotification(response.id);
          setMovieDetail(response);
        })
        .catch(function (error) {
          console.log(error.toJSON());
          toast.error(`There is't result`);
        });
    } catch (error) {
      console.log(error.toJSON());
      toast.error(`There is't result`);
    }
  }, [movieId]);

  const {
    id,
    poster_path,
    title,
    release_date = '',
    vote_average,
    overview,
    genres,
  } = movieDetail;

  return (
    <>
      {!isEmpty(movieDetail) && movieId === String(id) && (
        <>
          <div>
            <Container>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : pictureNotFound
                }
                alt={title}
                width="400px"
              />
              <DetailsInfo>
                <h1>
                  {title} {`(${release_date.slice(0, 4)})`}
                </h1>
                <p>
                  User Score:{' '}
                  {vote_average
                    ? `${Math.round(vote_average * 10)}%`
                    : `No information`}
                </p>
                <h2>Overview</h2>
                <p>{overview}</p>

                <h2>Genres</h2>

                <p>
                  {(genres || []).length === 0
                    ? 'No information'
                    : genres.map(genre => genre.name).join(', ')}
                </p>
              </DetailsInfo>
            </Container>
          </div>
          <Text>Additional Information: </Text>
          <InfoContainer>
            <ul>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </ul>
          </InfoContainer>
        </>
      )}

      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
      <Link to={backLinkLocationRef.current}>
        <ButtonBack type="button">Go back</ButtonBack>
      </Link>
    </>
  );
};

export default FilmDetails;
