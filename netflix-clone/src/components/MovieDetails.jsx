import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Routes, useParams } from "react-router-dom";

const MoviesDetails = () => {
	const params = useParams();
	console.log(params.id);

	const test = `https://striveschool-api.herokuapp.com/api/comments/tt0076759`;

	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.id}`, {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGM2NThhZDEyOTAwMTU4NzZiYzYiLCJpYXQiOjE3MzMzMjE2NzUsImV4cCI6MTczNDUzMTI3NX0.RSiO1x-7HmwjMSQVyKV3t4S6l5l0aHIUVQZyzEzpmpk",
			},
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("errroe");
				}
			})
			.then(comments => {
				console.log(comments);
				setComments(comments);
			})
			.catch(err => {
				console.log(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{comments.map(comment => (
				<ListGroup className="mt-3 w-50 mx-auto">
					<ListGroup.Item>{comment.author}</ListGroup.Item>
					<ListGroup.Item>{comment.comment}</ListGroup.Item>
					<ListGroup.Item>{comment.createdAt}</ListGroup.Item>
					<ListGroup.Item>{comment.rate}</ListGroup.Item>
				</ListGroup>
			))}
		</>
	);
};

export default MoviesDetails;
