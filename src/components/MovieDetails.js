import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=af0e0517e2d3ddf210343bbb5f1e4731&language=ar`
      )
      .then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p className="text-center mt-5">جاري التحميل...</p>;

  return (
    <div className="container mt-5">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="img-fluid my-3"
        alt={movie.title}
      />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
