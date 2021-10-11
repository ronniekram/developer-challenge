import React from "react";
import "normalize.css";
import styled from "@emotion/styled";

const ImageContainer = styled.div`
	max-height: 14.375rem;
	border-radius: 3.125rem 3.125rem 0 0;

	img {
		max-height: 14.375rem;
		width: 100%;
		border-radius: 3.125rem 3.125rem 0 0;
    clip: rect(230px, 0, 0px, 0);
    object-fit: cover;
	}
`;

const CardImage = ({ image, title }) => {
	// Component returns image of product.
	// Passing in title object to add alt text to image if alt attribute is null.
	const altText = image.alt
		? image.alt
		: `A delicious bowl of ${title.text}. Mouthwatering.`;

	return (
		<ImageContainer>
			<img src={image.url} alt={altText} />
		</ImageContainer>
	);
};

export default CardImage;
