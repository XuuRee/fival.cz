export type TurnOffTutorial = {
    readonly type: 'TURN_OFF_TUTORIAL'
}

export const turnOffTutorial = (): TurnOffTutorial => ({
    type: 'TURN_OFF_TUTORIAL',
})

export type TurnOnTutorial = {
    readonly type: 'TURN_ON_TUTORIAL'
}

export const turnOnTutorial = (): TurnOnTutorial => ({
    type: 'TURN_ON_TUTORIAL',
})

export type SetNextChapter = {
    readonly type: 'CHANGE_TO_NEXT_CHAPTER'
}

export const setNextChapter = (): SetNextChapter => ({
    type: 'CHANGE_TO_NEXT_CHAPTER',
})

export type GameActions = TurnOffTutorial | TurnOnTutorial | SetNextChapter
