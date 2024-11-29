import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar></NavBar>
				<HeroSection></HeroSection>
			</header>
			<main>
				<Gallery></Gallery>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
