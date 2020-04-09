import React from "react";
import Image1 from "../../../img/1.jpg";
import Image2 from "../../../img/2.jpg";
import Image3 from "../../../img/3.jpg";
import Image4 from "../../../img/4.jpg";

export class Team extends React.Component {
	render() {
		return (
			<section className="sec" id="team">
				<div className="container-fluid content">
					<div className="row mxw justify-content-center">
						<h3>Meet Our Experts</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco.
						</p>
					</div>
					<div className="row row-cols-1 row-cols-md-4 text-center">
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="1.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										John Doe <br />
										<span>Creative Director.</span>
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="2.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										John Doe <br />
										<span>Creative Director.</span>
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="3.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										John Doe <br />
										<span>Creative Director.</span>
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="4.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										John Doe <br />
										<span>Creative Director.</span>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
