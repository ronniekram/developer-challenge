import React from "react";
import { graphql } from "gatsby";

const Index = ({ data }) => {
	const soup = data.prismicProduct;
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
