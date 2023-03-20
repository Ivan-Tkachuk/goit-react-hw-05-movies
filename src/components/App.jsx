import { lazy } from "react";

// import MovieDetails from "pages/MovieDetails";
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import Cast from "./Cast";
// import Reviews from "./Reviews";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));
const ErrorLink = lazy(() => import('../pages/ErrorLink/ErrorLink'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="movies" element={<Movies/>} />
      <Route path="movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        </Route> 
      <Route path="*" element={<ErrorLink />}/>
      </Route>
    </Routes>
  )
};
 