import "./Hero.css";

const HeroSection = () => {
	return (
		<article>
			<div class="container-fluid px-5 text-white">
				<div class="row">
					<div class="col-12 d-flex justify-content-between align-items-center">
						<div class="d-flex justify-content-between align-items-center">
							<h1>TV Shows</h1>
							<p
								id="generi"
								class="mb-0 fw-bold d-md-flex justify-content-between align-items-center d-none"
							>
								Genres <i class="bi bi-caret-down-fill ps-3"></i>
							</p>
						</div>
						<div class="d-flex justify-content-center align-items-center">
							<div class="pe-3 d-flex justify-content-center align-items-center">
								<i class="bi bi-list fs-3 border px-2"></i>
							</div>
							<div class="pe-3 d-flex justify-content-center align-items-center">
								<i class="bi bi-three-dots-vertical fs-3 border px-2"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default HeroSection;
