import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const MovieList = ({ movies, onPageChange, pageCount }) => {
  const handlePageClick = (data) => {
    onPageChange(data.selected + 1);
  };

  return (
    <Container className="mt-4">
      <Row>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Col key={movie.id} md={4} className="mb-4">
              <Link to={`/movie/${movie.id}`}>
                <Card className="movie-card h-100 shadow">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ objectFit: "cover", height: "400px" }}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <h4 className="text-center">لا يوجد أفلام</h4>
        )}
      </Row>

      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName="pagination justify-content-center mt-4"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />
    </Container>
  );
};

export default MovieList;
