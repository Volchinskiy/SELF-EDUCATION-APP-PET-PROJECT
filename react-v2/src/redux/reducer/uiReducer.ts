import { UIStateI } from "./../../../../type";
import { AnyAction } from "redux";

const UIState: UIStateI = {
  showLeftSide: false,
  showAddQuestionArea: false,
  showTheme: false,
  showQuestion: false,
  showRepeatQuestion: false,
};

export function uiReducer(state = UIState, action: AnyAction) {
  switch (action.type) {
    case "TOGGLE SHOW LEFT SIDE":
      return {
        ...state,
        showLeftSide: !state.showLeftSide,
      };
    case "TOGGLE SHOW ADD QUESTION AREA":
      return {
        ...state,
        showAddQuestionArea: !state.showAddQuestionArea,
      };
    case "TOGGLE SHOW THEME":
      return {
        ...state,
        showTheme: !state.showTheme,
      };
    case "TOGGLE SHOW QUESTION":
      return {
        ...state,
        showQuestion: !state.showQuestion,
      };
    case "TOGGLE SHOW REPEAT QUESTION":
      return {
        ...state,
        showRepeatQuestion: !state.showRepeatQuestion,
      };
    default:
      return state;
  }
}
