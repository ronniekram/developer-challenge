import React from "react";
import { graphql } from "gatsby";

const Index = ({ data }) => {
	const petFood = data.prismicProduct;
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
