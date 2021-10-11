import React from "react";
import "normalize.css";
import styled from "@emotion/styled";

// Lobster has only 1 style -- no need to specify weight
const ItemContainer = styled.div`
	padding: 0 1.875rem;
	color: #000000;

	h1 {
		font-family: "Lobster";
		font-size: 2.25rem;
		line-height: 2.1375rem;
	}

	p {
		font-family: "Jura";
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.035rem;
	}
`;

const MenuItem = ({ description, title }) => {
	// MenuItem component returns div with info about the product.

	return (
		<ItemContainer>
			<h1>{title.text}</h1>
			<p>{description.text}</p>
		</ItemContainer>
	);
};

export default MenuItem;
