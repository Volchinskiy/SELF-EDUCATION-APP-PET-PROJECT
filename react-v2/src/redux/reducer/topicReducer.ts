import { TopicStateI } from "./../../../../type";
import { AnyAction } from "redux";

const topicState: TopicStateI = {
  allTheme: [],
  selectedTopic: [0, "Все Вопросы"],
};

export function topicReducer(state = topicState, action: AnyAction) {
  switch (action.type) {
    case "SELECT THEME":
      return {
        ...state,
        selectedTopic: action.payload,
      };
    default:
      return state;
  }
}
