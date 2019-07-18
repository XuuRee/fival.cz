import React from 'react'
import Tutorial from './Game/Tutorial'
import Story from './Game/Story'
import '../Static/Game.css'
import GameProps from '../States/Game'

const Game: React.SFC<GameProps> = ({ tutorial, chapters, decisions }) => {
    return <div className="game">{tutorial ? <Tutorial /> : <Story />}</div>
}

export default Game
