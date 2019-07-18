import { Portfolio, State } from '../States/State'
import Game from '../States/Game'

export const initialPortfolio: Portfolio = {
    kind: 'portfolio',
    page: {
        kind: 'initial',
    },
}

export const initialGame: Game = {
    kind: 'game',
    tutorial: true,
    chapters: [],
    decisions: {
        important: {
            workAtTheBar: null,
        },
        trivial: {
            isCharacterFine: null,
        },
    },
}

export const initialState: State = {
    type: 'portfolio',
    portfolio: initialPortfolio,
    game: initialGame,
}
