import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-fixed-top navbar-inverse navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<div className="navbar-nav">
					<a className="nav-link" href="#">
						Start Bootstrap
					</a>
					<a className="nav-link" href="#">
						About
					</a>
					<a className="nav-link" href="#">
						Services
					</a>
					<a className="nav-link" href="#">
						Portfolio
					</a>
					<a className="nav-link" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}
