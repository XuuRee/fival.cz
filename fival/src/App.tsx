import React from 'react'
import './App.css'
import { State } from './States/State'
import { connect } from 'react-redux'
import Portfolio from './Components/Portfolio'
import Game from './Components/Game'

type AppProps = State

/*
<div className="point1 point1-position" />
<div className="point2 point2-position" /> 
*/

const App: React.SFC<AppProps> = ({ type, portfolio, game }) => {
    return <div className="app">{type === 'portfolio' ? <Portfolio {...portfolio} /> : <Game {...game} />}</div>
}

const mapStateToProps = (state: State): AppProps => state

export default connect(
    mapStateToProps,
    undefined
)(App)
