import React from "react";
import { Parallax } from "react-parallax";

export class Banner extends React.Component {
	render() {
		return (
			<Parallax
				blur={{ min: -1, max: 3 }}
				bgImage={"http://placekitten.com/1500/700"}
				strength={200}>
				<div className="jumbotron jumbotron-fluid">
					<h1 className="display-4">
						Lorem ipsum <br />
						<span>dolor</span> sit amet
					</h1>
				</div>
			</Parallax>
		);
	}
}
