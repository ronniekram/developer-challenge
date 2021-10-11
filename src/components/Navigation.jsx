import React from "react";
import { Link } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";

// FontAwesome only has solid fill cart as a free icon.
// Switched user icon to more solid fill for continuity.
import { ReactComponent as Cart } from "../assets/Cart.svg";
import { ReactComponent as User } from "../assets/User.svg";

const NavContainer = styled.nav`
	display: flex;
	flex-flow: row nowrap;

	justify-content: space-between;
	align-content: center;

	font-family: "Jura";
	font-size: 0.6875rem;

	a {
		color: #ffffff;
		text-transform: uppercase;
		text-decoration: none;
	}
`;

const Navigation = () => {
	return (
		<NavContainer>
			<button
				type="button"
				onClick={() => console.log(`This is your profile!`)}
				name="User"
			>
				<img src={User} alt="User Profile Icon" />
			</button>

			<Link to="/soups">Soups</Link>
			<Link to="/">Desserts</Link>
			<Link to="/pet-food">Pet Food</Link>

			<button
				type="button"
				onClick={() => console.log(`This is your cart!`)}
				name="Cart"
			>
				<img src={Cart} alt="Cart Icon" />
			</button>
		</NavContainer>
	);
};

export default Navigation;
