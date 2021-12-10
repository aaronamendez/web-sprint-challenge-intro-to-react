import React from "react";
import styled from "styled-components";

const InfoBox = styled.div`
	&:hover {
		background-color: #727572;
	}
`;

const Info = styled.p`
	&:hover {
		color: red;
	}
`;

const BoxOfInfo = (props) => {
	const { info } = props;
	return (
		<>
			<InfoBox>
				<Info>Birth Year: {info.birth_year}</Info>
				<Info>Eye Color: {info.eye_color}</Info>
				<Info>Gender: {info.gender}</Info>
				<Info>Hair Color: {info.hair_color}</Info>
				<Info>Height: {info.height}</Info>
			</InfoBox>
		</>
	);
};

export default BoxOfInfo;
