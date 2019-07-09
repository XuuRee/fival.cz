import React from 'react';
import './App.css';
import { State } from './States/State';
import { connect } from 'react-redux';
import Initial from './Components/Initial';
import Content from './Components/Content';
import Game from './Components/Game';

type AppProps = State;

/*
<div className="point1 point1-position" />
<div className="point2 point2-position" /> 
*/

const App: React.SFC<AppProps> = ({ page }) => {
  let content = null;
  switch (page.kind) {
    case "initial":
      content = <Initial />
      break;
    case "game":
      content = <Game />
      break;
    default:
      content = <Content {...page} />
  }
  
  return (
      <div className="app">
        {content}
      </div>
  ); 
};

const mapStateToProps = (state: State): AppProps => state;

export default connect(
  mapStateToProps,
  undefined
)(App);
