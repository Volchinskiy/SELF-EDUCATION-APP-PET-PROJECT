import { QuestionStateI } from "./../../../../type";
import { AnyAction } from "redux";
import {
  SELECT_QUESTION,
  NEXT_QUESTION,
  GET_ALL_QUESTION_BY_PERSON_ID_SUCCES,
} from "./../constant";

const questionState: QuestionStateI = {
  allSortedQuestion: {},
  allRepeatQuestion: [],
  selectedQuestion: null,
  lastTypeSelectedQuestion: null,
};

export function questionReducer(state = questionState, action: AnyAction) {
  switch (action.type) {
    case SELECT_QUESTION:
      if (action.payload[1]) {
        const selectedQuestion = state.allRepeatQuestion[action.payload[0]];
        return {
          ...state,
          selectedQuestion: { ...selectedQuestion, index: action.payload[0] },
          lastTypeSelectedQuestion: "Repeat",
        };
      }

      const selectedQuestion =
        state.allSortedQuestion[action.payload[2]][action.payload[0]];
      return {
        ...state,
        selectedQuestion: { ...selectedQuestion, index: action.payload[0] },
        lastTypeSelectedQuestion: "Normal",
      };
    case NEXT_QUESTION:
      let index = state.selectedQuestion!.index + 1;

      if (state.lastTypeSelectedQuestion === "Repeat") {
        if (index > state.allRepeatQuestion.length - 1) {
          return state;
        }

        const newQuestion = state.allRepeatQuestion[index];

        return {
          ...state,
          selectedQuestion: { ...newQuestion, index: index },
        };
      }

      if (index > state.allSortedQuestion[action.payload].length - 1) {
        return state;
      }

      const newQuestion = state.allSortedQuestion[action.payload][index];
      return {
        ...state,
        selectedQuestion: { ...newQuestion, index: index },
      };

    case GET_ALL_QUESTION_BY_PERSON_ID_SUCCES: {
      return {
        ...state,
        allSortedQuestion: action.payload.allSortedQuestion,
        allRepeatQuestion: action.payload.allRepeatQuestion,
        selectedQuestion: null,
      };
    }
    default:
      return state;
  }
}
