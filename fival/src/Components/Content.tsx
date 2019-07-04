import React from 'react';
import { State } from '../States/State';
import { connect } from 'react-redux';
import Menu from './Menu';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Work from './Work';
import Error from './Error';

type AppProps = State;

const Content: React.SFC<AppProps> = ({ page }) => { 
	let content = null
	switch(page.kind) {
	  case "home":
		content = <Homepage />
		break;
	  case "aboutMe":
		content = <AboutMe />
		break;
	  case "work":
		content = <Work />
		break;
	  default:
		content = <Error />
	}
  
	return (
		<React.Fragment>
			<div className="container">
    			<Menu selected={page.kind} />
			</div>
			<div className="container">
				{content}
			</div>
		</React.Fragment>
	); 
  };
  
  const mapStateToProps = (state: State): AppProps => state;
  
  export default connect(
	mapStateToProps,
	undefined
  )(Content);
  