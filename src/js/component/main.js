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
				<Card
					card_text0=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    pharetra massa risus, ac dignissim nisl ullamcorper quis."
					card_text1="Aliquam scelerisque massa eget lorem blandit auctor.
                                Vivamus vitae magna interdum, vulputate tortor et, malesuada ligula."
					cardTitle="Los Simpons"
					card_text2="Los Simpson (en inglés, The Simpsons) es una serie estadounidense de comediacreated by Matt Groening. ."
					card_text3="Futurama is an American science fiction animated sitcom created by Matt Groening, that aired on Fox from March 28, 1999."
					buttonUrl0="https://en.wikipedia.org/wiki/Futurama"
				/>
			</div>
			<Footer />
		</div>
	);
}
