// Write your Character component here
// Import
import React from "react";

// Create Component
const Character = (props) => {
	const { data } = props;
	return (
		<div>
			<h1>{data.name}</h1>
		</div>
	);
};

// Export
export default Character;
