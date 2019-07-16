export type SetPortfolio = {
	readonly type: "CHANGE_TO_PORTFOLIO";
}

export const setPortfolio = (): SetPortfolio => ({
	type: "CHANGE_TO_PORTFOLIO",
});

export type SetGame = {
	readonly type: "CHANGE_TO_GAME";
}

export const setGame = (): SetGame => ({
	type: "CHANGE_TO_GAME",
});

export type TypeActions = SetPortfolio | SetGame;