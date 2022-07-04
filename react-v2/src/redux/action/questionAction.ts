import {
  SELECT_QUESTION,
  NEXT_QUESTION,
  ALL_QUESTION_BY_PERSON_ID_REQUEST,
  ALL_QUESTION_BY_PERSON_ID_SUCCES,
  ALL_QUESTION_BY_PERSON_ID_ERROR,
} from "./../constant";

import { allQuestionForReducer } from "./../../../../type";

export const selectQuestion = (
  index: number,
  isRepeat: boolean,
  topic?: string
) => {
  return {
    type: SELECT_QUESTION,
    payload: [index, isRepeat, topic],
  };
};

export const nextQuestion = (topic: string) => {
  return {
    type: NEXT_QUESTION,
    payload: topic,
  };
};

export const getAllQuestionByPersonId = (personId: number = 1) => {
  return {
    type: ALL_QUESTION_BY_PERSON_ID_REQUEST,
    payload: personId,
  };
};

export const setAllQuestion = (allQuestion: allQuestionForReducer) => {
  return {
    type: ALL_QUESTION_BY_PERSON_ID_SUCCES,
    payload: allQuestion,
  };
};

export const onError = () => {
  console.log("Error");
  return {
    type: ALL_QUESTION_BY_PERSON_ID_ERROR,
  };
};
