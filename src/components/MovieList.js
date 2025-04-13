import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieList = ({ movies, loading, title }) => {
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">جاري تحميل الأفلام...</p>
      </div>
    );
  }

  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return (
      <div className="text-center my-5">
        <h4>لا توجد أفلام متاحة</h4>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {title && <h2 className="mb-4 text-center">{title}</h2>}
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <Card className="h-100 shadow-sm">
              {movie.poster_path ? (
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  style={{ height: "400px", objectFit: "cover" }}
                />
              ) : (
                <div className="text-center py-5">لا توجد صورة</div>
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="text-muted">
                  {movie.release_date?.split("-")[0]}
                </Card.Text>
                <Link to={`/movie/${movie.id}`} className="mt-auto">
                  <Button variant="primary" block="true">
                    عرض التفاصيل
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
