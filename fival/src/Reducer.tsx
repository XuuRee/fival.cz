import { StateActions } from "./Actions/StateActions";
import { State } from "./States/State";
import { Reducer } from "redux";
import { initialState } from "./Data/Data";

const rootReducer: Reducer<State, StateActions> = (
    state: State = initialState,
    action: StateActions
  ): State => {
    switch (action.type) {
        case "CHANGE_PAGE_TO_HOME":
            return { ...state, page: { kind: "home" } }
        case "CHANGE_PAGE_TO_ABOUT_ME":
            return { ...state, page: { kind: "aboutMe" } }
        case "CHANGE_PAGE_TO_WORK":
            return { ...state, page: { kind: "work" } }
      default: 
        return state;
    }
  };

export default rootReducer;