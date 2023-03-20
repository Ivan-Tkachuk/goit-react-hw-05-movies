import { ButtonBack } from 'pages/MovieDetails.styled';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container } from './ErrorLink.styled';

const ErrorLink = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? `/`);

  return (
    <>
      <Container>
        <h1>Sorry, Something wrong with URL</h1>
        <Link to={backLinkLocationRef.current}>
          <ButtonBack type="button">Go back</ButtonBack>
        </Link>
      </Container>
    </>
  );
};

export default ErrorLink;
