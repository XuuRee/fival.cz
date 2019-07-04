export type SetPageToInitial = {
    readonly type: "CHANGE_PAGE_TO_INITIAL";
}

export type SetPageToHome = {
    readonly type: "CHANGE_PAGE_TO_HOME";
};
  
export type SetPageToAboutMe = {
    readonly type: "CHANGE_PAGE_TO_ABOUT_ME";
};

export type SetPageToWork = {
    readonly type: "CHANGE_PAGE_TO_WORK";
};

export const setPageToInitial = (): SetPageToInitial => ({
    type: "CHANGE_PAGE_TO_INITIAL",
});

export const setPageToHome = (): SetPageToHome => ({
    type: "CHANGE_PAGE_TO_HOME",
});

export const setPageToAboutMe = (): SetPageToAboutMe => ({
    type: "CHANGE_PAGE_TO_ABOUT_ME",
});

export const setPageToWork = (): SetPageToWork => ({
    type: "CHANGE_PAGE_TO_WORK",
});

export type StateActions = SetPageToInitial | SetPageToHome | SetPageToAboutMe | SetPageToWork;