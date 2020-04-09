import React from "react";

export class Contact extends React.Component {
	render() {
		return (
			<section className="sec contact" id="contact">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<h3>Send Us A Message</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</div>
					<form>
						<div className="form-row nameMessage justify-content-center">
							<div className="form-group col-md-4">
								<input
									type="text"
									className="form-control"
									placeholder="Your Name"
								/>
							</div>
							<div className="form-group col-md-4">
								<input
									type="email"
									className="form-control"
									id="inputEmail4"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="form-row textMessage justify-content-center">
							<div className="form-group col-md-8">
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Message"
								/>
							</div>
						</div>
						<div className="form-row justify-content-center">
							<button type="submit" className="btn btn-light">
								Send
							</button>
						</div>
					</form>
					<div className="row iconFooter justify-content-center">
						<ul>
							<a href="#" className="fab fa-facebook" />
							<a href="#" className="fab fa-instagram" />
							<a href="#" className="fab fa-linkedin" />
						</ul>
					</div>
					<div className="row webFooter justify-content-center">
						<p
							className="card-text"
							style={{ textAlign: "center" }}>
							<small className="text-muted">
								Designed & Developed by{" "}
								<a className="ancFooter" hrf="#">
									Groovy Webs
								</a>
							</small>
						</p>
					</div>
				</div>
			</section>
		);
	}
}
