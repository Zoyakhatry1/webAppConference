import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link, Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import { routes } from "routes";

import styles from "assets/jss/material-kit-react/views/components.js";
import { faHome, faAtlas, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Components.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import NitSrinagarImage from "../../assets/img/nit_image.jpg";
import AIImage from "../../assets/img/ai_image6.jpg";
import AIImage2 from "../../assets/img/ai_image3.jpg";

const useStyles = makeStyles(styles);

export default function Components(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Header
				brand="IConIC"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 400,
					color: "",
				}}
				{...rest}
				style={{ backgroundColor: "red" }}
			/>
			<div style={{ wordSpacing: "0.1em", lineHeight: "2em", fontWeight:"normal" }}>
				<Switch>
					{routes.map((prop, key) => {
						return (
							<Route
								path={prop.path}
								component={prop.component}
								key={key}
							/>
						);
					})}
					<Route path="/" component={Components}>
						<Redirect to="/home" />
					</Route>
				</Switch>
			</div>
			<Footer />
		</div>
	);
}
