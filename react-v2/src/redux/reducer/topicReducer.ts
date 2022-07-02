import { TopicStateI } from "./../../../../type";
import { AnyAction } from "redux";

const topicState: TopicStateI = {
  allTheme: ["Все Вопросы", "не Все Вопросы"],
  selectedTheme: [0, "Все Вопросы"],
};

export function topicReducer(state = topicState, action: AnyAction) {
  switch (action.type) {
    case "SELECT THEME":
      return {
        ...state,
        selectedTheme: action.payload,
      };
    default:
      return state;
  }
}
