import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import MovieNavbar from "./components/MovieNavbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchMovies = async (page = 1) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=af0e0517e2d3ddf210343bbb5f1e4731&language=ar&page=${page}`
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
  };

  const searchMovies = async (query) => {
    if (query === "") {
      fetchMovies();
    } else {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=af0e0517e2d3ddf210343bbb5f1e4731&language=ar&query=${query}`
      );
      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <MovieNavbar onSearch={searchMovies} />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                onPageChange={fetchMovies}
                pageCount={pageCount}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
