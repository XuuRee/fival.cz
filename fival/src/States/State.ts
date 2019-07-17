import Game from './Game'

export type Initial = {
    readonly kind: 'initial'
}

export type Home = {
    readonly kind: 'home'
}

export type Work = {
    readonly kind: 'work'
}

export type AboutMe = {
    readonly kind: 'aboutMe'
}

export type Portfolio = {
    readonly kind: 'portfolio'
    readonly page: Initial | Home | Work | AboutMe
}

export type State = {
    readonly type: 'portfolio' | 'game'
    readonly portfolio: Portfolio
    readonly game: Game
}
