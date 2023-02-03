import React from "react";
import HomePage from "./components/Pages/HomePage";

import "./styles/index.scss";
// TODO less size bg
function App() {
	return (
		<div className="App">
			<h1 className="App__title">Recruitment task</h1>

			<HomePage />
		</div>
	);
}

export default App;
