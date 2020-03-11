import React from "react";
import _ from "lodash";

export class Navbar extends React.Component {
	state = [];

	componentDidMount() {
		document.addEventListener(
			"scroll",
			_.throttle(() => {
				const colorscroll =
					window.scrollY < 100 ? "transparent" : "black";
				this.setState({ navchange: colorscroll });
			}, 100)
		);

		document.addEventListener(
			"scroll",
			_.throttle(() => {
				const fontscroll = window.scrollY < 100 ? "black" : "white";
				this.setState({ fontchange: fontscroll });
			}, 100)
		);

		document.addEventListener(
			"scroll",
			_.throttle(() => {
				const sizescroll =
					window.scrollY < 100 ? "40px 100px" : "5px 100px";
				this.setState({ sizechange: sizescroll });
			}, 100)
		);
	}
	render() {
		return (
			<nav
				className="navbar navbar-expand-lg fixed-top navbar-light"
				style={{
					backgroundColor: `${this.state.navchange}`,
					padding: `${this.state.sizechange}`,
					zIndex: "1000",
					transition: "0.6s"
				}}>
				<div className="container">
					<a
						className="navbar-brand"
						style={{
							color: `${this.state.fontchange}`
						}}
						href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-item nav-link active"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a
								className="nav-item nav-link"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#">
								Features
							</a>
							<a
								className="nav-item nav-link"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#">
								Pricing
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
