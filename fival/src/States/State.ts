import Game from "./Game";

export type Initial = { 
    readonly kind: "initial"
}

export type Home = { 
    readonly kind: "home"
}

export type Work = {
    readonly kind: "work"
}

export type AboutMe = {
    readonly kind: "aboutMe"
}

export type State = {
    readonly page: Initial | Home | Work | Game | AboutMe; 
};