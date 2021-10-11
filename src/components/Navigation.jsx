import React from "react";
import { Link } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";

// FontAwesome only has solid fill cart as a free icon.
// Switched user icon to more solid fill for continuity.
import { ReactComponent as Cart } from "../assets/Cart.svg";
import { ReactComponent as User } from "../assets/User.svg";

const NavContainer = styled.nav`
	color: #ffffff;

	display: flex;
	flex-flow: row nowrap;

	justify-content: space-between;
	align-content: center;
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
