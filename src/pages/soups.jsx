import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";

const Index = ({ data }) => {
	const soup = data.prismicProduct.data;
	return (
		<>
			<Layout>
				<Card
					description={soup.description}
					image={soup.image}
					quantity={soup.quantity}
					title={soup.title}
				/>
			</Layout>
		</>
	);
};

export default Index;

export const query = graphql`
	query {
		prismicProduct(data: { type: { eq: "SOUP" } }) {
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
