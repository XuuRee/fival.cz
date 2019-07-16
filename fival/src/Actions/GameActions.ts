export type SetNextChapter = {
	readonly type: "CHANGE_TO_NEXT_CHAPTER";
}

export const setNextChapter = (): SetNextChapter => ({
	type: "CHANGE_TO_NEXT_CHAPTER",
});

export type GameActions = SetNextChapter;