import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=af0e0517e2d3ddf210343bbb5f1e4731&language=ar`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p className="text-center mt-5">جارٍ تحميل البيانات...</p>;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fluid
            className="rounded shadow-lg"
          />
        </Col>
        <Col md={8}>
          <h2>{movie.title}</h2>
          <p>
            <strong>تاريخ الإصدار:</strong> {movie.release_date}
          </p>
          <p>
            <strong>التقييم:</strong> ⭐ {movie.vote_average}/10
          </p>
          <p>
            <strong>اللغة:</strong> {movie.original_language}
          </p>
          <p>
            <strong>مدة الفيلم:</strong> {movie.runtime} دقيقة
          </p>
          <p>
            <strong>الأنواع:</strong>{" "}
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>
          <p>
            <strong>القصة:</strong> {movie.overview}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
