export type setPageToHome = {
    readonly type: "CHANGE_PAGE_TO_HOME";
};
  
export type setPageToAboutMe = {
    readonly type: "CHANGE_PAGE_TO_ABOUT_ME";
};

export type setPageToWork = {
    readonly type: "CHANGE_PAGE_TO_WORK";
};

export const setPageToHome = (): setPageToHome => ({
    type: "CHANGE_PAGE_TO_HOME",
});

export const setPageToAboutMe = (): setPageToAboutMe => ({
    type: "CHANGE_PAGE_TO_ABOUT_ME",
});

export const setPageToWork = (): setPageToWork => ({
    type: "CHANGE_PAGE_TO_WORK",
});

export type StateActions = setPageToHome | setPageToAboutMe | setPageToWork;