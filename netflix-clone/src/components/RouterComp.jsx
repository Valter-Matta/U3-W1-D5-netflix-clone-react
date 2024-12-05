import { Component } from "react";
import RowOfFilms from "./RowOfFilm";
import { Row, Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Link } from "react-router-dom";

class RouterComp extends Component {
	// state = {
	// 	filmsHorror: [],
	// 	loadingHorror: true,
	// };

	getFilmsFantasy = genre => {
		fetch(`http://www.omdbapi.com/?apikey=2b484486&s=${genre}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("errore nella chiamata API");
				}
			})
			.then(data => {
				// console.log(data.Search);
				// this.setState({
				// 	filmsFantasy: data.Search,
				// 	loadingFantasy: false,
				// });
				this.props.setFilmsFantasy(data.Search);
				this.props.setloadingFantasy(false);
			})
			.catch(err => {
				console.log(err);
			});
	};
	componentDidMount() {
		this.getFilmsFantasy("star wars");
	}
	render() {
		return (
			<div>
				<h1 className="text-start text-white pt-4">La tua serie tv</h1>
				{this.props.loadingFantasy ? (
					<Spinner
						animation="border"
						className=" position-relative top-50 start-0"
						variant="light"
					/>
				) : (
					<RowOfFilms films={this.props.filmsFantasy}></RowOfFilms>
				)}
			</div>
		);
	}
}

export default RouterComp;
