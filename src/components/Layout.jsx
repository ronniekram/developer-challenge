import React from "react";
import "normalize.css";
import styled from "@emotion/styled";
import SEO from "./SEO";
import Navigation from "./Navigation";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Container = styled.div`
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #7855da;
	color: #e5e5e5;

	.logo {
		display: flex;
		width: fit-content;
		align-self: flex-start;
		margin-left: 4.1rem;
		margin-bottom: 0.5rem;

		svg {
			width: 8.8rem;
			height: auto;
		}
	}
`;

const Layout = ({ children }) => {
	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<div className="logo">
					<Logo />
				</div>

				<div>{children}</div>

				<div>
					<Navigation />
				</div>
			</Container>
		</>
	);
};

export default Layout;
