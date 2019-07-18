import { PortfolioActions } from './Actions/PortfolioActions'
import { GameActions } from './Actions/GameActions'
import { State, Portfolio } from './States/State'
import Game from './States/Game'
import { Reducer, combineReducers } from 'redux'
import { initialState } from './Data/Data'
import { TypeActions } from './Actions/TypeActions'

const type: Reducer<'portfolio' | 'game', TypeActions> = (
    state: 'portfolio' | 'game' = initialState.type,
    action: TypeActions
): 'portfolio' | 'game' => {
    switch (action.type) {
        case 'CHANGE_TO_PORTFOLIO':
            return 'portfolio'
        case 'CHANGE_TO_GAME':
            return 'game'
        default:
            return state
    }
}

export const portfolio: Reducer<Portfolio, PortfolioActions> = (
    state: Portfolio = initialState.portfolio,
    action: PortfolioActions
): Portfolio => {
    switch (action.type) {
        case 'CHANGE_PAGE_TO_INITIAL':
            return { ...state, page: { kind: 'initial' } }
        case 'CHANGE_PAGE_TO_HOME':
            return { ...state, page: { kind: 'home' } }
        case 'CHANGE_PAGE_TO_WORK':
            return { ...state, page: { kind: 'work' } }
        case 'CHANGE_PAGE_TO_ABOUT_ME':
            return { ...state, page: { kind: 'aboutMe' } }
        default:
            return state
    }
}

export const game: Reducer<Game, GameActions> = (state: Game = initialState.game, action: GameActions): Game => {
    switch (action.type) {
        case 'TURN_OFF_TUTORIAL':
            return { ...state, tutorial: false }
        case 'TURN_ON_TUTORIAL':
            return { ...state, tutorial: true }
        case 'CHANGE_TO_NEXT_CHAPTER':
            return state
        default:
            return state
    }
}

const appReducer = combineReducers<State>({
    type,
    portfolio,
    game,
})

const rootReducer = (state: State | undefined, action: TypeActions) => appReducer(state, action)

export default rootReducer
