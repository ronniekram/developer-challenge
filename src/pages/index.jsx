import React from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Card from "../components/Card";

// ========= COMPONENTS =========

// ========= MAIN =========
const Index = ({ data }) => {
	const cupcake = data.prismicProduct.data;
  debugger
	return (
		<>
			<Layout>
				<Card
					description={cupcake.description}
					image={cupcake.image}
					quantity={cupcake.quantity}
					title={cupcake.title}
				/>
			</Layout>
		</>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
export const query = graphql`
	query {
		prismicProduct(data: { type: { eq: "DESSERT" } }) {
			id
			data {
				title {
					text
				}
				quantity {
					text
				}
				image {
					alt
					copyright
					url
					thumbnails
				}
				description {
					text
				}
			}
		}
	}
`;
