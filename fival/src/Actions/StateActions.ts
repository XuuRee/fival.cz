export type SetPageToInitial = {
    readonly type: "CHANGE_PAGE_TO_INITIAL";
}

export type SetPageToHome = {
    readonly type: "CHANGE_PAGE_TO_HOME";
};
  
export type SetPageToWork = {
    readonly type: "CHANGE_PAGE_TO_WORK";
};

export type SetPageToGame = {
    readonly type: "CHANGE_PAGE_TO_GAME";
}

export type SetPageToAboutMe = {
    readonly type: "CHANGE_PAGE_TO_ABOUT_ME";
};

export const setPageToInitial = (): SetPageToInitial => ({
    type: "CHANGE_PAGE_TO_INITIAL",
});

export const setPageToHome = (): SetPageToHome => ({
    type: "CHANGE_PAGE_TO_HOME",
});

export const setPageToWork = (): SetPageToWork => ({
    type: "CHANGE_PAGE_TO_WORK",
});

export const setPageToGame = (): SetPageToGame => ({
    type: "CHANGE_PAGE_TO_GAME"
});

export const setPageToAboutMe = (): SetPageToAboutMe => ({
    type: "CHANGE_PAGE_TO_ABOUT_ME",
});

export type StateActions = SetPageToInitial | SetPageToHome | SetPageToWork | SetPageToGame | SetPageToAboutMe;