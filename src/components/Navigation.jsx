import React from "react";
import { Link } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// FontAwesome only has solid fill cart as a free icon.
// Switched user icon to more solid fill for continuity.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShoppingCart,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.nav`
  margin: 4rem 1.875rem 0 1.875rem;
	width: 20.625rem;
	display: flex;
	flex-flow: row nowrap;

	justify-content: space-between;
	align-content: center;
  align-items: center;

	font-family: "Jura";
	font-size: 0.6875rem;

	button {
		background: transparent;
		border: none;
	}

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
				<FontAwesomeIcon
					icon={faUserCircle}
					css={css`
						color: #ffffff;
						background: #7855da;
            font-size: 1rem;
					`}
				/>
			</button>

			<Link to="/soups">Soups</Link>
			<Link to="/">Desserts</Link>
			<Link to="/pet-food">Pet Food</Link>

			<button
				type="button"
				onClick={() => console.log(`This is your cart!`)}
				name="Cart"
			>
				<FontAwesomeIcon
					icon={faShoppingCart}
					css={css`
						color: #ffffff;
						background: #7855da;
            font-size: 1rem;
					`}
				/>
			</button>
		</NavContainer>
	);
};

export default Navigation;
