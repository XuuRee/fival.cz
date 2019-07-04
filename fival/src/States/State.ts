export type Initial = { 
    readonly kind: "initial"
}

export type Home = { 
    readonly kind: "home"
}

export type AboutMe = {
    readonly kind: "aboutMe"
}

export type Work = {
    readonly kind: "work"
}

export type State = {
    readonly page: Initial | Home | AboutMe | Work; 
};