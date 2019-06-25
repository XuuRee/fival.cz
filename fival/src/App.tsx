import React from 'react';
import './App.css';
import { State } from './States/State';
import { connect } from 'react-redux';
import Menu from './Components/Menu';
import Homepage from './Components/Homepage';
import AboutMe from './Components/AboutMe';
import Work from './Components/Work';
import Error from './Components/Error';

type AppProps = State;

const App: React.SFC<AppProps> = ({ page }) => { 
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
)(App);
