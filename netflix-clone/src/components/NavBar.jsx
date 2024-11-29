import { Modal, ModalBody, ModalHeader, Button } from "react-bootstrap";
import React, { useState } from "react";

const NavBar = () => {
	const [showProfile, setShowProfile] = useState(false);
	const [showAccount, setShowAccount] = useState(false);

	const clickShowProfile = () => setShowProfile(true);
	const clickCloseProfile = () => setShowProfile(false);
	const clickShowAccount = () => setShowAccount(true);
	const clickCloseAccount = () => setShowAccount(false);

	return (
		<>
			<nav class="navbar navbar-expand-lg">
				<div class="container-fluid">
					<img
						class="navbar-brand"
						width="100px"
						src="./assets/logo.png"
						alt=""
					/>

					<button
						class="navbar-toggler  border-white"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon  border-white"></span>
					</button>
					<div
						class="collapse navbar-collapse d-flex flex-column flex-lg-row justify-content-center justify-content-md-between text-white"
						id="navbarTogglerDemo02"
					>
						<ul class="navbar-nav mb-2 d-flex flex-column justify-content-center flex-md-row pb-3 pb-lg-0">
							<li class="nav-item me-3 me-md-5 me-lg-0">
								<a
									class="nav-link active text-white text text-center"
									aria-current="page"
									href="#"
								>
									Home
								</a>
							</li>
							<li class="nav-item me-3 me-md-5 me-lg-0">
								<a class="nav-link text-white fw-bold text-center" href="#">
									TVShows
								</a>
							</li>
							<li class="nav-item me-3 me-md-5 me-lg-0">
								<a class="nav-link text-white text-center" aria-current="page">
									Movies
								</a>
							</li>
							<li class="nav-item me-3 me-md-5 me-lg-0">
								<a
									class="nav-link text-white text-center"
									href="#info"
									onClick={e => {
										e.preventDefault();
										clickShowProfile();
									}}
								>
									Profile
								</a>
							</li>
							<li class="nav-item me-3 me-md-5 me-lg-0">
								<a
									class="nav-link text-white text-center"
									href="#account"
									onClick={e => {
										e.preventDefault();
										clickShowAccount();
									}}
								>
									Account
								</a>
							</li>
						</ul>

						<ul class="navbar-nav mb-2 d-flex flex-row justify-content-between pt-4 pt-lg-0 flex-md-row justify-content-between">
							<li class="nav-item me-3 d-flex justify-content-center align-items-center">
								<i class="bi bi-search"></i>
							</li>
							<li class="nav-item me-3 d-flex justify-content-center align-items-center"></li>
							<li class="nav-item me-3 d-flex justify-content-center align-items-center px-4 px-lg-0">
								<a class="nav-link text-white text-center" href="#">
									KIDS
								</a>
							</li>
							<li class="nav-item me-3 d-flex justify-content-center align-items-center">
								<i class="bi bi-bell"></i>
							</li>
							<li class="nav-item d-flex justify-content-center align-items-center rounded-circle">
								<img
									class="rounded rounded-circle"
									src="./assets/3.png"
									width="45px"
									height="45px"
									alt="avatar"
								/>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Modal show={showProfile} onHide={clickCloseProfile} centered>
				<ModalHeader className="w-100 modalino" closeButton>
					<ModalBody className="w-100" onClick={clickCloseProfile}>
						<header class="p-3 text-center">
							<img src="/assets/logo.png" alt="" width="100px" />
						</header>
						<main>
							<div class="container">
								<h1>Edit Profile</h1>
								<div class="row">
									<div class="col-3 d-flex flex-column justify-content-between align-items-center">
										<div class="w-100">
											<img
												className="pt-2"
												src="/assets/3.png"
												alt=""
												width="100%"
												height="80px"
											/>
										</div>
										<div class="w-100 d-flex justify-content-center">
											<hr />

											<button id="save">SAVE</button>
										</div>
									</div>
									<div class="col-9 g-0">
										<p>Strive Student</p>
										<p>Language</p>
										<p class="inglese d-flex align-items-center mb-0 px-3">
											English <i class="fas fa-sort-down"></i>
										</p>

										<hr />
										<h3 class="fs-5">Maturity Settings:</h3>
										<p class="matu text-center">ALL MATURITY RATINGS</p>
										<p>Show titles of all maturity ratings for this profile.</p>
										<button class="scuri">EDIT</button>
										<hr />
										<h3>Autoplay Controls</h3>
										<div class="in d-flex justify-content-start align-items-center">
											<i class="fas fa-check-square"></i> Autoplay next episode
											in a series on all devices
										</div>
										<div class="in d-flex justify-content-start align-items-center">
											<i class="fas fa-check-square"></i> Autoplay previous
											while browsing on all devices
										</div>
										<hr />
										<button class="scuri">CANCEL</button>
										<button class="scuri">DELETE PROFILE</button>
									</div>
								</div>
							</div>
						</main>

						<script
							src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
							integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
							crossorigin="anonymous"
						></script>
					</ModalBody>
				</ModalHeader>
			</Modal>
			<Modal
				show={showAccount}
				onHide={clickCloseAccount}
				size="xl"
				dialogClassName="modal-dialog-fullscreen"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<ModalHeader className="modalino" closeButton>
					<h1 className=" w-100 text-center">Account</h1>
				</ModalHeader>
				<ModalBody className="modalino">
					<main>
						<div>
							<div className="row">
								<div className="col-12 col-md-4 d-flex flex-column justify-content-between align-items-center">
									<div className="w-100">
										<h5>MEMBERSHIP & BILLING</h5>
										<p>Cancel Membership</p>
									</div>
									<div className="w-100 d-flex justify-content-center">
										<hr />
										<Button id="save" variant="primary" className="mt-3">
											SAVE
										</Button>
									</div>
								</div>
								<div className="col-12 col-md-8 d-flex justify-content-between">
									<div className="d-flex flex-column justify-content-start align-items-start">
										<p>
											<strong>Strive Student</strong>
										</p>
										<p>
											<strong>Password:</strong> *********
										</p>
										<p>
											<strong>Phone:</strong> +1234567890
										</p>
										<hr />
										<p>
											<strong>Paypal:</strong> admin@strive.school
										</p>
										<hr />
									</div>
									<div className="d-flex flex-column w-75 justify-content-start align-items-end">
										<aside>Change account email</aside>
										<aside>Change password</aside>
										<aside>Change phone number</aside>
										<hr />
										<aside>Update payment info</aside>
										<aside>Billing details</aside>
										<hr />
										<aside>Redeem gift card or promo code</aside>
										<aside>Where to buy gift cards</aside>
									</div>
								</div>
							</div>
						</div>
					</main>
				</ModalBody>
			</Modal>
		</>
	);
};

export default NavBar;
