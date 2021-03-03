import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron.js";

export function Main() {
	return (
		<div>
			<Navbar />
			<div class="container">
				<Jumbotron />
			</div>
		</div>
	);
}
