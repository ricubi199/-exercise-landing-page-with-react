import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card-deck pb-4">
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"
					alt="..."></img>
				<h5 className="card-title">Card tittle</h5>
				<p className="card-text">{props.card_text0}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"></img>
				<h5 className="card-title">Card tittle</h5>
				<p className="card-text">{props.card_text1}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"></img>
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.card_text2}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"></img>
				<h5 className="card-title">Card tittle</h5>
				<p className="card-text">{props.card_text3}</p>
				<div className="card-footer">
					<a
						href={props.buttonUrl0}
						className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	card_text0: PropTypes.string,
	card_text1: PropTypes.string,
	cardTitle: PropTypes.string,
	card_text2: PropTypes.string,
	card_text3: PropTypes.string,
	buttonUrl0: PropTypes.string
};
