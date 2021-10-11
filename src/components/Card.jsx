import React from "react";
import "normalize.css";
import styled from "@emotion/styled";
// Using these 3 components to create full menu item card.
import CardImage from "./CardImage";
import MenuItem from "./MenuItem";
import Button from "./Button";
// Use flex here - separate CardImage from Item/Button
const CardContainer = styled.div`
	background-color: #ffffff;
	margin: auto;
	width: 20.625rem;
	height: 37.5rem;
	border-radius: 3.125rem;

	display: flex;
	flex-flow: column nowrap;
	justify-items: space-between;
	align-content: center;

	box-shadow: 0px 12px 25px 0px #00000040;

	.product-info {
		margin: 1.875rem 0 1.875rem 0;
	}
`;

// Passing down graphql data to display product info
const Card = ({ description, image, quantity, title }) => {
	return (
		<CardContainer>
			<CardImage image={image} title={title} />
			<div className="product-info">
				<MenuItem description={description} title={title} />
				<Button quantity={quantity} />
			</div>
		</CardContainer>
	);
};

export default Card;
