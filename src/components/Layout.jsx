import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

import { Container, Header, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </Header>
      <main>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
