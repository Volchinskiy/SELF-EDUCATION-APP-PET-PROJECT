import { TopicStateI } from "./../../../../type";
import { AnyAction } from "redux";
import { SELECT_TOPIC, SET_ALL_TOPIC } from "./../constant";

const topicState: TopicStateI = {
  allTopic: [],
  selectedTopic: [0, "Все Вопросы"],
};

export function topicReducer(state = topicState, action: AnyAction): TopicStateI {
  switch (action.type) {
    case SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload,
      };
    case SET_ALL_TOPIC: {
      return {
        ...state,
        allTopic: action.payload
      }
    }
    default:
      return state;
  }
}
