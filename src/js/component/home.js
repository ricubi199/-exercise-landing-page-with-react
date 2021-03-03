import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";

//create your first component
export function Home() {
	return (
		<div class="container">
            <Navbar></Navbar>
        </div>
	);
}
