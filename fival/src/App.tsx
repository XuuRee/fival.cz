import React from 'react';
import './App.css';
import { State } from './States/State';
import { connect } from 'react-redux';

type AppProps = State;

const App: React.SFC<AppProps> = ({ page }) => { 
  let content = null
  switch(page.kind) {
    case "home":
      content = <h1>Homepage</h1>
      break;
    case "aboutMe":
      content = <h1>About me</h1>
      break;
    case "work":
      content = <h1>Work</h1>
      break;
    default:
      content = <h1>Error</h1>
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  ); 
};

const mapStateToProps = (state: State): AppProps => state;

export default connect(
  mapStateToProps,
  undefined
)(App);
