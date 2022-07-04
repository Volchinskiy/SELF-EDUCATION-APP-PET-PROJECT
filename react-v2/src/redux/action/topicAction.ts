import { SELECT_TOPIC, SET_ALL_TOPIC } from "./../constant";

export const selectTopic = (index: number, title: string) => {
  return {
    type: SELECT_TOPIC,
    payload: [index, title],
  };
};

export const setAllTopic = (allTopic: string[]) => {
  return {
    type: SET_ALL_TOPIC,
    payload: allTopic,
  };
};
