import { Component } from "react";
import RowOfFilms from "./RowOfFilm";
import { Row, Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Gallery extends Component {
	state = {
		filmsFantasy: [],
		filmsHorror: [],
		filmsAction: [],
		loadingFantasy: true,
		loadingHorror: true,
		loadingAction: true,
	};
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
				console.log(data.Search);
				this.setState({ filmsFantasy: data.Search, loadingFantasy: false });
			})
			.catch(err => {
				console.log(err);
			});
	};
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
				this.setState({
					filmsAction: data.Search,
					loadingAction: false,
				});
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
				this.setState({
					filmsHorror: data.Search,
					loadingHorror: false,
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
	componentDidMount() {
		this.getFilmsFantasy("fantasy");
		this.getFilmsHorror("horror");
		this.getFilmsAction("Action");
	}
	render() {
		return (
			<div className="container-fluid px-5">
				<div>
					<h1 className="text-start text-white pt-4">Avventure</h1>
					{this.state.loadingFantasy ? (
						<Spinner
							animation="border"
							className=" position-relative top-50 start-0"
							variant="light"
						/>
					) : (
						<RowOfFilms films={this.state.filmsFantasy}></RowOfFilms>
					)}
				</div>
				<div>
					<h1 className="text-start text-white pt-4">Paura?</h1>
					{this.state.loadingHorror ? (
						<Spinner
							animation="border"
							className=" position-relative top-50 start-0"
							variant="light"
						/>
					) : (
						<RowOfFilms films={this.state.filmsHorror}></RowOfFilms>
					)}
				</div>
				<div>
					<h1 className="text-start text-white pt-4">Action</h1>
					{this.state.loadingAction ? (
						<Spinner
							animation="border"
							className=" position-relative top-50 start-0"
							variant="light"
						/>
					) : (
						<RowOfFilms films={this.state.filmsAction}></RowOfFilms>
					)}
				</div>
			</div>
		);
	}
}

export default Gallery;
