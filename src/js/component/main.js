import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Main() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
