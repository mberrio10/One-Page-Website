# Bussines/Startup One Page website

This template was develop using create-react-app boilerplate created by for 4Geeks Academy. this is a professional, full-responsive, and high performance One Page site, developed using HTML5,CSS3, Bootstrap, and React.js. you can dowload this repo overwrite and customize anything to your needs.

#### Download the boilerplate using git

```
$ git clone https://github.com/mberrio10/One-Page-Website.git
$ cd react-hello
```

##### and install the npm package:
```
$ npm install
```

## OnScroll Navbar change!

in the Navbar component you can change the `addEventlistener` to your liking 
```Javascript
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
	}
```
and you have to style the element with the inline style attribute, the value must be a JavaScript object:
```Javascript
<nav
	id="navbar-example2"
	className="navbar navbar-expand-lg fixed-top navbar-light"
	style={{
		backgroundColor: `${this.state.navchange}`,
		zIndex: "1000",
		transition: "0.6s"
	}}>
```

## Application has the React-Parallax component installed

A React Component for [parallax effect](https://reactjsexample.com/a-react-component-for-parallax-effect/). check the documentation for more effects

here is how you can use it in this repo
```Javascript
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
```
## Customize and start to see your changes!

For Windows, Mac, Linux or Gitpod, start the webpack server with live reload:
- `$ npm run start`

You can update the `styles/index.scss` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).
