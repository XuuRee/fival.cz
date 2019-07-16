import React from 'react';
import Menu from './Menu';
import Initial from './Initial';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Work from './Work';
import Error from './Error';
import * as State from "../States/State";

type PortfolioProps = State.Portfolio;

const Portfolio: React.SFC<PortfolioProps> = ({ page }) => { 
	let content = null
	switch(page.kind) {
		case "initial":
			content = <Initial />
			break;
		case "home":
			content = <Homepage />
			break;
		case "work":
			content = <Work />
			break;
		case "aboutMe":
			content = <AboutMe />
			break;
	  default:
			content = <Error />
	}
	
	const menu = page.kind !== "initial" && <Menu selected={page.kind} />;
	
	return (
		<React.Fragment>
			<div className="container">
    		{menu}
			</div>
			<div className="container">
				{content}
			</div>
		</React.Fragment>
	); 
};
  
export default Portfolio;
  