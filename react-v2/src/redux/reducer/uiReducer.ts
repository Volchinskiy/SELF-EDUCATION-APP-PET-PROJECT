import { UIStateI } from "./../../../../type";
import { AnyAction } from "redux";
import {
  TOGGLE_SHOW_LEFT_SIDE,
  TOGGLE_SHOW_ADD_QUESTION_AREA,
  TOGGLE_SHOW_TOPIC,
  TOGGLE_SHOW_QUESTION,
  TOGGLE_SHOW_REPEAT_QUESTION,
} from "./../constant";

const UIState: UIStateI = {
  showLeftSide: false,
  showAddQuestionArea: false,
  showTheme: false,
  showQuestion: false,
  showRepeatQuestion: false,
};

export function uiReducer(state = UIState, action: AnyAction): UIStateI {
  switch (action.type) {
    case TOGGLE_SHOW_LEFT_SIDE:
      return {
        ...state,
        showLeftSide: !state.showLeftSide,
      };
    case TOGGLE_SHOW_ADD_QUESTION_AREA:
      return {
        ...state,
        showAddQuestionArea: !state.showAddQuestionArea,
      };
    case TOGGLE_SHOW_TOPIC:
      return {
        ...state,
        showTheme: !state.showTheme,
      };
    case TOGGLE_SHOW_QUESTION:
      return {
        ...state,
        showQuestion: !state.showQuestion,
      };
    case TOGGLE_SHOW_REPEAT_QUESTION:
      return {
        ...state,
        showRepeatQuestion: !state.showRepeatQuestion,
      };
    default:
      return state;
  }
}
