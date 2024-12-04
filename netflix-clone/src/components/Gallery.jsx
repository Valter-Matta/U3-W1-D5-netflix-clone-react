import { Component } from "react";
import RowOfFilms from "./RowOfFilm";
import { Row, Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Gallery extends Component {
	// state = {
	// 	filmsHorror: [],
	// 	filmsAction: [],

	// 	loadingHorror: true,
	// 	loadingAction: true,
	// };

	getFilmsAction = genre => {
		fetch(`http://www.omdbapi.com/?apikey=2b484486&s=${genre}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("errore nella chiamata API");
				}
			})
			.then(data => {
				console.log(data.Search);
				// this.setState({
				// 	filmsAction: data.Search,
				// 	loadingAction: false,
				// });
				this.props.setFilmsAction(data.Search);
				this.props.setloadingAction(false);
			})
			.catch(err => {
				console.log(err);
			});
	};
	getFilmsHorror = genre => {
		fetch(`http://www.omdbapi.com/?apikey=2b484486&s=${genre}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("errore nella chiamata API");
				}
			})
			.then(data => {
				console.log(data.Search);

				this.props.setFilmsHorror(data.Search);
				this.props.setloadingHorror(false);
			})
			.catch(err => {
				console.log(err);
			});
	};
	componentDidMount() {
		this.getFilmsHorror("Horror");
		this.getFilmsAction("starwars");
	}
	render() {
		return (
			<div className="container-fluid px-5">
				<div>
					<h1 className="text-start text-white pt-4">Paura?</h1>
					{this.props.loadingHorror ? (
						<Spinner
							animation="border"
							className=" position-relative top-50 start-0"
							variant="light"
						/>
					) : (
						<RowOfFilms films={this.props.filmsHorror}></RowOfFilms>
					)}
				</div>
				<div>
					<h1 className="text-start text-white pt-4">Action</h1>
					{this.props.loadingAction ? (
						<Spinner
							animation="border"
							className=" position-relative top-50 start-0"
							variant="light"
						/>
					) : (
						<RowOfFilms films={this.props.filmsAction}></RowOfFilms>
					)}
				</div>
			</div>
		);
	}
}

export default Gallery;
