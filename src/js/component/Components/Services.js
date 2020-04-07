import React from "react";
import iconImage1 from "../../../img/icon1.png";
import iconImage2 from "../../../img/icon2.png";
import iconImage3 from "../../../img/icon3.png";

export class Services extends React.Component {
	render() {
		return (
			<section className="sec services">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<h3>What we do</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi.
						</p>
					</div>
					<div className="row justify-content-center">
						<div className="card-deck text-center">
							<div className="card">
								<img
									src="icon1.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Design</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
							<div className="card">
								<img
									src="icon2.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Development</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
							<div className="card">
								<img
									src="icon3.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Branding</h5>
									<p className="card-text">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
