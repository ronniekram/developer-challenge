import React from "react";
import "normalize.css";
import styled from "@emotion/styled";
// Using these 3 components to create full menu item card.
import CardImage from "./CardImage";
import MenuItem from "./MenuItem";
import Button from "./Button";

const CardContainer = styled.div`
	background-color: #ffffff;
	margin: auto;
	width: 20.625rem;
	height: 37.5rem;
	border-radius: 3.125rem;
`;

// Passing down graphql data to display product info
const Card = ({ description, image, quantity, title }) => {
	return (
		<CardContainer>
			<CardImage image={image} title={title} />
			<MenuItem description={description} title={title} />
			<Button quantity={quantity} />
		</CardContainer>
	);
};

export default Card;
