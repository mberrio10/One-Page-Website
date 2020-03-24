import React from "react";

export class Stats extends React.Component {
	render() {
		return (
			<section className="stats">
				<div className="container content">
					<div className="row sec justify-content-center">
						<h3>Our Achivements</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco.
						</p>
					</div>
					<div className="statBox justify-content-center text-center">
						<div className="box">
							<h2>1200+</h2>
							<h4>Projects</h4>
						</div>
						<div className="box">
							<h2>800+</h2>
							<h4>Happy Clients</h4>
						</div>
						<div className="box">
							<h2>150+</h2>
							<h4>Countries</h4>
						</div>
						<div className="box">
							<h2>50+</h2>
							<h4>Awards</h4>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
