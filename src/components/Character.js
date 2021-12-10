// Write your Character component here
// Dependencies
import React from "react";
import styled from "styled-components";
// Components
import BoxOfInfo from "./BoxOfInfo";

const CharacterBody = styled.div`
	max-width: 50%;
	margin: 0 auto;
	background-color: #30302f;
	color: white;
	border: 5px solid #db882a;

	&:hover {
		border-color: crimson;
	}
`;

const Header = styled.h2`
	color: royalblue;
`;

// Create Component
const Character = (props) => {
	const { data } = props;
	return (
		<CharacterBody>
			<Header>{data.name}</Header>
			<BoxOfInfo info={data} />
		</CharacterBody>
	);
};

// Export
export default Character;
