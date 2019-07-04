import React from 'react';
import './App.css';
import { State } from './States/State';
import { connect } from 'react-redux';
import Initial from './Components/Initial';
import Content from './Components/Content';

type AppProps = State;

/*
<div className="point1 point1-position" />
<div className="point2 point2-position" /> 
*/

const App: React.SFC<AppProps> = ({ page }) => { 
  return (
      <div className="app">
        {page.kind === "initial" ? <Initial /> : <Content {...page} />}
      </div>
  ); 
};

const mapStateToProps = (state: State): AppProps => state;

export default connect(
  mapStateToProps,
  undefined
)(App);
