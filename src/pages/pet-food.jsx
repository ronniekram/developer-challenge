import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";

const Index = ({ data }) => {
	const petFood = data.prismicProduct.data;
	return (
		<>
			<Layout>
				<Card
					description={petFood.description}
					image={petFood.image}
					quantity={petFood.quantity}
					title={petFood.title}
				/>
			</Layout>
		</>
	);
};

export default Index;

export const query = graphql`
	query {
		prismicProduct(data: { type: { eq: "PET FOOD" } }) {
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
