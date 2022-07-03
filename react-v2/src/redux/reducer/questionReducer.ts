import { QuestionStateI } from "./../../../../type";
import { AnyAction } from "redux";

const questionState: QuestionStateI = {
  allSortedQuestion: {},
  allRepeatQuestion: [],
  selectedQuestion: null,
  lastTypeSelectedQuestion: null,
};

export function questionReducer(state = questionState, action: AnyAction) {
  switch (action.type) {
    case "SELECT QUESTION":
      if (action.payload[1]) {
        const selectedQuestion = state.allRepeatQuestion[action.payload[0]];
        return {
          ...state,
          SelectedQuestion: { ...selectedQuestion, index: action.payload[0] },
          LastTypeSelectedQuestion: "Repeat",
        };
      }

      const selectedQuestion =
        state.allSortedQuestion[action.payload[2]][action.payload[0]];
      return {
        ...state,
        SelectedQuestion: { ...selectedQuestion, index: action.payload[0] },
        LastTypeSelectedQuestion: "Normal",
      };
    case "NEXT QUESTION":
      let index = state.selectedQuestion!.index + 1;

      if (state.lastTypeSelectedQuestion === "Repeat") {
        if (index > state.allRepeatQuestion.length - 1) {
          return state;
        }

        const newQuestion = state.allRepeatQuestion[index];

        return {
          ...state,
          SelectedQuestion: { ...newQuestion, index: index },
        };
      }

      if (index > state.allSortedQuestion[action.payload].length - 1) {
        return state;
      }

      const newQuestion = state.allSortedQuestion[action.payload][index];
      return {
        ...state,
        SelectedQuestion: { ...newQuestion, index: index },
      };
    default:
      return state;
  }
}
