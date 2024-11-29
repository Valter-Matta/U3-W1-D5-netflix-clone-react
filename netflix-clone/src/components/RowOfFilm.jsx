import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const RowOfFilms = ({ films }) => {
	return (
		<Row className="g-3 pb-3">
			{films && films.length > 0 ? (
				films.map(film => (
					<Col key={film.imdbID} xs={12} sm={6} md={4} lg={3}>
						<Card style={{ height: "500px" }}>
							<Card.Img
								style={{ height: "350px" }}
								variant="top"
								src={film.Poster}
								alt={film.Title}
							/>
							<Card.Body className="d-flex flex-column justify-content-around">
								<Card.Title>{film.Title}</Card.Title>
								<Card.Text>Year: {film.Year}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))
			) : (
				<p>No films available</p>
			)}
		</Row>
	);
};

export default RowOfFilms;
