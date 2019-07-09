import { Game } from "../States/Game";

export const gameInitialState: Game = {
    kind: "game",
    tutorial: true,
    chapters: [],
    decisions: {
        important: {
            workAtTheBar: null
        },
        trivial: {
            isCharacterFine: null
        }
    }
}