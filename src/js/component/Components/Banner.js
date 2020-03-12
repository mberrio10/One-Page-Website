import React from "react";
import backGround from "../../../img/bg.jpg";

export class Banner extends React.Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<h1 className="display-4">
					We Make <br />
					<span>business</span> spotless
				</h1>
			</div>
		);
	}
}
