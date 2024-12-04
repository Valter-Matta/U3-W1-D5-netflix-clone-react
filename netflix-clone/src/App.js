import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouterComp from "./components/RouterComp";
import { useState } from "react";
import MoviesDetails from "./components/MovieDetails";

function App() {
	const [filmsHorror, setFilmsHorror] = useState([]);
	const [filmsAction, setFilmsAction] = useState([]);
	const [loadingHorror, setloadingHorror] = useState(true);
	const [loadingAction, setloadingAction] = useState(true);

	const [filmsFantasy, setFilmsFantasy] = useState([]);
	const [loadingFantasy, setloadingFantasy] = useState(true);
	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<NavBar></NavBar>
					<HeroSection></HeroSection>
				</header>
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<Gallery
									filmsHorror={filmsHorror}
									filmsAction={filmsAction}
									loadingHorror={loadingHorror}
									loadingAction={loadingAction}
									setFilmsHorror={setFilmsHorror}
									setFilmsAction={setFilmsAction}
									setloadingHorror={setloadingHorror}
									setloadingAction={setloadingAction}
								></Gallery>
							}
						/>
					</Routes>
					<Routes>
						<Route
							path="/tv-shows"
							element={
								<RouterComp
									loadingFantasy={loadingFantasy}
									filmsFantasy={filmsFantasy}
									setFilmsFantasy={setFilmsFantasy}
									setloadingFantasy={setloadingFantasy}
								></RouterComp>
							}
						/>
						<Route path="/tv-shows/:id" element={<MoviesDetails />} />
					</Routes>
				</main>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
