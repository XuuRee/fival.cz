type Part = {
    readonly text: string;
}

type Chapter = {
    readonly number: number;
    readonly name: string;
    readonly parts: Part[];
}

type Important = {
    readonly workAtTheBar: boolean | null;
}

type Trivial = {
    readonly isCharacterFine: boolean | null;
}

export type Decisions = {
    readonly important: Important;
    readonly trivial: Trivial;
}

export type Game = {
    readonly kind: "game";
    readonly tutorial: boolean;
    readonly chapters: Chapter[];
    readonly decisions: Decisions;
}

export default Game;