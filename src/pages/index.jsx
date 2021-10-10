import React from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import SEO from "../components/SEO";
import { ReactComponent as Logo } from "../assets/Logo.svg";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
const Container = styled.div`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #c0ffee;
	color: #43d1e7;

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
const Index = ({ data }) => {
  console.log(data)
	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<Logo />
				<div></div>
			</Container>
		</>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
export const productQuery = graphql`
	query {
		allPrismicProduct {
			edges {
				node {
					id
					data {
						description {
							html
							text
						}
						image {
							alt
							url
						}
						quantity {
							html
							text
						}
						title {
							html
							text
						}
					}
				}
			}
		}
	}
`;
