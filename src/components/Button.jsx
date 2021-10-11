import React from "react";
import "normalize.css";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: auto;
  
	button {
		background-color: #da55bd;
		color: #ffffff;

		font-family: "Jura";
		font-size: 1.5rem;
		font-weight: 700;
		text-transform: uppercase;

		padding: 1rem 2.375rem;
		border-radius: 1.25rem;
    border: none;
	}
`;

// passing in the quantity for button text
const Button = ({ quantity, handleClick }) => {
  return (
    <Container>
      <button type="button" onClick={handleClick}>
				Order {quantity.text}
			</button>
    </Container>
  );
}

export default Button;
