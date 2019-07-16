type Part = {
    readonly text: string;
}

type Chapter = {
    readonly number: number;
    readonly name: string;
    readonly parts: Part[];
}

// + important, trivial decisions

type Decisions = {
    readonly workAtTheBar: boolean;
}

type Game = {
    readonly kind: "game";
    readonly tutorial: boolean;
    readonly chapters: Chapter[];
    readonly decisions: Decisions;
}

export default Game;