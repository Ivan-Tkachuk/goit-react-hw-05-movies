import FilmDetails from "pages/FilmDetails";
import Home from "pages/Home";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import { Cast } from "./Cast";
import { Layout } from "./Layout";
import { Reviews } from "./Reviews";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="movies/:filmId" element={<FilmDetails/>} > 
      <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="movies" element={<Movies/>} />
      <Route path="movies/:filmId" element={<FilmDetails/>}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        </Route> 
      </Route>
    </Routes>
  )
};
 