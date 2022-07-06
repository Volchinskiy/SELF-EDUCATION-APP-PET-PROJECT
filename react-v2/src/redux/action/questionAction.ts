import {
  SELECT_QUESTION,
  NEXT_QUESTION,
  GET_ALL_QUESTION_BY_PERSON_ID_REQUEST,
  GET_ALL_QUESTION_BY_PERSON_ID_SUCCES,
  GET_ALL_QUESTION_BY_PERSON_ID_ERROR,
  QUESTION_DELETE_REQUEST,
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
    type: GET_ALL_QUESTION_BY_PERSON_ID_REQUEST,
    payload: personId,
  };
};

export const setAllQuestion = (allQuestion: allQuestionForReducer) => {
  return {
    type: GET_ALL_QUESTION_BY_PERSON_ID_SUCCES,
    payload: allQuestion,
  };
};

export const onError = () => {
  console.log("Error");
  return {
    type: GET_ALL_QUESTION_BY_PERSON_ID_ERROR,
  };
};

export const questionDeleteRequest = (personId: number, questionId: number) => {
  return {
    type: QUESTION_DELETE_REQUEST,
    payload: { personId, questionId },
  };
};
