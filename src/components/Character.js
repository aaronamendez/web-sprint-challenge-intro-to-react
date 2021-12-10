// Write your Character component here
// Import
import React from "react";

// Create Component
const Character = (props) => {
	const { data } = props;
	return (
		<div>
			<h2>{data.name}</h2>
		</div>
	);
};

// Export
export default Character;
