import React from 'react';
import "../Static/Homepage.css";

const Homepage: React.SFC = () => { 
	return (
		<div className="transition">
			<div className="homepage-text homepage-text-position">
				* Lorem ipsum dolor sit amet,<br /> 
				consectetuer adipiscing elit<br />
				malesuada fames ac turpis egestas.
			</div>
			<br />
			<p className="font">Twitter / Instagram / Goodreads / Medium </p>
			<p className="font">Copyright © 2019 Filip Valchar</p>
		</div>
	); 
};

export default Homepage;