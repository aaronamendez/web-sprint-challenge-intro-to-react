// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Character from "./components/Character";
import "./App.css";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [characters, setCharacters] = useState([]);

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	useEffect(() => {
		const fetchData = () => {
			axios
				.get("https://swapi.dev/api/people")
				.then((res) => {
					console.log(res.data);
					setCharacters(res.data);
				})
				.catch((err) => {
					console.err(err);
				});
		};

		fetchData();
	}, []);

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			{characters.forEach((char) => {
				return <Character data={char} />;
			})}
		</div>
	);
};

export default App;
